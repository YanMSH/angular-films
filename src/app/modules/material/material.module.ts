import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import { MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
