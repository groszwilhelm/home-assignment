export class IconDashboard extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-icon-dashboard', IconDashboard);
  }

  public static template = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g id="Group_891" data-name="Group 891" transform="translate(530 -34)">
        <g id="icons" transform="translate(-530 34)">
          <rect id="icons_hosts_hover_background" data-name="icons/hosts/hover background" width="32" height="32" fill="none"/>
        </g>
        <g id="Layer_2" data-name="Layer 2" transform="translate(-522 42)">
          <g id="Layer_1" data-name="Layer 1">
            <path id="Path_393" data-name="Path 393" d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,15.16A7.16,7.16,0,1,1,15.16,8,7.16,7.16,0,0,1,8,15.16Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_394" data-name="Path 394" d="M7.58,9.31a1.37,1.37,0,0,0,1.71-.9A1.35,1.35,0,0,0,9,7.14l2.41-3.59a.39.39,0,0,0-.1-.55.4.4,0,0,0-.55.11L8.38,6.7a1.365,1.365,0,1,0-.8,2.61ZM7.51,7.68a.6.6,0,1,1,.175.825A.6.6,0,0,1,7.51,7.68Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_395" data-name="Path 395" d="M8.08,3.92l.49-.84A4.78,4.78,0,0,0,4.85,11.2l.45-.77A3.92,3.92,0,0,1,8.08,3.92Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_396" data-name="Path 396" d="M11.73,6a3.91,3.91,0,0,1-4.25,5.67l-.48.8a4.78,4.78,0,0,0,5.19-7.29Z" fill="rgba(255,255,255,0.8)"/>
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
template.innerHTML = IconDashboard.template;