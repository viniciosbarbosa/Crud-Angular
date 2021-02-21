import { Injectable } from '@angular/core';
import {} from'@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  showOnConsole(msg:string) : void{
    console.log(msg)
  }

}
