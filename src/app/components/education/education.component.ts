import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
educationArray=[
  {
    course: 'B.Tech in Electronics and Communication Engineering',
    institute: 'Techno Main Salt Lake (MAKAUT), WEST BENGAL',
    duration: '2022',
    marks: 'CGPA-9.23'
  },
  {
    course: 'Higher Secondary',
    institute: 'Nava Nalanda High School',
    duration: '2018',
    marks: 'Percentage-85%'
  },
  {
    course: 'Class-X',
    institute: 'Nava Nalanda High School',
    duration: '2016',
    marks: 'Percentage-88.29%'
  }
]
}
