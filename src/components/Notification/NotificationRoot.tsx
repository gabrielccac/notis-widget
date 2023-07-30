import { ReactNode } from 'react';

interface NotificationRootProps {
  children: ReactNode;
}

export function NotificationRoot({ children }: NotificationRootProps) {
  return (
    <div className='flex gap-2 relative hover:cursor-pointer hover:bg-zinc-100 transition-colors p-4 rounded-2xl'>
      {children}
    </div>
  );
}
