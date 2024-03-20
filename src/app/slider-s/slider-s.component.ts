import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-slider-s',
  templateUrl: './slider-s.component.html',
  styleUrl: './slider-s.component.css'
})
export class SliderSComponent implements OnInit {
  images: string[] = [
    'https://th.bing.com/th?id=OIP.hkh14F_c3N_nKL0Y6JFXAwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    'https://th.bing.com/th?id=OIP.SlvPkpiGkWEd_DDcX9RVMgHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    'https://th.bing.com/th?id=OIP.nZf0TFXJ54IpvNYNvRe0-AHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    // Add more image URLs as needed
  ];

  constructor(
    private ngStyle: NgStyle
  ) { }

  ngOnInit(): void {
  }
}
