"use client"
import { realistic } from '@/lib/confetti'
import { Button } from '@nextui-org/button'
import React from 'react'
import { TbThumbUp } from 'react-icons/tb'

export const Fire = () => {
  return (
    <Button variant="shadow" isIconOnly className='text-center'  onClick={() => {
        realistic()
    }}>
        <TbThumbUp />
    </Button>
  )
}
