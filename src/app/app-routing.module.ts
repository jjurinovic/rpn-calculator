import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { BaseComponent } from './core/layout/base/base.component';
import { LoginComponent } from './core/login/login.component';
import { CalculatorComponent } from './features/calculator/components/calculator/calculator.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'calculator',
        pathMatch: 'full',
      },
      { path: 'calculator', component: CalculatorComponent },
    ],
  },
  {
    path: '**',
    redirectTo: 'calculator',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
