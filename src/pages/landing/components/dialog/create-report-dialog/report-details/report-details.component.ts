import { Component } from '@custom/component.decorator';
import { CustomComponent } from '@custom/custom-component';

@Component({
  selector: 'hmw-report-details-view',
  html: `
    <hmw-report-details-form></hmw-report-details-form>    
    <hmw-report-settings-form></hmw-report-settings-form>
  `
})
export class ReportDetailsView extends CustomComponent {}
