import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.css']
})
export class VerificationCodeComponent implements OnInit {

  otpMsg !: string;
  ngOnInit(): void {
    
  }

  submit(): void {
    console.log(this.otpMsg);
  }


  onOtpChange(data: string){
    this.otpMsg = data;

  }
}
