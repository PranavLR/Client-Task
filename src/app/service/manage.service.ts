import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageService {

  data = [{
    id: 1,
    name: "Test1",
    attr1: "dasdas",
    attr2: "dasdasdasd",
  },
  {
    id: 2,
    name: "Test2",
    attr1: "dasdas",
    attr2: "dasdasdasd",
  },
  {
    id: 3,
    name: "Test3",
    attr1: "dasdas",
    attr2: "dasdasdasd",
  },
  {
    id: 4,
    name: "Test4",
    attr1: "dasdas",
    attr2: "dasdasdasd",
  }]



  // tableList: any = [
  //   [{
  //     tableId: 1,
  //     tableName: "table1"
  //   },
  //     {
  //       id: '1000',
  //       name: 'Bamboo Watch',
  //       category: 'Accessories',
  //       quantity: 24,
  //     },
  //     {
  //       id: '1001',
  //       name: 'Black Watch',
  //       category: 'Accessories',
  //       quantity: 61,
  //     },
  //   ],
  //   [{
  //     tableId: 2,
  //     tableName: "table2"
  //   },
  //   {
  //       id: '1000',
  //       name: 'Bamboo Watch',
  //       category: 'Accessories',
  //       quantity: 24,
  //     },
  //     {
  //       id: '1001',
  //       name: 'Black Watch',
  //       category: 'Accessories',
  //       quantity: 61,
  //     },
  //   ],
  //   [
  //     {
  //       tableId: 3,
  //       tableName: "table3"
  //     },
  //     {
  //       id: '1000',
  //       name: 'Bamboo Watch',
  //       category: 'Accessories',
  //       quantity: 24,
  //     },
  //     {
  //       id: '1001',
  //       name: 'Black Watch',
  //       category: 'Accessories',
  //       quantity: 61,
  //     },
  //   ],
  //   [{
  //     tableId: 4,
  //     tableName: "table4"
  //   },
  //   {
  //       id: '1000',
  //       name: 'Bamboo Watch',
  //       category: 'Accessories',
  //       quantity: 24,
  //     },
  //     {
  //       id: '1001',
  //       name: 'Black Watch',
  //       category: 'Accessories',
  //       quantity: 61,
  //     },
  //   ]
  // ];

  constructor() {
    // localStorage.setItem('tableData', JSON.stringify(this.data));
  }

}
