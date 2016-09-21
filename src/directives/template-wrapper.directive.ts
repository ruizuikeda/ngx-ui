import {
  Directive,
  ViewContainerRef,
  Input
} from '@angular/core';

@Directive({ selector: '[templateWrapper]' })
export class TemplateWrapperDirective {

  @Input() template;
  @Input() context;

  constructor(private viewContainer: ViewContainerRef) {
  }

  ngOnInit() {
    this.viewContainer.createEmbeddedView(this.template, this.context);
  }
  
}