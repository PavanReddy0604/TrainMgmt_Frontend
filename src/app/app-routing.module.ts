import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainListComponent } from './features/train-list/train-list.component';
import { TrainFormComponent } from './features/train-form/train-form.component';

const routes: Routes = [
  { path: '', component: TrainListComponent },
  { path: 'add', component: TrainFormComponent },
  { path: 'edit/:id', component: TrainFormComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
