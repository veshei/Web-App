import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // Get firstName from route params
    const escapedName = encodeURIComponent(params.name);

    // Send request to server, get JSON back, and return as model object
    return Ember.$.getJSON(`/api/greeting?name=${escapedName}`);
  }
});
