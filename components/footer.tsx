import { Divider } from "@nextui-org/divider";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaMailBulk,
} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { Tooltip } from "@nextui-org/tooltip";
import { Container } from "./Container";

const navigation = [
  {
    name: "Realsee",
    href: "https://home.realsee.ai",
    icon: TbWorld,
  },
  {
    name: "luonawang1992727@gmail.com",
    href: "mailto:luonawang1992727@gmail.com",
    icon: FaMailBulk,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/message/CGR6XJOODRABC1",
    icon: FaWhatsapp,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/realsee/",
    icon: FaLinkedin,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/RealseeVR/",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/realsee_tech?igsh=bmZkdXdvN2x3Mmxq&utm_source=qr",
    icon: FaInstagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCARlm-6LYCRgjIu_R8LbD8Q",
    icon: FaYoutube,
  },
];

export default function Footer() {
  return (
    <footer>
      <Container className="mb-16">
        <Divider orientation="horizontal" className="my-10 md:my-20" />
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <Tooltip key={item.name} content={item.name}>
                <Button
                  isIconOnly
                  as={Link}
                  variant="light"
                  size="sm"
                  href={item.href}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Button>
              </Tooltip>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-sm leading-5 text-gray-500">
              &copy; 2024 Wanderlust, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
