import {ROUTES} from '../config.js'


const GET_METHOD = 'GET';
const POST_METHOD = 'POST';
export class API {

    async isAuth() {
        try {
            // ВОТ ТУТ Я ИЗМЕНИЛ УРЛ НА НАПИСАННЫЙ ВРУЧНУЮ!!!!
            // const url = ROUTES.main.url;
            const url = '/main';

            const response = await fetch(url, {method: GET_METHOD});

            const res = await response;
            const parseRes = await res.json();

            let isAuthorized = false;
            let authorizedUser;

            if (res.ok) {
                isAuthorized = true;
                authorizedUser = parseRes.currentUser;
            }

            return {isAuthorized, authorizedUser};
        } catch (e) {
            console.log("Ошибка метода isAuth:", e);
            throw(e);
        }
    }

    async userLogin(email, password) {
        try {
            const url = ROUTES.login.url;

            const response = await fetch(url, {
                method: POST_METHOD,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });

            const  res = await response;
            const parseRes = await res.json();

            let isLoggedIn = false;
            let authorizedUser;

            if (res.ok) {
                isLoggedIn = true;
                authorizedUser = parseRes.currentUser;
            }

            return {isLoggedIn, authorizedUser};
        } catch (e) {
            console.log("Ошибка метода userLogin:", e);
            throw(e);
        }
    }

    async userLogout() {
        try {
            const url = ROUTES.logout.url;

            const response = await fetch(url, {
                method: GET_METHOD
            });

            const  res = await response;

            if (res.status === 404) {
                return 404;
            }

            return 401;
        } catch (e) {
            console.log("Ошибка метода userLogout:", e);
            throw(e);
        }
    }

    async userSignup(name, username, email, password) {
        try {
            const url = ROUTES.signup.url;

            const response = await fetch(url, {
                method: POST_METHOD,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, username, email, password}),
            });

            const res = await response;
            const parseRes = await res.json();

            let status = res.status;
            let registeredUser;

            if (status === 201) {
                registeredUser = parseRes.currentUser;
            }

            return {status, registeredUser};
        } catch (e) {
            console.log("Ошибка метода userSignup:", e);
            throw(e);
        }
    }
}