Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/project/a.ts]
export const a = 10;const aLocal = 10;

//// [/src/project/b.ts]
export const b = 10;const bLocal = 10;

//// [/src/project/c.ts]
import { a } from "./a";export const c = a;

//// [/src/project/d.ts]
import { b } from "./b";export const d = b;

//// [/src/project/tsconfig.json]
{"compilerOptions":{"incremental":true}}



Output::
/lib/tsc --p /src/project
exitCode:: ExitStatus.Success
Program root files: ["/src/project/a.ts","/src/project/b.ts","/src/project/c.ts","/src/project/d.ts"]
Program options: {"incremental":true,"project":"/src/project","configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project/a.ts
/src/project/b.ts
/src/project/c.ts
/src/project/d.ts

Semantic diagnostics in builder refreshed for::
/lib/lib.d.ts
/src/project/a.ts
/src/project/b.ts
/src/project/c.ts
/src/project/d.ts

Shape signatures in builder refreshed for::
/lib/lib.d.ts (used version)
/src/project/a.ts (used version)
/src/project/b.ts (used version)
/src/project/c.ts (used version)
/src/project/d.ts (used version)


//// [/src/project/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = 10;
var aLocal = 10;


//// [/src/project/b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
exports.b = 10;
var bLocal = 10;


//// [/src/project/c.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.c = void 0;
var a_1 = require("./a");
exports.c = a_1.a;


//// [/src/project/d.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.d = void 0;
var b_1 = require("./b");
exports.d = b_1.b;


//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./a.ts","./b.ts","./c.ts","./d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-18487752940-export const a = 10;const aLocal = 10;","-6189287562-export const b = 10;const bLocal = 10;","3248317647-import { a } from \"./a\";export const c = a;","-19615769517-import { b } from \"./b\";export const d = b;"],"fileIdsList":[[2],[3]],"referencedMap":[[4,1],[5,2]],"exportedModulesMap":[[4,1],[5,2]],"semanticDiagnosticsPerFile":[1,2,3,4,5]},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ],
    "fileNamesList": [
      [
        "./a.ts"
      ],
      [
        "./b.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "version": "-18487752940-export const a = 10;const aLocal = 10;",
        "signature": "-18487752940-export const a = 10;const aLocal = 10;"
      },
      "./b.ts": {
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "signature": "-6189287562-export const b = 10;const bLocal = 10;"
      },
      "./c.ts": {
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "signature": "3248317647-import { a } from \"./a\";export const c = a;"
      },
      "./d.ts": {
        "version": "-19615769517-import { b } from \"./b\";export const d = b;",
        "signature": "-19615769517-import { b } from \"./b\";export const d = b;"
      }
    },
    "referencedMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
    "exportedModulesMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 960
}



Change:: with sourceMap
Input::


