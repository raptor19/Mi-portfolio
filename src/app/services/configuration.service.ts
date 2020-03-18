import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Configuration } from '../models/configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  configuracionDoc: AngularFirestoreDocument<Configuration>;
  configuracion: Observable<Configuration>;

  // id unico de la coleccion de configuracion
  id = '1';

  constructor(private db: AngularFirestore) { }

  getConfiguracion(): Observable<Configuration> {
    this.configuracionDoc = this.db.doc<Configuration>(`configuracion/${this.id}`);
    this.configuracion = this.configuracionDoc.valueChanges();
    return this.configuracion;
  }

  modificarConfiguracion(configuracion: Configuration) {
    this.configuracionDoc = this.db.doc<Configuration>(`configuracion/${this.id}`);
    this.configuracionDoc.update(configuracion);
  }
}
