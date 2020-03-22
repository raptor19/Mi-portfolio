import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/components/admin/services/training.service';
import { NgForm } from '@angular/forms';
import { Training } from 'src/app/shared/models/training';

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

  }

  // Resetear formulario

  resetForm(trainingForm: NgForm) {

  }

}
