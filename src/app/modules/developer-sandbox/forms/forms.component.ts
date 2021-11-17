import { FormBuilderService } from './../../../core/services/form-builder.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsFieldsService } from './forms-fields.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: [
    `
      pre {
        font-family: monospace;
        background-color: #1e1e2d0f;
        padding: 0.5rem;
      }
      mark {
        font-family: monospace;
      }
      .developer-box {
        width: 100%;
        height: 140vh;
      }
      ul {
        list-style-position: inside;
      }
    `,
  ],
})
export class FormsComponent implements OnInit {
  pageForm: FormGroup;
  gridFields: FormGroup;
  groupGridFields: FormGroup;
  formBuilderHTML = `
  <app-form-builder
  [form]="pageForm"
  [fields]="fieldsService.mainFields">
  </app-form-builder>
  `;
  multiLangFormTS = `this.pageForm = this.fb.group({
    locale: this.formBuilder.createMultiLangForm(
      this.fieldsService.mainFields
    ),
  });`;

  constructor(
    public fieldsService: FormsFieldsService,
    private fb: FormBuilder,
    private formBuilder: FormBuilderService
  ) {}

  ngOnInit(): void {
    // Create page form
    this.pageForm = this.formBuilder.createForm(this.fieldsService.mainFields);
    this.gridFields = this.formBuilder.createForm(
      this.fieldsService.gridFields
    );
    this.groupGridFields = this.formBuilder.createForm(
      this.fieldsService.groupGridFields
    );
  }

  getOneField(array, fieldIndex) {
    let singleField = [];
    singleField.push(array[fieldIndex]);
    return singleField;
  }
}
