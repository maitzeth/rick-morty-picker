import { getCharacters } from '@/app/services/characters';
import { FetcherProps } from '@/app/types/common';
import { CharactersRenderer } from './CharacterRenderers';
import { cn } from '@/app/utils/common';

export const CharactersFetcher = async ({ page, alignTitle, order, paramsPageLabel }: FetcherProps) => {
  const data = await getCharacters(page);
  
  return (
    <>
      <header className="mb-10">
        <h2 className={cn('text-2xl font-bold', {
          'text-left': alignTitle === 'default',
          'text-right': alignTitle === 'right',
        })}>
          Character #{order}
        </h2>
      </header>
      <CharactersRenderer
        data={data}
        page={page}
        paramsPageLabel={paramsPageLabel}
        order={order}
      />
    </>
  );
}