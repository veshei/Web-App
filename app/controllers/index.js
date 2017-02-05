import Ember from 'ember';

export default Ember.Controller.extend({
  name: null,

  actions: {
    sayHello() {
      this.transitionToRoute('greeting', this.get('name'));
    }
  }
});
