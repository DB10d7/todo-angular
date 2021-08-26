import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { todos } from './classess/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url="http://localhost:3000/todos";
  
  constructor(private http: HttpClient){}
  getList(){
    console.log(this.http.get(this.url));
    return this.http.get(this.url);
  }
  saveToDo(res:any){
    console.warn("service",res);
    return this.http.post<any>(this.url,res);
  }
}
