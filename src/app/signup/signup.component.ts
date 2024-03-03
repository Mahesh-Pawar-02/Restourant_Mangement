import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestoService } from '../resto.service';
import { ToastrService } from 'ngx-toastr';

// firebase auth
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/config'
import { addDoc, collection, getFirestore } from 'firebase/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup
  auth!: any
  db!: any

  constructor(private formbuilder: FormBuilder, private _http: HttpClient, private _router: Router, private _restoService: RestoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      name: [''],
      email: ['', [Validators.required, Validators.pattern(/^[A-Za-z]*[\._\-0-9]*[@][A-Za-z]*[\.][a-z]{3}$/)]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['']
    })
    this.db = getFirestore(app)
    this.auth = getAuth(app);
  }


  async signUp() {
    // console.log(this.signupForm.value)
    if (this.signupForm.value.name != '' && this.signupForm.value.email != '' && this.signupForm.value.mobile != '' && this.signupForm.value.password != '') {

      createUserWithEmailAndPassword(this.auth, this.signupForm.value.email, this.signupForm.value.password)
        .then(() => {
          this.toastr.success("Signup Successfully")
        })
        .catch((error) => {
          const errorMessage = error.message;
          this.toastr.error(errorMessage)
        });
        try {
          const docRef = await addDoc(collection(this.db, "users"), {
            name: this.signupForm.value.name,
            email: this.signupForm.value.email,
            mobile: this.signupForm.value.mobile,
            password: this.signupForm.value.password
          });
          this.toastr.success("User saved");
          this._router.navigate(['/login'])
        } catch (e) {
          this.toastr.error(`Error adding document: ${e}`);
        }
    }
  }

}
