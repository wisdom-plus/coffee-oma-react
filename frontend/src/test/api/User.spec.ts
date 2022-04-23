import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { RegistrationNewURL, RegistrationShowURL } from 'urls/index';
import {
  Fetchregistrationnew,
  FetchRegistrationShow,
  FetchRegistrationUpdate,
} from 'apis/User';

describe('User', () => {
  const mock = new MockAdapter(axios);

  const spy = jest.spyOn(global, 'Date');

  afterEach(() => {
    mock.reset();
  });
  describe('new', () => {
    it('should succeed', async () => {
      mock.onPost(RegistrationNewURL).reply(201);
      const userdata = {
        name: 'test',
        email: 'test@example.com',
        password: 'password',
        password_confirmation: 'password',
      };
      const usernew = await Fetchregistrationnew(userdata);
      expect(usernew).toBe(201);
    });
  });
  describe('show', () => {
    it('should succees', async () => {
      const userId = 1;
      const currentuser = {
        id: 1,
        name: 'test',
        email: 'test@example.com',
        icon: { url: 'http://example.com/image/1' },
        profile: 'ユーザーのプロフィール',
        created_at: spy.mock.instances[0],
      };
      mock
        .onGet(RegistrationShowURL(`${userId}`))
        .reply(200, { data: currentuser });
      const usershow = await FetchRegistrationShow(`${userId}`);
      expect(usershow).toEqual({ data: currentuser });
    });
  });
  describe('updata', () => {
    it('should succeed', async () => {
      const currentuser = {
        id: 1,
        name: 'test1',
        email: 'test@example.com',
        icon: { url: 'http://example.com/image/1' },
        profile: 'ユーザーのプロフィール',
        created_at: spy.mock.instances[0],
      };
      mock.onPut(RegistrationNewURL).reply(200, { data: currentuser });
      const formdata = new FormData();
      formdata.append('name', 'test1');
      formdata.append('profile', 'ユーザーのプロフィール1');
      // const userupdate = await FetchRegistrationUpdate(User: formdata,headers: );
      // expect(userupdate).toEqual({ data: currentuser });
    });
  });
});
