import { Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <Flex flexDir={'column'} w={'100%'} minH={'100vh'} flexGrow={1}>
            <Flex
                flexDir={'column'}
                w={'95%'}
                mx={'auto'}
                maxW={'900px'}
                flexGrow={1}
            >
                <Flex flexDir={'column'} w={'100%'} flexGrow={1}>
                    <Header />
                    {children}
                </Flex>
                <Footer />
            </Flex>
        </Flex>
    );
}
