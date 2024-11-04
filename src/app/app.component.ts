import { Component } from '@angular/core';
import { Student } from '../assets/student.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SejaSeja_Assignment_4';
  studentData: Student = { name: 'Your Name', studentId: 'Your Student ID' }; 
}
