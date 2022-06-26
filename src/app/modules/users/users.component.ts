import { UsersService } from './services/users.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from './models/user.model';
import { faUser,faBuilding,faGlobe,faEnvelope, faPhone, faLocationArrow, faCity } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  faUser = faUser;
  faBuilding = faBuilding;
  faGlobe = faGlobe;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLocationArrow = faLocationArrow;
  faCity = faCity;

  usersTitle = "Users";

  users:UserModel[] = [];

  constructor(
    private usersService:UsersService
  ) { }

  ngOnInit(): void {
    console.log(faUser);
    this.loadUsers();
  }

  loadUsers(){
    this.usersService.getUsersMethod().subscribe((response) =>{
      console.log(response);
      this.users = response;
    })
  }

}
