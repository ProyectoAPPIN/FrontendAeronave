import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { SodimacCommonConstants } from 'src/app/common/constantes.class';
import { Usuario } from 'src/app/models/usuario';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Constantes } from 'src/app/utils/constantes.util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuarioM = "";
  loginForm: FormGroup; 
  usuarioLogin: any = {
    Usuario:"",
    Contrasena:""
  } 
  usuario:any = [];

  get usuarioField() { return this.loginForm.get('usuario'); }
  get contrasenaField() { return this.loginForm.get('contrasena'); }

  constructor(
    private _loginService: AuthenticationService,
    private fb: FormBuilder,
    private _routeServices: Router,
    private spinner: NgxSpinnerService) { 
      this.configLoginForm();
    }

  ngOnInit(): void {
  }

  configLoginForm() {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  /** limpia el formulario loginForm **/
  clearLoginForm() {
    this.usuarioField.setValue('');
    this.contrasenaField.setValue('');
  }

  applyFilter(event: Event) {      
    var filterValue = (event.target as HTMLInputElement).value;   
    filterValue = filterValue.toUpperCase();
    this.usuarioM = filterValue;
    //console.log(this.usuarioM);
    //alert(filterValue);
  } 

  login() {
    this.spinner.show();
    console.log(this.usuarioField.value)
    console.log(this.contrasenaField.value)
    this._loginService.autenticacion(this.usuarioField.value, this.contrasenaField.value).pipe(
      finalize(() => {
        console.log('Servicio completado correctamente');
        setTimeout(() => {
          this.spinner.hide();
        }, 500);
      }
      )).subscribe(resp => {       
       //console.log(resp);
       this.usuario = resp;
       const estado = this.usuario[0].codUsuario;
       console.log(this.usuario);
       if(estado > 0){
         //alert('ingreso');

         Swal.fire({
          title: 'Bienvenido',
          width: 300,         
          confirmButtonText: `Ok`,          
        }).then((result) => {         
          if (result.isConfirmed) {
            sessionStorage.setItem(Constantes.DATOS_SESION_USUARIO, JSON.stringify(this.usuario[0].nombres));
            sessionStorage.setItem(Constantes.DATOS_SESION_ROL, JSON.stringify(this.usuario[0].rol));
            this._routeServices.navigate([SodimacCommonConstants.pathPages.home]);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            //alert('dddd');
            this.clearLoginForm();
            this._routeServices.navigate([SodimacCommonConstants.pathPages.login]);
          }
        })         
       }
      });    
  }

}
