import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bz-fab',
  templateUrl: './help-links.html',
  styleUrls: ['./help-links.scss']
})
export class HelpLinksComponent implements OnInit {
  @Input() tooltipText: string;
  @Input() type: string;
  public icon: string;
  public replacementIcon: string;
  public transform: string;
  public additionalClass: string;
  public listTypes = [
    {
      type: 'add-property', icon: 'bz-icon-plus-outline', replacementIcon: ' bz-icon-add-attribute',
      transform: 'bz-fab__transform', additionalClass: 'bz-add-property'
    },
    { type: 'save', icon: ' bz-icon-save', replacementIcon: 'bz-fab__i_hide', transform: '', additionalClass: '' }
  ];

  public constructor() { }

  public ngOnInit(): void {
    this.getType();
  }

  public getType(): void {
   console.log(this.type);
   
  }
}