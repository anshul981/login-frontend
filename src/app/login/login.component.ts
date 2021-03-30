import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userForm: FormGroup;
setErr:boolean;
  constructor(private auth: AuthService,private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      "username": [''],
     "password": [''] 
    })
  }
  loginUser(){
    this.auth.loginUser(this.userForm.value).subscribe((data:{}) =>{
      console.log(data);
      if(data){
        // alert('Login Successful');
        this.router.navigateByUrl('dashboard');
      }else{
        alert('access denied');
        console.log('Access denied');
      }
    })
  }

}
