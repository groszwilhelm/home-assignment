import { dialogService } from '../../../../../shared/components/dialog/dialog.service';
import { AlertConfig, AlertType } from '../../../../../shared/components/alert/alert.models';
import { alertService } from '../../../../../shared/components/alert/alert.service';

export class CreateReportDialog extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-create-report-dialog', CreateReportDialog);
  }

  public static template = `
    <hmw-dialog-header title="Create Report"></hmw-dialog-header>

    <hmw-dialog-section>
      <hmw-report-details-view></hmw-report-details-view>
    </hmw-dialog-section>

    <hmw-dialog-footer>
      <button class="btn btn--primary" data-save="true">Save</button>
      <button class="btn btn--secondary" data-cancel="true">Cancel</button>
    </hmw-dialog-footer>
  `;

  public connectedCallback(): void {
    this.renderTemplate();
    this.attachEventListeners();
  }

  private renderTemplate(): void {
    const node = document.importNode(template.content, true);
    this.appendChild(node);
  }

  private attachEventListeners(): void {
    const cancelElementRef: HTMLButtonElement = this.querySelector('[data-cancel]');
    const saveElementRef: HTMLButtonElement = this.querySelector('[data-save]');

    cancelElementRef.addEventListener('click', this.closeDialog);
    saveElementRef.addEventListener('click', () => this.showAlert(AlertType.Success))
  }

  private closeDialog(): void {
    dialogService.close();
  }

  private showAlert(type: AlertType) {
    const alertText = 'Successfully saved the report';
    const config = new AlertConfig(type, alertText);

    alertService.open(config);
  }
}

const template = document.createElement('template');
template.innerHTML = CreateReportDialog.template;
