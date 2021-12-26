import { Component } from '@custom/component.decorator';
import { CustomComponent } from '@custom/custom-component';

let id = 0;

@Component({
  selector: 'hmw-checkbox',
  html: `
    <div class="checkbox-container">
      <div class="checkbox">
        <input type="checkbox"/>
        <label></label>
      </div>
      <label data-label="label"></label>
    </div>
  `
})
export class Checkbox extends CustomComponent {
  public connectedCallback(): void {
    this.setCheckboxBindingIds();
    this.setInputs();
    this.setClasses();
  }

  private setCheckboxBindingIds(): void {
    const inputRef = this.querySelector('input');
    const labelRefs = this.querySelectorAll('label');
    const newId = `checkbox-${id}`;

    this.setElementAttribute(inputRef, 'id', newId);
    labelRefs.forEach((element) => this.setElementAttribute(element, 'for', newId));

    id++;
  }

  private setElementAttribute(element: HTMLElement, attribute: string, value: string): void {
    element.setAttribute(attribute, value);
  }

  private setInputs(): void {
    const labelInput = this.getAttribute('label');
    const labelNode = this.querySelector('[data-label="label"]');

    (labelNode as any).innerText = labelInput;
  }

  private setClasses(): void {
    this.classList.add('u-display-block');
  }
}
