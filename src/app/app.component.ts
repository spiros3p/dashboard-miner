import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, HomeComponent],
  template: `
    <app-home></app-home>
    <router-outlet />
  `,
})
export class AppComponent {}
