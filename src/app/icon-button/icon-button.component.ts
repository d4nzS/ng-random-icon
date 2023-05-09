import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent {
  public randomIcon: string;

  public showRandomIcon(): void {
    setTimeout(() => {
      const icons = [
        'fas fa-cat',
        'fas fa-dog',
        'fas fa-fish',
        'fas fa-bug',
        'fas fa-crow',
        'fas fa-horse',
        'fas fa-hippo'
      ];
      const randomIndex = Math.floor(Math.random() * icons.length);
      this.randomIcon = icons[randomIndex];
    }, 3000);
  }
}
