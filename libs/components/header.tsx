// import { useSession } from '@jiret/auth';
// import { languages, loadLanguages } from '@jiret/translations';
import { Avatar, Menu, Tooltip } from '@mantine/core';
import * as Icon from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';

/* Component definitions */
const Header = () => {
  /* hooks */
  const router = useRouter();
  function logOut(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  // const { t, i18n } = useTranslation();
  // const { session, logOut, setCurrentOrganizationUnit } = useSession();

  /* useEffect hooks */
  // useEffect(() => {
  //   /* console.log(session); */
  // }, [session]);

  /* Event handlers */
  // const changeLanguage = (language: string) => {
  //   // loadLanguages(i18n, language).then(() => i18n.changeLanguage(language));
  // };

  return (
    <div
      className="flex justify-between border-b bg-primary px-4"
      style={{
        padding: '10px',
      }}
    >
      <div className="flex">
        {/* Logo */}
        <Avatar color="green" radius="xl">
          {/* {session?.selectedOrganization
            ? session?.selectedOrganization?.shortName?.[i18n.language]
            : '?'} */}
            TT
        </Avatar>
        <div className="px-2 text-white">
          <Menu>
            <Menu.Target>
              <Tooltip label="Currrent organization" position="right" withArrow>
                <span className="text-md font-semibold hover:cursor-pointer">
                  {/* {session?.selectedOrganization
                    ? session?.selectedOrganization?.name?.[i18n.language]
                    : 'Select organization'} */}
                </span>
              </Tooltip>
            </Menu.Target>
            <Menu.Dropdown
              styles={{
                itemHovered: { backgroundColor: 'rgb(229 231 235) !important' },
              }}
            >
              <Menu.Label>Select organization</Menu.Label>
              {/* {session?.organizations?.map((item: any) => (
                <Menu.Item
                  key={item.id}
                  className={
                    session?.selectedOrganization?.id === item?.id
                      ? 'bg-gray-200'
                      : ''
                  }
                  onClick={() => {
                    setCurrentOrganizationUnit(item, null);
                  }}
                  icon={<Icon.IconBuildingBank size={14} />}
                >
                  {item.name?.[i18n.language]}
                </Menu.Item>
              ))} */}
            </Menu.Dropdown>
          </Menu>

          <div>
            <Menu width={400}>
              <Menu.Target>
                <Tooltip label="Currrent unit" position="right" withArrow>
                  <span className="text-sm font-semibold hover:cursor-pointer">
                    {/* {session?.selectedOrganization != null &&
                    session?.selectedUnit != null
                      ? session?.selectedUnit?.name?.[i18n.language]
                      : 'Select unit'} */}
                  </span>
                </Tooltip>
              </Menu.Target>
              <Menu.Dropdown
                styles={{
                  itemHovered: {
                    backgroundColor: 'rgb(229 231 235) !important',
                  },
                }}
              >
                <Menu.Label>Select unit</Menu.Label>
                {/* {session?.selectedOrganization != null &&
                  session?.selectedOrganization?.units.map((item: any) => (
                    <Menu.Item
                      key={item.id}
                      className={
                        session?.selectedUnit?.id === item?.id
                          ? 'bg-gray-200'
                          : ''
                      }
                      onClick={() => {
                        setCurrentOrganizationUnit(
                          session?.selectedOrganization,
                          item
                        );
                      }}
                      icon={<Icon.IconBuildingBank size={14} />}
                    >
                      {`${item.branchName?.[i18n.language]} / ${
                        item.name?.[i18n.language]
                      }`}
                    </Menu.Item>
                  ))} */}
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </div>
      {/* Right side menu */}
      <div className="flex items-center justify-end text-white">
        {/* Language */}
        <Menu position="bottom" radius="xs">
          <Menu.Target>
            <div className="flex items-center px-1">
              {/* {languages[i18n.language]} */}
              <span className="inline-block">
                <Icon.IconChevronDown />
              </span>
            </div>
          </Menu.Target>
          <Menu.Dropdown
            styles={{
              itemHovered: { backgroundColor: 'rgb(229 231 235) !important' },
            }}
            classNames={{
              body: 'w-20',
            }}
          >
            {/* {Object.keys(languages)
              .filter((key) => key !== i18n.language)
              .map((key) => {
                return (
                  <Menu.Item onClick={() => changeLanguage(key)} key={key}>
                    {languages[key]}
                  </Menu.Item>
                );
              })} */}
          </Menu.Dropdown>
        </Menu>

        {/* help */}
        <div className="items-center px-1">
          <Icon.IconHelp   />
        </div>
        {/* notification */}
        <div className="px-1">
          <Icon.IconBell  />
        </div>
        {/* User */}
        <Menu trigger="hover">
          <Menu.Target>
            <div className="px-1">
              <div className="flex flex-grow px-1">
                <Avatar color="blue" radius="xl">
                 
                </Avatar>
                <div className="flex flex-col">
                  <div className="pl-2">
                  
                  <div className="pl-2">{'HACKER'}</div>
                </div>
              </div>
            </div>
            </div>
          </Menu.Target>
          <Menu.Dropdown
            styles={{
              itemHovered: { backgroundColor: 'rgb(229 231 235) !important' },
            }}
          >
            <Menu.Item
              onClick={() => console.log('Profile')}
              icon={<Icon.IconUserCircle  />}
            >
              Profile
            </Menu.Item>

            <Menu.Item
              onClick={() => logOut('/login')}
              icon={<Icon.IconLogout  />}
            >
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
};
export default Header;
