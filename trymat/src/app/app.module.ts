import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, } from '@angular/material';
import {MatFormFieldModule, MatInputModule, MatSelect, MatSelectModule} from '@angular/material';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import { DialogDemo, JazzDialog, ContentElementDialog, IFrameDialog } from './dialog/dialog-demo';
import { MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    DialogDemo,
    JazzDialog, ContentElementDialog,IFrameDialog
  ],
 entryComponents[JazzDialog, ContentElementDialog, IFrameDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatDialogModule, MatFormFieldModule,
    MatCardModule, MatInputModule,
    MatSelectModule, FormsModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
