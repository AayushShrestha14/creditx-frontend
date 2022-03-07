import {
  ComponentRef,
  Directive,
  Input,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[componentloader]'
})
export class ComponentloaderDirective {
  @Input() config: any;

  componentRef!: ComponentRef<any>;

  @Input() component: any;
  constructor(public viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.viewContainerRef.clear();
    this.componentRef = this.viewContainerRef.createComponent(this.component);
    this.componentRef.instance.responseDetails = this.config;
  }

  ngOnDestroy(): void {
    this.componentRef.destroy();
  }
}
