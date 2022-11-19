import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  templateUrl: './registrotarea.component.html',
  styleUrls: ['./registrotarea.component.sass']
})
export class RegistrotareaComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  foods: any= [
    {value: 'steak-0', viewValue: 'Español'},
    {value: 'pizza-1', viewValue: 'Ingles'},
    {value: 'tacos-2', viewValue: 'Matematicas'},
  ];


  constructor(private _formBuilder: FormBuilder, breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
    .observe('(min-width: 800px)')
    .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
   }

  ngOnInit(): void {
  }

}
