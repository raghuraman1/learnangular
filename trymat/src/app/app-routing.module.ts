import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { DialogDemo } from './dialog/dialog-demo';

const routes: Routes = [
  {path: 'hello', component: HelloComponent},
  {path: 'dialog', component: DialogDemo},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