Output::
/lib/tsc --p /src/project --sourceMap
exitCode:: ExitStatus.Success
Program root files: ["/src/project/a.ts","/src/project/b.ts","/src/project/c.ts","/src/project/d.ts"]
Program options: {"incremental":true,"project":"/src/project","sourceMap":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project/a.ts
/src/project/b.ts
/src/project/c.ts
/src/project/d.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::


//// [/src/project/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = 10;
var aLocal = 10;
//# sourceMappingURL=a.js.map

//// [/src/project/a.js.map]
{"version":3,"file":"a.js","sourceRoot":"","sources":["a.ts"],"names":[],"mappings":";;;AAAa,QAAA,CAAC,GAAG,EAAE,CAAC;AAAA,IAAM,MAAM,GAAG,EAAE,CAAC"}

//// [/src/project/b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
exports.b = 10;
var bLocal = 10;
//# sourceMappingURL=b.js.map

//// [/src/project/b.js.map]
{"version":3,"file":"b.js","sourceRoot":"","sources":["b.ts"],"names":[],"mappings":";;;AAAa,QAAA,CAAC,GAAG,EAAE,CAAC;AAAA,IAAM,MAAM,GAAG,EAAE,CAAC"}

//// [/src/project/c.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.c = void 0;
var a_1 = require("./a");
exports.c = a_1.a;
//# sourceMappingURL=c.js.map

//// [/src/project/c.js.map]
{"version":3,"file":"c.js","sourceRoot":"","sources":["c.ts"],"names":[],"mappings":";;;AAAA,yBAAwB;AAAa,QAAA,CAAC,GAAG,KAAC,CAAC"}

//// [/src/project/d.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.d = void 0;
var b_1 = require("./b");
exports.d = b_1.b;
//# sourceMappingURL=d.js.map

//// [/src/project/d.js.map]
{"version":3,"file":"d.js","sourceRoot":"","sources":["d.ts"],"names":[],"mappings":";;;AAAA,yBAAwB;AAAa,QAAA,CAAC,GAAG,KAAC,CAAC"}

//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./a.ts","./b.ts","./c.ts","./d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-18487752940-export const a = 10;const aLocal = 10;","-6189287562-export const b = 10;const bLocal = 10;","3248317647-import { a } from \"./a\";export const c = a;","-19615769517-import { b } from \"./b\";export const d = b;"],"options":{"sourceMap":true},"fileIdsList":[[2],[3]],"referencedMap":[[4,1],[5,2]],"exportedModulesMap":[[4,1],[5,2]],"semanticDiagnosticsPerFile":[1,2,3,4,5]},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ],
    "fileNamesList": [
      [
        "./a.ts"
      ],
      [
        "./b.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "version": "-18487752940-export const a = 10;const aLocal = 10;",
        "signature": "-18487752940-export const a = 10;const aLocal = 10;"
      },
      "./b.ts": {
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "signature": "-6189287562-export const b = 10;const bLocal = 10;"
      },
      "./c.ts": {
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "signature": "3248317647-import { a } from \"./a\";export const c = a;"
      },
      "./d.ts": {
        "version": "-19615769517-import { b } from \"./b\";export const d = b;",
        "signature": "-19615769517-import { b } from \"./b\";export const d = b;"
      }
    },
    "options": {
      "sourceMap": true
    },
    "referencedMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
    "exportedModulesMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 989
}



Change:: should re-emit only js so they dont contain sourcemap
Input::


Output::
/lib/tsc --p /src/project
exitCode:: ExitStatus.Success
Program root files: ["/src/project/a.ts","/src/project/b.ts","/src/project/c.ts","/src/project/d.ts"]
Program options: {"incremental":true,"project":"/src/project","configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project/a.ts
/src/project/b.ts
/src/project/c.ts
/src/project/d.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::


//// [/src/project/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = 10;
var aLocal = 10;


//// [/src/project/b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
exports.b = 10;
var bLocal = 10;


//// [/src/project/c.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.c = void 0;
var a_1 = require("./a");
exports.c = a_1.a;


//// [/src/project/d.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.d = void 0;
var b_1 = require("./b");
exports.d = b_1.b;


//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./a.ts","./b.ts","./c.ts","./d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-18487752940-export const a = 10;const aLocal = 10;","-6189287562-export const b = 10;const bLocal = 10;","3248317647-import { a } from \"./a\";export const c = a;","-19615769517-import { b } from \"./b\";export const d = b;"],"fileIdsList":[[2],[3]],"referencedMap":[[4,1],[5,2]],"exportedModulesMap":[[4,1],[5,2]],"semanticDiagnosticsPerFile":[1,2,3,4,5]},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ],
    "fileNamesList": [
      [
        "./a.ts"
      ],
      [
        "./b.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "version": "-18487752940-export const a = 10;const aLocal = 10;",
        "signature": "-18487752940-export const a = 10;const aLocal = 10;"
      },
      "./b.ts": {
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "signature": "-6189287562-export const b = 10;const bLocal = 10;"
      },
      "./c.ts": {
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "signature": "3248317647-import { a } from \"./a\";export const c = a;"
      },
      "./d.ts": {
        "version": "-19615769517-import { b } from \"./b\";export const d = b;",
        "signature": "-19615769517-import { b } from \"./b\";export const d = b;"
      }
    },
    "referencedMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
    "exportedModulesMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 960
}



Change:: with declaration, emit Dts and should not emit js
Input::


