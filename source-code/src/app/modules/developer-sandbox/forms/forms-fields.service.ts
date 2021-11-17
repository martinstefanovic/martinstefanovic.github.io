import { Injectable } from '@angular/core';
import { FormBuilder } from '@shared/models/form-builder';

@Injectable({
  providedIn: 'root',
})
export class FormsFieldsService {
  dropdownList = [
    {
      label: 'Stavka 1',
      value: 'stv1',
    },
  ];
  mainFields: FormBuilder[] = [
    {
      controlType: 'input',
      colSize: 'p-col-12',
      options: {
        type: 'text',
        containerClass: 'p-mb-0',
        label: 'Ime stranice',
        placeholder: 'About',
        formControlName: 'title',
        value: '',
        disabled: false,
        validators: {
          required: true,
          maxLength: 200,
        },
      },
    },
    {
      controlType: 'input-password',
      colSize: 'p-col-12',
      options: {
        containerClass: 'p-mb-0',
        label: 'Šifra',
        formControlName: 'password',
        value: '',
        disabled: false,
        validators: {
          required: true,
          maxLength: 200,
        },
      },
    },
    {
      colSize: 'p-col-12',
      controlType: 'dropdown',
      options: {
        label: 'Lista',
        placeholder: 'Izaberi stavku',
        formControlName: 'role',
        optionValue: 'value',
        optionLabel: 'label',
        dropdownOptions: this.dropdownList,
        value: [],
      },
    },
    {
      colSize: 'p-col-12',
      controlType: 'textarea',
      options: {
        label: 'Napomena',
        formControlName: 'note',
        value: '',
        disabled: false,
        validators: {
          required: true,
          maxLength: 10,
        },
      },
    },
    {
      controlType: 'rich-editor',
      colSize: 'p-col-12',
      options: {
        label: 'Sadržaj',
        formControlName: 'content',
        value: '',
        disabled: false,
      },
    },
    {
      controlType: 'chips',
      colSize: 'p-col-12',
      options: {
        label: 'Tagovi',
        containerClass: 'p-mb-0',
        formControlName: 'tags',
        value: '',
        disabled: false,
      },
    },
    {
      controlType: 'page-seo',
      colSize: 'p-col-12',
    },
  ];
  dummyFields: FormBuilder[] = [
    {
      dummyFields: [
        {
          options: {
            formControlName: 'id',
            value: '',
          },
        },
        {
          options: {
            formControlName: 'attachments',
            formControlType: 'array',
            value: [],
          },
        },
      ],
    },
  ];

  gridFields: FormBuilder[] = [
    {
      controlType: 'input',
      colSize: 'p-col-12 p-sm-4',
      options: {
        type: 'text',
        containerClass: 'p-mb-0',
        label: 'Ime stranice',
        placeholder: 'About',
        formControlName: 'title',
        value: '',
        disabled: false,
        validators: {
          required: true,
          maxLength: 200,
        },
      },
    },
    {
      controlType: 'input',
      colSize: 'p-col-12 p-sm-4',
      options: {
        type: 'text',
        containerClass: 'p-mb-0',
        label: 'Ime stranice',
        placeholder: 'About',
        formControlName: 'title',
        value: '',
        disabled: false,
        validators: {
          required: true,
          maxLength: 200,
        },
      },
    },
    {
      controlType: 'input',
      colSize: 'p-col-12 p-sm-4',
      options: {
        type: 'text',
        containerClass: 'p-mb-0',
        label: 'Ime stranice',
        placeholder: 'About',
        formControlName: 'title',
        value: '',
        disabled: false,
        validators: {
          required: true,
          maxLength: 200,
        },
      },
    },
  ];

  groupGridFields: FormBuilder[] = [
    {
      colSize: 'p-col-12 p-sm-6',
      group: [
        {
          controlType: 'input',
          options: {
            label: 'Korisnik',
            type: 'text',
            formControlName: 'name',
            value: '',
            disabled: false,
            validators: {
              required: true,
              maxLength: 10,
            },
          },
        },
        {
          controlType: 'input',
          options: {
            label: 'Telefon',
            type: 'text',
            formControlName: 'phone',
            value: '',
            disabled: true,
            validators: {
              required: true,
              maxLength: 10,
            },
          },
        },
      ],
    },
    {
      controlType: 'textarea',
      colSize: 'p-col-12 p-sm-6',
      options: {
        label: 'Napomena',
        formControlName: 'note',
        value: '',
        rows: 5,
        disabled: false,
        validators: {
          required: true,
          maxLength: 200,
        },
      },
    },
  ];

  constructor() {}
}
