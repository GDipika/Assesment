import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

private apiUrl = "http://localhost:3000/posts";

  constructor(private http: HttpClient) { }

  postUser(data: any) {
    console.log(data)
    return this.http.post<any>(this.apiUrl, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getUser() {
    return this.http.get<any>("http://localhost:3000/posts")
      .pipe(map((res: any) => {
        return res;
      }))
  }

  updateUser(data: any, id: number) {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // (`${this.baseUrl}/${id}` )

  deleteUser(id: any) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
      .pipe(map((res: any) => {
        console.log(res)
        return res;
      }))
  }
}
