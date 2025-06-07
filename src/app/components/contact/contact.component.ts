import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser'
import { NgToastModule, NgToastService, ToasterPosition } from 'ng-angular-popup';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgToastModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
ToasterPosition=ToasterPosition;
emailForm:FormGroup
constructor(private fb:FormBuilder,private toast: NgToastService){
this.emailForm=this.fb.group({
 name: new FormControl(null,[Validators.required, Validators.minLength(3)]),
 email: new FormControl(null,[Validators.required, Validators.email]),
 message: new FormControl(null,[Validators.required]),
})
}
async onSubmit():Promise<void>{
  this.emailForm.markAllAsTouched();
  if(this.emailForm.valid){
    emailjs.init('sOUCjMu2fKf-eA0al');
  const response=await emailjs.send("service_t7pa97s","template_fvlsedk",{
    from_name: this.emailForm.get('name')?.value,
    message: this.emailForm.get('message')?.value,
    email: this.emailForm.get('email')?.value,
    });
  this.toast.success('Message Sent Succesfully', 'Success', 5000);
   this.emailForm.reset();
  }

}
}
