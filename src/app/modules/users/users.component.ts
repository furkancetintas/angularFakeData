import { UsersService } from './services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any[] = []

  constructor(
    private usersService:UsersService
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.usersService.getUsersMethod().subscribe((response) =>{
      console.log(response);
      this.users = response
    })
  }

}
