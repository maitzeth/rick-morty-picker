import { getCharacters } from '@/services/characters';
import { FetcherProps } from '@/types/common';
import { CharactersRenderer } from './CharacterRenderers';
import { cn } from '@/utils/common';

export const CharactersFetcher = async ({ page, paramsPageLabel, alignTitle, order }: FetcherProps) => {
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