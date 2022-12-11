import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})

export class AboutmeComponent implements OnInit {

  aboutMe:string="";
  education: any = [];
  experiencia: any = [];//traigo el array con todas mis cositas del json

  constructor(private datos: PortfolioService) {};

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.education = data.education;
      this.experiencia = data.experience;
      this.aboutMe = data.aboutMe;

    })
  }
  //puedo aplicar el obtenerDatos() porque importe el servicio PortfolioService
  //al alias datos de PortfolioService le aplico .obtenerDatos(), me suscribe .subscribe
  //a esa suscripcion la llamre data y, en mi this.experience, colocar todo lo que data del JSON
  // tenga en su experience 

  //propiedades para el AboutMe
  aboutMeText:string="Hola, soy un aboutMe de prueba que espera a ser modificado. Hazlo rápido, porfavor.";
  aboutMeContentEditable=false;

  //propiedades para Educacion&Experiencia
  inputInstitucion:string="";
  inputTitulo:string="";
  inputPeriodo:string="";

  //propiedades para la Educacion

  educationArray:any = [];
  educationTitleArray:any = [];
  educationPeriodArray:any = [];
  educationContentEditable:any = [];

  //propiedades para la Experiencia

  experienceArray:any = [];
  experienceTitleArray:any = [];
  experiencePeriodArray:any = [];
  experienceContentEditable:any = [];
  
  //methods para el AboutMe
  llamarAboutMeEditable():boolean {
    return this.aboutMeContentEditable;
  }

  alterAboutMeEdit() {
    if (this.aboutMeContentEditable) {
      this.aboutMeContentEditable = false;
    } else {
      this.aboutMeContentEditable = true;
    }
  }

  confirmarAlterAboutMeEdit() {
    this.aboutMeText=document.getElementById('aboutMeText')!.innerHTML;
    this.alterAboutMeEdit();
  }

  //Methods para Educacion y Experiencia

  addLista(institucion:string, titulo:string, periodo:string, campo:string) {

    switch(campo) {
      case 'education':
        this.educationArray.push(institucion);
        this.educationTitleArray.push(titulo);
        this.educationPeriodArray.push(periodo);
        this.educationContentEditable.push(false);
        break;
      case 'experience':
        this.experienceArray.push(institucion);
        this.experienceTitleArray.push(titulo);
        this.experiencePeriodArray.push(periodo);
        this.experienceContentEditable.push(false)
        break;
    }
  }

  eliminateList(idList:string) {
    let lista=document.getElementById(idList);
    lista!.parentElement!.removeChild(lista!);
  }

  alterEdit(indice:number, campo:string) {
    switch (campo) {
      case 'education':
        if (this.educationContentEditable[indice]) {
          this.educationContentEditable[indice]=false;
        } else {
          this.educationContentEditable[indice]=true;
        }
        break;
      case 'experience':
        if (this.experienceContentEditable[indice]) {
          this.experienceContentEditable[indice]=false;
        } else {
          this.experienceContentEditable[indice]=true;
        }
        break;
      default:
        return console.log('ERROR');
    }
  }

  llamarContentEditable(indice: number, campo:string) {
    switch (campo) {
      case 'education':
        return this.educationContentEditable[indice];
      case 'experience':
        return this.experienceContentEditable[indice];
      default:
        return console.log('ERROR');
    }
  }

  confirmarAlterEdit(insId:string, perId:string, titId:string, campo:string, indice:number) {
    let nuevoIns:string=document.getElementById(insId)!.innerHTML;
    let nuevoPer:string=document.getElementById(perId)!.innerHTML;
    let nuevoTit:string=document.getElementById(titId)!.innerHTML;
    switch (campo) {
      case 'education':
        this.educationArray[indice]=nuevoIns;
        this.educationPeriodArray[indice]=nuevoPer;
        this.educationTitleArray[indice]=nuevoTit;
        break;
      case 'experience':
        this.experienceArray[indice]=nuevoIns;
        this.experiencePeriodArray[indice]=nuevoPer;
        this.experienceTitleArray[indice]=nuevoTit;
        break;
      default:
        return console.log('ERROR');
    }
    this.alterEdit(indice, campo);
  }

  llamarTitle(campo:string, indice:number) {
    switch (campo) {
      case 'education':
        return this.educationTitleArray[indice];
      case 'experience':
        return this.experienceTitleArray[indice];
    }
  }

  llamarPeriod(campo:string, indice:number) {
    switch (campo) {
      case 'education':
        return this.educationPeriodArray[indice];
      case 'experience':
        return this.experiencePeriodArray[indice];
    }
  }



}
