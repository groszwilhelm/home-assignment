import { Component } from '@custom/component.decorator';
import { CustomComponent } from '@custom/custom-component';
import { dialogService } from '../../shared/components/dialog/dialog.service';

@Component({
  selector: 'hmw-landing',
  html: `
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
  `
})
export class Landing extends CustomComponent {
  public connectedCallback(): void {
    this.attachClasses();
    this.attachListeners();
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
