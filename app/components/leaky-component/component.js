import Ember from 'ember';

export default Ember.Component.extend({

  product: {
    id: 5,
  },

  // creates an array from 0..500.  Useful for making the component bigger and waste more memory.
  wasteArray: Ember.computed(function() {
    return Array.apply(null, {length: 500}).map(Function.call, Math.random);
  }),
});
