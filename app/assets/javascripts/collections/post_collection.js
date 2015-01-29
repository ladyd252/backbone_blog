window.Journal = window.Journal || {};
Journal.Collections.Posts = Backbone.Collection.extend ({
  url: "api/posts",
  model: Journal.Models.Post
})
