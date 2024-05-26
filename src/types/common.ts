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

export type CharacterOrder = {
  order: number;
}

export type PageParams = {
  page: number;
  paramsPageLabel: string;
}

export type FetcherProps = PageParams & CharacterOrder & {
  alignTitle: 'default' | 'right';
};

export type RendererProps = PageParams & CharacterOrder & {
  data: GetCharactersResponse;
}
