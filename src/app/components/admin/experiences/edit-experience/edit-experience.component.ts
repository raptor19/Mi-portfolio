import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/shared/models/experience';
import { ExperienceService } from '../../services/experience.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {
  experiences: Experience[];
  experience: Experience = {
    id: '',
    job: '',
    site: '',
    since: null,
    until: null,
    description: '',
    technologies: '',
  };
  id: string;
  constructor(private experienceService: ExperienceService,
              private flashMessages: FlashMessagesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.experienceService.getExperience(this.id).subscribe( ex => {
      this.experience = ex;
    });
    console.log(this.experience);
  }

  save({ value, valid }: { value: Experience, valid: boolean }) {
    if (!valid) {
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      value.id = this.id;
      // modificar el cliente
      this.experienceService.modifyExperience(value);
      this.flashMessages.show('Experiencia modificada!', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/experiences']);
    }
  }

  delete() {
    if (confirm('¿Seguro que desea elminar la experiencia?')) {
      this.experienceService.deleteExperience(this.experience);
      this.flashMessages.show('Experiencia eliminada!', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/experiences']);
    }
  }

}