Output::
/lib/tsc --p /src/project --declaration
exitCode:: ExitStatus.Success
Program root files: ["/src/project/a.ts","/src/project/b.ts","/src/project/c.ts","/src/project/d.ts"]
Program options: {"incremental":true,"project":"/src/project","declaration":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project/a.ts
/src/project/b.ts
/src/project/c.ts
/src/project/d.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::


//// [/src/project/a.d.ts]
export declare const a = 10;


//// [/src/project/b.d.ts]
export declare const b = 10;


//// [/src/project/c.d.ts]
export declare const c = 10;


//// [/src/project/d.d.ts]
export declare const d = 10;


//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./a.ts","./b.ts","./c.ts","./d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-18487752940-export const a = 10;const aLocal = 10;","signature":"-3762229137-export declare const a = 10;\r\n"},{"version":"-6189287562-export const b = 10;const bLocal = 10;","signature":"-1807916688-export declare const b = 10;\r\n"},{"version":"3248317647-import { a } from \"./a\";export const c = a;","signature":"-4148571535-export declare const c = 10;\r\n"},{"version":"-19615769517-import { b } from \"./b\";export const d = b;","signature":"-6489226382-export declare const d = 10;\r\n"}],"options":{"declaration":true},"fileIdsList":[[2],[3]],"referencedMap":[[4,1],[5,2]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3,4,5]},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ],
    "fileNamesList": [
      [
        "./a.ts"
      ],
      [
        "./b.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "original": {
          "version": "-18487752940-export const a = 10;const aLocal = 10;",
          "signature": "-3762229137-export declare const a = 10;\r\n"
        },
        "version": "-18487752940-export const a = 10;const aLocal = 10;",
        "signature": "-3762229137-export declare const a = 10;\r\n"
      },
      "./b.ts": {
        "original": {
          "version": "-6189287562-export const b = 10;const bLocal = 10;",
          "signature": "-1807916688-export declare const b = 10;\r\n"
        },
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "signature": "-1807916688-export declare const b = 10;\r\n"
      },
      "./c.ts": {
        "original": {
          "version": "3248317647-import { a } from \"./a\";export const c = a;",
          "signature": "-4148571535-export declare const c = 10;\r\n"
        },
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "signature": "-4148571535-export declare const c = 10;\r\n"
      },
      "./d.ts": {
        "original": {
          "version": "-19615769517-import { b } from \"./b\";export const d = b;",
          "signature": "-6489226382-export declare const d = 10;\r\n"
        },
        "version": "-19615769517-import { b } from \"./b\";export const d = b;",
        "signature": "-6489226382-export declare const d = 10;\r\n"
      }
    },
    "options": {
      "declaration": true
    },
    "referencedMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1264
}



Change:: with declaration and declarationMap
Input::


Output::
/lib/tsc --p /src/project --declaration --declarationMap
exitCode:: ExitStatus.Success
Program root files: ["/src/project/a.ts","/src/project/b.ts","/src/project/c.ts","/src/project/d.ts"]
Program options: {"incremental":true,"project":"/src/project","declaration":true,"declarationMap":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project/a.ts
/src/project/b.ts
/src/project/c.ts
/src/project/d.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::


//// [/src/project/a.d.ts]
export declare const a = 10;
//# sourceMappingURL=a.d.ts.map

//// [/src/project/a.d.ts.map]
{"version":3,"file":"a.d.ts","sourceRoot":"","sources":["a.ts"],"names":[],"mappings":"AAAA,eAAO,MAAM,CAAC,KAAK,CAAC"}

//// [/src/project/b.d.ts]
export declare const b = 10;
//# sourceMappingURL=b.d.ts.map

//// [/src/project/b.d.ts.map]
{"version":3,"file":"b.d.ts","sourceRoot":"","sources":["b.ts"],"names":[],"mappings":"AAAA,eAAO,MAAM,CAAC,KAAK,CAAC"}

//// [/src/project/c.d.ts]
export declare const c = 10;
//# sourceMappingURL=c.d.ts.map

//// [/src/project/c.d.ts.map]
{"version":3,"file":"c.d.ts","sourceRoot":"","sources":["c.ts"],"names":[],"mappings":"AAAwB,eAAO,MAAM,CAAC,KAAI,CAAC"}

//// [/src/project/d.d.ts]
export declare const d = 10;
//# sourceMappingURL=d.d.ts.map

//// [/src/project/d.d.ts.map]
{"version":3,"file":"d.d.ts","sourceRoot":"","sources":["d.ts"],"names":[],"mappings":"AAAwB,eAAO,MAAM,CAAC,KAAI,CAAC"}

//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./a.ts","./b.ts","./c.ts","./d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-18487752940-export const a = 10;const aLocal = 10;","signature":"-3762229137-export declare const a = 10;\r\n"},{"version":"-6189287562-export const b = 10;const bLocal = 10;","signature":"-1807916688-export declare const b = 10;\r\n"},{"version":"3248317647-import { a } from \"./a\";export const c = a;","signature":"-4148571535-export declare const c = 10;\r\n"},{"version":"-19615769517-import { b } from \"./b\";export const d = b;","signature":"-6489226382-export declare const d = 10;\r\n"}],"options":{"declaration":true,"declarationMap":true},"fileIdsList":[[2],[3]],"referencedMap":[[4,1],[5,2]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3,4,5]},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ],
    "fileNamesList": [
      [
        "./a.ts"
      ],
      [
        "./b.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "original": {
          "version": "-18487752940-export const a = 10;const aLocal = 10;",
          "signature": "-3762229137-export declare const a = 10;\r\n"
        },
        "version": "-18487752940-export const a = 10;const aLocal = 10;",
        "signature": "-3762229137-export declare const a = 10;\r\n"
      },
      "./b.ts": {
        "original": {
          "version": "-6189287562-export const b = 10;const bLocal = 10;",
          "signature": "-1807916688-export declare const b = 10;\r\n"
        },
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "signature": "-1807916688-export declare const b = 10;\r\n"
      },
      "./c.ts": {
        "original": {
          "version": "3248317647-import { a } from \"./a\";export const c = a;",
          "signature": "-4148571535-export declare const c = 10;\r\n"
        },
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "signature": "-4148571535-export declare const c = 10;\r\n"
      },
      "./d.ts": {
        "original": {
          "version": "-19615769517-import { b } from \"./b\";export const d = b;",
          "signature": "-6489226382-export declare const d = 10;\r\n"
        },
        "version": "-19615769517-import { b } from \"./b\";export const d = b;",
        "signature": "-6489226382-export declare const d = 10;\r\n"
      }
    },
    "options": {
      "declaration": true,
      "declarationMap": true
    },
    "referencedMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1286
}



