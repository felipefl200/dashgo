import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export default function Profile() {
    return (
        <Flex align='center'>
            <Box>
                <Text>Felipe França</Text>
                <Text color='gray.300' fontSize='small'>felipefl200@gmail.com</Text>
            </Box>
            <Avatar size='md' name='Felipe França' src='https://github.com/felipefl200.png' />
        </Flex>
    )
}