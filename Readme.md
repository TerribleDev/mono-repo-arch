This is a proposed dir structure of multiple server apps, and multiple client apps in a single mono reposiory.



```
- client front-end mono-repo
- server server-side mono-repo
```


Both folders are yarn workspace based mono-repos. With the following sub-directory structures

## Server folder

 `- app` a flat directory of individual express applications that **never depend on each other**. Each directory contains a build with an output that will be an express application

 `- lib` a flat directory with *libraries*. These are packages which do not contain builds, but always contain linting. These are files which can be used by multiple apps. Library packages may include utilities to work with internationalization, core types that are shared between applications. These should be small in scope and thus easy to create. Common functionality such as `utils` or `domain` are the prefix of the package name.


 ## Client folder

 Very similar structure here.

 `- app` a flat directory of webpack built front-ends

 `- lib` a flat directory with packages used to provide core functionality and types to front-end applications


 ## Where are the builds defined?

 What is available to build across the mono repo are in the scripts section of the root package jsons for [client](./client/package.json) and [server](./server/package.json). When you run `lint` or `build` from the root of those yarn workspaces, lerna will sequence the builds based on dependencies.

 ## What this example is missing

 * Multiple folders for both apps and libs
 * Actual linting that works
 * Optimizations for webpack such as a centralized babel cache, and centralized build cache
 * The ability to share files isomorphic across the client and server repos (this would be acomplished using lerna to publish versions of packages)