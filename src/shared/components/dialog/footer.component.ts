export class DialogFooter extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-dialog-footer', DialogFooter);
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
    this.classList.add('dialog__footer');
  }
}

const template = document.createElement('template');
template.innerHTML = DialogFooter.template;
