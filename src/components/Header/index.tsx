import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SideBarDrawerContext'
import Logo from './Logo'
import NotificationNav from './NotificationsNav'
import Profile from './Profile'
import SearchInput from './SearchInput'

export function Header() {
    const { onOpen } = useSidebarDrawer()
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    return (
        <Flex
            as='header'
            w='100%'
            maxWidth={1480}
            h={20}
            mx='auto'
            mt={4}
            px={6}
            align='center'
        >
            {!isWideVersion && (
                <IconButton aria-label='Open Menu' icon={<Icon as={RiMenuLine}></Icon>} fontSize={24} variant="unstyled" onClick={onOpen} mr={2} />
            )}
            <Logo />
            <SearchInput />
            <Flex
                align='center'
                ml='auto'
                px={4}>
                <NotificationNav />
                <Profile />
            </Flex>
        </Flex>
    )
}