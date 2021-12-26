import { Component } from '@custom/component.decorator';
import { CustomComponent } from '@custom/custom-component';

@Component({
  selector: 'hmw-icon-reports',
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g id="Group_901" data-name="Group 901" transform="translate(415 -426)">
        <g id="icons" transform="translate(-415 426)">
          <rect id="icons_hosts_hover_background" data-name="icons/hosts/hover background" width="32" height="32" fill="none"/>
        </g>
        <g id="Layer_2" data-name="Layer 2" transform="translate(-407 434)">
          <g id="Layer_1" data-name="Layer 1">
            <path id="Path_419" data-name="Path 419" d="M13.89,0H3.62L0,3.62V13.89A2.1,2.1,0,0,0,2.11,16H13.89A2.1,2.1,0,0,0,16,13.89V2.11A2.1,2.1,0,0,0,13.89,0Zm1.27,13.89a1.27,1.27,0,0,1-1.27,1.27H2.11A1.27,1.27,0,0,1,.84,13.89V4L4,.84h9.93A1.27,1.27,0,0,1,15.2,2.11Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_420" data-name="Path 420" d="M7.27,12.89V8.47H2.84a4.42,4.42,0,0,0,4.43,4.42ZM6.42,12A3.6,3.6,0,0,1,3.79,9.31H6.42Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_421" data-name="Path 421" d="M8.2,3.11A4.42,4.42,0,0,0,3.78,7.53H8.2V12a4.42,4.42,0,1,0,0-8.84Z" fill="rgba(255,255,255,0.8)"/>
          </g>
        </g>
      </g>
    </svg>`
})
export class IconReports extends CustomComponent { }
