import { Component } from '@custom/component.decorator';
import { CustomComponent } from '@custom/custom-component';

@Component({
  selector: 'hmw-icon-companies',
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g id="Group_903" data-name="Group 903" transform="translate(412 -594)">
        <g id="icons" transform="translate(-412 594)">
          <rect id="icons_hosts_hover_background" data-name="icons/hosts/hover background" width="32" height="32" fill="none"/>
        </g>
        <g id="Layer_2" data-name="Layer 2" transform="translate(-403.997 602)">
          <g id="Layer_1" data-name="Layer 1">
            <path id="Path_387" data-name="Path 387" d="M14.67,2.27H11.33V1.51A1.43,1.43,0,0,0,10,0H6A1.43,1.43,0,0,0,4.67,1.51v.76H1.33A1.43,1.43,0,0,0,0,3.78V13.6a1.43,1.43,0,0,0,1.33,1.51H14.67A1.43,1.43,0,0,0,16,13.6V3.78A1.43,1.43,0,0,0,14.67,2.27ZM5.33,1.51A.71.71,0,0,1,6,.76h4a.71.71,0,0,1,.67.75v.76H5.33Zm10,12.09a.72.72,0,0,1-.66.76H1.33a.72.72,0,0,1-.66-.76V8.1a1.18,1.18,0,0,0,.66.21h4v1a.89.89,0,0,0,.89.89H9.78a.89.89,0,0,0,.89-.89v-1h4a1.18,1.18,0,0,0,.66-.21Zm0-6.8a.72.72,0,0,1-.66.76h-4a.89.89,0,0,0-.89-.89H6.22a.89.89,0,0,0-.89.89h-4A.72.72,0,0,1,.67,6.8v-3A.72.72,0,0,1,1.33,3H14.67a.72.72,0,0,1,.66.76Z" fill="rgba(255,255,255,0.8)"/>
          </g>
        </g>
      </g>
    </svg>`
})
export class IconCompanies extends CustomComponent { }
