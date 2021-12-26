type Consturctor = { new(...args: any[]): any };

interface ComponentProperties {
  selector: string, 
  html: string, 
  noImplicitRender?: boolean,
  styles?: string,
  withShadowDom?: boolean,
}

export function Component({ selector, html, noImplicitRender = false, styles, withShadowDom = false }: ComponentProperties) {
  return function <T extends Consturctor>(BaseClass: T) {
    return class extends BaseClass {
      static register = function () {
        window.customElements.define(selector, this);
      }

      protected template;

      constructor(...args: any[]) {
        super(...args);

        this.template = document.createElement('template');
        this.template.innerHTML = styles 
          ? `<style>${styles}</style> ${html}` 
          : html;

        if (!noImplicitRender) {
          this.render(withShadowDom);
        }
      }

      protected render(withShadowDom: boolean): void {
        if (withShadowDom) {
          this.appendNodesWithShadow();
        } else {
          this.appendNodes();
        }
      }

      private appendNodes(): void {
        const node = document.importNode(this.template.content, true);
        this.appendChild(node);
      }

      private appendNodesWithShadow(): void {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
      }
    }
  }
}

