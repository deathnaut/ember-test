import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addName: function(){
      var name = this.get('name');

      // create new name
      var newName = this.store.createRecord('name', {
        name: name
      });

      // save to database
      newName.save();

      // clear form
      this.setProperties({
        name: ''
      });
    }
  }
});
