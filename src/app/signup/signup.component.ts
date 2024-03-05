import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestoService } from '../resto.service';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup
  constructor(private formbuilder: FormBuilder, private _http: HttpClient, private _router: Router, private _restoService: RestoService,
    private toastr: ToastrService, private api: ApiService) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      name: [''],
      email: ['', [Validators.required, Validators.pattern(/^[A-Za-z]*[\._\-0-9]*[@][A-Za-z]*[\.][a-z]{3}$/)]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['']})
  }

  // ngOnInit() 
  // {
  //   this._eventService.getEvents()
  //     .subscribe(
  //       res => this.events = res,
  //       err => console.log(err)
  //     )
  // }


  signUp() {
    // console.log(this.signupForm.value)
    if (this.signupForm.value.name != ''
      && this.signupForm.value.email != ''
      && this.signupForm.value.mobile != ''
      && this.signupForm.value.password != ''
    ) {
      // this._http.post<any>('http://localhost:3000/signup',this.signupForm.value).subscribe(res=>{

      //   console.log(res)
      //   this.toastr.success('Signup Successfully in db.json');
      //   this.signupForm.reset();
      //   this._router.navigate(['/login']);
      // }), (err: any)=>{
      //   console.log(err);
      //   alert('Signup Error');
      // }
      const data = {
        username: this.signupForm.value.name,
        email: this.signupForm.value.email,
        phone: this.signupForm.value.mobile,
        password: this.signupForm.value.password
      }
      this.api.signUpAPI(data).subscribe((res: any) => {
        this.toastr.success(res.msg);
        if (res.msg == "successsfully registered") {
          this.signupForm.reset();
          this._router.navigate(['/login']);
          let ref = document.getElementById('close');
          ref?.click();
        }

      })
    } else {
      this.toastr.error('Please fill all the fields');
    }
  }

}
