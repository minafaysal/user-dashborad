import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCardsComponent } from './user-cards/user-cards.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-cards', pathMatch: 'full' },
  { path: 'user-cards', component: UserCardsComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
