import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent{
  listaChelas:string[] = ['Red Label', 'Black Label', 'Blue Label', 'Vodka'];
  habilitar:boolean = true;
  constructor() { }
  setHabilitar():void{
    this.habilitar=(this.habilitar == true)? false: true;
  }
}
