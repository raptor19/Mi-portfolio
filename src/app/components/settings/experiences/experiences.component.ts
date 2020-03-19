import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ExperienceService} from '../../../services/experience.service';
import { Experience } from '../../../models/experience';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  validatingForm: FormGroup;
  experiences: Experience[];
  experienceSelected: Experience = {
    id: '',
    job: '',
    site: '',
    since: null,
    until: null,
    description: '',
    technologies: '',
  };
  experience: Experience = {
    id: '',
    job: '',
    site: '',
    since: null,
    until: null,
    description: '',
    technologies: '',
  };
  idSelected: string;

  @ViewChild('experienceForm', {static: false}) experienceForm: NgForm;
  @ViewChild('btnCloseAdd', {static: false}) btnCloseAdd: ElementRef;

  constructor(private experienceService: ExperienceService,
              private flashMessages: FlashMessagesService) { }

  ngOnInit() {
    this.experienceService.getExperiences().subscribe(
      experiences => {
        this.experiences = experiences;
      });
  }

  // Seleccionar experiencia

  onEdit(experience: Experience) {
    this.idSelected = experience.id;
    console.log(this.idSelected);
    console.log('asdadasdadsasdasd');
    /*this.experienceService.getExperience(this.idSelected).subscribe(exp => {
      this.experienceSelected = exp;
    });*/
  }

  // Agregar Experiencia

  addExperience({value, valid}: {value: Experience, valid: boolean}) {
    if (!valid) {
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    } else {
      // Agregar la nueva experiencia
      this.experienceService.addExperience(value);
      this.experienceForm.resetForm();
      this.btnCloseAdd.nativeElement.click();
    }
  }

}
