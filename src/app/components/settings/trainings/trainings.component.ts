import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/services/training.service';
import { NgForm } from '@angular/forms';
import { Training } from 'src/app/models/training';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
  }

  // Agregar Formacion

  onSubmit(trainingsForm: NgForm) {
    this.trainingService.addTrainings(trainingsForm.value);
  }

  // Resetear formulario

  resetForm(trainingForm: NgForm) {
    if (trainingForm != null) {
      trainingForm.reset();
      this.trainingService.trainingSelected = new Training();
    }
  }

}
