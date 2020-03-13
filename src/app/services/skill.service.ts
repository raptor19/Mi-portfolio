import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Skill } from '../models/skill';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SkillService {
  skillsColeccion: AngularFirestoreCollection<Skill>;
  skillDoc: AngularFirestoreDocument<Skill>;
  skills: Observable<Skill[]>;
  skill: Observable<Skill>;

  constructor(private db: AngularFirestore) {
    this.skillsColeccion = db.collection('skills', ref => ref.orderBy('name', 'asc'));
  }

  // consultar todos los skills
  getSkills(): Observable<Skill[]> {
    // Obtener los skills
    this.skills = this.skillsColeccion.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const dat = action.payload.doc.data() as Skill;
          dat.id = action.payload.doc.id;
          return dat;
        });
      })
    );
    return this.skills;
  }

  // Agregar skill

  addSkill(skill: Skill) {
    this.skillsColeccion.add(skill);
  }

  // Consultar un skill a partir de su id

  getSkill(id: string) {
    this.skillDoc = this.db.doc<Skill>(`${id}`);
    this.skill = this.skillDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const dat = action.payload.data() as Skill;
          dat.id = action.payload.id;
          return dat;
        }
      })
    );
    return this.skill;
  }

  // Modificar un Skill

  modifyProject(skill: Skill) {
    this.skillDoc = this.db.doc(`${skill.id}`);
    this.skillDoc.update(skill);
  }

  // Eliminar un skill

  deleteSkill(skill: Skill) {
    this.skillDoc = this.db.doc(`${skill.id}`);
    this.skillDoc.delete();
  }

}
