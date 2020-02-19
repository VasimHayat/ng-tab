import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { NgTabComponent } from './ng-tab.component';

export * from './ng-tab.component';
export * from './ng-tab.model';

@NgModule({
    imports: [FormsModule, CommonModule, MatTabsModule],
    declarations: [NgTabComponent],
    exports: [NgTabComponent]
})
export class NgTabModule {

}
