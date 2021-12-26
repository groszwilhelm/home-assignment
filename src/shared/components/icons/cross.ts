import { Component } from '@custom/component.decorator';
import { CustomComponent } from '@custom/custom-component';

@Component({
  selector: 'hmw-icon-cross',
  html: `
    <svg id="baseline-close-24px" xmlns = "http://www.w3.org/2000/svg" width = "35.995" height = "35.995" viewBox = "0 0 35.995 35.995" >
  <path id="Path_1998" data - name="Path 1998" d = "M20.02,6.513,18.507,5l-6,6-6-6L5,6.513l6,6-6,6L6.513,20.02l6-6,6,6,1.513-1.513-6-6Z" transform = "translate(5.487 5.487)" opacity = "0.5" />
    <path id="Path_1999" data - name="Path 1999" d = "M0,0H36V36H0Z" fill = "none" />
    </svg>`
})
export class IconCross extends CustomComponent { }
