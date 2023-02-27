import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {
  ProfileBulderListsComponent
} from "./Components/profile-bulder-lists/Profile-list/profile-bulder-lists.component";
import {
  ProfileWorkComponent
} from "./Components/profile-bulder-lists/WorkflowProfile/profile-work/profile-work.component";

const routes: Routes = [
  {path: '/home', component: ProfileBulderListsComponent},
  {path: '/:title/:id', component: ProfileWorkComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
