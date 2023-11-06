import { backendUrl, ROUTES, ROUTES_API } from '../config.js';
import { renderMessage } from '../components/Message/message.js';

const GET_METHOD = 'GET';
const POST_METHOD = 'POST';

export class API {
  /**
 * Проверяет, является ли пользователь авторизованным.
 *
 * @async
 * @function
   // eslint-disable-next-line max-len
 * @return {Promise<{isAuthorized: boolean,
 * authorizedUser: ({password: *, name: *, email: *, username: *}|*)}>} Объект* с информацией
 * о статусе авторизации и о пользователе.
 * @throws {Error} Если произошла ошибка при запросе или обработке данных.
 */
  async isAuth() {
    try {
      const url = backendUrl + ROUTES_API.isAuth.url;

      const res = await fetch(url, { method: GET_METHOD });
      const body = await res.json();
      let isAuthorized = false;
      let authorizedUser;

      if (res.ok) {
        isAuthorized = true;
        // authorizedUser = body.currentUser;
        authorizedUser = { name: 'NAME', username: 'USERNAME', email: 'EMAIL@GMAIL.COM' };
      }

      return { isAuthorized, authorizedUser };
    } catch (e) {
      console.log('Ошибка метода isAuth:', e);
      throw (e);
    }
  }

  /**
   * Функция для авторизации пользователя.
   *
   * @async
   * @function
   * @param {string} email - Почта.
   * @param {string} password - Пароль.
   * @return {Promise<{isLoggedIn: boolean,
   * authorizedUser: ({password: *, name: *, email: *, username: *}|*)}>} Объект с информацией
   * о статусе авторизации и о пользователе.
   * @throws {Error} Если произошла ошибка при запросе или обработке данных.
   */
  async userLogin(email, password) {
    try {
      const url = backendUrl + ROUTES_API.login.url;

      const res = await fetch(url, {
        method: POST_METHOD,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const body = await res.json();

      let isLoggedIn = false;
      let authorizedUser;

      const setCookieHeader = res.headers.get('Set-Cookie');
      console.log(setCookieHeader);

      if (res.ok) {
        isLoggedIn = true;
        authorizedUser = body;
      }

      return { isLoggedIn, authorizedUser };
    } catch (e) {
      console.log('Ошибка метода userLogin:', e);
      throw (e);
    }
  }

  /**
     * Функция для выхода из аккаунта пользователя.
     *
     * @async
     * @function
     * @return {Promise<number>} Объект с номером статуса при выходе пользователя.
     * @throws {Error} Если произошла ошибка при запросе или обработке данных.
     */
  async userLogout() {
    try {
      const url = backendUrl + ROUTES_API.logout.url;

      const res = await fetch(url, {
        method: POST_METHOD,
      });

      if (res.status === 404) {
        return 404;
      }

      return 401;
    } catch (e) {
      console.log('Ошибка метода userLogout:', e);
      throw (e);
    }
  }

  /**
   * Функция для регистрации пользователя.
   *
   * @async
   * @function
   * @param {string} name - Имя.
   * @param {string} username - Имя пользователя.
   * @param {string} email - Почта.
   * @param {string} password - Пароль.
   * @return {Promise<{registeredUser: ({password: *, name: *, email: *, username: *}|*),
   * status: number}>} Объект с информацией о статусе регистрации и о пользователе.
   * @throws {Error} Если произошла ошибка при запросе или обработке данных.
   */
  async userSignup(name, username, email, password) {
    try {
      const url = backendUrl + ROUTES_API.signup.url;

      const res = await fetch(url, {
        method: POST_METHOD,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name, username, email, password,
        }),
      });

      const body = await res.json();

      const {status} = res.status;
      let registeredUser;

      if (res.ok) {
        registeredUser = body.currentUser;
      }

      return {status, registeredUser};
    } catch (e) {
      console.log('Ошибка метода userSignup:', e);
      throw (e);
    }
  }

  /**
   * Функция для получения всех опросов.
   * П.С. Позже заменить на получение всех опросов за авторством пользователя.
   *
   * @async
   * @function
   * @return {Promise<{forms: ( * | { id: { title: string } }[] ),
   * status: number}>} Объект с информацией о статусе запроса и массивом с опросами.
   * @throws {Error} Если произошла ошибка при запросе или обработке данных.
   */
  async getForms() {
    try {
      const url = backendUrl + ROUTES_API.login.url;

      const res = await fetch(url, {method: GET_METHOD});

      const body = await res.json();
      const status = res.status;

      if (res.ok) {
        const forms = body.forms;
        return {status, forms};
      }

      return {status};
    } catch (e) {
      console.log('Ошибка метода getForms:', e);
      throw (e);
    }
  }

  /**
   * Функция для получения опроса по его id.
   *
   * @async
   * @function
   * @param {number} id - ID.
   * @return {Promise<{form: ( * | { id: { title: string } } ),
   * status: number}>} Объект с информацией о статусе запроса и об искомом опросе.
   * @throws {Error} Если произошла ошибка при запросе или обработке данных.
   */
  async getForm(id) {
    try {
      const url = backendUrl + ROUTES_API.login.url + id;

      const res = await fetch(url, {method: GET_METHOD});

      const body = await res.json();
      const status = res.status;

      if (res.ok) {
        const form = body.form;
        return {status, form};
      }

      return {status};
    } catch (e) {
      console.log('Ошибка метода getForm:', e);
      throw (e);
    }
  }
}
