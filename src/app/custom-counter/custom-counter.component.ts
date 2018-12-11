import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit {

  @Input()
  get counter() {
    return this.counterValue;
  }

  set counter(value) {
    this.counterValue = value;
    this.counterChange.emit(this.counterValue);
  }

  constructor() { }

  counterValue = 0;

  @Output()
  counterChange = new EventEmitter();

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }

  ngOnInit() {
  }

}
