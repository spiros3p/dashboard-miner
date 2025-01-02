import { Component } from "@angular/core";
import { HomeContainerComponent } from "../../containers/home-container/home-container.component";
import { TogglerComponent } from "../toggler/toggler.component";

@Component({
  selector: "app-home",
  imports: [HomeContainerComponent, TogglerComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {}
