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

  @ViewChild('experienceForm', {static: false}) experienceForm: NgForm;
  @ViewChild('btnCloseAdd', {static: false}) btnCloseAdd: ElementRef;
  @ViewChild('btnCloseMod', {static: false}) btnCloseMod: ElementRef;

  constructor(private experienceService: ExperienceService,
              private flashMessages: FlashMessagesService) { }

  ngOnInit() {
    this.experienceService.getExperiences().subscribe(
      experiences => {
        this.experiences = experiences;
      });
  }

  onEdit(experience: Experience) {
    this.experienceSelected = experience;
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

  // Modificar experiencia

  modExperience() {
    if (this.experienceSelected == null) {
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      // modificar la experiencia
      alert('entro');
      this.experienceService.modifyExperience(this.experienceSelected);
      alert('entro');
      this.btnCloseMod.nativeElement.click();
    }
  }

  // Eliminar Experiencia

  deleteExperience(experience: Experience) {
    if (confirm('¿Seguro que desea elminiar la experiencia?')) {
      this.experienceService.deleteExperience(experience);
      this.flashMessages.show('Experiencia eliminada', {
        cssClass: 'alert-info',
        timeout: 4000
      });
    }
  }

}
