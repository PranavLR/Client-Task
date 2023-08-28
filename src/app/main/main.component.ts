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
  @ViewChild('containerDrag', { static: true }) containerDrag!: ElementRef;


  manage = inject(ManageService);
  router = inject(Router);

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('tableData')!)) {
      this.manage.data = [...JSON.parse(localStorage.getItem('tableData')!)]
    }

    this.tableList = this.manage.data;
  }


  ngAfterViewInit() {
    // Access DOM element's properties/methods after view initialization
    const nativeElement = this.containerDrag.nativeElement;
    console.log('this.', this.containerDrag);
    console.log('this.containerDrag ', nativeElement.children);
    // nativeElement.textContent = 'Updated content';
  }


  viewTable(id: number) {
    this.router.navigate(['/add-table/' + id])
  }

}
