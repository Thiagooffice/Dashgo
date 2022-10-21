import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean
}

export default function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Thiago Leal</Text>
                    <Text color="gray.300" fontSize="small">thiagooffice2@gmail.com</Text>
                </Box>
            )}

            <Avatar size="md" name="Thiago Leal" src="https://github.com/Thiagooffice.png" />
        </Flex>
    )
}