Journal.Views.PostShowView = Backbone.View.extend({
  events: {
    "dblclick h1.title" : "editTitle",
    "dblclick p.body" : "editBody",
    "blur input.title-input": "saveTitle",
    "blur textarea.body-input": "saveBody"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function(){

    this.$el.html(JST["show_post_template"]({post: this.model}));
    return this;
  },

  editTitle: function(){
    var inputBox = JST["edit_title_form"]({post: this.model});
    this.$el.find("div.title").html(inputBox);
  },
  saveTitle: function () {
    var title = $("input.title-input").val();
    this.model.set("title", title);
    this.model.save();
  },

  editBody: function(){
    var inputBox = JST["edit_body_form"]({post: this.model});
    this.$el.find("div.body").html(inputBox);
  },
  saveBody: function () {
    var body = $("textarea.body-input").val();
    this.model.set("body", body);
    this.model.save();
  }

})
