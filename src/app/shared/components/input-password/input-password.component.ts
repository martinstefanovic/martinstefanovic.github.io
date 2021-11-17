import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class InputPasswordComponent implements OnInit {
  @Input('options') fieldOptions;
  @Input() customFormGroup;
  errors: any;
  isPassShown = false;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {}

  onChange(event: Event) {
    const formGroup = this.controlContainer.control as FormGroup;

    if (this.customFormGroup) {
      this.errors = this.customFormGroup.controls[
        this.fieldOptions.formControlName
      ].errors;
    } else {
      this.errors =
        formGroup.controls[this.fieldOptions.formControlName].errors;
    }
  }

  togglePassShow() {
    this.isPassShown = !this.isPassShown;
  }
}
