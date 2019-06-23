import { Component, OnInit } from "@angular/core";
import { CONTACTS } from "../../core/mocks/contacts";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"]
})
export class ContactsComponent implements OnInit {
  contacts = CONTACTS;
  listContacts: boolean = false;
  contactForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    mobile: new FormControl("")
  });

  constructor() {}

  ngOnInit() {}
  list() {
    this.listContacts = true;
  }
  add() {
    let lastid = this.contacts.pop().id;
    console.log(lastid);
    console.log({ id: lastid+1, name: this.contactForm.value });
    this.contacts.push({
      id: lastid++,
      name: this.contactForm.get("name").value,
      email: this.contactForm.get("email").value,
      phone: this.contactForm.get("phone").value,
      mobile: this.contactForm.get("mobile").value
    });
  }
  edit(id) {}
  delete(id) {}
}
