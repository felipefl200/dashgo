import { Box, Stack } from '@chakra-ui/react'
import PaginationItem from './PaginationItem'

export default function Pagination() {
    return (
        <Stack spacing={6} direction={['column', 'row']} mt={8} alignItems='center' justifyContent='space-between'>
            <Box><strong>0</strong> - <strong>4</strong> de <strong>100</strong></Box>
            <Stack direction='row'>
                <PaginationItem number={1} isCurrent />
                <PaginationItem number={2} />
                <PaginationItem number={3} />
                <PaginationItem number={4} />
            </Stack>
        </Stack>
    )
}