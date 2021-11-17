import { AppConfig } from '@config/config';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  seoFields = [
    {
      options: {
        label: 'Tagovi',
        containerClass: 'p-mb-0',
        formControlName: 'slug',
      },
    },
    {
      options: {
        label: 'Tagovi',
        containerClass: 'p-mb-0',
        formControlName: 'meta_title',
      },
    },
    {
      options: {
        label: 'Tagovi',
        containerClass: 'p-mb-0',
        formControlName: 'meta_keywords',
      },
    },
    {
      options: {
        label: 'Tagovi',
        containerClass: 'p-mb-0',
        formControlName: 'meta_description',
      },
    },
  ];

  constructor(private fb: FormBuilder, private appConfig: AppConfig) {}

  createMultiLangForm(fields) {
    let form: FormGroup = this.fb.group({});

    this.appConfig.languages.forEach((lang) => {
      // Loop all languages and add fields for every lang
      form.addControl(lang.code, this.createForm(fields));
    });

    return form;
  }

  createForm(fields) {
    let form: FormGroup = this.fb.group({});
    let validators: any[];

    const createField = (singleField) => {
      validators = [];
      let newControl;
      if (singleField.options) {
        if (singleField.options.formControlType === 'array') {
          // Create from array
          newControl = new FormArray([]);
        } else {
          // Create form control
          newControl = new FormControl({
            value: singleField.options?.value ?? '',
            disabled: singleField.options?.disabled && true,
          });
        }

        // Add validators to control
        if (singleField.options?.validators?.required) {
          validators.push(Validators.required);
        }
        if (singleField.options?.validators?.maxLength) {
          validators.push(
            Validators.maxLength(singleField.options?.validators?.maxLength)
          );
        }

        // Set validators
        newControl.setValidators(validators);
        // Add control to form
        form.addControl(singleField.options.formControlName, newControl);
      }
    };

    fields.forEach((field) => {
      if (field.controlType === 'page-seo') {
        this.seoFields.forEach((dummyField) => {
          createField(dummyField);
        });
      }
      if (field.dummyFields) {
        field.dummyFields.forEach((dummyField) => {
          createField(dummyField);
        });
      }
      // Check if this is group of dields
      if (field.group) {
        // Loop group of fields
        field.group.forEach((singleField) => {
          createField(singleField);
        });
      } else {
        createField(field);
      }
    });
    // console.log('OVO JE TEST FORMA', form);

    return form;
  }
}
