Journal.Views.PostIndexView = Backbone.View.extend({
  events: {
    "click button.new-post": "renderNewPost",
    "click button.delete-post": "deletePost"
  },

  initialize: function(){
    this.collection = new Journal.Collections.Posts();
    this.listenTo(this.collection, "sync add remove", this.render);
  },

  refresh: function(){
    this.collection.fetch({
      //success callback
      // success: this.render()
    });
  },

  render: function(){
    this.$el.html(JST['index']());
    this.collection.each(function(post){
      this.$el.find('ul.posts').append(JST['post_index_item']({post: post}));
    }.bind(this))

  },

  renderNewPost: function(){
    var formView = new Journal.Views.NewPostView({collection: this.collection});
    formView.render();
    $("div.content").html(formView.$el);
  },


  deletePost: function (event) {
    event.preventDefault();
    var postId = $(event.currentTarget).data("post-id");
    var post = this.collection.get(postId);
    post.destroy();
  }

})
