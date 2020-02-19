import { Component, Input, TemplateRef, OnInit, ViewEncapsulation } from '@angular/core';
import { NgTabModel } from './ng-tab.model';

@Component({
    selector: 'ng-tab',
    templateUrl: 'ng-tab.component.html',
    styleUrls: ['ng-tab.component.scss']
})
export class NgTabComponent implements OnInit {


    @Input() tabArray: Array<NgTabModel> = [];
    @Input() dataTemplate: TemplateRef<HTMLElement>;
    @Input() isVertical: boolean;

    tabClass = '';

    ngOnInit(): void {
        this.tabClass = this.isVertical ? 'verticalTab' : '';
        console.log(this.tabClass)
    }
}
