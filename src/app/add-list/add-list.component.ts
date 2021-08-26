import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})


export class AddListComponent implements OnInit {

  addToDo= new FormGroup({
    name: new FormControl(''),
    note: new FormControl('')
  })
  constructor(private todo:TodoService) { }


  ngOnInit(): void {
  }

  collectToDo(){
    console.warn(this.addToDo.value)
    this.todo.saveToDo(this.addToDo.value).subscribe((result)=>{
      console.warn("data is here",result)
    })
  }



}
