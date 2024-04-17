import { Routes } from '@angular/router';
import { IniciarSesionComponent } from './pages/auth/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './pages/auth/registro/registro.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfesionalComponent } from './pages/profesional/profesional.component';

export const routes: Routes = [
    {path: "home", component:DashboardComponent},
    {path:"iniciar-sesion", component:IniciarSesionComponent},
    {path:"registro", component:RegistroComponent},
    {path:"quienes-somos", component:QuienesSomosComponent},
    {path:"servicios", component:ServiciosComponent},
    {path:"quienes-somos/:id", component:ProfesionalComponent},
    {path:"", redirectTo:"/home", pathMatch:"full"}
];
