import { Injectable } from '@angular/core';
import { UserDetails } from '../interfaces/userDetails';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users : UserDetails [] = 
    [{ id: 1, userName: 'John', password: 'Johnson', address: '111 Main St, Minneapolis, MN 55001' }];

  constructor() { }

  getUsers() {
    return this.users;
  }

  createUser(newUser: UserDetails) {

    // finding highest Id
    let highestId = 0;
    this.users.forEach(userObject => {
      if (userObject.id > highestId) {
        highestId = userObject.id;
      }
    })

    // adding new user to array
    this.users.push(
      {
        id: highestId + 1,
        userName: newUser.userName,
        password: newUser.password,
        address: newUser.address
      }
    );
    

  }
}
