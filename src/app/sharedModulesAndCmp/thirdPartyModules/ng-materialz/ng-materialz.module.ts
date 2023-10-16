import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';



const MaterialModules = [
  CommonModule,
  // Material Modules
  MatAutocompleteModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSortModule,
  MatRippleModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatIconModule,
  MatProgressBarModule,
  MatTableModule,
  MatDividerModule,
  MatRippleModule,
  MatCardModule,
  MatTreeModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMenuModule,

];

@NgModule({
  declarations: [],
  imports: [MaterialModules],
  exports: [MaterialModules]
})
export class NgMaterialzModule { }
