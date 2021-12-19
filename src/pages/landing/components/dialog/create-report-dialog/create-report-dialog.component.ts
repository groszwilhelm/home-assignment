import { dialogService } from '../../../../../shared/components/dialog/dialog.service';

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
      <button class="btn btn--primary">Save</button>
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

    cancelElementRef.addEventListener('click', this.closeDialog);
  }

  private closeDialog(): void {
    dialogService.close();
  }
}

const template = document.createElement('template');
template.innerHTML = CreateReportDialog.template;
