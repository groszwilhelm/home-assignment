export class IconAccounts extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-icon-accounts', IconAccounts);
  }

  public static template = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g id="Group_904" data-name="Group 904" transform="translate(394 -674)">
        <g id="icons" transform="translate(-394 674)">
          <rect id="icons_hosts_hover_background" data-name="icons/hosts/hover background" width="32" height="32" fill="none"/>
        </g>
        <g id="Layer_2" data-name="Layer 2" transform="translate(-386 684.02)">
          <g id="Layer_1" data-name="Layer 1">
            <path id="Path_381" data-name="Path 381" d="M10.29,2.08A2.62,2.62,0,0,1,11.51,4a2,2,0,0,0,.89.2,2.11,2.11,0,1,0-2.11-2.14Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_382" data-name="Path 382" d="M8.11,6.4A2.11,2.11,0,1,0,6,4.29,2.11,2.11,0,0,0,8.11,6.4Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_383" data-name="Path 383" d="M9,6.55H7.21a2.7,2.7,0,0,0-2.7,2.7v2.23h.15a12.44,12.44,0,0,0,3.68.59,7.39,7.39,0,0,0,3.21-.61l.14-.07h0V9.25A2.71,2.71,0,0,0,9,6.55Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_384" data-name="Path 384" d="M13.3,4.37H11.52a2.57,2.57,0,0,1-.81,1.81A3.21,3.21,0,0,1,13,9.26v.67a7.21,7.21,0,0,0,2.83-.59L16,9.26h0V7.07a2.7,2.7,0,0,0-2.7-2.7Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_385" data-name="Path 385" d="M3.6,4.22A2.12,2.12,0,0,0,4.72,3.9a2.63,2.63,0,0,1,1-1.67V2.11A2.11,2.11,0,1,0,3.6,4.22Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_386" data-name="Path 386" d="M5.5,6.18a2.65,2.65,0,0,1-.81-1.8h-2A2.7,2.7,0,0,0,0,7.07V9.3H.15a12.46,12.46,0,0,0,3,.58V9.26A3.21,3.21,0,0,1,5.5,6.18Z" fill="rgba(255,255,255,0.8)"/>
          </g>
        </g>
      </g>
    </svg>
    `;

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
template.innerHTML = IconAccounts.template;
