export class IconQuarantine extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-icon-quarantine', IconQuarantine);
  }

  public static template = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g id="Group_902" data-name="Group 902" transform="translate(387 -520)">
        <g id="icons" transform="translate(-387 520)">
          <rect id="icons_hosts_hover_background" data-name="icons/hosts/hover background" width="32" height="32" fill="none"/>
        </g>
        <g id="Layer_2" data-name="Layer 2" transform="translate(-378.982 526)">
          <g id="Layer_1" data-name="Layer 1">
            <path id="Path_417" data-name="Path 417" d="M8,19.33H7.87C-.23,16.47-.08,9.81,0,5V3H.52A9.69,9.69,0,0,0,7.72.28L8,0l.29.29a9.78,9.78,0,0,0,7.24,2.76H16V4.99c.08,4.87.19,11.53-7.88,14.3ZM.89,3.84V4.97C.76,9.8.63,15.8,8,18.44c7.35-2.6,7.25-8.6,7.17-13.43V3.88A10.39,10.39,0,0,1,8,1.16,10.44,10.44,0,0,1,.89,3.84Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_418" data-name="Path 418" d="M4.66,8.59l1.83-.27a.42.42,0,0,0,.32-.22l.82-1.67a.41.41,0,0,1,.74,0L9.19,8.1a.42.42,0,0,0,.32.22l1.83.27a.42.42,0,0,1,.23.71l-1.33,1.29a.43.43,0,0,0-.12.37l.32,1.83a.42.42,0,0,1-.61.44l-1.64-.87a.42.42,0,0,0-.38,0l-1.65.87a.42.42,0,0,1-.6-.44L5.87,11a.4.4,0,0,0-.12-.37L4.43,9.3a.42.42,0,0,1,.23-.71Z" fill="rgba(255,255,255,0.8)"/>
          </g>
        </g>
      </g>
    </svg>`;

  public connectedCallback(): void {
    this.renderTemplate();
  }

  public disconnectedCallback(): void {
  }

  private renderTemplate(): void {
    const node = document.importNode(template.content, true);
    this.appendChild(node);
  }
}

const template = document.createElement('template');
template.innerHTML = IconQuarantine.template;
