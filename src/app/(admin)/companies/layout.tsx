import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  search: React.ReactNode;
  companiesList: React.ReactNode;
  modal: React.ReactNode;
}

export default function Layout({
  children,
  search,
  companiesList,
  modal,
}: LayoutProps) {
  return (
    <div>
      {children}
      <main>
        <div>{search}</div>
        <div>{companiesList}</div>
        {modal}
      </main>
    </div>
  );
}
