/**
 * Copyright (C) 2003-present CompatibL. All rights reserved.
 * This file contains valuable trade secrets and may be copied, stored, used,
 * or distributed only in compliance with the terms of a written commercial
 * license from CompatibL and with the inclusion of this copyright notice.
 */
import{F as s,j as i}from"./controls-yP1HmfZA.js";import{r as t}from"./react-CxujAPCK.js";import{u}from"./plotly-Cr11kGvO.js";const c=({content:n,path:a})=>{const r=t.useRef(null),e=s(n),o=t.useCallback(()=>{if(r.current)for(;r.current.firstChild;)r.current.removeChild(r.current.firstChild)},[]);return t.useEffect(()=>{if(r.current){window.Plotly=u;const l=document.createRange().createContextualFragment(e);r.current.append(l)}return()=>{window.Plotly=void 0,o()}},[e,o]),i.jsx("div",{"data-tid":a,className:"ui-builder-plotly__wrap",children:i.jsx("div",{ref:r,className:"ui-builder-plotly"})})},p=t.memo(c);export{p as default};
