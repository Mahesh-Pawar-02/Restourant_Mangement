import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'RestaurentApp';
  isAdmin = false;
  useremail = null;
  constructor(private spinner: NgxSpinnerService) {}

  openSpinner()
  {
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },5000)
  }
}
