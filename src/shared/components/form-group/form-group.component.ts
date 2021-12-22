export class FormGroup extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-form-group', FormGroup);
  }

  public static styles = `
    <style>
      :host {
        display: block;
      }

      .row {
        display: flex;
        flex-wrap: wrap;
      }

      .col-2 {
        flex: 0 0 16.66667%;
        max-width: 0 0 16.66667%;
      }
    </style>
  `;

  public static template = `
   ${FormGroup.styles}
    <div class="row">
      <div class="col-2">
        <slot name="label"></slot>
      </div>

      <div class="col-2">
        <slot name="form-control"></slot>
      </div>
    </div>
  `;

  public connectedCallback(): void {
    this.renderTemplate();
  }

  public disconnectedCallback(): void {
  }

  private renderTemplate(): void {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

const template = document.createElement('template');
template.innerHTML = FormGroup.template;
