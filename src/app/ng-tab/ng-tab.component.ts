import { Component, Input, TemplateRef } from '@angular/core';
import { NgTabModel } from './ng-tab.model';

@Component({
    selector: 'ng-tab',
    templateUrl: 'ng-tab.component.html',
    styleUrls: ['ng-tab.component.scss']
})
export class NgTabComponent {

    @Input() tabArray: Array<NgTabModel> = [];
    @Input() dataTemplate: TemplateRef<HTMLElement>;

}
