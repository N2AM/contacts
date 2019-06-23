import { Component, OnInit } from "@angular/core";
import { CONTACTS } from "../../core/mocks/contacts";
import { Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"]
})
export class ContactsComponent implements OnInit {
  contacts : Contact[];
  contact : Contact;
  listContacts: boolean = false;
  searchText;
  contactForm  = this.formBuilder.group({
    'name': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]],
    'phone': ['', [Validators.required]],
    'mobile ': ['' , [Validators.required]]
  });
  constructor(private formBuilder : FormBuilder) {}

  ngOnInit() {
    this.contacts = CONTACTS;
  }
  list() {
    this.listContacts = true;
  }
  add() {
    let lastid = this.contacts.pop().id;
    console.log(lastid);
    console.log({ id: lastid+1, name: this.contactForm.value });
    this.contact = {
      id: lastid++,
      name: this.contactForm.get("name").value,
      email: this.contactForm.get("email").value,
      phone: this.contactForm.get("phone").value,
      mobile: this.contactForm.get("mobile").value
    };
    this.contacts.push(this.contact);
  }
  edit(id) {}
  delete(id) {
    console.log(id)
   this.contacts= this.contacts.filter(v=> v.id !== id);
  }
}
