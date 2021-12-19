export class ReportDetailsView extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-report-details-view', ReportDetailsView);
  }

  public static template = `
    <hmw-report-details-form></hmw-report-details-form>    
    <hmw-report-settings-form></hmw-report-settings-form>
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
template.innerHTML = ReportDetailsView.template;
