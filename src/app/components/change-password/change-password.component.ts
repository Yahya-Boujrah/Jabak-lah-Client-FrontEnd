import { Component } from '@angular/core';
import {CustomResponse} from "../../interfaces/Custom-response";
import {NgForm} from "@angular/forms";
import {LoginService} from "../../services/Login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  pwdResponse!: CustomResponse;

  constructor(private loginService : LoginService, private router : Router) {
  }

  changePwd(form : NgForm){
    if (form.value.newPassword === form.value.confirmPassword) {
      this.loginService.changePassword(form.value.newPassword).subscribe(response => {
        this.pwdResponse = response;
      });
    }
    form.reset();

    this.router.navigate(['/navigation']);
  }


}
