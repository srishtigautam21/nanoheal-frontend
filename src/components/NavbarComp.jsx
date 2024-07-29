import React, { useState } from "react";
import { IconClose, IconGripLines } from "../images/images";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import books from "../images/books.png";

const NavbarComp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Books", "Author"];

  return (
    <Navbar position='static' onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <Link href='/' className='flex items-center justify-center'>
          <img src={books} alt='book-logo' className=' w-14' />
          <p className='font-bold text-[20px] ml-2'>BookGram</p>
        </Link>
      </NavbarBrand>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "open menu"}
          className='sm:hidden'
        />
      </NavbarContent>
      <NavbarContent
        className='hidden sm:flex sm:justify-between gap-4 sm:gap-7'
        // justify='end'
      >
        <NavbarItem>
          <Link
            color='foreground'
            href='/'
            className='font-semibold text-[20px]'
          >
            Books
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href='/author'
            aria-current='page'
            className='font-semibold text-[20px]'
          >
            Authors
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color='foreground' href='#'>
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color='primary'
              // color={
              //   index === 2
              //     ? "primary"
              //     : index === menuItems.length - 1
              //     ? "danger"
              //     : "foreground"
              // }
              className='w-full'
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      {/* </div> */}
      {/* <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
};

export default NavbarComp;
