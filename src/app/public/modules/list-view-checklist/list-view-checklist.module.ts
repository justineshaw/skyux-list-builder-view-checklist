import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import {
  SkyCheckboxModule
} from '@skyux/forms';

import {
  SkyListViewChecklistComponent
} from './list-view-checklist.component';

import {
  SkyListViewChecklistItemComponent
} from './list-view-checklist-item.component';

import {
  SkyListViewChecklistResourcesModule
} from '../shared/list-view-checklist-resources.module';

@NgModule({
  declarations: [
    SkyListViewChecklistComponent,
    SkyListViewChecklistItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SkyCheckboxModule,
    SkyListViewChecklistResourcesModule
  ],
  exports: [
    SkyListViewChecklistComponent,
    SkyListViewChecklistItemComponent
  ]
})
export class SkyListViewChecklistModule {
}
