import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// We import our custom components (we'll use them at the Routes array)
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

// Routes array with pairs path-component
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'list', component: ListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
