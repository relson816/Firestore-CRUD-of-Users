import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.itemService.getUsers().subscribe(users => {
      //console.log(users);
      this.items = users;
    });
  }

  deleteUser(event, user: User){
    this.clearState();
    this.UserService.deleteItem(user);
  }

  editUser(event, user: User){
    this.editState = true;
    this.userToEdit = user;
  }

  updateUser(user: User){
    this.userService.updateItem(user);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.userToEdit = null;
  }

}


}
