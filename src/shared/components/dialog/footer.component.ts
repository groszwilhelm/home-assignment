import { Component } from '@custom/component.decorator';
import { CustomComponent } from '@custom/custom-component';

@Component({
  selector: 'hmw-dialog-footer',
  html: ``
})
export class DialogFooter extends CustomComponent {
  public connectedCallback(): void {
    this.addClasses();
  }

  private addClasses(): void {
    this.classList.add('dialog__footer');
  }
}
