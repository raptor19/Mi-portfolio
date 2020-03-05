import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skillList: AngularFireList<any>;
  skillSelected: Skill = new Skill();

  constructor(private firebase: AngularFireDatabase ) { }

  // Traer todos los skills
  getProjects() {
    return this.skillList = this.firebase.list('skills');
  }

  // Agregar skill

  addSkill(skill: Skill) {
    this.skillList.push({
      id: skill.id,
      category: skill.category,
      name: skill.name,
      image: skill.image
    });
  }

  // Actualizar un skill

  updateSkill(skill: Skill) {
    this.skillList.update(skill.id, {
      category: skill.category,
      name: skill.name,
      image: skill.image
    });
  }

  // Eliminar un skill

  deleteskill(id: string) {
    this.skillList.remove(id);
  }

}
