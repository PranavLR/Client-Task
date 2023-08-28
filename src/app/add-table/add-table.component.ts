import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ManageService } from '../service/manage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.scss']
})
export class AddTableComponent implements OnInit {
  form!: FormGroup;
  lastUsedId = 0; // Initialize with the last used ID
  paramsId!: number;
  fb = inject(FormBuilder);
  manage = inject(ManageService);
  activetedRoute = inject(ActivatedRoute);
  router = inject(Router);

  tableList!: any[];


  ngOnInit(): void {
    this.lastUsedId = this.manage.data.length;

    this.form = this.fb.group({
      id: [this.getNextId(), Validators.required],
      name: ['', Validators.required],
      attr1: [''],
      attr2: ['']
    });

    if (this.activetedRoute.snapshot.paramMap.get('id')!) {
      this.paramsId = +this.activetedRoute.snapshot.paramMap.get('id')!;
      this.fetchData();
    }

    // this.form.get('id')?.disable();
  }

  getNextId(): number {
    return this.lastUsedId + 1;
  }

  fetchData() {
    const currentData = this.manage.data.filter((e) => this.paramsId == e?.id);
    this.form?.controls['id']?.setValue(currentData[0]?.id);
    this.form?.controls['name']?.setValue(currentData[0]?.name);
    this.form?.get('attr1')?.setValue(currentData[0]?.attr1);
    this.form?.get('attr2')?.setValue(currentData[0]?.attr2);
  }

  onCreate() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.lastUsedId = formData.id; // Update the last used ID
      console.log('Form submitted:', formData);
      this.manage.data.push(formData);
      console.log('this.manage.data: ', this.manage.data);
      localStorage.setItem('tableData', JSON.stringify(this.manage.data));
      this.form.reset({ id: this.getNextId() }); // Reset the form with the next ID
      this.router.navigate(['/dashboard'])
    }
  }

  onEdit() {
    if (this.form.valid) {
      const formData = this.form.value;
      // this.lastUsedId = formData.id; // Update the last used ID
      console.log('Form submitted:', formData);

      //Find index of specific object using findIndex method.    
      const objIndex = this.manage.data.findIndex((e => e.id == formData.id));
      this.manage.data[objIndex] = formData;
      // console.log('this.manage.data: ', this.manage.data);
      localStorage.setItem('tableData', JSON.stringify(this.manage.data));
      this.router.navigate(['/dashboard'])
    }
  }


  // this.tableList = this.manage.tableList;



  // this.form = this.fb.group({
  //   id: [''],
  //   tableName: ['', Validators.required],
  //   Table: this.fb.group({
  //     TableHeader: this.fb.array([
  //       this.fb.control('')
  //     ]),
  //     TableBody: this.fb.array([
  //       this.fb.control('')
  //     ]),
  //   }),
  // });
  // }


  // get TableHeader() {
  //   return this.form.get('Table.TableHeader') as FormArray;
  // }

  // get TableBody() {
  //   return this.form.get('Table.TableBody') as FormArray;
  // }


  // addHeader() {
  //   this.TableHeader.push(this.fb.control(''));
  // }

  // deleteHeader(index: number) {
  //   this.TableHeader.removeAt(index);
  // }

  // addBodyItem() {
  //   this.TableBody.push(this.fb.control(''));
  // }

  // deleteBodyItem(index: number) {
  //   this.TableBody.removeAt(index);
  // }





  // onSubmit() {
  //   console.log(this.form.value);

  // }




}
