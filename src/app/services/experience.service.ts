import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  experienceList: AngularFireList<any>;
  experienceSelected: Experience = new Experience();

  constructor(private firebase: AngularFireDatabase) { }

  // consultar todos las experiencias
  getProjects() {
    return this.experienceList = this.firebase.list('experiences');
  }

  // Agregar experiencia

  addExperience(experience: Experience) {
    this.experienceList.push({
      id: experience.id,
      job: experience.job,
      site: experience.site,
      since: experience.since,
      until: experience.until,
      description: experience.description,
      technologies: experience.technologies
    });
  }

  // Actualizar una experiencia

  updateExperience(experience: Experience) {
    this.experienceList.update(experience.id, {
      job: experience.job,
      site: experience.site,
      since: experience.since,
      until: experience.until,
      description: experience.description,
      technologies: experience.technologies
    });
  }

  // Eliminar una experiencia

  deletesExperience(id: string) {
    this.experienceList.remove(id);
  }
}
