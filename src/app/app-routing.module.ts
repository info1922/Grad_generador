import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradienteComponent } from './gradiente/gradiente.component';
import { BoxshadowComponent } from './boxshadow/boxshadow.component';

const routes: Routes = [
{	path: 'gradient', component: GradienteComponent
},
{path: 'boxshadow', component: BoxshadowComponent},
{path: '**', component: GradienteComponent},
{ path: '',
    redirectTo: 'gradient',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
