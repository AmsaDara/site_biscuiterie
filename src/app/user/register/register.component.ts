
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    fullusername: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required],
    city: [null, Validators.required],
    phone: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(12)])
    ],
  });
  
  constructor(private fb: FormBuilder,private userService:UserService) {}

  onSubmit(): void {
    this.userService.registerUser(this.registerForm.value).subscribe(console.log);
  }

}
