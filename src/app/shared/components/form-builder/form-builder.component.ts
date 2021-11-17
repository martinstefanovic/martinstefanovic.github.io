import { CustomUtils } from '@coreShared/customUtils';
import { AppConfig } from '@config/config';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
})
export class FormBuilderComponent implements OnInit {
  @Input('form') form: FormGroup;
  @Input('mainForm') mainForm: FormGroup;
  @Input('fields') fields;
  @Input('styleClass') styleClass: string;
  @Input() multiLang: boolean = false;
  CustomUtils = CustomUtils;

  constructor(public appConfig: AppConfig) {}

  ngOnInit(): void {}
}
