import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  contactMethods = [
    {id : 1, name : 'email'},
    {id : 2, name : 'message'},
    {id : 3, name : 'call'}
  ];

  log(z) {
    console.log(z);
  }

  submit(f) {
    console.log(f);
  }

  constructor() { }

  ngOnInit() {
  }

}
