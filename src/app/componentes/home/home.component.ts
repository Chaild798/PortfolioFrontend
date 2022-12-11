import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  persona:any=[];

  constructor(private datos: PortfolioService) {}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
        this.persona=data.persona
    });//suscribe y, cuando tenga la data, la pone en la consola
  }

}

//el OnInit se usa para consultar un metodo ni bien se carga el componente en el que este
//ni bien se cargue home, se aplica obtenerDatos(), que la traje de PortfolioService