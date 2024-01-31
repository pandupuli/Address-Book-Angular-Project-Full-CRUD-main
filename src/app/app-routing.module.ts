import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { NewuserComponent } from './newuser/newuser.component';
import { FileUploaderProgressBarComponent } from './file-uploader-progress-bar/file-uploader-progress-bar.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'newcontact', component: NewcontactComponent },
  { path: 'newuser', component: NewuserComponent },
  { path: 'uploadfile', component: FileUploaderProgressBarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
