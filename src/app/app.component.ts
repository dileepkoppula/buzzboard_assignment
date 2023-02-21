import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userList: any[] = [];
  selectedIndex: any;
  localData: any;
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mail: new FormControl(''),
    mob: new FormControl(''),
    company: new FormControl(''),
    gender: new FormControl(''),
    dob: new FormControl(''),
    pswd: new FormControl(''),
    cpswd: new FormControl(''),
  });
  userDetails: any;
  ngOnInit() {
    console.log(JSON.stringify(localStorage.getItem('form-data')));
    //   this.localData=localStorage.getItem('form-data');
    //   console.log(this.localData);
    //  this.userList=this.localData;
  }
  addUser() {
    this.userForm.reset();
  }

  editUser(user: any, index: any) {
    this.userForm.patchValue({
      firstName: user.firstName,
      lastName: user.lastName,
      mail: user.mail,
      mob: user.mob,
      company: user.company,
      gender: user.gender,
      dob: user.dob,
      pswd: user.pswd,
      cpswd: user.cpswd,
    });
    this.selectedIndex = index;
  }

  updateUser() {
    this.userList[this.selectedIndex] = this.userForm.value;
    console.log(this.userList);
  }

  deleteUser(user: any, id: any) {
    this.userList.splice(id, 1);
  }

  saveUser() {
    console.log(this.userForm.value);
    // console.log(JSON.parse(this.userDetails));
    this.userList.push(this.userForm.value);
    localStorage.setItem('form-data', JSON.stringify(this.userList));
    this.userForm.reset();
  }
  clear() {
    this.userForm.reset();
  }
}