Change:: no-change-run
Input::


Output::
/lib/tsc --p /src/project
exitCode:: ExitStatus.Success
Program root files: ["/src/project/a.ts","/src/project/b.ts","/src/project/c.ts","/src/project/d.ts"]
Program options: {"incremental":true,"project":"/src/project","configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project/a.ts
/src/project/b.ts
/src/project/c.ts
/src/project/d.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::




Change:: local change
Input::
//// [/src/project/a.ts]
export const a = 10;const aLocal = 100;



Output::
/lib/tsc --p /src/project
exitCode:: ExitStatus.Success
Program root files: ["/src/project/a.ts","/src/project/b.ts","/src/project/c.ts","/src/project/d.ts"]
Program options: {"incremental":true,"project":"/src/project","configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project/a.ts
/src/project/b.ts
/src/project/c.ts
/src/project/d.ts

Semantic diagnostics in builder refreshed for::
/src/project/a.ts

Shape signatures in builder refreshed for::
/src/project/a.ts (computed .d.ts)


//// [/src/project/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = 10;
var aLocal = 100;


//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./a.ts","./b.ts","./c.ts","./d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-17390360476-export const a = 10;const aLocal = 100;","signature":"-3762229137-export declare const a = 10;\r\n"},{"version":"-6189287562-export const b = 10;const bLocal = 10;","signature":"-1807916688-export declare const b = 10;\r\n"},{"version":"3248317647-import { a } from \"./a\";export const c = a;","signature":"-4148571535-export declare const c = 10;\r\n"},{"version":"-19615769517-import { b } from \"./b\";export const d = b;","signature":"-6489226382-export declare const d = 10;\r\n"}],"fileIdsList":[[2],[3]],"referencedMap":[[4,1],[5,2]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3,4,5]},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ],
    "fileNamesList": [
      [
        "./a.ts"
      ],
      [
        "./b.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "original": {
          "version": "-17390360476-export const a = 10;const aLocal = 100;",
          "signature": "-3762229137-export declare const a = 10;\r\n"
        },
        "version": "-17390360476-export const a = 10;const aLocal = 100;",
        "signature": "-3762229137-export declare const a = 10;\r\n"
      },
      "./b.ts": {
        "original": {
          "version": "-6189287562-export const b = 10;const bLocal = 10;",
          "signature": "-1807916688-export declare const b = 10;\r\n"
        },
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "signature": "-1807916688-export declare const b = 10;\r\n"
      },
      "./c.ts": {
        "original": {
          "version": "3248317647-import { a } from \"./a\";export const c = a;",
          "signature": "-4148571535-export declare const c = 10;\r\n"
        },
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "signature": "-4148571535-export declare const c = 10;\r\n"
      },
      "./d.ts": {
        "original": {
          "version": "-19615769517-import { b } from \"./b\";export const d = b;",
          "signature": "-6489226382-export declare const d = 10;\r\n"
        },
        "version": "-19615769517-import { b } from \"./b\";export const d = b;",
        "signature": "-6489226382-export declare const d = 10;\r\n"
      }
    },
    "referencedMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1234
}



