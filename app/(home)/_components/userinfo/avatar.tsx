import { Avatar as NextUiAvatar } from "@nextui-org/avatar";
import { Avatar as UiKitAvatar } from "@/components/ui-kit/avatar";

type AvatarProps = {
  avatar: string
  name: string
  description: string
}

export const Avatar = ({ avatar, name, description }: AvatarProps) => {
  return (
    <NextUiAvatar
      name={name}
      src={avatar}
      size="lg"
      className="h-40 w-40"
    />

  )
}