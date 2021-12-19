export class IconNotifications extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-icon-notifications', IconNotifications);
  }

  public static template = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g id="Group_1237" data-name="Group 1237" transform="translate(-1310 -13)">
        <rect id="Rectangle_888" data-name="Rectangle 888" width="32" height="32" transform="translate(1310 13)" fill="#fff"/>
        <g id="Group_1210" data-name="Group 1210">
          <path id="notifications-24px" d="M9.744,16.5a1.44,1.44,0,0,0,1.436-1.436H8.308A1.435,1.435,0,0,0,9.744,16.5Zm4.308-4.308V8.6a4.374,4.374,0,0,0-3.231-4.537V3.577a1.077,1.077,0,1,0-2.154,0v.488A4.362,4.362,0,0,0,5.436,8.6v3.59L4,13.628v.718H15.487v-.718Z" transform="translate(1316 19.5)" fill="rgba(0,0,0,0.7)"/>
          <g id="Group_995" data-name="Group 995">
            <circle id="Ellipse_204" data-name="Ellipse 204" cx="8" cy="8" r="8" transform="translate(1326 13)" fill="#ff883f"/>
            <text id="_24" data-name="24" transform="translate(1329 24)" fill="#fff" font-size="9" font-family="Roboto-Regular, Roboto" letter-spacing="-0.04em"><tspan x="0" y="0">24</tspan></text>
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
template.innerHTML = IconNotifications.template;

