import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  products: any[] = [
    {
        id: '1000',
        name: 'Bamboo Watch',
        category: 'Accessories',
        quantity: 24,
    },
    {
        id: '1001',
        name: 'Black Watch',
        category: 'Accessories',
        quantity: 61,
    },
    {
        id: '1002',
        name: 'Blue Band',
        category: 'Fitness',
        quantity: 2,
    },
    {
        id: '1003',
        name: 'Blue T-Shirt',
        category: 'Clothing',
        quantity: 25,
    },
   
  ];

  header: any = ["id", "Name", ]
}
