import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Experience } from '../models/experience';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ExperienceService {

  experiencesColeccion: AngularFirestoreCollection<Experience>;
  experienceDoc: AngularFirestoreDocument<Experience>;
  experiences: Observable<Experience[]>;
  experience: Observable<Experience>;

  constructor(private db: AngularFirestore) {
    this.experiencesColeccion = db.collection('experiences', ref => ref.orderBy('job', 'asc'));
  }

  // consultar todos las experiencias
  getExperiences(): Observable<Experience[]> {
    // Obtener las expereincias
    this.experiences = this.experiencesColeccion.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const dat = action.payload.doc.data() as Experience;
          dat.id = action.payload.doc.id;
          return dat;
        });
      })
    );
    return this.experiences;
  }

  // Agregar experiencia

  addExperience(experience: Experience) {
    this.experiencesColeccion.add(experience);
    console.log(experience);
    console.log('experiencia agregada');
  }

  // Consultar una experiencia a partir de su id

  getExperience(id: string) {
    this.experienceDoc = this.db.doc<Experience>(`experiences/${id}`);
    this.experience = this.experienceDoc.snapshotChanges().pipe(
      map(accion => {
        if (accion.payload.exists === false) {
          return null;
        } else {
          const datos = accion.payload.data() as Experience;
          datos.id = accion.payload.id;
          return datos;
        }
      })
    );
    return this.experience;
  }

  // Modificar una Experiencia

  modifyExperience(experience: Experience) {
    this.experienceDoc = this.db.doc(`experiences/${experience.id}`);
    this.experienceDoc.update(experience);
  }


  // Eliminar una experiencia

  deleteExperience(experience: Experience) {
    this.experienceDoc = this.db.doc(`experiences/${experience.id}`);
    this.experienceDoc.delete();
  }




}
