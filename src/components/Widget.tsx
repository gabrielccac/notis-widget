import { CheckCheck, Check, X } from 'lucide-react';
import { Button } from './ui/button';
import { Notification } from './Notification';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';

export function Widget() {
  return (
    <Card className='max-w-[520px] rounded-3xl'>
      <CardHeader className='space-y-4'>
        <CardTitle className='flex justify-between items-center'>
          Your Notifications
          <button className='text-sm flex gap-2 text-indigo-500 hover:text-indigo-400 transition-colors'>
            <CheckCheck
              strokeWidth={3}
              size={16}
            />
            Mark all as read
          </button>
        </CardTitle>
        <Tabs
          defaultValue='all'
          className='w-full'>
          <TabsList className='grid w-full grid-cols-4 gap-1 h-max rounded-xl'>
            <TabsTrigger
              value='all'
              className='flex gap-2 font-semibold'>
              View All <span className='py-1 px-2 text-[12px] bg-slate-100 rounded-md'>12</span>
            </TabsTrigger>
            <TabsTrigger
              value='mentions'
              className='flex gap-2 font-semibold'>
              Mentions <span className='py-1 px-2 text-[12px] bg-slate-100 rounded-md'>6</span>
            </TabsTrigger>
            <TabsTrigger
              value='followers'
              className='flex gap-2 font-semibold'>
              Followers<span className='py-1 px-2 text-[12px] bg-slate-100 rounded-md'>4</span>
            </TabsTrigger>
            <TabsTrigger
              value='invites'
              className='flex gap-2 font-semibold'>
              Invites <span className='py-1 px-2 text-[12px] bg-slate-100 rounded-md'>2</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className='flex flex-col gap-2 px-2'>
        {/* Notifications */}

        <Notification.Root>
          <Notification.Header
            text={'followed you.'}
            username={'gabrielccac'}>
            <Notification.Info />
            <Notification.Actions action='follow-back' />
          </Notification.Header>
        </Notification.Root>

        {/* Notification */}
        <Notification.Root>
          <Notification.Header
            text={'has sent you a job request.'}
            username={'openai'}>
            <Notification.Info />
            <Notification.Actions action='yes-no' />
          </Notification.Header>
        </Notification.Root>

        {/* Notification */}
        <Notification.Root>
          <Notification.Header
            text={'has sent you a job request.'}
            username={'eigenbom'}>
            <Notification.Info />
            <Notification.Message
              message='Hello, I am interested in your project. I have a lot of experience with React and
              Svelte'
            />
          </Notification.Header>
        </Notification.Root>

        {/* Notification */}
        <Notification.Root>
          <Notification.Header
            text={'has sent you a message.'}
            username={'GuilhermeGonSoares'}>
            <Notification.Info />
            <Notification.Message message='Hello, I am interested in working with you!' />
          </Notification.Header>
        </Notification.Root>
      </CardContent>
      <CardFooter className='border-t-[1px] pt-6'>
        <div></div>
        <div className='w-full flex items-center justify-between font-semiboldt'>
          <span className='font-semibold text-sm cursor-pointer hover:text-zinc-600'>
            View All Notifications
          </span>
          <Button className='h-8 text-[12px] font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500'>
            View All Notifications
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
