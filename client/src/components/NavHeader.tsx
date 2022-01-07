import React from 'react'
import { Box, Image } from '@chakra-ui/react'

const NavHeader = () => (
    <Box display="flex" flexDirection="row" justifyContent="space-between" px={6} py={4}>
        <Image src="/imgs/catapult-logo.png" alt="CatapultLabs" width="160px" />
    </Box>
)

export default NavHeader
