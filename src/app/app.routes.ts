import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent() {
      return import('./domain/auth/pages/login/login.component').then(
        (m) => m.LoginComponent
      );
    },
  },
  {
    path: 'courses',
    loadComponent() {
      return import('./domain/courses/pages/courses/courses.component').then(
        (m) => m.CoursesComponent
      );
    },
  },
  {
    path: 'pulso',
    loadComponent() {
      return import('./domain/pulso/pages/pulso/pulso.component').then(
        (m) => m.PulsoComponent
      );
    },
  },
  {
    path: 'students',
    loadComponent() {
      return import('./domain/students/pages/students/students.component').then(
        (m) => m.StudentsComponent
      );
    },
  },
];
