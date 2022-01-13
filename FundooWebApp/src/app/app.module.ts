import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {  MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { NoteComponent } from './components/note/note/note.component';
import { DisplaynoteComponent } from './components/displayNote/displaynote/displaynote.component';
import { CreatenoteComponent } from './components/createNote/createnote/createnote.component';
import { FormControl, FormGroup } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginComponent } from './components/login/login/login.component';
import { ForgetComponent } from './components/pwd-forgot/forget/forget.component';
import { ResetComponent } from './components/pwd-reset/reset/reset.component';
import { IconsComponent } from './components/app-icon/icons/icons.component';
import { GetAllNotesComponent } from './components/getAllNotes/get-all-notes/get-all-notes.component';
import { UpdateComponent } from './components/update-Note/update/update.component';
import { TrashComponent } from './components/trash/trash/trash.component';
import { AuthGuardService } from './services/AuthGuard/auth-guard.service';
import {MatMenuModule} from '@angular/material/menu';
import { ArchiveComponent } from './components/archive/archive/archive.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardComponent,
    NoteComponent,
    DisplaynoteComponent,
    CreatenoteComponent,
    LoginComponent,
    ForgetComponent,
    ResetComponent,
    IconsComponent,
    GetAllNotesComponent,
    UpdateComponent,
    TrashComponent,
    ArchiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule,MatTooltipModule,
    MatInputModule ,MatDialogModule,MatChipsModule,MatButtonModule,MatFormFieldModule,FormsModule,
     ReactiveFormsModule,MatCheckboxModule,MatMenuModule
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
