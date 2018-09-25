import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { AformComponent } from './aform/aform.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, WelcomeComponent, AformComponent],
    exports: [LayoutComponent]
})
export class UiModule { }
