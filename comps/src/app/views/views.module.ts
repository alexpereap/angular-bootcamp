import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ViewsRoutingModule } from './views-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ViewsHomeComponent } from './views-home/views-home.component';


@NgModule({
  declarations: [
    StatisticsComponent,
    ViewsHomeComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule,
  ]
})
export class ViewsModule { }
