import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  anytext: string = '';
  email: string = '';
  password: string = '';
  address: string = '';
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }
}
