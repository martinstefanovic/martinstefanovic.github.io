// * ANGULAR
import { NgModule } from '@angular/core';

// * PRIMENG IMPORTS
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { EditorModule } from 'primeng/editor';

@NgModule({
  declarations: [],
  exports: [
    InputTextModule,
    PanelModule,
    InputTextareaModule,
    AccordionModule,
    TabViewModule,
    DropdownModule,
    SelectButtonModule,
    ToggleButtonModule,
    MultiSelectModule,
    ButtonModule,
    ChipsModule,
    EditorModule,
  ],
})
export class StyleModuleModule {}
