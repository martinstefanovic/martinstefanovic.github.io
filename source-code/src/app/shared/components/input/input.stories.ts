import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputComponent } from './input.component';
import { StyleModuleModule } from 'src/app/shared/style-module/style-module.module';

import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Atoms/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [
        StyleModuleModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
      providers: [FormGroupDirective],
    }),
  ],
} as Meta;

export const Primary = () => ({
  props: {
    options: {
      type: 'text',
      containerClass: 'p-mb-0',
      label: 'Page name',
      placeholder: 'eg. Homepage',
      formControlName: 'title',
    },
    customFormGroup: new FormGroup({
      title: new FormControl(),
    }),
  },
});
