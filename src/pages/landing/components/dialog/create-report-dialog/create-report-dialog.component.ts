import { dialogService } from '../../../../../shared/components/dialog/dialog.service';
import { AlertConfig, AlertType } from '../../../../../shared/components/alert/alert.models';
import { alertService } from '../../../../../shared/components/alert/alert.service';
import { Component } from '../../../../../shared/models/component.decorator';
import { CustomComponent } from '../../../../../shared/models/custom-component';

@Component({
  selector: 'hmw-create-report-dialog',
  html: `
    <hmw-dialog-header title="Create Report"></hmw-dialog-header>

    <hmw-dialog-section>
      <hmw-report-details-view></hmw-report-details-view>
    </hmw-dialog-section>

    <hmw-dialog-footer>
      <button class="btn btn--primary" data-save="true">Save</button>
      <button class="btn btn--secondary" data-cancel="true">Cancel</button>
    </hmw-dialog-footer>
  `
})
export class CreateReportDialog extends CustomComponent {
  public connectedCallback(): void {
    this.attachEventListeners();
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
