// * ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// * CUSTOM
import { StyleModuleModule } from '../style-module/style-module.module';
import { CloseIconComponent } from './close-icon/close-icon.component';
import { PageSeoComponent } from './page-seo/page-seo.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { RichEditorComponent } from './rich-editor/rich-editor.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ContentLayoutComponent } from './templates/content-layout/content-layout.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { FieldErrorsComponent } from './field-errors/field-errors.component';
import { FormBuilderCoreComponent } from './form-builder/form-builder-core/form-builder-core.component';

@NgModule({
  declarations: [
    CloseIconComponent,
    PageSeoComponent,
    FormBuilderComponent,
    InputComponent,
    TextareaComponent,
    InputPasswordComponent,
    RichEditorComponent,
    DropdownComponent,
    ContentLayoutComponent,
    CheckboxComponent,
    ChipsComponent,
    FieldErrorsComponent,
    FormBuilderCoreComponent,
  ],
  imports: [CommonModule, StyleModuleModule, ReactiveFormsModule, RouterModule],
  exports: [
    CloseIconComponent,
    PageSeoComponent,
    FormBuilderComponent,
    InputComponent,
    TextareaComponent,
    RichEditorComponent,
    DropdownComponent,
    ContentLayoutComponent,
    CheckboxComponent,
    ChipsComponent,
  ],
  providers: [],
})
export class SharedComponentsModule {}
