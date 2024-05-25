import { getCharacters } from '@/services/characters';
import { PageParams } from '@/types/common';
import { CharactersRenderer } from './CharacterRenderers';

export const CharactersFetcher = async ({ page, paramsPageLabel, title, alignTitle }: PageParams) => {
  const data = await getCharacters(page);

  return (
    <CharactersRenderer
      data={data}
      page={page}
      paramsPageLabel={paramsPageLabel}
      title={title}
      alignTitle={alignTitle}
    />
  );
}