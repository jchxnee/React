import React from 'react'
import ProfileCard from './ProfileCard'
import styled from 'styled-components'

const BackGround = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #2e2e2e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
`

const TableStyle = styled.table`
  width: 700px;
  border-collapse: collapse;
  background-color: #1e1e1e;
  color: #f1f1f1;
  border-radius: 12px;
`

const ThStyle = styled.th`
  background-color: #5e4b4b;
  color: #ffffff;
  padding: 16px;
  font-size: 16px;
  text-align: center;
  border-bottom: 1px solid #444;
`

const TrStyle = styled.tr`
  &:hover {
    background-color: #2c2c2c;
    transition: background-color 0.2s ease;
  }
`

const ProfileList = ({ profile }) => {
  return (
    <BackGround>
        <TableStyle>
          <thead>
            <tr>
              <ThStyle>이름</ThStyle>
              <ThStyle>나이</ThStyle>
              <ThStyle>온라인 여부</ThStyle>
            </tr>
          </thead>
          <tbody>
            {profile.map((p, index) => (
              <TrStyle key={index}>
                <ProfileCard profile={p} />
              </TrStyle>
            ))}
          </tbody>
        </TableStyle>
    </BackGround>
  )
}

export default ProfileList
