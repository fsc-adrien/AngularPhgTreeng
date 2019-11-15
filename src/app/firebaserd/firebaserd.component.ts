import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { CrudService } from '../shared/crud.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-firebaserd',
  templateUrl: './firebaserd.component.html',
  styleUrls: ['./firebaserd.component.less'],
  providers: [AuthenticationService, CrudService],
})
export class FirebaserdComponent implements OnInit {
  user: User[];
  name: string;
  email: string;
  email2: string;
  password: string;
  contact: number;

  constructor(
    private authenticationService: AuthenticationService,
    private crudService: CrudService
    ) {}
  ngOnInit() {

  }
  // Function SignUp/SignIn/SignOut
  signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signIn() {
    // this.email = '';
    // this.password = '';
    this.authenticationService.SignIn(this.email, this.password);
  }

  signOut() {
    this.authenticationService.SignOut();
  }
  // End Of Function SignUp/SignIn/SignOut

  addUser() {
    const newUser = new User(this.name, this.email2, this.contact);

    this.crudService.AddUser(newUser);
    // this.name = '';
    // this.email2 = '';
    // this.contact = '';
  }
}
