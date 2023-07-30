import { Avatar, AvatarImage } from '../ui/avatar';

interface NotificationHeaderProps {
  text: string;
  username: string;
  children?: React.ReactNode;
}

export function NotificationHeader({ username, text, children }: NotificationHeaderProps) {
  return (
    <>
      <Avatar className='w-12 h-12'>
        <AvatarImage src={`https://github.com/${username}.png`} />
      </Avatar>
      <div className='flex-1 flex flex-col gap-1 text-sm'>
        <p>
          <span className='font-bold'>@{username}</span> {text}
        </p>
        {children}
      </div>
    </>
  );
}
