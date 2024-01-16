"use client"
import { realistic } from '@/lib/confetti'
import { cn } from '@/lib/utils'
import { Button } from '@nextui-org/button'
import React from 'react'
import { TbThumbUp } from 'react-icons/tb'

export const Fire = ({className}: {className?: string}) => {
  return (
    <Button variant="flat" radius="full" size='md' color="secondary" isIconOnly className={cn("text-center group", className)}  onClick={() => {
        realistic()
    }}>
        <TbThumbUp className='w-5 h-5 group-hover:animate-swing' />
    </Button>
  )
}
