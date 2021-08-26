import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { todos } from '../classess/todos';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  
  listTodos: any;
  constructor(private todo:TodoService) {
   }

  
  ngOnInit(): void {

    this.todo.getList().subscribe((resp)=>{

     this.listTodos = resp;
     })
  }
}
