import { Component } from '@custom/component.decorator';
import { CustomComponent } from '@custom/custom-component';

@Component({
  selector: 'hmw-report-details-form',
  html: `
    <section>
      <h4 class="u-margin-top-large">Details</h4>
      
      <hmw-form-group class="u-margin-top-medium">
        <label for="details-type" slot="label">Type</label>
        <hmw-dropdown
          id="details-type"
          items="[
            { 'id': '1', 'displayText': 'Executive Summary'},
            { 'id': '2', 'displayText': 'Executive Summary 2'},
            { 'id': '3', 'displayText': 'Executive Summary 3'},
            { 'id': '4', 'displayText': 'Executive Summary 4'},
            { 'id': '5', 'displayText': 'Executive Summary 5'}
          ]" 
          slot="form-control"
        ></hmw-dropdown>
      </hmw-form-group>

      <hmw-form-group class="u-margin-top-small">
        <label for="details-company" slot="label">Company</label>
        <hmw-dropdown
          id="details-company"
          items="[
            { 'id': '1', 'displayText': 'Company Name'},
            { 'id': '2', 'displayText': 'Company Name 2'},
            { 'id': '3', 'displayText': 'Company Name 3'}
          ]" 
          slot="form-control"
        ></hmw-dropdown>
      </hmw-form-group>

      <hmw-form-group class="u-margin-top-small">
        <label for="details-name" slot="label">Name</label>
        <hmw-input id="details-name" slot="form-control"></hmw-input>
      </hmw-form-group>
    </section>
  `
})
export class ReportDetailsForm extends CustomComponent {}
