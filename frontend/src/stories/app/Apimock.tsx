import { FC, useEffect, ReactElement } from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'; // eslint-disable-line
import { sessionvalidateURL, LikeExistsURL } from 'urls/index';
import { currentuser } from 'mock/User';
import { SignedInAxios } from 'apis/Session';

const apiMock = new MockAdapter(axios);
const SignedMock = new MockAdapter(SignedInAxios);

type Props = {
  mock: (adapter: MockAdapter) => void;
  logined?: boolean;
  like?: boolean;
  children: ReactElement;
};

const AxiosMock: FC<Props> = ({
  mock,
  children,
  logined = false,
  like = false,
}) => {
  useEffect(() => {
    if (logined) {
      localStorage.setItem('access-token', 'access-token');
      localStorage.setItem('client', 'client');
      localStorage.setItem('uid', 'uid');
      apiMock.onGet(sessionvalidateURL).reply(200, { data: currentuser });
    }
    if (like) {
      SignedMock.onGet(LikeExistsURL, {
        params: { product_id: '1' },
      }).reply(200, { liked: false, count: 1 });
    }

    mock(apiMock);

    return () => {
      apiMock.reset();
    };
  });

  return children;
};

export default AxiosMock;
