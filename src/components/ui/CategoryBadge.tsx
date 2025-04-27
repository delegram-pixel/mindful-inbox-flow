
import React from 'react';
import { cn } from '@/lib/utils';

export type CategoryType = 'task' | 'reminder' | 'event' | 'note' | 'junk';

interface CategoryBadgeProps {
  type: CategoryType;
  className?: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ type, className }) => {
  const baseClass = 'category-badge';
  const typeClass = `category-badge-${type}`;

  return (
    <span className={cn(baseClass, typeClass, className)}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
};

export default CategoryBadge;
