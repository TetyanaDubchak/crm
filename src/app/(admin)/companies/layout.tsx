import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
  search: React.ReactNode;
  table: React.ReactNode;
}

export default function Layout({ children, header }: LayoutProps) {
  return (
    <div>
      {header}
      <main>
        {/* {search}
        {table} */}
        {children}
      </main>
    </div>
  );
}
