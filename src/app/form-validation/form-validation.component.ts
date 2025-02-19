import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css'],
})
export class FormValidationComponent {
  loginForm: FormGroup;
  submittedData: any = null; 
  isSubmitted: boolean = false; 

  constructor() {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      number: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      schoolName: new FormControl('', [Validators.required]),
      gradeLevel: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.submittedData = this.loginForm.value;
      this.isSubmitted = true; 
      console.log('Form Data Submitted:', this.submittedData);
    }
  }
}
