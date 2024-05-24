import React, { Suspense } from 'react';
import { PageProps, PageParams } from '@/types/common';
import { CharactersRenderer, Loader } from '../components/characters/CharacterRenderers';
import { getCharacters } from '@/services/characters';

const CharactersFetcher = async ({ page, paramsPageLabel, title }: PageParams) => {
  const data = await getCharacters(page);

  return (
    <CharactersRenderer
      data={data}
      page={page}
      paramsPageLabel={paramsPageLabel}
      title={title}
      titleAlign="right"
    />
  );
}

const CharactersPage = ({
  searchParams
}: PageProps) => {
  const firstCharPage = typeof searchParams.firstCharPage === 'string' ? Number(searchParams.firstCharPage) : 1;
  const secondCharPage = typeof searchParams.secondCharPage === 'string' ? Number(searchParams.secondCharPage) : 1;

  return (
    <main className="min-h-screen border border-red-500">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 py-8">
        <div>
          <Suspense key={firstCharPage} fallback={<Loader />}>
            <CharactersFetcher title="Character #1" page={firstCharPage} paramsPageLabel="firstCharPage" />
          </Suspense>
        </div>
        <div>
          <Suspense key={secondCharPage} fallback={<Loader />}>
            <CharactersFetcher title="Character #2" page={secondCharPage} paramsPageLabel="secondCharPage" />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default CharactersPage;
