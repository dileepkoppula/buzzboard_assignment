import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userList: any[] = [
    {
      firstName:"dileep",
    lastName: "kumar",
    mail: "dileep@gmail.com",
    mob: "9441494230",
    company: "Buzz Board",
    gender: "Male",
    dob: "11-02-1997",
    pswd: "2882",
    cpswd: "99228",
    },
    {
      firstName:"Akhil",
    lastName: "kumar",
    mail: "akil@gmail.com",
    mob: "9377272712",
    company: "Cognizant",
    gender: "Male",
    dob: "09-11-1994",
    pswd: "2882",
    cpswd: "99228",
    },
    {
      firstName:"Rahul",
    lastName: "Dev",
    mail: "rahul@gmail.com",
    mob: "9382773271",
    company: "Infosys",
    gender: "Male",
    dob: "02-06-1992",
    pswd: "2882",
    cpswd: "99228",
    },
    {
      firstName:"shivam",
    lastName: "Dube",
    mail: "shivam@gmail.com",
    mob: "9277273283",
    company: "TCS",
    gender: "Male",
    dob: "02-06-1989",
    pswd: "2882",
    cpswd: "99228",
    },
  ];
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
  currentUser: any;
  showRegister: boolean = false;
  showUpdateUser: boolean = false;
  ngOnInit() {
      // console.log(JSON.parse(localStorage.getItem('form-data')));
      const userJson = localStorage.getItem('form-data');
this.currentUser = userJson !== null ? JSON.parse(userJson):{};
    this.userList.push(this.currentUser)
    this.showRegister = true;
  }
  addUser() {
    this.userForm.reset();
    this.showRegister = true;
    this.showUpdateUser=false;
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
