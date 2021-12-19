import { Input } from './shared/components/input/input.component';
import { Checkbox } from './shared/components/checkbox/checkbox.component';
import { Landing } from './pages/landing/landing.component';
import { Menu } from './pages/landing/components/menu/menu.component';
import { icons } from './shared/components/icons';
import { Header } from './pages/landing/components/header/header.component';
import { Dialog } from './shared/components/dialog/dialog.component';
import { DialogHeader } from './shared/components/dialog/header.component';
import { DialogFooter } from './shared/components/dialog/footer.component';
import { DialogSection } from './shared/components/dialog/section.component';
import { CreateReportDialog } from './pages/landing/components/dialog/create-report-dialog/create-report-dialog.component';

const components = [
  Input,
  Checkbox,
  Landing,
  Menu,
  Header,
  Dialog,
  DialogHeader,
  DialogFooter,
  DialogSection,
  CreateReportDialog,
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
