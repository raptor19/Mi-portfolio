import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Training } from '../models/training';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TrainingService {
  trainingsColeccion: AngularFirestoreCollection<Training>;
  trainingDoc: AngularFirestoreDocument<Training>;
  trainings: Observable<Training[]>;
  training: Observable<Training>;

  constructor(private db: AngularFirestore) {
    this.trainingsColeccion = db.collection('trainings', ref => ref.orderBy('title', 'asc'));
  }

  // consultar todos los trainings
  getTrainings(): Observable<Training[]> {
    // Obtener los trainings
    this.trainings = this.trainingsColeccion.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const dat = action.payload.doc.data() as Training;
          dat.id = action.payload.doc.id;
          return dat;
        });
      })
    );
    return this.trainings;
  }

  // Agregar training

  addTraining(training: Training) {
    this.trainingsColeccion.add(training);
  }

  // Consultar un training a partir de su id

  getTraining(id: string) {
    this.trainingDoc = this.db.doc<Training>(`${id}`);
    this.training = this.trainingDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const dat = action.payload.data() as Training;
          dat.id = action.payload.id;
          return dat;
        }
      })
    );
    return this.training;
  }

  // Modificar un Training

  modifyTraining(training: Training) {
    this.trainingDoc = this.db.doc(`${training.id}`);
    this.trainingDoc.update(training);
  }

  // Eliminar un Training

  deleteSkill(training: Training) {
    this.trainingDoc = this.db.doc(`${training.id}`);
    this.trainingDoc.delete();
  }

}
