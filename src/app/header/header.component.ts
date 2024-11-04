
import { Component, Input } from '@angular/core';
import { Student } from '../../assets/student.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Input() student!: Student;
  headerColor = 'lightblue';

  constructor() {}
}