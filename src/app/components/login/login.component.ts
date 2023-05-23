import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { BillService } from 'src/app/services/Bill.service';
import { DebtService } from 'src/app/services/Debt.service';
import { LoginService } from 'src/app/services/Login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authToken !: string;

  constructor(private authService: LoginService, private debtService: DebtService,
    private router: Router, private route: ActivatedRoute, private billService: BillService) { }

  login(form: NgForm) {
    const phone : string = form.value.phone.concat(":CLIENT");
    const password : string = form.value.password;

    console.log(phone);
    
    this.authService.authenticate(phone, password).subscribe(response => {
      if (response) {
        console.log("login success")
        this.authToken = response.token;
        sessionStorage.setItem('token', this.authToken);

        this.debtService.generateDebts$.pipe(take(1)).subscribe();
        this.billService.createBill$.subscribe();
        this.router.navigate(['navigation']);

      } else {
        alert("Authentication failed");
      }
    })
  }

  ngOnInit(): void {

    let switchCtn = document.querySelector("#switch-cnt") as HTMLElement;
    let switchC1 = document.querySelector("#switch-c1") as HTMLElement;
    let switchC2 = document.querySelector("#switch-c2") as HTMLElement;
    let switchCircle: NodeListOf<HTMLElement> = document.querySelectorAll(".switch__circle");
    let switchBtn: NodeListOf<HTMLElement> = document.querySelectorAll(".switch-btn");
    let aContainer = document.querySelector("#a-container") as HTMLElement;
    let bContainer = document.querySelector("#b-container") as HTMLElement;
    let allButtons: NodeListOf<HTMLElement> = document.querySelectorAll(".submit");

    const getButtons = (e: Event) => e.preventDefault();

    const changeForm = (e: Event) => {
      switchCtn.classList.add("is-gx");
      setTimeout(function () {
        switchCtn.classList.remove("is-gx");
      }, 1500);

      switchCtn.classList.toggle("is-txr");
      switchCircle[0].classList.toggle("is-txr");
      switchCircle[1].classList.toggle("is-txr");

      switchC1.classList.toggle("is-hidden");
      switchC2.classList.toggle("is-hidden");
      aContainer.classList.toggle("is-txl");
      bContainer.classList.toggle("is-txl");
      bContainer.classList.toggle("is-z200");
    };

    const mainF = (e: Event) => {
      for (let i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons);
      for (let i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm);
    };

    window.addEventListener("load", mainF);
  }

}
