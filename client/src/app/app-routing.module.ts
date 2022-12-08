import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './pages/create-note/create-note.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
    {
        path: "", 
        component: HomeComponent
    }, 
    {
        path: 'notes/:id',
        component: EditNoteComponent
    },
    {
        path: 'notes', 
        redirectTo: '',
    }, 
    {
        path: "create",
        component: CreateNoteComponent
    }, 
    {
        path: "**",
        component: NotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
