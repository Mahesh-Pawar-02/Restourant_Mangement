import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RestaurentData } from './restaurent.model';

// firebase database
import { app } from '../firebase/config'
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";


@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurent-dash.component.html',
  styleUrls: ['./restaurent-dash.component.css']
})

export class RestaurentDashComponent implements OnInit {
  formValue!: FormGroup
  contactForm!: FormGroup
  db: any
  restaurentModelObj: RestaurentData = new RestaurentData;
  allRestaurentData: any;
  showAdd!: boolean;
  showBtn!: boolean;
  constructor(private formbuilder: FormBuilder,
    private toastr: ToastrService, private _router: Router) { }
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    })
    this.db = getFirestore(app);
    this.contactForm = this.formbuilder.group({
      name: [''],
      email: [''],
      message: ['']
    })
    this.allRestaurentData = []
    this.getAllData();
  }

  Help() { }

  clickAddResto() { this.showAdd = true; }

  async addRestaurent() {
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;

    try {
      const docRef = await addDoc(collection(this.db, "hotels"), {
        name: this.restaurentModelObj.name,
        email: this.restaurentModelObj.email,
        address: this.restaurentModelObj.address,
        mobile: this.restaurentModelObj.mobile,
        services: this.restaurentModelObj.services
      });
      this.getAllData()
      this.toastr.success("Restourant added");
    } catch (e) {
      this.toastr.error(`Error adding document: ${e}`);
    }
  }

  async contact() {
    try {
      const docRef = await addDoc(collection(this.db, "contacts"), {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message
      });
      this.toastr.success("Message send");
    } catch (e) {
      this.toastr.error(`Error adding document: ${e}`);
    }
  }
  async getAllData() {
    this.allRestaurentData = []
    const querySnapshot = await getDocs(collection(this.db, "hotels"));
    querySnapshot.forEach((doc) => {
      this.allRestaurentData.push(doc)
    });
  }
  async deleteResto(id: number) {
    try {
      const docRef = await deleteDoc(doc(this.db, "hotels", `${id}`))
      this.toastr.success("Restourant deleted");
      this.getAllData()
    } catch (e) {
      this.toastr.error(`Error deleting Restourant: ${e}`);
    }
  }
  onEditResto(id:number, data: any) {
    this.showAdd = false;
    this.showBtn = true;

    this.restaurentModelObj.id = id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);
  }
  async updateResto() {
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;

    const Ref = doc(this.db, "hotels", `${this.restaurentModelObj.id}`);
    try {
      await updateDoc(Ref, { 
        name: this.restaurentModelObj.name,
        email: this.restaurentModelObj.email,
        mobile: this.restaurentModelObj.mobile,
        address: this.restaurentModelObj.address,
        services: this.restaurentModelObj.services,
      });
      this.toastr.success("Restourant updated")
      this.getAllData()
    } catch (error) {
      this.toastr.error(`Error updating Restourant: ${error}`);
    }
    
  }
  goToAdmin() {
    this._router.navigate(['/admin']);
  }
}
