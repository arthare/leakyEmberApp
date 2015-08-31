import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    next: function() {
      this.transitionTo('route2');
    }
  }
});
