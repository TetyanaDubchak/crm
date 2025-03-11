import CompanyTable from '@/components/CompanyTable';

export interface PageProps {
  search: React.ReactNode;
}

export default function Page({ search }: PageProps) {
  return (
    <>
      {search}
      <CompanyTable />
    </>
  );
}