Change:: with declaration and declarationMap
Input::


Output::
/lib/tsc --p /src/project --declaration --declarationMap
exitCode:: ExitStatus.Success
Program root files: ["/src/project/a.ts","/src/project/b.ts","/src/project/c.ts","/src/project/d.ts"]
Program options: {"incremental":true,"project":"/src/project","declaration":true,"declarationMap":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project/a.ts
/src/project/b.ts
/src/project/c.ts
/src/project/d.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::


//// [/src/project/a.d.ts] file written with same contents
//// [/src/project/a.d.ts.map] file written with same contents
//// [/src/project/b.d.ts] file written with same contents
//// [/src/project/b.d.ts.map] file written with same contents
//// [/src/project/c.d.ts] file written with same contents
//// [/src/project/c.d.ts.map] file written with same contents
//// [/src/project/d.d.ts] file written with same contents
//// [/src/project/d.d.ts.map] file written with same contents
//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./a.ts","./b.ts","./c.ts","./d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-17390360476-export const a = 10;const aLocal = 100;","signature":"-3762229137-export declare const a = 10;\r\n"},{"version":"-6189287562-export const b = 10;const bLocal = 10;","signature":"-1807916688-export declare const b = 10;\r\n"},{"version":"3248317647-import { a } from \"./a\";export const c = a;","signature":"-4148571535-export declare const c = 10;\r\n"},{"version":"-19615769517-import { b } from \"./b\";export const d = b;","signature":"-6489226382-export declare const d = 10;\r\n"}],"options":{"declaration":true,"declarationMap":true},"fileIdsList":[[2],[3]],"referencedMap":[[4,1],[5,2]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3,4,5]},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ],
    "fileNamesList": [
      [
        "./a.ts"
      ],
      [
        "./b.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "original": {
          "version": "-17390360476-export const a = 10;const aLocal = 100;",
          "signature": "-3762229137-export declare const a = 10;\r\n"
        },
        "version": "-17390360476-export const a = 10;const aLocal = 100;",
        "signature": "-3762229137-export declare const a = 10;\r\n"
      },
      "./b.ts": {
        "original": {
          "version": "-6189287562-export const b = 10;const bLocal = 10;",
          "signature": "-1807916688-export declare const b = 10;\r\n"
        },
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "signature": "-1807916688-export declare const b = 10;\r\n"
      },
      "./c.ts": {
        "original": {
          "version": "3248317647-import { a } from \"./a\";export const c = a;",
          "signature": "-4148571535-export declare const c = 10;\r\n"
        },
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "signature": "-4148571535-export declare const c = 10;\r\n"
      },
      "./d.ts": {
        "original": {
          "version": "-19615769517-import { b } from \"./b\";export const d = b;",
          "signature": "-6489226382-export declare const d = 10;\r\n"
        },
        "version": "-19615769517-import { b } from \"./b\";export const d = b;",
        "signature": "-6489226382-export declare const d = 10;\r\n"
      }
    },
    "options": {
      "declaration": true,
      "declarationMap": true
    },
    "referencedMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1287
}



Change:: no-change-run
Input::


