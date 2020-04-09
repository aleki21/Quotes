import { Directive, ElementRef, Input , HostListener } from '@angular/core';
import {Quotes} from './quote';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() quote:Quotes;

}