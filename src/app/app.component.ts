import {Component, OnDestroy, OnInit} from '@angular/core';
import {Item} from "./todo/todo.component";
import {Subscription} from "rxjs";
import {TodoService} from "./todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'toutoulist';
  items!: Item[];
  itemSubscribtion!: Subscription;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    (window as any).startparticles()
    this.itemSubscribtion = this.todoService.item$.subscribe((items)=>this.items = items)
  }

  ngOnDestroy(): void {
    if(this.itemSubscribtion){
      this.itemSubscribtion.unsubscribe();
    }
  }
}
