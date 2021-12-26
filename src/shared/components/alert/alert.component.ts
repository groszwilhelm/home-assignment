import { Component } from '@custom/component.decorator';
import { CustomComponent } from '@custom/custom-component';
import { AlertConfig } from './alert.models';
import { alertService } from './alert.service';

@Component({
  selector: 'hmw-alert',
  html: `
    <div class="alert" data-alert="true">
      <span class="alert__icon"></span>
      
      <div class="alert__text" data-alert-text="true"></div>

      <span class="alert__close" data-close="true">
        <hmw-icon-cross></hmw-icon-cross>
      </span>
    </div>
  `
})
export class Alert extends CustomComponent {
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
    this.render(false);
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
