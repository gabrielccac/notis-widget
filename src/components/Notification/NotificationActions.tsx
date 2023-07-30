import { Button } from '../ui/button';

interface NotificationActionsProps {
  onAccept?: () => void;
  onDecline?: () => void;
  action: string;
}

export function NotificationActions({ onAccept, onDecline, action }: NotificationActionsProps) {
  return (
    <div className='flex gap-1'>
      {action === 'follow-back' && (
        <Button
          className='h-8 text-[12px] font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500'
          onClick={onAccept}>
          Follow Back
        </Button>
      )}
      {action === 'yes-no' && (
        <>
          <Button
            className='h-8 text-[12px] font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500'
            onClick={onAccept}>
            Accept
          </Button>
          <Button
            variant={'outline'}
            className='h-8 text-[12px] font-semibold rounded-lg text-zinc-800'
            onClick={onDecline}>
            Decline
          </Button>
        </>
      )}
    </div>
  );
}
