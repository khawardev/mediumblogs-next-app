// components/PathnameProvider.js
'use client';

import { usePathname } from 'next/navigation';

const PathnameProvider = ({ url }: { url :any}) => {
    const pathname = usePathname();
    console.log(pathname);
    
    return !url.includes(pathname);
};

export default PathnameProvider;
