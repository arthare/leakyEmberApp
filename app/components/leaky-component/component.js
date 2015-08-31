import Ember from 'ember';

export default Ember.Component.extend({

  // creates an array from 0..500
  wasteArray: Ember.computed(function() {
    return Array.apply(null, {length: 500}).map(Function.call, Math.random);
  }),
});
