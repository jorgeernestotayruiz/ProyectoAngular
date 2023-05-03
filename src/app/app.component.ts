import { Component, OnInit } from '@angular/core';


interface Targeta{
  titulo: string;
  subtitulo: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  title = 'Mi primer trabajo en Angular';
  public ArregloTargeta : Targeta []= []; //variable de tipo arreglo

  ngOnInit(): void {//Es un metodo de tipo void que se inicializa cuando se ejecuta la página}
    this.ArregloTargeta= [//cargamos datos al arreglo
      {titulo: 'video 1', subtitulo: 'subtitulo del video',image:"./assets/P1.jpg"},
      {titulo: 'video 2', subtitulo: 'subtitulo del video',image:"./assets/P2.jpg"},
      {titulo: 'video 3', subtitulo: 'subtitulo del video',image:"./assets/P3.jpg"},
      {titulo: 'video 4', subtitulo: 'subtitulo del video',image:"./assets/P4.jpg"},
      {titulo: 'video 5', subtitulo: 'subtitulo del video',image:"./assets/P5.jpg"},
    ]
  } 
}
