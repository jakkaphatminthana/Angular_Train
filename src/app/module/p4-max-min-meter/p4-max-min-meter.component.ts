import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-p4-max-min-meter',
  templateUrl: './p4-max-min-meter.component.html',
  styleUrls: ['./p4-max-min-meter.component.scss']
})
export class P4MaxMinMeterComponent {

  @Input() minLabel = 'minLable';
  @Input() maxLabel = 'maxLabel';

}
