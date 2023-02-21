import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userList: any[] = [
    {
      firstName: 'dileep',
      lastName: 'kumar',
      mail: 'dileep@gmail.com',
      mob: '9441494230',
      company: 'Buzz Board',
      gender: 'Male',
      dob: '1997-02-25',
      pswd: '2882',
      cpswd: '99228',
    },
    {
      firstName: 'Akhil',
      lastName: 'kumar',
      mail: 'akil@gmail.com',
      mob: '9377272712',
      company: 'Cognizant',
      gender: 'Male',
      dob: '1994-01-09',
      pswd: '2882',
      cpswd: '99228',
    },
    {
      firstName: 'Rahul',
      lastName: 'Dev',
      mail: 'rahul@gmail.com',
      mob: '9382773271',
      company: 'Infosys',
      gender: 'Male',
      dob: '1992-06-02',
      pswd: '2882',
      cpswd: '99228',
    },
    {
      firstName: 'shivam',
      lastName: 'Dube',
      mail: 'shivam@gmail.com',
      mob: '9277273283',
      company: 'TCS',
      gender: 'Male',
      dob: '1989-02-12',
      pswd: '2882',
      cpswd: '99228',
    },
  ];
  selectedIndex: any;
  localData: any;
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    mail: new FormControl('', [Validators.email,Validators.required]),
    mob: new FormControl('',[Validators.minLength(10),Validators.required]),
    company: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    pswd: new FormControl('', Validators.required),
    cpswd: new FormControl('', Validators.required),
  });
  currentUser: any;
  showRegister: boolean = false;
  showUpdateUser: boolean = false;
  submitted: boolean=false;
  ngOnInit() {
    // console.log(JSON.parse(localStorage.getItem('form-data')));
    //       const userJson = localStorage.getItem('form-data');
    // this.currentUser = userJson !== null ? JSON.parse(userJson):{};
    //     this.userList.push(this.currentUser)
    this.showRegister = true;
  }
  addUser() {
    this.userForm.reset();
    this.showRegister = true;
    this.showUpdateUser = false;
  }

  editUser(user: any, index: any) {
    this.showUpdateUser = true;
    this.showRegister = false;
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
    this.userForm.reset();
    console.log(this.userList);
  }

  deleteUser(user: any, id: any) {
    this.userList.splice(id, 1);
  }
  get f() { return this.userForm.controls; }
  saveUser() {
    console.log(this.userForm.value);
    // console.log(JSON.parse(this.userDetails));
    if (this.userForm.invalid) {
      this.submitted = true;
      return;
  } else
    this.userList.push(this.userForm.value);
    localStorage.setItem('form-data', JSON.stringify(this.userList));
    this.userForm.reset();
  }
  clear() {
    this.userForm.reset();
  }
}
