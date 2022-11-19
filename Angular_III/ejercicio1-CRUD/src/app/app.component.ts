import { Component,OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgendaService } from './services/agenda.service';//⇐ Importar la vinculacion del servicio

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ejercicio1-CRUD';
  contactos: any[] = null;
  id: string = "";
  amigo: any;
  activarModificacion: boolean = false;

  amigoForm = new FormGroup({
    nombre: new FormControl('', Validators.minLength(3)),
    telefono: new FormControl('', Validators.pattern('[6-7][0-9]{8}'))
  });

  constructor(private agendaService: AgendaService) { }

  alta() {
    this.agendaService.altaAmigo(this.amigoForm.value).then(() => {
      alert('alta creada');
      this.amigoForm.reset();
      window.location.href = '/';//trabaja como cadena de texto, redirige el objeto a la ubicacion del doc
    }, (error) => {
      console.log(error);
    });
  }

  guardar() {
    this.agendaService.modificarAmigo(this.id, this.amigoForm.value).then(() => {
      alert('Contacto modificado');
    }, (error) => {
      console.log(error);
    });
    this.activarModificacion = false;
  }

  modificar() {
    this.activarModificacion = true;
    this.amigoForm.setValue({
      nombre: this.amigo.nombre,
      telefono: this.amigo.telefono
    });
  }

  borrar() {
    this.agendaService.borrarAmigo(this.id).then(() => {
      alert('Contacto eliminado');
    }, (error) => {
      console.log(error)
    });

  }
  buscar() {
    this.agendaService.buscarAmigos(this.id).subscribe((item) => {
      this.amigo = item.payload.data();
    }

    )
  }
  //Peticion de ejecucion en la actualizacion de los data
  ngOnInit() {

    this.agendaService.todosAmigos().subscribe((datos) => {
      //a) limpiar el array
      this.contactos = [];
      //b)Recorro todos los datosm y agrego el array
      datos.forEach(element => {
        this.contactos.push(element.payload.doc.data());
      })

    });

  }

}
