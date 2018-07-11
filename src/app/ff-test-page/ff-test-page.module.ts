import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { FfTestPageRoutingModule } from './ff-test-page-routing.module';
import { FfTestPageComponent } from './ff-test-page.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '@app/ff-test-page/shared/api.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FfTestPageRoutingModule,
    FormsModule
  ],
  declarations: [
    FfTestPageComponent
  ],
  providers:[
    ApiService
  ]
})
export class FfTestPageModule { }
