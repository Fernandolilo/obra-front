import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private readonly router = inject(Router);


  isOpen = false;
  menuOpen = false;


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

  onNewFundacao(): void {
    console.log('Navegando para fundacao-new');

    this.router.navigate(['/fundacao-new']);
  }

   onStatusFundacao(): void {
    this.router.navigate(['/fundacao-status']);
  }
}