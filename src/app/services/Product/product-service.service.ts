import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ResponseModel } from '../../models/responseModel';

@Injectable()
export class ProductService {

  private getTodoUrl="https://jsonplaceholder.typicode.com/todos";
  private apiUrl='http://localhost:60805/api/Products?PageIndex=0&PageSize=10';
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ResponseModel>{
    return this.httpClient.get<ResponseModel>(this.apiUrl);
  }
}
