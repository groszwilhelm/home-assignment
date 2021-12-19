import { dialogService } from './dialog.service';

export class DialogHeader extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-dialog-header', DialogHeader);
  }

  public static template = `
    <h3></h3>
    <hmw-icon-cross class="dialog-action" data-close="true"></hmw-icon-cross>
  `;

  public connectedCallback(): void {
    this.renderTemplate();
    this.addClasses();
    this.addEventListeners();
    this.setInputs();
  }

  private renderTemplate(): void {
    const node = document.importNode(template.content, true);
    this.appendChild(node);
  }

  private addClasses(): void {
    this.classList.add('dialog__header');
  }

  private addEventListeners(): void {
    const iconElementRef: SVGElement = this.querySelector('[data-close]');

    iconElementRef.addEventListener('click', this.closeDialog);
  }

  private closeDialog(): void {
    dialogService.close();
  }

  private setInputs(): void {
    const title = this.getAttribute('title');
    const headingElementRef = this.querySelector('h3');

    headingElementRef.innerText = title;
  }
}

const template = document.createElement('template');
template.innerHTML = DialogHeader.template;
