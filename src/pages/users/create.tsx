import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/From/Input";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useMutation } from "react-query";
import { api } from "../../services/api";

export default function CreateUser() {

    const createUser = useMutation(async (user: any) => {
        const response = await api.post("users", {
            user: {
                ...user,
                created_at: new Date(),
            }
        })

        return response.data.user;
    })

    return (
        <Box>
            <Header />

            <Flex
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6">
                <Sidebar />

                <Box
                  flex='1'
                  borderRadius={8}
                  bg="gray.800"
                  p={["6","8"]}>
                    <Heading size="lg" fontWeight="normal">Criar um usuário</Heading>
                    <Divider my="6" borderColor="gray.700"/>

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="name" label="Nome completo"/>
                            <Input name="email" type="email" label="E-mail"/>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="password" type="password" label="Senha"/>
                            <Input name="password_confirmation" type="password" label="Confirmação de senha"/>
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">
                                    Cancelar
                                </Button>
                            </Link>
                                <Button colorScheme="pink">
                                    Salvar
                                </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}