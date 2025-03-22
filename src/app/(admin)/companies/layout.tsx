import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
}

export default function Layout({ children, header }: LayoutProps) {
  return (
    <div>
      {header}
      <main>{children}</main>
    </div>
  );
}
