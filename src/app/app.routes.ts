// app.routes.ts

import { Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormValidationComponent } from './form-validation/form-validation.component';

export const routes: Routes = [
  { path: 'template-driven', component: TemplateDrivenComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'form-validation', component: FormValidationComponent },
  { path: '', redirectTo: '/template-driven', pathMatch: 'full' }
];
