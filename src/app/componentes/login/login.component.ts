import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup;

  //en el constructor recibo el FormBuilder
  constructor(private formBuilder: FormBuilder) {

    //creo los controles para el formulario de login
    this.form=this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]]
    })

    //el mail y el password van a estar vacios. A la hora de validar, 
    //ambos son requeridos, el mail debe tener el formato de un mail y el password  debe
    //tener minimo 8 caracteres
  }

  ngOnInit() {

  }
  
  //methods para el login

  get Password(){
    return this.form.get('password');
    //dame el valor de la etiqueta que tiene el formControlName="password"
  }

  get Email(){
    return this.form.get('email');
  }

  //los anteriores solo son para devolverme el valor de esos tags, ahora quiero saber si son validos

  get PasswordInvalid() {
    return this.Password?.touched && !this.Password?.valid;
    //este password (del get) fue tocado? y la password NO es valida
    //ambos deben ser true para que esto sea valido
  }

  get EmailInvalid() {
    return this.Email?.touched && !this.Email?.valid;
  }

  onEnviar(event: Event) {
    event.preventDefault;//no permito que se mande asi nomas
    if (this.form.valid) {
      alert('funca');//si el formulario es valido, mando una alerta
    } else {
      this.form.markAllAsTouched()//sino, lo marco todo como tocado
    }
  }

}
