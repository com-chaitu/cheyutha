import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { 
  MatInputModule,
  MatTableModule,
  MatPaginatorModule, 
  MatSortModule, 
  MatProgressSpinnerModule, 
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import { DonarListComponent } from './donar-list/donar-list.component';


const materialImports = [
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    DonarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...materialImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
