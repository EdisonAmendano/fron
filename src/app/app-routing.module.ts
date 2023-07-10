import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPersonasComponent } from './page/persona/listar-personas/listar-personas.component';
import { CrearPersonaComponent } from './page/parsona/crear-persona/crear-persona.component';

const routes: Routes = [
  {path:'', component: ListarPersonasComponent},
  {path:'persona/create', component: CrearPersonaComponent},
  {path:'persona/list', component: ListarPersonasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
