"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useResponsive } from '@/app/hooks/useResponsive';

type Props = {
  currentPage: number;
  totalPages: number;
  paramsPageLabel: string;
}

export const Pagination = ({ currentPage, totalPages, paramsPageLabel }: Props) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className="flex justify-center mt-10">
      <ReactPaginate
        containerClassName="flex items-center"

        breakLinkClassName="bg-accent-primary text-white px-4 py-2 opacity-50"
        activeLinkClassName="bg-accent-secondary text-accent-primary"
        pageLinkClassName="bg-accent-primary text-white px-2 lg:px-4 py-2"

        nextClassName="bg-accent-primary text-white py-2 px-4 border-l border-gray-200 rounded-r-md"
        previousClassName="bg-accent-primary text-white py-2 px-4 border-r border-gray-200 rounded-l-md"

        disabledClassName="opacity-50 cursor-not-allowed"
        disabledLinkClassName="opacity-50 cursor-not-allowed"

        previousLabel={
         <MdOutlineKeyboardArrowLeft aria-label="prev page icon" size={20} />
        }
        nextLabel={
           <MdOutlineKeyboardArrowRight aria-label="next page icon" size={20} />
        }

        breakLabel={null}
        onPageChange={(event) => {
          const nextPage = event.selected;

          const params = new URLSearchParams(searchParams);
          params.set(paramsPageLabel, `${nextPage + 1}`);
          replace(`${pathname}?${params.toString()}`)
        }}
        pageRangeDisplayed={0}
        pageCount={totalPages}
        initialPage={currentPage - 1}
        
        renderOnZeroPageCount={null}
        disableInitialCallback={true}
      />
    </div>
  );
};
