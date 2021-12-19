export class IconQuestion extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-icon-question', IconQuestion);
  }

  public static template = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <g id="Group_1236" data-name="Group 1236" transform="translate(-1278 -13)">
        <rect id="Rectangle_887" data-name="Rectangle 887" width="32" height="32" transform="translate(1278 13)" fill="#fff"/>
        <path id="Path_1335" data-name="Path 1335" d="M9,2a7,7,0,1,0,7,7A7,7,0,0,0,9,2Zm.7,11.9H8.3V12.5H9.7Zm1.449-5.425-.63.644A2.383,2.383,0,0,0,9.7,11.1H8.3v-.35a2.818,2.818,0,0,1,.819-1.981l.868-.882A1.369,1.369,0,0,0,10.4,6.9a1.4,1.4,0,0,0-2.8,0H6.2a2.8,2.8,0,0,1,5.6,0A2.227,2.227,0,0,1,11.149,8.475Z" transform="translate(1285 20)" fill="rgba(0,0,0,0.7)"/>
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
template.innerHTML = IconQuestion.template;