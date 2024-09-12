"use client"
import { useEffect, useState } from 'react';
import NextImage from 'next/image';
import { AppShell, Text, Button, NavLink, Box, Image } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Logo from '../images/logo-white.png';
import LogoSmall from '../images/Logo-Small.png';
import ProfilePic from '../images/profile-pic.png';
import styles from '../styles/Layout.module.css';
import { useRouter, usePathname, } from 'next/navigation';
import { UserSearchIcon, ListIcon, DealIcon, IDManagementIcon, NotificationIcon } from './Icons';

const navData = [
    {
      label: 'Clients',
      icon: UserSearchIcon,
      link: '/clients',
      subLinks: [
        { label: 'Companies', link: '/clients/companies' },
        { label: 'Contacts', link: '/clients/contacts' },
        { label: 'Sales Orders', link: '/clients/sales-orders' },
        { label: 'Return Orders', link: '/clients/return-orders' },
        { label: 'Subscription', link: '/clients/subscription' },
        { label: 'Products', link: '/clients/products' },
      ],
    },
    {
      label: 'Inventory',
      icon: ListIcon,
      link: '/inventory',
      subLinks: [
        { label: 'Internal Orders', link: '/inventory/internal-orders' },
        { label: 'Models', link: '/inventory/models' },
        { label: 'Equipment', link: '/inventory/equipment' },
        { label: 'Spares', link: '/inventory/spares' },
        { label: 'Warehouses', link: '/inventory/warehouses' },
        { label: 'Stores', link: '/inventory/stores' },
      ],
    },
    {
      label: 'Sales',
      icon: DealIcon,
      link: '/sales',
      subLinks: [
        { label: 'Orders', link: '/sales/orders' },
        { label: 'Invoices', link: '/sales/invoices' },
      ],
    },
    {
      label: 'Staff',
      icon: IDManagementIcon,
      link: '/staff',
      subLinks: [
        { label: 'Ops', link: '/staff/ops' },
        { label: 'Sales', link: '/staff/sales' },
        { label: 'Engineers', link: '/staff/engineers' },
      ],
    },
    {
      label: 'Notifications',
      icon: NotificationIcon,
      link: '/notifications',
      notifications: 13,
    },
  ];

const Layout = ({ children }) => {

const [isOpen, setIsOpen] = useState(true);

const toggleSidebar = () => {
  setIsOpen(!isOpen);
};  

const NavLinkItem = ({ label, icon: Icon, link, subLinks, notifications }) => {

    const router = useRouter();
    const pathname = usePathname();
    // const [isActive, setIsActive] = useState(false);  

    // useEffect(() => {
    //   setIsActive(pathname.includes(link));
    // }, [pathname, link]);
    const isActive = pathname.includes(link);
    const navLinkClassName = `${styles.navLink} ${isActive ? styles.activeNavLink : ''}`;
    const iconColor = isActive ? "#14B8FF" : "white";

    return (
    <NavLink
        label={label}
        leftSection={<Icon color={iconColor}/>}
        component="a"
        href={link}
        rightSection={notifications && isOpen ? <Text className={styles.notification}>{notifications}</Text> : " "}
        classNames={{
          root: navLinkClassName,
          label: `${styles.navLinkLabel} ${!isOpen && styles.hidden} ${isActive ? styles.activeNavLinkLabel : ''}`
        }}
    >        
        {subLinks && subLinks.map((subLink, key) => (
        <Box key={key} className={`${!isOpen && styles.hidden}`}>
        <NavLink
            key={subLink.link}
            label={subLink.label}
            component="a"
            href={subLink.link}
            className={`${styles.navDropDownList} ${pathname === subLink.link ? styles.activeNavLinkLabel : ''}`}
            classNames={{
              label: `${styles.navDropDownListLabel} ${pathname === subLink.link ? styles.activenavDropDownListLabel : ''}`
            }}
        />
        </Box>
        ))}        
    </NavLink>
    );
};    
  return (
    <AppShell
      navbar={{
        width: isOpen ? 280 : 80,        
      }}      
      bg="#0C1F36"
    >

      <AppShell.Navbar className={`${styles.navbar}`}>
      <AppShell.Section>
        {
          isOpen ? (
            <Image component={NextImage} src={Logo} className={styles.logo} alt="My image" />
          ) : (
            <Image component={NextImage} src={LogoSmall} className={styles.logoSmall} alt="My image" />
          )
        }
        {
          isOpen ? (
            <IconChevronLeft onClick={toggleSidebar} className={styles.chevron} />
          ) : (
            <IconChevronRight onClick={toggleSidebar} className={styles.chevron} />
          )
        }
        </AppShell.Section>
        <AppShell.Section className={styles.navlist}>
          <Box>
          {navData.map((item) => (
              <NavLinkItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              link={item.link}
              subLinks={item.subLinks}
              notifications={item.notifications}
              />
          ))}
          </Box>
        </AppShell.Section>
        <AppShell.Section className={`${styles.profileCon} ${!isOpen && styles.profileConClose}`}>
        <Box className={`${styles.profile} ${!isOpen && styles.profileClose}`}>  
        <Image component={NextImage} src={ProfilePic} className={`${styles.profilePhoto} ${!isOpen && styles.profileClose}`} alt="My image" />
          <Box className={`${styles.profileTextCon} ${!isOpen && styles.hidden}`}>
            <Text className={styles.profileText}>Ibrahim Musa</Text>
            <Text className={styles.logout}> Log out </Text>
          </Box>
        </Box>    
        </AppShell.Section>        
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}

export default Layout