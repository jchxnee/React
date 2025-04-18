import React from 'react'
import styled from 'styled-components'

const Online = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
`
const TdStyle = styled.td`
    text-align: center;
`

const ProfileCard = ({ profile }) => {
  return (
    <>
      <TdStyle>{profile.name}</TdStyle>
      <TdStyle>{profile.age}</TdStyle>
      <TdStyle>
        <Online isOnline={profile.isOnline} />
        {profile.isOnline ? "온라인 상태입니다." : "오프라인 상태입니다."}
      </TdStyle>
    </>
  )
}

export default ProfileCard
