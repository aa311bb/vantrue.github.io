const u=e=>{if([null,void 0,NaN,!1].includes(e)||typeof e!="object"&&typeof e!="function")return e;var t=Array.isArray(e)?[]:{};for(let r in e)t[r]=typeof e[r]=="object"?u(e[r]):e[r];return t},s=e=>(typeof e=="string"&&(e=e.trim()),!!(e===""||e===null||typeof e>"u"||Array.isArray(e)&&e.length===0||typeof e=="object"&&Object.keys(e).length===0)),l=e=>{let t=0;return new Promise(r=>{t=setTimeout(()=>r(t),e)})};let i;const a=(e,t=500,r=!0)=>{if(r){if(i)return;i=!0,typeof e=="function"&&e(),setTimeout(()=>{i=!1},t)}else{if(i)return;i=!0,setTimeout(()=>{i=!1,typeof e=="function"&&e()},t)}},c=e=>{if(e<=1)return`${e}px`;const n=parseFloat(e)/(750/100);return`${Math.round(n*Math.pow(10,5))/Math.pow(10,5)}vw`};export{c as a,u as d,s as i,l as s,a as t};
