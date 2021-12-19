export class Header extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-header', Header);
  }

  public static template = `
    <header class="header">
      <hmw-input value="Welcome, John Smith"></hmw-input>
      <hmw-icon-gift></hmw-icon-gift>
      <hmw-icon-question></hmw-icon-question>
      <hmw-icon-notifications></hmw-icon-notifications>
    </header>
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
template.innerHTML = Header.template;
