import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'benefit-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './benefit-card.component.html',
  styleUrl: './benefit-card.component.scss'
})
export class BenefitCardComponent {
  @Input("img-path") imgPath: string = '';
  @Input("card-title") cardTitle: string = '';
  @Input("card-description") cardDescription: string = '';
}
