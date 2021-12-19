import { dialogService } from './dialog.service';

export class Dialog extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-dialog', Dialog);
  }

  public static template = `
    <div class="dialog-container" data-dialog-container="true"></div>
  `;
  
  private subscription: number;

  public connectedCallback(): void {
    this.handleOpenStream();
    this.handleCloseStream();
  }

  public disconnectedCallback(): void {
    dialogService
      .getOpenObservable()
      .unsubscribe(this.subscription);
  }

  private handleOpenStream(): void {
    this.subscription = dialogService.getOpenObservable()
      .subscribe((htmlTemplate) => this.attachDialog(htmlTemplate));
  }

  /**
   * Attaches web component to the current container and sets dialog class on the webcomponent
   */
  private attachDialog = (htmlTemplate: any): void => {
    this.renderTemplate();

    const containerElementRef = this.querySelector('[data-dialog-container]');
    containerElementRef.innerHTML = htmlTemplate;

    const dialogElementRef = this.querySelector('[data-dialog-container] > *');
    dialogElementRef.classList.add('dialog');
  }

  private handleCloseStream(): void {
    dialogService.getClosedObservable()
      .subscribe(() => {
        const rootNode = this.querySelector('[data-dialog-container]');
        this.removeChild(rootNode);
      });
  }

  private renderTemplate(): void {
    const node = document.importNode(template.content, true);
    this.appendChild(node);
  }
}

const template = document.createElement('template');
template.innerHTML = Dialog.template;
