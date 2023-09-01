import { Menu } from '../libs/models/menu';
import * as Icon from '@tabler/icons-react';

const menus: Menu[] = [
  {
    name: 'Home',
    shortName: 'Home',
    key: 'home',
    icon: Icon.IconSmartHome,
    permissions: [],
  },
  {
    name: 'Dashboard',
    shortName: 'Dashboard',
    key: 'dashboard',
    icon: Icon.IconDashboard,
    permissions: [],
  },
  {
    name: 'Published Forum Topics',
    shortName: 'Forum Topics',
    key: 'published',
    icon: Icon.IconLicense,
    permissions: [],
  },

  {
    name: 'Forum Topics',
    shortName: 'Forum Topics',
    key: 'topics',
    icon: Icon.IconBrandHipchat,
    permissions: [],
  },
  {
    name: 'Review Forum Topics',
    shortName: 'Forum Topics',
    key: 'review-topics',
    icon: Icon.IconEyeCheck,
    permissions: [],
  },

  {
    name: 'HouseRules',
    shortName: 'HouseRules',
    key: 'house-rules',
    icon: Icon.IconGavel,
    permissions: [],
  },
  {
    name: 'Categories',
    shortName: 'Categories',
    key: 'category/list',
    icon: Icon.IconLayoutGrid,
    permissions: [],
  },
  {
    name: 'Users',
    shortName: 'Users',
    key: 'users',
    icon: Icon.IconUserMinus,
    permissions: [],
    subMenus: [
      {
        name: 'Reported Users',
        shortName: 'Reported Users',
        key: 'reported-users',
        icon: Icon.IconUserMinus,
        permissions: [],
      },
      {
        name: 'Blocked Users',
        shortName: 'Blocked Users',
        key: 'blocked-users',
        icon: Icon.IconUserOff,
        permissions: [],
      },
    ],
  },
  {
    name: 'Archives',
    shortName: 'Archives',
    key: 'archives',
    icon: Icon.IconArchive,
    permissions: [],
    subMenus: [
      {
        name: 'Forum Topics',
        shortName: 'Forum Topics',
        key: 'topics',
        icon: Icon.IconBrandHipchat,
        permissions: [],
      },
      {
        name: 'House Rules',
        shortName: 'House Rules',
        key: 'house-rules',
        icon: Icon.IconGavel,
        permissions: [],
      },
    ],
  },
];

export default menus;