Output::
/lib/tsc --p /src/project
exitCode:: ExitStatus.Success
Program root files: ["/src/project/a.ts","/src/project/b.ts","/src/project/c.ts","/src/project/d.ts"]
Program options: {"incremental":true,"project":"/src/project","configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project/a.ts
/src/project/b.ts
/src/project/c.ts
/src/project/d.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::




Change:: with inlineSourceMap
Input::


Output::
/lib/tsc --p /src/project --inlineSourceMap
exitCode:: ExitStatus.Success
Program root files: ["/src/project/a.ts","/src/project/b.ts","/src/project/c.ts","/src/project/d.ts"]
Program options: {"incremental":true,"project":"/src/project","inlineSourceMap":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project/a.ts
/src/project/b.ts
/src/project/c.ts
/src/project/d.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::


//// [/src/project/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = 10;
var aLocal = 100;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQUEsSUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDIn0=

//// [/src/project/b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
exports.b = 10;
var bLocal = 10;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQUEsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDIn0=

//// [/src/project/c.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.c = void 0;
var a_1 = require("./a");
exports.c = a_1.a;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUJBQXdCO0FBQWEsUUFBQSxDQUFDLEdBQUcsS0FBQyxDQUFDIn0=

//// [/src/project/d.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.d = void 0;
var b_1 = require("./b");
exports.d = b_1.b;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUJBQXdCO0FBQWEsUUFBQSxDQUFDLEdBQUcsS0FBQyxDQUFDIn0=

//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./a.ts","./b.ts","./c.ts","./d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-17390360476-export const a = 10;const aLocal = 100;","signature":"-3762229137-export declare const a = 10;\r\n"},{"version":"-6189287562-export const b = 10;const bLocal = 10;","signature":"-1807916688-export declare const b = 10;\r\n"},{"version":"3248317647-import { a } from \"./a\";export const c = a;","signature":"-4148571535-export declare const c = 10;\r\n"},{"version":"-19615769517-import { b } from \"./b\";export const d = b;","signature":"-6489226382-export declare const d = 10;\r\n"}],"options":{"inlineSourceMap":true},"fileIdsList":[[2],[3]],"referencedMap":[[4,1],[5,2]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3,4,5]},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ],
    "fileNamesList": [
      [
        "./a.ts"
      ],
      [
        "./b.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "original": {
          "version": "-17390360476-export const a = 10;const aLocal = 100;",
          "signature": "-3762229137-export declare const a = 10;\r\n"
        },
        "version": "-17390360476-export const a = 10;const aLocal = 100;",
        "signature": "-3762229137-export declare const a = 10;\r\n"
      },
      "./b.ts": {
        "original": {
          "version": "-6189287562-export const b = 10;const bLocal = 10;",
          "signature": "-1807916688-export declare const b = 10;\r\n"
        },
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "signature": "-1807916688-export declare const b = 10;\r\n"
      },
      "./c.ts": {
        "original": {
          "version": "3248317647-import { a } from \"./a\";export const c = a;",
          "signature": "-4148571535-export declare const c = 10;\r\n"
        },
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "signature": "-4148571535-export declare const c = 10;\r\n"
      },
      "./d.ts": {
        "original": {
          "version": "-19615769517-import { b } from \"./b\";export const d = b;",
          "signature": "-6489226382-export declare const d = 10;\r\n"
        },
        "version": "-19615769517-import { b } from \"./b\";export const d = b;",
        "signature": "-6489226382-export declare const d = 10;\r\n"
      }
    },
    "options": {
      "inlineSourceMap": true
    },
    "referencedMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1269
}



Change:: with sourceMap
Input::


