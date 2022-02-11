import { Injectable } from '@angular/core';
import {Item} from "./todo/todo.component";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  items : Item[] = [
    { id: 0 ,description : 'Faire le ménage', done : false },
    { id: 1 ,description : 'Faire à manger', done : false},
  ]

  public item$: BehaviorSubject<Item[]>;

  constructor() {
    this.item$ = new BehaviorSubject<Item[]>(this.items)
  }

  getItems(): BehaviorSubject<Item[]> {return this.item$}

  addTodo(desc : string): void {
    const id = this.items.length === 0 ? 1 : Math.max.apply(Math, this.items.map((item)=>{
      return item.id
    })) + 1
    if(desc !== ''){
      this.items.push({
        id: id,
        description: desc,
        done: false
      })
      this.item$.next(this.items);
    }

  }

  deleteTodo(i: number): void {
    const index = this.items.findIndex((x) => x.id === i)
    if (index > -1) {
      this.items.slice(index, 1);
      this.item$.next(this.items);
    }
  }

  editItem(result: string, id: number): void {
    this.items[id].description = result
    this.item$.next(this.items)
  }





}
