import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.scss'],
})
export class FieldErrorsComponent implements OnInit {
  @Input() errors;

  constructor() {}

  ngOnInit(): void {}
}
