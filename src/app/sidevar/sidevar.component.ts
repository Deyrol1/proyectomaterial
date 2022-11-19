import { Menu } from '../class/menu/menu';
import { Component, OnInit,ChangeDetectorRef,OnDestroy, ViewChild } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';
import {MatSidenav} from '@angular/material/sidenav';





@Component({
  selector: 'app-sidevar',
  templateUrl: './sidevar.component.html',
  styleUrls: ['./sidevar.component.sass']
})
export class SidevarComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  value = 'Clear me';





  mobileQuery: MediaQueryList;



  fillerNav = [
    {name:"inicio", route: "inicio", icon: "home"},
    {name:"Usuarios", icon: "person",
      submenu:[
        {name:"registrar usuario", route: "registro", icon:"add-circle"},
        {name:"lista usuarios", route: "listado", icon:"person"},
      ]},
    {name:"Tareas",icon: "book",
      submenu:[
        {name:"Nueva tarea", route: "registromateria", icon:"add-circle"},
        {name:"lista tareas", route: "listadotarea", icon:"book"},
      ]}
  ]





  seccion= '';



  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,titulo:Title ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.seccion= titulo.getTitle();


  }

  opened= true;

  panelOpenState = false;
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  ngOnInit(): void {


  }

}
