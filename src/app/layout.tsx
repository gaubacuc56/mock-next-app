import { ReactNode } from 'react';
import '../styles/global.css'
type Props = {
    children: ReactNode;
};

export default function RootLayout({ children }: Props) {
    return children;
}