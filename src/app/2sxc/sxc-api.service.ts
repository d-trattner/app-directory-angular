import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class ApiResourceFactory {
  constructor(
    private http: Http
  ) { }

  resource<T>(ctrl: string) {
    return new ApiResource<T>(this.http, ctrl);
  }
}

export class ApiResource<T> {
  constructor(
    private http: Http,
    private ctrl: string
  ) { }

  get(id: number = null): Observable<T> {
    let url = `/DesktopModules/2sxc/API/app-api/${this.ctrl}`;
    if (id) url += `/${id}`;
    let headers = new Headers();
    return this.http.get(url, { headers })
      .map(response => <T>response.json());
  }
}