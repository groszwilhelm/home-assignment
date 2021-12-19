export class ReportSettingsForm extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-report-settings-form', ReportSettingsForm);
  }

  public static template = `
    <section class="u-margin-bottom-medium">
      <h4 class="u-margin-top-large">Settings</h4>

      <div class="u-margin-top-medium">
        <input type="radio" id="export" name="export">
        <label for="export">Export now</label>
      </div>

      <div class="u-margin-top-default">
        <input type="radio" id="scheduled" name="export" checked>
        <label for="scheduled">Scheduled</label>
      </div>

      <hmw-form-group class="u-margin-top-default">
        <label for="settings-recurrence" slot="label">Recurrence</label>
        <hmw-input id="settings-recurrence" slot="form-control"></hmw-input>
      </hmw-form-group>

      <hmw-form-group class="u-margin-top-default">
        <label for="settings-on" slot="label">On</label>
        <hmw-input id="settings-on" slot="form-control"></hmw-input>
      </hmw-form-group>

      <hmw-form-group class="u-margin-top-medium">
        <label for="settings-reporting-interval" slot="label">Reporting interval</label>
        <hmw-input id="settings-reporting-interval" slot="form-control"></hmw-input>
      </hmw-form-group>

      <hmw-form-group class="u-margin-top-medium">
        <label for="settings-reporting-interval" slot="label">Attach files</label>
        <hmw-checkbox label="Dashboard PDF" slot="form-control"></hmw-checkbox>
        <hmw-checkbox label="Something Else" slot="form-control" class="u-margin-top-default"></hmw-checkbox>
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
template.innerHTML = ReportSettingsForm.template;
