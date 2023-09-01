import * as Icon from '@tabler/icons';

export interface Menu {
  name: string;
  shortName: string;
  key: string;
  baseUrl?: string;
  isApp?: boolean;
  icon: Icon.TablerIcon;
  permissions: string[];
  subMenus?: Menu[];
}
