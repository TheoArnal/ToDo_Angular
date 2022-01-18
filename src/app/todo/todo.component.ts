import { Component, OnInit } from '@angular/core';

export interface Item{
  description: string,
  done: boolean
};

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  Items = [
    { description : 'faire le ménage', done : false },
    { description : 'faire à manger', done : false},
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
}
