import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class DropdownComponent implements OnInit {
  @Input('options') fieldOptions;
  @Input('customFormGroup') customFormGroup: any;
  errors: any = {};
  specificFormGroup: FormGroup;
  @Output() onChange = new EventEmitter<any>();

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {
    if (
      this.fieldOptions.fieldFormGroup != '' &&
      this.fieldOptions.fieldFormGroup != undefined
    ) {
      this.specificFormGroup =
        this.fieldOptions.fieldFormGroup !== ''
          ? this.getSpecificFormGroup(this.fieldOptions.fieldFormGroup)
          : this.customFormGroup;
    } else {
      this.specificFormGroup = this.customFormGroup;
    }
  }

  // onChange(event: Event) {
  //   const formGroup = this.controlContainer.control as FormGroup;

  //   if (this.customFormGroup) {
  //     this.errors = this.customFormGroup.controls[
  //       this.fieldOptions.formControlName
  //     ].errors;
  //   } else {
  //     this.errors =
  //       formGroup.controls[this.fieldOptions.formControlName].errors;
  //   }
  // }

  onChangeValue() {
    this.onChange.emit(true);
  }

  getSpecificFormGroup(formGroupPath: string) {
    return <FormGroup>this.customFormGroup.get(formGroupPath);
  }
}
