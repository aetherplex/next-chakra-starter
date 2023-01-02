import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
    return (
        <Flex py={6} w={'100%'} align={'center'} justify={'center'}>
            <Text fontSize={'sm'}>&copy; 2023</Text>
        </Flex>
    );
}
