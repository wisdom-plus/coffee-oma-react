import { FC, useEffect, ReactElement } from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'; // eslint-disable-line
import { sessionvalidateURL } from 'urls/index';
import { currentuser } from 'mock/User';

const apiMock = new MockAdapter(axios);

type Props = {
  mock: (adapter: MockAdapter) => void;
  logined?: boolean;
  children: ReactElement;
};

const AxiosMock: FC<Props> = ({ mock, children, logined = false }) => {
  useEffect(() => {
    if (logined) {
      localStorage.setItem('access-token', 'access-token');
      localStorage.setItem('client', 'client');
      localStorage.setItem('uid', 'uid');
      apiMock.onGet(sessionvalidateURL).reply(200, { data: currentuser });
    }
    mock(apiMock);

    return () => {
      apiMock.reset();
    };
  });

  return children;
};

export default AxiosMock;
