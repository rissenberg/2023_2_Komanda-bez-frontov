(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['authorMenu'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"form-author-menu\">\n    <button class=\"primary-button\" id=\"author-menu-check-button\">\n        <span class=\"material-symbols-outlined\">description</span>\n        <label>Просмотр</label>\n    </button>\n    <button class=\"primary-button\" id=\"author-menu-update-button\">\n        <span class=\"material-symbols-outlined\">edit_square</span>\n        <label>Изменить</label>\n    </button>\n    <button class=\"primary-button\" id=\"author-menu-results-button\">\n        <span class=\"material-symbols-outlined\">query_stats</span>\n        <label>Результаты</label>\n    </button>\n    <button class=\"primary-button\" id=\"author-menu-link-button\">\n        <span class=\"material-symbols-outlined\">share</span>\n        <label>Поделиться</label>\n    </button>\n    <span id=\"author-menu-close-button\" class=\"material-symbols-outlined\">menu_open</span>\n</div>\n\n\n";
},"useData":true});
})();