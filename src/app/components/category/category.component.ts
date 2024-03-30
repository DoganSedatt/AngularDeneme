import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
 cat1={id:1,categoryName:"Teknolojik"}
 cat2={id:2,categoryName:"Mutfak"}
 cats=[this.cat1,this.cat2]

catsName=[this.cat1.categoryName]
}
