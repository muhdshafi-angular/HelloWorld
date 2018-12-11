import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  constructor() { }

  title = 'String Interpolation Demo 1';
  num = 12;
  data = 'Initial Text';

  ngOnInit() {
  }
  onEnter() {
    alert('Enter pressed');
  }
  onclick2(email) {
    alert(email);
  }
  onclick(e) {
    console.log('inside onclick():', e.target.textContent);
  }
}
