import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatSliderModule } from '@angular/material/slider';

import { PblNgridModule } from '@pebula/table';
import { PblNgridDragModule } from '@pebula/table/drag';
import { PblNgridTargetEventsModule } from '@pebula/table/target-events';
import { PblNgridTransposeModule } from '@pebula/table/transpose';
import { PblNgridBlockUiModule } from '@pebula/table/block-ui';
import { PblNgridDetailRowModule } from '@pebula/table/detail-row';
import { PblNgridStickyModule } from '@pebula/table/sticky';
import { PblNgridMaterialModule } from '@pebula/table/material';

import { SharedModule } from '@pebula/apps/table/shared';
import { CommonTableTemplatesComponent } from './common-table-templates/common-table-templates.component';
import { AllInOneTableExampleComponent } from './all-in-one/all-in-one.component';
import { VirtualScrollPerformanceDemoTableExampleComponent } from './virtual-scroll-performance-demo/virtual-scroll-performance-demo.component';
import { SellersDemoComponent } from './sellers-demo/sellers-demo.component';

const MATERIAL = [
  MatProgressSpinnerModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatChipsModule,
  MatSliderModule,
];

const DECLARATION = [
  CommonTableTemplatesComponent,
  AllInOneTableExampleComponent,
  VirtualScrollPerformanceDemoTableExampleComponent,
  SellersDemoComponent,
];

@NgModule({
  declarations: DECLARATION,
  imports: [
    RouterModule.forChild([]),
    SharedModule,
    MATERIAL, MatRippleModule,
    PblNgridModule.withCommon([ { component: CommonTableTemplatesComponent } ]),
    PblNgridDragModule.withDefaultTemplates(),
    PblNgridTargetEventsModule,
    PblNgridBlockUiModule,
    PblNgridTransposeModule,
    PblNgridDetailRowModule,
    PblNgridStickyModule,
    PblNgridMaterialModule,
  ],
  exports: [ SellersDemoComponent, AllInOneTableExampleComponent, VirtualScrollPerformanceDemoTableExampleComponent ], // we need this for detail-row
})
export class TableMixDemoModule { }
