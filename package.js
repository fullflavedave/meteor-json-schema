Package.describe({
  name: 'fullflavedave:json-schema',
  version: '0.0.2',
  summary: 'Use JSONSchema definitions with collection2 and autoform',
  git: 'https://github.com/fullflavedave/meteor-json-schema.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('aldeed:simple-schema@1.3.2');
  api.addFiles('json-schema.js');
  api.export(['JSONSchema'], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('aldeed:simple-schema@1.3.2');
  api.use('fullflavedave:json-schema');
  api.addFiles('json-schema-tests.js', ['client', 'server']);
});
