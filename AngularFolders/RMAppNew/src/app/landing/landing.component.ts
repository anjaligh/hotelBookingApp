import { Component, OnInit } from '@angular/core';
// import {faXmarkCircle} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
image='assets/home.png';
flagImg='assets/flag.png';
wrongOTP= true;
// faXmarkCircle=faXmarkCircle;
  constructor() { }

  ngOnInit(): void {
  }

  
  // otp: string; showOtpComponent = true; 
  // @ViewChild("ngOtpInput", { static: false }) ngOtpInput: any; config = { allowNumbersOnly: true, length: 4, isPasswordInput: false, disableAutoFocus: false, placeholder: "*", inputStyles: { width: "50px", height: "50px", }, }; 
  
  // constructor(private router: Router) {} 
  // OTP Code onOtpChange(otp) { this.otp = otp; // When all 4 digits are filled, trigger OTP validation method if (otp.length == 4) { this.validateOtp(); } } setVal(val) { this.ngOtpInput.setValue(val); } onConfigChange() { this.showOtpComponent = false; this.otp = null; setTimeout(() => { this.showOtpComponent = true; }, 0); } validateOtp() { // write your logic here to validate it, you can integrate sms API here if you want } 
  
}

