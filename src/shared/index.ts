import { Input } from './components/input/input.component';

const components = [
  Input,
]

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
