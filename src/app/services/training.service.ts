import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Training } from '../models/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  trainingList: AngularFireList<any>;
  trainingSelected: Training = new Training();

  constructor(private firebase: AngularFireDatabase) { }

  // Traer todos los training
  getTraining() {
    return this.trainingList = this.firebase.list('trainings');
  }

  // Agregar training

  addTrainings(training: Training) {
    this.trainingList.push({
      id: training.id,
      title: training.title,
      subtitle: training.subtitle,
      detail: training.detail
    });
  }

  // Actualizar un training

  updateTrainig(training: Training) {
    this.trainingList.update(training.id, {
      title: training.title,
      subtitle: training.subtitle,
      detail: training.detail
    });
  }

  // Eliminar un training

  deletestrainig(id: string) {
    this.trainingList.remove(id);
  }

}
