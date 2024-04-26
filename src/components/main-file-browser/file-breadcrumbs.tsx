'use client';

import { useFilesystem } from '@/providers/filesystem-provider';
import { SlashIcon } from '@radix-ui/react-icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@ui/breadcrumb';
import Link from 'next/link';
import { Fragment } from 'react';

export function FileBreadcrumbs() {
  const { currentPath, getFullPathname } = useFilesystem();
  const breadcrumbsToShow = currentPath.slice(0, currentPath.length - 1);

  return (
    <Breadcrumb className='px-8'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={`/home`}>All Files</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        {breadcrumbsToShow.map(({ name, id }) => {
          return (
            <Fragment key={id}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={`/home/${getFullPathname(id)}`}>{name}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
