import { StyleModuleModule } from '@shared/style-module/style-module.module';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperSandboxRoutingModule } from './developer-sandbox-routing.module';
import { FormsComponent } from './forms/forms.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentsModule,
    DeveloperSandboxRoutingModule,
    StyleModuleModule,
  ],
})
export class DeveloperSandboxModule {}
