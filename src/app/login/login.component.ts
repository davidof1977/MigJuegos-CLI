import { Usuario } from './../model/usuario';
import { ServicioMensajeriaService } from 'src/app/services/servicio-mensajeria.service';
import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGrupo: FormGroup;
  returnUrl: string;

  constructor(private router: Router, private route: ActivatedRoute,
              private servicio: UsuarioService, private mensajeria: ServicioMensajeriaService) {
    this.formGrupo = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
    // reset login status
    this.servicio.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  login(event: Event){
    event.preventDefault();
    if (!this.formGrupo.invalid){
      const nombre = this.formGrupo.get('nombre').value;
      const password = this.formGrupo.get('password').value;
      const usuario = new Usuario();
      usuario.nombre = nombre;
      usuario.password = password;
      this.servicio.validarUsuario(usuario).subscribe(token => {
          this.servicio.loggin(token, nombre);
          this.mensajeria.sendUsuario(nombre);
          this.router.navigate([this.returnUrl]);
      },
      error => {
        alert('Usuario o password incorrectos');
      });
    }else{
      this.formGrupo.markAllAsTouched();
    }
  }
}
