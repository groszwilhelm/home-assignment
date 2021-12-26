import { Component } from '@custom/component.decorator';
import { CustomComponent } from '@custom/custom-component';

@Component({
  selector: 'hmw-icon-gift',
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g id="Group_1235" data-name="Group 1235" transform="translate(-1246 -13)">
        <rect id="Rectangle_886" data-name="Rectangle 886" width="32" height="32" transform="translate(1246 13)" fill="#fff"/>
        <path id="icon-whatsnew" d="M9.516,12.124V4.666H6.234v7.458c0,.365.3.542.656.542H8.859C9.218,12.666,9.516,12.488,9.516,12.124ZM4.84,3.332h2L5.547,1.655a.934.934,0,0,0-.708-.323,1,1,0,0,0,0,2Zm7.055-1a.993.993,0,0,0-.984-1,.934.934,0,0,0-.708.323L8.921,3.332H10.91A.993.993,0,0,0,11.895,2.332ZM15.75,5V8.332a.327.327,0,0,1-.328.333h-.984V13a.993.993,0,0,1-.984,1H2.3a.993.993,0,0,1-.984-1V8.666H.328A.327.327,0,0,1,0,8.332V5a.327.327,0,0,1,.328-.333H4.84a2.312,2.312,0,0,1-2.3-2.333A2.312,2.312,0,0,1,4.84,0,2.17,2.17,0,0,1,6.562.8L7.875,2.52,9.187.8A2.17,2.17,0,0,1,10.91,0a2.312,2.312,0,0,1,2.3,2.333,2.312,2.312,0,0,1-2.3,2.333h4.512A.327.327,0,0,1,15.75,5Z" transform="translate(1254 22.001)" fill="rgba(0,0,0,0.7)"/>
      </g>
    </svg>`
})
export class IconGift extends CustomComponent { }
