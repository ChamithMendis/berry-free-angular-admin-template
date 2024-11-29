import { Injectable } from '@angular/core';
import { authenticationEnum } from 'src/app/guards/auth.enum';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
  auth?: number;
  isVisible: boolean;
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  {
    id: 'home',
    title: 'Home',
    type: 'group',
    icon: 'icon-navigation',
    auth: authenticationEnum.Home,
    isVisible: false,
    children: [
      {
        id: 'default',
        title: 'Dashboard',
        type: 'item',
        classes: 'nav-item',
        url: '/default',
        icon: 'ti ti-dashboard',
        breadcrumbs: false,
        auth: authenticationEnum.Home_Dashboard,
        isVisible: true
      }
    ]
  },
  {
    id: 'page',
    title: 'Pages',
    type: 'group',
    icon: 'icon-navigation',
    isVisible: false,
    children: [
      {
        id: 'Authentication',
        title: 'Authentication',
        type: 'collapse',
        icon: 'ti ti-key',
        auth: authenticationEnum.Auth,
        isVisible: false,
        children: [
          {
            id: 'login',
            title: 'Login',
            type: 'item',
            url: '/guest/login',
            target: true,
            breadcrumbs: false,
            auth: authenticationEnum.Auth_Login,
            isVisible: false
          },
          {
            id: 'register',
            title: 'Register',
            type: 'item',
            url: '/guest/register',
            target: true,
            breadcrumbs: false,
            auth: authenticationEnum.Auth_Register,
            isVisible: false
          }
        ]
      }
    ]
  },
  {
    id: 'privileges',
    title: 'Privileges Section',
    type: 'group',
    icon: 'icon-navigation',
    isVisible: false,
    auth: authenticationEnum.Privileges,
    children: [
      {
        id: 'privilegeDetails',
        title: 'Privileges',
        type: 'collapse',
        icon: 'ti ti-key',
        auth: authenticationEnum.Privileges,
        isVisible: false,
        children: [
          {
            id: 'systemPrivileges',
            title: 'Privileges',
            type: 'item',
            url: '/privileges/system-privileges',
            icon: 'ti ti-dashboard',
            breadcrumbs: false,
            auth: authenticationEnum.System_Privileges,
            isVisible: false
          },
          {
            id: 'privilegeGroups',
            title: 'Privilege Grops',
            type: 'item',
            url: '/privileges/privilege-groups',
            icon: 'ti ti-dashboard',
            breadcrumbs: false,
            auth: authenticationEnum.Privilege_Groups,
            isVisible: false
          }
        ]
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
