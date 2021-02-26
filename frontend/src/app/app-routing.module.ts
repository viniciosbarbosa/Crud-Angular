import { ProductCreatComponent } from './components/product/product-creat/product-creat.component';
import { componentFactoryName } from '@angular/compiler';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from'./view/home/home.component';
import {ProductCrudComponent } from'./view/product-crud/product-crud.component';
import {ProductUpdateComponent} from'./components/product/product-update/product-update.component'


const routes: Routes = [{
  path:"",
  component:HomeComponent},
  {path:"products",
  component:ProductCrudComponent
  },
  {path:"products/create",
  component:ProductCreatComponent
  },
  {path:"products/update/:id",
  component:ProductUpdateComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
