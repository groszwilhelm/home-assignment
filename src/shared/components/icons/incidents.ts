export class IconIncidents extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-icon-incidents', IconIncidents);
  }

  public static template = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g id="Group_895" data-name="Group 895" transform="translate(402 -122)">
        <g id="icons" transform="translate(-402 122)">
          <rect id="icons_hosts_hover_background" data-name="icons/hosts/hover background" width="32" height="32" fill="none"/>
        </g>
        <g id="Layer_1" data-name="Layer 1" transform="translate(-393.944 130)">
          <path id="Path_397" data-name="Path 397" d="M6.23,8A1.86,1.86,0,1,1,8.09,9.82,1.86,1.86,0,0,1,6.23,8M16,7.9A7.9,7.9,0,0,0,9.8.18v.88A7.06,7.06,0,0,1,8.51,15V12.7H8.06A4.78,4.78,0,0,1,3.31,8.33H4.65a3.76,3.76,0,0,0,.19.86,3.46,3.46,0,0,0,6.65-.85h2.08V7.49A5.62,5.62,0,0,0,8.34,2.33V0H7.49A7.91,7.91,0,0,0,6.17,15.63v-.88A7.06,7.06,0,0,1,7.49.87v2.3h.45a4.78,4.78,0,0,1,4.75,4.32h-1.2a3.44,3.44,0,0,0-6.83,0H2.43v.86a5.64,5.64,0,0,0,5.21,5.16v2.33h.85A7.92,7.92,0,0,0,16,7.9" fill="rgba(255,255,255,0.8)"/>
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
template.innerHTML = IconIncidents.template;