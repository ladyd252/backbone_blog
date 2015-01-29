window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new Journal.Routers.PostRouter();
    Backbone.history.start();

  }
};

$(document).ready(function(){
  Journal.initialize();

});
