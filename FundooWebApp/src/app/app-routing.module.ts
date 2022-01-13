import { createComponent } from '@angular/compiler/src/core';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatenoteComponent } from './components/createNote/createnote/createnote.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { DisplaynoteComponent } from './components/displayNote/displaynote/displaynote.component';
import { GetAllNotesComponent } from './components/getAllNotes/get-all-notes/get-all-notes.component';
import { LoginComponent } from './components/login/login/login.component';
import { NoteComponent } from './components/note/note/note.component';
import { ForgetComponent } from './components/pwd-forgot/forget/forget.component';
import { ResetComponent } from './components/pwd-reset/reset/reset.component';
import { SignupComponent } from './components/signup/signup/signup.component';
import { AuthenticationGuard } from './authentication.guard';
import { ArchiveComponent } from './components/archive/archive/archive.component';
import { TrashComponent } from './components/trash/trash/trash.component';

const routes: Routes = [
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'forgot',component:ForgetComponent
  },
  {
    path: 'resetpassword/:token',component:ResetComponent
  },
  {
    path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
    children:[{path:'',redirectTo:'note',pathMatch:'full'},
     
    {
      path:'note',component:GetAllNotesComponent,
    },
    {
      path:'archive',component:ArchiveComponent
    },
    {
      path:'trash',component:TrashComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
