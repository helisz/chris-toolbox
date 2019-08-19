import { Component, OnInit, ViewChild } from '@angular/core';
import { Demo1AddComponent } from '../demo1-add/demo1-add.component';

@Component({
  selector: 'app-demo1-main',
  templateUrl: './demo1-main.component.html',
  styleUrls: ['./demo1-main.component.scss']
})
export class Demo1MainComponent implements OnInit {

  @ViewChild(Demo1AddComponent) adder: Demo1AddComponent;

  data: Array<object> = [];

  constructor(
    // data: object[]
  ) {
    this.data = [
      {
        name: 'Chris',
        age: 24
      },
      {
        name: 'Alpha',
        age: 42
      }
    ];
  }


  ngOnInit() {
  }

  add(object: any) {
    this.data.push(object);
    this.data = [...this.data];
    this.close();
  }

  delete(ind: number) {
    this.data.splice(ind, 1);
    this.data = [...this.data];
  };


  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
