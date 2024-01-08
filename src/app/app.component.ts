import { Component } from '@angular/core';

type TPage = "recipe" | "shopping-list"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentPage: TPage = "recipe";
  togglePage(page: TPage) {
    this.currentPage = page;
  }
}
