// importacion de componentes
import { Component } from '@angular/core';
// importacion de Control de Formularios
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // en su interior se claran los objetos a injectar en la pagina TypeScript
  constructor() {}

  // DEFINICION DE VARIABLES nombre: tipo ="valor inicial" 
  // String, boolean, number, any (cualquier dato), Array (definicion de arreglo)
  rut:String ="";
  nombreCompleto:String ="";
  edad:Number;
  // declaracion de objetos de tipo Formulario
  elrut = new FormControl('');
  elNombreCompleto= new FormControl('');
  laEdad=new FormControl('');

  // grupo de controles de persona
  persona = new FormGroup({
    elrut : new FormControl(''),
    elNombreCompleto : new FormControl(''),
    laEdad:new FormControl('')
  });

  // creacion de arreglo que contiene el listado de "personas"
  lista_personas = new Array();
  // metodos de acceso 
  cambiarDatos(){
    console.log(this.lista_personas);
  }
  grabar(){
    console.log(this.persona.value);
    this.lista_personas.push(this.persona);
  }
}


// IMPLEMENTACION DE CODIGO EN JAVASCRIPT 
