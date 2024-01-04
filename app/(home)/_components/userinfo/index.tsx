import React from "react";
import { Avatar as NextUiAvatar } from "@nextui-org/avatar";
import { Text } from "@/components/ui-kit/text";

type UserInfoProps = {
  avatar: string;
  name: string;
  description: string;
};
export const UserInfo = ({ name, avatar, description }: UserInfoProps) => {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <div>
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
        <div className="text-lg font-semibold">
          {name}
        </div>
        <Text className="max-w-3xl px-6 text-left leading-7 [&:not(:first-child)]:mt-6">{description}</Text>
      </div>
    </div>
  );
};
