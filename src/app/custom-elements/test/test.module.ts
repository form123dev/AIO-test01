import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { TestComponent } from './test.component';

import { WithCustomElementComponent } from '../element-registry';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [TestComponent],
  entryComponents: [TestComponent]
})
export class TesthModule implements WithCustomElementComponent {
  customElementComponent: Type<any> = TestComponent;
}
