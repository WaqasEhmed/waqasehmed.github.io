"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){new(function(){function t(t,n){var r=o("div");r.className="behance_main";var l=o("div");l.className="behance_entries",s(l,r);var f=c();s(f,l);for(var h=t.projects,d=[],p=0;p<h.length;p+=1)d[p]=e(t,h,h[p],p,n),d[p].mount(f.parentNode,f);return{mount:function(t,e){a(r,t,e)},update:function(t,r){for(var o=r.projects,i=0;i<o.length;i+=1)d[i]?d[i].update(t,r,o,o[i],i):(d[i]=e(r,o,o[i],i,n),d[i].mount(f.parentNode,f));u(d,!0,o.length),d.length=o.length},teardown:function(t){u(d,!1),t&&i(r)}}}function e(t,e,n){var r=o("div");r.className="behance_entry";var c=o("a");c.href=n.url,c.target="_blank",s(c,r);var u=o("img");u.src=n.picture,s(u,c),s(l("\n\t\t\t\t"),c);var f=o("div");f.className="titlelink",s(f,c);var h=l(n.name);return s(h,f),{mount:function(t,e){a(r,t,e)},update:function(t,e,n,r){c.href=r.url,u.src=r.picture,h.data=r.name},teardown:function(t){t&&i(r)}}}function n(e){e=e||{},this._state=Object.assign(f.data(),e.data),this._observers={pre:Object.create(null),post:Object.create(null)},this._handlers=Object.create(null),this._root=e._root,this._yield=e._yield,this._fragment=t(this._state,this),e.target&&this._fragment.mount(e.target,null),e._root?e._root._renderHooks.push({fn:f.onrender,context:this}):f.onrender.call(this)}function r(t,e,n,r){for(var o in e)if(o in n){var i=n[o],a=r[o];if(i!==a||"object"===(void 0===i?"undefined":_typeof(i))){var s=e[o];if(s)for(var c=0;c<s.length;c+=1){var u=s[c];u.__calling||(u.__calling=!0,u.call(t,i,a),u.__calling=!1)}}}}function o(t){return document.createElement(t)}function i(t){t.parentNode.removeChild(t)}function a(t,e,n){e.insertBefore(t,n)}function s(t,e){e.appendChild(t)}function c(){return document.createComment("")}function u(t,e,n){for(var r=n||0;r<t.length;r+=1)t[r].teardown(e)}function l(t){return document.createTextNode(t)}var f=function(){function t(t,e){var n=document.createElement("script");window.amarip=function(t){delete window.amarip,document.body.removeChild(n),e(t)},n.src=t+"&callback=amarip",document.body.appendChild(n)}return{onrender:function(){var e=this;t("https://api.behance.net/v2/users/"+this.get("username")+"/projects?client_id="+this.get("clientId"),function(t){e.set({projects:t.projects.map(function(t){var e=t.url,n=t.covers;return{url:e,name:t.name,picture:n[404]}}).slice(0,9)})})},data:function(){return{projects:[]}}}}();return n.prototype.get=function(t){return t?this._state[t]:this._state},n.prototype.fire=function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var r=0;r<n.length;r+=1)n[r].call(this,e)},n.prototype.observe=function(t,e,n){var r=n&&n.defer?this._observers.pre:this._observers.post;return(r[t]||(r[t]=[])).push(e),n&&!1===n.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1),{cancel:function(){var n=r[t].indexOf(e);~n&&r[t].splice(n,1)}}},n.prototype.on=function(t,e){var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},n.prototype.set=function(t){var e=this._state;this._state=Object.assign({},e,t),r(this,this._observers.pre,t,e),this._fragment&&this._fragment.update(t,this._state),r(this,this._observers.post,t,e)},n.prototype.teardown=function(t){this.fire("teardown"),this._fragment.teardown(!1!==t),this._fragment=null,this._state={}},n}())({target:document.getElementById("behance_feed"),data:{clientId:t.clientId,username:t.username}}),delete window.behance}(window.behance);