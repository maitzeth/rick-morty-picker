import { PageProps } from '@/app/types/common';
import { Suspense } from 'react';
import { CharactersFetcher } from '../components/characters/CharacterFetcher';
import { Loader } from '../components/characters/CharacterRenderers';
import { CharacterComparator } from '../components/characters/CharacterComparator';

const CharactersPage = ({
  searchParams
}: PageProps) => {
  const firstCharPage = typeof searchParams.firstCharPage === 'string' ? Number(searchParams.firstCharPage) : 1;
  const secondCharPage = typeof searchParams.secondCharPage === 'string' ? Number(searchParams.secondCharPage) : 1;

  return (
    <main className="min-h-screen px-2 py-8 space-y-10 bg-[url('/pxfuel.jpg')]">
      <div className="max-w-[2440px] mx-auto grid md:grid-cols-2 gap-3">
        <section>
          <Suspense key={firstCharPage} fallback={<Loader />}>
            <CharactersFetcher
              alignTitle="default"
              page={firstCharPage}
              paramsPageLabel="firstCharPage"
              order={1}
            />
          </Suspense>
        </section>
        <section>
          <Suspense key={secondCharPage} fallback={<Loader />}>
            <CharactersFetcher
              alignTitle="right"
              page={secondCharPage}
              paramsPageLabel="secondCharPage"
              order={2}
            />
          </Suspense>
        </section>
      </div>
      <CharacterComparator />
    </main>
  );
};

export default CharactersPage;
