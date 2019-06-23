import { Component, OnInit } from "@angular/core";
import { CONTACTS } from "../../core/mocks/contacts";
import { Validators, FormBuilder, FormControl } from "@angular/forms";
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  stateCtrl = new FormControl();
  filteredStates: Observable<Contact[]>;
    listContacts: boolean = false;
  searchText;
  editId: number;
  editContact: boolean = false;
  contactForm = this.formBuilder.group({
    name: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    phone: ["", [Validators.required]],
    mobile: ["", Validators.required]
  });
  editForm = this.formBuilder.group({
    name: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    phone: ["", [Validators.required]],
    mobile: ["", Validators.required]
  });
  constructor(private formBuilder: FormBuilder) {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.contacts.slice())
      );
  }

  ngOnInit() {
    this.contacts = CONTACTS;
  }
  list() {
    this.listContacts = true;
  }
  add() {
    let lastid = this.contacts.pop().id;
    console.log(lastid);
    console.log({ id: lastid + 1, name: this.contactForm.value });
    this.contact = {
      id: lastid++,
      name: this.contactForm.get("name").value,
      email: this.contactForm.get("email").value,
      phone: this.contactForm.get("phone").value,
      mobile: this.contactForm.get("mobile").value
    };
    this.contacts.push(this.contact);
  }
  edit(id) {
    this.editContact = true;
    this.editId = id;
    let cont = this.contacts.find(i => i.id === id);
    this.editForm.get("name").setValue(cont.name);
    this.editForm.get("email").setValue(cont.email);
    this.editForm.get("phone").setValue(cont.phone);
    this.editForm.get("mobile").setValue(cont.mobile);
  }
  editing() {
    let id = this.editId;
    this.contacts[id] = {
      id: id,
      name: this.editForm.get("name").value,
      email: this.editForm.get("email").value,
      phone: this.editForm.get("phone").value,
      mobile: this.editForm.get("mobile").value
    };
    console.log(this.contacts[id]);
  }
  delete(id) {
    console.log(id);
    this.contacts = this.contacts.filter(v => v.id !== id);
  }
  private _filterStates(value: string): Contact[] {
    const filterValue = value.toLowerCase();

    return this.contacts.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
