export class Landing extends HTMLElement {
  public static register(): void {
    window.customElements.define('hmw-landing', Landing);
  }

  public static template = `
    <section class="container">
      <hmw-header></hmw-header>

      <section>
        <header>
          <h2>Landing page</h2>
        </header>

        
      </section>
    </section>
  
    <hmw-menu></hmw-menu>
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
template.innerHTML = Landing.template;
