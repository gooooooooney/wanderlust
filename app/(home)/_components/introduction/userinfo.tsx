import React from "react";
import { Avatar as NextUiAvatar } from "@nextui-org/avatar";
import { Text } from "@/components/ui-kit/text";
import { Author } from "@/app/(home)/_components/userinfo/Author";

type UserInfoProps = {
  avatar: string;
  name: string;
  description: string;
};
export const UserInfo = ({ name, avatar, description }: UserInfoProps) => {
  return (

    <div className="flex-grow pr-6">
      <div className="flex justify-center">
        <NextUiAvatar
          isBordered
          color="warning"
          name={name}
          src={avatar}
          size="lg"
          className="h-40 w-40 text-large"
        />
      </div>
      <div className="text-center mt-8">
        <div className="font-display text-2xl font-medium tracking-tight [text-wrap:balance] ">
          {name}
        </div>
        <Text className="max-w-3xl text-lg text-left [&:not(:first-child)]:mt-4">{description}</Text>
      </div>
    </div>
    // <Author name={name} description={description} src={avatar} />
  );
};
