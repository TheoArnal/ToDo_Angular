import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from "../todo.service";
import {Subscription} from "rxjs";

export interface Item{
  id: number,
  description: string,
  done: boolean
};

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() itemId = 0;
  items!: Item[];
  itemSubscribtion!: Subscription;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

    this.itemSubscribtion = this.todoService.item$.subscribe((items)=>this.items = items)
  }

  ngOnDestroy(): void {
    if(this.itemSubscribtion){
      this.itemSubscribtion.unsubscribe();
    }
  }

  addItem(desc: string): void {
    this.todoService.addTodo(desc);
  }

  deleteItem(index : number): void {
    console.log(index)
    this.todoService.deleteTodo(index);
  }

  editItem(i: number): void {


  }


 /* Items = [
    { description : 'Faire le ménage', done : false },
    { description : 'Faire à manger', done : false},
  ];

  ngOnInit(): void {
  }

  public AddItem(value: string){

    if (value === ''){
      console.log('Veuillez rentrer un champ')
    } else {
      this.Items.push({
        description: value,
        done: false
      });
    }

    console.log("hello " + value)
  }
*/
  /*
  Delete(i: number) {
    this.Items.splice(i, 1);
  }

  Edit(i: number) {
    let descr = this.Items[i].description;
    let result = prompt("Edit Task Title", descr);
    if(result !==null && result !== ""){
      this.Items[i].description = result;
    }
  }

   */
}
