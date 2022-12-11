import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:any=[]

  constructor(private datos: PortfolioService) {};

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      this.projects = data.projects;
    })
  }

  inputProjectName:string="";
  inputProjectDescription:string="";
  inputProjectAttach:string="";
  inputProjectPicture:string="";

  inputProjectArray:any=[];
  editableProjectArray:any=[];

  addProject(name:string, descr:string, attach:string, picture:string) {
    let tempArray:any=[];
    tempArray.push(name, descr, attach, picture);
    this.inputProjectArray.push(tempArray);
    this.editableProjectArray.push(false)
  }

  eliminateProject(idProject:string, indice:number) {
    //this.inputProjectArray=this.inputProjectArray.splice(indice-1, 1);
    //this.editableProjectArray=this.editableProjectArray.splice(indice-1, 1);
    let proyecto=document.getElementById(idProject);
    proyecto!.parentElement!.removeChild(proyecto!);
    console.log(this.inputProjectArray);
    console.log(this.editableProjectArray);
  }

  llamarContentEditable(indice:number) {
    return this.editableProjectArray[indice];
  }

  alterEdit(indice:number) {
    if (this.editableProjectArray[indice]) {
      this.editableProjectArray[indice]=false;
    } else {
      this.editableProjectArray[indice]=true;
    }
  }

  confirmarAlterEdit(nameId:string, descrId:string, indice:number) {
    this.inputProjectArray[indice][0]=document.getElementById(nameId)!.innerHTML;
    this.inputProjectArray[indice][1]=document.getElementById(descrId)!.innerHTML;
    this.alterEdit(indice);
    console.log(this.inputProjectArray);
  }

}
