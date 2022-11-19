import { Component, OnInit } from '@angular/core';
import { tarea } from '../class/tarea/tarea';
import swal from'sweetalert2';

@Component({
  templateUrl: './listadotareas.component.html',
  styleUrls: ['./listadotareas.component.sass']
})
export class ListadotareasComponent implements OnInit {
  dataSource:tarea[]= [
    {id:1,categoria:"Español",descripcion:"chao"},
    {id:2,categoria:"Español",descripcion:"hola"},
  ];



  prueba(){
    swal.fire({
      title: 'Seguro?',
      text: "No podras deshacerlo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        swal.fire(
          'Borrado!',
          'Usuario eliminado',
          'success'
        )
      }
    })
  }


  constructor() { }

  ngOnInit(): void {
  }

}
