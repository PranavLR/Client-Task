import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManageService } from '../service/manage.service';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.scss']
})
export class ViewTableComponent implements OnInit {
  products!: any;

  tableName!: string;
  tableId!: number;

  activatedRoute = inject(ActivatedRoute);
  manage = inject(ManageService);

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      // this.products = [...this.manage.tableList[id]]

      this.tableName = this.products[0].tableName
      this.tableId = this.products[0].tableId

      this.products.shift();

      console.log('this.products: ', this.products);
      console.log('ID from route parameter:', id);

      // Now you can use the id in your component logic
    });
  }

}
