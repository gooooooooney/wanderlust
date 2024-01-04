import React from 'react'
import { Avatar } from './avatar'
type UserInfoProps = {
  avatar: string
  name: string
  description: string
}
export const UserInfo = (props: UserInfoProps) => {
  return (
    <div className='flex justify-center items-center mt-8'>
      <Avatar {...props} />
    </div>
  )
}
