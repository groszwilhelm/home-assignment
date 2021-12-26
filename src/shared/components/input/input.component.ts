import { Component } from '@custom/component.decorator';
import { CustomComponent } from '@custom/custom-component';

@Component({
  selector: 'hmw-input',
  html: `
    <input class="input" placeholder="Placeholder" />
  `
})
export class Input extends CustomComponent {
  public connectedCallback(): void {
    this.setInputs();
  }

  private setInputs(): void {
    const inputElementRef = this.querySelector('input');
    const value = this.getAttribute('value');
    const shouldUpdateValue = value && !inputElementRef.value;

    if (shouldUpdateValue) {
      inputElementRef.setAttribute('value', value);
    }
  }
}
