import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit{
  skillsArray = [
    { title: 'Angular', image: 'favicon.ico', use: 'Framework' },
    { title: 'TypeScript', image: 'https://cdn.simpleicons.org/typescript', use: 'Language' },
    { title: 'JavaScript', image: 'https://cdn.simpleicons.org/javascript', use: 'Language' },
    { title: 'HTML', image: 'https://cdn.simpleicons.org/html5', use: 'Markup Language' },
    { title: 'CSS', image: 'https://cdn.simpleicons.org/css3', use: 'Stylesheet Language' },
    { title: 'Bootstrap', image: 'https://cdn.simpleicons.org/bootstrap', use: 'UI Libraries' },
    { title: 'Angular Material', image: 'favicon.ico',use: 'UI Libraries' }, 
    { title: 'C++', image: 'https://cdn.simpleicons.org/cplusplus', use: 'Language' },
    { title: 'Java', image: 'assets/png/java.png', use: 'Language' },
    { title: 'Python', image: 'https://cdn.simpleicons.org/python', use: 'Language' },
    { title: 'Spring Boot', image: 'https://cdn.simpleicons.org/springboot', use: 'Framework' },
    { title: 'MySQL', image: 'https://cdn.simpleicons.org/mysql', use: 'Database' },
    { title: 'MongoDB', image: 'https://cdn.simpleicons.org/mongodb', use: 'Database' },
    { title: 'Git', image: 'https://cdn.simpleicons.org/git', use: 'Version Control Tool' },
    { title: 'JIRA', image: 'https://cdn.simpleicons.org/jira', use: 'Project Management' },
    { title: 'AWS', image: 'assets/svg/aws-brands.svg', use: 'Cloud' }
  ];
  showAllSkills = false;  // State variable for toggling
  screenWidth: any=1024 ;
  ngOnInit(): void {
      this.screenWidth=typeof(window)!== 'undefined'? window.innerWidth:1024;
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = typeof(window)!== 'undefined'? window.innerWidth:1024;
  }

  toggleSkills() {
    this.showAllSkills = !this.showAllSkills;
  }

}
