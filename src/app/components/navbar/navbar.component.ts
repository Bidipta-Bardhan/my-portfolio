import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
menuOpen=false;
navbar=[{id:'about', value:'About'},
{id:'skills', value:'Skills'},
{id:'edu', value:'Education'},
 {id:'exp', value:'Experience'},  
 {id:'project', value: 'Projects'},
 {id:'achievments', value:'Achievements'}, 
 ];

activeSection= this.navbar[0].id;
scrollToSection(section: string) {
  this.activeSection = section;

  // Find the corresponding section in the page
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
@HostListener('window:scroll', [])
onWindowScroll() {
  this.navbar.forEach((section) => {
    const element = document.getElementById(section.id.toLowerCase()); // Fix here
    if (element) {
      const rect = element.getBoundingClientRect();
      console.log(section.id,rect.top,rect.bottom);
      if (rect.top <= 200 && rect.bottom >= 100) {
        this.activeSection = section.id; // Store the ID instead of the object
        console.log('active',this.activeSection)
      }
    }
  });
}
screenWidth: any=1024 ;
  ngOnInit(): void {
      this.screenWidth=typeof(window)!== 'undefined'? window.innerWidth:1024;
      this.contactNavbar();
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = typeof(window)!== 'undefined'? window.innerWidth:1024;
    this.contactNavbar();
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
contactNavbar():void{
  const isPresent=this.navbar.findIndex((item)=>item.id==='contact');
  if(this.screenWidth<=850){
    if(isPresent!==-1) return
    this.navbar.push({id: 'contact', value: 'Contact'})
  }else{
    if(isPresent!==-1)
    {
      this.navbar.splice(isPresent,1);
    }
  }
}
 
}