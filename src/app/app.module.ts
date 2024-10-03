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
import { InventorylistComponent } from "./components/inventorylist/inventorylist.component";
import { LecturelistComponent } from "./components/lecturelist/lecturelist.component";
import { StationarylistComponent } from "./components/stationarylist/stationarylist.component";
import { FlowerlistComponent } from "./components/flowerlist/flowerlist.component";
import { DestinationlistComponent } from "./components/destinationlist/destinationlist.component";
import { LaptoplistComponent } from "./components/laptoplist/laptoplist.component";
import { LaptopspeclistComponent } from "./components/laptopspeclist/laptopspeclist.component";
import { ComputerhardwarelistComponent } from "./components/computerhardwarelist/computerhardwarelist.component";
import { MobileapplistComponent } from "./components/mobileapplist/mobileapplist.component";
import { VideolistComponent } from "./components/videolist/videolist.component";
import { TvshowlistComponent } from "./components/tvshowlist/tvshowlist.component";
import { FurniturelistComponent } from "./components/furniturelist/furniturelist.component";
import { AccessorylistComponent } from "./components/accessorylist/accessorylist.component";
import { BuildinglistComponent } from "./components/buildinglist/buildinglist.component";
import { PaintinglistComponent } from "./components/paintinglist/paintinglist.component";
import { ArtistlistComponent } from "./components/artistlist/artistlist.component";
import { ComposerlistComponent } from "./components/composerlist/composerlist.component";
import { PodcastlistComponent } from "./components/podcastlist/podcastlist.component";
import { ExerciselistComponent } from "./components/exerciselist/exerciselist.component";
import { MealplanlistComponent } from "./components/mealplanlist/mealplanlist.component";
import { BudgetlistComponent } from "./components/budgetlist/budgetlist.component";
import { PresentationlistComponent } from "./components/presentationlist/presentationlist.component";
import { TourlistComponent } from "./components/tourlist/tourlist.component";
import { EventlistComponent } from "./components/eventlist/eventlist.component";
import { DevelopertoollistComponent } from "./components/developertoollist/developertoollist.component";
import { FrameworklistComponent } from "./components/frameworklist/frameworklist.component";


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
  { path: 'inventorylist', component: InventorylistComponent},
  { path: 'lecturelist', component: LecturelistComponent},
  { path: 'stationarylist', component: StationarylistComponent},
  { path: 'flowerlist', component: FlowerlistComponent},
  { path: 'destinationlist', component: DestinationlistComponent},
  { path: 'laptoplist', component: LaptoplistComponent},
  { path: 'laptopspeclist', component: LaptopspeclistComponent},
  { path: 'computerhardwarelist', component: ComputerhardwarelistComponent},
  { path: 'mobileapplist', component: MobileapplistComponent},
  { path: 'videolist', component: VideolistComponent},
  { path: 'tvshowlist', component: TvshowlistComponent},
  { path: 'furniturelist', component: FurniturelistComponent},
  { path: 'accessorylist', component: AccessorylistComponent},
  { path: 'buildinglist', component: BuildinglistComponent},
  { path: 'paintinglist', component: PaintinglistComponent},
  { path: 'artistlist', component: ArtistlistComponent},
  { path: 'composerlist', component: ComposerlistComponent},
  { path: 'podcastlist', component: PodcastlistComponent},
  { path: 'exerciselist', component: ExerciselistComponent},
  { path: 'mealplanlist', component: MealplanlistComponent},
  { path: 'budgetlist', component: BudgetlistComponent},
  { path: 'presentationlist', component: PresentationlistComponent},
  { path: 'tourlist', component: TourlistComponent},
  { path: 'eventlist', component: EventlistComponent},
  { path: 'developertoollist', component: DevelopertoollistComponent},
  { path: 'frameworklist', component: FrameworklistComponent},
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
    InventorylistComponent,
    LecturelistComponent,
    StationarylistComponent,
    FlowerlistComponent,
    DestinationlistComponent,
    LaptoplistComponent,
    LaptopspeclistComponent,
    ComputerhardwarelistComponent,
    MobileapplistComponent,
    VideolistComponent,
    TvshowlistComponent,
    FurniturelistComponent,
    AccessorylistComponent,
    BuildinglistComponent,
    PaintinglistComponent,
    ArtistlistComponent,
    ComposerlistComponent,
    PodcastlistComponent,
    ExerciselistComponent,
    MealplanlistComponent,
    BudgetlistComponent,
    PresentationlistComponent,
    TourlistComponent,
    EventlistComponent,
    DevelopertoollistComponent,
    FrameworklistComponent,
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
