import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb:FormBuilder,private api:ApiService,private router:Router){}
// form group
// form array
// form control
  registerform=this.fb.group({
     username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
     email:['',[Validators.required,Validators.email]],
     password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })


  register(){
    if(this.registerform.valid){
      const username=this.registerform.value.username
      const email=this.registerform.value.email
      const password=this.registerform.value.password

      console.log(`${username},${email},${password}`);

      const reqBody={username,email,password}

      // apicall
      this.api.registerApi(reqBody).subscribe({
        next:(res:any)=>{
          // navigate to login

          this.router.navigateByUrl('user/login')

        },
        error:(err:any)=>{
          console.log(err);
          alert(err.error)
          
        }
      })
      
      
    }
    else{
      alert('invalid form')
    }
  }
}
