import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { StudentlistComponent } from "./components/studentlist/studentlist.component";
import { EmployeelistComponent } from "./components/employeelist/employeelist.component";
import { FruitlistComponent } from "./components/fruitlist/fruitlist.component";


const routes: Routes = [
  { path: 'studentlist', component: StudentlistComponent},
  { path: 'employeelist', component: EmployeelistComponent},
  { path: 'fruitlist', component: FruitlistComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

  ],

  declarations: [
    AppComponent,
    StudentlistComponent,
    EmployeelistComponent,
    FruitlistComponent,
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
