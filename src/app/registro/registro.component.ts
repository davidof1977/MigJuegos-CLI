import { Usuario } from './../model/usuario';
import { UsuarioService } from './../services/usuario.service';
import { ToastService } from './../services/toast.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formGrupo: FormGroup;
  suscripcion: Subscription;
  mostrarMensaje: boolean;
  mensaje = 'Este campo es obligatorio';
  constructor(private router: Router, private route: ActivatedRoute,
              private servicio: UsuarioService, public toast: ToastService) {
    this.formGrupo = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      rpassword: new FormControl('', [Validators.required]),
      email: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.suscripcion = this.formGrupo.get('rpassword').valueChanges
  .pipe()
  .subscribe(value => {

    if (value !== this.formGrupo.get('password').value){
      console.log(true);
      this.mostrarMensaje = true;
      this.mensaje = 'Las contraseñas no coinciden';
      this.formGrupo.get('rpassword').setErrors({incorrect: true});
    }else{
      console.log(false);
      this.mostrarMensaje = false;
    }
  });
  }

  registro(evt: any){

    // stop here if form is invalid
    if (this.formGrupo.invalid) {
        return;
    }

    let usuario: Usuario;
    usuario = new Usuario();
    usuario.nombre = this.formGrupo.get('nombre').value;
    usuario.password = this.formGrupo.get('password').value;
    usuario.email = this.formGrupo.get('email').value;

    this.servicio.registrarUsuario(usuario)
        .pipe(first())
        .subscribe(
            data => {
              this.toast.show('Registro completado', {
                delay: 2000,
                autohide: true,
                classname: 'bg-success text-light',
                headertext: 'Registrado'
              });
              this.suscripcion.unsubscribe();
              this.router.navigate(['/login']);
            },
            error => {
              this.toast.show('Error en el registro', {
                delay: 2000,
                autohide: true,
                classname: 'bg-success text-light',
                headertext: 'Error'
              });
            });
    }
}
