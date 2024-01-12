"use client"
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookShareCount,
  GabIcon,
  GabShareButton,
  HatenaIcon,
  HatenaShareButton,
  HatenaShareCount,
  InstapaperIcon,
  InstapaperShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalIcon,
  LivejournalShareButton,
  MailruIcon,
  MailruShareButton,
  OKIcon,
  OKShareButton,
  OKShareCount,
  PinterestIcon,
  PinterestShareButton,
  PinterestShareCount,
  PocketIcon,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  RedditShareCount,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  TumblrShareCount,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  VKIcon,
  VKShareButton,
  VKShareCount,
  WeiboIcon,
  WeiboShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  WorkplaceIcon,
  WorkplaceShareButton,
  XIcon,
} from "react-share";

import React from 'react'


type ShareButtonProps = {
  title?: string;
}

export const ShareButton = ({ title }: ShareButtonProps) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <FacebookShareButton
        url={window.location.href}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={window.location.href}
        title={title}
      >
        <XIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton
        url={window.location.href}
        title={title}
        separator=":: "
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton
        url={window.location.href}
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <RedditShareButton
        url={window.location.href}
        title={title}
        windowWidth={660}
        windowHeight={460}
      >
        <RedditIcon size={32} round />
      </RedditShareButton>
    </div>
  )
}