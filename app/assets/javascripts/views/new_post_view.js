Journal.Views.NewPostView = Backbone.View.extend({
  render: function () {
    var form = JST["new_post_form"]();
    this.$el.html(form);
  },

  events: {
    "submit form.new-post-form": "createPost"
  },

  createPost: function(event){
    event.preventDefault();
    var newPost = new Journal.Models.Post();
    var $form = $(event.currentTarget);
    var data = $form.serializeJSON().post;
    newPost.save(data, {
      success: function(){
        this.collection.add(newPost);
        Backbone.history.navigate("posts/" + newPost.id, {trigger: true});
      }.bind(this)
    })
  }
});
