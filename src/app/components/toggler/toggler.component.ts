import { Component, inject } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { PanelModule } from "primeng/panel";
import { SelectButtonModule } from "primeng/selectbutton";
import { BitaxeService } from "../../services/bitaxe.service";

@Component({
  selector: "app-toggler",
  imports: [PanelModule, SelectButtonModule, ReactiveFormsModule],
  templateUrl: "./toggler.component.html",
  styleUrl: "./toggler.component.scss",
})
export class TogglerComponent {
  private readonly bitaxeService = inject(BitaxeService);
  readonly toggler: FormControl = new FormControl<boolean>(false);
  readonly stateOptions: any[] = [
    { label: "Slow", value: "slow" },
    { label: "Fast", value: "fast" },
  ];

  changed(v: any) {
    this.bitaxeService.changeSpeed(v.value);
  }
}
