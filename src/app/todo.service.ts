import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable, pipe } from 'rxjs';


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
  deleteToDo(id: number){
    return this.http.delete<any>("http://localhost:3000/todos/"+id);
  }
  updateToDo(id: number, data: any){
    return this.http.put<any>("http://localhost:3000/todos/"+id, data);
  }
}
