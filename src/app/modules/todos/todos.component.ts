import { Component, OnInit } from '@angular/core';
import { TodosService } from './services/todos.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { TodoModel } from './models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todosTitle = "Todos";

  todos:TodoModel[] = [];

  faCheck = faCheck;



  constructor(
    private todoService: TodosService
  ) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(){
    this.todoService.getTodosMethod().subscribe((response) =>{
      console.log(response);
      this.todos = response;
    })
  }

}
