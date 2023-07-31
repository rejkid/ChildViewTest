import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  TemplateRef
} from '@angular/core';
import { SharkDirective } from './shark.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  extraCreature: string = "Crap";
  name: string = "Janusz";

  constructor(private elem: ElementRef/* , private templateRef: TemplateRef<any> */) {
    var element  = (elem.nativeElement as HTMLInputElement).value;

    console.log(this.extraCreature);
  }

  @ViewChild ('someElement') someElement! : ElementRef;
  @ViewChild(SharkDirective)
  set appShark(directive: SharkDirective) {
    this.extraCreature = directive.creature;
  };

  ngAfterViewInit() {
    console.log(this.elem.nativeElement);
    console.log(this.extraCreature); // Dolphin

    //var val = this.someElement.nativeElement.textContent;
    //console.log(this.someElement.nativeElement.textContent = 'Janusz');
  }
  onProcess(event: any) {
    console.log(this.elem.nativeElement);
  }
}
