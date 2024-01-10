import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import React from 'react'


type CodeProps = {
  block: CodeBlockObjectResponse
}

export const Code = ({block}: CodeProps) => {
  const language = block.code.language
  const code = block.code.rich_text[0].plain_text
  return (
    <pre>
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  )
}
