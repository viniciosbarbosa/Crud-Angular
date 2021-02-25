import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule}  from'@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './view/home/home.component'
import {MatCardModule} from'@angular/material/card';
import { ProductCrudComponent } from './view/product-crud/product-crud.component';
import { ProductCreatComponent } from './components/product/product-creat/product-creat.component';
import {MatButtonModule} from'@angular/material/button';
import {MatSnackBarModule} from'@angular/material/snack-bar';
import {HttpClientModule} from'@angular/common/http';
import {FormsModule} from'@angular/forms'
import {MatFormFieldModule} from'@angular/material/form-field'
import {MatInputModule} from'@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreatComponent,
    ProductReadComponent,
    ProductRead2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
