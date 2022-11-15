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


  public Menus: Menu[]=[{name:"inicio", route: "inicio", icon: "home"},
  {name:"Sobre nosotros", route: "Acerca", icon: "quiz"},
  {name:"Registro", route: "registro", icon: "person"}
  ];
  //("inicio", "inicio", "home")
 //("Sobre nosotros", "Acerca", "quiz")












  fillerNav = [
    {name:"inicio", route: "inicio", icon: "home"},
    {name:"Registro", route: "registro", icon: "add_circle"},
    {name:"Listado", route: "listado", icon: "person"},

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
