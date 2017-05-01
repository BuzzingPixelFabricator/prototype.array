/*----------------------------------------------------------------------------*\
    # Copyright 2017, BuzzingPixel, LLC

    # This program is free software: you can redistribute it and/or modify
    # it under the terms of the Apache License 2.0.
    # http://www.apache.org/licenses/LICENSE-2.0
\*----------------------------------------------------------------------------*/

Array.prototype.filterUnique = function() {
    'use strict';

    var arr = [];
    var orig = this;

    orig.forEach(function(a, i) {
        if (arr.indexOf(a) < 0) {
            arr.push(a);
        } else {
            orig.splice(i, 1);
        }
    });

    return orig;
};

Array.prototype.getUnique = function() {
    'use strict';

    var arr = [];

    this.forEach(function(a) {
        if (arr.indexOf(a) < 0) {
            arr.push(a);
        }
    });

    return arr;
};

Array.prototype.pushUnique = function() {
    'use strict';

    for (var i = 0; i < arguments.length; ++i) {
        if (this.indexOf(arguments[i]) < 0) {
            this.push(arguments[i]);
        }
    }

    return this;
};
