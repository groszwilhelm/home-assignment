import { Component } from '@custom/component.decorator';
import { CustomComponent } from '@custom/custom-component';

@Component({
  selector: 'hmw-icon-risk-management',
  html: `
    <svg id="icons" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <rect id="icons_dashboard_active_background" data-name="icons/dashboard/active background" width="32" height="32" fill="none"/>
      <g id="icons_dashboard_active" data-name="icons/dashboard/active" transform="translate(4 4)">
        <rect id="Rectangle" width="24" height="24" fill="none"/>
        <g id="Layer_1" data-name="Layer 1" transform="translate(3.001 4)">
          <path id="Path_398" data-name="Path 398" d="M12.17,8.36,9,13.85a.55.55,0,0,1-.49.29A.56.56,0,0,1,8,13.85L4.83,8.36l-.65.86,3,5.13a1.57,1.57,0,0,0,2.72,0l3-5.13Z" fill="rgba(255,255,255,0.8)"/>
          <path id="Path_399" data-name="Path 399" d="M1.08,1.29A.56.56,0,0,1,1.57,1H5.51V0H1.57A1.55,1.55,0,0,0,.21.79a1.55,1.55,0,0,0,0,1.56L2.55,6.4l.66-.86L1.08,1.85A.54.54,0,0,1,1.08,1.29Z" fill="rgba(255,255,255,0.8)"/>
          <path id="Path_400" data-name="Path 400" d="M16.79.79A1.53,1.53,0,0,0,15.43,0H10.49V1h4.94a.54.54,0,0,1,.49.29.54.54,0,0,1,0,.56L13.8,5.54l.65.86,2.34-4.05a1.55,1.55,0,0,0,0-1.56Z" fill="rgba(255,255,255,0.8)"/>
          <path id="Path_401" data-name="Path 401" d="M7.95,0,5.34,6.21H8.42v4.36h.47L11.5,4.41H8.42V0Z" fill="rgba(255,255,255,0.8)"/>
        </g>
      </g>
    </svg>`
})
export class IconRiskManagement extends CustomComponent { }
