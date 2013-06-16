"use strict";function AngularFire(e,n,i,r){this._q=e,this._parse=n,this._timeout=i,this._initial=!0,this._remoteValue=!1,this._fRef="string"==typeof r?new Firebase(r):r}angular.module("firebase",[]).value("Firebase",Firebase),angular.module("firebase").factory("angularFire",["$q","$parse","$timeout",function(e,n,i){return function(r,t,a,o){var u=new AngularFire(e,n,i,r);return u.associate(t,a,o)}}]),AngularFire.prototype={associate:function(e,n,i){var r=this;void 0==i&&(i=[]);var t=this._q.defer(),a=t.promise;return this._fRef.on("value",function(a){var o=!1;if(t&&(o=t,t=!1),r._remoteValue=i,a&&void 0!=a.val()){var u=a.val();if(typeof u!=typeof i)return r._log("Error: type mismatch"),void 0;var f=Object.prototype.toString;if(f.call(i)!=f.call(u))return r._log("Error: type mismatch"),void 0;if(r._remoteValue=angular.copy(u),angular.equals(u,r._parse(n)(e)))return}r._timeout(function(){r._resolve(e,n,o,r._remoteValue)})}),a},_log:function(e){console&&console.log&&console.log(e)},_resolve:function(e,n,i,r){this._parse(n).assign(e,angular.copy(r)),this._remoteValue=angular.copy(r),i&&(i.resolve(r),this._watch(e,n))},_watch:function(e,n){var i=this;e.$watch(n,function(){if(i._initial)return i._initial=!1,void 0;var r=JSON.parse(angular.toJson(i._parse(n)(e)));angular.equals(r,i._remoteValue)||i._fRef.ref().set(r)},!0)}},angular.module("firebase").factory("angularFireCollection",["$timeout",function(e){function n(e,n){this.$ref=e.ref(),this.$id=e.name(),this.$index=n,angular.extend(this,e.val())}return function(i,r){function t(e){return e?v[e]+1:0}function a(e,n){v[n.$id]=e,s.splice(e,0,n)}function o(e){var n=v[e];s.splice(n,1),v[e]=void 0}function u(e,n){s[e]=n}function f(e,n,i){s.splice(e,1),s.splice(n,0,i),l(e,n)}function l(e,n){var i=s.length;n=n||i,n>i&&(n=i);for(var r=e;n>r;r++){var t=s[r];t.$index=v[t.$id]=r}}var c,s=[],v={};return c="string"==typeof i?new Firebase(i):i,r&&"function"==typeof r&&c.once("value",r),c.on("child_added",function(i,r){e(function(){var e=t(r);a(e,new n(i,e)),l(e)})}),c.on("child_removed",function(n){e(function(){var e=n.name(),i=v[e];o(e),l(i)})}),c.on("child_changed",function(i,r){e(function(){var e=v[i.name()],a=t(r),o=new n(i,e);u(e,o),a!==e&&f(e,a,o)})}),c.on("child_moved",function(n,i){e(function(){var e=v[n.name()],r=t(i),a=s[e];f(e,r,a)})}),s.add=function(e,n){n?c.ref().push(e,n):c.ref().push(e)},s.remove=function(e){var n=angular.isString(e)?s[v[e]]:e;n.$ref.remove()},s.update=function(e){var n=angular.isString(e)?s[v[e]]:e,i={};angular.forEach(n,function(e,n){0!==n.indexOf("$")&&(i[n]=e)}),n.$ref.set(i)},s}}]);