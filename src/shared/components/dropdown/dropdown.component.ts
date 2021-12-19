import { DropdownItem, EventCode } from './dropdown.model';

export class Dropdown extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-dropdown', Dropdown);
  }

  public static template = `
    <div class="dropdown">
      <input class="input input--dropdown" data-input="true" />
      <hmw-icon-cross class="input__clear u-display-none" data-clear="true"></hmw-icon-cross>
      <span class="input__arrow-container" data-toggle="true"></span>
    </div>

    <ul class="dropdown-body u-display-none" data-dropdown-body="true"></ul>
  `;

  public connectedCallback(): void {
    this.renderTemplate();
    this.attachClasses();
    this.attachEventListeners();
    this.setInputs();
  }

  public disconnectedCallback(): void {
  }

  private renderTemplate(): void {
    const node = document.importNode(template.content, true);
    this.appendChild(node);
  }

  private attachClasses(): void {
    this.classList.add('u-display-inline-block', 'u-position-relative');
  }

  private attachEventListeners(): void {
    const arrowElementRef: HTMLSpanElement = this.querySelector('[data-toggle]');
    const crossElementRef: HTMLElement = this.querySelector('[data-clear]');
    const dropdownBodyRef: HTMLUListElement = this.querySelector('[data-dropdown-body]');
    const inputElementRef: HTMLInputElement = this.querySelector('[data-input]');

    arrowElementRef.addEventListener('click', this.toggleBody.bind(this, dropdownBodyRef, crossElementRef));
    crossElementRef.addEventListener('click', this.clearInput.bind(this, inputElementRef));
    dropdownBodyRef.addEventListener('click', this.selectItem.bind(this, inputElementRef, dropdownBodyRef, crossElementRef));
    dropdownBodyRef.addEventListener('keydown', this.selectItem.bind(this, inputElementRef, dropdownBodyRef, crossElementRef));
  }

  private toggleBody(dropdownBodyRef: HTMLUListElement, crossElementRef: HTMLElement): void {
    const toggleClass = 'u-display-none';
    
    dropdownBodyRef.classList.toggle(toggleClass);
    crossElementRef.classList.toggle(toggleClass);
  }

  private clearInput(inputElementRef: HTMLInputElement): void {
    inputElementRef.value = '';
  }

  private selectItem(inputElementRef: HTMLInputElement, dropdownBodyRef: HTMLUListElement, crossElementRef: HTMLElement, event: KeyboardEvent) {
    const shouldSetValue = !event.code 
      || event.code === EventCode.Enter
      || event.code === EventCode.Space;

    if (shouldSetValue) {
      inputElementRef.value = (event.target as HTMLElement).dataset.value;

      this.toggleBody(dropdownBodyRef, crossElementRef);
    }
  }

  private setInputs(): void {
    const inputElementRef: HTMLInputElement = this.querySelector('[data-input]');
    const dropdownBodyRef: HTMLUListElement = this.querySelector('[data-dropdown-body]');
    const items: Array<DropdownItem> = JSON.parse(this.getAttribute('items').replace(/'/g, `"`));
    let html = '';
    
    items.forEach(({ id, displayText }, index) => {
      if (index === 0) {
        inputElementRef.value = displayText;
      }
      
      html += `<li 
        class="dropdown-body__item" 
        tabindex="0" 
        data-value="${displayText}" 
        data-id=${id}
      >${displayText}</li>`
    });

    dropdownBodyRef.innerHTML = html;
  }
}

const template = document.createElement('template');
template.innerHTML = Dropdown.template;
