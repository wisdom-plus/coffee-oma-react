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
} => {
  const { data, fetchNextPage } = useInfiniteQuery(
    ['products'],
    async ({ pageParam = 0 }) => Fetchproductindexinfinite(pageParam),
    {
      getNextPageParam: (lastpage) =>
        lastpage.nextpage ? lastpage.pages + 1 : undefined,
    },
  );

  return { products: data?.pages, fetchNext: fetchNextPage };
};

export default useThreeCards;
