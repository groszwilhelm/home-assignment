export class DialogSection extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-dialog-section', DialogSection);
  }

  public static template = ``;

  public connectedCallback(): void {
    this.renderTemplate();
    this.addClasses();
  }

  private renderTemplate(): void {
    const node = document.importNode(template.content, true);
    this.appendChild(node);
  }

  private addClasses(): void {
    this.classList.add('dialog__section');
  }
}

const template = document.createElement('template');
template.innerHTML = DialogSection.template;
