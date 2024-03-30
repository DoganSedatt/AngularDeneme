import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { Product} from '../../models/product';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductService } from '../../services/Product/product-service.service';
import { ResponseModel } from '../../models/responseModel';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CategoryComponent,HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  providers:[ProductService]
})
export class ProductComponent implements OnInit{
  products:Product[]=[];
  deneme:any[]=[];
  dataLoaded=false;
  apiUrl='http://localhost:60805/api/Products?PageIndex=0&PageSize=10';
  apiUrlTodo='https://jsonplaceholder.typicode.com/todos';
  
  constructor(private httpClient:HttpClient,private productService:ProductService){
    //Backend'e atılacak http isteklerini sağlamak için HttpClient kullanırız
    
  }
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (response:ResponseModel)=>{
        this.products=response.items;
        console.log(this.products);
      })
   }

  getAllProducts(){//Şuan benim programım subscribe içine giremiyor.Sebebi de muhtemelen url içindeki pagination
    console.log("1:getProducts metodu başladı...");
    //Burada httpClient kullanarak backend'deki api'a istek atacağız.Bu bize ürünleri getirecek
    //Backend kısmında GetProducts yaz ve onu burada kullan
    this.httpClient.get<ResponseModel>(this.apiUrlTodo)
    .subscribe({
      next:(response)=>{
      console.log("2:getProducts metodu başarılı şekilde veri getirdi...");
      
      
      
      this.deneme=response.items;
      console.log(this.deneme)
      
      
      
      
      this.dataLoaded=true;
      console.log("dataLoad değeri:",this.dataLoaded)
      //Gelen response'u productResponseModel'e eşitle
    }});
    //Gelen isteği ProductResponseModel'e map edeceksin demek.Generic şekilde yazdık
    //Ancak buraya kadar yazdığımız kodun hiçbir anlamı yok.Çünkü bunu async kullanmamız lazım
    //Bunu angular'da observable(subscribe) ile yapmak zorundayız.
    console.log("3:getProducts metodu bitti...");
  }


 

}
