import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder  } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { ToastrService } from 'ngx-toastr';
import {RestaurentData} from './restaurent.model';

@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurent-dash.component.html',
  styleUrls: ['./restaurent-dash.component.css']
})

export class RestaurentDashComponent implements OnInit {
  formValue!:FormGroup
  restaurentModelObj : RestaurentData = new RestaurentData;
  allRestaurentData: any;
  showAdd!:boolean;
  showBtn!:boolean;
  constructor(private formbuilder: FormBuilder, private api:ApiService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    })
    this.allRestaurentData = []
    this.getAllData();
  }

  Help(){}

  clickAddResto(){this.showAdd = true;}
 
  addRestaurent(){
    if(this.allRestaurentData.length == 0) {
      this.restaurentModelObj.id = 1
    }else {
    this.restaurentModelObj.id = Number(this.allRestaurentData[this.allRestaurentData.length - 1].id )+ Number(1)
    }
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;
    
    this.api.addRestaurent(this.restaurentModelObj).subscribe((res: any) => {
      this.toastr.success('Restorant added Successfully');
      this.formValue.reset();
      let ref= document.getElementById('close');
      ref?.click();
      this.getAllData()
    })
  }

  contact() {  }
  getAllData(){
    this.api.getRestaurent().subscribe((res: any) => {
        this.allRestaurentData = res.hotels
    })
  }
  deleteResto(id: number){
    const data = {
      id: id
    }
    this.api.deleteRestaurant(data).subscribe((res: any) => {
      this.toastr.success(res.msg);
      this.getAllData();
    })
  }
  onEditResto(data: any)
  {
    this.showAdd = false;
    this.showBtn = true;
    
    this.restaurentModelObj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);
    
 
  }
  updateResto(){
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;

    this.api.updateRestaurant(this.restaurentModelObj).subscribe((res: any) => {

      this.toastr.success(res.msg)
      this.formValue.reset();
      let ref= document.getElementById('close');
      ref?.click();
      this.getAllData();
    })
    
  }


  
}
