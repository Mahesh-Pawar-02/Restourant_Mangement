import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../shared/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private _http: HttpClient, private _router: Router,
    private toastr: ToastrService, private api: ApiService, private spinner: NgxSpinnerService) { }

  visible: boolean = true;
  changetype :boolean = true;
  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
  openSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000)
  }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['']
    });
  }


  // SetData()
  // {
  //   this.MarvellousForm.setValue(
  //     {
  //       username : 'Piyush',
  //       passowrd : 'abcd',
  //       ConfirmPass :  'abcd',
  //       MarvellousClass : 
  //       {
  //         batch : 'Python',
  //         fees : '5000'
  //       }
  //     }
  //   )
  // }

  // Reset() {
  //   this.loginForm.reset(
  //     {

  //     }
  //   )
  // }

  logIn() {
    this.api.useremail = this.loginForm.value.email
    if (this.api.useremail == "mahesh@gmail.com") {
      this.api.isAdmin = true
    }
    const data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.api.loginAPI(data).subscribe((res: any) => {
      this.toastr.success(res.msg, "", {
        timeOut: 2000,
        closeButton: true
      });

      if (res.msg == "Login Successful") {
        this.loginForm.reset();
        this._router.navigate(['/restaurent']);
        let ref = document.getElementById('close');
        ref?.click();
      }
    })
  }
}
