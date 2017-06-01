# DotComIt ColdFusion to Angular Project

This is a transform function so that we can easily post values from Angular 2 or later to ColdFusion.


## Install and Setup

To install the node dependencies run this from the main directory:

```
npm install
```

This will install all the required dependencies via NodeJS.

Then, build using:

```
gulp build
```

The app's files will be in the build directory.


## Todo List

* Turn Transform function into ColdFusionHTTPModule
* Make Date mask / local easily modifable

## Known Issues

* All date/time fields are changed to yyyy-mm-dd with the time stamp stripped out.
