import { dialogService } from '../../shared/components/dialog/dialog.service';

export class Landing extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-landing', Landing);
  }

  public static template = `
    <hmw-header></hmw-header>
  
    <section class="container u-flex-flow">
      <header>
        <h2>Page title</h2>
      </header>

      <section class="create-report">
        <header>
          <hmw-icon-rocket></hmw-icon-rocket>
          <h3> Start creating reports </h3>
        </header>

        <p>You don't have any reports defined yet</p>

        <footer>
          <button class="btn btn--primary" data-create-report="true">CREATE REPORT</button>
        </footer>
      </section>
    </section>
  
    <hmw-menu></hmw-menu>
  `;

  public connectedCallback(): void {
    this.renderTemplate();
    this.attachClasses();
    this.attachListeners();
  }

  public disconnectedCallback(): void {
  }

  private renderTemplate(): void {
    const node = document.importNode(template.content, true);
    this.appendChild(node);
  }

  private attachClasses(): void {
    this.classList.add('u-flex-flow', 'u-height-100');
  }

  private attachListeners(): void {
    const buttonElementRef: HTMLButtonElement = this.querySelector('[data-create-report]');

    buttonElementRef.addEventListener('click', this.openDialog)
  }

  private openDialog() {
    dialogService.open(`<hmw-create-report-dialog></hmw-create-report-dialog>`);
  }
}

const template = document.createElement('template');
template.innerHTML = Landing.template;
