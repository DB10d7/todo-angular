import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.css']
})
export class UpdateListComponent implements OnInit {

  updatesToDo= new FormGroup({
    name: new FormControl(''),
    note: new FormControl('')
  })
  
  
  constructor(private todo:TodoService,private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit(): void {

    
  }
  updateToDo(){
    console.warn(this.updatesToDo.value)
    this.todo.updateToDo(this.route.snapshot.params['id'],this.updatesToDo.value).subscribe((result)=>{
      console.warn("data is here",result);
      alert("ToDo Updated Successfully");
      this.updatesToDo.reset();
      this.router.navigate(['list']);
    })
  }
}
