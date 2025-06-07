import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
  achievements = [
    {
      description: 'Honored with the Special Contribution Award for exceptional dedication and impactful contributions to the project.',
      image: 'assets/jpg/award.jpg',
      name: 'Special Contribution',
      position: 'Award'
    },
    {
      description: 'Achieved an Outstanding Rating in the latest appraisal cycle for consistent excellence and dedication throughout the year.',
      image: 'assets/jpg/OS.jpg',
      name: 'Outstanding Rating',
      position: 'Rating'
    },
    {
      description: 'Twice a finalist in Infosys Make-a-thon, demonstrating innovative problem-solving, teamwork, and technical expertise.',
      image: 'assets/jpg/hackathon.jpg',
      name: 'Hackathon Finalist',
      position: 'Code Challenge'
    },
    {
      description: 'Recognized multiple times by mentors, tech leads, managers, and senior leadership for exceptional performance and contributions.',
      image: 'assets/jpg/Recognition.jpg',
      name: 'Professional Recognition',
      position: 'Recognition'
    },
    {
      description: 'Solved 500+ Data Structures and Algorithms problems across various competitive coding platforms, showcasing strong problem-solving skills.',
      image: 'assets/jpg/DSA.jpg',
      name: 'DSA Mastery',
      position: 'Coding Community'
    },
    {
      description: 'Certified AWS Cloud Practitioner, demonstrating a strong grasp of cloud computing fundamentals and best practices.',
      image: 'assets/jpg/AWS.jpg',
      name: 'Cloud Certification',
      position: 'AWS'
    },
    {
      description: 'Earned multiple Infosys certifications in Frontend Development, MongoDB, Angular, AWS, Java, and Spring Boot, solidifying expertise in full-stack development.',
      image: 'assets/jpg/fullstack.jpg',
      name: 'Technical Certifications',
      position: 'Full-Stack Development'
    }
];
}
