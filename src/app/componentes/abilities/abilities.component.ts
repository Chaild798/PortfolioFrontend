import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {

 
  frontEnd: any = [];
  backEnd:any=[];
  softSkills:any=[];


  constructor(private datos: PortfolioService) {};

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.frontEnd = data.frontEnd;
      this.backEnd = data.backEnd;
      this.softSkills = data.softSkills;
    })
  }

  inputNameSkill:string="";
  inputPorcentajeSkill:string="";

  frontSkillsArray:any=[];
  frontNivelesArray:any=[];

  backSkillsArray:any=[];
  backNivelesArray:any=[];

  softSkillsArray:any=[];
  softNivelesArray:any=[];

  frontContentEditable:any=[];
  backContentEditable:any=[];
  softContentEditable:any=[];

  addLista(skillName:string, porcentaje:string, skill:string) {

    switch(skill) {
      case 'front-end':
        this.frontSkillsArray.push(skillName);
        this.frontNivelesArray.push(porcentaje);
        this.frontContentEditable.push(false);
        break;
      case 'back-end':
        this.backSkillsArray.push(skillName);
        this.backNivelesArray.push(porcentaje);
        this.backContentEditable.push(false)
        break;
      case 'soft-skills':
        this.softSkillsArray.push(skillName);
        this.softNivelesArray.push(porcentaje);
        this.softContentEditable.push(false);
      break;
    }
  };

  llamarPorcentaje(indice:number, skill:string) {
    switch (skill) {
      case 'front-end':
        return this.frontNivelesArray[indice]+"%";
      case 'back-end':
        return this.backNivelesArray[indice]+"%";
      case 'soft-skills':
        return this.softNivelesArray[indice]+"%";
      default:
        return console.log('ERROR');
    }
  }

  llamarContentEditable(indice:number, skill:string) {
    switch (skill) {
      case 'front-end':
        return this.frontContentEditable[indice];
      case 'back-end':
        return this.backContentEditable[indice];
      case 'soft-skills':
        return this.softContentEditable[indice];
      default:
        return console.log('ERROR');
    }
  }


  eliminateList(idList:string) {
    let lista=document.getElementById(idList);
    lista!.parentElement!.removeChild(lista!);
  }

  alterEdit(indice:number, skill:string) {
    switch (skill) {
      case 'front-end':
        if (this.frontContentEditable[indice]) {
          this.frontContentEditable[indice]=false;
        } else {
          this.frontContentEditable[indice]=true;
        }
        break;
      case 'back-end':
        if (this.backContentEditable[indice]) {
          this.backContentEditable[indice]=false;
        } else {
          this.backContentEditable[indice]=true;
        }
        break;
      case 'soft-skills':
        if (this.softContentEditable[indice]) {
          this.softContentEditable[indice]=false;
        } else {
          this.softContentEditable[indice]=true;
        }
        break;
      default:
        return console.log('ERROR');
    }
  }

  confirmarAlterEdit(pEditId:string, skill:string, indice:number) {
    let nuevoTexto:string=document.getElementById(pEditId)!.innerHTML;
    switch (skill) {
      case 'front-end':
        this.frontSkillsArray[indice]=nuevoTexto;
        break;
      case 'back-end':
        this.backSkillsArray[indice]=nuevoTexto;
        break;
      case 'soft-skills':
        this.softSkillsArray[indice]=nuevoTexto;
        break;
      default:
        return console.log('ERROR');
    }
    this.alterEdit(indice, skill);
  }

}
