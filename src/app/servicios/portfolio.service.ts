import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
//recordar siempre importar lo que voy a usar
//los observables permiten suscribit datos del json, si hay cambios ahi, quiero verlos
//el http es para hacer las peticiones

@Injectable({//esto significa que lo voy a poder usar en otro lugar
  providedIn: 'root'
})

export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any> {
    //el any significa que voy a traer cualquier cosa
    return this.http.get('./assets/datos/data.json');
    //para probar, creo un datos/data.json arbitrario
  }
  //el metodo sera observable para que los componentes que lo llamen puedan suscribirse para
  //esperar la respuesta de los eventos, que devolveran un json en la consola
}