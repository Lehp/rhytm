import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import SaxofonComponent from "./saxofon/saxofon.component";
import PianoComponent from "./piano/piano.component";

const routes: Routes = [
  {path: "", component: SaxofonComponent},
  {path: "saxofon", component: SaxofonComponent},
  {path: "piano", component: PianoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
