// * ANGULAR
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// * CUSTOM
import { MainLayoutComponent } from './includes/layout/main-layout/main-layout.component';

const routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      // Developer sandbox
      {
        path: 'developer',
        loadChildren: () =>
          import('./modules/developer-sandbox/developer-sandbox.module').then(
            (m) => m.DeveloperSandboxModule
          ),
      },

      { path: '', redirectTo: 'developer', pathMatch: 'full' }, // Redirect to orders
    ],
  },
  { path: '**', redirectTo: 'developer' }, // redirect to home
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
