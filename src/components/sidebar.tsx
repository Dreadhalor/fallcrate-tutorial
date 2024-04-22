import React from 'react';
import Logo from '@/assets/logo.svg';
import { SidebarFileBrowser } from './sidebar-file-browser/sidebar-file-browser';
import Link from 'next/link';

export const Sidebar = () => {
  return (
    <div className='flex w-[240px] flex-col border-r bg-[#121211]'>
      <div className='flex w-full items-start px-[20px] py-[24px]'>
        <Link href='/home'>
          <Logo className='aspect-square w-[32px]' />
        </Link>
      </div>
      <SidebarFileBrowser />
    </div>
  );
};
