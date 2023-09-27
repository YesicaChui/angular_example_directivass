import { Component } from '@angular/core';
import { IAlumnos } from '../models/alumnos.interface';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  alumnos: IAlumnos[] = [
    {
      codigo: '10AB',
      dni: '04000001',
      nombre: 'Karen',
      apellidos: 'Callisaya',
      facultad: 'Educación',
      carrera: 'Comunicación'
    },
    {
      codigo: '10AB',
      dni: '03500001',
      nombre: 'Melani',
      apellidos: 'Chui',
      facultad: 'Medicina',
      carrera: 'Odontologia'
    },
    {
      codigo: '7656',
      dni: '45000001',
      nombre: 'Jimena',
      apellidos: 'Quispe',
      facultad: 'Ingenieria',
      carrera: 'Robotica'
    },
    {
      codigo: '1CCC',
      dni: '0045301',
      nombre: 'Michael',
      apellidos: 'Mamani',
      facultad: 'Ingenieria',
      carrera: 'Sistemas'
    },
    {
      codigo: '10AB',
      dni: '33300022',
      nombre: 'Paco',
      apellidos: 'Velzaquez',
      facultad: 'Medicina',
      carrera: 'Enfermeria'
    },
    {
      codigo: '15AB',
      dni: '88800001',
      nombre: 'Carlos',
      apellidos: 'Choque',
      facultad: 'Educación',
      carrera: 'Matematica'
    },
    {
      codigo: '1777',
      dni: '88800001',
      nombre: 'Joaquin',
      apellidos: 'Rivera',
      facultad: 'Medicina',
      carrera: 'Odontologia'
    },
  ]

  obtenerColorFondo(facultad:string):string{
    const colorFondo:Record<string,string> = {
      'Educación':'red',
      'Medicina': 'yellow',
      'Ingenieria': 'blue',
    }
    return colorFondo[facultad] ||'black'
  }
}
