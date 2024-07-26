import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };
constructor(private api:ApiService){}

submitForm() {
  this.api.contactUs(this.contact).subscribe({
    next: (res: any) => {
      console.log(res);
      // Display success alert
      window.alert('Your message has been sent successfully!');
    },
    error: (err: any) => {
      console.log(err);
      // Display error alert
      window.alert('There was an error sending your message. Please try again.');
    }
  });
}

}
