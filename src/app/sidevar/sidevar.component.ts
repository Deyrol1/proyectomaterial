import { Menu } from '../class/menu/menu';
import { Component, OnInit,ChangeDetectorRef,OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';





@Component({
  selector: 'app-sidevar',
  templateUrl: './sidevar.component.html',
  styleUrls: ['./sidevar.component.sass']
})
export class SidevarComponent implements OnInit {

  value = 'Clear me';


  mobileQuery: MediaQueryList;

  //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);







  fillerNav = [
    {name:"inicio", route: "inicio", icon: "home"},
    {name:"Registro Usuario", route: "registro", icon: "add_circle"},
    {name:"Listado usuarios(incompleto)", route: "listado", icon: "person"},
    {name:"Nueva tarea", route: "registromateria", icon: "add_circle"},
    {name:"Listado tareas(incompleto)", route: "listado", icon: "book"},

  ]


  seccion= '';



  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,titulo:Title ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.seccion= titulo.getTitle();


  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  ngOnInit(): void {
  }

}
