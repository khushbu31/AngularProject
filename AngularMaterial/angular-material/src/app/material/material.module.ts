import { NgModule } from '@angular/core';
import {MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorModule, MatCardModule } from '@angular/material';

const Material =[
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatPaginatorModule,
  MatCardModule
]

@NgModule({
  declarations: [],
  imports: [Material],
  exports:[Material]
})
export class MaterialModule { }
