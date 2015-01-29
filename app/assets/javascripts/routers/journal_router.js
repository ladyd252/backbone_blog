//window journal namespace
window.Journal = window.Journal || {};

Journal.Routers.PostRouter = Backbone.Router.extend({
  routes: {
    "posts/new" : "createPost",
    "posts/:id" : "showPost"
  },

  initialize: function(){
    this.renderSidebar();
  },

  renderSidebar: function() {
    this.indexView = new Journal.Views.PostIndexView();
    this.indexView.refresh();
    $("div.sidebar").html(this.indexView.$el);

    //append view to root html
    //refresh/fetch data
  },

  showPost: function(id){
    this.model = new Journal.Models.Post({id: id});
    var showView = new Journal.Views.PostShowView({model: this.model});
    this.model.fetch();
    this._swapView(showView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    $('div.content').html(view.render().$el);
  }


});
