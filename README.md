askconfig
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![bower version][bd_bower_badge_url]][bd_repo_url]

[bd_repo_url]: https://github.com/okunishinishi/node-askconfig
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-askconfig
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-askconfig.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-askconfig/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-askconfig
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-askconfig.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-askconfig.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-askconfig
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-askconfig.svg
[bd_npm_url]: http://www.npmjs.org/package/askconfig
[bd_npm_shield_url]: http://img.shields.io/npm/v/askconfig.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/askconfig.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Node.js module to ask for configuration via interactive shell

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>
Installation
-----

```bash
npm install askconfig --save
```
<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>
Usage
-----

```javascript
#!/usr/bin/env node

var askconfig = require('askconfig');

askconfig({
    name: 'default-name',
    description: ''
}, function (err, result) {
    if (err) {
        console.error(err);
        process.exit(1);
    } else {
        console.log("Result:", result);
        process.exit(0);
    }
});


````

<!-- Section from "doc/readme/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-askconfig/blob/master/LICENSE).

<!-- LICENSE End -->


