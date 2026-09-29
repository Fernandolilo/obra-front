import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isOpen = false;
  menuOpen=false;


   closeNavigationMenu(): void {
    this.menuOpen = false;
    this.isOpen = false;
  }

  openNavigationMenu(): void {
    this.menuOpen = true;
    this.isOpen = true;
  }
  closeNavigation(): void {
    this.isOpen = false;
  }

  openNavigation(): void {
    this.isOpen = true;
  }
}