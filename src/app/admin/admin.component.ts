import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { app } from '../firebase/config'
import { getDocs, collection, getFirestore } from 'firebase/firestore'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  users: any
  contacts: any
  hotels: any
  db: any
  constructor(private _http: HttpClient, private _router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.db = getFirestore(app)
    this.users = []
    this.hotels = []
    this.contacts = []
    this.getUsers()
    this.getHotels()
    this.getContacts()
  }

  async getUsers() {
    this.users = []
    const querySnapshot = await getDocs(collection(this.db, "users"));
    querySnapshot.forEach((doc) => {
      this.users.push(doc)
    });
  }
  async getContacts() {
    this.contacts = []
    const querySnapshot = await getDocs(collection(this.db, "contacts"));
    querySnapshot.forEach((doc) => {
      this.contacts.push(doc)
    });
  }
  async getHotels() {
    this.hotels = []
    const querySnapshot = await getDocs(collection(this.db, "hotels"));
    querySnapshot.forEach((doc) => {
      this.hotels.push(doc)
    });
  }
}
