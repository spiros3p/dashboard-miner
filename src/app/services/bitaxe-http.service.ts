import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class BitaxeHttpService {
  private readonly http = inject(HttpClient);

  private readonly base = "http://192.168.0.102";
  private readonly urlSys = "/api/system";
  private readonly urlInfo = "/api/system/info";

  updateSystem(dt: Record<string, any>) {
    const url = `${this.base}${this.urlSys}`;
    return this.http.patch<void>(url, dt);
  }

  fetchInfo() {
    const url = `${this.base}${this.urlInfo}`;
    return this.http.get<Record<string, any>>(url);
  }
}
