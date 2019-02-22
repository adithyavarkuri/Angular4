import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-formscomponent',
  templateUrl: './formscomponent.component.html',
  styleUrls: ['./formscomponent.component.css']
})
export class FormscomponentComponent implements OnInit {
  name = new FormControl('');
  constructor() { }
  updateName() {
    this.name.setValue('Nancy');
  }

  ngOnInit() {
  }

}
