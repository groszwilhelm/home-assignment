import { AlertConfig, AlertType } from './alert.models';
import { alertService } from './alert.service';

export class Alert extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-alert', Alert);
  }

  public static template = `
    <div class="alert" data-alert="true">
      <span class="alert__icon"></span>
      
      <div class="alert__text" data-alert-text="true"></div>

      <span class="alert__close" data-close="true">
        <hmw-icon-cross></hmw-icon-cross>
      </span>
    </div>
  `;

  private closeTimeout: number = 3000;
  private timeout: NodeJS.Timeout;

  private openSubscription: number;
  private closeSubscription: number;

  public connectedCallback(): void {
    this.handleStreamUpdates();
  }

  public disconnectedCallback(): void {
    alertService
      .getOpenObservable()
      .unsubscribe(this.openSubscription);

    alertService
      .getCloseObservable()
      .unsubscribe(this.closeSubscription);
  }

  private handleStreamUpdates(): void {
    this.openSubscription = alertService.getOpenObservable()
      .subscribe((config) => this.handleOpenEvent(config));

    this.closeSubscription = alertService.getCloseObservable()
      .subscribe(() => this.destroyTemplate());
  }

  private handleOpenEvent(config: AlertConfig): void {
    this.checkForConflictingState();
    this.renderTemplate();
    this.destroyTemplateAfterMilisecons(this.closeTimeout);
    this.attachClass(config.type);
    this.attachListeners();
    this.renderAlertText(config.text);
  }

  /**
   * Checks and destroys potentail previously rendered view and timeout
   */
  private checkForConflictingState(): void {
    const alertNode = this.querySelector('[data-alert]');

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    if (alertNode) {
      this.destroyTemplate();
    }
  }

  private renderTemplate(): void {
    const node = document.importNode(template.content, true);
    this.appendChild(node);
  }

  private destroyTemplate = (): void => {
    const alertNode = this.querySelector('[data-alert]');

    if (alertNode) {
      this.removeChild(alertNode);
    }
  }

  private destroyTemplateAfterMilisecons(seconds: number) {
    this.timeout = setTimeout(() => this.destroyTemplate(), seconds)
  }

  private attachClass(className: string): void {
    const alertNode = this.querySelector('[data-alert]');

    alertNode.classList.add(className);
  }

  private attachListeners() {
    const closeElementRef: HTMLButtonElement = this.querySelector('[data-close]');

    closeElementRef.addEventListener('click', this.destroyTemplate);
  }

  private renderAlertText(text: string): void {
    const alertTextElementRef = this.querySelector('[data-alert-text]');

    alertTextElementRef.innerHTML = text;
  }
}

const template = document.createElement('template');
template.innerHTML = Alert.template;
