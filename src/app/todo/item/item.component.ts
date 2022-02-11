import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from "../../todo.service";
import {Item} from "../../todo/todo.component";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item!: {
    id: number;
    description: string;
    done: boolean;
  }
  //itemSubscription!: Subscription
  //items!: Item[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    //this.itemSubscription = this.todoService.getItems().subscribe((items)=>{
      //this.items = items
   // })
  }

  public deleteItem():void {
    this.todoService.deleteTodo(this.item.id)
  }

  public editItem():void {
    let descr = this.item.description
    let id = this.item.id
    let result = prompt("Edit Task Title", descr);
    if(result !==null && result !== ""){
      this.todoService.editItem(result, id)
    }


  }
}
