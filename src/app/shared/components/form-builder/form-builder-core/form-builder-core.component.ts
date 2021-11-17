import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-builder-core',
  templateUrl: './form-builder-core.component.html',
})
export class FormBuilderCoreComponent implements OnInit {
  @Input() field;
  @Input('form') form: FormGroup;
  @Input('mainForm') mainForm: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
