import { Component } from '@custom/component.decorator';
import { CustomComponent } from '@custom/custom-component';

@Component({
  selector: `hmw-dialog-section`,
  html: ``
})
export class DialogSection extends CustomComponent {
  public connectedCallback(): void {
    this.addClasses();
  }

  private addClasses(): void {
    this.classList.add('dialog__section');
  }
}
