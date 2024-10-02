import { Component, OnInit } from '@angular/core';
import { PhoneContact } from './phonecontact';

@Component({
  selector: 'app-phonecontactlist',
  templateUrl: './phonecontactlist.component.html',
  styleUrl: './phonecontactlist.component.css'
})
export class PhonecontactlistComponent implements OnInit{
  contactList: PhoneContact[] = [];
  name: string = '';
  number: number = 0;

  ngOnInit() {
  }

  getPhoneContact(): PhoneContact[]{
    return this.contactList;
  }

  addPcontact() {
    const newContact: PhoneContact = {
      contactList: '',
      name: this.name,
      number: this.number
    };
    this.contactList.push(newContact);
  }
}
