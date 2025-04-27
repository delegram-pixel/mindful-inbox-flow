
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CategoryType } from '@/components/ui/CategoryBadge';
import MessageItem, { MessageItemProps } from './MessageItem';

interface InboxCardProps {
  category: CategoryType;
  messages: MessageItemProps[];
  icon: React.ReactNode;
}

const InboxCard: React.FC<InboxCardProps> = ({ category, messages, icon }) => {
  return (
    <Card className="shadow-sm hover:shadow cozy-shadow transition-all">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium flex items-center">
          <span className="mr-2 text-cocoa-light">{icon}</span>
          <span className="capitalize">{category}s</span>
        </CardTitle>
        <Button variant="ghost" size="sm" className="text-cocoa hover:text-cocoa-light">
          View All
        </Button>
      </CardHeader>
      <CardContent className="pt-0">
        {messages.length > 0 ? (
          <div>
            {messages.map((message) => (
              <MessageItem key={message.id} {...message} />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-cocoa-light">
            <p>No {category}s at the moment</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InboxCard;
