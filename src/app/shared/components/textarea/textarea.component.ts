import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class TextareaComponent implements OnInit {
  @Input('options') fieldOptions;
  errors: any = {};

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {}

  onChange(event: Event) {
    const formGroup = this.controlContainer.control as FormGroup;
    this.errors = formGroup.controls[this.fieldOptions.formControlName].errors;
  }
}
