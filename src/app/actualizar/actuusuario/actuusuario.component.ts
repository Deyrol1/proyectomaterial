import { Component, OnInit,ViewChild } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm,FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatStepper} from '@angular/material/stepper';
import { MatTable } from '@angular/material/table';
import { Usuario } from 'src/app/class/usuario/usuario';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  templateUrl: './actuusuario.component.html',
  styleUrls: ['./actuusuario.component.sass']
})
export class ActuusuarioComponent implements OnInit {
  @ViewChild('stepper',{read:MatStepper}) stepper?:MatStepper;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  isLinear = true;



  usuario?:Usuario;

  Listausuarios: Usuario[]=[];


  nombre:string='';
    email:string='';
    password:string='';



    subir(){


      const tarea:Usuario ={
        name:this.nombre,
        email: this.email,
        contrasena: this.password
      }

      console.log(this.Listausuarios);

      this.Listausuarios.push(tarea);



      this.nombre='';
      this.email='';
      this.password='';






    }










  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {

    this.stepperOrientation = breakpointObserver
    .observe('(min-width: 800px)')
    .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }


  ngOnInit(): void {
  }

}
