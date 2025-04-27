import React from 'react';
import { Card } from '@/components/ui/card';
import CategoryBadge, { CategoryType } from '@/components/ui/CategoryBadge';
import { cn } from '@/lib/utils';

export interface MessageItemProps {
  id: string;
  title: string;
  content: string;
  source: string;
  category: CategoryType;
  date: Date;
  isRead?: boolean;
}

const MessageItem: React.FC<MessageItemProps> = ({
  title,
  content,
  source,
  category,
  date,
  isRead = false,
}) => {
  return (
    <Card className={cn(
      "p-4 mb-3 border-l-4 transition-all duration-200 hover:shadow-md",
      isRead ? "border-l-gray-300" : "border-l-cocoa",
      "hover:border-l-cocoa-light"
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className={cn(
            "text-base font-medium text-cocoa",
            !isRead && "font-semibold"
          )}>
            {title}
          </h3>
          <p className="text-sm text-cocoa-light line-clamp-2 mt-1">
            {content}
          </p>
          <div className="flex items-center mt-2 text-xs text-cocoa-light">
            <span className="mr-2">{source}</span>
            <span>•</span>
            <span className="mx-2">{formatDate(date)}</span>
            <CategoryBadge type={category} />
          </div>
        </div>
      </div>
    </Card>
  );
};

function formatDate(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  
  // Less than 24 hours
  if (diff < 86400000) {
    return date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
  }
  
  // Less than 7 days
  if (diff < 604800000) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }
  
  // Otherwise show actual date
  return date.toLocaleDateString();
}

export default MessageItem;
