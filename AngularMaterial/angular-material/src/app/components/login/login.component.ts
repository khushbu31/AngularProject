import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
        'username':[null,Validators.required],
        'password':[null,Validators.required]
    })
  }

  onSubmit()
  {
      this.router.navigate(['home'])
  }

}