Output::
/lib/tsc --p /src/project --sourceMap
exitCode:: ExitStatus.Success
Program root files: ["/src/project/a.ts","/src/project/b.ts","/src/project/c.ts","/src/project/d.ts"]
Program options: {"incremental":true,"project":"/src/project","sourceMap":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project/a.ts
/src/project/b.ts
/src/project/c.ts
/src/project/d.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::


//// [/src/project/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = 10;
var aLocal = 100;
//# sourceMappingURL=a.js.map

//// [/src/project/a.js.map]
{"version":3,"file":"a.js","sourceRoot":"","sources":["a.ts"],"names":[],"mappings":";;;AAAa,QAAA,CAAC,GAAG,EAAE,CAAC;AAAA,IAAM,MAAM,GAAG,GAAG,CAAC"}

//// [/src/project/b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
exports.b = 10;
var bLocal = 10;
//# sourceMappingURL=b.js.map

//// [/src/project/b.js.map] file written with same contents
//// [/src/project/c.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.c = void 0;
var a_1 = require("./a");
exports.c = a_1.a;
//# sourceMappingURL=c.js.map

//// [/src/project/c.js.map] file written with same contents
//// [/src/project/d.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.d = void 0;
var b_1 = require("./b");
exports.d = b_1.b;
//# sourceMappingURL=d.js.map

//// [/src/project/d.js.map] file written with same contents
//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./a.ts","./b.ts","./c.ts","./d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-17390360476-export const a = 10;const aLocal = 100;","signature":"-3762229137-export declare const a = 10;\r\n"},{"version":"-6189287562-export const b = 10;const bLocal = 10;","signature":"-1807916688-export declare const b = 10;\r\n"},{"version":"3248317647-import { a } from \"./a\";export const c = a;","signature":"-4148571535-export declare const c = 10;\r\n"},{"version":"-19615769517-import { b } from \"./b\";export const d = b;","signature":"-6489226382-export declare const d = 10;\r\n"}],"options":{"sourceMap":true},"fileIdsList":[[2],[3]],"referencedMap":[[4,1],[5,2]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3,4,5]},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ],
    "fileNamesList": [
      [
        "./a.ts"
      ],
      [
        "./b.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "original": {
          "version": "-17390360476-export const a = 10;const aLocal = 100;",
          "signature": "-3762229137-export declare const a = 10;\r\n"
        },
        "version": "-17390360476-export const a = 10;const aLocal = 100;",
        "signature": "-3762229137-export declare const a = 10;\r\n"
      },
      "./b.ts": {
        "original": {
          "version": "-6189287562-export const b = 10;const bLocal = 10;",
          "signature": "-1807916688-export declare const b = 10;\r\n"
        },
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "signature": "-1807916688-export declare const b = 10;\r\n"
      },
      "./c.ts": {
        "original": {
          "version": "3248317647-import { a } from \"./a\";export const c = a;",
          "signature": "-4148571535-export declare const c = 10;\r\n"
        },
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "signature": "-4148571535-export declare const c = 10;\r\n"
      },
      "./d.ts": {
        "original": {
          "version": "-19615769517-import { b } from \"./b\";export const d = b;",
          "signature": "-6489226382-export declare const d = 10;\r\n"
        },
        "version": "-19615769517-import { b } from \"./b\";export const d = b;",
        "signature": "-6489226382-export declare const d = 10;\r\n"
      }
    },
    "options": {
      "sourceMap": true
    },
    "referencedMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1263
}



Change:: emit js files
Input::


Output::
/lib/tsc --p /src/project
exitCode:: ExitStatus.Success
Program root files: ["/src/project/a.ts","/src/project/b.ts","/src/project/c.ts","/src/project/d.ts"]
Program options: {"incremental":true,"project":"/src/project","configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project/a.ts
/src/project/b.ts
/src/project/c.ts
/src/project/d.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::


//// [/src/project/a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = void 0;
exports.a = 10;
var aLocal = 100;


//// [/src/project/b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
exports.b = 10;
var bLocal = 10;


//// [/src/project/c.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.c = void 0;
var a_1 = require("./a");
exports.c = a_1.a;


//// [/src/project/d.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.d = void 0;
var b_1 = require("./b");
exports.d = b_1.b;


//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./a.ts","./b.ts","./c.ts","./d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-17390360476-export const a = 10;const aLocal = 100;","signature":"-3762229137-export declare const a = 10;\r\n"},{"version":"-6189287562-export const b = 10;const bLocal = 10;","signature":"-1807916688-export declare const b = 10;\r\n"},{"version":"3248317647-import { a } from \"./a\";export const c = a;","signature":"-4148571535-export declare const c = 10;\r\n"},{"version":"-19615769517-import { b } from \"./b\";export const d = b;","signature":"-6489226382-export declare const d = 10;\r\n"}],"fileIdsList":[[2],[3]],"referencedMap":[[4,1],[5,2]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3,4,5]},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ],
    "fileNamesList": [
      [
        "./a.ts"
      ],
      [
        "./b.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "original": {
          "version": "-17390360476-export const a = 10;const aLocal = 100;",
          "signature": "-3762229137-export declare const a = 10;\r\n"
        },
        "version": "-17390360476-export const a = 10;const aLocal = 100;",
        "signature": "-3762229137-export declare const a = 10;\r\n"
      },
      "./b.ts": {
        "original": {
          "version": "-6189287562-export const b = 10;const bLocal = 10;",
          "signature": "-1807916688-export declare const b = 10;\r\n"
        },
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "signature": "-1807916688-export declare const b = 10;\r\n"
      },
      "./c.ts": {
        "original": {
          "version": "3248317647-import { a } from \"./a\";export const c = a;",
          "signature": "-4148571535-export declare const c = 10;\r\n"
        },
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "signature": "-4148571535-export declare const c = 10;\r\n"
      },
      "./d.ts": {
        "original": {
          "version": "-19615769517-import { b } from \"./b\";export const d = b;",
          "signature": "-6489226382-export declare const d = 10;\r\n"
        },
        "version": "-19615769517-import { b } from \"./b\";export const d = b;",
        "signature": "-6489226382-export declare const d = 10;\r\n"
      }
    },
    "referencedMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1234
}



