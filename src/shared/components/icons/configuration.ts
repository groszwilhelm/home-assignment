export class IconConfiguration extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-icon-configuration', IconConfiguration);
  }

  public static template = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g id="Group_908" data-name="Group 908" transform="translate(388 -772)">
        <g id="icons" transform="translate(-388 772)">
          <rect id="icons_hosts_hover_background" data-name="icons/hosts/hover background" width="32" height="32" fill="none"/>
        </g>
        <g id="Layer_2" data-name="Layer 2" transform="translate(-380 780)">
          <g id="Layer_1" data-name="Layer 1">
            <path id="Path_388" data-name="Path 388" d="M16,7.11a8,8,0,0,0-1.68-4l-.67.67A7.12,7.12,0,0,1,15,7.11Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_389" data-name="Path 389" d="M10.56,11.75a.31.31,0,0,0,.44,0l.61-.59a.31.31,0,0,0,0-.44l-.5-.51a3.61,3.61,0,0,0,.59-1.36h.71a.33.33,0,0,0,.32-.31V7.7a.31.31,0,0,0-.31-.32h-.71A3.77,3.77,0,0,0,11.18,6l.51-.49a.31.31,0,0,0,0-.44l-.59-.61a.31.31,0,0,0-.44,0l-.51.5a3.76,3.76,0,0,0-1.36-.59V3.64a.31.31,0,0,0-.31-.31H7.63a.31.31,0,0,0-.32.31v.71a3.71,3.71,0,0,0-1.38.55l-.49-.51a.31.31,0,0,0-.44,0L4.39,5a.31.31,0,0,0,0,.44l.5.51A3.61,3.61,0,0,0,4.3,7.31H3.58a.33.33,0,0,0-.32.31v.85a.32.32,0,0,0,.31.32h.71a3.77,3.77,0,0,0,.55,1.38l-.51.49a.31.31,0,0,0,0,.44l.59.61a.31.31,0,0,0,.44,0l.51-.5a3.61,3.61,0,0,0,1.36.59v.71a.33.33,0,0,0,.31.32h.85a.32.32,0,0,0,.32-.31v-.71a3.77,3.77,0,0,0,1.38-.55Zm-2.6-1A6.132,6.132,0,1,1,8,10.73Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_390" data-name="Path 390" d="M8,1a7.11,7.11,0,0,1,4.31,1.46L13,1.74A8.055,8.055,0,0,0,0,7.11H1A7.11,7.11,0,0,1,8,1Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_391" data-name="Path 391" d="M1,9H0a8.07,8.07,0,0,0,7.05,7V15A7.11,7.11,0,0,1,1,9Z" fill="rgba(255,255,255,0.8)"/>
            <path id="Path_392" data-name="Path 392" d="M15,9a7.11,7.11,0,0,1-6,6.1v1A8.07,8.07,0,0,0,16,9Z" fill="rgba(255,255,255,0.8)"/>
            <circle id="Ellipse_202" data-name="Ellipse 202" cx="1.42" cy="1.42" r="1.42" transform="translate(6.58 6.61)" fill="rgba(255,255,255,0.8)"/>
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
template.innerHTML = IconConfiguration.template;
