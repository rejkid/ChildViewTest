import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive(
  { selector: '[appShark]' }
)
export class SharkDirective {
  creature1 = 'Dolphin';

  constructor(elem: ElementRef, renderer: Renderer2,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef ) {

    let shark = renderer.createText('Shark ');
    //renderer.appendChild(this.templateRef.elementRef.nativeElement /* nativeElement */, shark);

    var element  = (elem.nativeElement as HTMLInputElement).value;//document.getElementById("janusz");
    console.log(element);
    //this.viewContainer.createComponent('Shark ');
    this.viewContainer.createEmbeddedView(this.templateRef);
  }
  @Input() set appShark(name: string) {

    console.log("name");
    /** Add the template content to the DOM unless the condition is true. */
    // if (!condition) {
    //   console.log("condition true");
    // }
    // else if (condition) {
    //   console.log("condition false");
    // }
  }
  get creature() {
    return this.creature1;
  }
}
