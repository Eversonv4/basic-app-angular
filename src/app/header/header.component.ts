import { Component, EventEmitter, Output } from "@angular/core";

type TPage = "recipe" | "shopping-list"

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css"
})
export class HeaderComponent {
  @Output() changePage = new EventEmitter<TPage>;
  collapsed = true;
}