import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fn-tab';

  @ViewChild('tabDataTemplateRef') tabDataTemplateRef: TemplateRef<HTMLElement>;
  tabArray = [

    {
      id: 'tab_1',
      titile: 'Tab One',
      templateId: 'data_1'
    },
    {
      id: 'tab_2',
      titile: 'Tab Two',
      templateId: 'data_2'
    },
    {
      id: 'tab_3',
      titile: 'Tab Three',
      templateId: 'data_3'
    },
    {
      id: 'tab_4',
      titile: 'Tab Four',
      templateId: 'data_4'
    }
  ]
}
