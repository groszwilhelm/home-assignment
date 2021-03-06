import { pageComponents } from './pages';
import { sharedComponents } from './shared/components';

const components = [
  ...sharedComponents,
  ...pageComponents,
];

export function registerComponents() {
  for(let component of components) {
    if (component.register) {
      component.register();
      continue;
    }

    console.error(`[ComponentRegistry]: Registering ${component.name} has failed, make sure to decorate your component with @Component decorator!`);
  }
}
