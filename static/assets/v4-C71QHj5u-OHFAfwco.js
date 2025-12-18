/**
 * Copyright (C) 2003-present CompatibL. All rights reserved.
 * This file contains valuable trade secrets and may be copied, stored, used,
 * or distributed only in compliance with the terms of a written commercial
 * license from CompatibL and with the inclusion of this copyright notice.
 */
let u;const p=new Uint8Array(16);function d(){if(!u&&(u=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(p)}const e=[];for(let o=0;o<256;++o)e.push((o+256).toString(16).slice(1));function a(o,r=0){return(e[o[r+0]]+e[o[r+1]]+e[o[r+2]]+e[o[r+3]]+"-"+e[o[r+4]]+e[o[r+5]]+"-"+e[o[r+6]]+e[o[r+7]]+"-"+e[o[r+8]]+e[o[r+9]]+"-"+e[o[r+10]]+e[o[r+11]]+e[o[r+12]]+e[o[r+13]]+e[o[r+14]]+e[o[r+15]]).toLowerCase()}const n=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),c={randomUUID:n};function i(o,r,s){if(c.randomUUID&&!r&&!o)return c.randomUUID();o=o||{};const t=o.random||(o.rng||d)();return t[6]=t[6]&15|64,t[8]=t[8]&63|128,a(t)}export{i as r};
