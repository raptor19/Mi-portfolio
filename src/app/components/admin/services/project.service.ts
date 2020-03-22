import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Project } from '../../../shared/models/project';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

@Injectable()
export class ProjectService {

  projectsColeccion: AngularFirestoreCollection<Project>;
  projectDoc: AngularFirestoreDocument<Project>;
  projects: Observable<Project[]>;
  project: Observable<Project>;
  filePath: any;
  dowloadUrl: Observable<string>;

  constructor(private db: AngularFirestore,
              private storage: AngularFireStorage) {
                this.projectsColeccion = db.collection('proyects', ref => ref.orderBy('title', 'asc'));
  }

  // Consultar todos los proyectos

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
    let proyectAux: Project;
    proyectAux = {
      title: project.title,
      urlGit: project.urlGit,
      urlWeb: project.urlWeb,
      fileRef: this.filePath,
      description: project.description,
      technologies: project.technologies,
      image: this.dowloadUrl
    };
    if (project.id) {
      this.projectDoc = this.db.doc(`proyects/${project.id}`);
      this.projectDoc.update(proyectAux);
    } else {
      this.projectsColeccion.add(proyectAux);
    }
  }

  // Consultar un proyecto a partir de su id

  getProject(id: string) {
    this.projectDoc = this.db.doc<Project>(`proyects/${id}`);
    this.project = this.projectDoc.snapshotChanges().pipe(
      map(accion => {
        if (accion.payload.exists === false) {
          return null;
        } else {
          const datos = accion.payload.data() as Project;
          datos.id = accion.payload.id;
          return datos;
        }
      })
    );
    return this.project;
  }

  // Modificar un Proyecto

  modifyProject(project: Project, image?: File) {
    if (image) {
      this.uploadImage(project, image);
    } else {
      this.projectDoc = this.db.doc(`proyects/${project.id}`);
      this.projectDoc.update(project);
    }
  }


  // Eliminar un Proyecto

  deleteProject(project: Project) {
    this.projectDoc = this.db.doc(`proyects/${project.id}`);
    this.projectDoc.delete();
  }

  // Pre-agregar proyecto

  preAddAndUpdatePost(project: Project, image: File): void {
    this.uploadImage(project, image);
  }

  // Subir imagen

  private uploadImage(project: Project, image: File) {
    this.filePath = `image/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            this.dowloadUrl = urlImage;
            this.addProject(project);
          });
        })
      ).subscribe();
  }

}
