import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  hoveredIndex = -1;

  experienceArray = [
    {
      job: 'Infosys',
      jobRole: 'Specialist Programmer',
      duration: 'Aug 2022 - Present',
      descriptionPoints: [
        'Working as a frontend developer ensuring high-quality deliverables.',
        'Collaborated seamlessly with cross-functional teams and actively engaged with clients.',
        'Focused on optimizing performance, enhancing user experience, and mentoring team members.'
      ],
    },
    {
      job: 'Keysight Technologies',
      jobRole: 'Research and Development Intern',
      duration: 'Nov 2021 - May 2022',
      descriptionPoints: [
        'Gained exposure to software development processes in a professional R&D environment.',
        'Observed and learned about Java, Spring Boot, and REST API development.',
        'Assisted in minor debugging and code reviews, improving understanding of backend development.'
      ],
    }
  ];
}  
