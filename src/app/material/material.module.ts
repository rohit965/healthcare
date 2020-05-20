import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatMenuModule,
         MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule, MatPaginatorModule ,MatCheckboxModule,
         MatSelectModule,MatCardModule  } from '@angular/material';

@NgModule({
  imports: [
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule
  ],
  exports: [
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule
  ],
  declarations: []
})
export class MaterialModule { }
