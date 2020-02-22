import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      {path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'issue', loadChildren: () => import('./pages/issue/issue.module').then(n => n.IssueModule)},
      {path: 'project', loadChildren: () => import('./pages/project/project.module').then(i => i.ProjectModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
