import { FC, useEffect, ReactElement } from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'; // eslint-disable-line
import {
  sessionvalidateURL,
  LikeExistsURL,
  ReviewExistsURL,
  FollowExistsURL,
} from 'urls/index';
import { currentuser } from 'mock/User';
import { reviews } from 'mock/Review';

const apiMock = new MockAdapter(axios);

type Props = {
  mock: (adapter: MockAdapter) => void;
  logined?: boolean;
  like?: boolean;
  follow?: boolean;
  children: ReactElement;
};

const AxiosMock: FC<Props> = ({
  mock,
  children,
  logined = false,
  like = false,
  follow = false,
}) => {
  useEffect(() => () => {
    document.cookie = 'token=; max-age=0';
    apiMock.reset();
  });
  if (logined) {
    document.cookie =
      'token={"access-token":"access-token","client":"client","uid":"uid"}';
    apiMock.onGet(sessionvalidateURL).reply(200, { data: currentuser });
  }
  if (follow) {
    apiMock
      .onGet(FollowExistsURL, {
        params: { follow_id: '2' },
      })
      .reply(200);
  }
  if (like) {
    apiMock
      .onGet(LikeExistsURL, {
        params: { product_id: '1' },
      })
      .reply(200, { liked: true, count: 2 });
  } else {
    apiMock
      .onGet(LikeExistsURL, {
        params: { product_id: '1' },
      })
      .reply(200, { liked: false, count: 1 });
  }
  apiMock.onGet(ReviewExistsURL('1')).reply(200, { reviews });

  mock(apiMock);

  return children;
};

export default AxiosMock;
