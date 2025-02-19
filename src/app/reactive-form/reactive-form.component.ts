import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  formdata: FormGroup;
  isSubmitted = false; 

  constructor() {
    this.formdata = new FormGroup({
      userName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
      schoolName: new FormControl(''),
      gradeLevel: new FormControl(''),
    });
  }

  onClickSubmit() {
    const formValue = this.formdata.value;
    console.log('Form Data Submitted:', formValue);
    this.isSubmitted = true; 
  }
}
