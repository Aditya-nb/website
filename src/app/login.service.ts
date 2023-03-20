// // Importing the Injectable decorator and User class from their respective modules

import { Injectable } from '@angular/core';
import { User } from 'src/user';


// Applying the Injectable decorator to the LoginService class
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }


// An array of user objects with their username and password
  users:User[]=[
    {userName:"admin",  password:"admin"},
    {userName:"aditya", password:"123"}
  ]


  // Method to return all the user details
  getAllUsersDetails(){
    return this.users;
  }
}
