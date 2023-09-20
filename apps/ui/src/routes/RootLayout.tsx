import React from 'react'
import { AuthContext } from 'contexts'
import { Navigate, useOutlet, useParams } from 'react-router-dom'

import useCheckRoute from 'hooks/useCheckRoute'

import ChatSwitcher from 'components/ChatSwitcher'
import Spotlight from 'components/Spotlight'

import styled, { css } from 'styled-components'
import AvatarDropDown from 'components/AvatarDropDown'

const RootLayout = () => {
  const { user } = React.useContext(AuthContext)
  const { isCheckedRoute } = useCheckRoute('copilot')

  const outlet = useOutlet()

  // if (!user) return <Navigate to='/discover' />

  return (
    <>
      <>{outlet}</>

      {user && (
        <StyledAvatarContainer>
          <AvatarDropDown />
          <StyledFirstName>{user.name}</StyledFirstName>
        </StyledAvatarContainer>
      )}

      <StyledChatInputWrapper isHidden={isCheckedRoute}>
        {user && <Spotlight />}
      </StyledChatInputWrapper>

      {user && <ChatSwitcher isChatOpen={isCheckedRoute} />}
    </>
  )
}

export default RootLayout

const StyledChatInputWrapper = styled.div<{ isHidden: boolean }>`
  ${p =>
    p.isHidden &&
    css`
      opacity: 0;
      pointer-events: none;
    `};
`
const StyledFirstName = styled.span`
  color: #fff;
  @media (max-width: 1000px) {
    display: none;
  }
`
const StyledAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  position: absolute;
  left: 40px;
  bottom: 24px;

  @media (max-width: 800px) {
    display: none;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    /* color: rgba(255, 255, 255, 0.2); */
  }
`
