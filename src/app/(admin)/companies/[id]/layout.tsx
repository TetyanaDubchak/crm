import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  search: React.ReactNode;
  promo: React.ReactNode;
}

export default function Layout({ children, search, promo }: LayoutProps) {
  return (
    <div>
      {children}
      <main>
        {search}
        {promo}
      </main>
    </div>
  );
}
