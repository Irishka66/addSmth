import { Component, 
  OnInit, 
  NgModule,
  Input,
  ComponentFactory,
  ComponentRef, 
  ComponentFactoryResolver, 
  ViewContainerRef, 
  ChangeDetectorRef, 
  TemplateRef, 
  ViewChild, 
  Output, 
  EventEmitter } from '@angular/core';
  import {DynamicComponent} from './../dynamic/dynamic.component';

@Component({
  selector: 'app-container-for-dynamic',
  templateUrl: './container-for-dynamic.component.html',
  styleUrls: ['./container-for-dynamic.component.scss']
})
export class ContainerForDynamicComponent implements OnInit {
  @ViewChild("alertContainer", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  createComponent(type, count) {
    this.container.clear(); 
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(DynamicComponent);
    // this.componentRef: ComponentRef = this.container.createComponent(factory);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.type = type;
    this.componentRef.instance.count = count;
    // this.componentRef.instance.output.subscribe(event => console.log(event));
  }
  ngOnDestroy() {
    this.componentRef.destroy();    
  }
}