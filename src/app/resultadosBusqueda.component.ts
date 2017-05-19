import {Component, Input, OnInit} from '@angular/core';
import {ResultadosBusqueda} from "./resultadosBusqueda";

@Component({
  selector: 'app-desambiguacion',
  templateUrl: './resultadosBusqueda.html',
  styleUrls: ['./app.component.css']
})

export class resultadosBusquedaComponent implements OnInit{
  visible = true;
  @Input() listLink: string[];
  @Input() listTitle: string[];

  setVisibility(bool: boolean): void {
    this.visible = bool;
  }

  ngOnInit(): void{

  }
}
