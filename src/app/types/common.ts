import { GetCharactersResponse } from '@/app/types/character';

export type KeysOf<T> = keyof T;

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

export type ApiResponse<T = unknown> = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T;
}
