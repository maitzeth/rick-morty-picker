import { GetCharactersResponse } from '@/types/character';

/**
 * This type alias receive additional properties, including a className to allow for custom styling.
 *
 * @public
*/
export type PropsWithClassName<T = unknown> = T & {
  className?: string;
};

export type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined }
};

export type PageParams = {
  page: number;
  paramsPageLabel: string;
  title: string;
  alignTitle: 'default' | 'right';
}

export type RendererProps = PageParams & {
  data: GetCharactersResponse;
}
