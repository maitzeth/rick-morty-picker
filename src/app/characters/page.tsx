import React, { Suspense } from 'react';
import { PageProps } from '@/types/common';
import { CharactersRenderer, Loader } from '../components/characters/CharacterRenderers';

function delay() {
  return new Promise(resolve => setTimeout(resolve, 100000));
}

const CharactersFetcher = async ({ page, paramsPageLabel }: any) => {
  await delay();
  // This component will be used to fetch data;
  return (
    <div>
      <CharactersRenderer page={page} paramsPageLabel={paramsPageLabel} />
    </div>
  );
}

const CharactersPage = ({
  searchParams
}: PageProps) => {
  const firstCharPage = typeof searchParams.firstCharPage === 'string' ? Number(searchParams.firstCharPage) : 1;
  const secondCharPage = typeof searchParams.secondCharPage === 'string' ? Number(searchParams.secondCharPage) : 1;

  return (
    <main className="min-h-screen border border-red-500">
      <div className="container mx-auto px-4 grid grid-cols-2 gap-4 py-8">
        <div>
          <Suspense key={firstCharPage} fallback={<Loader />}>
            <CharactersFetcher page={firstCharPage} paramsPageLabel="firstCharPage" />
          </Suspense>
        </div>
        <div>
          <Suspense key={secondCharPage} fallback={<Loader />}>
            <CharactersFetcher page={secondCharPage} paramsPageLabel="secondCharPage" />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default CharactersPage;
