import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { PageSeoComponent } from './page-seo.component';
import { StyleModuleModule } from 'src/app/shared/style-module/style-module.module';
// Button.stories.ts

import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Atoms/Page SEO',
  component: PageSeoComponent,
  decorators: [
    moduleMetadata({
      imports: [
        StyleModuleModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
} as Meta;

export const Primary = () => ({
  props: {
    formGroup: new FormGroup({
      slug: new FormControl(),
      meta_title: new FormControl(),
      meta_keywords: new FormControl(),
      meta_description: new FormControl(),
    }),
  },
});
