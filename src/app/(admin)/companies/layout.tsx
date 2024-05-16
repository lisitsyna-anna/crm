import React from 'react';

export interface CompaniesLayoutProps {
  children: React.ReactNode;
  header: React.ReactNode;
  toolbar: React.ReactNode;
  modal: React.ReactNode;
}

const CompaniesLayout: React.FC<CompaniesLayoutProps> = ({
  children,
  header,
  toolbar,
  modal,
}) => (
  <>
    {modal}
    {header}
    <main>
      {toolbar}
      {children}
    </main>
  </>
);

export default CompaniesLayout;
