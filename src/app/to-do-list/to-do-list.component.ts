import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  
  listTodos: any;
  constructor(private todo:TodoService,private route: ActivatedRoute, private router: Router) {
   }

  
  ngOnInit(): void {

    this.todo.getList().subscribe((resp)=>{

     this.listTodos = resp;
     })
  }
  deleteToDo(row:any){

    this.todo.deleteToDo(row.id).subscribe((res)=>{
      console.warn("data is here",res);
      alert("Delete ToDo");
      this.ngOnInit();
    })
  }
  updateToDo(id:number) {
    this.router.navigate(['list/update',id]);
  }
  collectToDo() {
    this.router.navigate(['add']);
  }
}
