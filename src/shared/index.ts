import { Input } from './components/input/input.component';
import { Checkbox } from './components/checkbox/checkbox.component';

const components = [
  Input,
  Checkbox,
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
