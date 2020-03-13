import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Project } from '../models/project';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProjectService {

  projectsColeccion: AngularFirestoreCollection<Project>;
  projectDoc: AngularFirestoreDocument<Project>;
  projects: Observable<Project[]>;
  project: Observable<Project>;

  constructor(private db: AngularFirestore) {
    this.projectsColeccion = db.collection('projects', ref => ref.orderBy('title', 'asc'));
  }

  // consultar todos los projectos
  getProjects(): Observable<Project[]> {
    // Obtener los proyectos
    this.projects = this.projectsColeccion.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const dat = action.payload.doc.data() as Project;
          dat.id = action.payload.doc.id;
          return dat;
        });
      })
    );
    return this.projects;
  }

  // Agregar proyecto

  addProject(project: Project) {
    this.projectsColeccion.add(project);
  }

  // Consultar un proyecto a partir de su id

  getProject(id: string) {
    this.projectDoc = this.db.doc<Project>(`${id}`);
    this.project = this.projectDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const dat = action.payload.data() as Project;
          dat.id = action.payload.id;
          return dat;
        }
      })
    );
    return this.project;
  }

  // Modificar un Proyecto

  modifyProject(project: Project) {
    this.projectDoc = this.db.doc(`${project.id}`);
    this.projectDoc.update(project);
  }

  // Eliminar un proyecto

  deleteExperience(project: Project) {
    this.projectDoc = this.db.doc(`${project.id}`);
    this.projectDoc.delete();
  }


}
