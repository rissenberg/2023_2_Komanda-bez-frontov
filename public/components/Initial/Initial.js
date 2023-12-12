import {API} from '../../modules/api.js';
import {renderMessage} from '../Message/message.js';
import {getAuthAvatar, STORAGE} from '../../modules/storage.js';
import {navbar} from "../Navbar/navbar.js";

/**
 * Функция для рендеринга страницы при первой загрузке.
 *
 * @async
 * @function
 * @return {void}
 */
export const renderInitial = async () => {
  const rootElement = document.querySelector('#root');
  rootElement.innerHTML = '';

  try {
    const api = new API();
    const isAuth = await api.isAuth();
    if (isAuth.isAuthorized) {
      STORAGE.user = isAuth.authorizedUser;
      getAuthAvatar();
    }
  } catch (e) {
    renderMessage('Ошибка сервера. Попробуйте позже', true);
  }

  navbar();
};
