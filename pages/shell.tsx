import { css, Global } from '@emotion/react';
// import { useSession } from '@jiret/auth';
import { useRouter } from 'next/router';
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, useEffect, useState } from 'react';


import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
  Avatar,
  rem,
  Menu,
  Tabs,
  UnstyledButton,
  createStyles,
  ActionIcon,
  useMantineColorScheme
} from '@mantine/core';

import { NavigationProgress, nprogress } from '@mantine/nprogress';
import { useDisclosure } from '@mantine/hooks';

import SideMenu from '../libs/components/side-menu';

import { IconChevronDown, IconHeart, IconLogout, IconMessage, IconMoonStars, IconPlayerPause, IconSettings, IconStar, IconSun, IconSwitchHorizontal, IconTrash } from '@tabler/icons-react';

// import PermissionChecker from './utils/permission-checker';

/* Component props */
interface IProps {
  menus: any;
  children: any;
}


const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
    }`,
    marginBottom: rem(120),
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontWeight: 500,
    height: rem(38),
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },

    '&[data-active]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
    },
  },
}));

// Component definition
export const Shell = ({ menus, children }: IProps) => {
  /* Component states */
  const [currentMenu, setCurrentMenu] = useState<any>();
  const [currentApplication, setCurrentApplication] = useState('Desktop');
  // const session = useSession();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';


  /* Variables */
  const currentDate: Date = new Date();
  const formattedDate = `${currentDate.toLocaleString('en-us', {
    month: 'short',
  })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  /* Hooks */
  const router = useRouter();

  /* useEffect hooks */
  // useEffect(() => {
  //   if (router.basePath === '/registration') {
  //     setCurrentApplication('Registration');
  //   } else if (router.basePath === '/service-store') {
  //     setCurrentApplication('Service store');
  //   } else if (router.basePath === '/subscription') {
  //     setCurrentApplication('Subscription');
  //   } else if (router.basePath === '/bpm') {
  //     setCurrentApplication('Business Process');
  //   }
  // }, [router.basePath]);
  /* Event handlers */
  function handleClick(menu: any) {
    setCurrentMenu(menu);

  }
  // const theme = useMantineTheme();
  // const [opened, setOpened] = useState(false);

  const { classes, theme, cx } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const tabs = [{
    tab:''
  }]

  

  const items = tabs.map((tab: any) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

    
  const user ={ name: 'tt', image: '' };
    return (
      <AppShell
      layout="alt"
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
            <SideMenu />
          </Navbar>
        }
        // aside={
        //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        //       <Text>Application sidebar</Text>
        //     </Aside>
        //   </MediaQuery>
        // }
        // footer={
        //   <Footer height={60} p="md">
        //     Application footer
        //   </Footer>
        // }
        header={
          <Header height={{ base: 50, md: 70 }} p="md">
        <Group position='right' > 
        
        <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
    </ActionIcon>
        
         <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >

            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
              >
                <Group spacing={7}>
                  <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                  <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                    {user.name}
                  </Text>
                  <IconChevronDown size={rem(12)} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
               <Menu.Label>Settings</Menu.Label>
              <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>
                Account settings
              </Menu.Item>
              <Menu.Item icon={<IconSwitchHorizontal size="0.9rem" stroke={1.5} />}>
                Change account
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />}>Logout</Menu.Item>

              

              
            
            </Menu.Dropdown>
          </Menu></Group>
             
      
  
          </Header>
        }
      >
        {children}
      </AppShell>
    );
 
 
};
export default Shell;


