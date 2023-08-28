import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ManageService } from '../service/manage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  tableList!: any[];
  transfromPosition!: any[];
  @ViewChild('containerDrag', { static: true }) containerDrag!: ElementRef;


  manage = inject(ManageService);
  router = inject(Router);

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('tableData')!)) {
      this.manage.data = JSON.parse(localStorage.getItem('tableData')!)
    }


    if (JSON.parse(localStorage.getItem('transfromPosition')!)) {
      this.transfromPosition = JSON.parse(localStorage.getItem('transfromPosition')!);
    }

    this.tableList = this.manage.data;
  }


  ngAfterViewInit() {
    const childrenElement = this.containerDrag.nativeElement.children;

    if (!this.transfromPosition?.length) return
    for (let iterator = 0; iterator < (childrenElement as []).length; iterator++) {
      childrenElement[iterator].children[0].style.webkitTransform = this.transfromPosition[iterator];
    }
  }


  viewTable(id: number) {
    this.router.navigate(['/add-table/' + id])
  }


  drop(event: any) {
    const array = [];
    for (let iterator = 0; iterator < (event.children as []).length; iterator++) {
      array.push(event.children[iterator].children[0].style?.webkitTransform);
    }
    localStorage.setItem('transfromPosition', JSON.stringify(array))
  }

}
