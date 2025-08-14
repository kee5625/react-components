import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

type PageProps = {
    title: string;
    children: ReactNode;
};

declare const Page: ({ title, children }: PageProps) => react_jsx_runtime.JSX.Element;

export { Page };
