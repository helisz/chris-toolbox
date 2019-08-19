import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-demo1-add',
  templateUrl: './demo1-add.component.html',
  styleUrls: ['./demo1-add.component.scss']
})
export class Demo1AddComponent implements OnInit {

  @Output() ready: EventEmitter<any> = new EventEmitter<any>(); // 输出属性

  name: string;
  age: number;

  constructor() { }

  ngOnInit() {
    this.name = '';
    this.age = null;
  }

  addUser(){
    let obj = {
      name: this.name,
      age: this.age
    }
    this.ready.emit(obj);
  }

}
