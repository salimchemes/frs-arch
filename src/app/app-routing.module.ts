import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ProjectComponent } from "./pages/project/project.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "project",
    component: ProjectComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
