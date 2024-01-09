import { Link } from '@nextui-org/link'
import NextLink from 'next/link'
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'

import { isTextRichTextItemResponse, isEquationRichTextItemResponse } from '@notionhq/client/build/src/helpers'
import React from 'react'
import { Text } from '../ui-kit/text'

interface RichTextProps extends React.HTMLAttributes<HTMLDivElement> {
  richTexts: RichTextItemResponse[]
}

export const RichText = ({ richTexts, className }: RichTextProps) => {
  return (
    <>
      {
        richTexts.map((richText, index) => {


          if (isTextRichTextItemResponse(richText)) {
            return richText.text.link ? (
        
                <Link as={NextLink} underline="hover" className='!text-size-inherit' color='warning' key={index} href={richText.text.link.url}>
                  {richText.text.content}
                </Link>
           

            ) : (
              richText.text.content
            )
          }
          if (isEquationRichTextItemResponse(richText)) {
            return <Text key={index}>{richText.equation.expression}</Text>
          }
          // if (richText.type == "mention") {
          //   return <span key={index}>{richText.mention}</span>
          // }
          return <span key={index}>unknown</span>
        })
      }
    </>
  )
}
