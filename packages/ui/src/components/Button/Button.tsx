import React from 'react'
import styled from 'styled-components'
import { FC } from 'react'

export interface ButtonProps {
  /* Primary buttons are used once per component,
   * a single screen may contain multiple primaries but all for the same action */
  primary?: boolean
  /* Supports HEX, named-variables format */
  borderColor?: string
}

const StyledButton = styled.button<ButtonProps>`
  /* Adapt the colors based on primary prop */
  background: ${({ primary, theme }) =>
    primary ? theme.colors.primary : theme.colors.secondary};
  color: ${({ primary, theme }) => (primary ? 'white' : theme.colors.primary)};

  font-size: 1em;
  margin: 1em;
  padding: 1.3em 3em;
  border: 2px solid ${({ borderColor }) => borderColor || 'palevioletred'};
  border-radius: 3px;
}
`

const Button: FC<ButtonProps> = ({ children, primary, borderColor }) => (
  <StyledButton primary={primary} borderColor={borderColor}>
    {children}
  </StyledButton>
)

export default Button
