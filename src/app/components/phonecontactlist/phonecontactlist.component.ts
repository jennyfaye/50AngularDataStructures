import { PhonecontactlistService } from './../../services/phonecontactlist.service';
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

  constructor(private phonecontactlistService: PhonecontactlistService){
  }

  ngOnInit(): void {
    this.contactList = this.phonecontactlistService.getContact();
  }

  addContact(): void {
    if (this.name && this.number) {
      const newContact: PhoneContact = {
        name: this.name, number: this.number,
        contactList: ''
      };
      this.phonecontactlistService.addContact(newContact);
      this.name = '';
      this.number = 0;
    }
  }

  updateContact(index: number): void {
    const currentContact = this.contactList[index];
    const newName = prompt('Enter new name:', currentContact.name);
    const newNumber = prompt('Enter new phone number:', currentContact.number.toString());

    if (newName !== null && newName.trim() !== '' && newNumber !== null && newNumber.trim() !== '') {
      this.phonecontactlistService.updateContact(index, {
        name: newName.trim(), number: +newNumber,
        contactList: ''
      });
    }
  }

  deleteContact(index: number): void {
    this.phonecontactlistService.deleteContact(index);
  }
}
