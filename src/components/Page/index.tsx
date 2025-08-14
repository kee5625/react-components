import type { PageProps } from './types';

const Page = ({ title, children }: PageProps) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};

export default Page;
