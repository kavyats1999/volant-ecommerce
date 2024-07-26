import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string | null = '/';  // Default to home if returnUrl is not present

  constructor(
    private fb: FormBuilder, 
    private api: ApiService, 
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Read the returnUrl query parameter on initialization
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  });

  login() {
    if (this.loginform.valid) {
      const email = this.loginform.value.email;
      const password = this.loginform.value.password;

      const reqBody = { email, password };

      // API call
      this.api.loginApi(reqBody).subscribe({
        next: (res: any) => {
          this.router.navigate([this.returnUrl]);
        },
        error: (err: any) => {
          console.log(err);
          alert(err.error);
        }
      });
    } else {
      alert('Invalid email or password');
    }
  }
}
