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
import { CourselistComponent } from "./components/courselist/courselist.component";
import { BooklistComponent } from "./components/booklist/booklist.component";
import { CitylistComponent } from "./components/citylist/citylist.component";
import { MovielistComponent } from "./components/movielist/movielist.component";
import { CarmodellistComponent } from "./components/carmodellist/carmodellist.component";
import { ProductllistComponent } from "./components/productllist/productllist.component";
import { SubjectlistComponent } from "./components/subjectlist/subjectlist.component";
import { CountrylistComponent } from "./components/countrylist/countrylist.component";
import { SportslistComponent } from "./components/sportslist/sportslist.component";
import { VegetablelistComponent } from "./components/vegetablelist/vegetablelist.component";
import { AnimallistComponent } from "./components/animallist/animallist.component";
import { ToollistComponent } from "./components/toollist/toollist.component";
import { LanguagelistComponent } from "./components/languagelist/languagelist.component";
import { GamelistComponent } from "./components/gamelist/gamelist.component";
import { SoftwarelistComponent } from "./components/softwarelist/softwarelist.component";
import { PhonecontactlistComponent } from "./components/phonecontactlist/phonecontactlist.component";
import { MusicplaylistComponent } from "./components/musicplaylist/musicplaylist.component";
import { FoodmenulistComponent } from "./components/foodmenulist/foodmenulist.component";
import { GrocerylistComponent } from "./components/grocerylist/grocerylist.component";
import { ClassroomlistComponent } from "./components/classroomlist/classroomlist.component";


const routes: Routes = [
  { path: 'studentlist', component: StudentlistComponent},
  { path: 'employeelist', component: EmployeelistComponent},
  { path: 'fruitlist', component: FruitlistComponent},
  { path: 'courselist', component: CourselistComponent},
  { path: 'booklist', component: BooklistComponent},
  { path: 'citylist', component: CitylistComponent},
  { path: 'movielist', component: MovielistComponent},
  { path: 'carmodellist', component: CarmodellistComponent},
  { path: 'productlist', component: ProductllistComponent},
  { path: 'subjectlist', component: SubjectlistComponent},
  { path: 'countrylist', component: CountrylistComponent},
  { path: 'sportslist', component: SportslistComponent},
  { path: 'vegetablelist', component: VegetablelistComponent},
  { path: 'animallist', component: AnimallistComponent},
  { path: 'toollist', component: ToollistComponent},
  { path: 'languagelist', component: LanguagelistComponent},
  { path: 'gamelist', component: GamelistComponent},
  { path: 'softwarelist', component: SoftwarelistComponent},
  { path: 'phonecontactlist', component: PhonecontactlistComponent},
  { path: 'musicplaylist', component: MusicplaylistComponent},
  { path: 'foodmenulist', component: FoodmenulistComponent},
  { path: 'grocerylist', component: GrocerylistComponent},
  { path: 'classroomlist', component: ClassroomlistComponent},
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
    CourselistComponent,
    BooklistComponent,
    CitylistComponent,
    MovielistComponent,
    CarmodellistComponent,
    ProductllistComponent,
    SubjectlistComponent,
    CountrylistComponent,
    SportslistComponent,
    VegetablelistComponent,
    AnimallistComponent,
    ToollistComponent,
    LanguagelistComponent,
    GamelistComponent,
    SoftwarelistComponent,
    PhonecontactlistComponent,
    MusicplaylistComponent,
    FoodmenulistComponent,
    GrocerylistComponent,
    ClassroomlistComponent,
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
