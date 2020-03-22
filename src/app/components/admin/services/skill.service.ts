import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Skill } from '../../../shared/models/skill';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

@Injectable()
export class SkillService {
  skillsColeccion: AngularFirestoreCollection<Skill>;
  skillDoc: AngularFirestoreDocument<Skill>;
  skills: Observable<Skill[]>;
  skill: Observable<Skill>;
  filePath: any;
  dowloadUrl: Observable<string>;

  constructor(private db: AngularFirestore,
              private storage: AngularFireStorage) {
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
    let skillAux: Skill;
    skillAux = {
      name: skill.name,
      category: skill.category,
      fileRef: this.filePath,
      image: this.dowloadUrl
    };
    if (skill.id) {
      this.skillDoc = this.db.doc(`skills/${skill.id}`);
      this.skillDoc.update(skillAux);
    } else {
      this.skillsColeccion.add(skillAux);
    }
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

  // Modificar un Proyecto

  modifySkill(skill: Skill, image?: File) {
    if (image) {
      this.uploadImage(skill, image);
    } else {
      this.skillDoc = this.db.doc(`skills/${skill.id}`);
      this.skillDoc.update(skill);
    }
  }

  // Eliminar un skill

  deleteSkill(skill: Skill) {
    this.skillDoc = this.db.doc(`${skill.id}`);
    this.skillDoc.delete();
  }

  // Pre-agregar skill

  preAddAndUpdateSkill(skill: Skill, image: File): void {
    this.uploadImage(skill, image);
  }

  // Subir imagen

  private uploadImage(skill: Skill, image: File) {
    this.filePath = `image/${image.name}`;
    const fileRef = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, image);
    task.snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(urlImage => {
            this.dowloadUrl = urlImage;
            this.addSkill(skill);
          });
        })
      ).subscribe();
  }

}