Change:: with declaration and declarationMap
Input::


Output::
/lib/tsc --p /src/project --declaration --declarationMap
exitCode:: ExitStatus.Success
Program root files: ["/src/project/a.ts","/src/project/b.ts","/src/project/c.ts","/src/project/d.ts"]
Program options: {"incremental":true,"project":"/src/project","declaration":true,"declarationMap":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project/a.ts
/src/project/b.ts
/src/project/c.ts
/src/project/d.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::


//// [/src/project/a.d.ts] file written with same contents
//// [/src/project/a.d.ts.map] file written with same contents
//// [/src/project/b.d.ts] file written with same contents
//// [/src/project/b.d.ts.map] file written with same contents
//// [/src/project/c.d.ts] file written with same contents
//// [/src/project/c.d.ts.map] file written with same contents
//// [/src/project/d.d.ts] file written with same contents
//// [/src/project/d.d.ts.map] file written with same contents
//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","./a.ts","./b.ts","./c.ts","./d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-17390360476-export const a = 10;const aLocal = 100;","signature":"-3762229137-export declare const a = 10;\r\n"},{"version":"-6189287562-export const b = 10;const bLocal = 10;","signature":"-1807916688-export declare const b = 10;\r\n"},{"version":"3248317647-import { a } from \"./a\";export const c = a;","signature":"-4148571535-export declare const c = 10;\r\n"},{"version":"-19615769517-import { b } from \"./b\";export const d = b;","signature":"-6489226382-export declare const d = 10;\r\n"}],"options":{"declaration":true,"declarationMap":true},"fileIdsList":[[2],[3]],"referencedMap":[[4,1],[5,2]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3,4,5]},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ],
    "fileNamesList": [
      [
        "./a.ts"
      ],
      [
        "./b.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "./a.ts": {
        "original": {
          "version": "-17390360476-export const a = 10;const aLocal = 100;",
          "signature": "-3762229137-export declare const a = 10;\r\n"
        },
        "version": "-17390360476-export const a = 10;const aLocal = 100;",
        "signature": "-3762229137-export declare const a = 10;\r\n"
      },
      "./b.ts": {
        "original": {
          "version": "-6189287562-export const b = 10;const bLocal = 10;",
          "signature": "-1807916688-export declare const b = 10;\r\n"
        },
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "signature": "-1807916688-export declare const b = 10;\r\n"
      },
      "./c.ts": {
        "original": {
          "version": "3248317647-import { a } from \"./a\";export const c = a;",
          "signature": "-4148571535-export declare const c = 10;\r\n"
        },
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "signature": "-4148571535-export declare const c = 10;\r\n"
      },
      "./d.ts": {
        "original": {
          "version": "-19615769517-import { b } from \"./b\";export const d = b;",
          "signature": "-6489226382-export declare const d = 10;\r\n"
        },
        "version": "-19615769517-import { b } from \"./b\";export const d = b;",
        "signature": "-6489226382-export declare const d = 10;\r\n"
      }
    },
    "options": {
      "declaration": true,
      "declarationMap": true
    },
    "referencedMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./a.ts",
      "./b.ts",
      "./c.ts",
      "./d.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 1287
}



Change:: with declaration and declarationMap, should not re-emit
Input::


Output::
/lib/tsc --p /src/project --declaration --declarationMap
exitCode:: ExitStatus.Success
Program root files: ["/src/project/a.ts","/src/project/b.ts","/src/project/c.ts","/src/project/d.ts"]
Program options: {"incremental":true,"project":"/src/project","declaration":true,"declarationMap":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Not
Program files::
/lib/lib.d.ts
/src/project/a.ts
/src/project/b.ts
/src/project/c.ts
/src/project/d.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::


