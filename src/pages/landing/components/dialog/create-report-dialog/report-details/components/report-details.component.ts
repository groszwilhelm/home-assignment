export class ReportDetailsForm extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-report-details-form', ReportDetailsForm);
  }

  public static template = `
    <section>
      <h4 class="u-margin-top-large">Details</h4>
      
      <hmw-form-group class="u-margin-top-medium">
        <label for="details-type" slot="label">Type</label>
        <hmw-input id="details-type" value="Executive Summary" slot="form-control"></hmw-input>
      </hmw-form-group>

      <hmw-form-group class="u-margin-top-small">
        <label for="details-company" slot="label">Company</label>
        <hmw-input id="details-company" value="Company Name" slot="form-control"></hmw-input>
      </hmw-form-group>

      <hmw-form-group class="u-margin-top-small">
        <label for="details-name" slot="label">Name</label>
        <hmw-input id="details-name" slot="form-control"></hmw-input>
      </hmw-form-group>
    </section>
  `;

  public connectedCallback(): void {
    this.renderTemplate();
  }

  private renderTemplate(): void {
    const node = document.importNode(template.content, true);
    this.appendChild(node);
  }
}

const template = document.createElement('template');
template.innerHTML = ReportDetailsForm.template;
