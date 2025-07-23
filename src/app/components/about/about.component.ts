import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  scrollToSection(section: string) {  
    // Find the corresponding section in the page
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  downloadResume() {
    const resumeUrl = 'assets/Bidipta_Bardhan_Software_Engineer_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Bidipta_Resume.pdf'; // The filename when downloaded
    link.click();
  } 
}
