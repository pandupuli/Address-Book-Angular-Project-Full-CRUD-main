import { Injectable } from '@angular/core';
import { UserDetails } from '../interfaces/userDetails';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users : UserDetails [] = 
    [{ Id: 1, UserName: 'John', Password: 'Johnson', Address: '111 Main St, Minneapolis, MN 55001' }];

  constructor() { }

  getUsers() {
    return this.users;
  }

  createUser(newUser: UserDetails) {

    // finding highest Id
    let highestId = 0;
    this.users.forEach(userObject => {
      if (userObject.Id > highestId) {
        highestId = userObject.Id;
      }
    })

    // adding new user to array
    this.users.push(
      {
        Id: highestId + 1,
        UserName: newUser.UserName,
        Password: newUser.Password,
        Address: newUser.Address
      }
    );
    

  }
}
