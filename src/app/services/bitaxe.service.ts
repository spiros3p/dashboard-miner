import { inject, Injectable } from "@angular/core";
import { BitaxeHttpService } from "./bitaxe-http.service";

@Injectable({
  providedIn: "root",
})
export class BitaxeService {
  private bitaxeHttp = inject(BitaxeHttpService);

  changeSpeed(v: string) {
    if (v === "slow") {
      this.turnSlower();
    } else if (v === "fast") {
      this.turnFaster();
    }
  }

  private turnSlower() {
    this.bitaxeHttp.updateSystem(this.slowState).subscribe({
      next: (d) => console.log(d),
      error: (e) => console.error(e),
    });
  }

  private turnFaster() {
    this.bitaxeHttp.updateSystem(this.fastState).subscribe({
      next: (d) => console.log(d),
      error: (e) => console.error(e),
    });
  }

  private readonly baseState = {
    flipscreen: true,
    invertscreen: false,
    stratumURL: "btc.viabtc.io",
    stratumPort: 3333,
    fallbackStratumURL: "btc.viabtc.io",
    fallbackStratumPort: 25,
    stratumUser: "sip7dc.bx1",
    fallbackStratumUser: "sip7dc.bx1",
    fallbackStratumPassword: "password",
    autofanspeed: true,
    invertfanpolarity: true,
    fanspeed: 55,
    overheat_mode: 0,
  };

  private readonly slowState = {
    ...this.baseState,
    coreVoltage: 1000,
    frequency: 400,
  };

  private readonly fastState = {
    ...this.baseState,
    coreVoltage: 1200,
    frequency: 575,
  };
}
