import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { PhotographyComponent } from "./photography/photography.component";
import { QuickeryComponent } from "./quickery/quickery.component";
import { WorkComponent } from "./work/work.component";
import { VirtufitComponent } from "./virtufit/virtufit.component";

const routes: Routes = [
  { path: "", redirectTo: "work", pathMatch: "full" },
  { path: "work", component: WorkComponent },
  { path: "about", component: AboutComponent },
  { path: "photography", component: PhotographyComponent },
  { path: "quickery", component: QuickeryComponent },
  { path: "picazu", component: AdminDashboardComponent },
  { path: "virtufit", component: VirtufitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
