import { pageComponents } from './pages';
import { sharedComponents } from './shared/components';

const components = [
  ...sharedComponents,
  ...pageComponents,
];

function registerComponents() {
  for(let component of components) {
    if (component.register) {
      component.register();
      continue;
    }

    console.error(`[ComponentRegistry]: Registering ${component.name} has failed, make sure to implement register static method!`);
  }
}

export function registerSharedComponents() {
  registerComponents();
}
