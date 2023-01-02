import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface NavItemProps {
    href: string;
    children: React.ReactNode;
}

export default function NavItem({ href, children }: NavItemProps) {
    return (
        <Link href={href}>
            <Text fontWeight={'semibold'}>{children}</Text>
        </Link>
    );
}
