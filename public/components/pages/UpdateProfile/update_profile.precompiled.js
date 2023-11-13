(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['update_profile'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"update-profile\">\n    <div class=\"update-profile_main-container\">\n        <div class=\"update-profile_main-container_img-container\">\n            <img class=\"update-profile_main-container__picture\" id=\"update-profile-page-picture\" src=\"../../../resources/images/profile_default.png\" alt=\"\">\n            <div class=\"update-profile_img-container_avatar-container\">\n                <label id=\"update-profile-avatar-button\">\n                    <input class=\"update-profile_img-container_avatar-container__input\" type=\"file\" id=\"avatar\" name=\"avatar\" accept=\"image/png, image/jpeg, image/jpg\">\n                    <a>Загрузить</a>\n                </label>\n                <a id=\"update-profile-avatar-cancel\">❌</a>\n            </div>\n        </div>\n        <div class=\"update-profile_main-container_name-container\">\n            <div>\n                <label>Имя</label>\n                <input class=\"update-form__title-input\" id=\"update-profile_name\" placeholder=\"Имя\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"User") : depth0)) != null ? lookupProperty(stack1,"first_name") : stack1), depth0))
    + "\">\n            </div>\n            <div>\n                <label>Username</label>\n                <input class=\"update-form__title-input\" id=\"update-profile_username\" placeholder=\"Username\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"User") : depth0)) != null ? lookupProperty(stack1,"username") : stack1), depth0))
    + "\">\n            </div>\n            <div>\n                <label>Почта</label>\n                <input class=\"update-form__title-input\" id=\"update-profile_email\" placeholder=\"Почта\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"User") : depth0)) != null ? lookupProperty(stack1,"email") : stack1), depth0))
    + "\">\n            </div>\n            <div>\n                <label>Старый пароль</label>\n                <input class=\"update-form__title-input\" id=\"update-profile_old-password\" placeholder=\"Старый пароль\">\n            </div>\n            <div>\n                <label>Новый пароль</label>\n                <input class=\"update-form__title-input\" id=\"update-profile_new-password\" placeholder=\"Новый пароль\">\n            </div>\n            <div>\n                <label>Повторите пароль</label>\n                <input class=\"update-form__title-input\" id=\"update-profile_repeat-password\" placeholder=\"Повторите пароль\">\n            </div>\n        </div>\n    </div>\n    <div class=\"update-profile_button-container\">\n        <button class=\"secondary-button\" id=\"update-profile-save-button\">Сохранить</button>\n        <button class=\"primary-button\" id=\"update-profile-cancel-button\">Отмена</button>\n    </div>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"profile-title\"><h3>Редактирование профиля</h3></div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"User") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":47,"column":7}}})) != null ? stack1 : "");
},"useData":true});
})();