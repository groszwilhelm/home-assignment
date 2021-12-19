enum InputClass {
  Active = 'input--active',
}

export class Input extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-input', Input);
  }

  public static template = `
    <input class="input" placeholder="Placeholder" />
  `;

  public connectedCallback(): void {
    this.renderTemplate();
  }

  public disconnectedCallback(): void {
  }

  private renderTemplate(): void {
    const node = document.importNode(template.content, true);
    this.appendChild(node);
  }
}

const template = document.createElement('template');
template.innerHTML = Input.template;
