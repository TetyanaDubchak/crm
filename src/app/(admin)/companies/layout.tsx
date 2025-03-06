import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  search: React.ReactNode;
  companiesList: React.ReactNode;
}

export default function Layout({
  children,
  search,
  companiesList,
}: LayoutProps) {
  return (
    <div>
      {children}
      <main>
        <div>{search}</div>
        <div>{companiesList}</div>
      </main>
    </div>
  );
}
