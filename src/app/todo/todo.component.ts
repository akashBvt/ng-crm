import { Component, OnInit } from '@angular/core';
import { TodoService } from '../_services/todo.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos = [];
  loading = false;
  error = null;
  pageSize = 7;
  currentPage = 0;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loading = true;
    this.todoService.getTodos().subscribe(
      (data) => {
        this.todos = data;
        this.loading = false;
      },
      (err) => {
        this.error = err.message;
        this.loading = false;
      }
    );
  }

  changePage(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }
}
