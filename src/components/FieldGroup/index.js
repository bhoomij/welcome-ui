import React from 'react'
import { node, string } from 'prop-types'

import { Label } from '../Label'

import { StyledFieldGroup } from './styles'

export const FieldGroup = ({ children, label }) => (
  <StyledFieldGroup>
    <Label as="legend">{label}</Label>
    {children}
  </StyledFieldGroup>
)

FieldGroup.propTypes = {
  children: node,
  label: string
}
