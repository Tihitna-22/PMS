
"use client"
import { Navbar, Group, Code, ScrollArea, createStyles, rem, Avatar } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import { UserButton } from './user-button';
import { LinksGroup } from './link-group';
import { useState } from 'react';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'manage properties',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'show registerd properties', link: '/' },
      { label: 'owned properties', link: '/' },
      { label: 'property give to another organization', link: '/' },
      { label: 'free property', link: '/' },
    ],
  },
  {
    label: 'manage employee',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'report', icon: IconPresentationAnalytics },
  { label: 'support', icon: IconFileAnalytics },
  { label: 'profile', icon: IconAdjustments },
  {
    label: 'contact Developer',
    icon: IconLock,
   
  },
];


const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
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
  const [open, setOpen] = useState(true);
  return (
    <Navbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          {/* <Logo width={rem(120)} /> */}
          {/* <Code sx={{ fontWeight: 700 }}>v3.1.2</Code> */}
          <Avatar src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAACICAMAAACWaVroAAAA7VBMVEX////6syr1MGIzgvUrbr/+6Oz1Kl/+79w4f+IpbLr2T3b6qAD6qwD0AEf+8fQbU5b++fomffX6rxEAc/T1H1n0AE4AX7n6sR793eP+69H94bicvPn1Nmb809v7tsP7uknd5/0Aa/TP3vwUZbz3+f77v1qSpsn5mq37wcz/+vP4iJ/4fJb8y4C1zfvn7v1lmvZ6p/j7x3JQkPb6q7uPsvGPq9WyxebV3+8meOBljst8ntGkud7C0elEivalwvk+d8IAR7KJsPj3Z4b80pEhX6xOgcUMZ88YTYgAUZ8AMIYAKYRje6782KKrudI4Y6Fc+SGaAAADwElEQVR4nO2ba1PaQBRAs0kAxYghJAR5y0PkKeCzWrSi1lof///ndBMTAskuaO3MXeo9XzAMH87sHO4NMEoSgiAIgiD/F6lON+c87vby7nW/MAD1eRepommaJUnKbxnaSJIah5nMXhVaaiVlU5bNliRVbEK22lI1oyjpIbTUStbTOpW0LDkXFDLOpPdq0FKr0Y9aKefRezcOCsM1kEYQBEEQBEEQRFCq/cLxyekZtMaHGAwnmfR5Pat+Wx/vwXE6rSjKxqaqqtmLNfhOxaE/pp/ufWu1fn0JLfQOqmP3oGfWjvd3aKkVDIZv5zxvTTMRO+/CJK0wrNW6egKtxqPRV4KDXrSm3vXTBrQgi+phWlG41tRbwExo0CHpsLXjLdgUvJqEnRnWTt4CZVIbR51Z1iJNwWo0Dq41nYL3QuR9ozCdedY0kwvwTPppjjPXmnpngZd8Y4/nvMRaVX8Anza3j2VnDb8pa4eZD1oL8X5s8NJmW9dVQVZ744bpzZzXAuyZnP9HdczIhGE9F0e+DeOsT7eLB7p3UYuu9Oh9SLAY80QjCRDrWDIeN7v+eQ8K4Q0ZvufLXvo3T4mRYRM4a1k2rbffKB3vw8UpuHh/HWzE9q1GnUGtZdlKHvjP9BfynrfO3gdxVAxCwK3luDn1M2lczU2TjeCggw8yiaZhExGsqbfVinlPDvwpeH73sLPpOZ/MgvbiEMKa5l0s+0/X3EzqOw53oWlHDEIEsqZ5F0v+FOxPfj7sePy6PvVfv0unHRHMmubdnWWy/+g5/97342j3bJuIZ00zMY/8KXj25Fo/+XG0n8POwlgvTMGX18fXF/8iX9HCzgJZy/H41M+kMZt27Wb0oIWydjKZTUHPeX7aiWpNvYNMpLlVKLg1XTpJf1kmCCNoMa3pccdb7ktumUGLai3L2+5LtvjOaI3WaI3WaI3WX81aR+t/SGr6KesKjLXUNT9hbTeBvlQ9+oy1cQsjLekmP5HV1kCB0MO2/tpagzpqSofbyAprYwQnLemdbU4kb9acD422NgJ6K3qUphbTe5m1UcmDOkvOPzQVWZnwrQ37Gfag39A78ag3z9q2geMIKHUjmWy731NGrLXRLrRsgH5QDM1uprVBoH5l5NFazJthbZMetGSUWHd+Ckasba0Jtg2XkpsGmYStjaZAQYcoJy2mtSDTjofekc2ItW33RHZ2iHXdTOastZGYQS9ScqbgzJpOO2ihd3KUtEx3N1Y0AnhH+lFi5ZL7mMivQxwIgiAIgiAIgiAIgiAIgiAI8pX5A3GMY7+Y0W4BAAAAAElFTkSuQmCC' />
            {/* <img src={Logo}/> */}
        </Group>
       
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
        />
      </Navbar.Section>
    </Navbar>
  );
}