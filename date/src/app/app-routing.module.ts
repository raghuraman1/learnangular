import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './ui/welcome/welcome.component';
import { AformComponent } from './ui/aform/aform.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'aform', component: AformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
