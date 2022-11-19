import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";// ⇐ Acceder a Firebase

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  /*
  Declaramos el Servicio, de conexion a BBDD y Gestion de los datos
  -CREATE(C) -> Altas de datos
  -READ(R) -> Listados de Datos, consultas o busquedas, todos
  -UPADATE(U) -> Modificaciones y cambios
  -DELETE(D) -> Eliminar Datos
  */
  constructor(private angularFirestore: AngularFirestore) { }

  public todosAmigos(): any {
    return this.angularFirestore.collection('agenda').snapshotChanges();
  }
  public buscarAmigos(id: string): any {
    return this.angularFirestore.collection('agenda').doc(id).snapshotChanges();
  }
  public altaAmigo(nuevo: any): any {
    return this.angularFirestore.collection('agenda').add(nuevo);
  }
  public borrarAmigo(id: string): any {
    return this.angularFirestore.collection('agenda').doc(id).delete();
  }
  public modificarAmigo(id: string, data: any): any {
    return this.angularFirestore.collection('agenda').doc(id).set(data);
  }



}
