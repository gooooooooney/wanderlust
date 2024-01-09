import { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichText } from "./rich_text";

interface QuoteProps {
  block: QuoteBlockObjectResponse
}

const Quote: React.FC<QuoteProps> = ({ block }: QuoteProps) => {

  return (
    <div className="w-full my-1">

      <div className="text-[1em] py-[3px] px-[2px] flex">
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          <RichText richTexts={block.quote.rich_text}></RichText>
        </blockquote>
      </div>
    </div>
  );
};

export default Quote;
