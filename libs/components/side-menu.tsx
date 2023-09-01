
"use client"
import { Navbar, Group, Code, ScrollArea, createStyles, rem } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import { UserButton } from '../../component/user-button';
import { LinksGroup } from '../../component/link-group';
import Header from './header';
// import { Logo } from './Logo';
import { Text } from '@mantine/core';

const mockdata = [
  { label: 'Dashboard', link:'/dashboard', icon: IconGauge },
  {
    label: 'Manage properties',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Show registered properties', link: '/show-property' },
      { label: 'owened properties by internal employee', link: '/' },
      { label: 'property given to external organization', link: '/' },
      { label: 'Free properties', link: '/' },
      { label: 'Repairable Properties', link: '/' },
      { label: 'Removable properties', link: '/' },
      { label: 'Registerd new', link: '/' },
    ],
  },
  {
    label: 'Managr employee',
    icon: IconCalendarStats,
    initiallyOpened: false,    
    links: [
      { label: 'employees', link: '/manage-employee/employees' },
      { label: 'Register New employees', link: '/' },
      { label: 'Employee with property', link: '/' },
      { label: 'Prepare clearance to employee', link: '/' },
      
    ],
  
  },
  { label: 'Reports', icon: IconPresentationAnalytics },
  { label: 'software guide', icon: IconFileAnalytics },
  { label: 'Contact developer', icon: IconAdjustments },
 
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 13,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
   
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    
  
  },


  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export default function NavbarNested() {
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    
    <>

   
      <Navbar.Section className={classes.header}>
       <Group position="center"><Text fw={900} c="blue">ARADA</Text></Group>
      
          
        
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
{/* 
      <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com" />
      </Navbar.Section> */}
      
   </>
  );
}



// import * as Icon from '@tabler/icons';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import { Menu } from '../models/menu';
// import PopMenu from './pop-menu';

// interface Props {
//   menus: Menu[];
//   setMenu: any;
// }

// const SideMenu = (props: Props) => {
//   const router = useRouter();
//   const menus: Menu[] = props.menus;

//   const [navToggle, setNavToggler] = useState<boolean>(true);
//   const [currentMenu, setCurrentMenu] = useState<Menu>();
//   const [currentSubMenu, setCurrentSubMenu] = useState<Menu>();
//   const [baseUrl, setBaseUrl] = useState<string>();

//   useEffect(() => {
//     setBaseUrl(window.location.origin.toString());
//   }, []);

//   useEffect(() => {
//     menus.forEach((menu) => {
//       const regex = new RegExp('^\\/' + menu?.key + '*');
//       if (regex.test(router.pathname) && currentMenu !== menu) {
//         setCurrentMenu(menu);
//         if (!menu.subMenus?.length) {
//           setCurrentSubMenu(undefined);
//         }
//         props.setMenu(menu);
//       }
//     });
//   }, [router]);

//   function iconTag(ICustom: Icon.TablerIcon, color: string) {
//     return <ICustom size={24} strokeWidth={1.25} color={color} />;
//   }

//   function menuTab(menu: Menu) {
//     return (
//       <div
//         key={menu.key}
//         className={
//           currentMenu === menu
//             ? navToggle === true
//               ? 'bg-primary-50'
//               : 'nav-item relative'
//             : 'nav-item relative'
//         }
//       >
//         <Link
//           href={`${
//             menu.isApp ? `${baseUrl}/${menu.key}` : `/${menu.key}`
//           }${
//             menu.subMenus?.length && menu.subMenus !== undefined
//               ? `/${menu.subMenus![0].key}`
//               : ''
//           }`}
//           passHref
//         >
//           <a
//             id={menu.key}
//             onClick={() => handleClick(menu)}
//             className={`flex items-center py-2 px-4 ${
//               currentMenu?.key === menu?.key
//                 ? 'border-r-2 border-primary bg-primary text-white'
//                 : 'hover:border-r-2 hover:border-primary hover:bg-primary-50'
//             }`}
//           >
//             <div>
//               {iconTag(
//                 menu.icon,
//                 currentMenu?.key === menu?.key ? 'white' : 'black'
//               )}
//             </div>
//             {navToggle && <div className="pl-2">{menu.name}</div>}
//           </a>
//         </Link>
//         {menu.subMenus?.length !== undefined && menu.subMenus !== undefined && (
//           <PopMenu
//             onSelect={(subMenu: Menu) => {
//               setCurrentMenu(menu);
//               setCurrentSubMenu(subMenu);
//             }}
//             menu={menu}
//             currentMenu={currentMenu}
//             currentSubMenu={currentSubMenu}
//             navToggle={navToggle}
//           />
//         )}
//       </div>
//     );
//   }

//   function handleClick(menu: Menu) {
//     setCurrentMenu(menu);
//     props.setMenu(menu);
//   }

//   function handleToggle() {
//     setNavToggler((prev) => !prev);
//   }

//   return (
//     <nav
//       className="border-r bg-white"
//       style={{ width: navToggle ? '220px' : '62px' }}
//     >
//       <div
//         className="flex items-center bg-primary px-2 text-white"
//         style={{
//           marginRight: '-1px',
//           padding: '14px',
//         }}
//       >
//         {typeof window !== 'undefined' && (
//           <a className="flex" href={`${window.location.origin}/desktop/`}>
//             <div>
//               <Icon.IconLayoutGrid
//                 onClick={handleToggle}
//                 size={32}
//                 strokeWidth={1.5}
//                 color={'white'}
//               />
//             </div>
//             {navToggle && (
//               <div className="hidden items-center pl-2 text-xl font-semibold md:inline">
//                 eServices
//               </div>
//             )}
//           </a>
//         )}
//       </div>

//       <aside className="mt-4">{menus.map((menu) => menuTab(menu))}</aside>
//       <div
//         className="fixed bottom-0 flex items-center border-r border-t bg-white py-2 px-2 hover:bg-gray-100"
//         style={{ width: navToggle ? '220px' : '62px' }}
//         onClick={handleToggle}
//       >
//         <div className="flex flex-grow px-1 hover:cursor-pointer">
//           {navToggle && <div className="pl-2">Collapse</div>}
//         </div>
//         {navToggle ? (
//           <Icon.IconChevronsRight
//             size={24}
//             className="hover:cursor-pointer"
//             strokeWidth={1.5}
//             color={'black'}
//           />
//         ) : (
//           <Icon.IconChevronsLeft
//             size={24}
//             className="hover:cursor-pointer"
//             strokeWidth={1.5}
//             color={'black'}
//           />
//         )}
//       </div>
//     </nav>
//   );
// };

// export default SideMenu;



