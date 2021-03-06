import { Component } from '@custom/component.decorator';
import { CustomComponent } from '@custom/custom-component';

@Component({
  selector: 'hmw-icon-email-security',
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g id="Group_909" data-name="Group 909" transform="translate(419 -842)">
        <g id="icons" transform="translate(-419 842)">
          <rect id="icons_hosts_hover_background" data-name="icons/hosts/hover background" width="32" height="32" fill="none"/>
        </g>
        <path id="Path_437" data-name="Path 437" d="M1073.467,603.853h-1.43v-3.525a.5.5,0,0,0-.5-.506h-10a.5.5,0,0,0-.5.506v3.525h-1.429a1.14,1.14,0,0,0-1.071,1.2v9.575a1.14,1.14,0,0,0,1.071,1.2h13.859a1.14,1.14,0,0,0,1.07-1.2V605.05A1.14,1.14,0,0,0,1073.467,603.853Zm-9.438-.668,1.516,1.533,3.5-3.539.935.946-3.967,4.011a.656.656,0,0,1-.935,0l-1.983-2.006Zm-4.6,11.174v-9l5.021,4.482C1062.94,611.06,1060.964,612.893,1059.43,614.359Zm.714.561c2.837-2.7,5.852-5.349,6.362-5.484.573.134,3.61,2.785,6.463,5.484Zm13.5-.6c-1.535-1.457-3.5-3.267-5-4.472l5-4.5Z" transform="translate(-1469.537 250.178)" fill="rgba(255,255,255,0.8)"/>
      </g>
    </svg>`
})
export class IconEmailSecurity extends CustomComponent { }
