import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindFruitComponent } from './find-fruit/find-fruit.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TrialComponent } from './trial/trial.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'tictac',
    component: TicTacToeComponent
  },
  {
    path:'navbar',
    component: NavbarComponent
  },
  {
    path:'findfruit',
    component:FindFruitComponent
  },
  {
    path:'trial',
    component:TrialComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

