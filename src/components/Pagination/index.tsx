import { Box, Button, Stack } from "@chakra-ui/react"
import PaginationItem from "./PaginationItem"

interface PaginationProps{
    totalCountOfRegisters: number
    registersPerPage?: number
    currentPage?: number
    onPageChange: (page: number) => void
}

export default function Pagination({ totalCountOfRegisters, currentPage = 1, onPageChange, registersPerPage = 10 }: PaginationProps) {

    return (
        <Stack
            direction={["column","row"]}
            mt="8"
            justify="space-between"
            align="center"
            spacing="6"
        >
            <Box >
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
                <PaginationItem number={currentPage} isCurrent/>

            </Stack>
        </Stack>
    )
}