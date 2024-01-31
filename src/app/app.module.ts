import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Angular material
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateDialogComponent } from './dialogs/update-dialog/update-dialog.component';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NewuserComponent } from './newuser/newuser.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule} from '@angular/material/snack-bar';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FileUploaderProgressBarComponent } from './file-uploader-progress-bar/file-uploader-progress-bar.component';
import { ImagePreviewComponent } from './image-preview/image-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    NewcontactComponent,
    UpdateDialogComponent,
    DeleteDialogComponent,
    NewuserComponent,
    FileUploaderProgressBarComponent,
    ImagePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatExpansionModule,
    MatStepperModule,
    MatProgressBarModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
