import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class InputComponent implements OnInit {
  @Input('options') fieldOptions;
  @Input('customFormGroup') customFormGroup: any;
  errors: any = {};
  specificFormGroup: FormGroup;

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {
    if (
      this.fieldOptions.fieldFormGroup ||
      this.fieldOptions.fieldFormGroup == ''
    ) {
      this.specificFormGroup = this.getSpecificFormGroup(
        this.fieldOptions.fieldFormGroup
      );
    } else {
      this.specificFormGroup = this.customFormGroup;
    }
    if (this.fieldOptions.fieldFormGroup == '') {
      this.specificFormGroup = this.customFormGroup;
    }
    // this.specificFormGroup = this.fieldOptions.fieldFormGroup !== '' ? this.getSpecificFormGroup(this.fieldOptions.fieldFormGroup) : this.customFormGroup;
  }

  onChange(event: Event) {
    const formGroup = this.controlContainer.control as FormGroup;

    if (
      this.customFormGroup &&
      this.fieldOptions.fieldFormGroup !== undefined
    ) {
      this.errors = this.customFormGroup.controls[
        this.fieldOptions.formControlName
      ].errors;
    } else if (
      this.customFormGroup &&
      (this.fieldOptions.fieldFormGroup ||
        this.fieldOptions.fieldFormGroup == '')
    ) {
      this.errors =
        formGroup.controls[this.fieldOptions.formControlName].errors;
    } else {
      this.errors =
        formGroup.controls[this.fieldOptions.formControlName].errors;
    }
  }

  getSpecificFormGroup(formGroupPath: string) {
    return <FormGroup>this.customFormGroup.get(formGroupPath);
  }
}
