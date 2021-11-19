import { FC, useEffect, ReactElement } from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'; // eslint-disable-line
import { sessionvalidateURL, LikeExistsURL } from 'urls/index';
import { currentuser } from 'mock/User';
import { SignedInAxios } from 'apis/Session';

const apiMock = new MockAdapter(axios.create());
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
      document.cookie =
        'token={"access-token":"access-token","client":"client","uid":"uid"}';
      apiMock.onGet(sessionvalidateURL).reply(200, { data: currentuser });
    }
    if (like) {
      SignedMock.onGet(LikeExistsURL, {
        params: { product_id: '1' },
      }).reply(200, { liked: false, count: 1 });
    }

    mock(apiMock);

    return () => {
      document.cookie = 'token=; max-age=0';
      apiMock.reset();
    };
  });

  return children;
};

export default AxiosMock;
