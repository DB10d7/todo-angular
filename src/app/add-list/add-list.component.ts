import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private todo:TodoService,private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
  }

  collectToDo(){
    console.warn(this.addToDo.value)
    this.todo.saveToDo(this.addToDo.value).subscribe((result)=>{
      console.warn("data is here",result);
      alert("ToDo Added Successfully");
      this.addToDo.reset();
      this.router.navigate(['list']);
    })
  }
  



}
