import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  public API = '//thawing-chamber-47973.herokuapp.com/owners';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API);
  }

  get(id: string) {
    return this.http.get(this.API + '/' + id);
  }

  save(own: any): Observable<any> {
    let result: Observable<Object>;
    if (own['href']) {
      result = this.http.put(own.href, own);
    } else {
      result = this.http.post(this.API, own);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
