import { Input } from './input/input.component';
import { Checkbox } from './checkbox/checkbox.component';
import { icons } from './icons';
import { FormGroup } from './form-group/form-group.component';
import { Dialog } from './dialog/dialog.component';
import { DialogHeader } from './dialog/header.component';
import { DialogFooter } from './dialog/footer.component';
import { DialogSection } from './dialog/section.component';

export const sharedComponents = [
  ...icons,
  Input,
  Checkbox,
  FormGroup,
  Dialog,
  DialogHeader,
  DialogSection,
  DialogFooter,
];
