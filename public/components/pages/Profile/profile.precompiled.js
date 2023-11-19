(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['profile'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"profile-title\"><h3>Профиль</h3></div>\n<div class=\"profile\">\n    <div class=\"profile_main-container\">\n        <img class=\"profile_main-container__picture\" id=\"profile-page-picture\" src=\"../../../resources/images/profile_default.png\" alt=\"\">\n        <div class=\"profile_main-container_name-container\">\n            <h3 id=\"profile-page-name\">Имя Фамилия</h3>\n            <a id=\"profile-page-username\">username</a><br>\n            <a id=\"profile-page-email\">email@gmail.com</a>\n        </div>\n    </div>\n    <div class=\"profile_button-container\">\n        <button class=\"secondary-button\" id=\"profile-settings-button\">Редактировать</button>\n        <button class=\"primary-button\" id=\"profile-forms-button\">Мои опросы</button>\n<!--        <button class=\"primary-button\" id=\"profile-history-button\">История прохождения</button>-->\n    </div>\n</div>\n";
},"useData":true});
})();