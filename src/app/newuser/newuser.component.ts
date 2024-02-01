import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { UserDetails } from '../interfaces/userDetails';
import { IFile } from '../interfaces/IFile';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss'],
})
export class NewuserComponent implements OnInit {

  newUser!: UserDetails;
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private router: Router,
    private usersService: UsersService, private _http: HttpClient) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      address: ['', Validators.required],
    });
  }

  userName: String = '';
  password: String = '';
  address: String = '';

  goToStep2() {
    // console.log( this.firstFormGroup.value);
    // console.log( this.secondFormGroup.value);
    this.userName = this.firstFormGroup.get('userName')?.value;
    this.password = this.firstFormGroup.get('password')?.value;
    this.address = this.secondFormGroup.get('address')?.value;

    this.newUser = {
      id: 0,
      userName: this.firstFormGroup.controls['userName'].value as string,
      password: this.firstFormGroup.controls['password'].value as string,
      address: this.secondFormGroup.controls['address'].value as string,
    };
  };

  save() {
    this.usersService.createUser(this.newUser);
    console.log(this.usersService.getUsers());
  }
}



//both will be fine
//this.userForm.get('userName').value;  or this.userForm.controls['userName'].value

//this.userForm.get('userName').setValue('John Doe'); or this.userForm.controls['userName'].setValue('John Doe');