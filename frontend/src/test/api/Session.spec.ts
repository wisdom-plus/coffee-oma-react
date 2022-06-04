import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  Fetchsessionnew,
  Fetchsessiondestroy,
  Fetchsessionvalidate,
  Fetchsessionconfirm,
  Fetchpasswordreset,
  Fetchpasswordresetedit,
} from 'apis/Session';
import {
  sessionnewURL,
  sessiondestroyURL,
  sessionvalidateURL,
  sessionconfirmationURL,
  passwordresetURL,
  passwordreseteditURL,
} from 'urls/index';

describe('User', () => {
  const mock = new MockAdapter(axios);
  // const Signedmock = new MockAdapter(SignedInAxios);
  const spy = jest.spyOn(global, 'Date');
  const currentuser = {
    id: 1,
    name: 'test',
    email: 'test@example.com',
    icon: { url: 'http://example.com/image/1' },
    profile: 'ユーザーのプロフィール',
    created_at: spy.mock.instances[0],
  };

  afterEach(() => {
    mock.reset();
  });

  describe('new', () => {
    it('should succeed', async () => {
      mock.onPost(sessionnewURL).reply(
        201,
        { data: currentuser },
        {
          headers: {
            'access-token': 'access-token',
            client: 'client',
            uid: 'uid',
          },
        },
      );
      const sessionnew = await Fetchsessionnew({
        email: 'test@example.com',
        password: 'password',
      });
      expect(sessionnew).toEqual({
        data: currentuser,
      });
    });
  });
  describe('destory', () => {
    // トークンの保存場所がcookieに変更になったので後で変更する
    // it('should succeed', async () => {
    //   mock.onDelete(sessiondestroyURL).reply(200);
    //   const sessiondestroy = await Fetchsessiondestroy();
    //   expect(sessiondestroy).toBe(200);
    // });
  });
  describe('vaildate', () => {
    // cookieの変更
    // it('should succeed', async () => {
    //   mock.onGet(sessionvalidateURL).reply(200, { data: currentuser });
    //   const sessionvaildate = await Fetchsessionvalidate();
    //   expect(sessionvaildate).toEqual({ data: currentuser });
    // });
  });
  describe('confirm', () => {
    it('should succeed', async () => {
      mock.onPost(sessionconfirmationURL).reply(200);
      const confirmation = await Fetchsessionconfirm({
        email: currentuser.email,
      });
      expect(confirmation).toBe(200);
    });
  });
  describe('passwordreset', () => {
    it('should succeed', async () => {
      mock.onPost(passwordresetURL).reply(200);
      const passwordreset = await Fetchpasswordreset({
        email: currentuser.email,
      });
      expect(passwordreset).toEqual(200);
    });
  });
  describe('passwordresetedit', () => {
    it('should succeed', async () => {
      const params = {
        data: { password: 'password', password_confirmation: 'password' },
        headers: {
          'access-token': 'access-token',
          client: 'client',
          uid: 'uid',
        },
      };
      mock.onPut(passwordreseteditURL).reply(200);
      const passwordresetedit = await Fetchpasswordresetedit(params);
      expect(passwordresetedit).toBe(200);
    });
  });
});
