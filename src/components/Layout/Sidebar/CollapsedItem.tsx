import { IconButton } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { LinkBox, LinkOverlay } from '@chakra-ui/layout'
import { chakra } from '@chakra-ui/system'
import { Tooltip } from '@chakra-ui/tooltip'
import React from 'react'
import { Link } from 'react-router-dom'
import { NavItem } from './NavItem'

const CollapsedItem = (props: NavItem & { scheme?: string }) => {
  return (
    <Tooltip hasArrow label={props.name} placement="right">
      <LinkBox display="flex" justifyContent="center">
        <IconButton
          colorScheme={props.active ? 'brand' : props.scheme || 'brand'}
          aria-label={props.name}
          variant={props.active ? 'solid' : 'ghost'}
          boxSize="40px"
          alignSelf="center"
          _focus={{ shadow: 'none' }}
          icon={
            <>
              <LinkOverlay
                as={Link}
                to={props.href || ''}
                onClick={() => {
                  if (props.onClick) {
                    props.onClick()
                  }
                }}
              >
                <Icon as={props.icon} fontSize="lg" />
              </LinkOverlay>

              {props.count && (
                <chakra.span
                  pos="absolute"
                  top="-1px"
                  right="-1px"
                  px={2}
                  py={1}
                  fontSize="xs"
                  fontWeight="bold"
                  lineHeight="none"
                  color="pink.100"
                  transform="translate(50%,-50%)"
                  bg="pink.600"
                  rounded="full"
                >
                  {props.count}
                </chakra.span>
              )}
            </>
          }
        />
      </LinkBox>
    </Tooltip>
  )
}

export default CollapsedItem
