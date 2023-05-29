import { Component, OnInit } from '@angular/core';
import {OtpService} from "../../services/otp-service.service";

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.css']
})
export class VerificationCodeComponent implements OnInit {

  otpMsg !: string;


  constructor(private otpService: OtpService) {
  }

  ngOnInit(): void {

  }

  submit(): void {
    this.otpService.confirmPayment(this.otpMsg).subscribe();
  }


  onOtpChange(data: string){
    this.otpMsg = data;

  }
}
