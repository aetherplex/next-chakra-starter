import { Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import NavItem from './NavItem';

export default function Header() {
    return (
        <Flex w={'100%'} justify={'space-between'} py={6} align={'center'}>
            <Link href={'/'}>
                <Heading size={'lg'}>Site name</Heading>
            </Link>
            <Flex gap={3} align={'center'}>
                <NavItem href={'/'}>Item one</NavItem>
                <NavItem href={'/'}>Item two</NavItem>
            </Flex>
        </Flex>
    );
}
