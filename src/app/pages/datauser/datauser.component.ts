import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as paises from '../../../assets/paises.json';
import { RespPaises } from 'src/app/Models/respPaises.models';


@Component({
  selector: 'app-datauser',
  templateUrl: './datauser.component.html',
  styleUrls: ['./datauser.component.css']
})
export class DatauserComponent implements OnInit {

  paises!: RespPaises[];

  forma!: FormGroup; 
  
  constructor( private fb: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.createForm();
    this.getPaises();
    this.getCiudades();
    this.getDepartamentos();
    this.getTipoDeDireccion();
  }

  get paisNoValido(){
    return this.forma.get('pais')?.invalid && this.forma.get('pais')?.touched;
  }

  get nombreNoValido(){
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched;
  }

  get nitNoValido(){
    return this.forma.get('nit')?.invalid && this.forma.get('nit')?.touched;
  }

  get departamentoNoValido(){
    return this.forma.get('ubicaciones.departamento')?.invalid && this.forma.get('ubicaciones.departamento')?.touched;
  }

  get ciudadNoValida(){
    return this.forma.get('ubicaciones.ciudad')?.invalid && this.forma.get('ubicaciones.ciudad')?.touched;
  }

  get tipoDireccionNoValida(){
    return this.forma.get('direcciones.tipoDireccion')?.invalid && this.forma.get('direcciones.tipoDireccion')?.touched;
  }

  get descripcionNoValida(){
    return this.forma.get('direcciones.descripcion')?.invalid && this.forma.get('direcciones.descripcion')?.touched;
  }

  createForm(){
    this.forma = this.fb.group({
      pais: ['', Validators.required],
      nombre: ['', Validators.required],
      nit: ['', Validators.required],
      ubicaciones : this.fb.group({
        departamento: ['', Validators.required],
        ciudad: ['', Validators.required],
      }),
      direcciones : this.fb.group({
        tipoDireccion: ['', Validators.required],
        descripcion: ['', Validators.required],
      })
    });

  }


  save(){
    console.log("Function Save: ", this.forma);

    if(this.forma.invalid){
      return Object.values(this.forma.controls).forEach(control => {
        if(control instanceof FormGroup){
          return Object.values(control.controls).forEach(control => control.markAllAsTouched());
        }
        else {
          control.markAsTouched();
        }
      })
    }
  }

  getPaises(){
  console.log('funcion getPaises');
    this.httpClient.get('../../../assets/paises.json').subscribe(data =>{
      const resp = data as any;
      this.paises = resp; 
      console.log('paises: ', this.paises);      

    });
}

getCiudades(){
  console.log('funcion getCiudades');
  this.httpClient.get('../../../assets/ciudades.json').subscribe(data =>{
    console.log(data);      
  });
}

getDepartamentos(){
  console.log('funcion getDepartamentos')
  this.httpClient.get('../../../assets/departamentos.json').subscribe(data =>{
    console.log(data);      
  });
}

getTipoDeDireccion(){
  console.log('funcion getTipoDeDireccion')
  this.httpClient.get('../../../assets/tipoDireccion.json').subscribe(data =>{
    console.log(data);      
  });
}



}
