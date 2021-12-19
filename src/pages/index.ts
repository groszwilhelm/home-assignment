import { Landing } from './landing/landing.component';
import { Menu } from './landing/components/menu/menu.component';
import { Header } from './landing/components/header/header.component';
import { CreateReportDialog } from './landing/components/dialog/create-report-dialog/create-report-dialog.component';
import { ReportDetailsView } from './landing/components/dialog/create-report-dialog/report-details/report-details.component';
import { ReportDetailsForm } from './landing/components/dialog/create-report-dialog/report-details/components/report-details.component';
import { ReportSettingsForm } from './landing/components/dialog/create-report-dialog/report-details/components/report-settings.component';

export const pageComponents = [
  Landing,
  Menu,
  Header,
  CreateReportDialog,
  ReportDetailsView,
  ReportDetailsForm,
  ReportSettingsForm,
];
