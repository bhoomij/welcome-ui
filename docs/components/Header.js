/* eslint-disable react/jsx-max-depth */
import React from 'react'
import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { GithubIcon } from '@welcome-ui/icons.github'
import { MenuIcon } from '@welcome-ui/icons.menu'

import { Logo } from './Logo'
import { Navigation } from './Navigation'

export const Header = () => {
  return (
    <Box
      as="header"
      backgroundColor="dark.700"
      fontSize="body2"
      height={{ xs: 60, md: '100vh' }}
      left="0"
      maxWidth={{ md: '17rem' }}
      position="fixed"
      px={{ xs: 'md', md: 'lg' }}
      py={{ md: 'xl' }}
      top="0"
      width={1}
      zIndex={1}
    >
      <Box
        alignItems={{ xs: 'center', md: 'flex-start' }}
        display="flex"
        height={{ xs: 1, md: 'auto' }}
        justifyContent="space-between"
        w={1}
      >
        <Box
          alignItems="center"
          alt="welcome to the jungle"
          as="a"
          display="flex"
          href="https://www.welcometothejungle.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Logo height={{ xs: '2.3rem', md: '3.9rem' }} width={{ xs: '4rem', md: '6.75rem' }} />
        </Box>
        <Box alignItems={{ xs: 'center', md: 'flex-start' }} display="flex">
          <Button
            alt="welcome to the jungle"
            as="a"
            borderRadius="100px"
            href="https://github.com/WTTJ/welcome-ui"
            rel="noopener noreferrer"
            size="sm"
            target="_blank"
            variant="quaternary"
          >
            <GithubIcon size="lg" />
            <span>Source</span>
          </Button>
          <Button display={{ md: 'none' }} ml="sm" shape="circle" size="sm">
            <MenuIcon />
          </Button>
        </Box>
      </Box>
      <Box
        display={{ xs: 'none', md: 'block' }}
        height="calc(100% - 100px)"
        mt="xl"
        style={{ overflowY: 'auto' }}
      >
        <Navigation />
      </Box>
    </Box>
  )
}
