//window journal namespace
window.Journal = window.Journal || {};

Journal.Models.Post = Backbone.Model.extend({
  urlRoot: "api/posts"
})
