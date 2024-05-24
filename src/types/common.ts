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
