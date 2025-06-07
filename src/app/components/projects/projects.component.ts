import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
projectArray=[
  {
    projectName: 'EKART APPLICATION',
    skills: ['Angular', 'Bootstrap'],
    description: 'Built a feature-rich e-commerce website, implementing key functionalities such as user authentication, shopping features and UI/UX enhamcements, also worked on application performance improvement and responsiveness',
    image: 'assets/images/e-commerce.webp'
  },
  {
    projectName: 'INSTEP INTERNSHIP PLATFORM',
    skills: ['Web Development'],
    description: 'Full Stack Web Development Team Project to built an internship platform, I worked majorly on the frontend part of the application.',
    image: 'assets/images/instep.webp'
  },
  {
    projectName: 'STUDENT EXAM MARKS PREDICTION',
    skills: ['Python'],
    description: "Created a ML model which is able to predict student's exam marks using linear regression.",
    image: 'assets/images/ai:ml.webp'
  }
]
}
