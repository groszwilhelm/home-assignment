export class IconNotifications extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-icon-notifications', IconNotifications);
  }

  public static template = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1366" height="56" viewBox="0 0 1366 56">
      <g id="Group_1238" data-name="Group 1238" transform="translate(-4924 -1915)">
        <rect id="Rectangle_895" data-name="Rectangle 895" width="1366" height="56" transform="translate(4924 1915)" fill="#fff"/>
        <rect id="Field" width="186" height="32" rx="4" transform="translate(5947 1927)" fill="rgba(255,255,255,0.03)"/>
        <text id="Text" transform="translate(6023 1948)" fill="rgba(0,0,0,0.9)" font-size="12" font-family="Montserrat-Regular, Montserrat"><tspan x="0" y="0">John Smith</tspan></text>
        <text id="Text-2" data-name="Text" transform="translate(5955 1948)" fill="rgba(0,0,0,0.7)" font-size="12" font-family="Montserrat-Regular, Montserrat"><tspan x="0" y="0">Welcome,</tspan></text>
        <path id="Rectangle_896" data-name="Rectangle 896" d="M0,0H29a3,3,0,0,1,3,3V27a3,3,0,0,1-3,3H0a0,0,0,0,1,0,0V0A0,0,0,0,1,0,0Z" transform="translate(6100 1928)" fill="none"/>
        <path id="Path_10244" data-name="Path 10244" d="M7,10l5,5,5-5Z" transform="translate(6104 1931)" fill="rgba(0,0,0,0.7)"/>
        <line id="Line_327" data-name="Line 327" x2="186" transform="translate(5947.5 1959.5)" fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="1"/>
        <g id="Group_1235" data-name="Group 1235" transform="translate(4924 1915)">
          <rect id="Rectangle_886" data-name="Rectangle 886" width="32" height="32" transform="translate(1246 13)" fill="#fff"/>
          <path id="icon-whatsnew" d="M9.516,12.124V4.666H6.234v7.458c0,.365.3.542.656.542H8.859C9.218,12.666,9.516,12.488,9.516,12.124ZM4.84,3.332h2L5.547,1.655a.934.934,0,0,0-.708-.323,1,1,0,0,0,0,2Zm7.055-1a.993.993,0,0,0-.984-1,.934.934,0,0,0-.708.323L8.921,3.332H10.91A.993.993,0,0,0,11.895,2.332ZM15.75,5V8.332a.327.327,0,0,1-.328.333h-.984V13a.993.993,0,0,1-.984,1H2.3a.993.993,0,0,1-.984-1V8.666H.328A.327.327,0,0,1,0,8.332V5a.327.327,0,0,1,.328-.333H4.84a2.312,2.312,0,0,1-2.3-2.333A2.312,2.312,0,0,1,4.84,0,2.17,2.17,0,0,1,6.562.8L7.875,2.52,9.187.8A2.17,2.17,0,0,1,10.91,0a2.312,2.312,0,0,1,2.3,2.333,2.312,2.312,0,0,1-2.3,2.333h4.512A.327.327,0,0,1,15.75,5Z" transform="translate(1254 22.001)" fill="rgba(0,0,0,0.7)"/>
        </g>
        <g id="Group_1236" data-name="Group 1236" transform="translate(4924 1915)">
          <rect id="Rectangle_887" data-name="Rectangle 887" width="32" height="32" transform="translate(1278 13)" fill="#fff"/>
          <path id="Path_1335" data-name="Path 1335" d="M9,2a7,7,0,1,0,7,7A7,7,0,0,0,9,2Zm.7,11.9H8.3V12.5H9.7Zm1.449-5.425-.63.644A2.383,2.383,0,0,0,9.7,11.1H8.3v-.35a2.818,2.818,0,0,1,.819-1.981l.868-.882A1.369,1.369,0,0,0,10.4,6.9a1.4,1.4,0,0,0-2.8,0H6.2a2.8,2.8,0,0,1,5.6,0A2.227,2.227,0,0,1,11.149,8.475Z" transform="translate(1285 20)" fill="rgba(0,0,0,0.7)"/>
        </g>
        <g id="Group_1237" data-name="Group 1237" transform="translate(4924 1915)">
          <rect id="Rectangle_888" data-name="Rectangle 888" width="32" height="32" transform="translate(1310 13)" fill="#fff"/>
          <g id="Group_1210" data-name="Group 1210">
            <path id="notifications-24px" d="M9.744,16.5a1.44,1.44,0,0,0,1.436-1.436H8.308A1.435,1.435,0,0,0,9.744,16.5Zm4.308-4.308V8.6a4.374,4.374,0,0,0-3.231-4.537V3.577a1.077,1.077,0,1,0-2.154,0v.488A4.362,4.362,0,0,0,5.436,8.6v3.59L4,13.628v.718H15.487v-.718Z" transform="translate(1316 19.5)" fill="rgba(0,0,0,0.7)"/>
            <g id="Group_995" data-name="Group 995">
              <circle id="Ellipse_204" data-name="Ellipse 204" cx="8" cy="8" r="8" transform="translate(1326 13)" fill="#ff883f"/>
              <text id="_24" data-name="24" transform="translate(1329 24)" fill="#fff" font-size="9" font-family="Roboto-Regular, Roboto" letter-spacing="-0.04em"><tspan x="0" y="0">24</tspan></text>
            </g>
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

