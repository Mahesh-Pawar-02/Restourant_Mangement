import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// firebase auth
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/config'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  auth!: any
  constructor(private formbuilder: FormBuilder, private _http: HttpClient, private _router: Router,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['']
    });
    this.auth = getAuth(app);
  }
  logIn() {
    const user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    signInWithEmailAndPassword(this.auth, user.email, user.password)
      .then((userCredential) => {
        this.toastr.success("Logged In Successfully")
        this._router.navigate(['/restaurent'])
      })
      .catch((error) => {
        const errorMessage = error.message;
        this.toastr.error(errorMessage)
      });
  }
}
