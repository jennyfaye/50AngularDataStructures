import { Injectable } from '@angular/core';
import { PhoneContact } from '../components/phonecontactlist/phonecontact';

@Injectable({
  providedIn: 'root'
})
export class PhonecontactlistService {
  private contactList: PhoneContact[] = [];

  getContact(): PhoneContact[] {
    return this.contactList;
  }

  addContact(contact: PhoneContact): void {
    this.contactList.push(contact);
  }

  updateContact(index: number, contact: PhoneContact): void {
    if (index >= 0 && index < this.contactList.length) {
      this.contactList[index] = contact;
    }
  }

  deleteContact(index: number): void {
    if (index >= 0 && index < this.contactList.length) {
      this.contactList.splice(index, 1);
    }
  }
}
