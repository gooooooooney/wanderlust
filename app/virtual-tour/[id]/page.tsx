import { VirtualTourService } from '@/services/virtualTour.service'
import React from 'react'

type VirtualTourProps = {
  params: {
    id: string
  }
}

const VirtualTourPage = async ({params}: VirtualTourProps) => {
  const { id } = params
  const vt = await VirtualTourService.getVirtualTourInfo(id)
  if (!vt) {
    return null
  }
  return (
    <>
    <div>VirtualTour: {vt.link}</div>
    <div>VirtualTour: {vt.title}</div>
    </>
  )
}

export default VirtualTourPage