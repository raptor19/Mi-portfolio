import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ExperienceService} from '../../../services/experience.service';
import { Experience } from '../../../models/experience';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  validatingForm: FormGroup;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      modalFormSubscriptionName: new FormControl('', Validators.required),
      modalFormSubscriptionEmail: new FormControl('', Validators.email)
    });
  }

  // Agregar Experiencia

  onSubmit(experienceForm: NgForm) {
    this.experienceService.addExperience(experienceForm.value);
  }

  // Resetear formulario

  resetForm(experienceForm: NgForm) {
    if (experienceForm != null) {
      experienceForm.reset();
      this.experienceService.experienceSelected = new Experience();
    }
  }

}
