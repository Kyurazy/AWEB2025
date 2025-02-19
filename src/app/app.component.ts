// app.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormValidationComponent } from './form-validation/form-validation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,  
    CommonModule,  
    TemplateDrivenComponent,
    ReactiveFormComponent,
    FormValidationComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Finals Lab Activity 1';
}
