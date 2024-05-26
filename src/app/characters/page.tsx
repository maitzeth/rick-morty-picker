import { PageProps } from '@/types/common';
import { Suspense } from 'react';
import { CharactersFetcher } from '../components/characters/CharacterFetcher';
import { Loader } from '../components/characters/CharacterRenderers';

const CharactersPage = ({
  searchParams
}: PageProps) => {
  const firstCharPage = typeof searchParams.firstCharPage === 'string' ? Number(searchParams.firstCharPage) : 1;
  const secondCharPage = typeof searchParams.secondCharPage === 'string' ? Number(searchParams.secondCharPage) : 1;

  return (
    <main className="min-h-screen">
      <div className="max-w-[2440px] mx-auto px-2 grid md:grid-cols-2 gap-3 py-8">
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
    </main>
  );
};

export default CharactersPage;
