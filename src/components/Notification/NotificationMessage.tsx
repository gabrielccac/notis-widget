interface NotificationMessageProps {
  message: string;
}

export function NotificationMessage({ message }: NotificationMessageProps) {
  return <div className='p-2 bg-slate-200 rounded-xl max-w-max'>{message}</div>;
}
