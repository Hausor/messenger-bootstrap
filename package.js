Package.describe({
  name: 'hausor:messenger-bootstrap',
  version: '0.0.1',
  summary: 'Alertify wrapper',
  git: 'https://github.com/Hausor/messenger-bootstrap',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use("coffeescript")
  api.use("reactive-var")
  api.use("ovcharik:alertify@0.3.11")
  api.addFiles('exports.js');
  api.addFiles('messenger.coffee');
  api.export("Messenger")
});

Package.onTest(function(api) {
  api.use(['mike:mocha-package@0.5.7', 'practicalmeteor:chai', 'practicalmeteor:sinon']);
  api.use('hausor:messenger-bootstrap');
});
