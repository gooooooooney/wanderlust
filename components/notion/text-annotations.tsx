import {
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React, { PropsWithChildren } from "react";
import { code } from "@nextui-org/theme";
import { getColor } from "./color";
type TextAnnotationsProps = {
  annotations: RichTextItemResponse["annotations"];
};


export const TextAnnotations: React.FC<
  PropsWithChildren<TextAnnotationsProps>
> = ({ annotations, children }) => {
  annotations;
  let className = "";
  if (annotations.bold) {
    className += "font-bold";
  }
  if (annotations.italic) {
    className += "italic";
  }
  if (annotations.strikethrough) {
    className += "line-through";
  }
  if (annotations.underline) {
    className += "underline";
  }
  if (annotations.code) {
    className += code({ color: "warning", size: "sm" });
  }

  if (annotations.color) {
    const color = annotations.color;
    className += ` ${getColor(color)}`;
  }
  return <span className={className}>{children}</span>;
};
