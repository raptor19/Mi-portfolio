import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectList: AngularFireList<any>;
  projectSelected: Project = new Project();

  constructor(private firebase: AngularFireDatabase ) { }

  // Traer todos los proyectos
  getProjects() {
    return this.projectList = this.firebase.list('projects');
  }

  // Agregar proyecto
  addProject(project: Project) {
    this.projectList.push({
      id: project.id,
      title: project.title,
      description: project.description,
      technologies: project.technologies,
      urlWeb: project.urlWeb,
      urlGit: project.urlGit,
      image: project.image

    });
  }

  // Actualizar un proyecto
  updateProject(project: Project) {
    this.projectList.update(project.id, {
      title: project.title,
      description: project.description,
      technologies: project.technologies,
      urlWeb: project.urlWeb,
      urlGit: project.urlGit,
      image: project.image
    });
  }

  // Eliminar un proyecto

  deleteProject(id: string) {
    this.projectList.remove(id);
  }


}
