let id = 0;

export class Checkbox extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-checkbox', Checkbox);
  }

  public static template = `
    <div class="checkbox-container">
      <div class="checkbox">
        <input type="checkbox"/>
        <label></label>
      </div>
      <label data-label="label"></label>
    </div>
  `;

  public connectedCallback(): void {
    this.renderTemplate();
    this.setCheckboxBindingIds();
    this.setInputs();
  }

  public disconnectedCallback(): void {
  }

  private renderTemplate(): void {
    const node = document.importNode(template.content, true);
    this.appendChild(node);
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

  private setInputs() {
    const labelInput = this.getAttribute('label');
    const labelNode = this.querySelector('[data-label="label"]');

    (labelNode as any).innerText = labelInput;
  }
}

const template = document.createElement('template');
template.innerHTML = Checkbox.template;
