export class IconPolicies extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-icon-policies', IconPolicies);
  }

  public static template = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g id="Group_900" data-name="Group 900" transform="translate(386 -367)">
        <g id="icons" transform="translate(-386 367)">
          <rect id="icons_hosts_hover_background" data-name="icons/hosts/hover background" width="32" height="32" fill="none"/>
        </g>
        <g id="Layer_2" data-name="Layer 2" transform="translate(-378 375)">
          <g id="Layer_1" data-name="Layer 1">
            <path id="Path_415" data-name="Path 415" d="M11.71,3.43H4.29a.46.46,0,0,0-.46.46v6.5a.46.46,0,0,0,.25.42l3.23,1.57a1.41,1.41,0,0,0,.7.19,1.34,1.34,0,0,0,.65-.17l3.26-1.59a.46.46,0,0,0,.25-.42V3.89A.46.46,0,0,0,11.71,3.43ZM7.56,9.37a.56.56,0,0,1-.78,0L5.12,7.71l.78-.78L7.17,8.2,10.1,5.27l.78.78Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_416" data-name="Path 416" d="M13.89,16H2.11A2.1,2.1,0,0,1,0,13.89V3.62L3.62,0H13.89A2.1,2.1,0,0,1,16,2.11V13.89A2.1,2.1,0,0,1,13.89,16ZM.84,4v9.93A1.27,1.27,0,0,0,2.11,15.2H13.89a1.27,1.27,0,0,0,1.27-1.27V2.11A1.27,1.27,0,0,0,13.89.84H4Z" fill="rgba(255,255,255,0.8)"/>
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
template.innerHTML = IconPolicies.template;
