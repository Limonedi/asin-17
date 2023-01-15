import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './com/edit/edit.component';
import { ListComponent } from './com/list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'list', component: ListComponent },
  { path: 'edit/:id', component: EditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
