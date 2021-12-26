import { Component } from '@custom/component.decorator';
import { CustomComponent } from '@custom/custom-component';
import { dialogService } from './dialog.service';

@Component({
  selector: 'hmw-dialog-header',
  html: `
    <h3></h3>
    <hmw-icon-cross class="dialog-action" data-close="true"></hmw-icon-cross>
  `
})
export class DialogHeader extends CustomComponent {
  public connectedCallback(): void {
    this.addClasses();
    this.addEventListeners();
    this.setInputs();
  }

  private addClasses(): void {
    this.classList.add('dialog__header');
  }

  private addEventListeners(): void {
    const iconElementRef: SVGElement = this.querySelector('[data-close]');

    iconElementRef.addEventListener('click', this.closeDialog);
  }

  private closeDialog(): void {
    dialogService.close();
  }

  private setInputs(): void {
    const title = this.getAttribute('title');
    const headingElementRef = this.querySelector('h3');

    headingElementRef.innerText = title;
  }
}
