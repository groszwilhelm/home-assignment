import { Input } from './shared/components/input/input.component';
import { Checkbox } from './shared/components/checkbox/checkbox.component';
import { Landing } from './pages/landing/landing.component';
import { Menu } from './pages/landing/components/menu/menu.component';
import { icons } from './shared/components/icons';

const components = [
  Input,
  Checkbox,
  Landing,
  Menu,
  ...icons
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
