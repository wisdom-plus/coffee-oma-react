import { Fetchproductindexinfinite } from 'apis/Product';
import { ProductInfinite } from 'model/index';
import {
  useInfiniteQuery,
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from 'react-query';

const useThreeCards = (): {
  products: ProductInfinite[] | undefined;
  fetchNext: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<ProductInfinite, unknown>>;
  isFetch: boolean;
} => {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['products'],
    async ({ pageParam = 0 }) => Fetchproductindexinfinite(pageParam as number),
    {
      getNextPageParam: (lastpage) =>
        lastpage.nextpage ? lastpage.pages + 1 : undefined,
      notifyOnChangeProps: 'tracked',
    },
  );

  return {
    products: data?.pages,
    fetchNext: fetchNextPage,
    isFetch: isFetchingNextPage,
  };
};

export default useThreeCards;
