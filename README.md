# Taking Jasmine where it didn't really want to go...

This is a companion repo to my Medium post: https://medium.com/@millard3/going-off-road-with-jasmine-and-node-js-testing-ac821fa8218a

To use this repo, clone it locally then run `npm install` to gather Jasmine testing framework and its dependencies. 
Of course, you need to have node.js installed (v6.10.2 was used, though this is likely to work with many other versions).

After that you should be able to immediately run `npm test` to run the small collection of tests defined.

## Motivation

As mentioned in the article, a modern approach is to keep your tests and the code they care for in the same location 
(rather than keep all the code in one directory tree and all of the tests in another). Jasmine (and some other test 
frameworks for node.js) doesn't want to work that way.

What is demonstrated here is a way to keep your unit tests with your units -- so, for example, `add.js` and `add.spec.js` 
are in the same directory. This makes it far easier to locate and identify the tests and code. _Optimizing for humans._ Tests
that are more end-to-end (e2e) or integration-oriented, can be kept elsewhere (in this example, they are in the standard Jasmine 
/spec folder, but they could be anywhere -- just update `spec_dir` in your `jasmine.json` file).

In this example, there is a /math folder in /app that has some simplistic functions to do addition and subtraction and each has
one method and at least one test for the method. A more "integration" like test is in /spec that uses both the addition and 
subtraction functions. A bit contrived, no doubt, but it's about the pattern, not the code.

If you look in `package.json`, you'll see that the standard `npm test` will run all the tests. Additional scripts and 
corresponding `jasmine.json` configuration files are configured so you can `npm run test-e2e` or `npm run test-units` to run
one or the other as needed. Since you can tell Jasmine where to look for the configuration file, you could do this in some 
other ways quite easily -- for example, have a /test/config directory for the Jasmine config files and an /e2e directory for 
broader tests and skip the /spec directory completely.

Comments, suggestions and issues welcome.
