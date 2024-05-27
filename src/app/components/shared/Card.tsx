import { HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/app/utils/common';

interface Props extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {};

export const Card = ({ children, className, ...rest }: Props) => {
  return (
    <article className={cn('rounded-md shadow-lg', className)} {...rest}>
      {children}
    </article>
  );
};
