import { Component } from '@custom/component.decorator';
import { CustomComponent } from '@custom/custom-component';

@Component({
  selector: 'hmw-icon-sandbox-analyzer',
  html: `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g id="Group_905" data-name="Group 905" transform="translate(380 -760)">
        <g id="icons" transform="translate(-380 760)">
          <rect id="icons_hosts_hover_background" data-name="icons/hosts/hover background" width="32" height="32" fill="none"/>
        </g>
        <g id="Layer_2" data-name="Layer 2" transform="translate(-372 767)">
          <g id="Layer_1" data-name="Layer 1">
            <path id="Path_422" data-name="Path 422" d="M16,5.58,13.68,6.95h0v6.31L8.42,16.21v2.74L16,14.63Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_423" data-name="Path 423" d="M8.42,14.84l4.11-2.63V7.16L8.42,9.58Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_424" data-name="Path 424" d="M3.26,16.42l4.11,2.32V9.58L3.26,7.16Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_425" data-name="Path 425" d="M12.21,6.42l-.84-.53-.84-.52-.42-.21-.43-.32-3.47,2-.95-.52,3.48-2L7.89,3.9,4.42,5.79l-.84.53.84.52.95.53.42.21.42.21,3.47-1.9.85.53L7.16,8.32,8,8.84l3.37-2Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_426" data-name="Path 426" d="M13.26,5.89h0l2.32-1.36h0L7.79,0,0,4.53v10.1l2.32,1.26v-10L7.79,2.74Z" fill="rgba(255,255,255,0.8)"/>
          </g>
        </g>
      </g>
    </svg>`
})
export class IconSandboxAnalyzer extends CustomComponent { }
