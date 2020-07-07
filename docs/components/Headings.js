/* eslint-disable react/no-multi-comp */
import React from 'react'
import styled from '@xstyled/styled-components'
import { Text } from '@welcome-ui/text'

export const H1 = props => <H1Styled variant="h1" {...props} />
export const H2 = props => <H2Styled variant="h3" {...props} />
export const H3 = props => <H3Styled variant="h4" {...props} />

const H1Styled = styled(Text)`
  margin: 0;
`

const H2Styled = styled(Text)`
  margin: 50 0 30;
`

const H3Styled = styled(Text)`
  margin: xl 0 md;
`
