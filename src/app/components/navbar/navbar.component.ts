import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
menuOpen=false;
private scrollListener: any;
navbar=[{id:'about', value:'About'},
{id:'skills', value:'Skills'},
{id:'edu', value:'Education'},
 {id:'exp', value:'Experience'},  
 {id:'project', value: 'Projects'},
 {id:'achievments', value:'Achievements'}, 
 ];

activeSection= this.navbar[0].id;
constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
scrollToSection(section: string) {
  this.activeSection = section;

  // Find the corresponding section in the page
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

onWindowScroll() {
  this.navbar.forEach((section) => {
    const element = document.getElementById(section.id.toLowerCase()); // Fix here
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 200 && rect.bottom >= 100) {
        this.activeSection = section.id; // Store the ID instead of the object
      }
    }
  });
}


screenWidth: any=1024 ;
  ngOnInit(): void {
      this.screenWidth=typeof(window)!== 'undefined'? window.innerWidth:1024;
      this.contactNavbar();
      if (isPlatformBrowser(this.platformId)) {
    this.scrollListener = this.onWindowScroll.bind(this);
    document.body?.addEventListener('scroll', this.scrollListener);
  }
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
ngOnDestroy():void{
if (isPlatformBrowser(this.platformId) && this.scrollListener) {
    document.body?.removeEventListener('scroll', this.scrollListener);
  }
}
}