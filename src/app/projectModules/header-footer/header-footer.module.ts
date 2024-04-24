import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleHeaderComponent } from './module-header/module-header.component';
import { ModuleFooterComponent } from './module-footer/module-footer.component';
import { MaterialModule } from '../material-ui/material-ui.module';



@NgModule({
  declarations: [
    ModuleHeaderComponent,
    ModuleFooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    ModuleHeaderComponent,
    ModuleFooterComponent
  ]

})
export class HeaderFooterModule { }
