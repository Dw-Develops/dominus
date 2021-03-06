Template.control.helpers({
  route: function() {
    var path = SimpleRouter.path.get();
    var pathArray = path.split('/');
    return 'control_'+pathArray[2];
  },

  showMenu: function() {
    let user = Meteor.users.findOne(Meteor.userId(), {fields: {admin:1, moderator:1}});
    if (user) {
      if (user.admin || user.moderator) {
        return true;
      }
    }
  }
})


Template.control.onRendered(function() {
    setBackground()
    window.onresize = function() {
      setBackground()
    }
})


var setBackground = function() {
  document.body.style.backgroundColor = '#222';
  document.body.style.backgroundImage = 'none';
}
