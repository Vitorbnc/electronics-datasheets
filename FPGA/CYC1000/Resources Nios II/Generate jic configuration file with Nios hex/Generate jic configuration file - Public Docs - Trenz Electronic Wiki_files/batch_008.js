WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.extra.jira:macro-browser-resources', location = 'templates/extra/jira/view-in-jira.js' */
AJS.bind("add-handler.property-panel",function(k,g){AJS.log("add-handler.property-panel: panel name \x3d "+g.name);"macro"==g.name&&g.registerButtonHandler("view-in-jira",function(a,c){if(AJS.Editor.JiraConnector.servers){a=AJS.Editor.JiraConnector.servers;c=AJS.$(c);var b=c.attr("data-macro-default-parameter");c=c.attr("data-macro-parameters")||"";var e=Confluence.MacroParameterSerializer.deserialize(c);(b=b||e.jqlQuery||e.key)||(b=c.indexOf("|"),b=0<=b?c.substring(0,b):c);c=b;b=e.server;var h=e.serverId;
e=c.match(/=|!=|~|>|<|!~| is | in /i);for(var f=null,d=0;d<a.length;d++){if(h&&a[d].id==h){f=a[d];break}if(b&&a[d].name==b||!b&&a[d].selected){f=a[d];break}}null!=f&&(a="undefined"!==typeof f.displayUrl?f.displayUrl:f.url,"/"==a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),b="confluence-goto-jiralink-"+AJS.params.pageId,(e?window.open(a+"/secure/IssueNavigator.jspa?reset\x3dtrue\x26jqlQuery\x3d"+encodeURIComponent(c),b):window.open(a+"/browse/"+encodeURIComponent(c),b)).opener=null)}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:macro-browser-resources', location = 'templates/extra/jira/show-summary.js' */
AJS.bind("init.rte",function(){function a(b,d,e){if(e=AJS.$.grep(d,function(f){return"show-summary"==f.parameterName})[0])c(b)?"false"==AJS.SummaryHelper.getParam(b,"showSummary")?e.text="Show summary":e.text="Hide summary":e.className+=" hidden";else{AJS.logError("Jira Issues Macro - Show-summary : The system cannot find SummaryButton, all buttons are: ");for(var g in d)AJS.logError(d[g].text)}}function c(b){var d=
AJS.$(b).attr("src");if(!d)return!0;b=AJS.SummaryHelper.getParam(b,"count");return-1==d.indexOf("confluence.extra.jira/jira-table")&&"true"!=b?!0:!1}AJS.Confluence||AJS.Confluence.PropertyPanel||AJS.Confluence.PropertyPanel.Macro?(AJS.Confluence.PropertyPanel.Macro.registerInitHandler(a,"jira"),AJS.Confluence.PropertyPanel.Macro.registerInitHandler(a,"jiraissues")):AJS.logError("Jira Issues Macro : can't register property panel init handler since AJS.Confluence.PropertyPanel.Macro is undefined")});
AJS.bind("add-handler.property-panel",function(a,c){"macro"==c.name&&c.registerButtonHandler("show-summary",function(b,d){b=AJS.SummaryHelper.getParam(d,"showSummary");AJS.SummaryHelper.updateMacro("jira",d,"showSummary","false"==b?"true":"false")})});
AJS.SummaryHelper=function(){return{getCurrentParams:function(a){return Confluence.MacroParameterSerializer.deserialize(a.attr("data-macro-parameters"))},getParam:function(a,c){a=AJS.$(a);return AJS.SummaryHelper.getCurrentParams(a)[c]},updateMacro:function(a,c,b,d){c=AJS.$(c);AJS.Rte.getEditor().selection.select(c[0]);AJS.Rte.BookmarkManager.storeBookmark();var e=AJS.SummaryHelper.getCurrentParams(c);e[b]=d;a={contentId:Confluence.Editor.getContentId(),macro:{name:a,params:e,defaultParameterValue:c.attr("data-macro-default-parameter")}};
tinymce.confluence.MacroUtils.insertMacro(a)}}}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:lodash', location = '/custom-lodash/custom-lodash.js' */
/*

 Lodash (Custom Build) <https://lodash.com/>
 Build: `lodash include="bind,map,groupBy,compact,uniq,has,each,extend,filter,reject,bindAll,without,debounce,difference,forEach,take,find,chain,some,values,reduce" moduleId="jira-integration-plugin/custom-lodash"`
 Copyright JS Foundation and other contributors <https://js.foundation/>
 Released under MIT license <https://lodash.com/license>
 Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
(function(){function va(a,b,c){switch(c.length){case 0:return a.call(b);case 1:return a.call(b,c[0]);case 2:return a.call(b,c[0],c[1]);case 3:return a.call(b,c[0],c[1],c[2])}return a.apply(b,c)}function Ic(a,b,c,d){for(var e=-1,g=null==a?0:a.length;++e<g;){var m=a[e];b(d,m,c(m),a)}return d}function C(a,b){for(var c=-1,d=null==a?0:a.length;++c<d&&!1!==b(a[c],c,a););return a}function wa(a,b){for(var c=-1,d=null==a?0:a.length,e=0,g=[];++c<d;){var m=a[c];b(m,c,a)&&(g[e++]=m)}return g}function Xa(a,b){var c;
if(c=!(null==a||!a.length)){if(b===b)a:{c=-1;for(var d=a.length;++c<d;)if(a[c]===b){a=c;break a}a=-1}else a=wb(a,Jc,0);c=-1<a}return c}function Kc(a,b,c){for(var d=-1,e=null==a?0:a.length;++d<e;)if(c(b,a[d]))return!0;return!1}function xa(a,b){for(var c=-1,d=null==a?0:a.length,e=Array(d);++c<d;)e[c]=b(a[c],c,a);return e}function W(a,b){for(var c=-1,d=b.length,e=a.length;++c<d;)a[e+c]=b[c];return a}function xb(a,b,c,d){var e=-1,g=null==a?0:a.length;for(d&&g&&(c=a[++e]);++e<g;)c=b(c,a[e],e,a);return c}
function yb(a,b){for(var c=-1,d=null==a?0:a.length;++c<d;)if(b(a[c],c,a))return!0;return!1}function wb(a,b,c,d){var e=a.length;for(c+=d?1:-1;d?c--:++c<e;)if(b(a[c],c,a))return c;return-1}function Jc(a){return a!==a}function Lc(a){return function(b){return null==b?k:b[a]}}function Mc(a,b,c,d,e){e(a,function(a,e,h){c=d?(d=!1,a):b(c,a,e,h)});return c}function ya(a){return function(b){return a(b)}}function Nc(a,b){return xa(b,function(b){return a[b]})}function zb(a,b){return a.has(b)}function Ab(a){var b=
-1,c=Array(a.size);a.forEach(function(a,e){c[++b]=[e,a]});return c}function Bb(a,b){return function(c){return a(b(c))}}function da(a,b){for(var c=-1,d=a.length,e=0,g=[];++c<d;){var m=a[c];if(m===b||"__lodash_placeholder__"===m)a[c]="__lodash_placeholder__",g[e++]=c}return g}function za(a){var b=-1,c=Array(a.size);a.forEach(function(a){c[++b]=a});return c}function f(a){if(x(a)&&!v(a)&&!(a instanceof q)){if(a instanceof E)return a;if(w.call(a,"__wrapped__"))return Cb(a)}return new E(a)}function Aa(){}
function E(a,b){this.__wrapped__=a;this.__actions__=[];this.__chain__=!!b;this.__index__=0;this.__values__=k}function q(a){this.__wrapped__=a;this.__actions__=[];this.__dir__=1;this.__filtered__=!1;this.__iteratees__=[];this.__takeCount__=4294967295;this.__views__=[]}function P(a){var b=-1,c=null==a?0:a.length;for(this.clear();++b<c;){var d=a[b];this.set(d[0],d[1])}}function J(a){var b=-1,c=null==a?0:a.length;for(this.clear();++b<c;){var d=a[b];this.set(d[0],d[1])}}function K(a){var b=-1,c=null==
a?0:a.length;for(this.clear();++b<c;){var d=a[b];this.set(d[0],d[1])}}function X(a){var b=-1,c=null==a?0:a.length;for(this.__data__=new K;++b<c;)this.add(a[b])}function F(a){this.size=(this.__data__=new J(a)).size}function Db(a,b){var c=v(a),d=!c&&Ba(a),e=!c&&!d&&ea(a),g=!c&&!d&&!e&&Ya(a);if(c=c||d||e||g){d=a.length;for(var m=String,h=-1,n=Array(d);++h<d;)n[h]=m(h);d=n}else d=[];m=d.length;for(var f in a)!b&&!w.call(a,f)||c&&("length"==f||e&&("offset"==f||"parent"==f)||g&&("buffer"==f||"byteLength"==
f||"byteOffset"==f)||fa(f,m))||d.push(f);return d}function Eb(a,b,c){var d=a[b];w.call(a,b)&&ha(d,c)&&(c!==k||b in a)||Ca(a,b,c)}function Da(a,b){for(var c=a.length;c--;)if(ha(a[c][0],b))return c;return-1}function Oc(a,b,c,d){Y(a,function(a,g,m){b(d,a,c(a),m)});return d}function Pc(a,b){return a&&ia(b,G(b),a)}function Qc(a,b){return a&&ia(b,ja(b),a)}function Ca(a,b,c){"__proto__"==b&&Ea?Ea(a,b,{configurable:!0,enumerable:!0,value:c,writable:!0}):a[b]=c}function Fa(a,b,c,d,e,g){var m,h=b&1,n=b&2,f=
b&4;c&&(m=e?c(a,d,e,g):c(a));if(m!==k)return m;if(!y(a))return a;if(d=v(a)){if(m=Rc(a),!h)return M(a,m)}else{var l=A(a),p="[object Function]"==l||"[object GeneratorFunction]"==l;if(ea(a))return Sc(a,h);if("[object Object]"==l||"[object Arguments]"==l||p&&!e){if(m=n||p?{}:Tc(a),!h)return n?Uc(a,Qc(m,a)):Vc(a,Pc(m,a))}else{if(!t[l])return e?a:{};m=Wc(a,l,h)}}g||(g=new F);if(e=g.get(a))return e;g.set(a,m);if(Fb(a))return a.forEach(function(d){m.add(Fa(d,b,c,d,a,g))}),m;if(Gb(a))return a.forEach(function(d,
e){m.set(e,Fa(d,b,c,e,a,g))}),m;n=f?n?Xc:Za:n?ja:G;var r=d?k:n(a);C(r||a,function(d,e){r&&(e=d,d=a[e]);Eb(m,e,Fa(d,b,c,e,a,g))});return m}function Hb(a,b,c,d){var e=-1,g=Xa,m=!0,h=a.length,n=[],f=b.length;if(!h)return n;c&&(b=xa(b,ya(c)));d?(g=Kc,m=!1):200<=b.length&&(g=zb,m=!1,b=new X(b));a:for(;++e<h;){var l=a[e],k=null==c?l:c(l);l=d||0!==l?l:0;if(m&&k===k){for(var r=f;r--;)if(b[r]===k)continue a;n.push(l)}else g(b,k,d)||n.push(l)}return n}function Ib(a,b){var c=[];Y(a,function(a,e,g){b(a,e,g)&&
c.push(a)});return c}function $a(a,b,c,d,e){var g=-1,m=a.length;c||(c=Yc);for(e||(e=[]);++g<m;){var h=a[g];0<b&&c(h)?1<b?$a(h,b-1,c,d,e):W(e,h):d||(e[e.length]=h)}return e}function Ga(a,b){return a&&Zc(a,b,G)}function Jb(a,b){return wa(b,function(b){return ka(a[b])})}function ab(a,b){b=bb(b,a);for(var c=0,d=b.length;null!=a&&c<d;)a=a[Z(b[c++])];return c&&c==d?a:k}function Kb(a,b,c){b=b(a);return v(a)?b:W(b,c(a))}function Q(a){if(null==a)return a===k?"[object Undefined]":"[object Null]";if(R&&R in
Object(a)){var b=w.call(a,R),c=a[R];try{a[R]=k;var d=!0}catch(g){}var e=Lb.call(a);d&&(b?a[R]=c:delete a[R]);a=e}else a=Lb.call(a);return a}function $c(a,b){return null!=a&&w.call(a,b)}function ad(a,b){return null!=a&&b in Object(a)}function Mb(a){return x(a)&&"[object Arguments]"==Q(a)}function aa(a,b,c,d,e){if(a===b)return!0;if(null==a||null==b||!x(a)&&!x(b))return a!==a&&b!==b;a:{var g=v(a),m=v(b),h=g?"[object Array]":A(a),n=m?"[object Array]":A(b);h="[object Arguments]"==h?"[object Object]":h;
n="[object Arguments]"==n?"[object Object]":n;var f="[object Object]"==h;m="[object Object]"==n;if((n=h==n)&&ea(a)){if(!ea(b)){b=!1;break a}g=!0;f=!1}if(n&&!f)e||(e=new F),b=g||Ya(a)?Nb(a,b,c,d,aa,e):bd(a,b,h,c,d,aa,e);else{if(!(c&1)&&(g=f&&w.call(a,"__wrapped__"),h=m&&w.call(b,"__wrapped__"),g||h)){a=g?a.value():a;b=h?b.value():b;e||(e=new F);b=aa(a,b,c,d,e);break a}if(n)b:if(e||(e=new F),g=c&1,h=Za(a),m=h.length,n=Za(b).length,m==n||g){for(f=m;f--;){var l=h[f];if(!(g?l in b:w.call(b,l))){b=!1;break b}}if((n=
e.get(a))&&e.get(b))b=n==b;else{n=!0;e.set(a,b);e.set(b,a);for(var p=g;++f<m;){l=h[f];var r=a[l],q=b[l];if(d)var t=g?d(q,r,l,b,a,e):d(r,q,l,a,b,e);if(t===k?r!==q&&!aa(r,q,c,d,e):!t){n=!1;break}p||(p="constructor"==l)}n&&!p&&(c=a.constructor,d=b.constructor,c!=d&&"constructor"in a&&"constructor"in b&&!("function"==typeof c&&c instanceof c&&"function"==typeof d&&d instanceof d)&&(n=!1));e["delete"](a);e["delete"](b);b=n}}else b=!1;else b=!1}}return b}function cd(a){return x(a)&&"[object Map]"==A(a)}
function dd(a,b,c,d){var e=c.length,g=e,m=!d;if(null==a)return!g;for(a=Object(a);e--;){var h=c[e];if(m&&h[2]?h[1]!==a[h[0]]:!(h[0]in a))return!1}for(;++e<g;){h=c[e];var f=h[0],z=a[f],l=h[1];if(m&&h[2]){if(z===k&&!(f in a))return!1}else{h=new F;if(d)var p=d(z,l,f,a,b,h);if(p===k?!aa(l,z,3,d,h):!p)return!1}}return!0}function ed(a){return x(a)&&"[object Set]"==A(a)}function fd(a){return x(a)&&Ha(a.length)&&!!u[Q(a)]}function Ob(a){return"function"==typeof a?a:null==a?ba:"object"==typeof a?v(a)?gd(a[0],
a[1]):hd(a):Pb(a)}function id(a,b){var c=-1,d=L(a)?Array(a.length):[];Y(a,function(a,g,m){d[++c]=b(a,g,m)});return d}function hd(a){var b=jd(a);return 1==b.length&&b[0][2]?Qb(b[0][0],b[0][1]):function(c){return c===a||dd(c,a,b)}}function gd(a,b){return cb(a)&&b===b&&!y(b)?Qb(Z(a),b):function(c){var d=db(c,a);return d===k&&d===b?Rb(c,a):aa(b,d,3)}}function kd(a){return function(b){return ab(b,a)}}function la(a,b){return eb(Sb(a,b,ba),a+"")}function Tb(a,b,c){var d=-1,e=a.length;0>b&&(b=-b>e?0:e+b);
c=c>e?e:c;0>c&&(c+=e);e=b>c?0:c-b>>>0;b>>>=0;for(c=Array(e);++d<e;)c[d]=a[d+b];return c}function ld(a,b){var c;Y(a,function(a,e,g){c=b(a,e,g);return!c});return!!c}function Ub(a){if("string"==typeof a)return a;if(v(a))return xa(a,Ub)+"";if(ma(a))return Vb?Vb.call(a):"";var b=a+"";return"0"==b&&1/a==-na?"-0":b}function Wb(a,b){a instanceof q&&(a=a.value());return xb(b,function(a,b){return b.func.apply(b.thisArg,W([a],b.args))},a)}function bb(a,b){return v(a)?a:cb(a,b)?[a]:md(Xb(a))}function Sc(a,b){if(b)return a.slice();
b=a.length;b=Yb?Yb(b):new a.constructor(b);a.copy(b);return b}function fb(a){var b=new a.constructor(a.byteLength);(new Ia(b)).set(new Ia(a));return b}function Zb(a,b,c,d){var e=-1,g=a.length,m=c.length,h=-1,f=b.length,k=H(g-m,0),l=Array(f+k);for(d=!d;++h<f;)l[h]=b[h];for(;++e<m;)if(d||e<g)l[c[e]]=a[e];for(;k--;)l[h++]=a[e++];return l}function $b(a,b,c,d){var e=-1,g=a.length,m=-1,h=c.length,f=-1,k=b.length,l=H(g-h,0),p=Array(l+k);for(d=!d;++e<l;)p[e]=a[e];for(l=e;++f<k;)p[l+f]=b[f];for(;++m<h;)if(d||
e<g)p[l+c[m]]=a[e++];return p}function M(a,b){var c=-1,d=a.length;for(b||(b=Array(d));++c<d;)b[c]=a[c];return b}function ia(a,b,c,d){var e=!c;c||(c={});for(var g=-1,m=b.length;++g<m;){var h=b[g],f=d?d(c[h],a[h],h,c,a):k;f===k&&(f=a[h]);e?Ca(c,h,f):Eb(c,h,f)}return c}function Vc(a,b){return ia(a,gb(a),b)}function Uc(a,b){return ia(a,ac(a),b)}function nd(a,b,c){function d(){return(this&&this!==B&&this instanceof d?g:a).apply(e?c:this,arguments)}var e=b&1,g=oa(a);return d}function oa(a){return function(){var b=
arguments;switch(b.length){case 0:return new a;case 1:return new a(b[0]);case 2:return new a(b[0],b[1]);case 3:return new a(b[0],b[1],b[2]);case 4:return new a(b[0],b[1],b[2],b[3]);case 5:return new a(b[0],b[1],b[2],b[3],b[4]);case 6:return new a(b[0],b[1],b[2],b[3],b[4],b[5]);case 7:return new a(b[0],b[1],b[2],b[3],b[4],b[5],b[6])}var c=Ja(a.prototype);b=a.apply(c,b);return y(b)?b:c}}function od(a,b,c){function d(){for(var g=arguments.length,m=Array(g),h=g,f=hb(d);h--;)m[h]=arguments[h];h=3>g&&m[0]!==
f&&m[g-1]!==f?[]:da(m,f);g-=h.length;return g<c?bc(a,b,Ka,d.placeholder,k,m,h,k,k,c-g):va(this&&this!==B&&this instanceof d?e:a,this,m)}var e=oa(a);return d}function Ka(a,b,c,d,e,g,m,f,n,z){function h(){for(var l=arguments.length,r=Array(l),I=l;I--;)r[I]=arguments[I];if(v){var y=hb(h),x;I=r.length;for(x=0;I--;)r[I]===y&&++x}d&&(r=Zb(r,d,e,v));g&&(r=$b(r,g,m,v));l-=x;if(v&&l<z)return y=da(r,y),bc(a,b,Ka,h.placeholder,c,r,y,f,n,z-l);y=q?c:this;I=t?y[a]:a;l=r.length;if(f){x=r.length;for(var A=S(f.length,
x),D=M(r);A--;){var C=f[A];r[A]=fa(C,x)?D[C]:k}}else u&&1<l&&r.reverse();p&&n<l&&(r.length=n);this&&this!==B&&this instanceof h&&(I=w||oa(I));return I.apply(y,r)}var p=b&128,q=b&1,t=b&2,v=b&24,u=b&512,w=t?k:oa(a);return h}function pd(a,b,c,d){function e(){for(var b=-1,f=arguments.length,k=-1,l=d.length,p=Array(l+f),r=this&&this!==B&&this instanceof e?m:a;++k<l;)p[k]=d[k];for(;f--;)p[k++]=arguments[++b];return va(r,g?c:this,p)}var g=b&1,m=oa(a);return e}function bc(a,b,c,d,e,g,m,h,n,z){var l=b&8,p=
l?m:k;m=l?k:m;var r=l?g:k;g=l?k:g;b=(b|(l?32:64))&~(l?64:32);b&4||(b&=-4);e=[a,b,e,r,p,g,m,h,n,z];c=c.apply(k,e);b:for(h=a.name+"",n=pa[h],z=w.call(pa,h)?n.length:0;z--;)if(l=n[z],p=l.func,null==p||p==a){h=l.name;break b}n=f[h];"function"==typeof n&&h in q.prototype?a===n?h=!0:(h=cc(n),h=!!h&&a===h[0]):h=!1;h&&dc(c,e);c.placeholder=d;return ec(c,a,b)}function Nb(a,b,c,d,e,g){var m=c&1,f=a.length,n=b.length;if(f!=n&&!(m&&n>f))return!1;if((n=g.get(a))&&g.get(b))return n==b;n=-1;var z=!0,l=c&2?new X:
k;g.set(a,b);for(g.set(b,a);++n<f;){var p=a[n],r=b[n];if(d)var q=m?d(r,p,n,b,a,g):d(p,r,n,a,b,g);if(q!==k){if(q)continue;z=!1;break}if(l){if(!yb(b,function(a,b){if(!l.has(b)&&(p===a||e(p,a,c,d,g)))return l.push(b)})){z=!1;break}}else if(p!==r&&!e(p,r,c,d,g)){z=!1;break}}g["delete"](a);g["delete"](b);return z}function bd(a,b,c,d,e,g,f){switch(c){case "[object DataView]":if(a.byteLength!=b.byteLength||a.byteOffset!=b.byteOffset)break;a=a.buffer;b=b.buffer;case "[object ArrayBuffer]":if(a.byteLength!=
b.byteLength||!g(new Ia(a),new Ia(b)))break;return!0;case "[object Boolean]":case "[object Date]":case "[object Number]":return ha(+a,+b);case "[object Error]":return a.name==b.name&&a.message==b.message;case "[object RegExp]":case "[object String]":return a==b+"";case "[object Map]":var m=Ab;case "[object Set]":m||(m=za);if(a.size!=b.size&&!(d&1))break;if(c=f.get(a))return c==b;d|=2;f.set(a,b);b=Nb(m(a),m(b),d,e,g,f);f["delete"](a);return b;case "[object Symbol]":if(qa)return qa.call(a)==qa.call(b)}return!1}
function fc(a){return eb(Sb(a,k,gc),a+"")}function Za(a){return Kb(a,G,gb)}function Xc(a){return Kb(a,ja,ac)}function hb(a){return(w.call(f,"placeholder")?f:a).placeholder}function D(){var a=f.iteratee||ib;a=a===ib?Ob:a;return arguments.length?a(arguments[0],arguments[1]):a}function La(a,b){a=a.__data__;var c=typeof b;return("string"==c||"number"==c||"symbol"==c||"boolean"==c?"__proto__"!==b:null===b)?a["string"==typeof b?"string":"hash"]:a.map}function jd(a){for(var b=G(a),c=b.length;c--;){var d=
b[c],e=a[d];b[c]=[d,e,e===e&&!y(e)]}return b}function T(a,b){a=null==a?k:a[b];b=!y(a)||hc&&hc in a?!1:(ka(a)?qd:rd).test(U(a));return b?a:k}function ic(a,b,c){b=bb(b,a);for(var d=-1,e=b.length,g=!1;++d<e;){var f=Z(b[d]);if(!(g=null!=a&&c(a,f)))break;a=a[f]}if(g||++d!=e)return g;e=null==a?0:a.length;return!!e&&Ha(e)&&fa(f,e)&&(v(a)||Ba(a))}function Rc(a){var b=a.length,c=new a.constructor(b);b&&"string"==typeof a[0]&&w.call(a,"index")&&(c.index=a.index,c.input=a.input);return c}function Tc(a){return"function"!=
typeof a.constructor||jb(a)?{}:Ja(jc(a))}function Wc(a,b,c){var d=a.constructor;switch(b){case "[object ArrayBuffer]":return fb(a);case "[object Boolean]":case "[object Date]":return new d(+a);case "[object DataView]":return b=c?fb(a.buffer):a.buffer,new a.constructor(b,a.byteOffset,a.byteLength);case "[object Float32Array]":case "[object Float64Array]":case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return b=
c?fb(a.buffer):a.buffer,new a.constructor(b,a.byteOffset,a.length);case "[object Map]":return new d;case "[object Number]":case "[object String]":return new d(a);case "[object RegExp]":return b=new a.constructor(a.source,sd.exec(a)),b.lastIndex=a.lastIndex,b;case "[object Set]":return new d;case "[object Symbol]":return qa?Object(qa.call(a)):{}}}function Yc(a){return v(a)||Ba(a)||!!(kc&&a&&a[kc])}function fa(a,b){var c=typeof a;b=null==b?9007199254740991:b;return!!b&&("number"==c||"symbol"!=c&&td.test(a))&&
-1<a&&0==a%1&&a<b}function lc(a,b,c){if(!y(c))return!1;var d=typeof b;return("number"==d?L(c)&&fa(b,c.length):"string"==d&&b in c)?ha(c[b],a):!1}function cb(a,b){if(v(a))return!1;var c=typeof a;return"number"==c||"symbol"==c||"boolean"==c||null==a||ma(a)?!0:ud.test(a)||!vd.test(a)||null!=b&&a in Object(b)}function jb(a){var b=a&&a.constructor;return a===("function"==typeof b&&b.prototype||Ma)}function Qb(a,b){return function(c){return null==c?!1:c[a]===b&&(b!==k||a in Object(c))}}function Sb(a,b,
c){b=H(b===k?a.length-1:b,0);return function(){for(var d=arguments,e=-1,g=H(d.length-b,0),f=Array(g);++e<g;)f[e]=d[b+e];e=-1;for(g=Array(b+1);++e<b;)g[e]=d[e];g[b]=c(f);return va(a,this,g)}}function ec(a,b,c){var d=b+"";b=eb;var e=(e=d.match(wd))?e[1].split(xd):[];c=yd(e,c);if(e=c.length){var g=e-1;c[g]=(1<e?"\x26 ":"")+c[g];c=c.join(2<e?", ":" ");d=d.replace(zd,"{\n/* [wrapped with "+c+"] */\n")}return b(a,d)}function mc(a){var b=0,c=0;return function(){var d=Ad(),e=16-(d-c);c=d;if(0<e){if(800<=
++b)return arguments[0]}else b=0;return a.apply(k,arguments)}}function Z(a){if("string"==typeof a||ma(a))return a;var b=a+"";return"0"==b&&1/a==-na?"-0":b}function U(a){if(null!=a){try{return nc.call(a)}catch(b){}return a+""}return""}function yd(a,b){C(Bd,function(c){var d="_."+c[0];b&c[1]&&!Xa(a,d)&&a.push(d)});return a.sort()}function Cb(a){if(a instanceof q)return a.clone();var b=new E(a.__wrapped__,a.__chain__);b.__actions__=M(a.__actions__);b.__index__=a.__index__;b.__values__=a.__values__;return b}
function oc(a,b,c){var d=null==a?0:a.length;if(!d)return-1;c=null==c?0:N(c);0>c&&(c=H(d+c,0));return wb(a,D(b,3),c)}function gc(a){return(null==a?0:a.length)?$a(a,1):[]}function pc(a){var b=null==a?0:a.length;return b?a[b-1]:k}function kb(a){return null==a?a:Cd.call(a)}function qc(a){a=f(a);a.__chain__=!0;return a}function Na(a,b){return b(a)}function Dd(){return this}function rc(a,b){return(v(a)?C:Y)(a,D(b,3))}function Oa(a,b){if("function"!=typeof a||null!=b&&"function"!=typeof b)throw new TypeError("Expected a function");
var c=function(){var d=arguments,e=b?b.apply(this,d):d[0],g=c.cache;if(g.has(e))return g.get(e);d=a.apply(this,d);c.cache=g.set(e,d)||g;return d};c.cache=new (Oa.Cache||K);return c}function lb(a){if("function"!=typeof a)throw new TypeError("Expected a function");return function(){var b=arguments;switch(b.length){case 0:return!a.call(this);case 1:return!a.call(this,b[0]);case 2:return!a.call(this,b[0],b[1]);case 3:return!a.call(this,b[0],b[1],b[2])}return!a.apply(this,b)}}function ha(a,b){return a===
b||a!==a&&b!==b}function L(a){return null!=a&&Ha(a.length)&&!ka(a)}function Pa(a){return x(a)&&L(a)}function ka(a){if(!y(a))return!1;a=Q(a);return"[object Function]"==a||"[object GeneratorFunction]"==a||"[object AsyncFunction]"==a||"[object Proxy]"==a}function Ha(a){return"number"==typeof a&&-1<a&&0==a%1&&9007199254740991>=a}function y(a){var b=typeof a;return null!=a&&("object"==b||"function"==b)}function x(a){return null!=a&&"object"==typeof a}function sc(a){return"string"==typeof a||!v(a)&&x(a)&&
"[object String]"==Q(a)}function ma(a){return"symbol"==typeof a||x(a)&&"[object Symbol]"==Q(a)}function tc(a){if(!a)return[];if(L(a))return sc(a)?Ed.test(a)?a.match(Fd)||[]:a.split(""):M(a);if(ra&&a[ra]){a=a[ra]();for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}b=A(a);return("[object Map]"==b?Ab:"[object Set]"==b?za:uc)(a)}function vc(a){if(!a)return 0===a?a:0;a=Qa(a);return a===na||a===-na?1.7976931348623157E308*(0>a?-1:1):a===a?a:0}function N(a){a=vc(a);var b=a%1;return a===a?b?a-b:
a:0}function Qa(a){if("number"==typeof a)return a;if(ma(a))return wc;y(a)&&(a="function"==typeof a.valueOf?a.valueOf():a,a=y(a)?a+"":a);if("string"!=typeof a)return 0===a?a:+a;a=a.replace(Gd,"");var b=Hd.test(a);return b||Id.test(a)?Jd(a.slice(2),b?2:8):Kd.test(a)?wc:+a}function Xb(a){return null==a?"":Ub(a)}function db(a,b,c){a=null==a?k:ab(a,b);return a===k?c:a}function Rb(a,b){return null!=a&&ic(a,b,ad)}function G(a){if(L(a))a=Db(a);else if(jb(a)){var b=[],c;for(c in Object(a))w.call(a,c)&&"constructor"!=
c&&b.push(c);a=b}else a=Ld(a);return a}function ja(a){if(L(a))a=Db(a,!0);else if(y(a)){var b=jb(a),c=[];for(d in a)("constructor"!=d||!b&&w.call(a,d))&&c.push(d);a=c}else{var d=[];if(null!=a)for(b in Object(a))d.push(b);a=d}return a}function uc(a){return null==a?[]:Nc(a,G(a))}function xc(a){return function(){return a}}function ba(a){return a}function ib(a){return Ob("function"==typeof a?a:Fa(a,1))}function mb(a,b,c){var d=G(b),e=Jb(b,d);null!=c||y(b)&&(e.length||!d.length)||(c=b,b=a,a=this,e=Jb(b,
G(b)));var g=!(y(c)&&"chain"in c)||!!c.chain,f=ka(a);C(e,function(c){var d=b[c];a[c]=d;f&&(a.prototype[c]=function(){var b=this.__chain__;if(g||b){var c=a(this.__wrapped__);(c.__actions__=M(this.__actions__)).push({func:d,args:arguments,thisArg:a});c.__chain__=b;return c}return d.apply(a,W([this.value()],arguments))})});return a}function nb(){}function Pb(a){return cb(a)?Lc(Z(a)):kd(a)}function ob(){return[]}function yc(){return!1}var k,na=1/0,wc=0/0,Bd=[["ary",128],["bind",1],["bindKey",2],["curry",
8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],vd=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ud=/^\w*$/,Md=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gd=/^\s+|\s+$/g,zd=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,wd=/\{\n\/\* \[wrapped with (.+)\] \*/,xd=/,? & /,Nd=/\\(\\)?/g,sd=/\w*$/,Kd=/^[-+]0x[0-9a-f]+$/i,Hd=/^0b[01]+$/i,rd=/^\[object .+?Constructor\]$/,Id=/^0o[0-7]+$/i,td=/^(?:0|[1-9]\d*)$/,Fd=
/\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Ed=/[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f]/,
u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0;u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=
u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1;var t={};t["[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object DataView]"]=t["[object Boolean]"]=t["[object Date]"]=t["[object Float32Array]"]=t["[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object Symbol]"]=t["[object Uint8Array]"]=
t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0;t["[object Error]"]=t["[object Function]"]=t["[object WeakMap]"]=!1;var Jd=parseInt,zc="object"==typeof global&&global&&global.Object===Object&&global,Od="object"==typeof self&&self&&self.Object===Object&&self,B=zc||Od||Function("return this")(),pb="object"==typeof exports&&exports&&!exports.nodeType&&exports,Ra=pb&&"object"==typeof module&&module&&!module.nodeType&&module,Ac=Ra&&Ra.exports===pb,qb=Ac&&zc.process;
a:{try{var V=qb&&qb.binding&&qb.binding("util");break a}catch(a){}V=void 0}var Bc=V&&V.isMap,Cc=V&&V.isSet,Dc=V&&V.isTypedArray,rb=Array.prototype,Ma=Object.prototype,sb=B["__core-js_shared__"],nc=Function.prototype.toString,w=Ma.hasOwnProperty,hc=function(){var a=/[^.]+$/.exec(sb&&sb.keys&&sb.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),Lb=Ma.toString,qd=RegExp("^"+nc.call(w).replace(/[\\^$.*+?()[\]{}|]/g,"\\$\x26").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+
"$"),Sa=Ac?B.Buffer:k,O=B.Symbol,Ia=B.Uint8Array,Yb=Sa?Sa.allocUnsafe:k,jc=Bb(Object.getPrototypeOf,Object),Ec=Object.create,Fc=Ma.propertyIsEnumerable,Pd=rb.splice,kc=O?O.isConcatSpreadable:k,ra=O?O.iterator:k,R=O?O.toStringTag:k,Ea=function(){try{var a=T(Object,"defineProperty");a({},"",{});return a}catch(b){}}(),tb=Object.getOwnPropertySymbols,Qd=Sa?Sa.isBuffer:k,Ld=Bb(Object.keys,Object),H=Math.max,S=Math.min,Ad=Date.now,Cd=rb.reverse,ub=T(B,"DataView"),sa=T(B,"Map"),vb=T(B,"Promise"),ca=T(B,
"Set"),ta=T(B,"WeakMap"),ua=T(Object,"create"),Ta=ta&&new ta,pa={},Rd=U(ub),Sd=U(sa),Td=U(vb),Ud=U(ca),Vd=U(ta),Ua=O?O.prototype:k,qa=Ua?Ua.valueOf:k,Vb=Ua?Ua.toString:k,Ja=function(){function a(){}return function(b){if(!y(b))return{};if(Ec)return Ec(b);a.prototype=b;b=new a;a.prototype=k;return b}}();f.prototype=Aa.prototype;f.prototype.constructor=f;E.prototype=Ja(Aa.prototype);E.prototype.constructor=E;q.prototype=Ja(Aa.prototype);q.prototype.constructor=q;P.prototype.clear=function(){this.__data__=
ua?ua(null):{};this.size=0};P.prototype["delete"]=function(a){a=this.has(a)&&delete this.__data__[a];this.size-=a?1:0;return a};P.prototype.get=function(a){var b=this.__data__;return ua?(a=b[a],"__lodash_hash_undefined__"===a?k:a):w.call(b,a)?b[a]:k};P.prototype.has=function(a){var b=this.__data__;return ua?b[a]!==k:w.call(b,a)};P.prototype.set=function(a,b){var c=this.__data__;this.size+=this.has(a)?0:1;c[a]=ua&&b===k?"__lodash_hash_undefined__":b;return this};J.prototype.clear=function(){this.__data__=
[];this.size=0};J.prototype["delete"]=function(a){var b=this.__data__;a=Da(b,a);if(0>a)return!1;a==b.length-1?b.pop():Pd.call(b,a,1);--this.size;return!0};J.prototype.get=function(a){var b=this.__data__;a=Da(b,a);return 0>a?k:b[a][1]};J.prototype.has=function(a){return-1<Da(this.__data__,a)};J.prototype.set=function(a,b){var c=this.__data__,d=Da(c,a);0>d?(++this.size,c.push([a,b])):c[d][1]=b;return this};K.prototype.clear=function(){this.size=0;this.__data__={hash:new P,map:new (sa||J),string:new P}};
K.prototype["delete"]=function(a){a=La(this,a)["delete"](a);this.size-=a?1:0;return a};K.prototype.get=function(a){return La(this,a).get(a)};K.prototype.has=function(a){return La(this,a).has(a)};K.prototype.set=function(a,b){var c=La(this,a),d=c.size;c.set(a,b);this.size+=c.size==d?0:1;return this};X.prototype.add=X.prototype.push=function(a){this.__data__.set(a,"__lodash_hash_undefined__");return this};X.prototype.has=function(a){return this.__data__.has(a)};F.prototype.clear=function(){this.__data__=
new J;this.size=0};F.prototype["delete"]=function(a){var b=this.__data__;a=b["delete"](a);this.size=b.size;return a};F.prototype.get=function(a){return this.__data__.get(a)};F.prototype.has=function(a){return this.__data__.has(a)};F.prototype.set=function(a,b){var c=this.__data__;if(c instanceof J){var d=c.__data__;if(!sa||199>d.length)return d.push([a,b]),this.size=++c.size,this;c=this.__data__=new K(d)}c.set(a,b);this.size=c.size;return this};var Y=function(a,b){return function(c,d){if(null==c)return c;
if(!L(c))return a(c,d);for(var e=c.length,g=b?e:-1,f=Object(c);(b?g--:++g<e)&&!1!==d(f[g],g,f););return c}}(Ga),Zc=function(a){return function(b,c,d){var e=-1,g=Object(b);d=d(b);for(var f=d.length;f--;){var h=d[a?f:++e];if(!1===c(g[h],h,g))break}return b}}(),Gc=Ta?function(a,b){Ta.set(a,b);return a}:ba,Wd=Ea?function(a,b){return Ea(a,"toString",{configurable:!0,enumerable:!1,value:xc(b),writable:!0})}:ba,Xd=ca&&1/za(new ca([,-0]))[1]==na?function(a){return new ca(a)}:nb,cc=Ta?function(a){return Ta.get(a)}:
nb,gb=tb?function(a){if(null==a)return[];a=Object(a);return wa(tb(a),function(b){return Fc.call(a,b)})}:ob,ac=tb?function(a){for(var b=[];a;)W(b,gb(a)),a=jc(a);return b}:ob,A=Q;if(ub&&"[object DataView]"!=A(new ub(new ArrayBuffer(1)))||sa&&"[object Map]"!=A(new sa)||vb&&"[object Promise]"!=A(vb.resolve())||ca&&"[object Set]"!=A(new ca)||ta&&"[object WeakMap]"!=A(new ta))A=function(a){var b=Q(a);if(a=(a="[object Object]"==b?a.constructor:k)?U(a):"")switch(a){case Rd:return"[object DataView]";case Sd:return"[object Map]";
case Td:return"[object Promise]";case Ud:return"[object Set]";case Vd:return"[object WeakMap]"}return b};var dc=mc(Gc),eb=mc(Wd),md=function(a){a=Oa(a,function(a){500===b.size&&b.clear();return a});var b=a.cache;return a}(function(a){var b=[];46===a.charCodeAt(0)&&b.push("");a.replace(Md,function(a,d,e,g){b.push(e?g.replace(Nd,"$1"):d||a)});return b}),Yd=la(function(a,b){return Pa(a)?Hb(a,$a(b,1,Pa,!0)):[]}),Zd=la(function(a,b){return Pa(a)?Hb(a,b):[]});fc(function(a){var b=a.length,c=b?a[0]:0,d=
this.__wrapped__,e=function(b){for(var c=-1,d=a.length,e=Array(d),g=null==b;++c<d;)e[c]=g?k:db(b,a[c]);return e};if(1<b||this.__actions__.length||!(d instanceof q)||!fa(c))return this.thru(e);d=d.slice(c,+c+(b?1:0));d.__actions__.push({func:Na,args:[e],thisArg:k});return(new E(d,this.__chain__)).thru(function(a){b&&!a.length&&a.push(k);return a})});var $d=function(a){return function(b,c,d){var e=Object(b);if(!L(b)){var g=D(c,3);b=G(b);c=function(a){return g(e[a],a,e)}}c=a(b,c,d);return-1<c?e[g?b[c]:
c]:k}}(oc),ae=function(a,b){return function(c,d){var e=v(c)?Ic:Oc,g=b?b():{};return e(c,a,D(d,2),g)}}(function(a,b,c){w.call(a,c)?a[c].push(b):Ca(a,c,[b])}),Va=function(){return B.Date.now()},Wa=la(function(a,b,c){var d=1;if(c.length){var e=da(c,hb(Wa));d|=32}var g=b,f=c,h=e,n=void 0,q=void 0;c=d&2;if(!c&&"function"!=typeof a)throw new TypeError("Expected a function");b=f?f.length:0;b||(d&=-97,f=h=k);n=n===k?n:H(N(n),0);q=q===k?q:N(q);b-=h?h.length:0;if(d&64){var l=f,p=h;f=h=k}e=c?k:cc(a);l=[a,d,
g,f,h,l,p,void 0,n,q];if(e&&(p=l[1],a=e[1],d=p|a,g=128==a&&8==p||128==a&&256==p&&l[7].length<=e[8]||384==a&&e[7].length<=e[8]&&8==p,131>d||g)){a&1&&(l[2]=e[2],d|=p&1?0:4);if(p=e[3])g=l[3],l[3]=g?Zb(g,p,e[4]):p,l[4]=g?da(l[3],"__lodash_placeholder__"):e[4];if(p=e[5])g=l[5],l[5]=g?$b(g,p,e[6]):p,l[6]=g?da(l[5],"__lodash_placeholder__"):e[6];(p=e[7])&&(l[7]=p);a&128&&(l[8]=null==l[8]?e[8]:S(l[8],e[8]));null==l[9]&&(l[9]=e[9]);l[0]=e[0];l[1]=d}a=l[0];d=l[1];g=l[2];f=l[3];h=l[4];q=l[9]=l[9]===k?c?0:a.length:
H(l[9]-b,0);!q&&d&24&&(d&=-25);c=d&&1!=d?8==d||16==d?od(a,d,q):32!=d&&33!=d||h.length?Ka.apply(k,l):pd(a,d,g,f):nd(a,d,g);return ec((e?Gc:dc)(c,l),a,d)});Oa.Cache=K;var Ba=Mb(function(){return arguments}())?Mb:function(a){return x(a)&&w.call(a,"callee")&&!Fc.call(a,"callee")},v=Array.isArray,ea=Qd||yc,Gb=Bc?ya(Bc):cd,Fb=Cc?ya(Cc):ed,Ya=Dc?ya(Dc):fd,Hc=function(a){return la(function(b,c){var d=-1,e=c.length,g=1<e?c[e-1]:k,f=2<e?c[2]:k;g=3<a.length&&"function"==typeof g?(e--,g):k;f&&lc(c[0],c[1],f)&&
(g=3>e?k:g,e=1);for(b=Object(b);++d<e;)(f=c[d])&&a(b,f,d,g);return b})}(function(a,b){ia(b,ja(b),a)}),be=fc(function(a,b){C(b,function(b){b=Z(b);Ca(a,b,Wa(a[b],a))});return a});f.assignIn=Hc;f.bind=Wa;f.bindAll=be;f.chain=qc;f.compact=function(a){for(var b=-1,c=null==a?0:a.length,d=0,e=[];++b<c;){var g=a[b];g&&(e[d++]=g)}return e};f.constant=xc;f.debounce=function(a,b,c){function d(b){var c=n,d=q;n=q=k;t=b;return l=a.apply(d,c)}function e(a){var c=a-r;a-=t;return r===k||c>=b||0>c||u&&a>=x}function g(){var a=
Va();if(e(a))return f(a);var c=setTimeout;var d=a-t;a=b-(a-r);d=u?S(a,x-d):a;p=c(g,d)}function f(a){p=k;if(w&&n)return d(a);n=q=k;return l}function h(){var a=Va(),c=e(a);n=arguments;q=this;r=a;if(c){if(p===k)return t=a=r,p=setTimeout(g,b),v?d(a):l;if(u)return p=setTimeout(g,b),d(r)}p===k&&(p=setTimeout(g,b));return l}var n,q,l,p,r,t=0,v=!1,u=!1,w=!0;if("function"!=typeof a)throw new TypeError("Expected a function");b=Qa(b)||0;if(y(c)){v=!!c.leading;var x=(u="maxWait"in c)?H(Qa(c.maxWait)||0,b):x;
w="trailing"in c?!!c.trailing:w}h.cancel=function(){p!==k&&clearTimeout(p);t=0;n=r=q=p=k};h.flush=function(){return p===k?l:f(Va())};return h};f.difference=Yd;f.filter=function(a,b){return(v(a)?wa:Ib)(a,D(b,3))};f.flatten=gc;f.groupBy=ae;f.iteratee=ib;f.keys=G;f.keysIn=ja;f.map=function(a,b){return(v(a)?xa:id)(a,D(b,3))};f.memoize=Oa;f.mixin=mb;f.negate=lb;f.property=Pb;f.reject=function(a,b){return(v(a)?wa:Ib)(a,lb(D(b,3)))};f.reverse=kb;f.take=function(a,b,c){if(!a||!a.length)return[];b=c||b===
k?1:N(b);return Tb(a,0,0>b?0:b)};f.tap=function(a,b){b(a);return a};f.thru=Na;f.toArray=tc;f.uniq=function(a){if(a&&a.length)a:{var b=-1,c=Xa,d=a.length,e=!0,f=[];if(200<=d){if(c=Xd(a)){a=za(c);break a}e=!1;c=zb;var m=new X}else m=f;b:for(;++b<d;){var h=a[b],k=h;h=0!==h?h:0;if(e&&k===k){for(var q=m.length;q--;)if(m[q]===k)continue b;f.push(h)}else c(m,k,void 0)||(m!==f&&m.push(k),f.push(h))}a=f}else a=[];return a};f.values=uc;f.without=Zd;f.extend=Hc;mb(f,f);f.eq=ha;f.find=$d;f.findIndex=oc;f.forEach=
rc;f.get=db;f.has=function(a,b){return null!=a&&ic(a,b,$c)};f.hasIn=Rb;f.identity=ba;f.isArguments=Ba;f.isArray=v;f.isArrayLike=L;f.isArrayLikeObject=Pa;f.isBuffer=ea;f.isFunction=ka;f.isLength=Ha;f.isMap=Gb;f.isObject=y;f.isObjectLike=x;f.isSet=Fb;f.isString=sc;f.isSymbol=ma;f.isTypedArray=Ya;f.last=pc;f.stubArray=ob;f.stubFalse=yc;f.noop=nb;f.now=Va;f.reduce=function(a,b,c){var d=v(a)?xb:Mc,e=3>arguments.length;return d(a,D(b,4),c,e,Y)};f.some=function(a,b,c){var d=v(a)?yb:ld;c&&lc(a,b,c)&&(b=k);
return d(a,D(b,3))};f.toFinite=vc;f.toInteger=N;f.toNumber=Qa;f.toString=Xb;f.each=rc;mb(f,function(){var a={};Ga(f,function(b,c){w.call(f.prototype,c)||(a[c]=b)});return a}(),{chain:!1});f.VERSION="4.17.5";Wa.placeholder=f;C(["drop","take"],function(a,b){q.prototype[a]=function(c){c=c===k?1:H(N(c),0);var d=this.__filtered__&&!b?new q(this):this.clone();d.__filtered__?d.__takeCount__=S(c,d.__takeCount__):d.__views__.push({size:S(c,4294967295),type:a+(0>d.__dir__?"Right":"")});return d};q.prototype[a+
"Right"]=function(b){return this.reverse()[a](b).reverse()}});C(["filter","map","takeWhile"],function(a,b){var c=b+1,d=1==c||3==c;q.prototype[a]=function(a){var b=this.clone();b.__iteratees__.push({iteratee:D(a,3),type:c});b.__filtered__=b.__filtered__||d;return b}});C(["head","last"],function(a,b){var c="take"+(b?"Right":"");q.prototype[a]=function(){return this[c](1).value()[0]}});C(["initial","tail"],function(a,b){var c="drop"+(b?"":"Right");q.prototype[a]=function(){return this.__filtered__?new q(this):
this[c](1)}});q.prototype.compact=function(){return this.filter(ba)};q.prototype.find=function(a){return this.filter(a).head()};q.prototype.findLast=function(a){return this.reverse().find(a)};q.prototype.invokeMap=la(function(a,b){return"function"==typeof a?new q(this):this.map(function(c){var d=a;d=bb(d,c);c=2>d.length?c:ab(c,Tb(d,0,-1));d=null==c?c:c[Z(pc(d))];return null==d?k:va(d,c,b)})});q.prototype.reject=function(a){return this.filter(lb(D(a)))};q.prototype.slice=function(a,b){a=N(a);var c=
this;if(c.__filtered__&&(0<a||0>b))return new q(c);0>a?c=c.takeRight(-a):a&&(c=c.drop(a));b!==k&&(b=N(b),c=0>b?c.dropRight(-b):c.take(b-a));return c};q.prototype.takeRightWhile=function(a){return this.reverse().takeWhile(a).reverse()};q.prototype.toArray=function(){return this.take(4294967295)};Ga(q.prototype,function(a,b){var c=/^(?:filter|find|map|reject)|While$/.test(b),d=/^(?:head|last)$/.test(b),e=f[d?"take"+("last"==b?"Right":""):b],g=d||/^find/.test(b);e&&(f.prototype[b]=function(){var b=this.__wrapped__,
h=d?[1]:arguments,n=b instanceof q,t=h[0],l=n||v(b),p=function(a){a=e.apply(f,W([a],h));return d&&r?a[0]:a};l&&c&&"function"==typeof t&&1!=t.length&&(n=l=!1);var r=this.__chain__,u=!!this.__actions__.length;t=g&&!r;n=n&&!u;if(!g&&l)return b=n?b:new q(this),b=a.apply(b,h),b.__actions__.push({func:Na,args:[p],thisArg:k}),new E(b,r);if(t&&n)return a.apply(this,h);b=this.thru(p);return t?d?b.value()[0]:b.value():b})});C("pop push shift sort splice unshift".split(" "),function(a){var b=rb[a],c=/^(?:push|sort|unshift)$/.test(a)?
"tap":"thru",d=/^(?:pop|shift)$/.test(a);f.prototype[a]=function(){var a=arguments;if(d&&!this.__chain__){var f=this.value();return b.apply(v(f)?f:[],a)}return this[c](function(c){return b.apply(v(c)?c:[],a)})}});Ga(q.prototype,function(a,b){if(a=f[b]){var c=a.name+"";(pa[c]||(pa[c]=[])).push({name:b,func:a})}});pa[Ka(k,2).name]=[{name:"wrapper",func:k}];q.prototype.clone=function(){var a=new q(this.__wrapped__);a.__actions__=M(this.__actions__);a.__dir__=this.__dir__;a.__filtered__=this.__filtered__;
a.__iteratees__=M(this.__iteratees__);a.__takeCount__=this.__takeCount__;a.__views__=M(this.__views__);return a};q.prototype.reverse=function(){if(this.__filtered__){var a=new q(this);a.__dir__=-1;a.__filtered__=!0}else a=this.clone(),a.__dir__*=-1;return a};q.prototype.value=function(){var a=this.__wrapped__.value(),b=this.__dir__,c=v(a),d=0>b,e=c?a.length:0;var f=0;for(var k=e,h=this.__views__,n=-1,q=h.length;++n<q;){var l=h[n],p=l.size;switch(l.type){case "drop":f+=p;break;case "dropRight":k-=
p;break;case "take":k=S(k,f+p);break;case "takeRight":f=H(f,k-p)}}h=k;k=h-f;f=d?h:f-1;h=this.__iteratees__;n=h.length;q=0;l=S(k,this.__takeCount__);if(!c||!d&&e==k&&l==k)return Wb(a,this.__actions__);c=[];a:for(;k--&&q<l;){f+=b;d=-1;for(e=a[f];++d<n;){var r=h[d];p=r.iteratee;r=r.type;p=p(e);if(2==r)e=p;else if(!p)if(1==r)continue a;else break a}c[q++]=e}return c};f.prototype.chain=function(){return qc(this)};f.prototype.commit=function(){return new E(this.value(),this.__chain__)};f.prototype.next=
function(){this.__values__===k&&(this.__values__=tc(this.value()));var a=this.__index__>=this.__values__.length,b=a?k:this.__values__[this.__index__++];return{done:a,value:b}};f.prototype.plant=function(a){for(var b,c=this;c instanceof Aa;){var d=Cb(c);d.__index__=0;d.__values__=k;b?e.__wrapped__=d:b=d;var e=d;c=c.__wrapped__}e.__wrapped__=a;return b};f.prototype.reverse=function(){var a=this.__wrapped__;return a instanceof q?(this.__actions__.length&&(a=new q(this)),a=a.reverse(),a.__actions__.push({func:Na,
args:[kb],thisArg:k}),new E(a,this.__chain__)):this.thru(kb)};f.prototype.toJSON=f.prototype.valueOf=f.prototype.value=function(){return Wb(this.__wrapped__,this.__actions__)};f.prototype.first=f.prototype.head;ra&&(f.prototype[ra]=Dd);"function"==typeof define?(B.__jira_integration_plugin_lodash__=f,define("jira-integration-plugin/custom-lodash",function(){return f})):Ra?((Ra.exports=f)._=f,pb._=f):B.__jira_integration_plugin_lodash__=f}).call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:fields', location = '/fields/fields.soy' */
// This file was automatically generated from fields.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace jiraIntegration.templates.fields.
 */

if (typeof jiraIntegration == 'undefined') { var jiraIntegration = {}; }
if (typeof jiraIntegration.templates == 'undefined') { jiraIntegration.templates = {}; }
if (typeof jiraIntegration.templates.fields == 'undefined') { jiraIntegration.templates.fields = {}; }


jiraIntegration.templates.fields.stringField = function(opt_data, opt_ignored) {
  return '' + jiraIntegration.templates.fields.fieldWithExtraAttributes(soy.$$augmentMap(opt_data, {extraFieldClasses: 'long-field'}));
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.stringField.soyTemplateName = 'jiraIntegration.templates.fields.stringField';
}


jiraIntegration.templates.fields.textareaField = function(opt_data, opt_ignored) {
  return '<div class="field-group jira-field' + ((opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '') + '" data-jira-type="' + soy.$$escapeHtml(opt_data.jiraType) + '"><label for="' + soy.$$escapeHtml(opt_data.name) + '">' + soy.$$escapeHtml(opt_data.labelText) + ((opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '') + '</label><textarea rows="3" id="' + soy.$$escapeHtml(opt_data.name) + '" class="textarea long-field" data-name="' + soy.$$escapeHtml(opt_data.name) + '" name="' + soy.$$escapeHtml(opt_data.name) + '"' + ((opt_data.extraAttributes) ? ' ' + aui.renderExtraAttributes(opt_data) : '') + '>' + soy.$$escapeHtml(opt_data.value) + '</textarea>' + jiraIntegration.templates.fields.errors(opt_data) + '</div>';
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.textareaField.soyTemplateName = 'jiraIntegration.templates.fields.textareaField';
}


jiraIntegration.templates.fields.arrayField = function(opt_data, opt_ignored) {
  return '' + jiraIntegration.templates.fields.fieldWithExtraAttributes(soy.$$augmentMap(opt_data, {extraFieldClasses: 'long-field'}));
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.arrayField.soyTemplateName = 'jiraIntegration.templates.fields.arrayField';
}


jiraIntegration.templates.fields.numberField = function(opt_data, opt_ignored) {
  return '' + jiraIntegration.templates.fields.fieldWithExtraAttributes(soy.$$augmentMap(opt_data, {extraFieldClasses: 'medium-field'}));
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.numberField.soyTemplateName = 'jiraIntegration.templates.fields.numberField';
}


jiraIntegration.templates.fields.allowedValuesField = function(opt_data, opt_ignored) {
  return '' + ((opt_data.options.length) ? jiraIntegration.templates.fields.fieldWithExtraAttributes(soy.$$augmentMap(opt_data, {type: 'select'})) : jiraIntegration.templates.fields.fieldWithExtraAttributes(soy.$$augmentMap(opt_data, {type: 'value', value: 'None'})));
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.allowedValuesField.soyTemplateName = 'jiraIntegration.templates.fields.allowedValuesField';
}


jiraIntegration.templates.fields.timeTrackingField = function(opt_data, opt_ignored) {
  return '' + jiraIntegration.templates.fields.fieldWithExtraAttributes(soy.$$augmentMap(opt_data, {extraFieldClasses: 'medium-field'}));
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.timeTrackingField.soyTemplateName = 'jiraIntegration.templates.fields.timeTrackingField';
}


jiraIntegration.templates.fields.radioField = function(opt_data, opt_ignored) {
  return '' + aui.form.radioField(soy.$$augmentMap(opt_data, {legendContent: opt_data.labelText, extraAttributes: {'data-name': opt_data.name, name: opt_data.name, 'data-jira-type': opt_data.jiraType}, extraClasses: 'jira-field'}));
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.radioField.soyTemplateName = 'jiraIntegration.templates.fields.radioField';
}


jiraIntegration.templates.fields.unrenderableTypeField = function(opt_data, opt_ignored) {
  return '<div class="field-group jira-field jira-field-unrenderable' + ((opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '') + '"><label>' + soy.$$escapeHtml(opt_data.labelText) + ((opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '') + '</label>' + aui.form.value({content: opt_data.reasonContent}) + jiraIntegration.templates.fields.errors(opt_data) + '</div>';
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.unrenderableTypeField.soyTemplateName = 'jiraIntegration.templates.fields.unrenderableTypeField';
}


jiraIntegration.templates.fields.dateField = function(opt_data, opt_ignored) {
  return '' + jiraIntegration.templates.fields.fieldWithExtraAttributes(soy.$$augmentMap(opt_data, {extraFieldClasses: 'medium-field'}));
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.dateField.soyTemplateName = 'jiraIntegration.templates.fields.dateField';
}


jiraIntegration.templates.fields.checkboxField = function(opt_data, opt_ignored) {
  return '' + aui.form.checkboxField(soy.$$augmentMap(opt_data, {legendContent: opt_data.labelText, extraAttributes: {'data-name': opt_data.name, name: opt_data.name, 'data-jira-type': opt_data.jiraType}, extraClasses: 'jira-field'}));
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.checkboxField.soyTemplateName = 'jiraIntegration.templates.fields.checkboxField';
}


jiraIntegration.templates.fields.select2WithIconField = function(opt_data, opt_ignored) {
  var output = '<div class="field-group jira-field' + ((opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '') + '" data-jira-type="' + soy.$$escapeHtml(opt_data.jiraType) + '"><label for="' + soy.$$escapeHtml(opt_data.name) + '">' + soy.$$escapeHtml(opt_data.labelText) + ((opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '') + '</label><select id="' + soy.$$escapeHtml(opt_data.name) + '" class="medium-field" name="' + soy.$$escapeHtml(opt_data.name) + '" data-name="' + soy.$$escapeHtml(opt_data.name) + '"' + ((opt_data.extraAttributes) ? ' ' + aui.renderExtraAttributes(opt_data) : '') + '>';
  var optionList112 = opt_data.options;
  var optionListLen112 = optionList112.length;
  for (var optionIndex112 = 0; optionIndex112 < optionListLen112; optionIndex112++) {
    var optionData112 = optionList112[optionIndex112];
    output += '<option value="' + soy.$$escapeHtml(optionData112.value) + '" ' + ((optionData112.selected) ? 'selected' : '') + ' data-icon-url="' + soy.$$escapeHtml(optionData112.iconUrl) + '">' + soy.$$escapeHtml(optionData112.text) + '</option>';
  }
  output += '</select>' + jiraIntegration.templates.fields.errors(opt_data) + '</div>';
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.select2WithIconField.soyTemplateName = 'jiraIntegration.templates.fields.select2WithIconField';
}


jiraIntegration.templates.fields.select2WithIconOption = function(opt_data, opt_ignored) {
  return ((opt_data.iconUrl) ? aui.avatar.avatar({avatarImageUrl: opt_data.iconUrl, size: 'xsmall', isProject: opt_data.isProject, extraClasses: 'select-option-image', tagName: 'span'}) : '') + '<span class="select-option" title="' + soy.$$escapeHtml(opt_data.optionValue) + '">' + soy.$$escapeHtml(opt_data.optionValue) + '</span>';
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.select2WithIconOption.soyTemplateName = 'jiraIntegration.templates.fields.select2WithIconOption';
}


jiraIntegration.templates.fields.labelFieldResult = function(opt_data, opt_ignored) {
  return '' + ((opt_data.label.isNew) ? soy.$$escapeHtml(AJS.format('\x22{0}\x22 - (New label)',opt_data.label.labelName)) : soy.$$escapeHtml(opt_data.label.labelName));
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.labelFieldResult.soyTemplateName = 'jiraIntegration.templates.fields.labelFieldResult';
}


jiraIntegration.templates.fields.userOptionSelect = function(opt_data, opt_ignored) {
  var output = '';
  var userOption__soy150 = '' + soy.$$escapeHtml(opt_data.displayName) + ((! opt_data.isSystemOption) ? ' - (' + soy.$$escapeHtml(opt_data.name) + ')' : '');
  output += '<span data-value="' + soy.$$escapeHtml(opt_data.name) + '" title="' + soy.$$filterNoAutoescape(userOption__soy150) + '">' + soy.$$filterNoAutoescape(userOption__soy150) + '</span>';
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.userOptionSelect.soyTemplateName = 'jiraIntegration.templates.fields.userOptionSelect';
}


jiraIntegration.templates.fields.sprintSelect = function(opt_data, opt_ignored) {
  return '<span title="' + soy.$$escapeHtml(opt_data.name) + '">' + soy.$$escapeHtml(opt_data.name) + '<span class="sprint-detail">' + ((opt_data.state == 'FUTURE') ? soy.$$escapeHtml(AJS.format('(Future sprint in {0})',opt_data.board)) : '') + ((opt_data.state == 'ACTIVE') ? soy.$$escapeHtml(AJS.format('(Active sprint in {0})',opt_data.board)) : '') + '</span></span>';
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.sprintSelect.soyTemplateName = 'jiraIntegration.templates.fields.sprintSelect';
}


jiraIntegration.templates.fields.epicSelect = function(opt_data, opt_ignored) {
  return '<span title="' + soy.$$escapeHtml(opt_data.name) + ' (' + soy.$$escapeHtml(opt_data.key) + ')">' + soy.$$escapeHtml(opt_data.name) + ((opt_data.key) ? '<span class="epic-detail">' + soy.$$escapeHtml(opt_data.key) + '</span>' : '') + '</span>';
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.epicSelect.soyTemplateName = 'jiraIntegration.templates.fields.epicSelect';
}


jiraIntegration.templates.fields.errors = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '';
  if (opt_data.errorTexts) {
    var errorList195 = opt_data.errorTexts;
    var errorListLen195 = errorList195.length;
    for (var errorIndex195 = 0; errorIndex195 < errorListLen195; errorIndex195++) {
      var errorData195 = errorList195[errorIndex195];
      output += '<div class="error">' + soy.$$escapeHtml(errorData195) + '</div>';
    }
  }
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.errors.soyTemplateName = 'jiraIntegration.templates.fields.errors';
}


jiraIntegration.templates.fields.fieldWithExtraAttributes = function(opt_data, opt_ignored) {
  var output = '<div class="field-group jira-field' + ((opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '') + '" data-jira-type=' + soy.$$escapeHtml(opt_data.jiraType) + '>' + aui.form.label({forField: opt_data.name, isRequired: opt_data.isRequired, content: '' + soy.$$escapeHtml(opt_data.labelText)});
  switch (opt_data.type) {
    case 'select':
      output += aui.form.select({id: opt_data.name, name: opt_data.name, labelContent: '' + soy.$$escapeHtml(opt_data.labelText), options: opt_data.options, isRequired: opt_data.isRequired, isMultiple: opt_data.isMultiple, extraAttributes: soy.$$augmentMap({'data-name': opt_data.name}, opt_data.extraAttributes), extraClasses: opt_data.extraFieldClasses});
      break;
    case 'value':
      output += aui.form.value({id: opt_data.name, content: '' + soy.$$escapeHtml(opt_data.value)});
      break;
    default:
      output += aui.form.input({id: opt_data.name, name: opt_data.name, type: 'text', value: opt_data.value, extraAttributes: soy.$$augmentMap({'data-name': opt_data.name}, opt_data.extraAttributes), extraClasses: opt_data.extraFieldClasses});
  }
  output += jiraIntegration.templates.fields.errors(opt_data) + '</div>';
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.fieldWithExtraAttributes.soyTemplateName = 'jiraIntegration.templates.fields.fieldWithExtraAttributes';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:fields', location = '/fields/fields.js' */
define("jira-integration-plugin/fields",["jquery","jira-integration-plugin/custom-lodash","jira-integration-plugin/label-picker"],function(h,g,W){function D(a,b,c,d){var e=b.schema.system||"customfield_"+b.schema.customId,k=b.schema.system||b.schema.custom||b.schema.customId,l=p[k],E=!(!l||l.canRender&&!l.canRender(b)),F=!(!b.operations||!b.operations.length);l=E&&F?l:X;return l.getContext({labelText:b.name,name:e,isRequired:b.required,value:c[e],errorTexts:d[e],jiraType:k,isRenderable:E,hasOperations:F,
handler:l,extraAttributes:b.required&&{"data-aui-validation-field":"",required:!0}},b,a,c)}function n(a,b,c){var d=a.name;a.value=(h.isPlainObject(a.value)?a.value.name:a.value)||c&&c.fields[d]||b&&b.defaultValue||"";return a}function t(a){return a.val()}function G(a){a=a.val();return/\d/.test(a)&&/^-?\d*\.?\d*$/.test(a)?Number(a):a||null}function H(a,b,c){var d=a.name;a.value=a.value&&a.value.join(",")||c&&c.fields[d]&&c.fields[d].join(",")||b&&b.defaultValue&&b.defaultValue.join(" ");return a}function I(a){return g.map(a.val().split(","),
h.trim)}function J(a,b,c){function d(a){return Array.isArray(a)?a.map(function(a){return a.name||a.id}):[a.name||a.id]}var e=a.name,k=a.value;c=c&&c.fields[e];e=b&&b.defaultValue;var l=k?d(k):c?d(c):e?d(e):[];a.options=g.map(b.allowedValues,function(a){return{value:a.id,text:a.name||a.value,selected:l.includes(a.name||a.id)}});b.required||"option"!==b.schema.type||a.options.unshift({value:-1,text:"None"});a.isMultiple=b.operations.includes("add");delete a.value;
return a}function x(a,b){var c=b.val(),d=function(b){var c={};c[a]=b;return c};return b.attr("multiple")?Array.isArray(c)?g.map(c,d):[d(c)]:d(c)}function K(a,b,c){var d=a.name;a.value=a.value&&a.value.name||c&&c.fields[d]&&c.fields[d].name||("assignee"===q(b)?-1:"")||b&&b.defaultValue&&b.defaultValue.name;a.extraClasses="array"===b.schema.type?"multi-user-picker":"single-user-picker";return a}function L(a,b,c){var d=a.value||c&&c.fields[a.name]||b&&b.defaultValue;a.fields=g.map(b.allowedValues,function(a){return{id:a.id,
value:a.id,labelText:a.name||a.value,isChecked:Array.isArray(d)?d.some(function(b){return b.id===a.id}):d&&d.id===a.id}});delete a.value;return a}function M(a){return a.find("input:checked").toArray().map(function(a){a=h(a);return{id:a.attr("value"),value:a.parent().find("label").text()}})}function y(a,b,c,d,e){var k=a.find("input"),l=a.attr("name");k.removeClass("text").removeClass("long-field").addClass("medium-long-field");k.auiSelect2(h.extend({minimumInputLength:1,id:l,name:l,query:function(a){r(b,
c,a.term,d).done(function(b){a.callback({results:b})})}},e));(e=k.auiSelect2("data"))&&-1!==e.id&&k.auiSelect2("val",e.id);a.find("div.aui-select2-container").addClass("jira-select2-drop-box")}function N(a,b,c,d,e){e=h.extend({},e,{multiple:"com.atlassian.jira.plugin.system.customfieldtypes:multiuserpicker"===c,formatResult:function(a){return f.fields.userOptionSelect({name:a.id,displayName:a.text,isSystemOption:!!a.isSystemOption})}});y(a,b,c,d,e)}function r(a,b,c,d){a=h.extend({restType:b,issueKey:d&&
d.key||"",term:c},a);return h.ajax({type:"POST",timeout:0,contentType:"application/json",dataType:"json",url:AJS.contextPath()+"/rest/jira-integration/latest/fields/autocomplete",data:JSON.stringify(a)})}function O(a){var b;a.id&&(b=h(a.element).attr("data-icon-url"));return f.fields.select2WithIconOption({optionValue:a.text,iconUrl:b})}function z(a){return(a=a.auiSelect2("data"))&&-1===a.id?void 0:a}function q(a){return a.schema?a.schema.system||a.schema.custom||a.schema.customId:a}function A(a){return p[q(a)]}
function P(a){return(a=Q(a))&&A(a)}function Q(a){return a.closest(".jira-field").attr("data-jira-type")}function Y(a,b){return h.ajax({type:"GET",timeout:0,url:AJS.contextPath()+"/rest/jira-integration/1.0/servers/"+a.serverId+"/projects/"+a.projectKey+"/issue-types/"+a.issueType+"/fields-meta"}).pipe(function(a){var c=[];g.each(a.fields,function(a){var d=q(a);a.required&&!b.excludedFields.includes(d)&&c.push(a)});return c})}function R(a,b,c){var d=Q(a),e=d&&A(d);(e=e&&e.behavior)&&e(a,b,d,c)}function S(a){var b=
P(a);return b&&b.getValue&&b.getValue(a)}function u(a,b){return function(c,d){c=a[c.attr("id")];d(c||b)}}var f=window.jiraIntegration.templates,v={template:f.fields.stringField,getContext:n,getValue:t},Z={template:f.fields.stringField,getContext:function(a,b,c){var d={"data-aui-validation-field":"",pattern:"([a-zA-Z][a-zA-Z0-9-+.]*://.+)|^$","data-aui-validation-pattern-msg":"Enter a valid URL scheme"};return h.extend(!0,{},n(a,b,c),{extraAttributes:d})},getValue:t},aa=
{template:f.fields.stringField,getContext:K,getInternalValue:z,getValue:function(a){a=a.val();if("-1"!==a)return{name:a}},behavior:function(a,b,c,d){var e={minimumInputLength:0,initSelection:u(b,{id:-1,text:"Automatic",isSystemOption:!0}),query:function(a){function e(b){1===a.page&&(a.element.prop("required")||b.unshift({id:"",text:"Unassigned",isSystemOption:!0}),b.unshift({id:-1,text:"Automatic",isSystemOption:!0}));
a.callback({results:b})}0<a.term.length?r(b,c,a.term,d).done(e):e([])}};N(a,b,c,d,e)}},B={template:f.fields.stringField,getContext:K,getValue:function(a){var b=function(a){return{name:a}},c=a.val();a=a.closest(".jira-field").is(".multi-user-picker");return c?a?g.map(c.split(","),b):b(c):a?[]:null},behavior:function(a,b,c,d){var e=a.find(".long-field").attr("value")||"";e={formatInputTooShort:function(){return "Find users..."},initSelection:u(b,{id:-1,text:e,isSystemOption:!1})};
N(a,b,c,d,e)}},ba={template:f.fields.arrayField,getContext:H,getValue:I,behavior:function(a,b,c,d){a=a.find("input");W.build(a,function(a){return r(b,c,a,d)})}},C={template:f.fields.textareaField,getContext:n,getValue:t},ca={template:f.fields.numberField,getContext:function(a,b,c){var d={"data-aui-validation-field":"",pattern:"(([0-9]*[.])?[0-9]+)|^$","data-aui-validation-pattern-msg":"Enter a valid number"};return h.extend(!0,{},n(a,b,c),{extraAttributes:d})},getValue:G},
T={template:f.fields.arrayField,getContext:H,getValue:I},m={template:f.fields.allowedValuesField,getContext:J,getValue:g.bind(x,null,"id"),behavior:function(a){a.find("select[multiple]").auiSelect2()}},U={template:f.fields.allowedValuesField,getContext:J,getValue:g.bind(x,null,"id")},da={template:f.fields.timeTrackingField,getContext:function(a,b,c){b={"data-aui-validation-field":"",pattern:"(([0-9]+w|[0-9]+d|[0-9]+m|[0-9]+h|[0-9]+)\\s*)*","data-aui-validation-pattern-msg":"Enter a valid time estimate (eg. 3w 4d 12h)"};
a.value=a.value&&a.value.remainingEstimate||c&&c.fields[name]&&c.fields[name].remainingEstimate||"";return h.extend(!0,{},a,{extraAttributes:b})},getValue:function(a){return{remainingEstimate:a.val()}}},V={template:f.fields.dateField,getContext:function(a,b,c){var d={"data-aui-validation-field":"",pattern:"^([0-9]{2,4}-(0?[1-9]|10|11|12)-([0-2]?[1-9]|10|20|30|31))$|^$","data-aui-validation-pattern-msg":"Enter a valid date"};return h.extend(!0,{},n(a,b,c),{extraAttributes:d})},
getValue:function(a){a=a.val();return""===a?null:a},behavior:function(a){var b=a.find("input");navigator.userAgent.match(/Trident/)&&"5.3.5">AJS.version?(a="placeholder"in document.createElement("input"),b.attr("placeholder","YYYY-MM-DD"),a||b.on("focus",function(){b.val()===b.attr("placeholder")&&b.val("")}).on("blur",function(){""===b.val()&&b.val(b.attr("placeholder"))}).blur()):WRM.require("wr!com.atlassian.auiplugin:aui-date-picker").done(function(){b.datePicker({overrideBrowserDefault:!0})})}},
ea={template:f.fields.select2WithIconField,getContext:function(a,b,c){var d=a.name,e=a.value&&a.value.id||b&&b.defaultValue&&b.defaultValue.id||"",k=a.value&&a.value.name||c&&c.fields&&c.fields[d]&&c.fields[d].name||b&&b.defaultValue&&b.defaultValue.id||"";delete a.value;a.options=g.map(b.allowedValues,function(a){return{value:a.id,text:a.name,selected:k===a.name||e===a.id,iconUrl:a.iconUrl}});return a},getValue:g.bind(x,null,"id"),behavior:function(a,b,c,d){h.fn.auiSelect2?(a=a.find("select"),a.addClass("jira-select2-drop-box"),
a.auiSelect2({hasAvatar:!0,minimumResultsForSearch:-1,formatSelection:O,formatResult:O})):AJS.log("AUI version 5.2 or greater is required as this plugin needs the .auiSelect2() jQuery plugin.")}},X={template:f.fields.unrenderableTypeField,getContext:function(a,b,c){a.reasonContent=a.isRenderable?a.hasOperations?null:c?AJS.format("{0}Edit{1} this field in Jira.",'\x3ca href\x3d"'+c.url+'"\x3e',"\x3c/a\x3e"):AJS.escapeHtml("Edit this field in Jira after creation."):c?AJS.format("{0}Edit{1} this field in Jira.",
'\x3ca href\x3d"'+c.url+'"\x3e',"\x3c/a\x3e"):AJS.escapeHtml("Edit this field in Jira after creation.");return a}},p={"com.pyxis.greenhopper.jira:gh-epic-label":v,string:v,summary:v,"com.atlassian.jira.plugin.system.customfieldtypes:textfield":v,"com.atlassian.jira.plugin.system.customfieldtypes:url":Z,environment:C,"com.atlassian.jira.plugin.system.customfieldtypes:textarea":C,description:C,"com.atlassian.jira.plugin.system.customfieldtypes:float":ca,array:T,"com.atlassian.jira.plugin.system.customfieldtypes:labels":T,
labels:ba,priority:ea,resolution:m,fixVersions:m,versions:m,components:m,security:m,"com.atlassian.jira.plugin.system.customfieldtypes:version":m,"com.atlassian.jira.plugin.system.customfieldtypes:multiversion":m,"com.atlassian.jira.plugin.system.customfieldtypes:project":m,assignee:aa,reporter:B,"com.atlassian.jira.plugin.system.customfieldtypes:userpicker":B,"com.atlassian.jira.plugin.system.customfieldtypes:multiuserpicker":B,timetracking:da,duedate:V,"com.atlassian.jira.plugin.system.customfieldtypes:datepicker":V,
"com.atlassian.jira.plugin.system.customfieldtypes:multiselect":U,"com.atlassian.jira.plugin.system.customfieldtypes:select":U,"com.pyxis.greenhopper.jira:gh-sprint":{template:f.fields.stringField,getContext:n,getInternalValue:z,getValue:G,behavior:function(a,b,c,d){var e={minimumInputLength:0,formatResult:function(a){return f.fields.sprintSelect({name:a.text,state:a.state,board:a.board})},query:function(a){r(b,c,a.term,d).done(function(b){var c=g.groupBy(b,function(a){return a.suggestion?"suggestions":
"all"});b=["suggestions","all"].filter(function(a){return c[a]&&0<c[a].length}).map(function(a){return{text:"suggestions"===a?"Suggestions":"All sprints",children:c[a]}});a.callback({results:g.compact(b)})})},initSelection:u(b,{id:-1,text:"Select a sprint"})};return y(a,b,c,d,e)}},"com.pyxis.greenhopper.jira:gh-epic-link":{template:f.fields.stringField,getContext:n,getInternalValue:z,getValue:function(a){return(a=
t(a))&&""!==a?a:void 0},behavior:function(a,b,c,d){var e={minimumInputLength:0,formatResult:function(a){return f.fields.epicSelect({name:a.text,key:a.id})},query:function(a){r(b,c,a.term,d).done(function(b){var c=g.uniq(b.map(function(a){return a.list})).map(function(a){return{text:a,children:b.filter(function(b){return b.list===a})}});a.callback({results:c})})},initSelection:u(b,{id:-1,text:"Select an epic"})};return y(a,b,c,d,e)}},"com.atlassian.jira.plugin.system.customfieldtypes:multicheckboxes":{template:f.fields.checkboxField,
getContext:L,getValue:M},"com.atlassian.jira.plugin.system.customfieldtypes:radiobuttons":{template:f.fields.radioField,getContext:L,getValue:function(a){a=M(a);return 1===a.length?a[0]:null}}},fa={ignoreFieldsWithDefaultValue:!1},w={addFieldHandler:function(a,b){g.has(p,a)&&console&&console.warn&&console.warn("Redefining handler for type "+a+".");p[a]=b},getFieldHandler:A,getFieldType:q,isKnownRestType:function(a){return p.hasOwnProperty(a)},canRender:function(a){var b=q(a);return(b=p[b])?a.operations&&
a.operations.length&&(!b.canRender||b.canRender(a)):!1},getContext:function(a,b,c,d){return D(a,b,c||{},d||{})},renderField:function(a,b,c,d){a=D(a,b,c||{},d||{});return a.handler.template(a)},getInternalJSON:function(a){var b=P(a);return b&&b.getInternalValue&&b.getInternalValue(a)||S(a)},getJSON:S,attachFieldBehavior:R,attachFieldBehaviors:function(a,b,c){a.find(".jira-field").each(function(a,e){a=h(e);R(a,b,c)})},setFieldError:function(a,b){a.find(".error").remove();b&&(b=f.fields.errors({errorTexts:b}),
a.append(b))},renderCreateRequiredFields:function(a,b,c,d,e){function f(b){d.ignoreFieldsWithDefaultValue&&(b=g.filter(b,function(a){return!a.hasDefaultValue}));var f=g.filter(b,function(a){return!w.canRender(a)});f.length?e&&e(f):(a.html(g.map(b,function(a){return w.renderField(null,a,null,null)}).join("")),w.attachFieldBehaviors(a,{serverId:c.serverId,projectKey:c.projectKey},null))}d=g.extend({},fa,d);d.requiredFields?f(d.requiredFields):Y(c,d).done(f)}};return w});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:fields', location = '/fields/label-picker.js' */
define("jira-integration-plugin/label-picker",[],function(){var d=window.jiraIntegration.templates;return{build:function(c,e){c.auiSelect2({tags:!0,multiple:!0,tokenSeparators:[","," "],createSearchChoice:function(a){return a?{id:a,text:a,isNew:!0}:null},query:function(a){e(a.term).done(function(b){a.callback({results:b})})},formatResult:function(a){return d.fields.labelFieldResult({label:{labelName:a.text,isNew:a.isNew}})},initSelection:function(a,b){a=c.auiSelect2("val").map(function(a){return{id:a,
text:a}});b(a)}})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.e8173e0382', location = 'aui.chunk.3eb85035b16339c9217d--41a19917398fb70898a5.js' */
"use strict";(self.webpackChunk_auiRuntime=self.webpackChunk_auiRuntime||[]).push([[8814],{7568:(t,n,i)=>{i.r(n);i(8316),i(298),i(1183)},1183:(t,n,i)=>{i.r(n),i.d(n,{appendDescription:()=>v,appendErrorMessages:()=>C,errorMessageTemplate:()=>k,getMessageContainer:()=>M,setFieldSpinner:()=>w,updateAriaInfo:()=>j});var e=i(7159),r=i(9689),a=i(7843),o=(i(130),i(3581));const u="_aui-form-notification-initialised",s="aria-describedby",c="description",f="errors",l="data-aui-notification-",d=l+"wait",p=l+"info",m=l+"error",h=[m,l+"success",d,p];function $(t){g(t)||(!function(t){t.addClass(u),v(t)}(t),T(t))}function g(t){return t.hasClass(u)}function v(t,n){if(n=n||b(t),y(t)===p){t.parent().find(".description").length||t.after(function(t,n){const i=t.attr("id")||t.attr("name");if(n.length>1){let t=n.map((t=>`<li>${t}</li>`)).join("");return`<div class="description" id="${i}-${c}"><ul>${t}</ul></div>`}return`<div class="description" id="${i}-${c}">${n}</div>`}(t,n))}j(t)}function b(t){var n=y(t),i=n?t.attr(n):"";return""===i?i:function(t){var n;try{n=JSON.parse(t)}catch(i){n=[t]}return n}(i)}function y(t){let n;return h.some((function(i){if(t.is("["+i+"]"))return n=i,!0})),n}function T(t){const n=(0,e.default)(t);if(!g(n))return;const i=y(n);w(n,i===d);const r=b(n);r&&i===m?C(n,r):t.constructor.prototype.hasOwnProperty("jquery")||t.hasAttribute(m)||n.parent().find(".error").remove()}function j(t){const n=[],i=t.attr("id")||t.attr("name"),e=y(t);b(t)&&e===m&&n.push(`${i}-${f}`),M(t,"description").length&&n.push(`${i}-${c}`);const r=function(t){const n={"aui-select":'input[type="text"][role="combobox"]'};for(let[i,e]of Object.entries(n))if(t.is(i)){const n=t.find(e);if(n.length)return n}return t}(t);r.attr(s,n.length?n.join(" "):null)}function k(t,n){const i=t.attr("id")||t.attr("name"),e=n.map((t=>`<li><span class="aui-icon aui-icon-small aui-iconfont-error aui-icon-notification"></span>${t}</li>`)).join("");return`<div class="error" role="alert" id="${i}-${f}"><ul>${e}</ul></div>`}function C(t,n){let i=M(t,"error");i.length>0&&i.remove(),t.after(k(t,n)),j(t)}function M(t,n){return t.parent().find(`.${n}`)}function w(t,n){n&&!function(t){return t.next("aui-spinner").length>0}(t)?t.after('<aui-spinner class="form-notification-spinner" size="small"></aui-spinner>'):t.parent().find("aui-spinner").remove()}const A=(0,o.getMessageLogger)("data-aui-notification-field attribute",{deprecationType:"ATTRIBUTE",alternativeName:"HTML markup"});(0,a.default)("data-aui-notification-field",{attached:function(t){A(),$((0,e.default)(t))},attributes:function(){const t={};return h.forEach((function(n){t[n]=T})),t}(),type:a.default.type.ATTRIBUTE}),(0,r.default)("aui/form-notification")}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.component.form-validation', location = 'aui.chunk.3c69e4734963c6d6df9a--67d05a4e064e071a5d40.js' */
"use strict";(self.webpackChunk_auiRuntime=self.webpackChunk_auiRuntime||[]).push([[3468],{9281:(a,e,t)=>{t.r(e);t(7568);var n=t(7159),i=t(1183),r=t(9689),u=(t(5323),t(6110)),o=t(1086),l=["displayfield","watchfield","when","novalidate","state"],d=[];var s={register:function(a,e){var t;if("string"==typeof a)t=a;else{var i=function(a){var e=!1;return a.some((function(a){var t=-1!==n.default.inArray(a,l);return t&&(e=a),t})),e}(a);if(i)return o.warn('Validators cannot be registered with the argument "'+i+'", as it is a reserved argument.'),!1;t="[data-aui-validation-"+a.join("],[data-aui-validation-")+"]"}var r={validatorFunction:e,validatorTrigger:t};return d.push(r),r},validators:function(){return d}};(0,r.default)("aui/form-validation/validator-register",s);const c=s;function f(a){var e=a.el.value.length;let t=0===e;var n=parseInt(a.args("minlength"),10),i=parseInt(a.args("maxlength"),10);if(n&&i&&n===i&&!t&&e!==n){const e=x("exactlength",a.args,[n]);a.invalidate(e)}else if(n&&e<n&&!t){const e=x("minlength",a.args);a.invalidate(e)}else if(i&&e>i){const e=x("maxlength",a.args);a.invalidate(e)}else a.validate()}function v(a){return"password"===a.getAttribute("type")}function g(a,e){var t=a.match(e);return!!t&&a===t[0]}function m(a){var e=x("pattern",a.args);g(a.el.value,new RegExp(a.args("pattern")))?a.validate():a.invalidate(e)}function h(a){var e=x("required",a.args);a.el.value?a.validate():a.invalidate(e)}function p(a){var e=x("validnumber",a.args),t=parseInt(a.el.value,10);if(isNaN(t))a.invalidate(e);else{var n=a.args("min"),i=a.args("max");n&&t<parseInt(n,10)?a.invalidate(x("min",a.args)):i&&t>parseInt(i,10)?a.invalidate(x("max",a.args)):a.validate()}}function x(a,e,t){var n;n=void 0!==u.I18n.keys?u.I18n.keys["aui.validation.message."+a]:I[a];var i=t;t||(i=[e(a)]);var r,o=e(a+"-msg");return r=o?[o].concat(i):[n].concat(i),AJS.format.apply(null,r)}c.register(["maxlength","minlength"],f),c.register("[maxlength],[minlength]",f),c.register(["matchingfield"],(function(a){var e=a.el.value,t=document.getElementById(a.args("matchingfield")),n=t.value,i=x("matchingfield",a.args,[e,n]);(v(a.el)||v(t))&&(i=x("matchingfield-novalue",a.args)),e&&n&&n!==e?a.invalidate(i):a.validate()})),c.register(["doesnotcontain"],(function(a){var e=x("doesnotcontain",a.args);-1===a.el.value.indexOf(a.args("doesnotcontain"))?a.validate():a.invalidate(e)})),c.register(["pattern"],m),c.register("[pattern]",m),c.register(["required"],h),c.register("[required]",h),c.register(["min","max"],p),c.register("[min],[max]",p),c.register(["dateformat"],(function(a){var e=a.args("dateformat"),t=x("dateformat",a.args),n={Y:"[0-9]{4}",y:"[0-9]{2}",m:"(0?[1-9]|10|11|12)",M:"[Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec]",D:"[Mon|Tue|Wed|Thu|Fri|Sat|Sun]",d:"([0-2]?[1-9]|10|20|30|31)"},i=e.split(""),r="";i.forEach((function(a){var e=n.hasOwnProperty(a);r+=e?n[a]:a}));var u=new RegExp(r+"$","i");g(a.el.value,u)?a.validate():a.invalidate(t)})),c.register(["minchecked","maxchecked"],(function(a){var e=(0,n.default)(a.el).find(":checked").length,t=!a.args("minchecked")||e>=a.args("minchecked"),i=!a.args("maxchecked")||e<=a.args("maxchecked"),r=x("minchecked",a.args),u=x("maxchecked",a.args);t&&i?a.validate():t?i||a.invalidate(u):a.invalidate(r)}));var I={minlength:"Must be greater than or equal to {0} characters",maxlength:"Must be fewer than or equal to {0} characters",exactlength:"Must be exactly {0} characters",matchingfield:"{0} and {1} do not match.","matchingfield-novalue":"These fields do not match.",doesnotcontain:"Do not include the phrase {0} in this field",pattern:"This field does not match the required format",required:"This is a required field",validnumber:"Please enter a valid number",min:"Enter a value greater than or equal to  {0}",max:"Enter a value less than or equal to {0}",dateformat:"Enter a valid date",minchecked:"aui.validation.message.minchecked",maxchecked:"aui.validation.message.maxchecked"};(0,r.default)("aui/form-validation/basic-validators");var T=t(3581),k=t(6862),w=t(7843);const y="aui-validation-",b="data-aui-notification-",A="aui-validation-state",E="invalid",O="valid",S="validating",D="unvalidated",F="_aui-form-validation-initialised",J="_aui-internal-field-state-changed";function M(a){(function(a){return a.hasClass(F)})(a)||(!function(a){a.addClass(F),(0,i.appendDescription)(a)}(a),function(a){(function(a){var e,t=function(){a.trigger("aui-stop-typing")};a.on("keyup",(function(){clearTimeout(e),e=setTimeout(t,1500)}))})(a),function(a){var e=q(a,"when"),t=q(a,"watchfield"),n=t?a.add("#"+t):a;n.on(e,(function(){N(a)}))}(a)}(a),V(a,D))}function N(a){if(!q(a,"novalidate"))return function(a){!function(a){_(j(a),"none")}(a);var e=function(a){var e=[];return C().forEach((function(t,n){var i=t.validatorTrigger;a.is(i)&&e.push(n)})),e}(a);V(a,S);var t=function(a,e){var t=[];return e.forEach((function(e){var i=C()[e].validatorFunction,r=new n.default.Deferred,u=function(a,e){var t={validate:function(){e.resolve()},invalidate:function(t){V(a,E,t),e.reject()},args:R(a),el:a[0],$el:a};return T.prop(t,"$el",{sinceVersion:"5.9.0",removeInVersion:"10.0.0",alternativeName:"el",extraInfo:"See https://ecosystem.atlassian.net/browse/AUI-3263."}),t}(a,r);i(u),t.push(r)})),t}(a,e),i=n.default.when.apply(n.default,t);return i.done((function(){V(a,O)})),i}(a);V(a,O)}function q(a,e){var t=a.attr("data-"+y+e);return t||(t={when:"change"}[e]),t}function C(){return c.validators()}function R(a){return function(e){return a.attr("data-"+y+e)||a.attr(e)}}function V(a,e,t){if(a.attr("data-"+A,e),a.attr("aria-invalid",!1),e!==D){a.trigger(n.default.Event(J));var r=j(a),u={};u[S]="wait",u[E]="error",u[O]="success";var o=u[e];e===S?function(a){setTimeout((function(){B(a)===S&&(_(a,"wait"),(0,i.setFieldSpinner)(a,!0))}),500)}(a):_(r,o,t),e===E&&a.attr("aria-invalid",!0)}}function _(a,e,t){const n=function(a){return a.is("["+b+"wait]")}(a);!function(a){$(a,"wait"),(0,i.setFieldSpinner)(a,!1),$(a,"success")}(a);var r,u;if(!("success"===e&&!n))if("none"===e)$(a,"error");else{const n=a.attr(b+e)||"[]",o=t?(r=t,u=n,JSON.parse(u).concat([r])):[];a.attr(b+e,JSON.stringify(o)),"error"===e&&(0,i.appendErrorMessages)(a,o)}}function $(a,e){a.removeAttr(b+e),"error"===e&&((0,i.getMessageContainer)(a,e).remove(),(0,i.updateAriaInfo)(a))}function j(a){var e=q(a,"displayfield");return void 0===e?a:(0,n.default)("#"+e)}function B(a){return a.attr("data-"+A)}function P(a,e){e.preventDefault(),a.one(J,(function(){a.trigger("submit")}))}function U(a,e){var t="[data-"+A+"="+e+"]";return a.find(t)}(0,n.default)(document).on("submit",(function(a){var e=a.target,t=(0,n.default)(e),i=function(a){var e=a.find("."+F);return o=e,t=n.default.map(o,(function(a){return B((0,n.default)(a))})),i=-1!==t.indexOf(E),r=-1!==t.indexOf(D),u=-1!==t.indexOf(S),i?E:r?D:u?S:O;var t,i,r,u;var o}(t);if(i===D)P(t,a),function(a){var e=U(a,D);e.each((function(a,e){W.validate((0,n.default)(e))}))}(t);else if(i===S)P(t,a);else if(i===E)a.preventDefault(),function(a){var e=U(a,E).first();e.focus()}(t);else if(i===O){var r=n.default.Event("aui-valid-submit");t.trigger(r),r.isDefaultPrevented()&&a.preventDefault()}}));const W={register:c.register,validate:function(a){N(a=(0,n.default)(a))}};(0,w.default)("data-aui-validation-field",{attached:function(a){a.form&&a.form.setAttribute("novalidate","novalidate"),M((0,n.default)(a)),w.default.init(a)},type:w.default.type.ATTRIBUTE}),(0,r.default)("aui/form-validation",W),(0,k.default)("formValidation",W)}},a=>{a.O(0,[7224,9378,1356,2475,7035,8196,3469,3039,2276,713,4271,4678,7981,2554,8877,7501,4544,7991,9030,8313,113,3022,7825,3042,3108,979,2421,8814],(()=>{return e=9281,a(a.s=e);var e}));a.O()}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:jira-create-issue-form', location = '/jira-create-issue-form/jira-create-issue-form.js' */
define("jira-integration-plugin/jira-create-issue-form",["jquery","jira-integration-plugin/custom-lodash","jira-integration-plugin/jira-create-issue-form-data","jira-integration-plugin/jira-create-issue-form-field-helper","jira-integration-plugin/fields"],function(d,f,h,g,k){function b(a){this.configuration=f.extend({},b.defaults,a);this.configuration.renderSummaryAndDescription&&this.configuration.excludedField.push("summary","description");this._init()}function p(a,c){var e={};a.find(".create-issue-required-fields").find("input, select, textarea, fieldset").not(".select2-input, .select2-focusser").each(function(a){var m=
d(this),b=m.attr("data-name");b&&(e[b]=c(m,b,a))});return e}function n(a){d(".aui-message",a).remove()}var l=window.jiraIntegration.templates;b.defaults={allowUnsupportedFields:!1,ignoreFieldsWithDefaultValue:!0,excludedField:["project","issuetype","reporter"],formClass:"jira-interation-create-issue-form",requiredFieldsOnly:!0,renderSummaryAndDescription:!1,get$unsupportedFieldMessage:function(a,c){return d(l.jiraCreateIssueForm.unsupportedFieldsMessage({unsupportedFields:a,createIssueUrl:c}))},get$unexpectedError:function(a){return d(aui.message.error({content:AJS.escapeHtml(a)}))},
get$communicationError:function(a){return d(l.jiraCreateIssueForm.communicationErrorMessage({message:a}))},get$unauthorizeMessage:function(a){return d(l.jiraCreateIssueForm.authorize({extraClasses:"jira-oauth-dialog",applicationName:a}))},get$unsupportedServerMessage:function(a){return d(l.jiraCreateIssueForm.unsupportedServerMessage({serverUrl:a}))},get$unrenderableRequiredFieldsMessage:function(a,c){var e=a.map(function(a){return AJS.escapeHtml(a.name)}).join(", ");return d(l.jiraCreateIssueForm.unrenderableRequiredFieldsMessage({names:e,
count:a.length,serverUrl:c}))},ajax:function(a){alert("JiraCreateIssueForm requires the option 'ajax(options)' to be specified and respond like jQuery.ajax.\nThis method should handle response status codes other than 200 and 500 (those are handled by us).")}};b.prototype._trigger=function(a,c){var e=this.configuration[a];e&&e.apply(this,Array.prototype.slice.call(arguments,1))};b.prototype._selectServer=function(a,c){var e=this;if(this.currentServerId!==a||c)this.currentServerId=a,this.formIsLoading(this.defaultFields.server),
h.isIssueCreationSupported(a,this.configuration.ajax).done(function(c){c?(e._loadProjectData(a),e.formLoadingCompleted(e.defaultFields.server)):(c=h.getServerById(a).displayUrl,e._handleUnsupportedServer(c))}).fail(function(a){a[0]&&a[0].authenticationUri?e._handleAuthorizeError(a[0]):e._handleAjaxError(a)})};b.prototype._bindEventListener=function(){var a=this;this.defaultFields.server.on("change",function(c){a.fieldValues=f.extend({},a.fieldValues,a._getFieldValues());a.resetForm(!0);(c=this.value)?
a._selectServer(c):(g.resetSelectField(a.defaultFields.project),a.defaultFields.project.trigger("change"));a._trigger("onServerChanged",this.value)});this.defaultFields.project.on("change",function(){var c=this.value||d(this).select2("data").value,e=d(a.defaultFields.issueType).select2("data");a.fieldValues=f.extend({},a.fieldValues,a._getFieldValues());c?(d('option[value\x3d""]',a.defaultFields.project).remove(),a._loadIssueType(a.currentServerId,c,e)):g.resetSelectField(a.defaultFields.issueType);
a._trigger("onProjectChanged",this.value)});this.defaultFields.issueType.on("change",function(){a.fieldValues=f.extend({},a.fieldValues,a._getFieldValues());a.resetForm(!0);this.value?a._loadFields(a.fieldValues):(a.$containerRequireField&&a.$containerRequireField.html(""),n(this.$form));a._trigger("onTypeChanged",this.value)})};b.prototype._getFieldValues=function(){return this._getJSON({getFieldJSON:k.getInternalJSON,$form:this.$form})};b.prototype._init=function(){this.container=d(this.configuration.container);
this.fieldValues={};if(this.container.length)this._renderForm(),this._bindEventListener(),this._loadServerData();else throw Error("container property should be defined.");};b.prototype._renderForm=function(){var a=this;this.$form=d(l.jiraCreateIssueForm.form({formClass:this.configuration.formClass})).on("aui-valid-submit",function(c){a.configuration.onSubmit&&(c.preventDefault(),a.configuration.onSubmit())}).on("focus",".fake-tabbable",function(){const a=d("div#select2-drop.select2-drop-active").children()[0];
a&&a.children.length&&a.getElementsByTagName("input")[0].focus()});this.configuration.renderSummaryAndDescription&&this._renderSummaryAndDescription();this.container.append(this.$form);this.defaultFields=this._getDefaultFields();f.each(this.defaultFields,f.bind(function(a){this.createSelect2WithIcon(d(a))},this));this.$containerRequireField=d(".create-issue-required-fields",this.container);this._trigger("onFormRendered")};b.prototype._renderSummaryAndDescription=function(){var a=d(".create-issue-default-fields",
this.$form);a.append(aui.form.textField({labelContent:"Summary",isRequired:!0,name:"summary",value:this._getSummaryFromConfiguration()}));a.append(aui.form.textareaField({labelContent:"Description",name:"description"}))};b.prototype._getDefaultFields=function(){return{server:d(".server-select",this.$form),project:d(".project-select",this.$form),issueType:d(".issuetype-select",this.$form)}};b.prototype._loadServerData=
function(){var a=this;this.formIsLoading(this.defaultFields.server);h.loadServers(a.configuration.ajax).then(function(c){a.formLoadingCompleted(a.defaultFields.server);a._loadServerDataComplete(c)})};b.prototype._loadFields=function(a){const c=this,e=f.extend({},this.getContextJSON(),a);this.formIsLoading(this.defaultFields.issueType);h.getFieldMetadata(e,c.configuration.ajax).done(function(a){const b=c._filterFields(a);c.configuration.renderSummaryAndDescription&&(a=a.find(a=>"description"===a.fieldId),
c._setDescriptionAsRequiredField(!(!a||!a.required)));a=c._unrenderableRequiredFields(b);0===a.length?(c._renderFields(b,e),c._trigger("onFieldsRendered")):c._handleUnrenderableRequiredFields(a);c._fieldTypeAnalytics(b);c.formLoadingCompleted(c.defaultFields.issueType)}).fail(f.bind(c._handleAjaxError,this))};b.prototype._loadServerDataComplete=function(a){a.length?(1===a.length&&g.hideField(this.defaultFields.server),this._hasMultiServer=1<a.length,g.fillSelectData(this.defaultFields.server,a,this.configuration.serverId||
a[0].id),this._selectServer(this.configuration.serverId||a[0].id)):this._handlerUnexpectedError("Don\u0027t have any Jira server, please check the application link configuration.")};b.prototype._loadProjectData=function(a){var c=this;this.formIsLoading(this.defaultFields.project);h.loadProjects(a,c.configuration.ajax).then(function(a){a.errors&&a.errors.length?(a=a.errors[0],a.authenticationUri?c._handleAuthorizeError(a):c._handlerUnexpectedError(a.message)):a.length?g.fillSelectData(c.defaultFields.project,a,c.configuration.projectId):
c._handlerUnexpectedError("You do not have permission to create issues on this Jira server.");c.formLoadingCompleted(c.defaultFields.project)},f.bind(c._handleAjaxError,this))};b.prototype._loadIssueType=function(a,c,e){const b=this;this.formIsLoading(this.defaultFields.issueType);h.loadIssueTypes(a,c,b.configuration.ajax).then(function(a){g.fillSelectData(b.defaultFields.issueType,a,e&&e.id);b.formLoadingCompleted(b.defaultFields.issueType)}).fail(function(a){404===a.status&&b._handleCommunicationError(AJS.format("Could not communicate with Jira (HTTP error {0})",
404));b.formHasError()})};b.prototype._fieldTypeAnalytics=function(a){var c=a.map(function(a){var c=k.getFieldType(a);return{required:a.required,restType:c,knownRestType:k.isKnownRestType(c)}}).reduce(function(a,c){c.knownRestType?a[c.required?"requiredFields":"otherFields"].push(c.restType):a[c.required?"unknownRequiredFieldsCount":"unknownOtherFieldsCount"]++;return a},{requiredFields:[],otherFields:[],unknownRequiredFieldsCount:0,unknownOtherFieldsCount:0});c=Object.keys(c).reduce(function(a,b){var e=
c[b];if(!Array.isArray(e))return a[b]=e,a;var d=e.length;a[b+".size"]=d;for(var m=0;m<d;m++)a[b+"["+m+"]"]=e[m];return a},{});AJS.trigger("analytics",{name:"jira.integration.issue.create.form.displayed",data:c})};b.prototype._renderFields=function(a,c){this.$containerRequireField.html("");var b=f.reject(a,k.canRender);!this.configuration.allowUnsupportedFields&&b.length?this._handleUnsupportedFields(b):(this.$containerRequireField.html(f.map(a,function(a){return k.renderField(null,a,c,null)}).join("")),
k.attachFieldBehaviors(this.$containerRequireField,c,null),this._trigger("onRequiredFieldsRendered",a,b))};b.prototype._setError=function(a){n(this.$form);this.$form.prepend(a);this.formLoadingCompleted();this.formHasError()};b.prototype._handleCommunicationError=function(a){a=this.configuration.get$communicationError(a);this._setError(a)};b.prototype._handlerUnexpectedError=function(a){a=this.configuration.get$unexpectedError(a);this._setError(a)};b.prototype._handleUnsupportedFields=function(a){a=
f.map(a,function(a){return AJS.escapeHtml(a.name)});a=this.configuration.get$unsupportedFieldMessage(a,this._getCreateJiraIssueUrl());n(this.$form);this.$form.prepend(a);this._trigger("onError");this.formLoadingCompleted()};b.prototype._handleUnsupportedServer=function(a){a=this.configuration.get$unsupportedServerMessage(a);this._setError(a)};b.prototype._handleAjaxError=function(a){if(500<=a.status&&600>a.status){var c=a.responseJSON.errors&&a.responseJSON.errors[0],b=c&&c.exceptionName;b&&"com.atlassian.integration.jira.JiraCommunicationException"===
b?this._handleCommunicationError(c.message):this._handlerUnexpectedError(AJS.format("Could not communicate with Jira (HTTP error {0})",a.status))}else this._handlerUnexpectedError("An unexpected response was received from Jira.");this.formHasError()};b.prototype._handleAuthorizeError=function(a){var c=this;this.formHasError();var b=this.configuration.get$unauthorizeMessage(a.applicationName);this.$form.append(b);d(".applink-authenticate",b).on("click",function(b){AppLinks.authenticateRemoteCredentials(a.authenticationUri,
function(){c.resetForm();c._selectServer(c.currentServerId,!0)},function(){c._handlerUnexpectedError(AJS.format("You have refused to permit access to {0}.",a.applicationName))});b.preventDefault()})};b.prototype._handleUnrenderableRequiredFields=function(a){a=this.configuration.get$unrenderableRequiredFieldsMessage(a,this._getCreateJiraIssueUrl());n(this.$form);this.$form.append(a);this.formLoadingCompleted()};b.prototype._getCreateJiraIssueUrl=function(){var a=this.defaultFields.project.find("option:selected").val(),
c=this.defaultFields.issueType.find("option:selected").val(),b=h.getServerById(this.currentServerId).displayUrl;b=b+"/secure/CreateIssueDetails!Init.jspa?pid\x3d"+a+"\x26issuetype\x3d"+c;a=this._getFieldValue("summary");a.length&&(b=b+"\x26summary\x3d"+encodeURIComponent(a));a=this._getFieldValue("description");a.length&&(b=b+"\x26description\x3d"+encodeURIComponent(a));return b};b.prototype._filterFields=function(a){var c=this;return f.filter(a,function(a){var b=a.schema?a.schema.system||a.schema.custom||
a.schema.customId:a;return!(c.configuration.excludedField&&c.configuration.excludedField.includes(b)||c.configuration.ignoreFieldsWithDefaultValue&&a.hasDefaultValue||c.configuration.requiredFieldsOnly&&!a.required)})};b.prototype._unrenderableRequiredFields=function(a){return a.filter(function(a){return a.required&&!k.canRender(a)})};b.prototype._getFieldValue=function(a){return(a=d("[name\x3d'"+a+"']",this.$form))?d.trim(a.val()):""};b.prototype._setDescriptionAsRequiredField=function(a){var c=
d('.field-group [name\x3d"description"]',this.$form).prev("label");c.find(".aui-icon.aui-icon-required").remove();a&&c.append(aui.icons.icon({icon:"required"}))};b.prototype._getSummaryFromConfiguration=function(){var a=this.configuration.initialSummary;delete this.configuration.initialSummary;return a};b.prototype._getJSON=function(a){if(!a.verbose)return p(a.$form,function(c,b,e){return a.getFieldJSON(c)});var c=h.getCachedFieldMetadataEntry(this.getContextJSON()).value,b=Object.keys(c.fields).reduce(function(a,
b){a[b]=k.getContext(null,c.fields[b],null,null);return a},{});return p(this.$form,function(c,e,d){var f=b[e];return{name:e,jiraType:f.jiraType,required:f.isRequired,label:f.labelText,value:a.getFieldJSON(c),index:d}})};b.prototype.resetForm=function(a){n(this.$form);d(".field-group",this.$form).show();this.configuration.renderSummaryAndDescription&&this._setDescriptionAsRequiredField(!1);this._hasMultiServer||g.hideField(this.defaultFields.server);this.$containerRequireField.html("");this.fieldValues=
a?this.fieldValues:{}};b.prototype.formHasError=function(){d(".field-group",this.$form).hide();this.$containerRequireField.html("");this._hasMultiServer&&g.showField(this.defaultFields.server);g.setFieldDisabled(d(".insert-issue-button"),!0);this._trigger("onError");this.formLoadingCompleted()};b.prototype.getCurrentServer=function(){return h.getServerById(this.currentServerId)};b.prototype.formIsLoading=function(a){a&&g.setIsLoading(a,!0);a=d(":input",d(this.$form));g.setFieldDisabled(a,!0)};b.prototype.formLoadingCompleted=
function(a){a?g.setIsLoading(a,!1):d(".aui-icon.aui-icon-wait",this.$form).remove();a=d(":input",d(this.$form));g.setFieldDisabled(a,!1)};b.prototype.createSelect2WithIcon=function(a){if(a.is(".server-select"))a.auiSelect2({minimumResultsForSearch:-1});else{var c=a.is(".project-select")?{formatSelection:this.projectSelectFormat,formatResult:this.projectSelectFormat,extraAttributes:this.defaultFields}:{formatSelection:this.issueTypeSelectFormat,formatResult:this.issueTypeSelectFormat,minimumResultsForSearch:-1,
extraAttributes:this.defaultFields};a.auiSelect2(c)}a.auiSelect2("val","")};b.prototype.projectSelectFormat=function(a){var c=this.extraAttributes.server.select2("data").id;c=h.getProjectIconUrl(c,a.id);return l.fields.select2WithIconOption({optionValue:a.text,iconUrl:c,isProject:!0})};b.prototype.issueTypeSelectFormat=function(a){var c=this.extraAttributes.server.select2("data").id,b=this.extraAttributes.project.select2("data").id;c=h.getIssueTypeIconUrl(c,b,a.id);return l.fields.select2WithIconOption({optionValue:a.text,
iconUrl:c,isProject:!1})};b.prototype.getContextJSON=function(){var a=this.defaultFields.project.val()||d(this.defaultFields.project).select2("data").value;return{serverId:this.currentServerId,projectId:a,projectKey:h.getProjectById(this.currentServerId,a).key,issueTypeId:this.defaultFields.issueType.val(),summary:this._getSummaryFromConfiguration()}};b.prototype.getJSON=function(a){return b.prototype._getJSON({getFieldJSON:k.getJSON,verbose:a,$form:this.$form})};b.prototype.renderUnexpectedError=
function(a){a=this.configuration.get$unexpectedError(a);n(this.$form);this.$form.prepend(a);this.formLoadingCompleted()};b.prototype.renderErrors=function(a){p(this.$form,function(c,b){c=c.closest(".jira-field");var d=function(a){return 0===a.indexOf(b)};if(a.hasOwnProperty(b)||Object.keys(a).some(d)){a.hasOwnProperty(b)||(b=Object.keys(a).filter(d)[0]);var e=Array.isArray(a[b])?a[b]:[a[b]]}k.setFieldError(c,e)})};b.prototype.submit=function(){this.$form.submit()};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:jira-create-issue-form', location = '/jira-create-issue-form/jira-create-issue-form-data.js' */
define("jira-integration-plugin/jira-create-issue-form-data",["jquery"],function(e){function q(a){var c=new URL(a.avatarUrls["16x16"]);const b=c.searchParams;b.get("pid")||b.append("pid",a.id);b.get("avatarId")||(a=c.pathname.split("/"),c=a.lastIndexOf("avatar"),b.append("avatarId",a[c+1]));return b.toString()}function l(a){a=g(a.serverId,a.projectKey,a.issueTypeId);return{key:a,value:m[a]}}function k(a){if(!d[a])throw Error("Can only be called after server is loaded.");return d[a].projects}function g(a,
c,b){return a+(c?"-"+c:"")+(b?"-"+b:"")}var d={},m={},r=AJS.contextPath()+"/plugins/servlet/jira-integration/icons?serverId\x3d{0}\x26iconType\x3d{1}\x26{2}",h=[],f=function(a,c,b){return a({dataType:"json",timeout:0,url:AJS.contextPath()+"/rest/jira-integration/1.0/servers"+(c||""),statusCode:b})};const p=(a,c,b=[])=>{b=b.filter(a=>!a.subtask);const n={};b.forEach(a=>{n[a.id]=a.iconUrl});const d=q(a);h[g(c,a.id)]={iconUrl:AJS.format(r,c,"project",d),issueTypes:n};return b},t=(a,c)=>k(a).filter(function(a){return a.id===
c})[0];return{loadServers:function(a){return f(a,"").done(function(a){a.forEach(function(a){d[a.id]=a})})},loadProjects:function(a,c){var b=d[a]&&d[a].projects;return b?e.Deferred().resolve(b):f(c,"/"+a+"/projects").done(function(b){b.length&&(b.forEach(function(b){p(b,a)}),d[a].projects=b)})},loadIssueTypes:(a,c,b)=>f(b,`/${a}/projects/${c}/issue-types`,{404:!1}).then(b=>{const d=t(a,c);return b?p(d,a,b):[]}),getFieldMetadata:function(a,c){var b=l(a);return b.value?e.Deferred().resolve(b.value):
f(c,"/"+a.serverId+"/projects/"+a.projectKey+"/issue-types/"+a.issueTypeId+"/fields-meta").done(function(a){m[b.key]=a})},getCachedFieldMetadataEntry:l,getServerById:function(a){return d[a]},getProjectIconUrl:function(a,c){a=g(a,c);return h[a]?h[a].iconUrl:""},getIssueTypeIconUrl:function(a,c,b){a=g(a,c);return(a=h[a])&&a.issueTypes[b]?a.issueTypes[b]:""},getProjects:k,getProjectById:function(a,c){a=k(a);if(!a)return null;for(var b=0,d=a.length;b<d;b++){var e=a[b];if(e.id===c)return e}return null},
isIssueCreationSupported:function(a,c){if(!d[a])throw Error("Can only be called after server is loaded.");return"issueCreationSupported"in d[a]?e.Deferred().resolve(d[a].issueCreationSupported):f(c,"/"+a+"/features").then(function(b){if(b.errors)return e.Deferred().reject(b.errors);if(!Array.isArray(b))return e.Deferred().reject("Unexpected response from Jira");d[a].issueCreationSupported=-1!==b.indexOf("CREATE_ISSUE");return d[a].issueCreationSupported})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:jira-create-issue-form', location = '/jira-create-issue-form/jira-create-issue-form-field-helper.js' */
define("jira-integration-plugin/jira-create-issue-form-field-helper",["jquery","jira-integration-plugin/custom-lodash"],function(d,g){function f(a){a=a.attr("data-placeholder");return aui.form.optionOrOptgroup({value:"",text:a,iconUrl:""})}return{fillSelectData:function(a,b,d){var e=[],c;b.forEach(function(a){var b={value:AJS.escapeHtml(a.id),text:a.name,iconUrl:a.iconUrl?a.iconUrl:a.avatarUrls?a.avatarUrls["16x16"]:""};d===a.id&&(b.selected=!0,c=a);e.push(aui.form.optionOrOptgroup(b))});c?(c.text=
c.name,a.html(e.join("")),a.auiSelect2("data",c).trigger("change")):(e.unshift(f(a)),a.html(e.join("")),a.auiSelect2("val","").trigger("change"))},resetSelectField:function(a){a.html(f(a));a.auiSelect2("val","").trigger("change")},hideField:function(a){a.parent().hide()},showField:function(a){a.parent().show()},setFieldDisabled:function(a,b){b?d.fn.disable?a.disable():a.prop("disabled",!0):d.fn.enable?a.enable():a.prop("disabled",!1)},setIsLoading:function(a,b){return b?a.after(aui.icons.icon({icon:"wait"})):
a.next(".aui-icon.aui-icon-wait").remove()}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:jira-create-issue-form', location = '/jira-create-issue-form/jira-create-issue-form.soy' */
// This file was automatically generated from jira-create-issue-form.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace jiraIntegration.templates.jiraCreateIssueForm.
 */

if (typeof jiraIntegration == 'undefined') { var jiraIntegration = {}; }
if (typeof jiraIntegration.templates == 'undefined') { jiraIntegration.templates = {}; }
if (typeof jiraIntegration.templates.jiraCreateIssueForm == 'undefined') { jiraIntegration.templates.jiraCreateIssueForm = {}; }


jiraIntegration.templates.jiraCreateIssueForm.form = function(opt_data, opt_ignored) {
  return '' + aui.form.form({extraClasses: (opt_data.formClass ? opt_data.formClass + ' ' : '') + 'jira-create-form', method: 'post', action: '#', content: '<fieldset class="create-issue-default-fields"><div class="fake-tabbable" tabindex="0" /><div class="field-group" data-jira-type="server"><label>' + soy.$$escapeHtml('Server') + '<span class="aui-icon icon-required"> required</span></label><select class="jira-select2-drop-box server-select medium-long-field" name="server" data-placeholder="' + soy.$$escapeHtml('Select a server') + '"><option disabled selected value="">' + soy.$$escapeHtml('Select a server') + '</option></select></div><div class="field-group" data-jira-type="project"><label>' + soy.$$escapeHtml('Project') + '<span class="aui-icon icon-required"> required</span></label><select class="jira-select2-drop-box project-select medium-long-field" name="project" data-placeholder="' + soy.$$escapeHtml('Select a project') + '"><option disabled selected value="">' + soy.$$escapeHtml('Select a project') + '</option></select></div><div class="field-group" data-jira-type="issuetype"><label>' + soy.$$escapeHtml('Issue Type') + '<span class="aui-icon icon-required"> required</span></label><select class="jira-select2-drop-box issuetype-select" name="issue-type" data-placeholder="' + soy.$$escapeHtml('Select an issue type') + '"><option disabled selected value="">' + soy.$$escapeHtml('Select an issue type') + '</option></select></div></fieldset><fieldset class="create-issue-required-fields"></fieldset>'});
};
if (goog.DEBUG) {
  jiraIntegration.templates.jiraCreateIssueForm.form.soyTemplateName = 'jiraIntegration.templates.jiraCreateIssueForm.form';
}


jiraIntegration.templates.jiraCreateIssueForm.unsupportedFieldsMessage = function(opt_data, opt_ignored) {
  var param28 = '';
  if (opt_data.unsupportedFields.length == 1) {
    var field__soy31 = '<strong>' + soy.$$escapeHtml(opt_data.unsupportedFields) + '</strong>';
    param28 += soy.$$filterNoAutoescape(AJS.format('The required field {0} is not available in this form. You will need to',field__soy31));
  } else {
    var fieldList__soy38 = '' + jiraIntegration.templates.jiraCreateIssueForm.buildFieldList({fields: opt_data.unsupportedFields});
    param28 += soy.$$filterNoAutoescape(AJS.format('The required fields {0} are not available in this form. You will need to',fieldList__soy38));
  }
  param28 += ' <a href="' + soy.$$escapeHtml(opt_data.createIssueUrl) + '" target="_blank">' + soy.$$escapeHtml('create your issue directly in Jira') + '</a>.';
  var output = '' + aui.message.warning({content: param28});
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.jiraCreateIssueForm.unsupportedFieldsMessage.soyTemplateName = 'jiraIntegration.templates.jiraCreateIssueForm.unsupportedFieldsMessage';
}


jiraIntegration.templates.jiraCreateIssueForm.buildFieldList = function(opt_data, opt_ignored) {
  var output = '';
  var joinText__soy50 = '' + ((opt_data.fields.length == 2) ? ' ' + soy.$$escapeHtml('and') + ' ' : ', ');
  var fieldList58 = opt_data.fields;
  var fieldListLen58 = fieldList58.length;
  for (var fieldIndex58 = 0; fieldIndex58 < fieldListLen58; fieldIndex58++) {
    var fieldData58 = fieldList58[fieldIndex58];
    output += ((! (fieldIndex58 == 0)) ? soy.$$escapeHtml(joinText__soy50) : '') + '<strong>' + soy.$$escapeHtml(fieldData58) + '</strong>';
  }
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.jiraCreateIssueForm.buildFieldList.soyTemplateName = 'jiraIntegration.templates.jiraCreateIssueForm.buildFieldList';
}


jiraIntegration.templates.jiraCreateIssueForm.authorize = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '';
  var applicationNameEscaped__soy67 = '' + soy.$$escapeHtml(opt_data.applicationName);
  output += aui.message.info({content: '' + soy.$$filterNoAutoescape(AJS.format('{0}Log in and approve{1} to retrieve data from {2}','<a class="oauth-init applink-authenticate" href="#">','</a>',applicationNameEscaped__soy67))});
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.jiraCreateIssueForm.authorize.soyTemplateName = 'jiraIntegration.templates.jiraCreateIssueForm.authorize';
}


jiraIntegration.templates.jiraCreateIssueForm.unsupportedServerMessage = function(opt_data, opt_ignored) {
  return '' + aui.message.warning({content: '' + soy.$$filterNoAutoescape(AJS.format('The version of selected Jira server is not supported. You may want to upgrade to at least version 5.x or {0}create issue in Jira{1}.','<a href="' + opt_data.serverUrl + '" target="_blank">','</a>'))});
};
if (goog.DEBUG) {
  jiraIntegration.templates.jiraCreateIssueForm.unsupportedServerMessage.soyTemplateName = 'jiraIntegration.templates.jiraCreateIssueForm.unsupportedServerMessage';
}


jiraIntegration.templates.jiraCreateIssueForm.unrenderableRequiredFieldsMessage = function(opt_data, opt_ignored) {
  return '' + aui.message.warning({content: '' + soy.$$filterNoAutoescape(AJS.format('The required {1,choice,1#field|1\x3cfields} \x3cstrong\x3e{0}\x3c/strong\x3e {1,choice,1#is|1\x3care} not available in this dialog. You will need to {2}create your issue directly in Jira{3}.',opt_data.names,opt_data.count,'<a href="' + opt_data.serverUrl + '" target="_blank">','</a>'))});
};
if (goog.DEBUG) {
  jiraIntegration.templates.jiraCreateIssueForm.unrenderableRequiredFieldsMessage.soyTemplateName = 'jiraIntegration.templates.jiraCreateIssueForm.unrenderableRequiredFieldsMessage';
}


jiraIntegration.templates.jiraCreateIssueForm.communicationErrorMessage = function(opt_data, opt_ignored) {
  return '' + aui.message.error({titleContent: '' + soy.$$escapeHtml('Unfortunately, we\x27ve encountered problems connecting to Jira'), content: '<p>' + soy.$$escapeHtml(opt_data.message) + '</p>'});
};
if (goog.DEBUG) {
  jiraIntegration.templates.jiraCreateIssueForm.communicationErrorMessage.soyTemplateName = 'jiraIntegration.templates.jiraCreateIssueForm.communicationErrorMessage';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:proxy-js', location = '/jira/proxy.js' */
AppLinks=AJS.$.extend(window.AppLinks||{},{makeRequest:function(a){var b=contextPath||AJS.contextPath();if(a.processData)a.appId?a.data=AJS.$.extend(a.data||{},{appId:a.appId}):a.appType&&(a.data=AJS.$.extend(a.data||{},{appType:a.appType})),a.data=AJS.$.extend(a.data||{},{path:a.url});else{var d=a.url;a=AJS.$.extend(a,{beforeSend:function(c){a.appId?c.setRequestHeader("X-AppId",a.appId):a.appType&&c.setRequestHeader("X-AppType",a.appType);c.setRequestHeader("X-AppPath",d)}})}a=AJS.$.extend(a,{url:b+
"/plugins/servlet/applinks/proxy"});return AJS.$.ajax(a)},createProxyGetUrl:function(a){var b="";a.includeContext&&(b=contextPath||AJS.contextPath());b+="/plugins/servlet/applinks/proxy";if(a.appId)b+="?appId\x3d"+encodeURIComponent(a.appId);else if(a.appType)b+="?appType\x3d"+encodeURIComponent(a.appType);else return AJS.log("You need to specify an appType or appId"),"";a.path&&(b+="\x26path\x3d"+encodeURIComponent(a.path));return b}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jqlHelper', location = '/jira/jqlhelper.js' */
AJS.JQLHelper=function(){var m=/^\s*((key|issuekey)\s*=\s*)?"*([A-Z]+)([0-9]+)?([A-Z]+)?-([0-9]+)"*\s*$/i,h=/\s*([A-Z][A-Z]+)-[0-9]+\s*/,n=/(issue|searchrequest)-xml/i,k=/\/(i#)?browse\/([\x00-\x19\x21-\x22\x24\x27-\x3E\x40-\x7F]+-[0-9]+$)/i,p=/\/jira\.issueviews:issue-xml\/([\x00-\x19\x21-\x22\x24\x27-\x3E\x40-\x7F]+-[0-9]+)\//,l=/(jqlQuery|jql)\s*=([^&]+)/i,e=/(\?|&)(requestId|filter)=([^&]+)/i,f=/(searchrequest-xml\/)([0-9]+)\/SearchRequest/i,q=/=|!=|~|>|<|!~| is | in | was | changed /i,g=function(a){var b=
"",c=k.exec(a);c?b="key\x3d"+c[2]:(c=l.exec(a))?b=c[2]:(a=h.exec(a))&&(b="key\x3d"+a[0]);return b=b.replace(/\+/g," ")},r=function(a,b){var c;a=decodeURIComponent(a);AJS.JQLHelper.getJqlQueryFromJiraFilter(a,b,function(d){d.jql&&(c=d.jql)});return c};return{isSingleKeyJQLExp:function(a){return m.exec(a)},isMultipleSingleKeyJQLExp:function(a){a=a.split(",");for(var b in a){var c=AJS.$.trim(a[b]);if(!AJS.JQLHelper.isSingleKeyJQLExp(c))return!1}return!0},isIssueUrlOrXmlUrl:function(a){return k.test(a)||
n.test(a)||l.test(a)||p.test(a)?!0:!1},isFilterUrl:function(a){return e.test(a)||f.test(a)},getFilterFromFilterUrl:function(a){if(e.test(a))return a=e.exec(a),a[2]+"\x3d"+a[3];if(f.test(a))return"filter\x3d"+f.exec(a)[2]},getJqlQueryFromJiraFilter:function(a,b,c,d){a=(e.exec(a)||f.exec(a))[2];b="/rest/jiraanywhere/1.0/jira/appLink/"+b+"/filter/"+a;AJS.$.ajax({async:!1,dataType:"json",url:Confluence.getContextPath()+b,success:c,error:d})},findServerIndexFromUrl:function(a,b){if("undefined"!==typeof b||
0<b.length)for(var c=a.toLowerCase(),d=0;d<b.length;d++)if(0==c.indexOf(b[d].url.toLowerCase())&&"/"==a.charAt(b[d].url.length))return d;return-1},getJqlQueryFromUrl:g,getJqlAndServerIndexFromUrl:function(a,b){var c={};c.serverIndex=this.findServerIndexFromUrl(a,b);c.jqlQuery=g(a);return c},checkQueryType:function(a){if(AJS.Editor.JiraAnalytics&&a&&0!=AJS.$.trim(a).length)return 0!=a.indexOf("http")?AJS.Editor.JiraAnalytics.linkTypes.jqlDirect:-1!=a.indexOf("jira.issueviews:searchrequest-xml")||-1!=
a.indexOf("jira.issueviews:issue-xml")?AJS.Editor.JiraAnalytics.linkTypes.xml:-1!=a.indexOf("jira.issueviews:searchrequest-rss")?AJS.Editor.JiraAnalytics.linkTypes.rss:-1!=a.indexOf("filter\x3d")||-1!=a.indexOf("filter\\\x3d")?AJS.Editor.JiraAnalytics.linkTypes.filter:AJS.Editor.JiraAnalytics.linkTypes.jql},convertToJQL:function(a,b){if(""!==AJS.$.trim(a))if(0===a.indexOf("http")&&this.isFilterUrl(a))var c=r(a,b);else 0===a.indexOf("http")&&this.isIssueUrlOrXmlUrl(a)?(a=g(decodeURIComponent(a)),0<
a.length&&(c=a)):c=0!==a.indexOf("http")&&a.match(q)?a:a.match(h)?"key\x3d"+a:'summary ~ "'+a+'" OR description ~ "'+a+'"';return c}}}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:legacy-editor-global-AVOID-IF-POSSIBLE', location = '/includes/js/amd/shim/confluence-editor-amd.js' */
define("confluence-editor/legacy",["confluence/legacy"],function(a){"undefined"===typeof a&&(a={});"undefined"===typeof a.Editor&&(a.Editor={});return a.Editor});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:draft-changes-js', location = '/includes/js/draft-changes.js' */
define("confluence/draft-changes","jquery ajs window confluence/legacy confluence/api/ajax confluence/api/event confluence/api/logger confluence/analytics-support confluence/dark-features confluence/meta confluence/aui-overrides wrm/context-path".split(" "),function(b,d,q,c,v,r,n,k,s,j,t,l){return{init:function(){var a,p=function(a){var c="Are you sure you want to discard these unpublished changes?",f=b("#draft-"+a),h;if(confirm(c)){c=l()+"/rest/api/content/"+a+"?status=draft";h=b.ajax;h({url:c,type:"DELETE",data:{draftId:a},
contentType:"application/json",dataType:"json",success:function(a){if(a&&a.actionErrors){for(var b=["<ul>"],a=a.actionErrors,c=0;c<a.length;c++){n.log("error: "+a[c]);b.push("<li>"+a[c]+"</li>")}b.push("</ul>");d.messages.error("#errors",{title:"Error",body:"There were errors discarding your draft."+" "+b.join("\n")})}else{b=f.closest("table");a=b.closest(".drafts-container");f.remove();b.find("tbody tr").length===0&&a.append('<span id="no-drafts-message">'+
"No drafts found."+"</span>")}},error:function(a){d.messages.error("#errors",{title:"There were errors discarding your draft.",body:a.errors||"An unknown error has occurred. Please check your logs."})}});return true}return false};b("body").on("click",".view-diff-link",function(u){var o=this.id,f=b(this);if(!a){var h=o==="view-diff-link-notification";a=new d.Dialog(860,530,"view-diff-draft-dialog");var e="Unpublished Changes for \u0027{0}\u0027";a.addHeader(e.replace(/\{0\}/,""));e=b(c.Templates.DraftChanges.dialogContent());
a.addPanel("Diff",e);if(h){a.addButton("Edit",function(){a.hide();c.Editor&&c.Editor.Drafts?c.Editor.Drafts.useDraft():q.location=b(this).attr("data-href")},"resume-diff-link");a.addButton("Discard",function(){if(s.isEnabled("editor.ajax.save")&&j.get("remote-user")!==""){c.Editor.SafeSave.Draft.discardDraft(d.params.pageId,j.get("existing-draft-id")).done(c.Editor.SafeSave.Draft.onSuccessDiscardDraft).fail(c.Editor.SafeSave.Draft.onErrorDiscardDraft);a.hide()}else if(c.Editor&&
c.Editor.Drafts){a.hide();c.Editor.Drafts.discardDraft(j.get("existing-draft-id"));k.publish("rte.notification.draft.discard")}else{var g=b(this).data("draftid");p(g)&&a.hide()}},"discard-diff-link")}a.addCancel("Close",function(){a.hide();return false});e.removeClass("hidden")}a.addHeader("Loading");b("#diff-view").html("<tr><td id='draft-changes-waiting-icon'>Loading...</td></tr>");var m,e=f.attr("class"),i=/draftPageId:([^ ]*)/.exec(e),f=i?i[1]:j.get("page-id"),
h=(i=/username:([^ ]*)/.exec(e))?i[1]:j.get("remote-user");m=(i=/draftId:([^ ]*)/.exec(e))?i[1]:null;b.ajax({url:l()+"/draftchanges/viewdraftchanges.action",type:"GET",dataType:"json",data:{pageId:f,username:h},success:function(g){if(g.actionErrors){for(var e="",g=g.actionErrors,f=0;f<g.length;f++){n.log("error: "+g[f]);e=e+"<div>"+g[f]+"</div>"}b("#diff-view").html(e)}else{b("#diff-view").html(g.htmlDiff);e=d.format("Unpublished Changes for \u0027\u0027{0}\u0027\u0027",d.escapeHtml(g.title));a.addHeader(e);a.popup.element.find(".dialog-title").prepend(c.Templates.DraftChanges.helpLink());
b(".resume-diff-link").attr("data-href",l()+"/pages/resumedraft.action?draftId="+m);b(".discard-diff-link").data("draftid",m);t.setVisible("#merge-warning",g.isMergeRequired)}},error:function(a){a=a.errors||"An unknown error has occurred. Please check your logs";b("#diff-view").html(a)}});a.show();r.trigger("analytics",{name:"confluence.editor.view-diff-dialog.open",data:{elementTriggerId:o}});u.stopPropagation();return false});b(".drafts-by-space li.draft-actions-list-item").on("click",".discard-draft-link",
function(a){a.preventDefault();k.publish("confluence.draft-list.discard");a=b(this).data("draftid");p(a)}).on("click",".resume-draft-link",function(){k.publish("confluence.drafts.referrer",{referrerPage:"drafts",lozengeType:"Draft"})})}}});require("confluence/module-exporter").safeRequire("confluence/draft-changes",function(b){require("ajs").toInit(b.init)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:draft-changes-js', location = '/includes/soy/draft-changes-dialog.soy' */
// This file was automatically generated from draft-changes-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.DraftChanges.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.DraftChanges == 'undefined') { Confluence.Templates.DraftChanges = {}; }


Confluence.Templates.DraftChanges.dialogContent = function(opt_data, opt_ignored) {
  return '<div id="draft-changes-dialog" class="hidden"><div id="diff-view" class="wiki-content"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.DraftChanges.dialogContent.soyTemplateName = 'Confluence.Templates.DraftChanges.dialogContent';
}


Confluence.Templates.DraftChanges.helpLink = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Dialog.helpLink({href: "https://docs.atlassian.com/confluence/docs-88/Drafts#viewchange"});
};
if (goog.DEBUG) {
  Confluence.Templates.DraftChanges.helpLink.soyTemplateName = 'Confluence.Templates.DraftChanges.helpLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:analytics', location = 'analytics/editor-ready-collab-mode-analytics.js' */
define("confluence-editor/analytics/editor-ready-collab-mode-analytics",["ajs","confluence/dark-features","confluence/meta"],function(a,d,b){return{trigger:function(){if(a.Rte&&a.Rte.getEditor()&&(a.$("#editpageform").length||a.$("#createpageform").length)){var c;c="confluence.editor.ready.collab.mode."+(d.isEnabled("site-wide.shared-drafts")?"on":"off");var e=b.get("synchrony-connection-order")?b.get("synchrony-connection-order"):"",f=b.get("synchrony-connection-type")?b.get("synchrony-connection-type"):
"";a.trigger("analyticsEvent",{name:c,data:{connectionOrder:e,connectionType:f}})}}}});require("confluence/module-exporter").safeRequire("confluence-editor/analytics/editor-ready-collab-mode-analytics",function(a){require("ajs").bind("rte-ready",function(){a.trigger()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:unpublished-changes', location = 'unpublished-changes/unpublished-changes.soy' */
// This file was automatically generated from unpublished-changes.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.UnpublishedChanges.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.UnpublishedChanges == 'undefined') { Confluence.Templates.UnpublishedChanges = {}; }


Confluence.Templates.UnpublishedChanges.lozenge = function(opt_data, opt_ignored) {
  return '<a id="unpublished-changes-lozenge" href="#" class="view-diff-link" title="' + soy.$$escapeHtml(opt_data.tooltip) + '"><span class="aui-lozenge aui-lozenge-complete aui-lozenge-subtle unpublished-changes-lozenge">' + soy.$$escapeHtml(opt_data.label) + '</span></a>';
};
if (goog.DEBUG) {
  Confluence.Templates.UnpublishedChanges.lozenge.soyTemplateName = 'Confluence.Templates.UnpublishedChanges.lozenge';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:unpublished-changes', location = 'unpublished-changes/unpublished-changes.js' */
define("confluence-editor/unpublished-changes/unpublished-changes",["jquery","confluence/legacy","ajs","underscore"],function(d,g,f,h){var k={init:function(a){var e=d(g.Templates.UnpublishedChanges.lozenge({tooltip:f.I18n.getText("editor.unpublished.changes.lozenge.tooltip"),label:f.I18n.getText("editor.unpublished.changes.lozenge.label")})),i=function(b){b=h.isBoolean(b)?b:!0;g.Editor.UI.setButtonState(b,d("#rte-button-publish"))},j=function(b,c){var a=c||function(){};(h.isBoolean(b)?b:1)?e.addClass("visible").fadeIn("fast",
a):e.fadeOut("fast",function(){d(this).hide().removeClass("visible");a()})},c={show:function(){e.hasClass("visible")||j(!0,i)},hide:function(){j(!1);i(!1)}};f.bind("rte-ready",function(){var b=d("#content-title-div");c.hide();e.insertBefore(b);e.tooltip();d("#content-title").on("keydown change",c.show);a.onChange.add(c.show);a.onKeyDown.add(c.show);a.onLoad.add(function(){d(a.startContent).text().trim()&&0<f.Meta.get("draft-id")&&c.show()});e.on("mouseenter.tipsy",function(){f.trigger("analytics",
{name:"confluence.editor.unpublished-changes.lozenge.hover"})});a.addCommand("mceConf.UnpublishedChangesLozenge.show",c.show);a.addCommand("mceConf.UnpublishedChangesLozenge.hide",c.hide)})},getInfo:function(){return{longname:"Unpublished Changes",author:"Atlassian",authorurl:"http://www.atlassian.com"}}};return function(){return k}});
require("confluence/module-exporter").safeRequire("confluence-editor/unpublished-changes/unpublished-changes",function(d){require("tinymce").PluginManager.add("unpublishedchanges",d)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:editor-shared-resources', location = 'tinymce3/plugins/confluencelist/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/confluencelist/editor_plugin_src",["jquery","ajs","tinymce"],function(b,k,i){var g={init:function(g){g.onKeyDown.add(function(d,g){function j(a){a&&a.lastChild&&!d.dom.isBlock(a.lastChild)&&!b(a.lastChild).is("br")&&b(a).append("<br/>")}if(8===g.keyCode){var a=d.selection.getRng(!0),c=b(a.startContainer).closest("li",d.getBody());if(0!==c.length&&k.EditorUtils.isCursorAtStartOf(c[0],a)){var a=c.prev("li"),e,h=c[0],f;if(0<a.length)return e=a[0],f=b(h.firstChild),
f.is("p")&&(f=f.contents().first()),d.undoManager.beforeChange(),d.undoManager.add(),b(e.lastChild).is("p")&&!d.dom.isBlock(h.firstChild)?(j(e.lastChild),c.contents().each(function(a,c){if(d.dom.isBlock(c))return!1;b(e.lastChild).append(b(c).detach())})):b(h.firstChild).is("p")&&!d.dom.isBlock(e.lastChild)?(j(e),b.each(b.makeArray(a.contents()).reverse(),function(a,c){if(d.dom.isBlock(c))return!1;b(h.firstChild).prepend(b(c).detach())})):j(e),a.append(c.detach().contents()),f[0]&&k.EditorUtils.setCursorAtStartOfContents(f[0]),
d.undoManager.add(),i.dom.Event.cancel(g)}}})},getInfo:function(){return{longname:"Confluence List Plugin",author:"Atlassian",authorurl:"http://www.atlassian.com",version:i.majorVersion+"."+i.minorVersion}}};return function(){return g}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/confluencelist/editor_plugin_src",function(b){require("tinymce").PluginManager.add("confluencelist",b)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:editor-shared-resources', location = 'tinymce3/plugins/confluencepastetable/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/confluencepastetable/editor_plugin_src",["jquery","document"],function(f,j){var i={init:function(k){function i(a){var c={id:!0,"class":!0,style:!0,rowspan:!0,colspan:!0,"data-mce-style":!0,"data-mce-bogus":!0,"data-macro-name":!0,"data-macro-parameters":!0,"data-macro-body-type":!0,"data-highlight-colour":!0,"data-highlight-class":!0},d=["highlight","nohighlight","relative-table","fixed-table"],b,e=0,g=[],h=f(a);if(!a||l(a))return a;a&&a.getAttribute&&(b=
a.getAttribute("class"));if(b&&0<=b.indexOf("table-wrap"))if(a=f("table",a),a.length)f(a).unwrap(),a=a[0];else return null;b=a.tagName?"TABLE TR TH TD TBODY THEAD TFOOT COL COLGROUP CAPTION".split(" ").includes(a.tagName):!1;if(b&&a.attributes){for(;e<=a.attributes.length;)(b=a.attributes[e])&&!0===b.specified&&!c[b.name]?a.removeAttribute(b.name):e++;m(a)&&g.push(m(a));c=0;for(e=d.length;c<e;c++)d[c].exec||h.hasClass(d[c])&&g.push(d[c]);(d=h.attr("data-highlight-class"))&&g.push(d);(d=h.attr("data-highlight-colour"))&&
g.push("highlight-"+d);h.attr("class",g.join(" "))}return a}function m(a){if(!a.tagName)return"";switch(a.tagName){case "TABLE":return"confluenceTable";case "TH":return"confluenceTh";case "TD":return"confluenceTd";default:return""}}function l(a){var c="";a&&a.getAttribute&&(c=a.getAttribute("class"));return!a.tagName||"TABLE"!==a.tagName||!c?!1:-1!==c.indexOf("wysiwyg-macro")}function n(a,c,d){for(var a=d.node,c=i,b=a,e="";b;)if("function"===typeof c&&(b=c(b)),b)b.firstChild&&e.parentNode!==b&&!l(b)?
(e=b,b=b.firstChild):b.nextSibling?(e=b,b=b.nextSibling):(e=b,b=b.parentNode);else break;d.node=a}k.on("init",function(){f(j).bind("postPaste",n)});k.on("remove",function(){f(j).unbind("postPaste",n)})},getInfo:function(){return{longname:"ConfluencePasteTablePlugin",author:"Atlassian",authorurl:"http://www.atlassian.com",infourl:"http://www.atlassian.com",version:"1.0"}}};return function(){return i}});
require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/confluencepastetable/editor_plugin_src",function(f){require("tinymce").PluginManager.add("confluencepastetableplugin",f)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:editor-shared-resources', location = 'tinymce3/plugins/confcleanup/editor_plugin_src.js' */
define("confluence-editor/tinymce3/plugins/confcleanup/editor_plugin_src",["tinymce","jquery"],function(f,g){var l={init:function(h){var d=f.Env.browser;if(d.isSafari()||("isChromium"in d?d.isChromium():d.isChrome())){var i={},j=function(a,c){var b=a[c];b||(b={},a[c]=b);return b};g("#format-dropdown").find("ul.aui-dropdown li").each(function(){var a=g("a",this),c=a.css("font-size"),b=a.css("font-weight"),a=a.css("color"),a=j(i,a),b=j(a,b);b[c]||(b[c]=g(this).attr("data-format"))});h.onNodeChange.add(function(a){for(var c=
a.dom.select("span.Apple-style-span",a.dom.doc.body),b=a.dom.select("font.Apple-style-span",a.dom.doc.body),c=c.concat(b),b=0,k=c.length;b<k&&!a.dom.is(c[b],'[face="mceinline"]');b++){var e;a:{e=g(c[b]);var d=i[e.css("color")],f=void 0;if(d&&(f=d[e.css("font-weight")])){e=f[e.css("font-size")];break a}e=null}e&&(d=a.selection.getBookmark(),e&&a.dom.remove(c[b],1),a.selection.moveToBookmark(d),a.execCommand("FormatBlock",!1,e))}})}h.onNodeChange.add(function(a){for(var c=a.dom.select("img",a.dom.doc.body),
b=c.length,d=0;d<b;d++)"file:///"===c[d].src.substr(0,8)&&a.dom.remove(c[d])})},getInfo:function(){return{longname:"ConfluenceCleanupPlugin",author:"Atlassian",authorurl:"http://www.atlassian.com",infourl:"http://www.atlassian.com",version:"1.0"}}};return function(){return l}});require("confluence/module-exporter").safeRequire("confluence-editor/tinymce3/plugins/confcleanup/editor_plugin_src",function(f){require("tinymce").PluginManager.add("confluencecleanupplugin",f)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-editor-plugin:split_page-editor-quit-dialog', location = 'page-editor-quit-dialog.js' */
(window.atlassianWebpackJsonp1126d6c3ec4535e33734b1025bd581ff=window.atlassianWebpackJsonp1126d6c3ec4535e33734b1025bd581ff||[]).push([["page-editor-quit-dialog"],{98:function(e,i,o){"use strict";o.r(i);var a=o(19),t=o(9);Object(t.a)("confluence-editor/editor/page-editor-quit-dialog",(()=>a.a))}},[[98,"runtime","vendors~core~page-editor-quit-dialog","core~editor-notifications~page-editor-message~page-editor-quit-dialog","core~page-editor-message~page-editor-quit-dialog","core~page-editor-quit-dialog"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.reliablesave:reliable-save-conf-frontend', location = 'templates/reliable-save.soy' */
// This file was automatically generated from reliable-save.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Editor.Reliable.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Editor == 'undefined') { Confluence.Templates.Editor = {}; }
if (typeof Confluence.Templates.Editor.Reliable == 'undefined') { Confluence.Templates.Editor.Reliable = {}; }


Confluence.Templates.Editor.Reliable.draftMessage = function(opt_data, opt_ignored) {
  var output = '<div id="draft-messages">';
  if (opt_data.isNewPage) {
    if (opt_data.existingDraft.title) {
      var escapedTitle__soy8 = '' + soy.$$escapeHtml(opt_data.existingDraft.title);
      output += soy.$$filterNoAutoescape(AJS.format('A new page you were adding on {0} called \x26#8216;{1}\x26#8217; was saved as a draft.',opt_data.existingDraft.date,escapedTitle__soy8));
    } else {
      output += soy.$$filterNoAutoescape(AJS.format('A new page you were adding on {0} was saved as a draft.',opt_data.existingDraft.date));
    }
    output += ' ' + soy.$$filterNoAutoescape(AJS.format('Do you want to {0}resume editing{1} or {2}discard{3} it?','<a href="#" class="use-draft"> ','</a>','<a href="#" class="discard-draft"> ','</a>'));
  } else {
    output += soy.$$filterNoAutoescape(AJS.format('A version of this page you were editing at {0} was saved as a draft.',opt_data.existingDraft.date)) + ((opt_data.mergeRequired) ? ' ' + soy.$$escapeHtml('The page has since been updated. Your changes will be merged with the latest version.') : '') + ((opt_data.conflictFound) ? ' ' + soy.$$filterNoAutoescape(AJS.format('The page has since been updated. The changes made conflict with your changes and cannot be merged. Do you want to {0}view the conflict{1} or {2}discard{3} your changes?','<a href="?pageId=' + opt_data.pageId + '&viewConflict=true&spaceKey=' + opt_data.spaceKey + '" >','</a>','<a href="#" class="discard-draft">','</a>','<a href="' + "" + '/users/viewmydrafts.action">','</a>')) : (opt_data.mergeRequired) ? ' ' + soy.$$filterNoAutoescape(AJS.format('Do you want to {0}view{1}, {2}merge and resume editing{3} or {4}discard{5} it?','<a id="view-diff-link-notification" href="#" class="view-diff-link">','</a>','<a href="#" class="use-draft"> ','</a>','<a href="#" class="discard-draft">','</a>')) : ' ' + soy.$$filterNoAutoescape(AJS.format('Do you want to {0}view the change{1}, {2}resume editing{3} or {4}discard{5} it?','<a id="view-diff-link-notification" href="#" class="view-diff-link">','</a>','<a href="#" class="use-draft"> ','</a>','<a href="#" class="discard-draft">','</a>')));
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.Reliable.draftMessage.soyTemplateName = 'Confluence.Templates.Editor.Reliable.draftMessage';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.reliablesave:reliable-save-conf-frontend', location = 'js/reliable-save.js' */
define("confluence-editor-reliable-save/reliable-save","ajs confluence/legacy underscore jquery window document confluence/api/constants confluence-editor/editor/page-editor-message confluence-editor/editor/page-editor-quit-dialog".split(" "),function(a,f,z,h,u,X,x,e,M){function A(){return c.get("shared-drafts")}function B(){return c.getBoolean("new-page")}function C(){f.Editor.UI.toggleSavebarBusy(!1)}function F(g){var l="There was an error processing the request.";e.closeMessages(["generic-error"]);
e.handleMessage("generic-error",{type:"error",message:l},m);a.logError("Generic error: "+JSON.stringify(g))}function m(){var g=h("#draft-messages");0<g.length&&(g.is(":visible")&&a.Confluence.Analytics.publish("rte.notification.draft"),g.find("a.use-draft").click(function(l){l.stopPropagation();l.preventDefault();f.Editor.Drafts.useDraft();a.Confluence.Analytics.publish("rte.notification.draft.resume")}),g.find("a.discard-draft").click(function(l){l.stopPropagation();l.preventDefault();r.Draft.discardDraft(c.get("page-id"),
c.get("existing-draft-id")).done(r.Draft.onSuccessDiscardDraft).fail(r.Draft.onErrorDiscardDraft)}))}function S(){h("#editor-restore-title-link").click(function(g){g.stopPropagation();g.preventDefault();h("#content-title").val(c.get("latest-published-page-title"));e.closeMessages(["rename-during-limited-mode"])})}function G(){c.set("access-mode","READ_ONLY");e.closeMessages(["read-only-mode"]);e.handleMessage("read-only-mode",{title:"This site is read-only",type:"error",
message:"Starting now, any changes you make won\u0027t be saved. We\u0027ll let you know when you can start editing again."});f.Editor.UI.setButtonsState(!0);f.Editor.UI.toggleSavebarBusy(!1);f.Editor.UI.setButtonState(!1,f.Editor.UI.saveButton);f.Editor.UI.setButtonState(!1,f.Editor.UI.cancelButton)}function H(g){var l="Looks like your session expired. Log in again to keep working.\n \u003cdiv\u003e\u003ca href=\u0022dashboard.action\u0022 target=\u0022_blank\u0022\u003eLogin\u003c/a\u003e\u003c/div\u003e";e.closeMessages(["noauthorized"]);e.handleMessage("noauthorized",{title:"Can\u0027t connect to the server",type:"error",message:l},m);g&&a.trigger("rte.safe-save.invalid-xsrf-token")}
function N(){var g="Unable to communicate with server. Saving is not possible at the moment.";e.closeMessages(["server-offline"]);e.handleMessage("server-offline",{type:"error",message:g},m)}var O=[],D=!1,c=require("confluence/meta"),r={Draft:{discardDraft:function(g,l){g={draftId:l,pageId:g,type:c.get("draft-type"),spaceKey:c.get("space-key")};return h.ajax({type:"DELETE",url:x.CONTEXT_PATH+"/rest/tinymce/1/drafts/discard",data:h.toJSON(g),contentType:"application/json",dataType:"json"})},onSuccessDiscardDraft:function(){B()||
c.set("draft-id","0");e.closeMessages(["draft-message"]);e.handleMessage("discarding-successfull",{type:"info",message:"Your draft has been discarded.",close:"auto"},m);a.Confluence.Analytics.publish("rte.notification.draft.discard")},onErrorDiscardDraft:function(g){switch(g.status){case 403:H(!0);break;case 404:e.handleMessage("draft-deleted",{type:"info",message:"This draft has been discarded."},m);break;case 405:G();break;case 422:e.handleMessage("discarding-invalid",
{type:"error",message:"This draft is invalid. It can be deleted by someone or looks like your session expired."},m);break;default:e.handleMessage("discarding-error",{type:"error",message:"An unknown error has occurred. Please check your logs."},m)}}}};r._internal=f.SafeSafe&&f.SafeSave._internal?f.SafeSave._internal:{};r._internal.onSuccessfulResponse=function(g){h("#rte-button-overwrite").unbind("click.overwrite");var l={dataType:"json",contentId:c.get("content-id"),draftType:c.get("draft-type")};a.safe.post(x.CONTEXT_PATH+"/json/stopheartbeatactivity.action",
l,function(){a.log("Stop heartbeat activity on",l.draftType,"id",l.contentId)},"json").fail(function(n,I,J){a.logError("Server error on stop heartbeat activity request:");a.log(J)}).always(function(){var n=g._links.webui;n?0!==n.indexOf("/")?u.location=n:u.location=x.CONTEXT_PATH+n:(f.Editor.isPublishing(!1),C())})};r.resetUnrecoverableEditorError=function(){D=!1};r.initialize=function(){function g(b){C();switch(b.status){case 400:e.closeMessages(["empty-title","duplicate-title","title-too-long",
"legacy-draft-deprecated","utf8-validation-failed"]);0<=b.responseText.indexOf(n.duplicatedTitle)?e.handleMessage("duplicate-title",{type:"error",message:a.format("A page with the title \u0027\u0027{0}\u0027\u0027 already exists in this space. Enter a different title for your page.",a.escapeHtml(h("#content-title").val()))}):0<=b.responseText.indexOf(n.titleTooLong)?e.handleMessage("title-too-long",{type:"error",message:"Title cannot be longer than 255 characters."},m):0<=b.responseText.indexOf(n.publishNewDraftDeprecated)||0<=b.responseText.indexOf(n.existingDraftNotFound)?
c.get("new-page")&&A()&&!f.Editor.hasContentChanged()?(a.trigger("rte.legacy-draft-can-be-migrated"),e.handleMessage("legacy-draft-deprecated",{type:"error",message:a.format("Collaborative editing is here! So that you can keep working on this page, we need to migrate the content to a new draft for you.\u003cbr\u003e \u003ca href={0}\u003eMigrate now\u003c/a\u003e",x.CONTEXT_PATH+"/pages/resumedraft.action?draftId\x3d"+c.get("draft-id"))},m)):(a.trigger("rte.legacy-draft-cannot-be-migrated"),e.handleMessage("legacy-draft-deprecated",{type:"error",message:"Collaborative editing is here! That means we need a little help from you to restart your editing session. All you need to do is copy the content, edit this page again, then paste it in and save."},m)):0<=b.responseText.indexOf(n.utf8ValidationFailed)?
(b=b.responseJSON.message.split(n.utf8ValidationFailed)[1],e.handleMessage("utf8-validation-failed",{title:"Unsupported character",type:"error",message:a.format("We can\u0027\u0027t save because the {0} character isn\u0027\u0027t supported by your database.\u003cbr\u003e\u003cbr\u003eRemove this character or use a Confluence symbol or emoticon instead. \u003ca href = \u0022https://confluence.atlassian.com/x/BYfsNg\u0022 target=\u0022_blank\u0022\u003eLearn more\u003c/a\u003e",b)},m)):F(b);break;case 403:H(!0);break;case 404:e.closeMessages(["page-not-accessible","noauthorized"]);e.handleMessage("page-not-accessible",{title:"This content cannot be accessed.",type:"error",message:a.format("Your session may have expired, you can attempt to \u003ca href=\u0022dashboard.action\u0022 target=\u0022_blank\u0022\u003elog in\u003c/a\u003e.",
c.get("space-key"))},m);break;case 405:G();break;case 410:e.closeMessages(["page-deleted"]);e.handleMessage("page-deleted",{title:"This content has been deleted",type:"error",message:a.format("Copy your content, then add it to a new page or \u003cdiv\u003e\u003ca href=\u0022viewtrash.action?key={0}\u0022 target=\u0022_blank\u0022\u003erestore this page from the trash\u003c/a\u003e and try again.\u003c/div\u003e",c.get("space-key"))},m);break;case 413:e.closeMessages(["page-too-big"]);e.handleMessage("page-too-big",{type:"error",message:"This page is too big to save. You could split it into multiple pages, then use the \u003ca href=\u0022https://confluence.atlassian.com/conf51/include-page-macro-336169384.html\u0022 target=\u0022_blank\u0022\u003einclude page macro\u003c/a\u003e to display the content."},m);break;case 0:case 500:case 503:N();break;case 501:0<=b.responseText.indexOf(n.renameDuringLimitedMode)?
e.handleMessage("rename-during-limited-mode",{type:"error",message:"Changing page titles isn\u0027t possible right now, as collaborative editing is offline. \u003cdiv\u003e\u003ca id=\u0022editor-restore-title-link\u0022 href=\u0022#\u0022\u003eRestore the page title\u003c/a\u003e if you\u0027d like to publish the page.\u003c/div\u003e"},S):F(b);break;default:F(b)}}function l(b){function v(d){K<T?(K++,L.push(setTimeout(function(){l()},U))):(a.trigger("analyticsEvent",{name:"editor.save.error.conflict"}),K=0,e.handleMessage("page-conflict",{title:"Can\u0027t sync with the server.",type:"error",message:a.format("Refresh the page to try to re-establish the connection.",k.space.key)},m),y(d))}function y(d){a.trigger("rte.safe-save.error",
{status:d.status})}function E(d){return(10>d?"0":"")+d}function V(d){d=parseInt(d,10);if(Number.isNaN(d))return"";const q=0>d?"-":"+";d=Math.abs(d);d=Math.floor(d/1E3/60);const P=d%60;return q+E((d-P)/60)+":"+E(P)}function Q(){f.Editor.isPublishing(!0);h.ajax({type:R,url:t,contentType:"application/json; charset\x3dutf-8",dataType:"json",data:JSON.stringify(k),success:function(d){"page"!==k.type&&"blogpost"!==k.type||a.trigger("analytics",{name:"confluence.editor.close",data:{source:"publishButton"}});
a.trigger("rte.safe-save.success",d);r._internal.onSuccessfulResponse(d)},error:function(d){f.Editor.isPublishing(!1);C();var q=!1;switch(d.status){case 409:A()?(q=!0,v(d)):(f.Editor.restoreDefaultSave(),f.Editor.UI.saveButton.click());break;case 0:case 500:case 503:for(;L.length;)clearTimeout(L.shift());g(d);break;default:g(d)}q||y(d);a.trigger("synchrony.start",{id:"confluence.editor.publish"})}})}a.trigger("synchrony.stop",{id:"confluence.editor.publish"});b&&b.preventDefault();var w=h("#content-title");
if(w.hasClass("placeholded")||""===w.val().trim())a.trigger("rte.safe-save.error"),a.trigger("synchrony.start",{id:"confluence.editor.publish"}),e.closeMessages(["title-too-long","duplicate-title"]),e.handleMessage("empty-title",{title:"This page needs a name",type:"error",message:"Add a page title before hitting publish."},m),C();else{f.Editor.Drafts.unBindUnloadMessage();var k={};b=c.get("draft-id");var W=c.get("content-id"),t=x.CONTEXT_PATH+"/rest/api/content",p=h("#sourceTemplateId").val();
k.status="current";k.title=w.val();k.space={key:c.get("space-key")};k.body={editor:{value:function(d){O.forEach(function(q){d=q(d)});return d}(a.Rte.getEditor().getContent()),representation:"editor"}};p&&(k.extensions={sourceTemplateId:p});w=(w=h("#PostingDate")[0])&&w.value;"blogpost"===I.type&&w&&(p=(p=h("#PostingTime")[0])&&p.value,p||(p=new Date,p=E(p.getHours())+":"+E(p.getMinutes())),p+=":00",w+="T"+p+V(c.get("user-timezone-offset")),k.history={createdDate:(new Date(w)).toISOString()});if(B()&&
!c.get("shared-drafts")){var R="POST";c.get("is-blueprint-page")&&(t=t+"/blueprint/instance/"+b);t+="?status\x3ddraft";k.id=b;k.type=c.get("content-type");k.body.editor.content={id:b}}else R="PUT",B()&&c.get("is-blueprint-page")&&(t+="/blueprint/instance"),t=t+"/"+W,B()&&A()?(k.id=b,k.body.editor.content={id:b}):(k.id=c.get("page-id"),k.body.editor.content={id:c.get("page-id")}),t="0"===b?t+"?status\x3dcurrent":t+"?status\x3ddraft",b=c.getNumber("page-version")||0,k.type=c.get("content-type"),k.version=
{number:b+1,message:h("#versionComment").val(),minorEdit:!h("#notifyWatchers").is(":checked"),syncRev:h("#syncRev").val()};b=function(){var d={};d.id=c.get("parent-page-id")||"0";d.type=c.get("content-type");var q=c.get("parent-page-id");q&&k.space.key===c.get("space-key")||(d.id="0");q&&d.id!==q&&(d.id=h("#parentPageString").val()===c.get("from-page-title")?d.id:q);return d}();"0"!==b.id&&(k.ancestors=[b]);(b=f.Editor.Drafts.getDraftSavingPromise())?b.always(Q):Q()}}if(0!==h("#editpageform").length||
0!==h("#createpageform").length){var n={duplicatedTitle:"A page with this title already exists",titleTooLong:"Title cannot be longer than 255 characters.",publishNewDraftDeprecated:"Unsupported call to publishNewDraft",existingDraftNotFound:"Could not find existing draft, perhaps you're trying to publish a personal draft?",renameDuringLimitedMode:"Unable to perform a page rename when limited mode is enabled",utf8ValidationFailed:"Unsupported character found in content: "},I={existingDraftId:c.get("existing-draft-id")?
c.get("existing-draft-id"):0,pageId:c.get("page-id"),type:c.get("draft-type"),spaceKey:c.get("space-key")};if(!0===c.get("show-draft-message")){if(0<h("#conflict-diffs").length)return;h.ajax({type:"GET",url:x.CONTEXT_PATH+"/rest/tinymce/1/drafts/message",data:I,contentType:"application/json",dataType:"text json",success:function(b){b&&b.draftData&&(b=f.Templates.Editor.Reliable.draftMessage({existingDraft:b.draftData,conflictFound:b.conflictFound,mergeRequired:b.mergeRequired,isNewPage:b.newPage,
pageId:c.get("page-id"),spaceKey:c.get("space-key")}),e.handleMessage("draft-message",{type:"info",message:b},m))}})}var J=0<h("#editor-notifications-container #all-messages .aui-message-error").length;A()?(M.init({saveHandler:l,cancelErrorHandler:g}),f.Editor.overrideSave(M.process)):J?f.Editor.restoreDefaultSave():f.Editor.overrideSave(l);h("#rte-button-overwrite").bind("click.overwrite",l);var K=0,T=3,U=1E3,L=[];a.bind("rte.heartbeat-error",function(b,v){switch(v.status){case 401:case 403:e.isDisplayed(["page-not-accessible"])||
H(!1);break;case 405:if(v.responseText){b=JSON.parse(v.responseText);e.isDisplayed(["read-only-mode"])||"READ_ONLY"!==b.reason||G();break}case 0:case 404:case 500:case 503:f.Editor.metadataSyncRequired()||N();break;default:a.logError("Heartbeat action error: "+JSON.stringify(v))}});a.bind("rte.heartbeat",function(b){var v=!1;z.each(e.displayedErrors(),function(y){z.contains(["noauthorized","server-offline","page-not-accessible","read-only-mode"],y)&&(v=!0,e.closeMessages([y]))});(b="READ_ONLY"===
c.get("access-mode"))&&c.set("access-mode","READ_WRITE");(v||b)&&e.handleMessage("reconnect",{type:"info",title:"Successfully reconnected",message:"We\u0027re back in business. You\u0027re free to save your page again.",close:"auto"},m);f.Editor.UI.isButtonEnabled(f.Editor.UI.saveButton)||D||f.Editor.UI.setButtonState(!0,f.Editor.UI.saveButton);f.Editor.UI.isButtonEnabled(f.Editor.UI.cancelButton)||D||f.Editor.UI.setButtonState(!0,f.Editor.UI.cancelButton)});a.bind("synchrony.history.evicted",function(){D=
!0})}};r.registerCleanupFunction=function(g){O.push(g)};return r});
require("confluence/module-exporter").safeRequire("confluence-editor-reliable-save/reliable-save",function(a){var f=require("ajs"),z=require("confluence/meta"),h=0<window.document.referrer.indexOf("createDialog\x3dtrue\x26flashId");if(f.DarkFeatures.isEnabled("editor.ajax.save")&&""!==z.get("remote-user")&&!h){var u=require("confluence/legacy");f.bind("rte.init.ui",function(){a.initialize();u.Editor=u.Editor||{};u.Editor.SafeSave=u.Editor.SafeSave||{};u.Editor.SafeSave.Draft=a.Draft;u.Editor.SafeSave._internal=
a._internal||{}})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.reliablesave:reliable-save-conf-frontend', location = 'js/ajax-login.js' */
define("confluence-editor-reliable-save/ajax-login",["confluence/dark-features","confluence/meta","ajs","jquery","document"],function(v,t,g,h,D){return function(){function E(m,k,a){function r(b){b=b.getResponseHeader("X-AUSERNAME");return y===b}function F(b){for(var c=0,d=b.length;c<d;c++){var e=b[c];g.debug("Rerunning ajax query to: "+e.url,e);z.call(h,e.url,e.settings).done(function(){g.debug("Rerunning done");e.deferred.resolve(arguments)}).fail(function(){g.debug("Rerunning failed");e.deferred.reject(arguments)})}}
function G(b){u.push({deferred:n,url:m,settings:k,defaultCallback:b});w||(x=!1,p||(p=new g.Dialog(840,700),p.addPanel("ajax-login","ajax-login-content","ajax-login-panel",1),b=h(".ajax-login-panel"),q=h("\x3ciframe\x3e\x3c/iframe\x3e"),q.bind("load",function(c){(c=q[0].contentDocument.location.pathname)&&0<=c.indexOf("/ajaxlogincomplete.action")&&(w=!1,x=!0,p.hide(),q.attr("src","about:blank"))}),b.append(q),h(D).bind("hideLayer",function(c,d,e){if("popup"===d&&e===p.popup){g.debug("hiding login dialog");
if(x)F(u);else for(c=u,d=0,e=c.length;d<e;d++){var l=c[d];g.debug("Executing with original response for: "+l.url,l);l.defaultCallback&&l.defaultCallback()}u=[]}})),q.attr("src",H),p.show(),w=!0)}function A(b,c,d,e){function l(){f.readyState=b.readyState;f.status=b.status;f.statusText=b.statusText;b.responseXML?f.responseXML=b.responseXML:f.responseText=b.responseText;c.apply(d,e)}r(b)?l():G(l)}g.debug("Using authenticatingPromise");var f={abort:function(){a.abort.apply(a,arguments)},getAllResponseHeaders:function(){a.getAllResponseHeaders.apply(a,
arguments)},getResponseHeader:function(){a.getResponseHeader.apply(a,arguments)},overrideMimeType:function(){a.overrideMimeType.apply(a,arguments)},readyState:a.readyState,setRequestHeader:function(b,c){a.setRequestHeader.apply(a,arguments)},state:function(){a.state.apply(a,arguments)},status:a.status,statusCode:function(){a.statusCode.apply(a,arguments)},statusText:a.statusText},n=h.Deferred();n.promise(f);f.success=f.done;f.error=f.fail;a.done(function(b,c,d){A(d,n.resolve,n,arguments)});a.fail(function(b,
c,d){A(b,n.reject,n,arguments)});return f}if(v.isEnabled("ajax.login")){g.debug("AJAX login support enabled");var w=!1,p,q,x,u=[],z=h.ajax,y=t.get("remote-user"),B=t.get("base-url"),C=t.get("context-path"),H=t.get("context-path")+"/login.action?os_destination\x3d%2Fajaxlogincomplete.action";h.ajax=function(m,k){var a=z.call(h,m,k),r=m&&m.url;return y&&(!k||k&&!k.preventAjaxLogin)&&r&&(B&&0===r.indexOf(B)||C&&0===r.indexOf(C))?E(m,k,a):a}}}});
require("confluence/module-exporter").safeRequire("confluence-editor-reliable-save/ajax-login",function(v){require("ajs").toInit(v)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:editor-resources', location = 'tinymce3/plugins/confluencepaste/linkify.js' */
define("confluence-editor/tinymce3/plugins/confluencepaste/linkify",function(){return{RE_EMAIL_PATTERN:"(?:\\s|\\A|^)[\\w.-]+\\+*[\\w.-]+@(?:(?:[\\w-]+\\.)+[A-Za-z]{2,6}|(?:\\d{1,3}\\.){3}\\d{1,3})",RE_URL_SCHEME:"(?:[\\w-]{2,}):/{1,3}",RE_TLD:"(?:aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|travel|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|fi|fj|fk|fm|fo|fr|ga|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|si|sj|sk|sl|sm|sn|so|sr|st|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)",
RE_URL_MIDCHAR:"(?:[^\\s()]+|\\((\\S+)\\))",RE_URL_ENDCHAR:"(?:\\((\\S+)\\)|[^\\s`!()\\[\\]{};:'\".,<>?«»“”‘’])",init:function(){this.RE_URL_ENDING||(this.RE_URL_ENDING="(?:"+this.RE_URL_MIDCHAR+"*"+this.RE_URL_ENDCHAR+")?",this.RE_FULL_URL=this.RE_URL_SCHEME+"\\w+(?:.\\w+)"+this.RE_URL_ENDING,this.RE_OTHER_URL="\\w[\\w_-]*(?:\\.\\w[\\w_-]*)*\\."+this.RE_TLD+"(?:[\\/\\?#]"+this.RE_URL_ENDING+"|\\b)")},linkify:function(f,b,i){this.init();f=this.match_and_replace(this.RE_EMAIL_PATTERN,f,!0,!1,b,i);
f=this.match_and_replace(this.RE_FULL_URL,f,!1,!1,b,i);return f=this.match_and_replace(this.RE_OTHER_URL,f,!1,!0,b,i)},match_and_replace:function(f,b,i,o,k,h){for(var c=0,a=0,d=0,c=0,l=/<\/[aA]>/,f=RegExp(f,"g"),p=h.hasOwnProperty("add_wbrs")?h.add_wbrs:null,j=h.hasOwnProperty("truncate_length")?h.truncate_length:100,m=h.hasOwnProperty("link_target")?h.link_target:"_blank",h=h.hasOwnProperty("link_titles")?h.link_titles:null,d={},n=0;d=f.exec(b);){n++;if(20<n)break;c=d.index;d=d[0].length;if(0<=b.substring(a,
c).search(/<[aA]/)){l.lastIndex=a;c=b.substring(a,b.length).search(l);if(0>c)break;c+=a;f.lastIndex=c+4;a=c+4}else{var a=b.substr(c,d),g=a.search(/&(amp|gt|lt)$/);if(0<g&&b.length>c+d&&";"==b[c+d]){d-=a.length-g;for(a=b.substr(c,d);!a.match(this.RE_URL_ENDCHAR+"$")&&0<d;)d--,a=b.substr(c,d)}g=a;o&&(g="http://"+g);var e="<a";m&&(e+=' target="'+m+'"');e+=' href="';i&&(e+="mailto:");g=g.replace(/"/g,"%22");e+=g+'"';h&&(e+=' title="'+(i?"Email "+g:g)+'"');j&&a.length>j&&(a=a.substr(0,j)+"...");p&&(a=
a.replace(/([/=])/g,"<wbr>$1"));e+=">"+a+"</a>";k&&k.push(g);b=b.slice(0,c)+e+b.slice(c+d,b.length);f.lastIndex=c+e.length;a=c+e.length}}return b}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/confluencepaste/linkify","linkify");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:editor-resources', location = 'tinymce3/plugins/confluencepaste/post-paste-node-filter.js' */
define("confluence-editor/tinymce3/plugins/confluencepaste/post-paste-node-filter","jquery confluence/legacy confluence-editor/tinymce3/plugins/confluencepaste/linkify ajs document tinymce".split(" "),function(e,B,q,r,y,z){function u(a,b){for(var f=e(a).find("["+b+"]"),c="",d="",g="",h=0,k=f.length;h<k;h++){d=(c=e(f[h]))&&["/",c.attr(b)].join("");g=c&&["/",c.attr("data-mce-"+b)].join("");r.contextPath()&&d.indexOf(r.contextPath())===0&&(f[h]=c.attr(b,d));r.contextPath()&&g.indexOf(r.contextPath())===
0&&(f[h]=c.attr("data-mce-"+b,g))}return f}function m(a,b,f){var a=e(a).find("["+b+"]"),c="",d,g;if(a)for(var h=0,k=a.length;h<k;h++){d=e(a[h]);g=f.standard;for(var n in f)if(f.hasOwnProperty(n)&&d.is(n)){g=f[n];break}if(b.indexOf("style")>-1){var c=d,i=g;g=[];for(var o="",o=void 0,p=c.attr("style"),l=c.attr("data-mce-style"),j=0,m=i.length;j<m;j++)if(p&&p.toLowerCase().indexOf(i[j])>-1)g.push(i[j]+": "+c.css(i[j])+";");else if(l&&l.toLowerCase().indexOf(i[j])>-1){o=RegExp(i[j]+":.+?(?:;|$)");o=l.match(o);
g.push(o[0].indexOf(";")>-1?o:o+";")}c=g.join(" ")}else{c=d;i=b;p=[];if(g){l=0;for(j=g.length;l<j;l++)c.is("["+i+"~="+g[l]+"]")&&p.push(g[l])}c=p.join(" ")}d.removeAttr(b);c.length&&d.attr(b,c)}}function A(a,b){function f(f){var d;if(c.index){d=a.splitText(c.index);a&&b.push(a);a=d}(d=a.splitText(c[0].length))&&b.push(d);e(a).wrap("<a href='"+f+a.data+"'></a>")}var c,d,g;d=s.exec(a.data);g=t.exec(a.data);if(d){c=d;f("mailto:")}else if(g){d=(c=g)&&c[0].indexOf("://")===-1?"http://":"";f(d)}}var t;
q.init();var v=RegExp(q.RE_FULL_URL),w=RegExp(q.RE_OTHER_URL);t={exec:function(a){return v.exec(a)||w.exec(a)},test:function(a){return v.test(a)||w.test(a)}};var s,x=RegExp(q.RE_EMAIL_PATTERN);s={exec:function(a){if((a=x.exec(a))&&/\s/.test(a[0][0])){a[0]=a[0].replace(/\s/,"");a.index++}return a},test:function(a){return x.test(a)}};e(y).bind("postPaste",function(a,b,f){a=f.node;b={standard:["text-decoration","text-align","margin-left"],".wysiwyg-macro":["background-image"],p:["margin-left","text-align"],
span:["color","text-decoration"],pre:["margin-left"]};b.td=b.th=["text-align","vertical-align"];b.li=["list-style-type","background-image"];b.col=["width"];b["table.confluenceTable.relative-table"]=["width"];m(a,"style",b);m(a,"data-mce-style",b);if(e.browser.mozilla){u(a,"src");u(a,"href")}m(a,"face",{standard:[]});m(a,"id",{standard:[]});m(a,"data-mce-href",{standard:[]});a=f.node;b=[];b.push({elements:["div"],attribute:"class",blackValue:"aui-buttons"});for(var c=0;c<b.length;c++)for(var d=b[c],
g=0;g<d.elements.length;g++)for(var h=e(a).find(d.elements[g]+"["+d.attribute+"]"),k=0;k<h.length;k++){var n=h.eq(k).attr(d.attribute),n=n.replace(d.blackValue,"");h.eq(k).attr(d.attribute,n)}var i=f.node;e.each([".contentLayout",".contentLayout2",".columnLayout",".header",".footer",".cell",".innerCell",".panelContent",".panel",".panelHeader",".Apple-converted-space","font",".jira-status",".jira-issue",".diff-html-removed",".diff-html-added",".diff-html-changed"],function(a,b){e(b,i).contents().unwrap()});
e("img",i).map(function(){e(this).attr("data-attachment-copy","");!e(this).attr("src")&&e(this).remove()});e("dl",i).map(function(){e(this).replaceWith(e("<p></p>").text(e(this).text()))});e("a",i).map(function(){e(this).removeClass("confluence-userlink userLogoLink")});for(a=e.makeArray(f.node.childNodes);a.length;){b=a.pop();e(b).is("a")||(b.nodeType===3?A(b,a):b.nodeType===1&&(b.childNodes&&b.nodeName.toLowerCase()!=="pre")&&(a=a.concat(e.makeArray(b.childNodes))))}if(a=e.browser.mozilla){a=e(f.node);
a=a.children("br").length&&!a.find(":not(br)").length&&!e(z.activeEditor.selection.getStart()).closest("[data-macro-body-type='PLAIN_TEXT']").length}if(a){f=e(f.node);a="<p>"+f.html().replace(/<br>/gi,"</p><p>")+"</p>";f.html(a)}});return{URL:t,EMAIL:s}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/confluencepaste/post-paste-node-filter","Confluence.Editor.regex");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:editor-resources', location = 'com/atlassian/confluence/tinymceplugin/tinymce-adapter-deprecated.js' */
define("confluence-editor/tinymceplugin/tinymce-adapter-deprecated",["tinymce","ajs","confluence/legacy","jquery"],function(e,b,g,h){return{putCursorAtPostionInElement:function(a,b,c){var d=e.activeEditor,i=d.getDoc(),a=h(a,c||i),a=a.contents().length?a.contents().filter(function(){return 3===this.nodeType})[0]||a.contents().filter(function(){return 1===this.nodeType})[0]:a[0],c=d.selection.getRng(!0);c.setStart(a,b);c.setEnd(a,b);d.selection.setRng(c)},storeCurrentSelectionState:b.Rte.BookmarkManager.storeBookmark,
restoreSelectionState:b.Rte.BookmarkManager.restoreBookmark,insertLink:function(a,f){f&&b.Rte.getEditor().selection.select(f);g.Editor.LinkAdapter.setLink(a)},getCurrentBaseUrl:b.Rte.getCurrentBaseUrl,addOnInitCallback:function(a){b.debug("Adding callback to AJS.Rte.BootstrapManager. AJS.Rte.BootstrapManager = "+b.Rte.BootstrapManager);b.Rte.BootstrapManager.addOnInitCallback(a)},bindScroll:function(a,f){b.Rte.bindScroll(a,f)},unbindScroll:function(a){b.Rte.unbindScroll(a)},getTinyMceHasInit:function(){return b.Rte.BootstrapManager.isInitComplete()},
getEditor:b.Rte.getEditor,addTinyMcePluginInit:function(a){b.Rte.BootstrapManager.addTinyMcePluginInit(a)},isExternalLink:function(a){return g.Link.isExternalLink(a)},isInMacroPlaceholder:function(a){return e.confluence.MacroUtils.isInMacro(a)},initialiseTinyMce:function(){var a=b.Editor.Adapter;e.EditorManager.preInit.apply(e.EditorManager);e.EditorManager.init(a.settings)},offset:function(a){b.Rte.Content.offset(a)},getSelectedText:function(){return b.Rte.Content.getSelectedText()},setEditorValue:function(a){b.Rte.Content.setHtml(a)},
editorHasContentChanged:function(){return b.Rte.getEditor().isDirty()},editorResetContentChanged:function(){b.Rte.getEditor().setDirty(!1)},getChildIndex:function(a,b){for(var c=a.childNodes,d=0,e=c.length;d<e;d++)if(c[d]==b)return d;return-1},getEditorContainer:function(){return b.Rte.getEditorContainer()},getEditorFrame:function(){return b.Rte.getEditorFrame()},webResourcePath:b.Rte.webResourcePath,getResourceUrlPrefix:function(){return b.Rte.getResourceUrlPrefix()},getTinyMceBaseUrl:function(){return b.Rte.getTinyMceBaseUrl()},
getMinEditorHeight:function(){return b.Rte.getMinEditorHeight()},getTinyMceEditorMinHeight:function(a){return b.Rte.getTinyMceEditorMinHeight(a)}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymceplugin/tinymce-adapter-deprecated","AJS.Editor.Adapter");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jiraAnalytics', location = '/jira/jiraanalytics.js' */
AJS.Editor.JiraAnalytics={events:{paste:{key:"confluence.jira.plugin.paste"},search:{key:"confluence.jira.plugin.search"},trigger:{key:"confluence.jira.plugin.trigger"},customizeColumn:{key:"confluence.jira.plugin.column.customize"}},linkTypes:{jqlDirect:"direct_jql",jql:"jql_link",xml:"xml_link",rss:"rss_link",filter:"filter_link"},getDisplayType:function(b){var a="single";b.container.find("#opt-table").is(":checked")?a="table":b.container.find("#opt-total").is(":checked")&&(a="count");return a},
setupAnalyticPanelActionObject:function(b,a,d){return{name:b.analyticPanelActionName,properties:this.setupPanelActionProperties(b,a,d)}},setupPanelActionProperties:function(b,a,d){var c={};a===AJS.Editor.JiraConnector.source.instructionalText&&("confluence.jira.plugin.issuecreated"===b.analyticPanelActionName?c.issueType=b.container.find('select[name\x3d"issuetype"] :selected').text():"confluence.jira.plugin.searchadded"===b.analyticPanelActionName&&(c.display=this.getDisplayType(b)),c.label=d);return c},
triggerPasteEvent:function(b){AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:AJS.Editor.JiraAnalytics.events.paste.key,properties:b})},triggerPannelActionEvent:function(b){AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push(b)},triggerSearchEvent:function(b){AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:AJS.Editor.JiraAnalytics.events.search.key,properties:b})},triggerMarkupEvent:function(b){this.triggerSearchEvent(b)},triggerPannelTriggerEvent:function(b){AJS.EventQueue=
AJS.EventQueue||[];AJS.EventQueue.push({name:AJS.Editor.JiraAnalytics.events.trigger.key,properties:b})},triggerCustomizeColumnEvent:function(b){AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:AJS.Editor.JiraAnalytics.events.customizeColumn.key,properties:b})}};
(function(b){b.aop.before({target:AJS.MacroBrowser,method:"loadMacroInBrowser"},function(a,d){a&&a[0]&&"confluence.extra.jira"==a[0].pluginKey&&AJS.Editor.JiraAnalytics.triggerPannelTriggerEvent({source:AJS.Editor.JiraConnector.source.macroBrowser})});b.aop.before({target:tinymce.confluence.macrobrowser,method:"macroBrowserToolbarButtonClicked"},function(a,d){a&&a[0]&&a[0].presetMacroMetadata&&"confluence.extra.jira"==a[0].presetMacroMetadata.pluginKey&&AJS.Editor.JiraAnalytics.triggerPannelTriggerEvent({source:AJS.Editor.JiraConnector.source.editorBraceKey})});
AJS.bind("init.rte",function(){b.aop.before({target:tinyMCE.activeEditor,method:"execCommand"},function(a,d){if(a&&"mceInsertContent"==a[0]&&a[2]&&(d=[Node.ELEMENT_NODE],a=b.parseHTML(a[2]),a.length)){var c=a[0];if(d.includes(c.nodeType)&&(d=c.getAttribute("data-macro-name"),["jira","jiraissues"].includes(d)&&(d=AJS.Editor.JiraAnalytics,a={source:"wiki_markup"},c.getAttribute("data-macro-parameters")))){c=c.getAttribute("data-macro-parameters").split("|");for(var f=0;f<c.length;f++){var e=b.trim(c[f]);
if(0==e.indexOf("jql")||0==e.indexOf("jqlQuery")){a.type=d.linkTypes.jqlDirect;break}else if(0==e.indexOf("url")){c=b.trim(e.substring(e.indexOf("\x3d")+1,e.length));a.type=AJS.JQLHelper.checkQueryType(c);break}else if(0==e.indexOf("http")){c=e;a.type=AJS.JQLHelper.checkQueryType(c);break}}"undefined"===typeof a.type&&(a.type=d.linkTypes.jqlDirect);d.triggerMarkupEvent(a)}}})})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-frontend:split_jquery-selection-plugin', location = 'jquery-selection-plugin.js' */
(window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73=window.atlassianWebpackJsonpe19a4f58490c3d96a3072d1e47cd0e73||[]).push([[13],{150:function(t,e,n){"use strict";n.r(e);var s=n(6),i=n.n(s),r=n(17);!function(t,e){if(e.selection){var n=function(t){return t.replace(/\u000D/g,"")};t.fn.selection=function(t){var n=this[0];if(this.focus(),!n)return!1;if(null==t)return e.selection.createRange().text;var s=n.scrollTop,i=e.selection.createRange();i.text=t,i.select(),n.focus(),n.scrollTop=s},t.fn.selectionRange=function(t,s){var i=this[0];this.focus();var r=e.selection.createRange();if(null==t){var a=this.val(),o=a.length,c=r.duplicate();c.moveToElementText(i),c.setEndPoint("StartToEnd",r);var l=o-n(c.text).length;c.setEndPoint("StartToStart",r);var u=o-n(c.text).length;return l!==u&&"\n"===a.charAt(l+1)&&(l+=1),{end:l,start:u,text:a.substring(u,l),textBefore:a.substring(0,u),textAfter:a.substring(l)}}r.moveToElementText(i),r.collapse(!0),r.moveStart("character",t),r.moveEnd("character",s-t),r.select()}}else t.fn.selection=function(t){var e=this[0];if(!e)return!1;if(null==t)return!!e.setSelectionRange&&e.value.substring(e.selectionStart,e.selectionEnd);var n=e.scrollTop;if(e.setSelectionRange){var s=e.selectionStart;e.value=e.value.substring(0,s)+t+e.value.substring(e.selectionEnd),e.selectionStart=s,e.selectionEnd=s+t.length}e.focus(),e.scrollTop=n},t.fn.selectionRange=function(t,e){if(null==t){var n={start:this[0].selectionStart,end:this[0].selectionEnd},s=this.val();return n.text=s.substring(n.start,n.end),n.textBefore=s.substring(0,n.start),n.textAfter=s.substring(n.end),n}this[0].selectionStart=t,this[0].selectionEnd=e};t.fn.wrapSelection=function(t,e){this.selection(t+this.selection()+(e||""))}}(i.a,r.document)}},[[150,0,1,5]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:dialogsJs', location = '/jira/datatable.js' */
(function(d){AJS.DataTable=function(a,b,c){c=null;a&&a.jquery?c=a:"string"==typeof a&&(c=d(a));c.addClass("data-table");if(b&&b.length){this.columns=b;a=d("\x3ctr\x3e\x3c/tr\x3e").appendTo(c);a.addClass("data-table-header");for(var e=0;e<b.length;e++){var f=b[e];a.append('\x3cth class\x3d"'+f.className+'"\x3e'+f.title+"\x3c/th\x3e")}}this.tbl=c;this.rowIdx=0};AJS.DataTable.prototype.addRow=function(a){for(var b=d("\x3ctr\x3e\x3c/tr\x3e").appendTo(this.tbl),c=this.columns,e=0;e<this.columns.length;e++){var f=
c[e],h=d("\x3ctd\x3e\x3c/td\x3e").appendTo(b);h.addClass(f.className);f.renderCell(h,a)}b.data("row-data",a);this._bindRowJs(b,this.rowIdx,"selected","hover");this.rowIdx+=1;b.attr("tabindex","-1")};AJS.DataTable.prototype.selectRow=function(a){a=d("tbody tr",this.tbl)[a+1];d(a).focus()};AJS.DataTable.prototype._bindRowJs=function(a,b,c,e){var f=this;a.click(function(g){c&&(d(f.tbl).find("."+c).removeClass(c),d(this).addClass(c));g=a.data("row-data");f.tbl.trigger("row-select",[g])});var h=function(g){switch(g.keyCode){case 13:var k,
l=a.data("row-data");a.keyup(k=function(m){f.tbl.trigger("row-action",[l]);a.unbind("keyup",k);m.stopPropagation();return!1});g.stopPropagation();return!1;case 38:return 0<b&&a.prev().focus(),g.stopPropagation(),!1;case 40:var n=d("tbody tr",f.tbl).length;b<n-1&&a.next().focus();g.stopPropagation();return!1}};d.browser.mozilla?a.keypress(h):a.keydown(h);a.focus(function(g){a.click()});e&&a.hover(function(){d(this).addClass(e)},function(){d(this).removeClass(e)})}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:dialogsJs', location = '/jira/dialogs.js' */
(function(){tinymce.PluginManager.add("jiraconnector",function(){return{init:function(e){e.addCommand("mceJiralink",AJS.Editor.JiraConnector.hotKey);e.on("PostRender",function(){AJS.$.ajax({url:Confluence.getContextPath()+"/rest/jiraanywhere/1.0/servers",async:!1,success:function(k){AJS.Editor.JiraConnector.servers=k}});AJS.$("#jiralink").click(function(k){AJS.Editor.JiraConnector.open(AJS.Editor.JiraConnector.source.editorDropdownLink,!0);k.stopPropagation();return!1});AJS.$("#insert-menu .macro-jiralink").show();
e.addShortcut("ctrl+shift+j","","mceJiralink")})},getInfo:function(){return{longname:"Confluence Jira Connector",author:"Atlassian",authorurl:"http://www.atlassian.com",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}})})();AJS.Editor.Adapter.addTinyMcePluginInit(function(e){e.plugins+=",jiraconnector";var k=e.theme_advanced_buttons1,p=k.indexOf("confimage");e.theme_advanced_buttons1=k.substring(0,p)+"jiralinkButton,"+k.substring(p)});
AJS.Editor.JiraConnector=function(e){var k=require("confluence/form-state-control"),p="Insert Jira Issue/Filter",v="Insert",w="Cancel",q=AJS.format("Hint: type \u0022{0}+Shift+J\u0022 in the editor to quickly access this dialog.",-1!=navigator.platform.toLowerCase().indexOf("mac")?"Cmd":"Ctrl"),l,m,f,x=function(){var a=e("#createPageLabelsString");0<a.length?(m=a.val().split(" ").join(),AJS.Editor.JiraAnalytics.triggerPannelTriggerEvent({source:l,
label:m})):e.getJSON(AJS.Meta.get("base-url")+"/rest/ui/1.0/content/"+AJS.Meta.get("page-id")+"/labels",function(c){var b=[];e.each(c.labels,function(h,n){b.push(n.name)});m=b.join();AJS.Editor.JiraAnalytics.triggerPannelTriggerEvent({source:l,label:m})})},t=function(a){if(!f){f=new AJS.ConfluenceDialog({width:840,height:590,id:"jira-connector"});f.addHeader(p);for(var c=AJS.Editor.JiraConnector.Panels,b=0;b<c.length;b++){f.addPanel(c[b].title());var h=f.getCurrentPanel();c[b].init(h)}f.addLink("Select Macro",
function(){f.hide();AJS.MacroBrowser.open(!1)},"dialog-back-link");f.addHelpText(q);e("#jira-connector .dialog-tip").attr("title",q);f.addButton(v,function(){var g=f.getCurrentPanel().id;g=c[g];var r=c[0];AJS.Editor.JiraAnalytics&&(AJS.Editor.JiraConnector.analyticPanelActionObject=AJS.Editor.JiraAnalytics.setupAnalyticPanelActionObject(g,l,m),r.customizedColumn&&AJS.Editor.JiraAnalytics.triggerCustomizeColumnEvent({columns:r.customizedColumn}));g.insertLink()},"insert-issue-button");k.disableElement(AJS.$(".insert-issue-button"));
f.addCancel(w,function(){AJS.Editor.JiraConnector.closePopup()});f.gotoPanel(0);if(AJS.Editor.JiraConnector.servers)for(b=0;b<AJS.Editor.JiraConnector.servers.length;b++){var n=AJS.Editor.JiraConnector.servers[b];AppLinks.makeRequest({appId:n.id,type:"GET",url:"/rest/api/2/field",dataType:"json",serverIndex:b,success:function(g){g&&g.length&&(AJS.Editor.JiraConnector.servers[this.serverIndex].columns=g)},error:function(){AJS.log("Jira Issues Macro: unable to retrieve fields from AppLink: "+n.id)}})}e("#jira-connector ul.dialog-page-menu").append(Confluence.Templates.ConfluenceJiraPlugin.addCrossMacroLink({id:"open-jira-chart-dialog",
label:"Jira Charts"}));e("#jira-connector .dialog-page-menu button").click(function(){var g=AJS.Editor.JiraConnector.Panels[f.getCurrentPanel().id];g.setInsertButtonState&&g.setInsertButtonState();g.focusForm&&g.focusForm()});e("#open-jira-chart-dialog").click(function(){AJS.Editor.JiraConnector.closePopup();AJS.Editor.JiraChart&&AJS.Editor.JiraChart.open()})}AJS.Editor.JiraConnector.Panels[0].refreshSearchForm();if(a){f.gotoPanel(1);var d=AJS.Editor.JiraConnector.Panels[1];
d.setSummary(a);setTimeout(function(){d.focusForm&&d.focusForm()},0)}else f.gotoPanel(0);f.overrideLastTab();f.show()},u=function(){AJS.Editor.JiraConnector.clickConfigApplink&&AJS.$.ajax({url:Confluence.getContextPath()+"/rest/jiraanywhere/1.0/servers",async:!1,success:function(a){AJS.Editor.JiraConnector.servers=a}});if("undefined"===typeof AJS.Editor.JiraConnector.servers||0===AJS.Editor.JiraConnector.servers.length)return AJS.Editor.JiraConnector.warningPopup(AJS.Meta.get("is-admin")),!1;AJS.Editor.JiraConnector.clickConfigApplink=
!1;AJS.Editor.JiraConnector.refreshAppLink&&(AJS.Editor.JiraConnector.refreshAppLink.call(),AJS.Editor.JiraConnector.refreshAppLink=!1);return!0};return{warningPopup:function(a){var c=new AJS.ConfluenceDialog({width:600,height:400,id:"warning-applink-dialog"}),b="Connect Confluence To Jira";c.addHeader(b);b=Confluence.Templates.ConfluenceJiraPlugin.warningDialog({isAdministrator:a});c.addPanel("Panel 1",b);c.get("panel:0").setPadding(0);a?(c.addButton("Set connection",
function(h){AJS.Editor.JiraConnector.clickConfigApplink=!0;h.hide();tinymce.confluence.macrobrowser.macroBrowserCancel();window.open(Confluence.getContextPath()+"/admin/listapplicationlinks.action").opener=null},"create-dialog-create-button app_link"),c.popup.element.find(".create-dialog-create-button").removeClass("button-panel-button").addClass("aui-button aui-button-primary")):c.addButton("Contact admin",function(h){h.hide();tinymce.confluence.macrobrowser.macroBrowserCancel();
window.open(Confluence.getContextPath()+"/wiki/contactadministrators.action").opener=null});c.addLink("Cancel",function(h){h.hide();tinymce.confluence.macrobrowser.macroBrowserCancel()});c.show();c.gotoPanel(0)},closePopup:function(){f.hide();tinymce.confluence.macrobrowser.macroBrowserCancel()},open:function(a,c){if(u()){AJS.Editor.Adapter.storeCurrentSelectionState();l=a;AJS.Editor.JiraAnalytics&&l&&(l===AJS.Editor.JiraConnector.source.instructionalText?
x():(m=null,AJS.Editor.JiraAnalytics.triggerPannelTriggerEvent({source:l})));a=tinymce.confluence.macrobrowser;var b=a.getCurrentNode();a.isMacroTag(b)&&"jira"==e(b).attr("data-macro-name")?a.editMacro(b):AJS.Editor.JiraConnector.openCleanDialog(c)}},openCleanDialog:function(a){a=a&&tinyMCE.activeEditor.selection&&tinyMCE.activeEditor.selection.getContent({format:"text"});t(a);AJS.Editor.JiraConnector.Panels[0].setMacroParams(null)},edit:function(a){if(u())if("undefined"==typeof a.params)AJS.Editor.JiraConnector.openCleanDialog(!1);
else{m=l="";var c={};if(a.params.url)c.searchStr=a.params.url;else{c.maximumIssues=a.params.maximumIssues;var b;if(!(b=a.defaultParameterValue))b:if(b=a.params,b.hasOwnProperty("jqlQuery"))b=b.jqlQuery;else{var h=/^([0-9]\d*)$/,n="count columns columnIds title renderMode cache width height server serverId anonymous baseurl showSummary".split(" ");for(d in b)if(-1==e.inArray(d,n)&&b.hasOwnProperty(d)){b=h.test(d)?b[d]:d+(" \x3d "+b[d]);break b}b=""}var d=b;c.searchStr="undefined"==typeof d?"":d;if("undefined"!=
typeof a.params.server)c.serverName=a.params.server;else for(d=0;d<AJS.Editor.JiraConnector.servers.length;d++)if(AJS.Editor.JiraConnector.servers[d].selected){c.serverName=AJS.Editor.JiraConnector.servers[d].name;break}c.columnIds=a.params.columnIds}d=a.params.count;"undefined"===typeof d&&(d="false");c.count=d;d=a.params.columns;"undefined"!=typeof d&&d.length&&(c.columns=d);a&&!AJS.Editor.inRichTextMode()&&e("#markupTextarea").selectionRange(a.startIndex,a.startIndex+a.markup.length);t();c.searchStr&&
(f.gotoPanel(0),d=AJS.Editor.JiraConnector.Panels[0],d.setMacroParams(c),a={searchValue:c.searchStr,serverName:c.serverName,isJqlQuery:a.params.hasOwnProperty("jqlQuery"),isAutoSearch:!0},d.doSearch(a))}},source:{macroBrowser:"macro_browser",editorBraceKey:"editor_brace_key",editorHotKey:"editor_hot_key",editorDropdownLink:"editor_dropdown_link",instructionalText:"instructional text"}}}(AJS.$);AJS.MacroBrowser.setMacroJsOverride("jira",{opener:AJS.Editor.JiraConnector.edit});
AJS.MacroBrowser.setMacroJsOverride("jiraissues",{opener:AJS.Editor.JiraConnector.edit});AJS.Editor.JiraConnector.Panels=[];AJS.Editor.JiraConnector.clickConfigApplink=!1;AJS.Editor.JiraConnector.hotKey=function(){AJS.Editor.JiraConnector.open(AJS.Editor.JiraConnector.source.editorHotKey,!0)};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:dialogsJs', location = '/jira/panelhelper.js' */
(function(AJS){var FormStateControl=require("confluence/form-state-control");AJS.Editor.JiraConnector.Panel=function(){};AJS.Editor.JiraConnector.Panel.prototype={SHOW_MESSAGE_ON_TOP:false,insertIssueLink:function(key){this.insertIssueLinkWithParams({"key":key})},insertJqlLink:function(jql){this.insertIssueLinkWithParams({"jqlQuery":jql})},insertIssueLinkWithParams:function(params){var insertMacroAtSelectionFromMarkup=function(macro){tinymce.confluence.macrobrowser.macroBrowserComplete(macro)};params["server"]=
this.selectedServer.name;params["serverId"]=this.selectedServer.id;if(AJS.Editor.inRichTextMode())insertMacroAtSelectionFromMarkup({name:"jira","params":params});else{var markup="{jira:";for(var key in params)markup=markup+key+"\x3d"+params[key]+"|";if(markup.charAt(markup.length-1)=="|")markup=markup.substr(0,markup.length-1);var textArea=AJS.$("#markupTextarea");var selection=textArea.selectionRange();textArea.selectionRange(selection.start,selection.end);textArea.selection(markup);selection=textArea.selectionRange();
textArea.selectionRange(selection.end,selection.end)}if(AJS.Editor.JiraAnalytics&&AJS.Editor.JiraConnector.analyticPanelActionObject){AJS.Editor.JiraAnalytics.triggerPannelActionEvent(AJS.Editor.JiraConnector.analyticPanelActionObject);AJS.Editor.JiraConnector.analyticPanelActionObject=null}AJS.Editor.JiraConnector.closePopup()},disableInsert:function(){FormStateControl.disableElement(AJS.$(".insert-issue-button"))},isInsertDisabled:function(){return AJS.$(".insert-issue-button").is(":disabled")},
getOAuthRealm:function(xhr){var authHeader=xhr.getResponseHeader("WWW-Authenticate")||"";var realmRegEx=/OAuth realm="([^"]+)"/;var matches=realmRegEx.exec(authHeader);if(matches)return matches[1];else return null},enableInsert:function(){FormStateControl.enableElement(AJS.$(".insert-issue-button"))},handleInsertWaiting:function(isWaiting){var $insertButton=AJS.$(".insert-issue-button");return isWaiting?$insertButton.before(aui.icons.icon({icon:"wait"})):$insertButton.prev(".aui-icon.aui-icon-wait").remove()},
msg:function(container,messageObject,messageType){if(aui&&aui.message)try{var auiMessageContainer=AJS.$('\x3cdiv class\x3d"aui-message-container"/\x3e');var message=messageObject;if(messageObject.html)message=messageObject.html();var templateParameters={"content":message};var formattedMessage;switch(messageType){case "error":formattedMessage=aui.message.error(templateParameters);break;case "success":formattedMessage=aui.message.success(templateParameters);break;case "warning":formattedMessage=aui.message.warning(templateParameters);
break;default:formattedMessage=aui.message.info(templateParameters)}auiMessageContainer.append(formattedMessage);messageObject=auiMessageContainer}catch(e){if(AJS&&AJS.logError)AJS.logError("jira-connector",e)}container.append(messageObject)},errorMsg:function(container,messageObject){this.removeError(container);var errorBlock=this.SHOW_MESSAGE_ON_TOP?AJS.$('\x3cdiv class\x3d"jira-error"\x3e\x3c/div\x3e').prependTo(container):AJS.$('\x3cdiv class\x3d"jira-error"\x3e\x3c/div\x3e').appendTo(container);
this.msg(errorBlock,messageObject,"error")},warningMsg:function(container,messageObject){this.removeError(container);var warningBlock=this.SHOW_MESSAGE_ON_TOP?AJS.$('\x3cdiv class\x3d"jira-error"\x3e\x3c/div\x3e').prependTo(container):AJS.$('\x3cdiv class\x3d"jira-error"\x3e\x3c/div\x3e').appendTo(container);this.msg(warningBlock,messageObject,"warning")},noServerMsg:function(container,messageObject){var dataContainer=AJS.$('\x3cdiv class\x3d"data-table jiraSearchResults" \x3e\x3c/div\x3e').appendTo(container);
var messagePanel=this.SHOW_MESSAGE_ON_TOP?AJS.$('\x3cdiv class\x3d"message-panel"/\x3e').prependTo(dataContainer):AJS.$('\x3cdiv class\x3d"message-panel"/\x3e').appendTo(dataContainer);this.msg(messagePanel,messageObject,"info")},ajaxError:function(xhr,onOauthFail){if(xhr.status==401){var authUrl=this.getOAuthRealm(xhr);this.selectedServer.authUrl=authUrl;onOauthFail.call(this)}else this.errorMsg(this.container,"Received the following HTTP error code from the server"+": "+xhr.status)},removeError:function(container){AJS.$("div.jira-error",
container).remove()},setActionOnEnter:function(input,f,source){input.unbind("keydown").keydown(function(e){if(e.which==13){var keyup=function(e){input.unbind("keyup",keyup);f(source);e.stopPropagation();return false};input.keyup(keyup);e.stopPropagation();return false}})},createOauthForm:function(success){var server=this.selectedServer;var oauthCallbacks={onSuccess:function(){server.authUrl=null;success(server)},onFailure:function(){}};var oauthMessage='\x3ca class\x3d"oauth-init" href\x3d"javascript:void(0)"\x3e'+
"Login & Approve"+"\x3c/a\x3e "+"to retrieve data from"+" "+AJS.escapeHtml(this.selectedServer.name);var oauthForm=AJS.$('\x3cdiv class\x3d"jira-oauth-message-marker"/\x3e');if(!(aui&&aui.message))oauthForm.addClass("oauth-message");this.msg(oauthForm,oauthMessage,"info");AJS.$(".oauth-init",oauthForm).click(function(e){AppLinks.authenticateRemoteCredentials(server.authUrl,oauthCallbacks.onSuccess,oauthCallbacks.onFailure);e.preventDefault()});
return oauthForm},applinkServerSelect:function(container,onchange){var servers=AJS.Editor.JiraConnector.servers;AJS.$(servers).each(function(){var option="\x3coption ";if(this.selected){selectedServer=this;option+='selected\x3d"selected"'}option+='value\x3d"'+this.id+'"\x3e\x3c/option\x3e';option=AJS.$(option);option.text(this.name);AJS.$(container).append(option);option.data("jiraapplink",this)});AJS.$(container).change(function(e){var option=AJS.$("option:selected",container);var server=option.data("jiraapplink");
onchange(server)})},showSpinner:function(element,radius,centerWidth,centerHeight){AJS.$.data(element,"spinner",Raphael.spinner(element,radius,"#666"));if(centerWidth)AJS.$(element).css("marginLeft",-radius*1.2);if(centerHeight)AJS.$(element).css("marginTop",-radius*1.2)},hideSpinner:function(element){AJS.$(element).css("marginTop","");AJS.$(element).css("marginLeft","");var spinner=AJS.$.data(element,"spinner");if(spinner){spinner();delete spinner;AJS.$.data(element,"spinner",null)}},setSelectedIssue:function(issue){this.selectedIssue=
issue;this.enableInsert()},insertSelected:function(){if(this.selectedIssue)this.insertIssueLink(this.selectedIssue.key)},createIssueTableFromUrl:function(container,appId,url,selectHandler,enterHandler,noRowsHandler,onSuccess,onError,isShowCheckBox){AJS.$("div.data-table",container).remove();var dataContainer=AJS.$('\x3cdiv class\x3d"data-table jiraSearchResults" \x3e\x3c/div\x3e').appendTo(container);var spinnyContainer=AJS.$('\x3cdiv class\x3d"loading-data"\x3e\x3c/div\x3e').appendTo(dataContainer);
this.removeError(container);this.showSpinner(spinnyContainer[0],50,true,true);var thiz=this;this.currentXhr=AppLinks.makeRequest({appId:appId,type:"GET",url:url,dataType:"xml",success:function(data){spinnyContainer.remove();var issues=AJS.$("item",data);FormStateControl.enableElement(AJS.$(":disabled",container));if(issues.length){var table=AJS.$('\x3ctable class\x3d"my-result aui"\x3e\x3c/table\x3e');AJS.$(".jiraSearchResults",container).append(table);var columns=[];if(isShowCheckBox){var checkBoxColumn=
{className:"issue-checkbox-column",title:'\x3cinput type\x3d"checkbox" name\x3d"jira-issue-all" checked/\x3e',renderCell:function(td,issue){var issueCheckbox=Confluence.Templates.ConfluenceJiraPlugin.issueCheckbox({"issueKey":issue.key});AJS.$(issueCheckbox).appendTo(td)}};columns.push(checkBoxColumn)}var defaultColumns=[{className:"issue-key-column",title:"Key",renderCell:function(td,issue){var {rpcUrl,displayUrl}=thiz.selectedServer;var rebasedUrl=issue.iconUrl.replace(rpcUrl,
displayUrl);var issueKey=Confluence.Templates.ConfluenceJiraPlugin.issueKey({"issueIconUrl":rebasedUrl,"issueKey":issue.key});AJS.$(issueKey).appendTo(td)}},{className:"issue-summary-column",title:"Summary",renderCell:function(td,issue){td.text(issue.summary)}}];columns=columns.concat(defaultColumns);var dataTable=new AJS.DataTable(table,columns);AJS.$(issues).each(function(){var issue={iconUrl:AJS.$("type",this).attr("iconUrl"),key:AJS.$("key",this).text(),summary:AJS.$("summary",
this).text(),url:AJS.$("link",this).text()};dataTable.addRow(issue)});table.bind("row-action",function(e,data){enterHandler.call(thiz,data)});table.bind("row-select",function(e,data){selectHandler.call(thiz,data)});dataTable.selectRow(0);if(onSuccess){var totalIssues=AJS.$("issue",data).attr("total");onSuccess.call(thiz,totalIssues)}}else{if(noRowsHandler)noRowsHandler();var message="No search results found.";var messagePanel=AJS.$('\x3cdiv class\x3d"message-panel"/\x3e');
thiz.msg(messagePanel,message,"info");AJS.$(".jiraSearchResults",container).append(messagePanel)}},error:function(xhr){FormStateControl.enableElement(AJS.$(":disabled",container));spinnyContainer.remove();onError.call(thiz,xhr)}})},retrieveJson:function(appId,url,onSuccess,onError){AppLinks.makeRequest({appId:appId,type:"GET",url:url,dataType:"json",success:onSuccess,error:onError})}}})(AJS);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:dialogsJs', location = '/jira/searchpanel.js' */
AJS.Editor.JiraConnector.Panel.Search=function(){this.jql_operators=/=|!=|~|>|<|!~| is | in /i};AJS.Editor.JiraConnector.Select2=AJS.Editor.JiraConnector.Select2||{};AJS.Editor.JiraConnector.Panel.Search.prototype=AJS.$.extend(AJS.Editor.JiraConnector.Panel.Search.prototype,AJS.Editor.JiraConnector.Panel.prototype);
AJS.Editor.JiraConnector.Panel.Search.prototype=AJS.$.extend(AJS.Editor.JiraConnector.Panel.Search.prototype,{defaultColumns:"key,summary,type,created,updated,due,assignee,reporter,priority,status,resolution",defaultColumnIds:"issuekey,summary,issuetype,created,updated,duedate,assignee,reporter,priority,status,resolution",aliases:[{id:"issuekey",clauseName:"key"},{id:"issuetype",clauseName:"type"},{id:"duedate",clauseName:"due"}],DEFAULT_MAX_ISSUES_VAL:20,MAXIMUM_MAX_ISSUES_VAL:1E3,MINIMUM_MAX_ISSUES_VAL:1,
title:function(){return "Search"},init:function(a){var c=require("confluence/form-state-control");a.html('\x3cdiv id\x3d"my-jira-search"\x3e\x3c/div\x3e');var b=this,d=AJS.$("#my-jira-search");this.container=d;var f=function(){d.children(":not(div.jira-search-form)").remove()},p=function(){c.enableElement(AJS.$("input.text,button",d))},n=function(){c.disableElement(AJS.$("input.text,button",d))},l=function(e){f();b.disableInsert();e&&(b.selectedServer=e);b.selectedServer.authUrl?
(n(),e=b.createOauthForm(function(){f();p()}),d.append(e)):(p(),AJS.$(".search-help").show())};this.authCheck=l;this.doSearch=function(e){var m=e&&e.searchValue,g=e&&e.serverName;m&&AJS.$("input:text",d).val(m);if(g&&g!=this.selectedServer.name){for(var q=AJS.Editor.JiraConnector.servers,t=!1,r=0;r<q.length;r++)if(q[r].name==g){AJS.$('option[value\x3d"'+q[r].id+'"]',d).attr("selected","selected");AJS.$("select",d).change();t=!0;break}if(!t){k(AJS.Meta.get("is-admin"));return}}this.currentXhr&&4!=
this.currentXhr.readyState||(g=m||AJS.$("input",d).val(),AJS.Editor.JiraAnalytics&&(m=AJS.JQLHelper.checkQueryType(g))&&AJS.Editor.JiraAnalytics.triggerSearchEvent({type:m,source:"dialog"}),m=function(w,v,x){v=d.find("#jiraIssueColumnSelector");var y=v.val()&&v.val();c.disableElement(AJS.$("select",d));n();b.lastSearch=w;b.createIssueTableFromUrl(d,b.selectedServer.id,"/sr/jira.issueviews:searchrequest-xml/temp/SearchRequest.xml?jqlQuery\x3d"+encodeURIComponent(w)+"\x26returnMax\x3dtrue\x26tempMax\x3d20\x26field\x3dsummary\x26field\x3dtype\x26field\x3dlink",
b.selectHandler,b.insertLinkFromForm,function(){b.addDisplayOptionPanel();b.loadMacroParams(y);b.bindEventToDisplayOptionPanel(!0,e);b.enableInsert()},function(u){b.addDisplayOptionPanel();b.loadMacroParams(y);b.bindEventToDisplayOptionPanel(!1,e);b.updateTotalIssuesDisplay(u);b.checkAutoSelectColumns();e&&e.isAutoSearch&&b.focusForm()},function(u){b.disableInsert();400==u.status?x?x():(AJS.$("div.data-table",d).remove(),b.warningMsg(d,AJS.format("The Jira server didn\u0027\u0027t understand your search query. If you entered JQL, please ensure that it\u0027\u0027s correctly formed. If you entered an issue key, ensure that it exists and you have permission to view it. {0}",Confluence.Templates.ConfluenceJiraPlugin.learnMore()))):
(AJS.$("div.data-table",d).remove(),b.ajaxError(u,l));e&&e.isAutoSearch&&b.focusForm()},!0)},AJS.JQLHelper.isFilterUrl(g)?(g=decodeURIComponent(g),q=AJS.JQLHelper.findServerIndexFromUrl(g,AJS.Editor.JiraConnector.servers),-1!=q?(AJS.$('option[value\x3d"'+AJS.Editor.JiraConnector.servers[q].id+'"]',d).attr("selected","selected"),AJS.$("select",d).change(),(g=AJS.JQLHelper.getFilterFromFilterUrl(g))?(AJS.$("input",d).val(g),m(g)):(f(),b.warningMsg(d,AJS.format("The Jira server didn\u0027\u0027t understand your search query. If you entered JQL, please ensure that it\u0027\u0027s correctly formed. If you entered an issue key, ensure that it exists and you have permission to view it. {0}",
Confluence.Templates.ConfluenceJiraPlugin.learnMore())))):(f(),b.disableInsert(),k(AJS.Meta.get("is-admin")))):AJS.JQLHelper.isIssueUrlOrXmlUrl(g)?(g=decodeURIComponent(g),g=AJS.JQLHelper.getJqlAndServerIndexFromUrl(g,AJS.Editor.JiraConnector.servers),h(g)&&(AJS.$("input",d).val(g.jqlQuery),m(g.jqlQuery,!1,null))):g.match(b.jql_operators)?m(g,!1,null):AJS.JQLHelper.isSingleKeyJQLExp(g)?m("key \x3d "+g,!0):AJS.JQLHelper.isMultipleSingleKeyJQLExp(g)?m("key in ("+g+")",!0):m('summary ~ "'+g+'" OR description ~ "'+
g+'"',!1,null))};b.addSearchForm();var h=function(e){if(-1!=e.serverIndex)if(AJS.$('option[value\x3d"'+AJS.Editor.JiraConnector.servers[e.serverIndex].id+'"]',d).attr("selected","selected"),AJS.$("select",d).change(),0==e.jqlQuery.length)f(),b.errorMsg(d,"The Jira server didn\u0027t understand your search query. If you entered JQL, please ensure that it\u0027s correctly formed. If you entered an issue key, ensure that it exists and you have permission to view it. {0}");else var m=e.jqlQuery;else f(),b.disableInsert(),k(AJS.Meta.get("is-admin"));return m};b.processJiraParams=h;var k=function(e){e=Confluence.Templates.ConfluenceJiraPlugin.showMessageNoServer({isAdministrator:e,
contextPath:Confluence.getContextPath()});b.noServerMsg(d,e);AJS.$("#open_applinks").bind("click",function(){AJS.Editor.JiraConnector.clickConfigApplink=!0;AJS.Editor.JiraConnector.refreshAppLink=function(){b.refreshSearchForm()}})};b.bindPasteEvent();AJS.$(a).select(function(){b.validate()});$(document).tooltip({live:".jql-display-opts-open.disabled",title:function(){return AJS.$(".jql-display-opts-open.disabled").data("title")},gravity:"s",delayIn:300,delayOut:0})},focusForm:function(){AJS.$('input[name\x3d"jiraSearch"]',
this.container).focus()},addSearchForm:function(){var a=this;a.container.empty();var c=AJS.Editor.JiraConnector.servers;a.selectedServer=c[0];var b=!1;1<c.length&&(b=!0);b=Confluence.Templates.ConfluenceJiraPlugin.searchForm({isMultiServer:b});b=AJS.$(b).appendTo(a.container);1<c.length&&(c=AJS.$('\x3cselect class\x3d"select" tabindex\x3d"0"\x3e\x3c/select\x3e').insertAfter("div.search-input",b),a.applinkServerSelect(c,a.authCheck));a.authCheck(a.selectedServer);AJS.$("button",a.container).click(function(){a.doSearch()});
a.setActionOnEnter(AJS.$("input.text",a.container),a.doSearch)},bindPasteEvent:function(){var a=this;AJS.$("#my-jira-search input:text").bind("paste",function(){var c=this;setTimeout(function(){var b=AJS.$(c).val();AJS.JQLHelper.isFilterUrl(b)?a.doSearch():AJS.JQLHelper.isIssueUrlOrXmlUrl(b)&&(b=decodeURIComponent(b),b=AJS.JQLHelper.getJqlAndServerIndexFromUrl(b,AJS.Editor.JiraConnector.servers),a.processJiraParams(b)&&(AJS.$(c).val(b.jqlQuery),a.doSearch()))},100)})},refreshSearchForm:function(){this.container.empty();
this.addSearchForm();this.bindPasteEvent()},validate:function(a,c){var b=this.container,d=AJS.$("input:checkbox[name\x3djira-issue]",b),f=AJS.Editor.JiraConnector.Panel.Search.prototype;d.length||a?(b=AJS.$("input:checkbox[name\x3djira-issue]:checked",b).length,0<b||a?f.enableInsert():f.disableInsert(),f.changeInsertOptionStatus(b,a,c)):(AJS.$(".jira-oauth-message-marker",b).length&&f.authCheck(this.selectedServer),AJS.$("input",b).focus(),f.disableInsert());f.isInsertDisabled()||f.validateMaxIssues()},
isValidMaxIssues:function(a){return AJS.$.isNumeric(a)&&this.MINIMUM_MAX_ISSUES_VAL<=a&&a<=this.MAXIMUM_MAX_ISSUES_VAL},validateMaxIssues:function(a){function c(){b.next("#jira-max-number-error").remove()}var b=AJS.$("#jira-maximum-issues");switch(AJS.$("input:radio[name\x3dinsert-advanced]:checked").val()){case "insert-single":case "insert-count":c();b.attr("disabled","disabled");break;case "insert-table":var d=AJS.Editor.JiraConnector.Panel.Search.prototype;b.removeAttr("disabled");var f=b.val();
if(""===AJS.$.trim(f)){if(a&&"keyup"===a.type){c();break}if(a&&"blur"===a.type){f=d.MAXIMUM_MAX_ISSUES_VAL;b.val(f);break}}d.isValidMaxIssues(f)?(c(),d.enableInsert()):(c(),b.after(Confluence.Templates.ConfluenceJiraPlugin.warningValMaxiumIssues()),d.disableInsert())}},customizedColumn:null,checkAndSetDefaultValueMaximumIssues:function(a){if(a){var c=a.element||AJS.$("#jira-maximum-issues");a=a.defaultVal||this.MAXIMUM_MAX_ISSUES_VAL;""===AJS.$.trim(c.val())&&c.val(a)}else AJS.log("Cannot set default value for Maximum Issues")},
setMacroParams:function(a){this.macroParams=a},getMacroParamsFromUserInput:function(){var a=this,c="insert-count"==AJS.$("input:radio[name\x3dinsert-advanced]:checked").val(),b=[],d=[],f=[],p=[],n=[],l={};AJS.$("#my-jira-search .my-result.aui input:checkbox[name\x3djira-issue]").each(function(h){h=AJS.$(this);h.is(":checked")?d[d.length]=h.val():f[f.length]=h.val()});if(c)l.count="true";else{if(!AJS.Editor.JiraConnector.Panel.Search.jiraColumnSelectBox){l.columns=this.defaultColumns;l.columnIds=this.defaultColumnIds;
return}b=AJS.Editor.JiraConnector.Panel.Search.jiraColumnSelectBox.select2("data");b.length?(l.columns=b.map(function(h){return a.selectedServer.columns.find(function(k){return k.id===h.id}).custom?h.text.replace(/%/g,encodeURIComponent("%")).replace(/,/g,encodeURIComponent(",")).replace(/;/g,encodeURIComponent(";")):h.id}).map(function(h){var k=a.aliases.find(function(e){return e.id===h});return k?k.clauseName:h}).join(","),l.columnIds=b.map(function(h){return h.id}).join(","),(p=a.selectedServer.columns.find(function(h){return h.clauseNames.find(function(k){k=
k.toLowerCase();return"epic link"===k||"gh.epic.link.name"===k})}))&&!b.some(function(h){return h.id===p.id})&&(n=a.selectedServer.columns.filter(function(h){return h.clauseNames.find(function(k){k=k.toLowerCase();return"epic name"===k||"gh.epic.label.name"===k||"epic colour"===k||"gh.epic.color.name"===k||"epic status"===k||"gh.epic.status.name"===k})}),b.some(function(h){return n.some(function(k){return k.id===h.id})})&&(l.epicLinkId=p.id))):(l.columns=this.defaultColumns,l.columnIds=this.defaultColumnIds)}c=
AJS.$("input:radio[name\x3dinsert-advanced]:checked").val();"insert-single"===c?l.key=d.toString():l.jqlQuery=0==f.length?this.lastSearch+" ":1==d.length?"key \x3d "+d.toString():"key in ("+d.toString()+")";"insert-table"===c&&(l.maximumIssues=AJS.$("#jira-maximum-issues").val());return l},insertLinkFromForm:function(){var a=this.container;AJS.$("input:checkbox[name\x3djira-issue]",a).length&&0<AJS.$("input:checkbox[name\x3djira-issue]:checked",a).length&&this.insertLink()},insertLink:function(a){a=
a&&"function"===typeof a.insertIssueLinkWithParams?a:this;var c=a.getMacroParamsFromUserInput();a.insertIssueLinkWithParams(c);return!0},loadMacroParams:function(a){var c=this.macroParams;c?(c.maximumIssues||AJS.$("#jira-maximum-issues").attr("disabled","disabled"),"true"==c.count?AJS.$("#opt-total").prop("checked",!0):(AJS.$("#opt-table").prop("checked",!0),AJS.$("#jira-maximum-issues").removeAttr("disabled"),this.checkAndSetDefaultValueMaximumIssues({defaultVal:c.maximumIssues||this.DEFAULT_MAX_ISSUES_VAL}))):
this.checkAndSetDefaultValueMaximumIssues({defaultVal:20});this.prepareColumnSelect(a)},selectHandler:function(){var a=this.container.find("tr.selected");a.length&&a.unbind("keydown.space").bind("keydown.space",function(c){32!=c.which&&32!=c.keyCode||a.find("[type\x3dcheckbox]").trigger("click")})},addDisplayOptionPanel:function(){var a=Confluence.Templates.ConfluenceJiraPlugin.displayOptsOverlayHtml;AJS.$(".jiraSearchResults").after(a());AJS.$("#jiraMacroDlg").unbind("submit").on("submit",function(c){return!1})},
updateTotalIssuesDisplay:function(a){var c=this.selectedServer.url+"/issues/?jql\x3d"+this.lastSearch;20<a&&AJS.$(".my-result.aui").after(Confluence.Templates.ConfluenceJiraPlugin.viewAll({jiraIssuesLink:c}));a=AJS.format("{0} issues",a);AJS.$(".total-issues-text").html(a);AJS.$(".total-issues-link").attr("href",c)},prepareColumnSelect:function(a){var c=this,b=!(this.macroParams&&!this.macroParams.columnIds),d=a||this.macroParams&&this.macroParams.columnIds&&this.macroParams.columnIds.split(",")||
this.macroParams&&this.macroParams.columns&&this.macroParams.columns.toLowerCase().split(",")||this.defaultColumnIds.split(","),f=this.selectedServer,p=function(n){var l=AJS.$("#jiraIssueColumnSelector"),h="",k="";n.filter(function(e){return e.navigable}).sort(function(e,m){var g=d.map(function(q){var t=c.aliases.find(function(r){return r.clauseName===q});return t?t.id:q});return g.indexOf(b||!e.custom?e.id:e.name.toLowerCase())-g.indexOf(b||!m.custom?m.id:m.name.toLowerCase())}).forEach(function(e){d.find(function(m){return b?
m===e.id:e.clauseNames.includes(m)||m===e.name.toLowerCase()})?k+=AJS.template('\x3coption selected\x3d"true" value\x3d"{fieldId}"\x3e{fieldName}\x3c/option\x3e').fill({fieldId:e.id,fieldName:e.name}):h+=AJS.template('\x3coption value\x3d"{fieldId}"\x3e{fieldName}\x3c/option\x3e').fill({fieldId:e.id,fieldName:e.name})});l.hide();l.html(k+h);l.show();l.auiSelect2({width:"415px",containerCssClass:"select2-container-jira-issue-columns"});AJS.Editor.JiraConnector.Panel.Search.jiraColumnSelectBox=l};f.columns&&
0<f.columns.length?p(f.columns):this.retrieveJson(f.id,"/rest/api/2/field",function(n){n&&n.length&&(f.columns=n,p(f.columns))})},expandDisplayOptPanel:function(){var a=AJS.$(".jql-display-opts-overlay"),c=a.height();a.css("top","");a.css("bottom",-(c-40)+"px");a.animate({bottom:0},500)},minimizeDisplayOptPanel:function(){var a=AJS.$(".jql-display-opts-overlay");a.css("top",a.position().top+"px");a.css("bottom","");a.animate({top:414},500)},disableAutoSelectColumns:function(){AJS.Editor.JiraConnector.Panel.Search.jiraColumnSelectBox.auiSelect2("enable",
!1)},enableAutoSelectColumns:function(){AJS.Editor.JiraConnector.Panel.Search.jiraColumnSelectBox.auiSelect2("enable",!0)},checkAutoSelectColumns:function(){AJS.$("#opt-table").prop("checked")?this.enableAutoSelectColumns():(this.disableAutoSelectColumns(),this.enableInsert())},bindEventToDisplayOptionPanel:function(a,c){var b=this,d=AJS.$(".jql-display-opts-close, .jql-display-opts-open"),f=AJS.$(".jql-display-opts-overlay"),p=AJS.$(".jql-display-opts-inner .radio"),n=AJS.$("#my-jira-search input:checkbox[name\x3djira-issue-all]"),
l=AJS.$("#my-jira-search input:checkbox[name\x3djira-issue]");AJS.$("#jira-maximum-issues").on("blur keyup",AJS.Editor.JiraConnector.Panel.Search.prototype.validateMaxIssues);f.css("top","414px");d.click(function(h){h.preventDefault();AJS.$(this).hasClass("disabled")||(AJS.$(this).hasClass("jql-display-opts-open")?(b.expandDisplayOptPanel(),jQuery(this).addClass("jql-display-opts-close"),jQuery(this).removeClass("jql-display-opts-open")):(b.minimizeDisplayOptPanel(),jQuery(this).removeClass("jql-display-opts-close"),
jQuery(this).addClass("jql-display-opts-open")))});p.change(function(){b.checkAutoSelectColumns();b.validateMaxIssues()});n.bind("click",function(){AJS.$(this).prop("checked")?l.prop("checked","checked"):l.removeAttr("checked");b.validate()});l.change(function(){0<AJS.$("#my-jira-search input:checkbox[name\x3djira-issue]:not(:checked)").length?n.removeAttr("checked"):n.prop("checked","checked");b.validate()});b.validate(a,c)},changeInsertOptionStatus:function(a,c,b){var d=AJS.$("#opt-single"),f=AJS.$("#opt-total"),
p=AJS.$("#opt-table"),n=AJS.$("#my-jira-search input:checkbox[name\x3djira-issue]:checked");a="checked"===AJS.$("#my-jira-search input:checkbox[name\x3djira-issue-all]").attr("checked");var l=1===n.length,h=1<n.length;n=0===n.length;var k=AJS.JQLHelper.isSingleKeyJQLExp(AJS.$("#my-jira-search input[name\x3djiraSearch]").val()),e=function(){b&&b.isJqlQuery?p.click():d.click()},m=function(){f.attr("disabled","disabled");p.removeAttr("disabled");d.removeAttr("disabled");e();setTimeout(function(){e()},
100)},g=function(){d.attr("disabled","disabled");f.removeAttr("disabled");"insert-single"===AJS.$("input[name\x3dinsert-advanced]:checked").val()&&setTimeout(function(){p.removeAttr("disabled").click()},100)},q=function(){p.removeAttr("disabled","disabled");f.removeAttr("disabled","disabled");d.removeAttr("disabled","disabled");"insert-single"===AJS.$("input:radio[name\x3dinsert-advanced]:checked").val()&&setTimeout(function(){p.click()},100)};AJS.$(".jql-display-opts-open").removeClass("disabled");
d.removeAttr("disabled");f.removeAttr("disabled");p.removeAttr("disabled");a&&l&&k?m():a&&l&&!k?q():h?g():l&&!a?m():c?g():n&&(d.attr("disabled","disabled"),f.attr("disabled","disabled"),p.attr("disabled","disabled"),AJS.$(".jql-display-opts-close").click(),AJS.$(".jql-display-opts-open").addClass("disabled"))},isInsertTableType:function(){return"insert-table"===AJS.$("input:radio[name\x3dinsert-advanced]:checked").val()},setInsertButtonState:function(){var a=AJS.$(".jql-display-opts-close, .jql-display-opts-open"),
c=AJS.$("#jira-maximum-issues");!a.length||a.length&&this.isInsertTableType()&&!this.isValidMaxIssues(c.val())?this.disableInsert():this.enableInsert()},analyticPanelActionName:"confluence.jira.plugin.searchadded"});AJS.Editor.JiraConnector.Panels.push(new AJS.Editor.JiraConnector.Panel.Search);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:dialogsJs', location = '/jira/jip_createissuepanel.js' */
AJS.Editor.JiraConnector.Panel.Create=function(){};AJS.Editor.JiraConnector.Panel.Create.prototype=AJS.$.extend(AJS.Editor.JiraConnector.Panel.Create.prototype,AJS.Editor.JiraConnector.Panel.prototype);
AJS.Editor.JiraConnector.Panel.Create.prototype=AJS.$.extend(AJS.Editor.JiraConnector.Panel.Create.prototype,{DEFAULT_PROJECT_VALUE:"-1",SHOW_MESSAGE_ON_TOP:!0,EXCLUDED_FIELDS:["project","issuetype","summary","description"],PROJECTS_META:{},setSummary:function(a){var b=AJS.$('.field-group [name\x3d"summary"]',this.jipForm.formEl);b.length&&b.val(a)},resetIssue:function(){AJS.$(".issue-summary",this.container).empty();AJS.$(".issue-description",this.container).empty()},focusForm:function(){var a=AJS.$("select.server-select",
this.container);a.length?a.focus():(a=AJS.$(".project-select",this.container),a.length&&a.focus())},authCheck:function(){this.selectedServer=this.jipForm.getCurrentServer();this.selectedServer.authUrl?this.showOauthChallenge():this.serverSelect()},ajaxAuthCheck:function(a){var b=this;this.endLoading();this.ajaxError(a,function(){b.authCheck(b.jipForm.getCurrentServer())})},showOauthChallenge:function(){AJS.$("div.field-group",this.container).not(".servers").hide();AJS.$(".jira-oauth-message-marker",
this.container).remove();var a=this,b=this.createOauthForm(function(){a.serverSelect()});this.container.append(b)},projectOk:function(){var a=AJS.$(".project-select option:selected",this.container).val();return a&&a.length&&a!=this.DEFAULT_PROJECT_VALUE},setInsertButtonState:function(){if(!1===this.formHasError&&this.projectOk())return this.enableInsert(),!0;this.disableInsert();return!1},startLoading:function(){var a=require("confluence/form-state-control");this.removeError(this.container);AJS.$(".loading-blanket",
this.container).removeClass("hidden");a.disableElement(AJS.$("input,select,textarea",this.container));this.disableInsert();this.handleInsertWaiting(!0)},endLoading:function(){var a=require("confluence/form-state-control");AJS.$(".loading-blanket",this.container).addClass("hidden");a.enableElement(AJS.$("input,select,textarea",this.container));AJS.$(".project-select",this.container).val()===this.DEFAULT_PROJECT_VALUE&&a.disableElement(AJS.$(".issuetype-select",this.container));this.setInsertButtonState();
this.handleInsertWaiting(!1)},bindEvent:function(){var a=this;AJS.$('.field-group [name\x3d"summary"]',this.jipForm.formEl).keyup(function(){a.setInsertButtonState()});this.container.on("focus","input[data-aui-dp-uuid]",function(){var b=AJS.$(this).attr("data-aui-dp-uuid");setTimeout(function(){AJS.$("[data-aui-dp-popup-uuid\x3d"+b+"]").parents(".aui-inline-dialog").addClass("datepicker-patch")},0)})},title:function(){return "Create New Issue"},init:function(a){var b=this;
a.html('\x3cdiv class\x3d"create-issue-container"\x3e\x3c/div\x3e');this.container=AJS.$("div.create-issue-container");this.selectedServer=AJS.Editor.JiraConnector.servers[0];this.jipForm=new (require("jira-integration-plugin/jira-create-issue-form"))({container:".create-issue-container",renderSummaryAndDescription:!0,onError:function(){AJS.$(".field-group .error",this.container).remove();b.formHasError=!0;b.disableInsert()},onServerChanged:function(){AJS.$(".field-group .error",this.container).remove();
b.setInsertButtonState();b.selectedServer=this.getCurrentServer()},onRequiredFieldsRendered:function(f,d){AJS.$(".field-group .error",this.container).remove();b.formHasError=!!d.length;b.setInsertButtonState()},ajax:AJS.$.ajax});a.onselect=function(){b.onselect()};this.bindEvent()},convertFormToJSON:function(a){const b=require("jira-integration-plugin/fields");if(!b)return AJS.logError("Jira integration plugin is missing!"),"";var f={issues:[]},d={};d.fields={project:{id:AJS.$(".project-select option:selected",
a).val()},issuetype:{id:AJS.$(".issuetype-select option:selected",a).val()},summary:AJS.$('.field-group [name\x3d"summary"]',a).val(),description:AJS.$('.field-group [name\x3d"description"]',a).val()};a.children(".create-issue-required-fields").children(".jira-field").children("input,select,textarea").not(".select2-input").each(function(c,e){c=AJS.$(e);d.fields[c.attr("name")]=b.getJSON(c)});a.children(".create-issue-required-fields").children("fieldset.jira-field").each(function(c,e){c=AJS.$(e);
d.fields[c.attr("name")]=b.getJSON(c)});f.issues.push(d);return JSON.stringify(f)},validateRequiredFieldInForm:function(a){var b=!0,f="placeholder"in document.createElement("input");a.find(".field-group .icon-required, .field-group .aui-icon-required").each(function(d,c){c=AJS.$(c).parent();d=c.text();var e=c.nextAll("input,select,textarea"),g=AJS.$.trim(e.val());if(!g||!f&&g==e.attr("placeholder"))b=!1,c=c.parent(),d=AJS.format("{0} is required",d),c.append(aui.form.fieldError({message:d}))});
return b},clearFieldErrors:function(){AJS.$("form div.error",this.container).remove()},insertLink:function(){var a=this,b=Confluence.getContextPath()+"/rest/jira-integration/1.0/issues",f=AJS.$("div.create-issue-container form"),d=this.jipForm.getCurrentServer();a.clearFieldErrors();a.validateRequiredFieldInForm(f)&&(this.startLoading(),AJS.$.ajax({type:"POST",contentType:"application/json",url:b+"?applicationId\x3d"+this.selectedServer.id,data:this.convertFormToJSON(f),success:function(c){var e=
c&&c.issues&&c.issues[0]&&c.issues[0].issue&&c.issues[0].issue.key;e?(a.insertIssueLink(e,d.displayUrl+"/browse/"+e),a.resetIssue()):(_.isEmpty(c.errors[0].elementErrors.errorMessages)||(e=Confluence.Templates.ConfluenceJiraPlugin.renderCreateErrorPanel({errors:c.errors[0].elementErrors.errorMessages,serverUrl:d.displayUrl}),a.errorMsg(AJS.$("div.create-issue-container"),e)),_.each(c.errors[0].elementErrors.errors,function(g,h){g=aui.form.fieldError({message:g});AJS.$(AJS.format(".field-group [name\x3d{0}]",
h),f).after(g)}));a.endLoading()},error:function(c,e){a.ajaxAuthCheck(c)}}))},onselect:function(){var a=!!AJS.$(".aui-message \x3e .oauth-init",this.container).length;this.selectedServer&&!this.selectedServer.authUrl&&a?this.jipForm.defaultFields.server.trigger("change"):this.setInsertButtonState()},analyticPanelActionName:"confluence.jira.plugin.issuecreated"});AJS.Editor.JiraConnector.Panels.push(new AJS.Editor.JiraConnector.Panel.Create);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:dialogsJs', location = '/jira/recentlyviewedpanel.js' */
AJS.Editor.JiraConnector.Panel.Recent=function(){};AJS.Editor.JiraConnector.Panel.Recent.prototype=AJS.$.extend(AJS.Editor.JiraConnector.Panel.Recent.prototype,AJS.Editor.JiraConnector.Panel.prototype);
AJS.Editor.JiraConnector.Panel.Recent.prototype=AJS.$.extend(AJS.Editor.JiraConnector.Panel.Recent.prototype,{title:function(){return "Recently Viewed"},init:function(d){var a=AJS.Editor.JiraConnector.servers;d.html('\x3cdiv id\x3d"my-recent-issues" '+(1<a.length?'class\x3d"multi-server" ':"")+"\x3e\x3c/div\x3e");var b=this;this.selectedServer=a[0];1<a.length&&(a=AJS.$('\x3cdiv class\x3d"jira-server-select"\x3e\x3cform action\x3d"#" method\x3d"post" class\x3d"aui"\x3e\x3cdiv class\x3d"field-group"\x3e\x3clabel\x3eServer\x3c/label\x3e\x3cselect class\x3d"select" \x3e\x3c/select\x3e\x3c/div\x3e\x3c/form\x3e\x3c/div\x3e').appendTo("div#my-recent-issues"),
this.applinkServerSelect(AJS.$(".select",a),function(e){b.selectedServer=e;b.onselect()}));d.onselect=function(){b.onselect()}},insertLink:function(){this.insertSelected()},onselect:function(){var d=require("confluence/form-state-control"),a=this,b=AJS.$("div#my-recent-issues");this.container=b;var e=function(){b.children().not(".jira-server-select").remove()},g=function(){if(a.selectedServer.authUrl){e();var c=a.createOauthForm(function(){f()});b.append(c)}else f()};var f=function(){if(!a.currentXhr||
4==a.currentXhr.readyState){var c=AJS.$(".select",b);d.disableElement(c);e();a.createIssueTableFromUrl(b,a.selectedServer.id,"/sr/jira.issueviews:searchrequest-xml/temp/SearchRequest.xml?jqlQuery\x3dkey+in+issueHistory()+ORDER+BY+lastViewed+DESC\x26field\x3dsummary\x26field\x3dtype\x26field\x3dlink\x26tempMax\x3d50\x26returnMax\x3dtrue",a.setSelectedIssue,a.insertLink,a.disableInsert,function(){c.length&&c.focus()},function(h){AJS.$("div.data-table",b).remove();a.ajaxError(h,g)},!1)}};g()},analyticPanelActionName:"confluence.jira.plugin.recentlyviewadded"});
AJS.Editor.JiraConnector.Panels.push(new AJS.Editor.JiraConnector.Panel.Recent);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:dialogsJs', location = 'templates/soy/dialog.soy' */
// This file was automatically generated from dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.ConfluenceJiraPlugin.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.ConfluenceJiraPlugin == 'undefined') { Confluence.Templates.ConfluenceJiraPlugin = {}; }


Confluence.Templates.ConfluenceJiraPlugin.displayOptsHtml = function(opt_data, opt_ignored) {
  return '<div class=\'jql-display-opts-bar data-table\'><a href="javascript:void(0)" class=\'jql-display-opts-open\' data-title="' + soy.$$escapeHtml('Display options panel is not available without a selection.') + '"><span></span><strong>' + soy.$$escapeHtml('Display options') + '</strong></a></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.displayOptsHtml.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.displayOptsHtml';
}


Confluence.Templates.ConfluenceJiraPlugin.displayOptsOverlayHtml = function(opt_data, opt_ignored) {
  return '<div class=\'jql-display-opts-overlay data-table\' data-js="display-option-wrapper"><form id="jiraMacroDlg" class="aui" action="#"><div class=\'jql-display-opts-inner\'><a href="javascript:void(0)" class=\'jql-display-opts-open\' data-js="display-option-trigger" data-title="' + soy.$$escapeHtml('Display options panel is not available without a selection.') + '"><span></span><strong>' + soy.$$escapeHtml('Display options') + '</strong></a><fieldset class="group"><legend><span>' + soy.$$escapeHtml('Display as') + '</span></legend><div class="radio"><input type=\'radio\' class=\'radio\' name=\'insert-advanced\' id=\'opt-single\' value=\'insert-single\'><label for=\'opt-single\'>' + soy.$$escapeHtml('Single issue') + '</label><div class=\'description\'>' + soy.$$escapeHtml('Display the macro as a single issue.') + '</div></div><div class="radio"><input type=\'radio\' class=\'radio\' name=\'insert-advanced\' id=\'opt-total\' value=\'insert-count\'><label for=\'opt-total\'>' + soy.$$escapeHtml('Total issue count') + '</label><div class=\'description\'>' + soy.$$escapeHtml('Display total number of issues as a link. E.g.') + '<a class=\'total-issues-link\' target=\'_blank\' href=\'#\'><span class=\'total-issues-text\'>' + soy.$$escapeHtml(AJS.format('{0} issues',12)) + '</span></a></div></div><div class="radio"><input type=\'radio\' class=\'radio\' checked=\'checked\' name=\'insert-advanced\' id=\'opt-table\' value=\'insert-table\'><label for=\'opt-table\'>' + soy.$$escapeHtml('Table') + '</label><div class=\'description\'>' + soy.$$escapeHtml('Customize your columns below.') + '</div></div></fieldset><fieldset><div class="field-group"><label>' + soy.$$escapeHtml('Maximum issues') + '</label><input type="text" name="jira-maximum-issues" id="jira-maximum-issues" class="text short-field" /><div class="description">' + soy.$$escapeHtml('Leave empty to get all issues.') + '</div></div></fieldset><fieldset><div class="field-group"><label>' + soy.$$escapeHtml('Columns to display') + '</label><select id="jiraIssueColumnSelector" data-placeholder="' + soy.$$escapeHtml('Start typing to see possible columns') + '" multiple="true" class="select long-field"></select></div></fieldset></div></form></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.displayOptsOverlayHtml.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.displayOptsOverlayHtml';
}


Confluence.Templates.ConfluenceJiraPlugin.searchForm = function(opt_data, opt_ignored) {
  return '<div class=\'jira-search-form\'><form class=\'aui\'><fieldset class=\'inline\'>' + ((opt_data.isMultiServer == true) ? '<div class=\'search-input\'><input type=\'text\' class=\'text search-text\' name=\'jiraSearch\' placeholder="' + soy.$$escapeHtml('e.g. filter \x3d \x22My Jira filter\x22') + '"/></div>' : '<div class=\'search-input one-server\'><input type=\'text\' class=\'text one-server long-field\' name=\'jiraSearch\' placeholder="' + soy.$$escapeHtml('e.g. filter \x3d \x22My Jira filter\x22') + '"/></div>') + '<button type=\'button\' title="' + soy.$$escapeHtml('Search') + '" class=\'button\'><span class="aui-icon aui-icon-small aui-iconfont-search"></span></button></fieldset><div class=\'search-help\'>' + soy.$$escapeHtml('Search using any issue key, search URL, Jira link, JQL, plain text or filter') + '</div></form></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.searchForm.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.searchForm';
}


Confluence.Templates.ConfluenceJiraPlugin.warningDialog = function(opt_data, opt_ignored) {
  return '<div class=\'warning-body\'><p>' + soy.$$escapeHtml('If you connect Confluence to Jira you can easily link issues...') + '</p>' + ((opt_data.isAdministrator == false) ? '<p>' + soy.$$escapeHtml('Your administrator can set this up.') + '</p>' : '') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.warningDialog.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.warningDialog';
}


Confluence.Templates.ConfluenceJiraPlugin.issueCheckbox = function(opt_data, opt_ignored) {
  return '<input type=\'checkbox\' name=\'jira-issue\' value=\'' + soy.$$escapeHtml(opt_data.issueKey) + '\' checked/>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.issueCheckbox.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.issueCheckbox';
}


Confluence.Templates.ConfluenceJiraPlugin.issueKey = function(opt_data, opt_ignored) {
  return '<span><img class="icon" src="' + soy.$$escapeHtml(opt_data.issueIconUrl) + '"/> ' + soy.$$escapeHtml(opt_data.issueKey) + '</span>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.issueKey.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.issueKey';
}


Confluence.Templates.ConfluenceJiraPlugin.showMessageNoServer = function(opt_data, opt_ignored) {
  return '' + ((opt_data.isAdministrator == true) ? soy.$$escapeHtml('No server found match with your URL.') + '<a id="open_applinks" target="_blank" href="' + soy.$$escapeHtml(opt_data.contextPath) + '/admin/listapplicationlinks.action">' + soy.$$escapeHtml('Click here to set this up') + '</a>' : soy.$$escapeHtml('No server found match with your URL. Your administrator can set this up.') + '<a id="open_applinks" target="_blank" href="' + soy.$$escapeHtml(opt_data.contextPath) + '/wiki/contactadministrators.action">' + soy.$$escapeHtml('Click here to contact your admin') + '</a>');
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.showMessageNoServer.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.showMessageNoServer';
}


Confluence.Templates.ConfluenceJiraPlugin.viewAll = function(opt_data, opt_ignored) {
  return '<div class=\'view-all\'>' + soy.$$escapeHtml('Displaying first 20 results.') + '<a href=\'' + soy.$$escapeHtml(opt_data.jiraIssuesLink) + '\' target=\'_blank\'>' + soy.$$escapeHtml('View all.') + '</a></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.viewAll.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.viewAll';
}


Confluence.Templates.ConfluenceJiraPlugin.learnMore = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml('https://confluence.atlassian.com/display/DOC/Jira+Issues+Macro') + '" target=\'_blank\'>' + soy.$$escapeHtml('Learn More') + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.learnMore.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.learnMore';
}


Confluence.Templates.ConfluenceJiraPlugin.contentJiraChart = function(opt_data, opt_ignored) {
  return '<div id="jira-chart-content-' + soy.$$escapeHtml(opt_data.chartType) + '"><div class=\'jira-chart-search\'><form class=\'aui\'><fieldset class=\'inline\'>' + ((opt_data.isMultiServer == true) ? '<div class=\'jira-chart-search-input\'><input type=\'text\' id="jira-chart-search-input" class=\'text search-text\' name=\'jiraSearch\' placeholder="' + soy.$$escapeHtml('e.g. filter \x3d \x22My Jira filter\x22') + '"/></div><select id="jira-chart-servers" class="select" name="server" tabindex="0"></select>' : '<div class=\'jira-chart-search-input one-server\'><input type=\'text\' id="jira-chart-search-input" class=\'text one-server long-field\' name=\'jiraSearch\' placeholder="' + soy.$$escapeHtml('e.g. filter \x3d \x22My Jira filter\x22') + '"/></div>') + '<button id="jira-chart-search-button" type=\'button\' class=\'button\'>' + soy.$$escapeHtml('Preview') + '</button></fieldset><div class=\'search-help\'>' + soy.$$escapeHtml('Search using any issue key, search URL, Jira link, JQL, plain text or filter') + '</div></form></div><div class="jira-chart-img"></div><div class="jira-chart-option" data-js="display-option-wrapper" ><form action="#" class="aui" id="jiraChartMacroOption"><div class="jiraChartOption"><a class="jirachart-display-opts-open" data-js="display-option-trigger" href="javascript:void(0)"><span class="display-option-icon"></span><strong>' + soy.$$escapeHtml('Display options') + '</strong></a>' + ((opt_data.chartType == 'pie') ? Confluence.Templates.ConfluenceJiraPlugin.piechartForm(null) : (opt_data.chartType == 'createdvsresolved') ? Confluence.Templates.ConfluenceJiraPlugin.createdVsResolved(null) : (opt_data.chartType == 'twodimensional') ? Confluence.Templates.ConfluenceJiraPlugin.twoDimensional(null) : '') + '</div></form></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.contentJiraChart.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.contentJiraChart';
}


Confluence.Templates.ConfluenceJiraPlugin.piechartForm = function(opt_data, opt_ignored) {
  return '<fieldset><div class="field-group"><label for="jira-chart-statType">' + soy.$$escapeHtml('Chart by') + '</label><select name="type" id="jira-chart-statType" class="select"></select></div></fieldset><fieldset class="group"><div class="field-group"><label for="jira-chart-width">' + soy.$$escapeHtml('Width') + '</label><input type="text" name="jira-chart-width" id="jira-chart-width" class="text short-field"><span class="aui-icon aui-icon-small aui-iconfont-help help-aligment widthInfo" title="' + soy.$$escapeHtml('Enter pixels, percent or leave blank to auto-resize.') + '"></span><div class="checkbox"><input type="checkbox" id="jira-pie-chart-show-border" class="checkbox jira-chart-show-border"><label for="jira-pie-chart-show-border">' + soy.$$escapeHtml('Show border') + '</label></div><div class="checkbox"><input type="checkbox" id="jira-pie-chart-show-infor" class="checkbox jira-chart-show-infor"><label for="jira-pie-chart-show-infor">' + soy.$$escapeHtml('Show chart information') + '</label></div></div></fieldset>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.piechartForm.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.piechartForm';
}


Confluence.Templates.ConfluenceJiraPlugin.createdVsResolved = function(opt_data, opt_ignored) {
  return '<fieldset><div class="field-group"><label for="created-vs-resolved-chart-periodName">' + soy.$$escapeHtml('Period') + '</label><select class="select" id="created-vs-resolved-chart-periodName" name="created-vs-resolved-chart-periodName"><option value="hourly">' + soy.$$escapeHtml('Hourly') + '</option><option value="daily">' + soy.$$escapeHtml('Daily') + '</option><option value="weekly">' + soy.$$escapeHtml('Weekly') + '</option><option value="monthly">' + soy.$$escapeHtml('Monthly') + '</option><option value="quarterly">' + soy.$$escapeHtml('Quarterly') + '</option><option value="yearly">' + soy.$$escapeHtml('Yearly') + '</option></select><div class="error"></div></div><div class="field-group"><label for="created-vs-resolved-chart-daysprevious">' + soy.$$escapeHtml('Days previously') + '<span class="aui-icon icon-required"></span></label><input type="text" class="text" id="created-vs-resolved-chart-daysprevious" value="30"><span class="aui-icon aui-icon-small aui-iconfont-help help-aligment daysPreviousInfo" title="' + soy.$$escapeHtml('Number of days to include (counting back from today).') + '"></span><div class="error days-previous-error"></div></div><fieldset class="group"><div class="checkbox"><input type="checkbox" id="created-vs-resolved-chart-cumulative" name="created-vs-resolved-chart-cumulative" class="checkbox"><label for="created-vs-resolved-chart-cumulative">' + soy.$$escapeHtml('Cumulative totals') + '</label><span class="aui-icon aui-icon-small aui-iconfont-help help-aligment cumulativeInfo" title="' + soy.$$escapeHtml('Progressively add totals (1, 2, 3) or show individual values (1,1,1).') + '"></span></div><div class="checkbox"><input type="checkbox" id="created-vs-resolved-chart-showunresolvedtrend" name="created-vs-resolved-chart-showunresolvedtrend" class="checkbox"><label for="created-vs-resolved-chart-showunresolvedtrend">' + soy.$$escapeHtml('Show unresolved trend') + '</label><span class="aui-icon aui-icon-small aui-iconfont-help help-aligment showunresolvedtrendInfo" title="' + soy.$$escapeHtml('Include a subplot showing unresolved issues.') + '"></span></div></fieldset><div class="field-group"><label for="created-vs-resolved-chart-versionLabel">' + soy.$$escapeHtml('Show versions') + '</label><select class="select" id="created-vs-resolved-chart-versionLabel" name="created-vs-resolved-chart-versionLabel"><option value="all">' + soy.$$escapeHtml('All versions') + '</option><option value="major">' + soy.$$escapeHtml('Only major versions') + '</option><option value="none">' + soy.$$escapeHtml('None') + '</option></select><span class="aui-icon aui-icon-small aui-iconfont-help help-aligment versionLabelInfo" title="' + soy.$$escapeHtml('Mark version release dates in the chart.') + '"></span><div class="error"></div></div></fieldset><fieldset class="group"><div class="field-group"><label for="jira-chart-width">' + soy.$$escapeHtml('Width') + '</label><input type="text" name="jira-chart-width" id="jira-chart-width" class="text short-field"><span class="aui-icon aui-icon-small aui-iconfont-help help-aligment widthInfo" title="' + soy.$$escapeHtml('Enter pixels, percent or leave blank to auto-resize.') + '"></span><div class="checkbox"><input type="checkbox" id="jira-createdvsresolved-chart-show-border" class="checkbox jira-chart-show-border"><label for="jira-createdvsresolved-chart-show-border">' + soy.$$escapeHtml('Show border') + '</label></div><div class="checkbox"><input type="checkbox" id="jira-createdvsresolved-chart-show-infor" class="checkbox jira-chart-show-infor"><label for="jira-createdvsresolved-chart-show-infor">' + soy.$$escapeHtml('Show chart information') + '</label></div></div></fieldset>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.createdVsResolved.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.createdVsResolved';
}


Confluence.Templates.ConfluenceJiraPlugin.twoDimensional = function(opt_data, opt_ignored) {
  return '<fieldset><div id="jira-chart-support-all-version" class="hidden"></div><div class="field-group"><label for="twodimensional-xaxis">' + soy.$$escapeHtml('XAxis') + '</label><select class="select" id="twodimensional-xaxis"><option value="statuses">' + soy.$$escapeHtml('Status') + '</option><option value="priorities">' + soy.$$escapeHtml('Priority') + '</option><option value="assignees">' + soy.$$escapeHtml('Assignee') + '</option><option value="allFixfor">' + soy.$$escapeHtml('Fix For Versions (all)') + '</option><option value="components">' + soy.$$escapeHtml('Component') + '</option><option value="issuetype">' + soy.$$escapeHtml('Issue Type') + '</option></select></div><div class="field-group"><label for="twodimensional-yaxis">' + soy.$$escapeHtml('YAxis') + '</label><select class="select" id="twodimensional-yaxis"><option value="statuses">' + soy.$$escapeHtml('Status') + '</option><option value="priorities">' + soy.$$escapeHtml('Priority') + '</option><option value="assignees">' + soy.$$escapeHtml('Assignee') + '</option><option value="allFixfor">' + soy.$$escapeHtml('Fix For Versions (all)') + '</option><option value="components">' + soy.$$escapeHtml('Component') + '</option><option value="issuetype">' + soy.$$escapeHtml('Issue Type') + '</option></select></div><div class="field-group"><label for="twodimensional-number-of-result">' + soy.$$escapeHtml('Rows to display') + '</label><input type="text" name="twodimensional-number-of-result" id="twodimensional-number-of-result" class="text short-field"><div class="error twodimensional-number-of-result-error"></div></div></fieldset>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.twoDimensional.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.twoDimensional';
}


Confluence.Templates.ConfluenceJiraPlugin.jiraChartErrorMessage = function(opt_data, opt_ignored) {
  return '<div class="aui-message-container"><div class="aui-message error closeable shadowed"><span class=\'message\'>' + soy.$$escapeHtml(opt_data.message) + '</span><span class="aui-icon icon-close" role="button" tabindex="0"></span></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.jiraChartErrorMessage.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.jiraChartErrorMessage';
}


Confluence.Templates.ConfluenceJiraPlugin.noServerWarning = function(opt_data, opt_ignored) {
  return '<div class="aui-message-container"><div class="aui-message warning">' + ((opt_data.isAdministrator == true) ? soy.$$escapeHtml('No server found match with your URL.') + '<a id="open_applinks" target="_blank" href="' + soy.$$escapeHtml(opt_data.contextPath) + '/admin/listapplicationlinks.action">' + soy.$$escapeHtml('Click here to set this up') + '</a>' : soy.$$escapeHtml('No server found match with your URL. Your administrator can set this up.') + '<a id="open_applinks" target="_blank" href="' + soy.$$escapeHtml(opt_data.contextPath) + '/wiki/contactadministrators.action">' + soy.$$escapeHtml('Click here to contact your admin') + '</a>') + '</div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.noServerWarning.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.noServerWarning';
}


Confluence.Templates.ConfluenceJiraPlugin.addMoreToComeLink = function(opt_data, opt_ignored) {
  return '<li class="page-menu-item"><button class="item-button moreToCome"><a target="_blank" href="http://go.atlassian.com/confluencejiracharts">' + soy.$$escapeHtml('More to come...') + '</a></button></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.addMoreToComeLink.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.addMoreToComeLink';
}


Confluence.Templates.ConfluenceJiraPlugin.addCrossMacroLink = function(opt_data, opt_ignored) {
  return '<li class="page-menu-item"><hr><span class="aui-nav-heading jira-padding-left-10px"><strong>' + soy.$$escapeHtml('OTHER Jira CONTENT') + '</strong></span><nav class="aui-navgroup aui-navgroup-vertical"><div class="aui-navgroup-inner"><ul class="aui-nav"><li><button class="item-button jira-left-panel-link" id="' + soy.$$escapeHtml(opt_data.id) + '">' + soy.$$escapeHtml(opt_data.label) + '</button></li></ul></div></nav></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.addCrossMacroLink.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.addCrossMacroLink';
}


Confluence.Templates.ConfluenceJiraPlugin.jqlInvalid = function(opt_data, opt_ignored) {
  return '<div class="aui-message-container"><div class="aui-message warning">' + soy.$$escapeHtml('The Jira server didn\x27t understand your search query. If you entered JQL, please ensure that it\x27s correctly formed. If you entered an issue key, ensure that it exists and you have permission to view it.') + '</div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.jqlInvalid.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.jqlInvalid';
}


Confluence.Templates.ConfluenceJiraPlugin.warningValWidthColumn = function(opt_data, opt_ignored) {
  return '<div class="error width-error">' + ((opt_data.error == 'wrongFormat') ? soy.$$escapeHtml('The width must be in correct format') : (opt_data.error == 'wrongNumber') ? soy.$$escapeHtml('The width must be a number between 100 and 9000') : '') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.warningValWidthColumn.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.warningValWidthColumn';
}


Confluence.Templates.ConfluenceJiraPlugin.warningValMaxiumIssues = function(opt_data, opt_ignored) {
  return '<div id="jira-max-number-error" class="error">' + soy.$$escapeHtml('Must be a number between 1 and 1000.') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.warningValMaxiumIssues.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.warningValMaxiumIssues';
}


Confluence.Templates.ConfluenceJiraPlugin.showJiraUnsupportedVersion = function(opt_data, opt_ignored) {
  return '<div class="jira-unsupported-version aui-message-container"><div class="aui-message warning">' + soy.$$escapeHtml('Jira Charts are not available for your version of Jira. Upgrade to Jira 6.1.1 or later to use this macro.') + '</div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.showJiraUnsupportedVersion.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.showJiraUnsupportedVersion';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:dialogsJs', location = 'templates/soy/create_issues.soy' */
// This file was automatically generated from create_issues.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.ConfluenceJiraPlugin.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.ConfluenceJiraPlugin == 'undefined') { Confluence.Templates.ConfluenceJiraPlugin = {}; }


Confluence.Templates.ConfluenceJiraPlugin.createIssuesForm = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui" id="create-issues-form"><div class="loading-blanket hidden"><div class="loading-data"></div></div><div class="field-group servers"><label>' + soy.$$escapeHtml('Server') + '</label><select class="select server-select"></select></div><div class="field-group project-select-parent" ><label>' + soy.$$escapeHtml('Project') + '</label><select class="select project-select" name="pid"></select></div><div class="field-group type-select-parent issues-type-group" ><label>' + soy.$$escapeHtml('Issue Type') + '</label><select class="select type-select" name="issuetype"></select></div><div class="field-group"><label>' + soy.$$escapeHtml('Summary') + '<span class="aui-icon icon-required"></span></label><input class="text issue-summary" type="text" name="summary"/></div><div id="jira-required-fields-panel"></div><div class="field-group"><label>' + soy.$$escapeHtml('Description') + '</label><textarea class="issue-description textarea" rows="5" name="description"></textarea></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.createIssuesForm.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.createIssuesForm';
}


Confluence.Templates.ConfluenceJiraPlugin.renderOptions = function(opt_data, opt_ignored) {
  var output = '';
  var optionList15 = opt_data.options;
  var optionListLen15 = optionList15.length;
  for (var optionIndex15 = 0; optionIndex15 < optionListLen15; optionIndex15++) {
    var optionData15 = optionList15[optionIndex15];
    output += '<option value="' + soy.$$escapeHtml(optionData15.id) + '">' + soy.$$escapeHtml(optionData15.name) + '</option>';
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.renderOptions.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.renderOptions';
}


Confluence.Templates.ConfluenceJiraPlugin.renderOption = function(opt_data, opt_ignored) {
  return '<option value="' + soy.$$escapeHtml(opt_data.option.id) + '" data-jira-option-key="' + soy.$$escapeHtml(opt_data.option.key) + '">' + soy.$$escapeHtml(opt_data.option.name) + '</option>';
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.renderOption.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.renderOption';
}


Confluence.Templates.ConfluenceJiraPlugin.renderCreateErrorPanel = function(opt_data, opt_ignored) {
  var output = '<div>' + soy.$$escapeHtml('There were errors creating an issue in') + '<a target="_blank" href=' + soy.$$escapeHtml(opt_data.serverUrl) + '>Jira</a></div><ul>';
  var errorList36 = opt_data.errors;
  var errorListLen36 = errorList36.length;
  for (var errorIndex36 = 0; errorIndex36 < errorListLen36; errorIndex36++) {
    var errorData36 = errorList36[errorIndex36];
    output += '<li>' + soy.$$escapeHtml(errorData36) + '</li>';
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.ConfluenceJiraPlugin.renderCreateErrorPanel.soyTemplateName = 'Confluence.Templates.ConfluenceJiraPlugin.renderCreateErrorPanel';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:text-placeholders-jira', location = '/jira/placeholder.js' */
(function(){AJS.bind("init.rte",function(){AJS.bind("editor.text-placeholder.activated",function(b,a){a&&"jira"===a.placeholderType&&AJS.Editor.JiraConnector.open(AJS.Editor.JiraConnector.source.instructionalText)});AJS.Rte.Placeholder&&AJS.Rte.Placeholder.addPlaceholderType&&AJS.Rte.Placeholder.addPlaceholderType({type:"jira",label:"Jira Macro",tooltip:"Instructional text is replaced with a Jira Macro on click.",activation:{click:!0,keypress:!1}})})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jirachart-macro', location = '/jirachart/jirachart-dialog.js' */
AJS.Editor.JiraChart=function(h){var l=require("confluence/form-state-control"),x="Insert",y="Cancel",z="Insert Jira Chart",c,d,u=function(a){if(!c){c=new AJS.ConfluenceDialog({width:840,height:590,id:"jira-chart"});c.addHeader(z);d=AJS.Editor.JiraChart.Panels;for(var b=0;b<d.length;b++){"function"===typeof d[b].title?c.addPanel(d[b].title()):void 0!==d[b].title&&c.addPanel(d[b].title);
var f=c.getCurrentPanel();d[b].init(f)}h("#jira-chart ul.dialog-page-menu").show().append(Confluence.Templates.ConfluenceJiraPlugin.addCrossMacroLink({id:"open-jira-issue-dialog",label:"Jira Issue/Filter"}));c.addButton(x,function(){var e=d[c.getCurrentPanel().id],g=e.chartType;0<c.getCurrentPanel().body.find("#jira-chart-content-"+g).length&&e.isImageChartExisted()?(e=e.getMacroParamsFromDialog(),t(e),AJS.Editor.JiraChart.close()):m(h("#jira-chart-content-"+e.chartType))},"insert-jira-chart-macro-button");
c.addLink("Select Macro",function(){c.hide();AJS.MacroBrowser.open(!1)},"dialog-back-link");c.addCancel(y,function(){AJS.Editor.JiraChart.close()})}AJS.$("#jira-chart .dialog-page-menu button").click(function(){var e=d[c.getCurrentPanel().id],g=c.getCurrentPanel().body,n=AJS.Editor.JiraChart.Helper.getSelectedServer(g);p(g,n);k(g);e.handleInsertButton();e.focusForm();e.resetDisplayOption()});b=c.getCurrentPanel().body;k(b);var q=q||function(e){var g={};_.each(e,
function(n,A){g[n.chartType]=A});return g}(d);B(q,a);r();b=c;f=b.gotoPanel;a=a&&a.params?q[a.params.chartType]:0;f.call(b,a);c.overrideLastTab();c.show();C()},D=function(){_.each(AJS.Editor.JiraChart.Panels,function(a){a.preBinding&&"function"===typeof a.preBinding&&a.preBinding()})},C=function(){h("#open-jira-issue-dialog").click(function(){AJS.Editor.JiraChart.close();AJS.Editor.JiraConnector&&AJS.Editor.JiraConnector.openCleanDialog(!1)})},m=function(a){void 0!==AJS.Editor.JiraChart.Helper.convertSearchTextToJQL(a)&&
d[c.getCurrentPanel().id].renderChart()},k=function(a){if(a.find("#jira-chart-support-all-version").length)return!0;var b=AJS.Editor.JiraChart.Helper.getSelectedServer(a).buildNumber;return-1==b||6109<=b&&6155>b?(a.find(".jira-chart-img").html(Confluence.Templates.ConfluenceJiraPlugin.showJiraUnsupportedVersion()),a.find("#jira-chart-search-input").attr("disabled","disabled"),a.find("#jira-chart-search-button").attr("disabled","disabled"),a=a.find(".jirachart-display-opts-close, .jirachart-display-opts-open"),
a.hasClass("jirachart-display-opts-close")&&a.click(),a.addClass("disabled"),r(),!1):!0},t=function(a){AJS.Editor.inRichTextMode()&&tinymce.confluence.macrobrowser.macroBrowserComplete({name:"jirachart",params:a})},B=function(a,b){for(var f=0;f<d.length;f++)d[f].resetDialogValue();D();b&&b.params&&d[a[b.params.chartType]].bindingDataFromMacroToForm(b.params)},v=function(a){a.find(".jira-oauth-message-marker").remove();a.find(".jira-chart-img").empty();a.find("#jira-chart-search-input").empty()},r=
function(){l.disableElement(h("#jira-chart").find(".insert-jira-chart-macro-button"))},p=function(a,b){h(".jira-oauth-message-marker",a).remove();var f={selectedServer:b,msg:AJS.Editor.JiraConnector.Panel.prototype.msg};b&&b.authUrl&&(b=AJS.Editor.JiraConnector.Panel.prototype.createOauthForm.call(f,function(){h(".jira-oauth-message-marker",a).remove();AJS.Editor.JiraChart.search(a)}),a.find("div.jira-chart-search").append(b))},w=function(a){a.find("#jira-chart-search-input").removeAttr("disabled");
a.find("#jira-chart-search-button").removeAttr("disabled");a.find(".jirachart-display-opts-open").removeClass("disabled")};return{close:function(){c.hide();tinymce.confluence.macrobrowser.macroBrowserCancel()},edit:function(a){if(void 0===AJS.Editor.JiraConnector.servers||0===AJS.Editor.JiraConnector.servers.length){AJS.Editor.JiraConnector.warningPopup(AJS.Meta.get("is-admin"));var b=!1}else b=!0;b&&(u(a),b=c.getCurrentPanel().body,k(b)&&(w(b),void 0!==a.params&&void 0!==a.params.serverId&&m(b),
a=AJS.Editor.JiraChart.Helper.getSelectedServer(b),p(b,a)))},search:m,disableInsert:r,enableInsert:function(){var a=AJS.$("#jira-chart").find(".insert-jira-chart-macro-button");a.is(":disabled")&&l.enableElement(a)},disableSearch:function(a){l.disableElement(a.find("#jira-chart-search-button"))},enableSearch:function(a){a.find("#jira-chart-search-button").is(":disabled")&&l.enableElement(a.find("#jira-chart-search-button"))},insertJiraChartMacroWithParams:t,open:u,clearChartContent:v,loadServers:function(a){0<
AJS.Editor.JiraConnector.servers.length&&AJS.Editor.JiraConnector.Panel.prototype.applinkServerSelect(a.find("#jira-chart-servers"),function(b){v(a);k(a)&&(p(a,b),w(a))})},validateServerSupportedChart:k}}(AJS.$);AJS.Editor.JiraChart.Panels=[];AJS.MacroBrowser.setMacroJsOverride("jirachart",{opener:AJS.Editor.JiraChart.edit});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jirachart-macro', location = '/jirachart/jirachart-helper.js' */
AJS.Editor.JiraChart.Helper=function(p){var m=/^\d+$/,f={},g=function(a){a=a&&"string"===typeof a?a.replace("px",""):"";"auto"===a&&(a="");0<a.indexOf("%")&&(a=4*a.replace("%",""));return a},k=function(a){return m.test(a)},h=function(a){var b=AJS.Editor.JiraConnector.servers;return 1<b.length?a.find("#jira-chart-servers option:selected").data("jiraapplink"):b[0]};return{getSelectedServer:h,bindingCommonChartElements:function(a){return{jql:a.find("#jira-chart-search-input"),width:a.find("#jira-chart-width"),
border:a.find(".jira-chart-show-border"),showinfor:a.find(".jira-chart-show-infor"),displayOption:a.find(".jirachart-display-opts-close, .jirachart-display-opts-open"),server:a.find("#jira-chart-servers")}},bindingCommonDataFromMacroToForm:function(a,b){a.jql.val(decodeURIComponent(b.jql));a.width.val(b.width);a.border.attr("checked","true"===b.border);a.showinfor.attr("checked","true"===b.showinfor);1<AJS.Editor.JiraConnector.servers.length&&a.server.val(b.serverId)},getCommonMacroParamsFromDialog:function(a,
b){b=h(b);return{jql:encodeURIComponent(a.jql.val()),width:g(a.width.val()),border:a.border.prop("checked"),showinfor:a.showinfor.prop("checked"),serverId:b.id,server:b.name,isAuthenticated:!b.authUrl}},getCommonChartParamsRequest:function(a,b){return{contentId:AJS.Meta.get("page-id"),macro:{name:"jirachart",params:{jql:a.jql,serverId:a.serverId,width:a.width,border:a.border,showinfor:a.showinfor,chartType:b}}}},convertSearchTextToJQL:function(a){var b=AJS.Editor.JiraConnector.servers,c=a.find("#jira-chart-search-input").val();
if(0===c.indexOf("http")){var e=AJS.JQLHelper.findServerIndexFromUrl(c,b);if(-1!==e)e=b[e].id,a.find("#jira-chart-servers").val(e);else{b=Confluence.Templates.ConfluenceJiraPlugin.noServerWarning({isAdministrator:AJS.Meta.get("is-admin"),contextPath:Confluence.getContextPath()});a.find(".jira-chart-img").html(b);AJS.Editor.JiraChart.disableInsert();return}}(b=AJS.JQLHelper.convertToJQL(c,e))?a.find("#jira-chart-search-input").val(b):(a.find(".jira-chart-img").html(Confluence.Templates.ConfluenceJiraPlugin.jqlInvalid()),
AJS.Editor.JiraChart.disableInsert());return b},convertFormatWidth:g,isChartWidthValid:function(a){a.next().next(".width-error").remove();var b=g(a.val());if(b)if(k(b)){if(100>b||9E3<b)var c="wrongNumber"}else c="wrongFormat";return c?(a.next().after(Confluence.Templates.ConfluenceJiraPlugin.warningValWidthColumn({error:c})),AJS.Editor.JiraChart.disableInsert(),!1):!0},isNumber:k,isJqlNotEmpty:function(a){return a?""!==AJS.$.trim(a.val())&&a.val()!==a.attr("placeholder"):!1},populateStatType:function(a,
b){var c=h(a);if(b){var e=f[c.id];e||AppLinks.makeRequest({appId:c.id,type:"GET",url:"/rest/gadget/1.0/statTypes",dataType:"json",async:!1,success:function(d){d&&(e=f[c.id]=d)},error:function(d){if(d)try{f[c.id]=JSON.parse(d.responseText),e=JSON.parse(d.responseText)}catch(n){AJS.error("Error contacting the server "+c.id+" with response "+d.response)}AJS.log("Jira Chart Macro: unable to retrieve statTypes from AppLink: "+c.id)}}).fail(function(d){if(d)try{f[c.id]=JSON.parse(d.responseText),e=JSON.parse(d.responseText)}catch(n){AJS.error("Error contacting the server "+
c.id+" with response "+d.response)}});var l="";e&&"undefined"!==typeof e.stats&&_.each(e.stats,function(d){l+="\x3coption value \x3d '"+d.value+"'\x3e"+AJS.escapeHtml(d.label)+" \x3c/option\x3e"});b.html(l)}}}}(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jirachart-macro', location = '/jirachart/jirachart-panel.js' */
AJS.Editor.JiraChart.Panel=function(){};
AJS.Editor.JiraChart.Panel.prototype={init:function(a){var d=Confluence.Templates.ConfluenceJiraPlugin.contentJiraChart({isMultiServer:1<AJS.Editor.JiraConnector.servers.length,chartType:this.chartType});a.html(d);this.container=AJS.$(this.containerId);AJS.Editor.JiraChart.clearChartContent(this.container);AJS.Editor.JiraChart.loadServers(this.container);this.bindingChartElements();this.bindingActions()},bindingActions:function(){var a=this,d=function(){a.isFormValid()?AJS.Editor.JiraChart.search(a.container):
AJS.Editor.JiraChart.disableInsert()};a.container.find(a.clickableElements).click(d);a.container.find(a.onChangeElements).change(d);a.chartElements.jql.change(function(){this.value!==a.jqlWhenEnterKeyPress&&(a.container.find(".jira-chart-img").empty(),AJS.Editor.JiraChart.disableInsert());a.jqlWhenEnterKeyPress=""}).bind("paste",function(){setTimeout(function(){a.isFormValid()&&(a.jqlWhenEnterKeyPress=a.chartElements.jql.val(),AJS.Editor.JiraChart.search(a.container))},100)});var c=a.container.find("input[type\x3d'text']");
c.unbind("keydown").keydown(function(b){if(13==b.which){var f=function(e){c.unbind("keyup",f);a.isFormValid()&&AJS.Editor.JiraChart.search(a.container);"jira-chart-search-input"===c.attr("id")&&(a.jqlWhenEnterKeyPress=c.val());e.stopPropagation();return!1};c.keyup(f);b.stopPropagation();return!1}});a.bindSelectOption();a.bindingServerChange()},bindingServerChange:function(){var a=this;a.chartElements.server.change(function(){a.isFormValid()&&AJS.Editor.JiraChart.validateServerSupportedChart(a.container)?
AJS.Editor.JiraChart.search(a.container):AJS.Editor.JiraChart.disableInsert()})},renderChart:function(){var a=this,d=this.getChartParamsRequest(),c=Confluence.getContextPath()+"/rest/tinymce/1/macro/preview",b=this.container.find(".jira-chart-img");b.html('\x3cdiv class\x3d"loading-data"\x3e\x3c/div\x3e');var f=b.find(".loading-data")[0];AJS.$.data(f,"spinner",Raphael.spinner(f,50,"#666"));a.request&&a.request.abort();a.request=AJS.$.ajax({url:c,type:"POST",contentType:"application/json",data:JSON.stringify(d)}).done(function(e){b.html("").hide();
var g=AJS.$('\x3ciframe frameborder\x3d"0" id\x3d"chart-preview-iframe"\x3e\x3c/iframe\x3e');g.appendTo(b);var k=g[0].contentWindow,h=k.document;g.on("load",function(){k.AJS.$("#main").addClass("chart-preview-main");b.show();a.handleInsertButton()});e=e.replace("window.onload","var chartTest");h.open();h.write(e);h.close()}).error(function(e){"abort"!=e.statusText&&(AJS.log("Jira Chart Macro - Fail to get data from macro preview"),b.html(Confluence.Templates.ConfluenceJiraPlugin.jiraChartErrorMessage({message:"Unable to render Jira chart macro due to an execution error."})));
AJS.Editor.JiraChart.disableInsert()})},resetDialogValue:function(){var a=AJS.$("input",this.container);a.filter(":text").val("");a.filter(":checked").removeAttr("checked");this.container.find("#jira-chart-search-input").val();this.container.find(".jira-chart-img").empty();this.resetDisplayOption()},resetDisplayOption:function(){var a=this,d=this.chartElements.displayOption;d.addClass("jirachart-display-opts-open");d.removeClass("jirachart-display-opts-close");setTimeout(function(){var c=a.container.find(".jira-chart-option");
c.scrollTop(0);c.css({overflow:"hidden",top:"430px"})},0)},bindSelectOption:function(){var a=this.container.find(".jira-chart-option"),d=function(c){var b=a.position().top+"px",f="",e={top:430};c?(b="",f=40-a.find("#jiraChartMacroOption").height()+"px",e={bottom:0},a.css("overflow","auto")):a.css("overflow","hidden");a.css("top",b);a.css("bottom",f);a.animate(e,500)};a.css("top","430px");this.chartElements.displayOption.click(function(c){var b=AJS.$(this);c.preventDefault();b.hasClass("disabled")||
(b.hasClass("jirachart-display-opts-open")?(d(!0),b.addClass("jirachart-display-opts-close"),b.removeClass("jirachart-display-opts-open")):(d(),b.removeClass("jirachart-display-opts-close"),b.addClass("jirachart-display-opts-open")))})},isImageChartExisted:function(){return 0<this.container.find("#chart-preview-iframe").contents().find(".jira-chart-macro-img").length},focusForm:function(){this.container.find("#jira-chart-search-input").focus()},handleInsertButton:function(){this.isFormValid()&&this.isResultValid()?
AJS.Editor.JiraChart.enableInsert():AJS.Editor.JiraChart.disableInsert()}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jirachart-macro', location = '/jirachart/piechart-panel.js' */
AJS.Editor.JiraChart.Panel.PieChart=function(d){AJS.Editor.JiraChart.Panel.call(this);var b=this;this.title="Pie Chart";this.chartType="pie";this.containerId="#jira-chart-content-pie";this.clickableElements=".jira-chart-search button, .jira-chart-show-border, .jira-chart-show-infor";this.onChangeElements="#jira-chart-statType, #jira-chart-width";this.isFormValid=function(){return AJS.Editor.JiraChart.Helper.isChartWidthValid(b.chartElements.width)&&AJS.Editor.JiraChart.Helper.isJqlNotEmpty(b.chartElements.jql)};
this.isResultValid=function(){return this.container.find("#chart-preview-iframe").contents().find(".jira-chart-macro-wrapper").length};this.bindingActions=function(){AJS.Editor.JiraChart.Panel.prototype.bindingActions.call(this);this.container.find(".widthInfo").tooltip({gravity:"w"})};this.bindingServerChange=function(){b.chartElements.server.change(function(){AJS.Editor.JiraChart.Helper.populateStatType(b.container,b.chartElements.statType);b.isFormValid()?AJS.Editor.JiraChart.search(b.container):
AJS.Editor.JiraChart.disableInsert()})};this.bindingChartElements=function(){this.chartElements=AJS.Editor.JiraChart.Helper.bindingCommonChartElements(this.container);this.chartElements.statType=this.container.find("#jira-chart-statType")};this.getChartParamsRequest=function(){var a=this.getMacroParamsFromDialog(),c=AJS.Editor.JiraChart.Helper.getCommonChartParamsRequest(a,this.chartType);c.macro.params.statType=a.statType;return c};this.getMacroParamsFromDialog=function(){var a=AJS.Editor.JiraChart.Helper.getCommonMacroParamsFromDialog(this.chartElements,
this.container);a.chartType="pie";a.statType=this.chartElements.statType.val();return a};this.bindingDataFromMacroToForm=function(a){a&&(AJS.Editor.JiraChart.Helper.bindingCommonDataFromMacroToForm(this.chartElements,a),this.chartElements.statType.val(a.statType))};this.preBinding=function(){AJS.Editor.JiraChart.Helper.populateStatType(this.container,this.container.find("#jira-chart-statType"))}};AJS.Editor.JiraChart.Panel.PieChart.prototype=AJS.Editor.JiraChart.Panel.prototype;
AJS.Editor.JiraChart.Panel.PieChart.prototype.constructor=AJS.Editor.JiraChart.Panel.PieChart;AJS.Editor.JiraChart.Panels.push(new AJS.Editor.JiraChart.Panel.PieChart(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jirachart-macro', location = '/jirachart/createdvsresolvedchart-panel.js' */
AJS.Editor.JiraChart.Panel.CreatedVsResolvedChart=function(e){AJS.Editor.JiraChart.Panel.call(this);var c=this,f=function(){c.container.find("#created-vs-resolved-chart-periodName").val("daily");c.container.find("#created-vs-resolved-chart-daysprevious").val("30")},g=function(){var a=c.chartElements.periodName.val(),b=e.trim(c.chartElements.daysprevious.val()),d=c.container.find(".days-previous-error");if(""===b)return c.container.find(".days-previous-error").html("Days Previously is required field."),
!1;if(!AJS.Editor.JiraChart.Helper.isNumber(b)||0>b)return d.html("Days Previously must be a number and positive."),!1;switch(a){case "hourly":(isValid=10>=b)||d.html(AJS.format("Days must not exceed {0} for {1} period",10,a));break;case "daily":(isValid=300>=b)||d.html(AJS.format("Days must not exceed {0} for {1} period",300,a));break;case "weekly":(isValid=1750>=b)||d.html(AJS.format("Days must not exceed {0} for {1} period",
1750,a));break;case "monthly":(isValid=7500>=b)||d.html(AJS.format("Days must not exceed {0} for {1} period",7500,a));break;case "quarterly":(isValid=22500>=b)||d.html(AJS.format("Days must not exceed {0} for {1} period",22500,a));break;case "yearly":(isValid=36500>=b)||d.html(AJS.format("Days must not exceed {0} for {1} period",36500,a));break;default:isValid=!1}isValid&&d.empty();return isValid};this.title="Created vs Resolved";
this.chartType="createdvsresolved";this.containerId="#jira-chart-content-createdvsresolved";this.clickableElements=".jira-chart-search button, .jira-chart-show-border, .jira-chart-show-infor, #created-vs-resolved-chart-cumulative, #created-vs-resolved-chart-showunresolvedtrend";this.onChangeElements="#created-vs-resolved-chart-periodName, #created-vs-resolved-chart-daysprevious, #created-vs-resolved-chart-versionLabel, #jira-chart-width";this.isFormValid=function(){var a=AJS.Editor.JiraChart.Helper.isChartWidthValid(c.chartElements.width);
return g()&&a&&AJS.Editor.JiraChart.Helper.isJqlNotEmpty(c.chartElements.jql)};this.isResultValid=function(){return this.container.find("#chart-preview-iframe").contents().find(".jira-chart-macro-wrapper").length};this.init=function(a){AJS.Editor.JiraChart.Panel.prototype.init.call(this,a);f()};this.bindingChartElements=function(){this.chartElements=AJS.Editor.JiraChart.Helper.bindingCommonChartElements(this.container);this.chartElements.periodName=this.container.find("#created-vs-resolved-chart-periodName");
this.chartElements.daysprevious=this.container.find("#created-vs-resolved-chart-daysprevious");this.chartElements.isCumulative=this.container.find("#created-vs-resolved-chart-cumulative");this.chartElements.showUnresolvedTrend=this.container.find("#created-vs-resolved-chart-showunresolvedtrend");this.chartElements.versionLabel=this.container.find("#created-vs-resolved-chart-versionLabel")};this.bindingActions=function(){AJS.Editor.JiraChart.Panel.prototype.bindingActions.call(this);this.container.find(".widthInfo").tooltip({gravity:"w"});
this.container.find(".showunresolvedtrendInfo").tooltip({gravity:"w"});this.container.find(".cumulativeInfo").tooltip({gravity:"w"});this.container.find(".versionLabelInfo").tooltip({gravity:"w"});this.container.find(".daysPreviousInfo").tooltip({gravity:"w"})};this.getChartParamsRequest=function(){var a=this.getMacroParamsFromDialog(),b=AJS.Editor.JiraChart.Helper.getCommonChartParamsRequest(a,this.chartType);b.macro.params.periodName=a.periodName;b.macro.params.daysprevious=a.daysprevious;b.macro.params.isCumulative=
a.isCumulative;b.macro.params.showUnresolvedTrend=a.showUnresolvedTrend;b.macro.params.versionLabel=a.versionLabel;return b};this.getMacroParamsFromDialog=function(){var a=AJS.Editor.JiraChart.Helper.getCommonMacroParamsFromDialog(this.chartElements,this.container);a.chartType="createdvsresolved";a.periodName=this.chartElements.periodName.val();a.daysprevious=e.trim(this.chartElements.daysprevious.val());a.isCumulative=this.chartElements.isCumulative.prop("checked");a.showUnresolvedTrend=this.chartElements.showUnresolvedTrend.prop("checked");
a.versionLabel=this.chartElements.versionLabel.val();return a};this.resetDialogValue=function(){AJS.Editor.JiraChart.Panel.prototype.resetDialogValue.call(this);f()};this.bindingDataFromMacroToForm=function(a){a&&(AJS.Editor.JiraChart.Helper.bindingCommonDataFromMacroToForm(c.chartElements,a),c.chartElements.isCumulative.attr("checked","false"!==a.isCumulative),c.chartElements.showUnresolvedTrend.attr("checked","true"===a.showUnresolvedTrend),c.chartElements.periodName.val(""===a.periodName?"daily":
a.periodName),c.chartElements.versionLabel.val(a.versionLabel),c.chartElements.daysprevious.val(""===a.daysprevious?"30":a.daysprevious))}};AJS.Editor.JiraChart.Panel.CreatedVsResolvedChart.prototype=AJS.Editor.JiraChart.Panel.prototype;AJS.Editor.JiraChart.Panel.CreatedVsResolvedChart.prototype.constructor=AJS.Editor.JiraChart.Panels.CreatedVsResolvedChart;AJS.Editor.JiraChart.Panels.push(new AJS.Editor.JiraChart.Panel.CreatedVsResolvedChart(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jirachart-macro', location = '/jirachart/twodimensionalchart-panel.js' */
AJS.Editor.JiraChart.Panel.TwoDimensionalChart=function(d){AJS.Editor.JiraChart.Panel.call(this);var b=this,e=function(){b.chartElements.numberToShow.val(5);b.chartElements.xstattype.val("statuses");b.chartElements.ystattype.val("assignees")};this.title="Two Dimensional";this.chartType="twodimensional";this.containerId="#jira-chart-content-twodimensional";this.clickableElements=".jira-chart-search button, .jira-chart-show-border, .jira-chart-show-infor, #twodimensional-show-total";
this.onChangeElements="#twodimensional-xaxis, #twodimensional-yaxis, #twodimensional-number-of-result";this.isFormValid=function(){var a=d(".twodimensional-number-of-result-error");var c=b.chartElements.numberToShow.val();AJS.Editor.JiraChart.Helper.isNumber(c)&&0<c?(a.empty(),a=!0):(a.html("The number of rows should be a positive integer"),a=!1);return a&&AJS.Editor.JiraChart.Helper.isJqlNotEmpty(b.chartElements.jql)};this.isResultValid=function(){return this.container.find("#chart-preview-iframe").contents().find(".two-dimensional-chart-table").length};
this.init=function(a){AJS.Editor.JiraChart.Panel.prototype.init.call(this,a);e()};this.bindingChartElements=function(){this.chartElements=AJS.Editor.JiraChart.Helper.bindingCommonChartElements(this.container);this.chartElements.xstattype=this.container.find("#twodimensional-xaxis");this.chartElements.ystattype=this.container.find("#twodimensional-yaxis");this.chartElements.sortBy=this.container.find("#twodimensional-sortby");this.chartElements.sortDirection=this.container.find("#twodimensional-sort-direction");
this.chartElements.showTotals=this.container.find("#twodimensional-show-total");this.chartElements.numberToShow=this.container.find("#twodimensional-number-of-result")};this.getChartParamsRequest=function(){var a=this.getMacroParamsFromDialog(),c=AJS.Editor.JiraChart.Helper.getCommonChartParamsRequest(a,this.chartType);c.macro.params.xstattype=a.xstattype;c.macro.params.ystattype=a.ystattype;c.macro.params.sortBy=a.sortBy;c.macro.params.sortDirection=a.sortDirection;c.macro.params.showTotals=a.showTotals;
c.macro.params.numberToShow=a.numberToShow;return c};this.getMacroParamsFromDialog=function(){var a=AJS.Editor.JiraChart.Helper.getCommonMacroParamsFromDialog(this.chartElements,this.container);a.chartType="twodimensional";a.xstattype=this.chartElements.xstattype.val();a.ystattype=d.trim(this.chartElements.ystattype.val());a.sortBy=d.trim(this.chartElements.sortBy.val());a.sortDirection=d.trim(this.chartElements.sortDirection.val());a.showTotals=this.chartElements.showTotals.prop("checked");a.numberToShow=
this.chartElements.numberToShow.val();return a};this.bindingDataFromMacroToForm=function(a){a&&(AJS.Editor.JiraChart.Helper.bindingCommonDataFromMacroToForm(b.chartElements,a),b.chartElements.xstattype.val(a.xstattype),b.chartElements.ystattype.val(a.ystattype),b.chartElements.sortBy.val(a.sortBy),b.chartElements.sortDirection.val(a.sortDirection),b.chartElements.showTotals.attr("checked","true"===a.showTotals),b.chartElements.numberToShow.val(a.numberToShow))};this.resetDialogValue=function(){AJS.Editor.JiraChart.Panel.prototype.resetDialogValue.call(this);
e()};this.isImageChartExisted=function(){return 0<this.container.find("#chart-preview-iframe").contents().find(".two-dimensional-chart-table").length};this.preBinding=function(){AJS.Editor.JiraChart.Helper.populateStatType(this.container,this.container.find("#twodimensional-xaxis"));AJS.Editor.JiraChart.Helper.populateStatType(this.container,this.container.find("#twodimensional-yaxis"));b.chartElements.xstattype.val("statuses");b.chartElements.ystattype.val("assignees")};this.bindingServerChange=
function(){b.chartElements.server.change(function(){AJS.Editor.JiraChart.Helper.populateStatType(b.container,b.chartElements.xstattype);AJS.Editor.JiraChart.Helper.populateStatType(b.container,b.chartElements.ystattype);b.chartElements.xstattype.val("statuses");b.chartElements.ystattype.val("assignees");b.isFormValid()?AJS.Editor.JiraChart.search(b.container):AJS.Editor.JiraChart.disableInsert()})}};AJS.Editor.JiraChart.Panel.TwoDimensionalChart.prototype=AJS.Editor.JiraChart.Panel.prototype;
AJS.Editor.JiraChart.Panel.TwoDimensionalChart.prototype.constructor=AJS.Editor.JiraChart.Panel.TwoDimensionalChart;AJS.Editor.JiraChart.Panels.push(new AJS.Editor.JiraChart.Panel.TwoDimensionalChart(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:editor-support-util', location = 'support/atlassian-editor-support.js' */
define("confluence-editor/support/atlassian-editor-support",["ajs","confluence/meta"],function(c,b){return{inlineTasks:function(){var a=b.get("use-inline-tasks");return"true"===a||!0===a},isCollaborativeContentType:function(){var a=b.get("content-type");return b.get("collaborative-content")&&("page"===a||"blogpost"===a)}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/support/atlassian-editor-support","AJS.Rte.Support");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/js/util/is-valid-uri.js' */
define("confluence-collaborative-editor-plugin/util/is-valid-uri",[],function(){function d(a,c){var b=a.lastIndexOf(c);return-1!==b&&b===a.length-c.length}var e=/^(((?![':"<>])[\s   -   　\$\+<->\^`\|~¢-¦¨©¬®-±´¸×÷˂-˅˒-˟˥-˫˭˯-˿͵΄΅϶҂֍-֏؆-؈؋؎؏۞۩۽۾߶৲৳৺৻૱୰௳-௺౿൏൹฿༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙៛᥀᧞-᧿᭡-᭪᭴-᭼᾽᾿-῁῍-῏῝-῟῭-`´῾⁄⁒⁺-⁼₊-₌₠-₾℀℁℃-℆℈℉℔№-℘℞-℣℥℧℩℮℺℻⅀-⅄⅊-⅍⅏↊↋←-⌇⌌-⌨⌫-⏾␀-␦⑀-⑊⒜-ⓩ─-❧➔-⟄⟇-⟥⟰-⦂⦙-⧗⧜-⧻⧾-⭳⭶-⮕⮘-⮹⮽-⯈⯊-⯑⯬-⯯⳥-⳪⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿゛゜㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꜀-꜖꜠꜡꞉꞊꠨-꠫꠶-꠹꩷-꩹꭛﬩﮲-﯁﷼﷽﹢﹤-﹦﹩＄＋＜-＞＾｀｜～￠-￦￨-￮￼�!-#%-\*,-/:;\?@\[-\]_\{\}¡§«¶·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰૰෴๏๚๛༄-༒༔༺-༽྅࿐-࿔࿙࿚၊-၏჻፠-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎⌈-⌋〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰-⹄、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞮꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９])+|\#(\w)+)$/,
f=/^(?:\s*(?:([a-zA-Z]*):\/\/|mailto:|skype:|callto:|facetime:|git:|irc:|irc6:|news:|nntp:|feed:|cvs:|svn:|mvn:|ssh:|itms:|notes:|smb:|sourcetree:|urn:|tel:|xmpp:|telnet:|vnc:|rdp:|whatsapp:|slack:|sip:|sips:|magnet:)[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞮꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９\/]+(?:(?!['"<>])[\s   -   　\$\+<->\^`\|~¢-¦¨©¬®-±´¸×÷˂-˅˒-˟˥-˫˭˯-˿͵΄΅϶҂֍-֏؆-؈؋؎؏۞۩۽۾߶৲৳৺৻૱୰௳-௺౿൏൹฿༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙៛᥀᧞-᧿᭡-᭪᭴-᭼᾽᾿-῁῍-῏῝-῟῭-`´῾⁄⁒⁺-⁼₊-₌₠-₾℀℁℃-℆℈℉℔№-℘℞-℣℥℧℩℮℺℻⅀-⅄⅊-⅍⅏↊↋←-⌇⌌-⌨⌫-⏾␀-␦⑀-⑊⒜-ⓩ─-❧➔-⟄⟇-⟥⟰-⦂⦙-⧗⧜-⧻⧾-⭳⭶-⮕⮘-⮹⮽-⯈⯊-⯑⯬-⯯⳥-⳪⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿゛゜㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㋾㌀-㏿䷀-䷿꒐-꓆꜀-꜖꜠꜡꞉꞊꠨-꠫꠶-꠹꩷-꩹꭛﬩﮲-﯁﷼﷽﹢﹤-﹦﹩＄＋＜-＞＾｀｜～￠-￦￨-￮￼�!-#%-\*,-/:;\?@\[-\]_\{\}¡§«¶·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰૰෴๏๚๛༄-༒༔༺-༽྅࿐-࿔࿙࿚၊-၏჻፠-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎⌈-⌋〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰-⹄、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞮꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９])*(?:\s)*)$/;
return function(a){if(null===a)return!1;var c=e.test(a),b=(a=a.match(f))&&a.length&&a[1];a=a&&a.length&&(!b||!d(b,"script")&&!d(b,"data"));return c||a}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/template/synchrony-presence.soy' */
// This file was automatically generated from synchrony-presence.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.SynchronyPresence.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.SynchronyPresence == 'undefined') { Confluence.Templates.SynchronyPresence = {}; }


Confluence.Templates.SynchronyPresence.container = function(opt_data, opt_ignored) {
  return '<ul id="avatar-list" class="synchrony-doc-' + soy.$$escapeHtml(opt_data.docId) + ' collaborative-avatars-list"></ul><aui-inline-dialog id="more-avatars" alignment="bottom right" responds-to="toggle" aria-hidden="true"><h3 aria-hidden="true">' + soy.$$escapeHtml('Also edited') + '</h3><ul id="more-avatars-list" class="collaborative-avatars-list" aria-hidden="true"></ul></aui-inline-dialog>';
};
if (goog.DEBUG) {
  Confluence.Templates.SynchronyPresence.container.soyTemplateName = 'Confluence.Templates.SynchronyPresence.container';
}


Confluence.Templates.SynchronyPresence.avatar = function(opt_data, opt_ignored) {
  return '<li class="avatar-item' + ((opt_data.active) ? ' p' + soy.$$escapeHtml(opt_data.telepointer) + ' active' : '') + ((opt_data.currentUser) ? ' no-animate-entry' : '') + '"><span title="' + soy.$$escapeHtml(opt_data.title) + '" avatar="' + soy.$$escapeHtml(opt_data.initial) + '"' + ((opt_data.active) ? ' data-origin="' + soy.$$escapeHtml(opt_data.origin) + '"' : '') + ' class="avatar' + ((opt_data.active) ? ' active' : '') + '"' + ((opt_data.username) ? ' data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : '') + '><img src="' + soy.$$escapeHtml(opt_data.avatarUrl) + '" alt="' + soy.$$escapeHtml(AJS.format('Profile picture for {0}',opt_data.username)) + '"/></span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.SynchronyPresence.avatar.soyTemplateName = 'Confluence.Templates.SynchronyPresence.avatar';
}


Confluence.Templates.SynchronyPresence.overlay = function(opt_data, opt_ignored) {
  return '<span id="synchrony-presence-overlay" class="overlay avatar"><a href="#" aria-controls="more-avatars" class="aui-button" data-aui-trigger aria-label="' + soy.$$escapeHtml('More avatars') + '"></a></span>';
};
if (goog.DEBUG) {
  Confluence.Templates.SynchronyPresence.overlay.soyTemplateName = 'Confluence.Templates.SynchronyPresence.overlay';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/js/synchrony-presence.js' */
define("confluence-collaborative-editor-plugin/synchrony-presence","backbone confluence-collaborative-editor-plugin/avatar-list-view confluence-collaborative-editor-plugin/overlay-view ajs confluence/legacy confluence/meta confluence/templates jquery underscore".split(" "),function(A,B,u,e,C,f,D,l,h){function v(){q=l(D.SynchronyPresence.container({docId:C.getContentId()}));l("#rte-toolbar").append(q);new B({el:"#avatar-list",collection:c});m=new u({collection:c});l("#rte-toolbar").append(m.render())}
function w(b){var a=l.extend({},b);a.id=b.origin;a.fullname=b.fullname||"Anonymous";a.name=b.name||"anonymous";a.username=b.name;a.avatarURL=b.currentUser?b.avatarURL:e.contextPath()+b.avatarURL;a.active=b.active||!0;a.currentUser=b.currentUser||r===b.origin;return a}function E(){return c.filter(function(b){return b.get("active")}).length}function t(){var b=[];c.each(function(a){a.get("active")||h.some(n,function(g){return a.get("id")===g.name})||b.push(a)});h.each(b,function(a){c.remove(a)});
h.each(n,function(a){a.name===f.get("remote-user")||c.any(function(g){return g.get("id")===a.name||g.get("name")===a.name})||(a.active=!1,a.id=a.name,c.add(a))})}var c=new A.Collection;c.add(w({origin:"current-user",fullname:f.get("current-user-fullname"),name:f.get("remote-user"),avatarURL:f.get("current-user-avatar-uri-reference"),active:!0,currentUser:!0}));var x=!1,r="",p,n=[],q=null,m,y=!1;e.Rte.getEditor()&&e.Rte.getEditor().initialized?v():e.bind("rte-collab-ready",v);return{appendTo:function(b,
a,g){r=b;x||(p=p||require("tinymce"),x=!0,n=g,a.on("presence",function(z){m.hideInlineDialog();z.joined.filter(function(d){return d.origin!==r}).forEach(function(d){d=w(d);var k=c.findWhere({active:!1,id:d.name});k&&c.remove(k);c.add(d,{at:E()})});z.left.forEach(function(d){d.id=d.origin;c.remove(d);t()});t();y||(e.bind("editor-heartbeat",function(d,k){h.isArray(k.contributors)&&(n=k.contributors,t())}),y=!0);e.trigger("analyticsEvent",{name:"confluence.synchrony.user.in.session",data:{numOtherUsers:c.length,
draftId:f.get("draft-id"),contentId:f.get("content-id")}})}),p.EditorManager.activeEditor.on("click",h.bind(u.prototype.hideInlineDialog,m)));return q},setTinyMce:function(b){p=b}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/js/avatar-list-view.js' */
define("confluence-collaborative-editor-plugin/avatar-list-view",["backbone","confluence-collaborative-editor-plugin/avatar-view","ajs","jquery","underscore"],function(e,f,d,h,g){return e.View.extend({initialize:function(){this.collection.on("add",this.addAvatar,this);this.collection.on("remove",this.removeAvatar,this);this.collection.each(this.addAvatar,this)},addAvatar:function(a){var b=new f({model:a});a.get("active")?(d.log(a.get("fullname")+" joined. ("+a.get("origin")+")"),a=this.$el.find("li.active").last(),
b=a.length?b.render().insertAfter(a):b.render().prependTo(this.$el)):b=b.render().appendTo(this.$el);a=function(c){c.addClass("show");c.children(".avatar").tooltip({fade:!0,gravity:"ne"})};6===this.collection.length?a(b):g.defer(a,b);this._manageOverlayClass()},removeAvatar:function(a){a.get("active")&&d.log(a.get("fullname")+" left. ("+a.get("origin")+")");this._manageOverlayClass()},_manageOverlayClass:function(){var a=this.collection.length;this.collection.each(function(b,c){b.set("hidden",5<a&&
4<=c)});5<a?this.$el.addClass("has-overlay"):this.$el.removeClass("has-overlay")}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/js/avatar-view.js' */
define("confluence-collaborative-editor-plugin/avatar-view",["backbone","ajs","confluence/templates","jquery"],function(f,d,g,e){return f.View.extend({initialize:function(){this.model.on("remove",this.remove,this)},render:function(){return this.$el=e(g.SynchronyPresence.avatar({title:this._determineTitle(),initial:this.model.get("fullname").charAt(0).toUpperCase(),fullname:this.model.get("fullname"),username:this.model.get("username"),avatarUrl:this.model.get("avatarURL"),origin:this.model.get("origin"),
active:this.model.get("active"),currentUser:this.model.get("currentUser"),telepointer:this._synchronyTelepointerId()}))},remove:function(){this.$el.removeClass().addClass("avatar-item animate");this.model.get("hidden")||this.$el.addClass("removing");this.$el.one(this._getSupportedTransition(),function(){e(this).removeClass("animate removing");e(this).remove()})},_determineTitle:function(){if(this.model.get("currentUser")){var a=["It\u0027s you, but smaller!","Look at you, getting stuff done!"];
return a[Math.floor(Math.random()*a.length)]}return this.model.get("fullname")+" "+(this.model.get("active")?"is editing this page.":"has made changes that haven\u0027t been published.")},_getSupportedTransition:function(){var a={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",MsTransition:"msTransitionEnd",WebkitTransition:"webkitTransitionEnd"},b=document.createElement("_"),c;for(c in a)if(void 0!==b.style[c])return a[c]},_synchronyTelepointerId:function(){for(var a=
""+(this.model.get("sub")||this.model.get("origin")||""),b=0,c=0;c<a.length;c++)b=(b<<5)-b+a.charCodeAt(c),b&=b;return Math.abs(b)%10}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/js/overlay-view.js' */
define("confluence-collaborative-editor-plugin/overlay-view","backbone aui/inline-dialog2 confluence-collaborative-editor-plugin/avatar-view confluence/templates ajs jquery underscore".split(" "),function(d,h,e,f,g,b,k){return d.View.extend({initialize:function(){this.collection.on("add remove",this.reconcile,this);this.inlineDialog2=document.querySelector("#more-avatars")},render:function(){this.$el=b(f.SynchronyPresence.overlay());this.$el.children("a").tooltip({fade:!0,gravity:"ne"});this.$el.on("click",
function(a){a.target&&b(a.target).tooltip("hide")});return this.$el},reconcile:function(){var a=this.collection.where({hidden:!0});0<a.length?(this.$el.addClass("show"),this.$el.children(".aui-button").html("+"+a.length).attr("title",a.length+" "+"other users are editing."),b("#more-avatars-list").children().remove(),a.forEach(function(c){c=new e({model:c});b("#more-avatars-list").append(c.render())})):(this.$el.removeClass("show"),this.hideInlineDialog())},hideInlineDialog:function(){this.inlineDialog2&&
this.inlineDialog2.isVisible&&this.inlineDialog2.isVisible()&&(this.inlineDialog2.open=!1)}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/template/status-indicator.soy' */
// This file was automatically generated from status-indicator.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.CollaborativeEditor.StatusIndicator.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.CollaborativeEditor == 'undefined') { Confluence.Templates.CollaborativeEditor = {}; }
if (typeof Confluence.Templates.CollaborativeEditor.StatusIndicator == 'undefined') { Confluence.Templates.CollaborativeEditor.StatusIndicator = {}; }


Confluence.Templates.CollaborativeEditor.StatusIndicator.container = function(opt_data, opt_ignored) {
  return '<div class="synchrony-status-indicator"><div class="status-indicator-icon aui-icon aui-icon-small' + ((opt_data.error) ? ' aui-iconfont-warning' : (opt_data.saving) ? ' aui-iconfont-devtools-task-in-progress' : ' aui-iconfont-approve') + '" data-tooltip="' + soy.$$escapeHtml(opt_data.tooltipMessage) + '"></div><div class="status-indicator-message" data-tooltip="' + soy.$$escapeHtml(opt_data.tooltipMessage) + '">' + soy.$$escapeHtml(opt_data.statusMessage) + '</div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.CollaborativeEditor.StatusIndicator.container.soyTemplateName = 'Confluence.Templates.CollaborativeEditor.StatusIndicator.container';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/js/status-indicator-view.js' */
define("confluence-collaborative-editor-plugin/status-indicator-view",["confluence/templates","backbone","ajs","jquery","underscore"],function(f,g,c,h,d){return g.View.extend({initialize:function(){this.$el.addClass("synchrony");this.listenTo(this.model,"change:saving change:error",this.render);this.model.set("confluenceUnreachable",!1);this.model.set("synchronyUnreachable",!1);this.model.set("tokenExpired",!1);c.bind("rte.heartbeat",d.bind(this.onConfluenceConnectedState,this));c.bind("rte.safe-save.error",
d.bind(this._errorPublishing,this));c.bind("rte.preview.error",d.bind(this._errorPublishing,this));this.model.set("connecting",!0);this._setProgressState()},render:function(){this.$el.html(f.CollaborativeEditor.StatusIndicator.container(this.model.attributes))},onConnectedState:function(a){this.model.set("synchronyUnreachable",!1);if(!this.model.has("synchronyEntity")){this.model.set("synchronyEntity",a);var b=this;this.model.get("synchronyEntity").on("update",function(e){b._handleSynchronyUpdateEvent(e,
b)});this.model.get("synchronyEntity").on("ack",function(e){b._handleSynchronyAckEvent(e,b)})}this._setSavedState()},onDisconnectedState:function(){this.model.set("synchronyUnreachable",!0);this.model.set("connecting",!0);this._setErrorState()},onConfluenceConnectedState:function(){this.model.get("confluenceUnreachable")&&(this.model.set("confluenceUnreachable",!1),this._setSavedState())},onConfluenceDisconnectedState:function(){this.model.set("confluenceUnreachable",!0);this.model.set("connecting",
!0);this._setErrorState()},onTokenRenewedState:function(){this.model.get("tokenExpired")&&(this.model.set("tokenExpired",!1),this._setSavedState())},onTokenExpiredState:function(){this.model.set("tokenExpired",!0);this.model.set("connecting",!0);this._setErrorState()},_handleSynchronyUpdateEvent:function(a,b){"local"===a.updateType&&(b.model.set("pendingChanges",!0),b._saving())},_handleSynchronyAckEvent:function(a,b){a=0<a.pending.length;b.model.set("pendingChanges",a);a||b.model.set("lastSavedTime",
(new Date).getTime())},_saving:function(){var a=this,b=function(){setTimeout(function(){a.model.get("pendingChanges")||(new Date).getTime()-a.model.get("lastSavedTime")<a.model.get("minActiveTime")?b():a._setSavedState()},a.model.get("minActiveTime"))};this.model.get("saving")||(this.model.set("connecting",!1),this._setProgressState(),b())},_reachable:function(){return!this.model.get("confluenceUnreachable")&&!this.model.get("synchronyUnreachable")&&!this.model.get("tokenExpired")},_errorPublishing:function(a,
b){switch(b.status){case 0:this.onConfluenceDisconnectedState();break;case 500:case 503:this.onConfluenceDisconnectedState()}},_setSavedState:function(){this._reachable()&&"READ_ONLY"!==c.Meta.get("access-mode")?(this.model.set("statusMessage",this.model.get("connecting")?"Ready to go":"Changes saved"),this.model.set("isReadyToGo",!!this.model.get("connecting")),this.model.set("tooltipMessage","We\u0027re automatically saving all of your changes in a draft."),this.model.set("connecting",
!1),this.model.set("saving",!1),this.model.set("error",!1)):this._setErrorState()},_setErrorState:function(){var a="READ_ONLY"!==c.Meta.get("access-mode");this.model.set("statusMessage","Can\u0027t save changes");this.model.set("tooltipMessage",a?"Can\u0027t reach the server. Check your internet connection, and we\u0027ll keep trying to reconnect you.":"This site is read-only. You can\u0027t make changes right now.");this.model.set("saving",!1);this.model.set("error",!0)},_setProgressState:function(){this._reachable()?(this.model.set("statusMessage",
this.model.get("connecting")?"Connecting...":"Saving changes"),this.model.set("tooltipMessage","We\u0027re automatically saving all of your changes in a draft."),this.model.set("saving",!0),this.model.set("error",!1)):this._setErrorState()}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/js/initialise-metrics.js' */
define("collaborative-editing-initialise-metrics-collection",["confluence/legacy"],function(a){return function(){var b={"confluence.editor":!0,"confluence.editor.preload":!0,"confluence.editor.quick.fetchContent":!0,"confluence.editor.tinymce":!0,"confluence.editor.synchrony":!0,"confluence.editor.synchrony.CR":!0,"confluence.editor.synchrony.connect":!0,"confluence.editor.synchrony.deps":!0,"confluence.editor.synchrony.init":!0,"confluence.editor.synchrony.jsLoad":!0,"confluence.editor.synchrony.snapshot":!0,
"confluence.editor.synchrony.unmarshal":!0},c={"confluence.editor.synchrony.connect":!0};a.registerPerformanceSession&&a.registerPerformanceSession("confluence.editor.quickedit.loading.times",b,c)}});require("confluence/module-exporter").safeRequire("collaborative-editing-initialise-metrics-collection",function(a){a()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/js/lib/SyncManager.js' */
define("confluence-collaborative-editor-plugin/lib/SyncManager",["ajs","jquery"],function(e,f){var h=["id"],k={START_SYNCHRONIZING_EVENT_NAME:"start",STOP_SYNCHRONIZING_EVENT_NAME:"stop",MAX_CONSECUTIVE_AUTO_RECOVERY_TRIGGERED:10,MAX_WAIT_TIME_TO_RESTART:3E4,DEBUG_MODE:!1},l=function(a){return h.every(function(b){return"undefined"!==typeof a[b]})},c=function(a,b){this.entity=a;this.settings=f.extend({},k,b||{});this.controlSyncState={};this.recoveryTimeoutTasks={};a=function(d,m,g){l(g)?d(g):this.displayLogMessage("Invalid payload, missing required params",
m,g)};e.bind("synchrony."+this.settings.START_SYNCHRONIZING_EVENT_NAME,a.bind(this,this.enableSynchronization.bind(this)));e.bind("synchrony."+this.settings.STOP_SYNCHRONIZING_EVENT_NAME,a.bind(this,this.disableSynchronization.bind(this)))};c.prototype.getOrCreateControlSyncState=function(a){return this.controlSyncState[a]=this.controlSyncState[a]||{DISABLED_SYNC_STATUS:!1,RECOVERY_TIMER_RUNNING:!1,CONSECUTIVE_AUTO_RECOVERY_TRIGGERED:0}};c.prototype.enableDebug=function(a){this.settings.DEBUG_MODE=
"undefined"!==typeof a?a:!0};c.prototype.displayLogMessage=function(){if(this.settings.DEBUG_MODE){var a=Array.prototype.slice.call(arguments);a.splice(0,0,"DEBUG: "+(new Date).toLocaleTimeString());console.log.apply(console,a)}};c.prototype.disableSynchronization=function(a){var b=a.id;this.getOrCreateControlSyncState(b).DISABLED_SYNC_STATUS=!0;this.clearAutoRecoveryTimer(b);this.setAutoRecoveryTimer(a);this.entity.stop(b);this.displayLogMessage("Stoping entity synchronization",b,f.extend(!0,{},
this.controlSyncState))};c.prototype.enableSynchronization=function(a){a=a.id;this.getOrCreateControlSyncState(a).DISABLED_SYNC_STATUS=!1;this.clearAutoRecoveryTimer(a);this.entity.start(a);this.displayLogMessage("Starting entity synchronization",a,f.extend(!0,{},this.controlSyncState))};c.prototype.clearAutoRecoveryTimer=function(a){var b=this.getOrCreateControlSyncState(a);clearTimeout(this.recoveryTimeoutTasks[a]);delete this.recoveryTimeoutTasks[a];b.RECOVERY_TIMER_RUNNING=!1};c.prototype.setAutoRecoveryTimer=
function(a){var b=a.id,d=this.getOrCreateControlSyncState(b);d.RECOVERY_TIMER_RUNNING=!0;this.recoveryTimeoutTasks[b]=setTimeout(function(){this.displayLogMessage("Auto recovery has been triggered",b);this.clearAutoRecoveryTimer(b);d.DISABLED_SYNC_STATUS=!1;d.RECOVERY_TIMER_RUNNING=!1;d.CONSECUTIVE_AUTO_RECOVERY_TRIGGERED++;e.trigger("analyticsEvent",{name:"confluence.synchrony.syncmanager.failed-to-restart",data:{id:b}});d.CONSECUTIVE_AUTO_RECOVERY_TRIGGERED>=this.settings.MAX_CONSECUTIVE_AUTO_RECOVERY_TRIGGERED&&
(this.displayLogMessage("Auto recovery has been triggered too many times for the same action",b,this.controlSyncState[b].CONSECUTIVE_AUTO_RECOVERY_TRIGGERED),e.trigger("analyticsEvent",{name:"confluence.synchrony.syncmanager.consecutive-failed-to-restart",data:{id:b}}));this.entity.start(b)}.bind(this),a.maxWaitTimeToRestart||this.settings.MAX_WAIT_TIME_TO_RESTART)};return c});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/js/telepointer-cleaner.js' */
define("confluence-collaborative-editor-plugin/telepointer-cleaner",["confluence-editor-reliable-save/reliable-save","jquery"],function(b,c){b.registerCleanupFunction(function(d){var a=c("\x3cdiv\x3e");a.append(d);a.find(".synchrony-container, .synchrony-tp").remove();return a.html()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/js/editor-blanket.js' */
define("confluence-collaborative-editor-plugin/editor-blanket",["ajs","jquery","confluence/meta","confluence-editor/support/atlassian-editor-support"],function(l,a,m,h){var c,d;function f(b){switch(b){case "block":c="editor-block";d="aria-disabled";e="";break;default:c="editor-loading editor-loading-spinner",d="aria-busy",e="editor-loading"}b=a("#editpageform, #createpageform");b.addClass(c);b.attr(d,!0);a("#content-title").attr("tabindex",-1);a("#wysiwygTextarea_ifr").attr("tabindex",-1);a(".aui-toolbar2-primary").addClass(e)}
function k(){var b=a("#editpageform, #createpageform");b.removeClass(c);b.attr(d,!1);a("#rte").css("opacity",1).addClass("editor-blanket-ease-in");a("#content-title").attr("tabindex",0);a("#wysiwygTextarea_ifr").attr("tabindex",0);a("#content-title-div").css("opacity",1).addClass("editor-blanket-ease-in");a(".aui-toolbar2-primary").removeClass(e);e=d=c=void 0}function g(){a("#rte").css("opacity",1);a("#content-title-div").css("opacity",1)}var e=d=c=void 0;return{applyBlanket:function(b){h.isCollaborativeContentType()&&
"pending"===b.state()?(f(),b.done(k)):g()},showEditor:g,showBlanket:f}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/js/synchrony-auth.js' */
define("confluence-collaborative-editor-plugin/synchrony-auth",["jquery","ajs","confluence/meta","confluence/legacy","confluence-collaborative-editor-plugin/synchrony-util"],function(l,d,m,n,f){function p(c,a){f.time("confluence.editor.synchrony.token");var b=a&&a.errorType?"?errorType\x3d"+a.errorType:"";l.ajax({dataType:"json",method:"GET",url:encodeURI(d.contextPath()+"/rest/synchrony/1.0/token/"+n.getContentId()+"/generate"+b)}).done(function(g){m.set("synchrony-token",g.synchronyToken);m.set("synchrony-expiry",
g.synchronyExpiry);h=0;c.resolve(g.synchronyToken);e&&(e.onConfluenceConnectedState(),e.onTokenRenewedState());d.trigger("dismiss.editor.error.message",{messageKey:"synchrony-token-expired",enablePublish:!0});d.debug("Synchrony JWT token updated.");f.timeEnd("confluence.editor.synchrony.token")}).fail(function(){h++;10<=h&&d.trigger("editor.error.message",{messageKey:"synchrony-token-expired",message:"We couldn\u0027t process your request, as it was missing a required security token. Copy your work, then re-submit the form or reload the page.",disablePublish:!0});e&&(e.onConfluenceDisconnectedState(),
e.onTokenExpiredState());d.log(a?a.message:"Confluence failed to renew JWT token.");c.reject("token")})}function k(c){var a=l.Deferred(),b;if(b=!c)b=parseInt(f.retrieveMetadata("synchrony-expiry")),b=isNaN(b)?!1:b>Date.now()/1E3;b?a.resolve(f.retrieveMetadata("synchrony-token")):(d.log("["+new Date+"] Synchrony JWT expired or invalid, retrieving new token."),p(a,c));return a.promise()}var e,h=0;return{init:function(c){e=c},performRequest:function(c){return k().pipe(c).pipe(function(a){var b="error"===
a[1]&&a[0].responseText?JSON.parse(a[0].responseText):a[0];return"error"===a[1]&&b.type&&b.type.match(/^jwt\//)?k({errorType:b.type,message:b.message}).pipe(c):a})},getTokenPromise:k}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/js/unsupported-extension.js' */
define("confluence-collaborative-editor-plugin/unsupported-extension","ajs jquery confluence/legacy confluence-editor/editor/page-editor-message window confluence-collaborative-editor-plugin/editor-blanket".split(" "),function(a,c,d,e,f,g){function h(){var b=a.Rte.getEditor().getBody();b.hasAttribute("data-gramm")&&b.hasAttribute("data-gramm_id")&&(a.trigger("synchrony.stop",{id:"confluence.editor.block.by.grammarly",maxWaitTimeToRestart:31536E6}),a.trigger("analyticsEvent",{name:"confluence.synchrony.editor.grammarly.block"}),
b.setAttribute("contentEditable",!1),c(b).find(".contentLayout2 .innerCell").each(function(){this.setAttribute("contentEditable",!1)}),g.showBlanket("block"),d.Editor.UI.setButtonsState(!1,d.Editor.UI.buttons),e.handleMessage("collaborative-editor-unsupported-extension",{type:"error",title:"Grammarly isn\u0027t supported",message:a.format("The Grammarly extension doesn\u0027\u0027t play well with collaborative editing. Disable it and \u003ca {0}\u003ereload the page\u003c/a\u003e to keep working.",'href\x3d"#" id\x3d"collabGrammarlyReload"')}),c("#collabGrammarlyReload").click(function(){a.trigger("analyticsEvent",
{name:"confluence.synchrony.editor.grammarly.reload.click"});f.location.reload();return!1}),a.trigger("synchrony-unsupported-extension"))}return{check:function(){h()}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/js/synchrony-entity.js' */
define("confluence-collaborative-editor-plugin/synchrony-entity","jquery ajs confluence-collaborative-editor-plugin/synchrony-auth confluence-collaborative-editor-plugin/synchrony-util confluence-collaborative-editor-plugin/unsupported-extension confluence-collaborative-editor-plugin/util/is-valid-uri".split(" "),function(f,h,q,k,r,t){function l(c){return function(d){return null===d||c.test(d)}}function p(c){var d=l(/^[\w\.\-\+%]+$/i),e=l(/^[\w-]+$/),g=l(/^data:image\/png;base64,([\w+\/%\-]+)=*$/),
a=c.whitelists.tinymce.attributes.src;return f.extend({},c.whitelists.tinymce,{styles:f.extend({},c.whitelists.tinymce.styles,{"padding-top":!1,"padding-right":!1,"padding-bottom":!1,"padding-left":!1,padding:!1,display:d,"list-style-type":d}),attributes:f.extend({},c.whitelists.tinymce.attributes,{"confluence-query-params":!0,"data-element-title":!0,"data-ref":!0,accesskey:!0,datetime:!0,"data-anchor":!0,"data-encoded-xml":!0,"data-highlight-class":!0,"data-highlight-colour":!0,"data-space-key":!0,
"data-username":!0,"data-emoticon-name":e,"data-emoji-id":!0,"data-hipchat-emoticon":!0,"data-entity-id":!0,"data-entity-type":!0,"data-favourites-bound":!0,"data-macro-id":!0,"data-macro-name":!0,"data-macro-schema-version":!0,"data-macro-body-type":!0,"data-macro-parameters":!0,"data-macro-default-parameter":!0,"data-atlassian-layout":!0,"data-placeholder-type":!0,"data-layout":!0,"data-title":!0,"data-type":!0,"data-inline-task-id":!0,"data-inline-tasks-content-id":!0,"data-base-url":!0,"data-linked-resource-id":!0,
"data-linked-resource-type":!0,"data-linked-resource-version":!0,"data-linked-resource-default-alias":!0,"data-linked-resource-container-version":!0,"data-linked-resource-content-type":!0,"data-unresolved-comment-count":!0,"data-location":!0,"data-image-height":!0,"data-image-width":!0,"data-attachment-copy":!0,"data-content-title":!0,"data-snooker-locked-cols":!0,"data-snooker-col-series":!0,"data-mce-resize":!0,"data-filename":!0,username:!0,src:function(b){return g(b)||a(b)},href:t,role:!0,tabindex:!0,
"aria-haspopup":!0,"aria-label":!0}),classes:function(b){switch(b){case "mceSelected":case "active-resizable":case "valid":case "active":return!1;default:return!0}},elements:f.extend({},c.whitelists.tinymce.elements,{time:!0,mark:!0,label:!0,form:!0}),elementsByClass:f.extend({},c.whitelists.tinymce.elementsByClass,{"mce-pastebin":!1})})}function u(c,d,e){var g=p(c);return{profile:"tinymce",selectionCorrections:!1,telepointer:{refreshOnResize:!0,label:{hover:!0,movement:1E3,text:function(a){try{return(a.fullname||
"Anonymous").charAt(0).toUpperCase()}catch(b){h.log(b)}return"\x26#9786;"}}},tinymce:{monkeyPatchUndoManager:!0,instance:d},whitelist:function(a){var b=a.domNode,m="node"===a.type,n="attribute"===a.type&&"data-title"===a.name;if(b===e)return m||n;m=b&&b.classList.contains("numberingColumn")&&("TD"===b.nodeName||"TH"===b.nodeName);n=!!b&&b.hasAttribute("data-hipchat-emoticon");if("attribute"===a.type&&"contenteditable"===a.name&&(m||n))return!0;if(a.name&&a.name.includes("mce-visual-caret")&&
"class"===a.type&&b){const {classList:v,attributes:w,nodeName:x}=b||{};if(v.contains("mce-visual-caret")&&"all"===w["data-mce-bogus"].value&&"DIV"===x)return!1}return c.isWhitelisted(g,a)},domReadHook:function(){h.trigger("cursor-target-refresh");r.check()}}}return{bind:function(c,d,e,g,a){return c.entity({url:k.getServiceUrl(),entityId:k.getEntityId(),jwt:q.getTokenPromise,initRev:a.confRev,history:g,presence:!0,useFallback:k.getXhrFallbackFlag()}).bind(e,u(c,d,e))},makeWhitelist:p}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/js/util/url-parser.js' */
define("confluence-collaborative-editor-plugin/util/url-parser",["window"],function(b){return{parseUrl:function(c){var a=b.document.createElement("a");a.href=c;return{protocol:a.protocol.replace(":",""),hostname:a.hostname,port:a.port,pathname:"/"===a.pathname?"":a.pathname,search:a.search,hash:a.hash.substr(a.hash.indexOf("#")+1,a.hash.length),host:a.host}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/js/util/location-provider.js' */
define("confluence-collaborative-editor-plugin/util/location-provider",["window"],function(a){return{getLocation:function(){return a.location}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/js/util/editor-format-fixer.js' */
define("confluence-collaborative-editor-plugin/util/editor-format-fixer",["underscore","confluence/meta","confluence-collaborative-editor-plugin/util/url-parser"],function(q,p,k){var r=function(a){a=a.querySelectorAll("a[data-linked-resource-id][data-linked-resource-type\x3d'userinfo'][userkey]");Array.prototype.forEach.call(a,function(n){n.removeAttribute("data-linked-resource-id")});return a.length};return{fixStaleBaseUrl:function(a){var n=0;for(var l=p.get("base-url"),f=k.parseUrl(l),g=a.querySelectorAll("img[data-base-url]"),
h=0;h<g.length;h++){var b=g[h],c=k.parseUrl(b.attributes["data-base-url"].value);if(!q.isEqual(c,f)){var d=b.attributes.src.value,e=b.attributes["data-image-src"].value.replace(c.pathname,f.pathname);c=d.replace(c.pathname,f.pathname);b.setAttribute("data-base-url",l);b.setAttribute("data-image-src",e);b.setAttribute("src",c);n++}}l=0;f=k.parseUrl(p.get("base-url"));g=a.querySelectorAll("img[data-macro-name\x3d'view-file']");for(h=0;h<g.length;h++)for(b=g[h],e=b.attributes.src.value,c=["/rest/documentConversion/latest/",
"/plugins/servlet/confluence/placeholder/unknown-attachment?"],d=0;d<c.length;d++){var m=e.indexOf(c[d]);-1!=m&&e.substr(0,m)!==f.pathname&&(m=f.pathname+e.substr(m),b.setAttribute("src",m),l++)}f=0;g=p.get("base-url");h=k.parseUrl(g);a=a.querySelectorAll("a[data-base-url][href][data-linked-resource-type\x3d'page'],a[data-base-url][href][data-linked-resource-type\x3d'blogpost'],a[data-base-url][href][data-linked-resource-type\x3d'comment'],a[data-base-url][href][data-linked-resource-type\x3d'space'],a[data-base-url][href][data-linked-resource-type\x3d'attachment'],a[data-base-url][href][data-linked-resource-type\x3d'custom']");
for(b=0;b<a.length;b++)e=a[b],c=k.parseUrl(e.attributes["data-base-url"].value),q.isEqual(c,h)||(d=k.parseUrl(e.attributes.href.value),c=g+d.pathname.replace(c.pathname,"")+d.search+(d.hash?"#"+d.hash:""),e.setAttribute("data-base-url",g),e.setAttribute("href",c),f++);return n+l+f},fixMentions:function(a){return r(a)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/js/synchrony-handlers.js' */
define("confluence-collaborative-editor-plugin/synchrony-handlers","underscore jquery ajs confluence/meta confluence/analytics-support confluence/legacy confluence-editor/editor/page-editor-message confluence-collaborative-editor-plugin/lib/SyncManager confluence-collaborative-editor-plugin/synchrony-util confluence-collaborative-editor-plugin/synchrony-content confluence-collaborative-editor-plugin/synchrony-presence confluence-collaborative-editor-plugin/util/location-provider confluence-collaborative-editor-plugin/util/url-parser confluence-collaborative-editor-plugin/util/editor-format-fixer confluence-collaborative-editor-plugin/editor-blanket confluence/api/event window".split(" "),
function(I,k,f,g,J,p,z,K,l,m,L,M,y,A,N,c,q){function B(a,b){b.contributors&&(C=b.contributors,c.unbind(a,B))}function O(a){w=!0;u.val(a.rev.toString())}function P(a){u.val(a.rev.toString());c.trigger("synchrony.entity.ack",{pendingChanges:0<a.pending.length})}function Q(){v.onDisconnectedState();f.log("Synchrony disconnected!")}function R(a){if("null/no-such-sequence"===a.errorType||"null/entity-evicted"===a.errorType||"hub.error/locked"===a.errorType){c.trigger("analyticsEvent",{name:"confluence.editor.data.evicted.error",
data:{errorType:a.errorType,onLoad:!w,afterReload:null!==q.sessionStorage.getItem(x())}});e.destroy();c.trigger("synchrony.history.evicted");a=null===q.sessionStorage.getItem(x());var b=w?"\u003cb\u003eWe couldnt sync your changes\u003c/b\u003e\u003cbr/\u003eCopy the changes you want to keep, then refresh the page to continue editing.":a?"Reloading this page to get it back in sync.":"\u003cb\u003eIts taking a while to sync this page\u003c/b\u003e\u003cbr/\u003eGive it a minute, then refresh the page to start editing. Contact your Confluence admin if this keeps happening.";c.trigger("editor.error.message",{disablePublish:!0,close:"never",message:b});if(w)v.onDisconnectedState();
else N.showBlanket("block"),a&&(q.sessionStorage.setItem(x(),"false"),q.location.reload());S()}else"fatal"===a.level&&c.trigger("editor.error.message",{disablePublish:!0})}function S(){q.onerror=function(a,b,d,r,t){if(!(b||d||r||t)){if(D)return!0;D=!0}else if(t&&t.message&&"entity destroyed"===t.message)return!0;return!1}}function x(){return"_reload_for_"+g.get("draft-id")}function T(a){l.timeEnd("confluence.editor.synchrony.connect");f.log("Synchrony connected.");L.appendTo(a.sid,e,C);v.onConnectedState(e);
c.trigger("synchrony.connected");m.fixTinymceCaretContainer(n,h);q.sessionStorage.removeItem(x())}function E(a,b,d){return{origin:"synchrony",cause:a,messageKey:b,disablePublish:d}}function U(a){function b(r){r.pending.length||(e.off("ack",b),u.val(r.rev.toString()),d.resolve(a))}var d=k.Deferred();e.ackState().pending.length?(e.on("ack",b),setTimeout(function(){e.off("ack",b);d.reject(E("timeout"))},5E3)):d.resolve(a);return k.when(d,F).promise()}function G(a){return(a=l.getLatestRevisionWithAttr(a.revisions,
"user"))?a.meta.user:"Anonymous"}function V(a){z.handleMessage("editor.synchrony.page-published",{type:"info",message:f.format("{0} published this page.",f.escapeHtml(a)),close:"auto"});c.trigger("analyticsEvent",{name:"confluence.synchrony.external-changes.publish"});c.trigger("editor-shared-drafts-published")}function W(a){if("remote"===a.updateType){u.val(a.revisions[a.revisions.length-1].rev.toString());l.hasRevisionTrigger(a.revisions,"reset")&&(z.handleMessage("editor.synchrony.revert-page",
{type:"info",message:f.format("{0} reverted to a previous version of this page.",f.escapeHtml(G(a)))}),g.set("has-collaborated",!1),H(),c.trigger("analyticsEvent",{name:"confluence.synchrony.external-changes.revert"}),c.trigger("editor-shared-drafts-discarded"),p.Editor.heartbeat());l.hasRevisionTrigger(a.revisions,"publish")&&(m.isUnpublished()&&(g.set("new-page",!1),g.set("page-id",p.getContentId()),g.set("draft-id","0"),p.Editor.isLimitedModeEnabled()||p.Editor.UI.setButtonState(!0,k("#rte-button-discard"))),
g.set("has-collaborated",!1),H(),V(G(a)),p.Editor.heartbeat());l.hasRevisionType(a.revisions,"external")&&c.trigger("editor.external.change");var b=l.getLatestRevisionWithAttr(a.revisions,"confVersion");b&&b.meta.confVersion&&(k('meta[name\x3d"page-version"]').attr("content",b.meta.confVersion),k('meta[name\x3d"ajs-page-version"]').attr("content",b.meta.confVersion),g.set("page-version",b.meta.confVersion))}setTimeout(function(){if("init"===a.updateType||"remote"===a.updateType)c.trigger("editor.remote.change"),
m.readTitleFromRootElement(n);"init"==a.updateType&&(X(M.getLocation())?h.undoManager.ignore(function(){var d=A.fixStaleBaseUrl(n);0<d&&J.publish("collab.edit.format.stale.fix.count",{staleformatfixed:d})}):f.log("Request url does not match the configured base url. Not performing fixStaleBaseUrl()."),h.undoManager.ignore(function(){A.fixMentions(n)}));m.fixTinymceCaretContainer(n,h);"local"===a.updateType&&(h.undoManager.hasUndo()||h.setDirty(!1),c.trigger("editor.local.change"))},0)}function H(){0===
e.ackState().pending.length&&h.setDirty(!1)}function X(a){var b=g.get("context-path"),d=y.parseUrl(g.get("base-url"));a=y.parseUrl(a);b=y.parseUrl(a.protocol+"://"+a.host+b);return I.isEqual(d,b)}var u,v,h,n,e,F,C=[],w=!1,D=!1;c.bind("editor-heartbeat",B);return{handle:function(a,b,d,r){l.time("confluence.editor.synchrony.connect");e=a;h=b;v=d;F=r.pipe(null,function(t){e.destroy();v.onDisconnectedState();return E(t,"collaborative-editor-load-failure",!0)});u=k("#syncRev");n=h.getBody();e.on("init",
O).on("update",W).on("ack",P).on("connected",T).on("disconnected",Q).on("error",R);new K(e,{DEBUG_MODE:!0});m.bindPostPasteFix();m.readTitleFromRootElement(n);p.Editor.overrideBeforeSave(U);k("#content-title").keyup(m.writeTitleToRootElement)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources', location = '/js/synchrony-editor.js' */
define("confluence-collaborative-editor-plugin/synchrony-editor","window jquery ajs confluence/legacy confluence-collaborative-editor-plugin/editor-blanket confluence-collaborative-editor-plugin/synchrony-util confluence-collaborative-editor-plugin/synchrony-content confluence-collaborative-editor-plugin/synchrony-auth confluence-collaborative-editor-plugin/synchrony-entity confluence-collaborative-editor-plugin/synchrony-handlers confluence-editor/support/atlassian-editor-support confluence-editor/loader/collaborative-helper".split(" "),
function(t,g,d,p,I,f,y,H,J,T,U,V){function z(a){g('meta[name\x3d"ajs-collaborative-editor-status"]').attr("content",a)}function W(){return!d.Rte.isQuickEdit}function X(){var a=g.Deferred();d.$(function(){d.$("body").addClass("synchrony-active");A=new (require("confluence-collaborative-editor-plugin/status-indicator-view"))({el:"#pluggable-status",model:new Backbone.Model({minActiveTime:500})});H.init(A);a.resolve()});return a}function B(a){if(!0!==K){switch(a){case "timeout":a="The editor didn\u0027t load this time";
var b="The connection timed out. If it happens again, speak to your Confluence admin. You may be using a proxy server that prevents WebSocket connections.\u003c/br\u003e\u003ca href=\u0022#\u0022 id=\u0022websocketRetry\u0022\u003eTry again\u003c/a\u003e&nbsp;.&nbsp;\u003ca href=\u0022https://confluence.atlassian.com/display/CONFKB/Confluence+throws+The+editor+didn%27t+load+this+time+error+when+trying+to+edit+a+page\u0022 target=\u0022_blank\u0022 id=\u0022websocketFindmore\u0022\u003eFind out more\u003c/a\u003e";break;case "synchrony-requests":C=!0;a="";b="Something went wrong after loading the editor. Copy your unsaved changes and refresh the page to keep editing.";break;case "limited-mode":C=!0;a="";b="Something went wrong while loading the editor, please try again.";break;default:C=!0,a="",b="This page is taking longer to load than usual. Give it a few moments, then try refreshing. Still having issues? Contact your Confluence admin."}d.trigger("editor.error.message",{title:a,messageKey:"collaborative-editor-load-failure",message:b,disablePublish:!0,close:"manual"})}}
function L(){d.trigger("dismiss.editor.error.message",{messageKey:"collaborative-editor-load-failure",enablePublish:!0})}function M(a,b){var c=g.Deferred();a.done(function(){f.timeEnd(b)},c.resolve);a.fail(c.resolve);return c.promise()}function N(a,b){var c="error"===b[1]&&b[0].responseText?JSON.parse(b[0].responseText):"",e=!1;"invalid-ancestor"===c.type?e="synchrony":"out-of-order-revision"===c.type&&(e="confluence");return e?(d.log("Performing synchrony recovery"),g.ajax({url:d.contextPath()+"/rest/synchrony/1.0/content/"+
p.getContentId()+"/recovery?behind\x3d"+e+"\x26conflictingRev\x3d"+c["conflicting-rev"],type:"PUT"}),"synchrony-requests"):"success"!==b[1]&&"success"!==a[1]||"success"!==b[1]&&"duplicate-mismatch"!==c.type?(d.trigger("analyticsEvent",{name:"confluence.synchrony.client.content.reconciliation.failure",data:{type:c.type,contentId:p.getContentId()}}),"synchrony-requests"):!1}function O(a){return H.performRequest(function(b){f.time("confluence.editor.synchrony.snapshot");return M(g.ajax({type:"POST",
url:encodeURI(f.getServiceUrl()+"/data"+f.getEntityId()+"?state-at\x3d@head\x26state-format\x3dtype-tagged\x26rewrite-request\x3dtrue\x26cached\x3d"+a),contentType:"text/plain",dataType:"json",data:JSON.stringify({headers:{"content-type":"application/json","x-token":b},method:"GET"})}).pipe(f.asArray,f.asArray),"confluence.editor.synchrony.snapshot")})}function Y(a){return a.syncRev||!y.isUnpublished()||0!==a.raw.length&&!/^\s+$/.test(a.raw)?y.isContentEmpty(a.raw)?(d.trigger("analyticsEvent",{name:"confluence.synchrony.client.content.reconciliation.blank-content",
data:{contentId:p.getContentId()}}),g.Deferred().resolve([{},"success"])):H.performRequest(function(b){f.time("confluence.editor.synchrony.CR");return M(g.ajax({type:"POST",url:encodeURI(f.getServiceUrl()+"/data"+f.getEntityId()+"?optimistic\x3dtrue\x26rewrite-request\x3dtrue"),dataType:"json",contentType:"text/plain",data:JSON.stringify({body:{ancestor:a.syncRev,rev:a.confRev,state:{format:"html",value:a.html},merges:{master:{meta:{type:"client-reconciliation"}}}},headers:{"content-type":"application/json",
"x-token":b},method:"PUT"})}).pipe(f.asArray,f.asArray),"confluence.editor.synchrony.CR")}):g.Deferred().resolve([{},"success"])}function Z(a){f.time("confluence.editor.synchrony");g.when(Date.now(),a).pipe(function(b){z("on");var c=Date.now();d.trigger("analyticsEvent",{name:"confluence.synchrony.editor.loaded",data:{durationMillis:c-b,contentId:p.getContentId()}});d.trigger("rte-collab-ready");f.timeEnd("confluence.editor.synchrony");f.timeEnd("confluence.editor")})}function aa(){var a=D("synchrony.connected synchrony.connected.fake");
D("synchrony.connected synchrony.connected.fake synchrony-unsupported-extension",3E4).fail(function(b){B(b);d.trigger("analyticsEvent",{name:"confluence.synchrony.editor.load.timeout",data:{contentId:p.getContentId()}});ba();P=!0;a.done(function(){C||(Q=!0,L())})})}function ca(a,b,c){var e=m._initialiseSynchrony(),l=D("synchrony.connected.fake"),h=D(null);b.pipe(function(){setTimeout(h.reject,3E4,"synchrony-requests")});var q=m._initialiseCollabEditingComponents(h),r=Date.now(),u=null,E=null;d.DarkFeatures.isEnabled("synchrony-pessimistic-snapshot")||
(u=e.pipe(function(){return O(!0)}),u.done(function(k){E=k[1]}));var v=g.when(a,e).pipe(function(){return!u||"rejected"===u.state()||"error"===E||6E5<Date.now()-r?O(!1):u});c.pipe(function(){aa();Z(l);I.applyBlanket(l)});b.pipe(function(k){var F=e.pipe(function(){return Y(k)});v=g.when(v,e).pipe(function(n,w){f.time("confluence.editor.synchrony.unmarshal");var R=n;"success"===n[1]&&(R=[{stateAt:n[0].stateAt,state:w.unmarshal(n[0].state.value)},n[1]]);f.timeEnd("confluence.editor.synchrony.unmarshal");
return R});g.when(v,F).pipe(function(n,w){(n=N(n,w))?h.reject(n):h.resolve()});return d.DarkFeatures.isEnabled("synchrony-pessimistic-CR")||"synchrony-ack"!==k.syncRevSource&&!y.isUnpublished()?g.when(k,c,v,F,q):(d.debug("confluence.editor.synchrony: content up to date, not waiting for CR"),h.fail(B),g.when(k,c,v,[{},"success"],q))}).pipe(function(k,F,n,w){if(!m._bindEditor(k,F,n,w,h))return d.trigger("analyticsEvent",{name:"confluence.synchrony.bind.failure",data:{contentId:p.getContentId()}}),g.Deferred().reject("editor-binding-failed");
l.resolve()}).fail(function(k){c.always(function(){"synchrony-not-enabled"!==k&&(d.log("Failed to load the collaborative editor",k),B(k),d.$(function(){A.onDisconnectedState()}),z("failed"),d.trigger("analyticsEvent",{name:"confluence.synchrony.error",data:{error:k,contentId:p.getContentId()}}))})})}function D(a,b,c){var e=g.Deferred();a&&d.bind(a,function r(h,q){d.debug("confluence.editor.synchrony.event: "+h.type+"."+h.namespace);d.unbind(a,r);e.resolve(q)});b&&setTimeout(e.reject,b,c||"timeout");
return e}function x(a,b,c,e,l){var h=l||g.Deferred();if(f.isEditorInitialised()||b&&f.synchronyReady())return S(h,c);d.bind(a,function E(r,u){d.debug("confluence.editor.event "+r.type+"."+r.namespace);h.always(function(){d.unbind(a,E)});S(h,c,u,e)});return h}function S(a,b,c,e){return f.synchronyReady()?!e||e()?(b=b?b(c):c)&&b.error?a.reject(b.error):a.resolve(b):a:a.reject("synchrony-not-enabled")}function ba(){g("#websocketRetry").on("click",function(){d.trigger("analyticsEvent",{name:"confluence.synchrony.editor.websocket.retry.click"});
t.location.reload();return!1});g("#websocketFindmore").on("click",function(){d.trigger("analyticsEvent",{name:"confluence.synchrony.editor.websocket.findmore.click"})})}var m={};f.time("confluence.editor.synchrony.jsLoad");var A,C=!1,K=!1,Q=!1,P=!1,G;g(t).bind("beforeunload",function(){Q||d.trigger("analyticsEvent",{name:"confluence.synchrony.exit.before.connecting",data:{afterTimeout:P,contentId:p.getContentId()}})});d.bind("synchrony.history.evicted",function(a){K=!0});m._bindEditor=function(a,
b,c,e,l){f.time("confluence.editor.synchrony.init");if(N(c,e))return null;e=g("#syncRev");var h=null;"success"===c[1]&&(c=c[0],h={base:{rev:Synchrony.rev(c.stateAt),state:c.state}},e.val(h.base.rev.toString()));d.log("Synchrony will load with contentId: ",p.getContentId());try{var q=b.getBody();q.setAttribute("data-title",a.title);G=J.bind(Synchrony,b,q,h,a);T.handle(G,b,A,l);d.trigger("editor.remote.change");b.setDirty(!1);f.timeEnd("confluence.editor.synchrony.init");return G}catch(r){return d.logError(r),
null}};m._initialiseCollabEditingComponents=function(a){var b=X();g(t).one("synchrony.connected.fake",function(c){"connected.fake"===c.namespace&&(b.resolve(),a.resolve(),L(),z("fake"))});return b};m._initialiseSynchrony=function(){f.time("confluence.editor.synchrony.deps");(function(b){var c=b.Synchrony=b.Synchrony||{};if(!c.ready){var e=c._cbs=c._cbs||[];c.ready=function(q){e.push(q)}}var l=function(){1===c.state&&(c.SockJS=b.SockJS,c.init())};if(b.SockJS)c.init&&l();else{var h=b._sockjs_onload;
b._sockjs_onload=function(){l();h&&h.apply(this,arguments)}}})(t);var a=g.Deferred();Synchrony.ready(a.resolve);return g.when(a.promise(),f.loadScript(["/js/vendor/sockjs.min.js","/js/synchrony.min.js"])).pipe(function(b){f.timeEnd("confluence.editor.synchrony.deps");d.log("Synchrony successfully initialised.");return b})};m.init=function(){if(U.isCollaborativeContentType()){var a=x("rte-quick-edit-init rte-collaborative-content-ready rte-initial-raw-content-ready",!0),b=x("rte-quick-edit-init rte-collaborative-content-ready rte-initial-raw-content-ready rte-collab-editor-loaded",
!1),c=x("rte-collaborative-content-ready rte-initial-raw-content-ready",!1,y.getContent),e=x("rte-collab-editor-loaded",!1,d.Rte.getEditor);e=x("rte-ready rte-begin-collab-editing",!1,d.Rte.getEditor,W,e);a.pipe(function(){ca(b.promise(),c.promise(),e.promise())});c.fail(B);d.trigger("synchrony-events-bound");e.fail(function(l){"synchrony-not-enabled"===l&&(I.showEditor(),z("off"),d.log("Synchrony is not available in this context."))})}};m.register=function(){V.registerPlugin(m)};m.getSynchronisedEditorContent=
function(){var a=G.ackState();if(a.rev){var b=Synchrony.makeDom(a.state,{document,whitelist:J.makeWhitelist(Synchrony)});return{content:require("tinymce").activeEditor.serializer.serialize(b),syncRev:a.rev.toString()}}d.logError("Synchrony hasn't acked any data, can't fetch draft data");return null};f.timeEnd("confluence.editor.synchrony.jsLoad");return m});require("confluence/module-exporter").safeRequire("confluence-collaborative-editor-plugin/synchrony-editor",function(t){t.register();t.init()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:trigger', location = '/includes/js/trigger.js' */
define("confluence/trigger",["jquery","window"],function(b,c){return function(a,d){a=new b.Event(a);b(d||c.top.document).trigger(a);return!a.isDefaultPrevented()}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/trigger","AJS.jiraTrigger");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:keyboard', location = '/includes/js/api/keyboard.js' */
define("confluence/api/keyboard",["jquery"],function(f){function b(a,b,c){h[b]=a;i[a]=b;c&&(j[b]=!0);return a}function g(a){a=a.originalEvent||a;return null==a.which?a.keyCode:0!==a.which&&0!==a.charCode?a.which:null}function k(a){var a=a.originalEvent||a,b=e.specialKeyEntered(a);if(b)return b;if(f.browser.mozilla){if("keypress"===a.type&&(a=g(a),null!==a))return String.fromCharCode(a).toLowerCase()}else if("keypress"!==a.type)return String.fromCharCode(a.keyCode).toLowerCase()}var e={},h={},i={},
j={},c=e.SpecialKey={BACKSPACE:b("backspace",8,!0),TAB:b("tab",9,!0),RETURN:b("return",13,!0),SHIFT:b("shift",16),CTRL:b("ctrl",17),ALT:b("alt",18),PAUSE:b("pause",19),CAPS_LOCK:b("capslock",20),ESC:b("esc",27,!0),SPACE:b("space",32,!0),PAGE_UP:b("pageup",33),PAGE_DOWN:b("pagedown",34),END:b("end",35),HOME:b("home",36),LEFT:b("left",37),UP:b("up",38),RIGHT:b("right",39),DOWN:b("down",40),INSERT:b("insert",45),DELETE:b("del",46),F1:b("f1",112),F2:b("f2",113),F3:b("f3",114),F4:b("f4",115),F5:b("f5",
116),F6:b("f6",117),F7:b("f7",118),F8:b("f8",119),F9:b("f9",120),F10:b("f10",121),F11:b("f11",122),F12:b("f12",123),NUMLOCK:b("numlock",144),SCROLL:b("scroll",145),META:b("meta",224)};c.eventType=function(){return f.browser.mozilla?"keypress":"keydown"};c.fromKeyCode=function(a){return h[a]};c.toKeyCode=function(a){return i[a]};c.isAscii=function(a){return!!j[a]};c.isSpecialKey=function(a){return!!c.toKeyCode(a)};e.characterEntered=function(a){a=a.originalEvent||a;if("keypress"===a.type&&(a=g(a),
null!==a&&(!c.isAscii(a)||c.fromKeyCode(a)===c.SPACE)))return String.fromCharCode(a)};e.specialKeyEntered=function(a){a=a.originalEvent||a;if(f.browser.mozilla){if("keypress"===a.type){var b=g(a);if(null===b)return c.fromKeyCode(a.keyCode);if(c.isAscii(b))return c.fromKeyCode(b)}}else if("keypress"!==a.type)return c.fromKeyCode(a.keyCode)};e.shortcutEntered=function(a){a=a.originalEvent||a;if(a.type===e.SpecialKey.eventType()){var b=e.specialKeyEntered(a),d="";a.altKey&&b!==c.ALT&&(d+=c.ALT+"+");
a.ctrlKey&&b!==c.CTRL&&(d+=c.CTRL+"+");a.metaKey&&(!a.ctrlKey&&b!==c.META)&&(d+=c.META+"+");a.shiftKey&&b!==c.SHIFT&&(d+=c.SHIFT+"+");if(b)return d+b;if(0<d.length&&"shift+"!==d&&(a=k(a)))return d+a}};return e});require("confluence/module-exporter").exportModuleAsGlobal("confluence/api/keyboard","AJS.Keyboard");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/class.js' */
define("confluence/class",["jquery"],function(f){var j=function(d){var a=function(){};a.prototype=d;return new a},i=!1,l=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/,k=function(){};k.extend=function(){function d(){!i&&this.init&&this.init.apply(this,arguments)}var a,g=this.prototype;if(1<arguments.length){var c=f.makeArray(arguments);a=c.pop();var h;f.each(c,function(b,a){h=h?h.extend(a):a});return h.extend(this.prototype).extend(a)}a=arguments[0];i=!0;c=new this;i=!1;for(var b in a)if(c[b]="function"===
typeof a[b]&&"function"===typeof g[b]&&l.test(a[b]))c[b]=function(a,b){return function(){var c=this._super;this._super=g[a];var d=b.apply(this,arguments);this._super=c;return d}}(b,a[b]);else if("object"===typeof g[b]){var e=j(a[b]);f.each(g[b],function(a,b){if(e[a]){if("object"===typeof e[a]){var c=j(e[a]);f.each(b,function(a,b){c[a]||(c[a]=b)});e[a]=c}}else e[a]=b});c[b]=e}else c[b]=a[b];d.prototype=c;d.constructor=d;d.extend=arguments.callee;return d};return k});
require("confluence/module-exporter").exportModuleAsGlobal("confluence/class","Class");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/control.js' */
define("confluence/control","confluence/class confluence/trigger confluence/api/logger confluence/api/keyboard jquery document".split(" "),function(k,l,i,g,d,e){return k.extend({INVALID:"INVALID",_throwReadOnlyError:function(a){Error(this.CLASS_SIGNATURE+": Sorry ["+a+"] is a read-only property")},_assignEvents:function(a,b){this._unassignEvents(a,b);if(typeof b==="string")for(var c in this._events[a])d(e).delegate(b,c,this._getDispatcher(a,c));else{b=d(b);for(c in this._events[a]){b.bind(c,this._getDispatcher(a,
c));i.debug("Control bound eventType '"+c+"' for group '"+a+"' on target '"+(b[0].type||b[0])+"'")}}},_unassignEvents:function(a,b){if(typeof b==="string")for(var c in this._events[a])d(e).undelegate(b,c,this._getDispatcher(a,c));else{b=d(b);try{for(c in this._events[a])b.unbind(c,this._getDispatcher(a,c))}catch(g){var f=d._data(b[0],"events");if(f)for(c in f)if(c in this._events[a]){for(var m=this._getDispatcher(a,c),j=f[c],h=0;h<j.length;h++)if(j[h]===m){j.splice(h,1);break}i.debug("Control unbound eventType '"+
c+"' for group '"+a+"' on target '"+(b[0].type||b[0])+"'")}}}},_getDispatcher:function(a,b){var c=a+"/"+b;if(!this._dispatchers)this._dispatchers={};if(!this._dispatchers[c]){var e=this._events[a][b],f=this;this._dispatchers[c]=function(c){i.debug("Control dispatching eventType '"+b+"' for group '"+a+"' on instance '"+f.type+"'");return e.call(f,c,d(this))}}return this._dispatchers[c]},_isValidInput:function(){return true},_handleKeyEvent:function(a){if(this._isValidInput(a)){var b=g.SpecialKey,c=
g.shortcutEntered(a);if(c){if(this.keys[c]){this.keys[c].call(this,a);return}if((c===b.BACKSPACE||c===b.DELETE)&&this.keys.onEdit){this.keys.onEdit.call(this,a);return}}(b=g.characterEntered(a))&&this.keys.onEdit&&this.keys.onEdit.call(this,a,b)}},getCustomEventName:function(a){return(this.CLASS_SIGNATURE||"")+"_"+a},_getCustomEventArgs:function(){return[this]},trigger:function(a){return l(a,this)},_supportsBoxShadow:function(){var a=e.body.style;return a.WebkitBoxShadow!==void 0||a.MozBoxShadow!==
void 0||a.boxShadow!==void 0},_setOptions:function(a){var b,c,a=a||{};if(a instanceof d||typeof a==="string"||typeof a==="object"&&a.nodeName)a={element:a};b=d(a.element);c=b.getOptionsFromAttributes();this.options=d.extend(true,this._getDefaultOptions(a),c,a);if(b.length===0)return this.INVALID},getCaret:function(a){var b=a.selectionStart;if(b>=0)return a.selectionEnd>b?-1:b;if(e.selection){b=e.selection.createRange();if(b.text.length===0){var c=b.duplicate();c.moveToElementText(a);c.setEndPoint("EndToStart",
b);return c.text.length}}return-1},_render:function(){var a,b=arguments[0],c=[];for(a=1;a<arguments.length;a++)c.push(arguments[a]);return this._renders[b].apply(this,c)}})});require("confluence/module-exporter").exportModuleAsGlobal("confluence/control","AJS.Control");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/api/mouse.js' */
define("confluence/api/mouse",["jquery","window"],function(d,e){var b={MotionDetector:function(){this.reset()}};b.MotionDetector.prototype.reset=function(){this._y=this._x=this._handler=null;this.moved=!1};b.MotionDetector.prototype.wait=function(b){var a=this;a._handler||(this.reset(),d(e.top.document).bind("mousemove",a._handler=function(c){!a._x&&!a._y?(a._x=c.pageX,a._y=c.pageY):c.pageX===a._x&&c.pageY===a._y||(a.unbind(),a.moved=!0,b&&b.call(this,c))}))};b.MotionDetector.prototype.unbind=function(){this._handler&&
(d(e.top.document).unbind("mousemove",this._handler),this.reset())};return b});require("confluence/module-exporter").exportModuleAsGlobal("confluence/api/mouse","AJS.Mouse");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/group.js' */
define("confluence/group",["confluence/control","confluence/api/logger","jquery"],function(d,e,c){return d.extend({init:function(){this.type=this.type||"Group";this.items=[];this.index=-1;this._assignEvents("instance",this)},addItem:function(a){this.items.push(a);this._assignEvents("item",a)},removeItem:function(a){var b=c.inArray(a,this.items);if(0>b)throw Error("Group: item ["+a+"] is not a member of this group");a.trigger("blur");b<this.index&&this.index--;this.items.splice(b,1);this._unassignEvents("item",
a)},removeAllItems:function(){for(var a=0;a<this.items.length;a++)this._unassignEvents("item",this.items[a]),this.items[a].trigger("blur");this.index=-1;this.items.length=0;this._unassignEvents("keys",document)},shiftFocus:function(a){e.debug("Group.shiftFocus called with offset: "+a);-1===this.index&&1===a&&(a=0);0<this.items.length&&(a=(Math.max(0,this.index)+this.items.length+a)%this.items.length,this.items[a].trigger("focus"))},prepareForInput:function(){this._assignEvents("keys",document)},_events:{instance:{focus:function(){0!==
this.items.length&&(0>this.index?this.items[0].trigger("focus"):this._assignEvents("keys",document))},blur:function(){0<=this.index?this.items[this.index].trigger("blur"):this._unassignEvents("keys",document)}},keys:{"keydown keypress":function(a){this._handleKeyEvent(a)}},item:{focus:function(a){var b=this.index;this.index=c.inArray(a.target,this.items);0>b?this.trigger("focus"):b!==this.index&&this.items[b].trigger("blur")},blur:function(a){this.index===c.inArray(a.target,this.items)&&(this.index=
-1,this.trigger("blur"))},remove:function(a){this.removeItem(a.target)}}},keys:{}})});require("confluence/module-exporter").exportModuleAsGlobal("confluence/group","AJS.Group");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/select-grid.js' */
define("confluence/select-grid",["ajs","jquery","confluence/templates","confluence/group","confluence/control"],function(g,d,j,e,m){var e=e.extend({init:function(a){this.type=this.type||"SelectGrid";this._super();var b=d(j.SelectGrid.gridOutline()),c=b.find("thead tr");d(a.columns).each(function(a,b){var f=d("<th></th>").addClass(b.getClassName()).text(b.heading);c.append(f)});this.gridContainer=d(a.gridContainer).append(b);this.getRowId=a.getRowId;this.table=b;this.columns=a.columns;this.selectionCallback=
a.selectionCallback;this.body=b.find("tbody");this.body.delegate("a","click",function(a){a.preventDefault()});this.dontShiftFocus=a.dontShiftFocus||function(){}},keys:{up:function(a){this.table.is(":visible")&&!this.dontShiftFocus()&&(this.shiftFocus(-1),a.preventDefault())},down:function(a){this.table.is(":visible")&&!this.dontShiftFocus()&&(this.shiftFocus(1),a.preventDefault())}},_addRow:function(a,b,c,h){d.isFunction(c)&&(h=c,c=!1);c?this.body.prepend(a):this.body.append(a);a=new n({row:a,data:b,
callback:h,getRowId:this.getRowId,selectionCallback:h});this.addItem(a);return a},clear:function(){this.removeAllItems();this.body.children().remove()},_addRows:function(a,b){var c=this,h=[];d(a).each(function(a,f){var g=c.columns,e,i,k,l;e=d("<tr></tr>");d(g).each(function(a,b){i={outerClass:b.getClassName(f)||"",href:b.getHref&&b.getHref(f)||"",innerClass:b.getInnerClass&&b.getInnerClass(f)||"",title:b.getTitle&&b.getTitle(f)||"",text:b.getText(f)||""};k=i.href?"cellWithLink":"cellWithoutLink";
l=j.SelectGrid[k](i);e.append(l)});e.attr("data-id",c.getRowId(f));h.push(c._addRow(e,f,b,c.selectionCallback))});return h},update:function(a){this.clear();!a||!a.length?g.debug("SelectGrid.update called with no data, returning."):(this._addRows(a),this.prepareForInput())},prependAndSelect:function(a,b){!a||!a.length?g.debug("SelectGrid.prependAndSelect called with no data, returning."):this._addRows(a,!0)[b||0].selectRow()},findItem:function(a){for(var b=0;b<this.items.length;b++)if(this.items[b].getRowId()==
a)return this.items[b];g.debug("SelectGrid.findItem didn't find item, returning null.");return null},select:function(a){(a=this.findItem(a))&&a.selectRow()},selectIndex:function(a){a=a||0;this.items[a]?this.items[a].selectRow():g.debug("SelectGrid.selectIndex couldn't select row with index "+a+", not found")},show:function(){this.gridContainer.removeClass("hidden")},hide:function(){this.gridContainer.addClass("hidden")},isVisible:function(){return!this.gridContainer.hasClass("hidden")}}),n=m.extend({init:function(a){this.type=
"SelectableRow";this.$row=d(a.row);this.$row.data("properties",a.data);this.getRowId=function(){return a.getRowId(a.data)};this.selectionCallback=a.selectionCallback;this._assignEvents("element",this.$row);this._assignEvents("instance",this);g.debug("SelectableRow initialized")},_events:{instance:{focus:function(){var a=this.$row;a.addClass("selected");this.selectionCallback(a,a.data("properties"))},blur:function(){this.$row.removeClass("selected")}},element:{click:function(){this.trigger("focus")}}},
selectRow:function(){this.trigger("focus")}});e.Column=function(a){var b=function(b){return b[a.key]};return{key:a.key,heading:a.heading,getClassName:a.getClassName||function(){return a.className||a.key+"-field"},getHref:a.getHref,getInnerClass:a.getInnerClass,getTitle:a.getTitle,getText:a.getText||b}};return e});require("confluence/module-exporter").exportModuleAsGlobal("confluence/select-grid","AJS.SelectGrid");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/select-grid.soy' */
// This file was automatically generated from select-grid.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.SelectGrid.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.SelectGrid == 'undefined') { Confluence.Templates.SelectGrid = {}; }


Confluence.Templates.SelectGrid.gridOutline = function(opt_data, opt_ignored) {
  return '<table class="select-grid aui"><thead><tr class="data-table-header"></tr></thead><tbody></tbody></table>';
};
if (goog.DEBUG) {
  Confluence.Templates.SelectGrid.gridOutline.soyTemplateName = 'Confluence.Templates.SelectGrid.gridOutline';
}


Confluence.Templates.SelectGrid.cellWithLink = function(opt_data, opt_ignored) {
  return '<td class="' + soy.$$escapeHtml(opt_data.outerClass) + '"><a class="' + soy.$$escapeHtml(opt_data.innerClass) + '" href="' + soy.$$escapeHtml(opt_data.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"><span>' + soy.$$escapeHtml(opt_data.text) + '</span></a></td>';
};
if (goog.DEBUG) {
  Confluence.Templates.SelectGrid.cellWithLink.soyTemplateName = 'Confluence.Templates.SelectGrid.cellWithLink';
}


Confluence.Templates.SelectGrid.cellWithoutLink = function(opt_data, opt_ignored) {
  return '<td class="' + soy.$$escapeHtml(opt_data.outerClass) + '"><span class="' + soy.$$escapeHtml(opt_data.innerClass) + '" title="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.text) + '</span></td>';
};
if (goog.DEBUG) {
  Confluence.Templates.SelectGrid.cellWithoutLink.soyTemplateName = 'Confluence.Templates.SelectGrid.cellWithoutLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:jira-controls', location = '/includes/js/result-grid.js' */
define("confluence/result-grid",["ajs","jquery","confluence/control"],function(d,g,l){return l.extend({init:function(a){this.type=this.type||"ResultGrid";var c,f,k,h,j,e,i;f=a.gridContainer||g(a.baseElement).find(".data-table");f.length||d.debug("gridContainer for AJS.ResultGrid not found!");k=function(b){return b.id};c=new d.SelectGrid({gridContainer:f,columns:a.columns,selectionCallback:a.selectionCallback,getRowId:a.getRowId||k,dontShiftFocus:a.dontShiftFocus});e=a.messageHandler||d.MessageHandler({baseElement:g(a.baseElement).find(".message-panel")});
i=a.noResultMessage||"There are no results.";g.extend(this,{update:function(b,a){e.clearMessages();h&&(h(),j.remove(),h=null);c.clear();if(!b||!b.length){c.hide();var m=g.isFunction(i)?i(a):i;e.displayMessages(m);return!1}c.update(b);c.show();return!0},updateAndSelect:function(b,c,a){this.update(b,c)&&this.selectIndex(a)},prependAndSelect:function(b,a){!b||!b.length?d.debug("ResultGrid.prependAndSelect called with no data, returning."):(e.clearMessages(),c.prependAndSelect(b,
a),c.show())},select:function(b){c.select(b)},selectIndex:function(b){c.selectIndex(b)},clear:function(){e.clearMessages();c.hide()},loading:function(){c.show();var b=f.width(),a=f.height();this.clear();if(!h){var d,e;d=b/2-73;e=a/2-73;j=g("<div></div>").addClass("spinner-container").width(b-d).height(a-e).css({"padding-left":d,"padding-top":e}).insertAfter(f);h=Raphael.spinner(j[0],60,"#666")}},isVisible:function(){return c.isVisible()}})}})});
require("confluence/module-exporter").exportModuleAsGlobal("confluence/result-grid","AJS.ResultGrid");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:breadcrumbs-jquery', location = '/includes/js/breadcrumbs-jquery.js' */
define("confluence/breadcrumbs-jquery",["jquery","confluence/templates"],function(e,h){return function(a){var i=this,f=[],b=0,c=a.length-1,d=a[b],j=i.closest(".breadcrumbs-container").width(),g=function(){return i.width()<j};for(f.push(h.Dialog.breadcrumbItem({text:d.title,title:d.title,className:b===c?"last":""}));b++<c;)d=a[b],f.push(h.Dialog.breadcrumbItem({text:d.title,title:d.title,className:b===c?"last":""}));this.html(f.join(""));a=e("li a span",this);a.each(function(a){0!==a&&a!==c&&e(this).shortenUntil(g)});
e(a.get(0)).shortenUntil(g);e(a.get(c)).shortenUntil(g);return this}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/breadcrumbs-jquery","jQuery.fn.renderBreadcrumbs");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:dialog-breadcrumbs', location = '/includes/js/dialog-breadcrumbs.js' */
define("confluence/dialog-breadcrumbs",["ajs","jquery","confluence/meta","confluence/templates"],function(b,d,e,k){var h={},l=function(a,e,f){var g=a.userName?a.userName:a.pageId?a.pageId+":"+a.fileName:a.spaceKey+":"+a.title+":"+a.postingDay+":"+a.fileName;g in h?e(h[g],"success"):d.ajax({type:"GET",dataType:"json",data:a,url:b.contextPath()+"/pages/breadcrumb.action",error:f||function(){},success:function(a,b){if(!a||!a.breadcrumbs)f(a,b);else{for(var c=d.makeArray(a.breadcrumbs);c[0]&&"userinfo"!==
a.type&&/peopledirectory\.action$/.test(c[0].url);)c.shift();"page"===a.type&&(c[1]&&/pages\.action/.test(c[1].url))&&c.splice(1,1);c.type=a.type;h[g]=c;e(c,b)}}})};return{getBreadcrumbsDefault:l,Breadcrumbs:function(a,h){var f=0;return{update:function(g,j){a.html(k.Dialog.breadcrumbLoading());var m=f+=1,c=function(){return m!==f?(b.debug("Breadcrumb response for ",g," is stale, ignoring."),!0):!1};(h||l)(g,function(f,h){if(!c())if("success"!==h||!f)a.html(k.Dialog.breadcrumbError());else{var i=g.spaceKey;
a.renderBreadcrumbs(f);if(!(i=i!==e.get("space-key")))a:{for(i=1;i<f.length;i++)if(f[i].title===e.get("page-title")){i=!1;break a}i=!0}i?(j.clearErrors(),d(j.moveButton).prop("disabled",!1)):(j.error("You cannot move a page to be underneath itself or its children."),d("li:last-child",a).addClass("warning"))}},function(d){c()||(a.html(k.Dialog.breadcrumbError()),404===d.status&&j.error("The specified page was not found."))})}}},getBreadcrumbsLegacy:function(a,e,f){if(!a.id)throw Error("id is a required parameter in 'options'");
if(!a.type)throw Error("type is a required parameter in 'options'");var g=a.id+":"+a.type;g in h?e(h[g],"success"):d.ajax({type:"GET",dataType:"json",data:a,url:b.contextPath()+b.REST.getBaseUrl()+"breadcrumb",error:f||function(){},success:function(a,b){if(!a||!a.breadcrumbs)f(a,b);else{for(var c=d.makeArray(a.breadcrumbs);c[0]&&"userinfo"!==a.type&&/peopledirectory.action$/.test(c[0].url);)c.shift();c.type=a.type;h[g]=c;e(c,b)}}})}}});
require("confluence/module-exporter").safeRequire("confluence/dialog-breadcrumbs",function(b){var d=require("ajs"),e=require("confluence/legacy");d.toInit(function(){d.MoveDialog||(d.MoveDialog={});d.MoveDialog.Breadcrumbs=b.Breadcrumbs;d.MoveDialog.getBreadcrumbs=b.getBreadcrumbsDefault;d.Breadcrumbs={};d.Breadcrumbs.getBreadcrumbs=b.getBreadcrumbsLegacy;e.Dialogs||(e.Dialogs={});e.Dialogs.Breadcrumbs=d.Breadcrumbs;e.Dialogs.Breadcrumbs.getBreadcrumbs=b.getBreadcrumbsLegacy;e.Dialogs.Breadcrumbs.Controller=
b.Breadcrumbs;e.Dialogs.Breadcrumbs.defaultGetBreadcrumbs=b.getBreadcrumbsDefault})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:dialog-breadcrumbs', location = '/includes/soy/dialog-breadcrumbs.soy' */
// This file was automatically generated from dialog-breadcrumbs.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Dialog.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Dialog == 'undefined') { Confluence.Templates.Dialog = {}; }


Confluence.Templates.Dialog.breadcrumbItem = function(opt_data, opt_ignored) {
  return '<li><a class="' + soy.$$escapeHtml(opt_data.className) + '" title="' + soy.$$escapeHtml(opt_data.title) + '" tabindex="-1"><span>' + soy.$$escapeHtml(opt_data.text) + '</span></a></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Dialog.breadcrumbItem.soyTemplateName = 'Confluence.Templates.Dialog.breadcrumbItem';
}


Confluence.Templates.Dialog.breadcrumbLoading = function(opt_data, opt_ignored) {
  return '<li class="loading"><span>' + soy.$$filterNoAutoescape('Loading breadcrumbs...') + '</span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Dialog.breadcrumbLoading.soyTemplateName = 'Confluence.Templates.Dialog.breadcrumbLoading';
}


Confluence.Templates.Dialog.breadcrumbError = function(opt_data, opt_ignored) {
  return '<li class="warning last"><span>' + soy.$$escapeHtml('Error retrieving breadcrumbs.') + '</span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Dialog.breadcrumbError.soyTemplateName = 'Confluence.Templates.Dialog.breadcrumbError';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-location', location = '/includes/js/page-location.js' */
define("confluence/page-location",["ajs","confluence/meta"],function(c,a){var b=null;return{get:function(){return b?b:{spaceName:a.get("space-name"),spaceKey:a.get("space-key"),parentPageTitle:a.get("parent-page-title")}},set:function(a){b=a}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/page-location","Confluence.PageLocation");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.vendors--8cfcf1af69', location = 'aui.chunk.37326f283cafe67a461b--d105dc24c52fe8bfdc86.js' */
(self.webpackChunk_auiRuntime=self.webpackChunk_auiRuntime||[]).push([[9711],{7726:function(t,e,i){var s,a,l;
/*! jQuery Fancy File Input plugin - v2.0.4 - 2018-11-23
* Copyright (c) 2018 Atlassian Pty Ltd; Licensed Apache-2.0 */void 0===(l=this)&&void 0!==window&&(l=window),s=[i(7963)],void 0===(a=function(t){return l.FancyFileInput=function(t){"use strict";var e=/^.*[\\\/]/,i=/\{0\}/gi,s=function(){var t=3,e=document.createElement("div"),i=e.getElementsByTagName("i");do{e.innerHTML="\x3c!--[if gt IE "+ ++t+"]><i></i><![endif]--\x3e"}while(i[0]);return t>4?t:document.documentMode}();function a(e,i){var s=t(e).data("FancyFileInput");if(s)return s;i=t.extend({},a.defaults,i),this.el=e,this.$el=t(e),this.$label=this.createLabel(i.buttonText),this._addLabelText(),this.$clearButton=t("<button>",{text:this.$label.attr("data-ffi-clearButtonText")||i.clearButtonText,class:"ffi-clear",type:"button",tabindex:"-1"}),this.multipleFileTextPattern=this.$label.attr("data-ffi-multipleFileTextPattern")||i.multipleFileTextPattern,this._eventNamespace=".ffi",this.CLASSES={disabled:"is-disabled",focused:"is-focused",active:"is-active",valid:"is-valid",invalid:"is-invalid"},this[this.isDisabled()?"disable":"enable"](),this.isFocused=!1}return a.defaults={buttonText:"Browse…",clearButtonText:"Clear",multipleFileTextPattern:"{0} files"},a.prototype._addLabelText=function(){var e=t('label[for="'+this.el.id+'"]');e.length&&this.$el.attr("aria-label",e.text())},a.prototype.createLabel=function(e){var i=this.$el.parent(".ffi[data-ffi-button-text]");return i.length||(i=this.$el.wrap(t("<label>",{class:"ffi","data-ffi-button-text":e})).parent()),i},a.prototype.isDisabled=function(){return this.$el.is(":disabled")},a.prototype.formatMultipleFileText=function(t){return this.multipleFileTextPattern.replace(i,t)},a.prototype.bindEvents=function(){this.$el.on("invalid"+this._eventNamespace,t.proxy(this.checkValidity,this)).on("change"+this._eventNamespace,t.proxy(this.change,this)).on("keydown"+this._eventNamespace,t.proxy(this.keydown,this)).on("mousedown"+this._eventNamespace,t.proxy(this.mousedown,this)).on("mouseup"+this._eventNamespace,t.proxy(this.mouseup,this)).on("focus"+this._eventNamespace,t.proxy(this.focus,this)).on("blur"+this._eventNamespace,t.proxy(this.blur,this)),this.$clearButton.on("click"+this._eventNamespace,t.proxy(this.clear,this))},a.prototype.unbindEvents=function(){this.$el.off(this._eventNamespace),this.$clearButton.off(this._eventNamespace)},a.prototype.fireEvent=function(t){this.$el.trigger(t+this._eventNamespace)},a.prototype.enable=function(){this.bindEvents(),this.$el.prop("disabled",!1),this.$label.removeClass(this.CLASSES.disabled)},a.prototype.disable=function(){this.unbindEvents(),this.$el.prop("disabled",!0),this.$label.addClass(this.CLASSES.disabled)},a.prototype.clear=function(){return this.$el.wrap("<form>").closest("form").get(0).reset(),this.$el.unwrap(),this.el.value="",this.change(),!1},a.prototype.focus=function(){var t=this;this.$label.addClass(this.CLASSES.focused),s&&!this.isFocused&&(this.isFocused=!0,setTimeout((function(){t.$el.blur(),t.$el.focus()}),0))},a.prototype.blur=function(){s&&this.isFocused||(this.$label.removeClass(this.CLASSES.focused),this.isFocused=!1)},a.prototype.mousedown=function(){this.$label.addClass(this.CLASSES.active)},a.prototype.mouseup=function(){this.$label.removeClass(this.CLASSES.active)},a.prototype.keydown=function(t){var e=t.which,i=9;if(8!==e&&46!==e||(this.clear(),t.preventDefault()),s&&e===i){var a=this;this.isFocused=!1,this.$el.prop("disabled",!0),setTimeout((function(){a.$el.prop("disabled",!1).blur()}),0)}},a.prototype.checkValidity=function(){if(this.el.required){var t=this.$el.is(":invalid");this.$label.toggleClass(this.CLASSES.invalid,t).toggleClass(this.CLASSES.valid,!t)}},a.prototype.change=function(){var t,i="";this.checkValidity(),(t=this.el.multiple&&this.el.files.length>1?this.formatMultipleFileText(this.el.files.length):this.el.value).length?(i=t.replace(e,""),this.$clearButton.appendTo(this.$label)):this.$clearButton.detach(),this.$el.focus(),this.setFieldText(i),this.fireEvent("value-changed")},a.prototype.setFieldText=function(t){var e="data-ffi-value";t.length?(this.$label.attr(e,t),this.fireEvent("value-added")):(this.$label.removeAttr(e),this.fireEvent("value-cleared"))},t.fn.fancyFileInput=function(e){return this.each((function(){var i=new a(this,e);t(this).data("FancyFileInput",i)}))},a}(t)}.apply(e,s))||(t.exports=a)}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.component.form.file-select', location = 'aui.chunk.922bf1abf0254503eb60--b7f4b739e53be42b965e.js' */
"use strict";(self.webpackChunk_auiRuntime=self.webpackChunk_auiRuntime||[]).push([[7744],{1079:(u,e,n)=>{n.r(e),n.d(e,{FancyFileInput:()=>s});n(8316);var a=n(7726);const s=n.n(a)()}},u=>{u.O(0,[7224,9711,7035,8196,3469,3039,2276,713,2554,8877,7501,8313,3022,7825,3108],(()=>{return e=1079,u(u.s=e);var e}));u.O()}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'js/link-object.js' */
define("confluence-link-browser/link-object",["jquery","ajs","confluence/legacy"],function(d,g,m){function j(a){return d.nodeName(a,"img")?a:a.hasChildNodes()&&1===a.childNodes.length&&d.nodeName(a,"a")&&d.nodeName(a.firstChild,"img")?a.firstChild:null}function k(a){return!a?"":d(a).attr("data-linked-resource-default-alias")||d(a).attr("src")}function l(a){var b={};"A"===a.nodeName&&d(a.attributes).each(function(){b[this.name]=this.value});return b}function i(a,b){for(var d=a,h=b&&b.nextSibling,c=
"#text SPAN STRONG B EM I STRIKE U DEL S SUB SUP".split(" ");d!==h;){if(!c.includes(d.nodeName))return!1;d=d.nextSibling}return!0}var e={isLink:function(a){return a&&!!a.fillNode}},f=function(a){if(e.isLink(a))return a;var b={insert:function(){return m.Editor.LinkAdapter.setLink(b)},fillNode:function(a){var b=this.attrs;b.href=b.href||"#";b.href.replace(/\s+/g,"").toLowerCase().includes("javascript:")&&(b.href="#");a.attr(b);this.classes&&this.classes.length&&a.addClass(this.classes.join(" "));a.html(this.body.html);
return a},getData:function(){var a={},b;for(b in this)this.hasOwnProperty(b)&&!d.isFunction(this[b])&&(a[b]=this[b]);return a},getLinkedImage:function(){return this.body&&this.body.jquery?1===this.body.length&&this.body.is("img")&&this.body:null},getResourceId:function(){return this.attrs["data-linked-resource-id"]||""},getResourceVersion:function(){return this.attrs["data-linked-resource-version"]||""},isToConfluenceEntity:function(){return this.attrs["data-linked-resource-id"]},isToAttachmentOnSamePage:function(a){return"attachment"==
this.attrs["data-linked-resource-type"]&&this.attrs["data-linked-resource-container-id"]==a},isCustomAtlassianContentLink:function(){return this.classes&&this.classes.length?-1!=d.inArray("confluence-link",this.classes):!1},hasAnchor:function(){return this.attrs["data-anchor"]},getResourceType:function(){return this.attrs["data-linked-resource-type"]},getDefaultAlias:function(){return this.attrs["data-linked-resource-default-alias"]},getHref:function(){return this.attrs.href},getAnchor:function(){return this.attrs["data-anchor"]},
getHtml:function(){return this.body.html},getShortcut:function(){return this.attrs["data-linked-resource-shortcut"]},isHrefValid:function(){return this.attrs.href&&"http://"!=this.attrs.href},isImage:function(){return this.body.isImage},isNewLink:function(){return d.isEmptyObject(this.attrs)},isShortcutLink:function(){return"shortcut"===this.getResourceType()},isExternalLink:function(){return!this.isCustomAtlassianContentLink()},showsBreadcrumbs:function(){return!0},getTarget:function(){return this.attrs.target},
setTarget:function(a){a?this.attrs.target=a:this.removeTarget()},removeTarget:function(){this.attrs&&this.attrs.target&&delete this.attrs.target}};if(a&&a.attrs){var f={},h=null;d.each(a.attrs,function(a,b){"class"==a?h=b:f[a]=b});a.attrs=f;if(h){var c=h.split(" ");a.classes=a.classes&&a.classes.length?a.classes.concat(c):c}}d.extend(b,a);return b};e.fromData=function(a){return f(a)};e.fromNode=function(a,b){f({attrs:{},body:{html:b,text:b}});return f({attrs:l(a),body:{html:b,text:b}})};e.fromSelectedAnchor=
function(a,b){var e=d(a),h=j(a),c=!h&&i(a.firstChild,a.lastChild);return f({attrs:l(a),body:{isEditable:c,isImage:!!h,html:e.html(),imgName:k(h),text:b}})};e.fromSelection=function(a,b,d,e){var b=j(b),c;if(c=!b)if(a.collapsed)c=!0;else if(c=a.startContainer,c==a.endContainer)c=3===c.nodeType?!0:i(c.childNodes[a.startOffset],c.childNodes[a.endOffset-1]);else{var g=require("tinymce").activeEditor.dom;c=g.isBlock(a.startContainer)?a.startContainer.childNodes[a.startOffset]:a.startContainer;a=g.isBlock(a.endContainer)?
a.endContainer.childNodes[a.endOffset-1]:a.endContainer;a=c&&a&&c.parentNode==a.parentNode?{start:c,end:a}:null;c=!!a&&i(a.start,a.end)}return f({attrs:{},body:{isEditable:c,isImage:!!b,html:d,imgName:k(b),text:e}})};e.fromREST=function(a){var b=f({attrs:{"data-base-url":g.Confluence.getBaseUrl(),"data-linked-resource-id":a.id,"data-linked-resource-type":a.type,"data-linked-resource-content-type":a.contentType,href:g.REST.findLink(a.link),"data-linked-resource-default-alias":a.title},body:{html:g.escapeHtml(a.title),
text:g.escapeHtml(a.title)},classes:["confluence-link"]});"user"===a.type&&(b.attrs["data-linked-resource-type"]="userinfo");return b};e.createLinkToNewPage=function(a,b){return f({attrs:{"data-space-key":b,"data-content-title":a,href:g.contextPath()+"/pages/createpage.action?spaceKey="+b+"&title="+a},body:{html:g.escapeEntities(a),text:a},classes:["createlink","confluence-link"]})};e.makeExternalLink=function(a){return f({attrs:{href:a},body:{html:a,text:a}})};e.isExternalLink=function(a){return a&&
(a.match(/^(\/\/|mailto:|file:|http:|https:)/)||0===a.indexOf("\\"))};return e});require("confluence/module-exporter").exportModuleAsGlobal("confluence-link-browser/link-object","Confluence.Link");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'js/link-adapter.js' */
define("confluence-link-browser/link-adapter",["ajs","jquery","confluence/legacy","tinymce"],function(e,f,g,d){return{setLink:function(a){var c=e.Rte.getEditor(),c=f(c.dom.create("a"),c.getDoc());a.fillNode(c);return d.confluence.NodeUtils.replaceSelection(c)},getLink:function(){var a=e.Rte.getEditor(),c=a.selection.getContent(),b=a.getContent(),a=a.selection;b.includes(c)||(c=a.win.getSelection(),b=a.getRng(),"function"===typeof c.setBaseAndExtent&&(b.commonAncestorContainer.outerHTML===b.endContainer.outerHTML?
c.setBaseAndExtent(b.startContainer,b.startOffset,b.startContainer,b.startContainer.length):c.setBaseAndExtent(b.endContainer,0,b.endContainer,b.endOffset)));c=a.getNode();if(b=f(c).parents().andSelf().filter("a[href]")[0])return a.select(b),g.Link.fromSelectedAnchor(b,a.getContent({format:"text"}));var b=a.getRng(),d=a.getContent({format:"text"}),a=a.getContent();return g.Link.fromSelection(b,c,a,d)}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-link-browser/link-adapter","Confluence.Editor.LinkAdapter");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'js/link-browser.js' */
define("confluence-link-browser/link-browser",["ajs","confluence/legacy","jquery"],function(b,o,h){function r(){if(!f.prop("disabled")){f.prop("disabled",!0);b.debug("link-browser.js: submit");i.preSubmit&&i.preSubmit();var a=c.getLink();b.DarkFeatures.isEnabled(s)||a.removeTarget();a.insert();n();b.trigger("closed.link-browser")}}function n(){k.hide().remove();b.Rte.BookmarkManager.restoreBookmark()}function p(){n();b.trigger("closed.link-browser")}function t(a,f,l){var d=f.key,f=f.label,e=d+"-panel",
g=o.Templates.LinkBrowser[d+"Panel"]({atlToken:b.Meta.get("atl-token")});k.addPanel(f,g,e,e+"-id");var a=k.get("panel:"+a),j=l.tabs[d];j.panelObj=a;j.key=d;j.createPanel({baseElement:h(a[0].body)});a[0].onblur=j.onDeselect;a[0].onselect=function(){var a=!!j.hasBreadcrumbs;b.debug("Link Browser: on tab select, breadcrumbs enabled: "+a);j.onSelect();c.refresh(a);i=j};return j}var s="link.openInNewWindow",k,c,f,i;return{SEARCH_PANEL:"search",ATTACHMENTS_PANEL:"attachments",WEBLINK_PANEL:"weblink",ADVANCED_PANEL:"advanced",
open:function(a){h(function(){h('.ffi input[type="file"]#file_0').fancyFileInput()});if(h(".aui-dialog:visible").length)return null;a=a||{};b.Rte.BookmarkManager.storeBookmark();a.linkInfo=a.linkInfo||o.Editor.LinkAdapter.getLink();if(a.opener)return a.opener(a.linkInfo.alias,a.linkInfo);var q=a,a={OPEN_IN_NEW_WINDOW_DARK_FEATURE:s,tabs:{},setLink:function(u,a){c.setLink(u,a)},getLink:function(){return c.getLink()},getSelectedDataTableItem:function(){return h(".data-table:visible tr.selected")},linkValid:function(a){f.prop("disabled",
!a)},focusLinkText:function(){c.focusLinkText()||(b.debug("LinkBrowser: focusing submit button"),f.focus())},getLinkText:function(){return c.getLinkText()},isLinkTextVisible:function(){return c.isLinkTextVisible()},isNewWindowCheckboxVisible:function(){return c.isNewWindowCheckboxVisible()},hasBreadcrumbs:function(a){return c.hasBreadcrumbs(a)},getLocationPresenter:function(){return c},doSearch:function(a){this.tabs.search.doSearch(a)},getSearchTextField:function(){return this.tabs.search.getSearchTextField()},
moveLocationPanel:function(a){c.moveLocationPanel(a)},restoreLocationPanel:function(){c.restoreLocationPanel()},gotoPanel:function(a){this.popup.gotoPanel(a)},getCurrentPanel:function(){return this.popup.getCurrentPanel()},setWebLinkURL:function(a){var c=this.tabs.weblink;i!=c?b.debug("Cannot set URL "+a+" on hidden Web Link panel"):c.setURL(a)},getWebLinkUrl:function(){var a=this.tabs.weblink;return i!=a?(b.debug("Cannot get URL on hidden Web Link panel"),null):a.getURL()},getTitle:function(){return this.popup.getTitle()},
getSubmitButtonText:function(){return f.text()},isSubmitButtonEnabled:function(){return f.is(":enabled")},isVisible:function(){return this.popup.isVisible()},showOpenInNewWindowCheckbox:function(a){return c.showOpenInNewWindowCheckbox(a)},getAdvancedTextField:function(){var a=this.tabs.advanced;return i!=a?(b.debug("Cannot get link text on hidden advanced panel"),null):a.getLink()},setAdvancedTextField:function(a){var c=this.tabs.advanced;i!=c?b.debug("Cannot set link text on hidden advanced panel"):
c.setLink(a)},submit:r,cancel:p},l=q.linkInfo,d=l.isNewLink(),e,g;e=new b.ConfluenceDialog({width:840,height:590,id:"insert-link-dialog",onCancel:p,onSubmit:r});g=d?"Insert link":"Edit link";d=d?"Insert":"Save";e.addHeader(g);e.addButton(d,r);e.addCancel("Cancel",p);e.addHelpText("Hint: type \u0022[\u0022 in the editor to see a list of suggested pages and insert a link.");g=h("#insert-link-dialog .dialog-tip");
g.attr("title",g.text());h("#insert-link-dialog .dialog-components .dialog-title").prepend(o.Templates.LinkBrowser.helpLink());f=e.get("button:0")[0].item;f.attr("id","link-browser-insert");f.prop("disabled",!0);k=e;a.popup=k;b.trigger("dialog-created.link-browser",[a]);c=o.Editor.LinkBrowser.LinkInfoPresenter(a);c.setLinkBody(l.body);q=q.panelKey;e=h("#link-browser-tab-items").find("div").map(function(){var a=h(this);return{key:a.text(),weight:a.attr("data-weight"),label:this.title}}).sort(function(a,
b){return a.weight-b.weight});var j="template"!==b.Meta.get("content-type");e=h.grep(e,function(a){return j||"attachments"!==a.key});var n;g=null;for(var d=0,v=e.length;d<v;d++){var m=t(d,e[d],a);0===d&&(n=m);!l.isNewLink()&&h.isFunction(m.handlesLink)&&m.handlesLink(l)?(g=m,m.openedLink=l):q==m.key&&(g=m)}g?a.popup.overrideLastTab():g=n;i=g;k.popup.element.find(".dialog-page-body:first").append(c.getContainer());i.panelObj.select();i.openedLink=null;k.show();b.trigger("dialog-shown.link-browser",
k);return a},cancel:p}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-link-browser/link-browser","Confluence.Editor.LinkBrowser");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'js/link-browser-location.js' */
define("confluence-link-browser/link-browser-location",["jquery","confluence/legacy","ajs","confluence/dialog-breadcrumbs"],function(k,B,i,s){return function(t){function m(){return i.escapeHtml(u())}function u(){return b.val()}function v(a){j.closest(".row").toggleClass("hidden",!a);e.toggleClass("has-breadcrumbs",!!a)}function w(a){var c=a.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/),a=c[2],d=c[3],f=c[5],e=c[7],c=c[9],b="";a&&(b=a.toLowerCase()+":");d&&(b+=d);b+=n(f);e&&(b+=
"?"+n(e));c&&(b+="#"+n(c));return b}function n(a){var c={"'":"%27","\\[":"%5B","\\]":"%5D","`":"%60","\\\\":"%5C"},d;for(d in c)c.hasOwnProperty(d)&&(a=a.replace(RegExp(d,"g"),c[d]));return a}function x(){return b.is(":visible")}function y(a,c){i.trigger("analyticsEvent",{name:a,data:{resourceType:c.getResourceType(),isExternal:c.isExternalLink()}})}var e,j,o,f,g,b,p,z,A,q,l,r,h;e=k(B.Templates.LinkBrowser.locationPanel());j=e.find("#breadcrumbs-container");o=s.Breadcrumbs(j,s.getBreadcrumbsLegacy);
g=e.find("#link-open-in-new-window");z=e.find(".link-image");A=e.find(".link-mixed");l=e.find("#link-image-filename");q=e.find("#link-mixed-content");p=e.find(".link-text");b=p.find("input");b.change(function(a){a.keyCode=a.keyCode||a.which;a.keyCode&&13!==a.keyCode&&b.removeClass("default-alias")});g.change(function(){g.prop("checked")?("attachment"!==f.getResourceType()&&f.setTarget("_blank"),y("editor.linkBrowser.location.openInNewWindow.checked",f)):(f.removeTarget(),y("editor.linkBrowser.location.openInNewWindow.unchecked",
f))});return{setLink:function(a,c){i.debug("Link Browser: setting link : "+a);var d=a.attrs["data-linked-resource-default-alias"]||a.getHtml();if(""===m()||b.hasClass("default-alias"))b.addClass("default-alias"),b.val(d);if(c&&a.getResourceId()&&a.getResourceType()){var e={clearErrors:function(){},error:function(){},select:function(a){o.update(a,e)}},d={id:a.getResourceId(),type:a.getResourceType()};o.update(d,e)}v(c);i.DarkFeatures.isEnabled(t.OPEN_IN_NEW_WINDOW_DARK_FEATURE)?(g.prop("checked")&&
a.setTarget("_blank"),g.prop("checked","_blank"===a.getTarget())):a.removeTarget();f=a;t.linkValid(f&&f.isHrefValid())},getLink:function(){if(!f)return null;var a=r;a||((a=m())||(a=f.getDefaultAlias()||f.getHref()),a={html:a});f.body=a;f.attrs.href=w(f.attrs.href);return f},refresh:function(a){f&&v(a)},setLinkBody:function(a){r||(a.isEditable?b.val(a.text):a.isImage?l.text(a.imgName):q.text(a.text),r=a.isEditable?null:a,p.toggleClass("hidden",!a.isEditable),z.toggleClass("hidden",!a.isImage),A.toggleClass("hidden",
a.isEditable||a.isImage))},getContainer:function(){return e},isLinkTextVisible:x,isLinkImageVisible:function(){return l.is(":visible")},isNewWindowCheckboxVisible:function(){return g.is(":visible")},isNewWindowCheckboxChecked:function(){return g.prop("checked")},isLinkMixedContentVisible:function(){return q.is(":visible")},focusLinkText:function(){return x()?(i.debug("LinkInfoPresenter.focusLinkText focusing alias"),b.select(),!0):!1},getLinkText:m,getRawLinkText:u,getLinkImageName:function(){return l.text()},
moveLocationPanel:function(a){h||(h=e.find(".row:not(.hidden) .field-group"),h.each(function(a,d){k(d).data("original-parent",k(d).parent())}));h.appendTo(a);e.hide()},restoreLocationPanel:function(){h&&h.each(function(a,c){var d=k(c);d.data("original-parent")&&(d.appendTo(d.data("original-parent")),d.removeData("original-parent"))});e.show();h=null},hasBreadcrumbs:function(a){if(!j.is(":visible"))return!1;var c=a.length,d=j.find("li");if(d.length!==c)return!1;for(var b=0;b<c;b++)if(d.eq(b).text()!==
a[b])return!1;return!0},showOpenInNewWindowCheckbox:function(a){g.closest(".row").toggleClass("hidden",!a)},encodeURLSafely:w}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-link-browser/link-browser-location","Confluence.Editor.LinkBrowser.LinkInfoPresenter");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'js/link-browser-tab-search.js' */
define("confluence-link-browser/link-browser-tab-search",["jquery","ajs","document","confluence/legacy","confluence/page-location"],function(d,b,n,i,o){return{dialogCreatedLinkBrowserSearch:function(n,j){var c,e,f,m,p=b.REST.getBaseUrl()+"search.json",k=function(a,b){i.Link.isLink(a)||(a=i.Link.fromREST(a));b&&c.val(a.attrs["data-linked-resource-default-alias"]);j.setLink(a,!0);j.focusLinkText()},l=function(a){b.debug("link-browser-tab-search.js: doing search");c.trigger("hide.autocomplete");var g=
d.trim(c.val());g?(f.loading(),b.getJSONWrap({url:p,data:{search:"site",query:g,spaceKey:e.val()},successCallback:function(b){d.isFunction(a)?(f.update(b.result),a()):f.updateAndSelect(b.result);c.trigger("hide.autocomplete")},messageHandler:m})):d.isFunction(a)&&a()};j.tabs.search={hasBreadcrumbs:!0,createPanel:function(a){var g=a.baseElement;c=g.find("#link-search-text");e=g.find("#search-panel-space");var h=o.get();e.find("option:eq(1)").text(h.spaceName).val(h.spaceKey);e.change(function(){c.attr("data-spacekey",
e.val());c.trigger("clearCache.autocomplete")});i.Binder.autocompleteSearch(c.parent());c.bind("selected.autocomplete-content",function(a,b){b.searchFor?l():(f.clear(),k(b.content,!1))});h=[b.SelectGrid.Column({key:"title",heading:"Title",getHref:function(a){return b.REST.findLink(a.link)},getInnerClass:function(a){return a.iconClass||"content-type-"+a.type}}),b.SelectGrid.Column({key:"space",heading:"Space",getText:function(a){return a.space&&
a.space.title||""}}),b.SelectGrid.Column({key:"last-modified",heading:"Last Modified",getText:function(a){return a.lastModifiedDate&&a.lastModifiedDate.friendly||""},getTitle:function(a){return a.lastModifiedDate&&a.lastModifiedDate.date||""}})];m=b.MessageHandler({baseElement:a.baseElement.find(".message-panel")});f=new b.ResultGrid({baseElement:a.baseElement,columns:h,selectionCallback:function(a,b){k(b)},noResultMessage:"No search results found.",
dontShiftFocus:function(){return d(c).add(e).is(":focus")}});g.find(".search-form").submit(function(){l();return!1}).keydown(function(a){13===a.keyCode&&!d(".aui-dropdown:visible .active",this).length&&(d("#search-panel-button").focus(),a.stopPropagation())})},onSelect:function(){b.debug("Link Browser Search panel selected");var a=this.openedLink;a?(b.debug("Link Browser Search panel setting link info"),k(a,!0)):c.focus()},handlesLink:function(a){return a.isCustomAtlassianContentLink()&&!a.hasAnchor()&&
!a.isShortcutLink()&&!a.isToAttachmentOnSamePage(b.Meta.get("content-id"))},doSearch:function(a,b){c.val(a);l(b)},isResultGridVisible:function(){return f.isVisible()},getSearchTextField:function(){return c}}}}});require("confluence/module-exporter").safeRequire("confluence-link-browser/link-browser-tab-search",function(d){require("ajs").bind("dialog-created.link-browser",d.dialogCreatedLinkBrowserSearch)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'js/link-browser-tab-history.js' */
define("confluence-link-browser/link-browser-tab-history",["ajs","confluence/legacy"],function(a,h){return{dialogCreatedLinkBrowserHistory:function(i,d){var e=a.REST.makeUrl("session/history.json?max-results=20"),f,g;d.tabs.recentlyviewed={createPanel:function(c){var e=[a.SelectGrid.Column({key:"title",heading:"Title",getHref:function(b){return a.REST.findLink(b.link)},getInnerClass:function(b){return b.iconClass||"content-type-"+b.type}}),a.SelectGrid.Column({key:"space",
heading:"Space",getText:function(b){return b.space&&b.space.title||""}}),a.SelectGrid.Column({key:"last-modified",heading:"Last Modified",getText:function(b){return b.lastModifiedDate&&b.lastModifiedDate.friendly||""},getTitle:function(b){return b.lastModifiedDate&&b.lastModifiedDate.date||""}})];g=a.MessageHandler({baseElement:c.baseElement.find(".message-panel")});f=new a.ResultGrid({baseElement:c.baseElement,
columns:e,getRowId:function(b){return b.attachmentId},selectionCallback:function(b,a){var c=h.Link.fromREST(a);d.setLink(c);d.focusLinkText()},messageHandler:g,noResultMessage:"You have no recently viewed content."})},onSelect:function(){f.loading();a.getJSONWrap({url:e,messageHandler:g,successCallback:function(c){f.update(c.content);a.trigger("updated.link-browser-recently-viewed")}})}}}}});
require("confluence/module-exporter").safeRequire("confluence-link-browser/link-browser-tab-history",function(a){require("ajs").bind("dialog-created.link-browser",a.dialogCreatedLinkBrowserHistory)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'js/link-browser-tab-attachment.js' */
define("confluence-link-browser/link-browser-tab-attachment",["jquery","ajs","confluence/legacy"],function(h,a,j){return{dialogCreatedLinkBrowserAttachment:function(m,i){var f=a.REST.makeUrl("content/"+a.Meta.get("attachment-source-content-id")+"/attachments.json"),g,k,l,d;i.tabs.attachments={hasBreadcrumbs:!1,createPanel:function(b,c){var e=b.baseElement.find(".attach-file-form");g=h.extend({getUploaderController:function(){return j.AttachmentUploader({baseElement:e},function(){return{onUploadSuccess:function(a){for(var b=
0,c=a.length;b<c;b++)a[b].type="attachment";d.prependAndSelect(a)}}})}},c&&c(b));k=g.getUploaderController(b);l=k.getMessageHandler();var f=[a.SelectGrid.Column({key:"title",heading:"Name",getHref:function(b){return b.link?a.REST.findLink(b.link):b.url},getInnerClass:function(a){return a.iconClass}}),a.SelectGrid.Column({key:"size",heading:"Size",getText:function(a){return a.niceFileSize}}),a.SelectGrid.Column({key:"comment",
heading:"Comment"})];d=new a.ResultGrid({baseElement:b.baseElement,columns:f,selectionCallback:function(b,c){var d=j.Link.fromREST(c);d.attrs["data-linked-resource-container-id"]=a.Meta.get("content-id");if(h.isArray(c.link))for(var e=0,f=c.link.length;e<f;e++){var g=c.link[e];"download"===g.rel&&(d.attrs.href=g.href)}i.setLink(d);i.focusLinkText()},noResultMessage:"There are no files on this page."})},onSelect:function(){var b=this.openedLink,c=i.getLink();
d.loading();a.getJSONWrap({url:f,messageHandler:l,successCallback:function(e){d.update(e.attachment);c?"attachment"==c.getResourceType()&&d.select(c.getResourceId()):b?d.select(b.getResourceId()):e.attachment.length&&d.select(e.attachment[0].id);a.debug("Loaded attachments")}})},handlesLink:function(b){return b.isToAttachmentOnSamePage(a.Meta.get("content-id"))}}}}});
require("confluence/module-exporter").safeRequire("confluence-link-browser/link-browser-tab-attachment",function(h){var a=require("ajs");"template"!==a.Meta.get("content-type")&&a.bind("dialog-created.link-browser",h.dialogCreatedLinkBrowserAttachment)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'js/link-browser-tab-weblink.js' */
define("confluence-link-browser/link-browser-tab-weblink",["ajs","jquery","confluence/legacy"],function(d,k,h){return{dialogCreatedLinkBrowserWeblink:function(n,c){function e(){return k.trim(b.val())}function f(){var a=e();if(!(d.Validate.url(a)||0===a.indexOf("mailto:"))){if(d.Validate.email(a))a="mailto:"+a;else{if(l.test(a))return;a="http://"+a}d.debug("Updating Link Browser Web Link URL to: "+a);b.val(a);a=h.Link.makeExternalLink(a);c.setLink(a)}}function i(){var a=e();(a=a?h.Link.makeExternalLink(a):
null)&&c.setLink(a)}function m(){f();i()}var b,g,j,l=/[:/]/;j=c.tabs.weblink={createPanel:function(a){g=a.baseElement;b=g.find("input[name='destination']");b.keyup(function(){i()});b.change(f);b.bind("paste",function(){d.debug("Link Browser web link url pasted");setTimeout(m,0)})},onSelect:function(){d.DarkFeatures.isEnabled(c.OPEN_IN_NEW_WINDOW_DARK_FEATURE)&&c.showOpenInNewWindowCheckbox(!0);c.moveLocationPanel(g.find("form:first"));this.openedLink&&(j.setURL(this.openedLink.attrs.href),c.setLink(this.openedLink));
setTimeout(function(){b.focus()})},onDeselect:function(){c.restoreLocationPanel();c.showOpenInNewWindowCheckbox(!1)},preSubmit:f,handlesLink:function(a){return!a.isCustomAtlassianContentLink()},setURL:function(a){b.val(a);b.keyup();b.change()},getURL:e}}}});require("confluence/module-exporter").safeRequire("confluence-link-browser/link-browser-tab-weblink",function(d){require("ajs").bind("dialog-created.link-browser",d.dialogCreatedLinkBrowserWeblink)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'js/link-browser-tab-advanced.js' */
define("confluence-link-browser/link-browser-tab-advanced",["jquery","ajs","confluence/legacy","confluence/api/constants","confluence/meta"],function(g,e,l,m,i){return{dialogCreatedLinkBrowserAdvanced:function(p,d){var c,f,h,k,n=function(b){b=g(b);if(b.length){var a=b.find("a:first");a.length?a.hasClass("unresolved")?(b=a.attr("shortcut-key"),a=a.attr("data-space-key"),b?f.text(e.format("{0} is not a recognized shortcut",b)):a&&f.text(e.format("{0} is not a recognized space",
a))):(b=l.Link.fromNode(a[0],c.val()),d.setLink(b)):f.text("The markup provided is not valid link markup")}},o=function(b,a,c){e.debug("Error during conversion: textStatus = "+a+", errorThrown = "+c);f.text("An internal server error occurred")},j=d.tabs.advanced={createPanel:function(b){h=b.baseElement;c=h.find("input[name='advanced-link']");f=h.find("div[name='advanced-error']");h.find("form").keydown(function(a){13===a.keyCode&&!d.isSubmitButtonEnabled()&&a.preventDefault()});
c.keyup(function(){clearTimeout(k);f.text("");c.val()&&(k=setTimeout(function(){var a=c.val(),a=a.replace(/\[/g,"\\[").replace(/]/g,"\\]"),a={wiki:"["+a+"]",entityId:i.get("content-id"),spaceKey:i.get("space-key"),contextType:i.get("content-type")};g.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:m.CONTEXT_PATH+"/rest/tinymce/1/wikixhtmlconverter",data:g.toJSON(a),dataType:"text",success:n,error:o,timeout:1E4})},200))})},setLink:function(b){c.val(b);c.keyup();c.change()},getLink:function(){return c.val()},
onSelect:function(){e.DarkFeatures.isEnabled(d.OPEN_IN_NEW_WINDOW_DARK_FEATURE)&&d.showOpenInNewWindowCheckbox(!0);d.moveLocationPanel(h.find("form:first"));this.openedLink&&(this.openedLink.isShortcutLink()?j.setLink(this.openedLink.getShortcut()):this.openedLink.getResourceId()?j.setLink(this.openedLink.getDefaultAlias()):j.setLink("#"+this.openedLink.getAnchor()),d.setLink(this.openedLink));setTimeout(function(){c.focus()})},onDeselect:function(){d.restoreLocationPanel();d.showOpenInNewWindowCheckbox(!1)},
handlesLink:function(b){return b.isShortcutLink()||b.hasAnchor()}}}}});require("confluence/module-exporter").safeRequire("confluence-link-browser/link-browser-tab-advanced",function(g){require("ajs").bind("dialog-created.link-browser",g.dialogCreatedLinkBrowserAdvanced)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-link-browser:link-browser-resources', location = 'templates/link-browser.soy' */
// This file was automatically generated from link-browser.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.LinkBrowser.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LinkBrowser == 'undefined') { Confluence.Templates.LinkBrowser = {}; }


Confluence.Templates.LinkBrowser.searchPanel = function(opt_data, opt_ignored) {
  return '<form class="aui search-form" onsubmit="return false;"><fieldset class="inline"><div class="search-input"><label for="link-search-text" id="linkSearch-label" class="assistive">' + soy.$$escapeHtml('Search') + '</label><input id="link-search-text" type="text" tabindex="0" class="text autocomplete-search" name="linkSearch" autocomplete="off" data-search-link-message="' + soy.$$escapeHtml('Search for \x26lsquo;{0}\x26rsquo;') + '"></div><select tabindex="0" class="search-space select" id="search-panel-space"><option value="">' + soy.$$escapeHtml('All content') + '</option><option value=""> </option></select><button type="submit" tabindex="0" class="aui-button" id="search-panel-button">' + soy.$$escapeHtml('Search') + '</button></fieldset></form><div class="message-panel hidden"></div><div id="search-results-table" class="data-table hidden"></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.searchPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.searchPanel';
}


Confluence.Templates.LinkBrowser.recentlyviewedPanel = function(opt_data, opt_ignored) {
  return '<div class="recently-viewed-panel"><div class="message-panel hidden"></div><div class="data-table"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.recentlyviewedPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.recentlyviewedPanel';
}


Confluence.Templates.LinkBrowser.attachmentsPanel = function(opt_data, opt_ignored) {
  return '<div class="attach-file-form"><form method="post" enctype="multipart/form-data" id="attachments-attachfile-form" action="' + soy.$$escapeHtml("") + '/pages/attachfile.action" class="aui"><p>' + soy.$$escapeHtml('Link to a file that is attached to this page or attach a new one.') + '</p><div class="upload-field field-group"><label for="file_0">' + soy.$$escapeHtml('Upload file') + '</label><label id="fancy-file-upload" class="ffi" data-ffi-button-text="Browse"><input type="file" name="file_0" id="file_0"></label><input type="hidden" name="minorEdit_0" value="true"></div><input type="hidden" name="atl_token" value="' + soy.$$escapeHtml(opt_data.atlToken) + '" /></form><div class="upload-in-progress upload-field hidden">' + soy.$$escapeHtml('Upload in progress...') + '</div><div class="warning"><ul class="hidden message-panel"></ul></div></div><div class="message-panel hidden"></div><div id="attachments-table" class="attachment-list data-table"></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.attachmentsPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.attachmentsPanel';
}


Confluence.Templates.LinkBrowser.weblinkPanel = function(opt_data, opt_ignored) {
  return '<form class="aui" onsubmit="return false;"><div class="field-group"><label id="destination-label" for="weblink-destination">' + soy.$$escapeHtml('Address') + '</label><input type="text" tabindex="0" class="text" id="weblink-destination" name="destination"><div class="web-link-desc description">' + soy.$$escapeHtml('Web, email or any other internet address') + '</div></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.weblinkPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.weblinkPanel';
}


Confluence.Templates.LinkBrowser.advancedPanel = function(opt_data, opt_ignored) {
  return '<form class="aui" onsubmit="return false;"><div class="advanced-desc title">' + soy.$$filterNoAutoescape(AJS.format('Here you can insert a link into the page using \x3ca href\x3d\x22{0}\x22 target\x3d\x22_blank\x22\x3ewiki markup\x3c/a\x3e.',"https://docs.atlassian.com/confluence/docs-88/Links")) + '</div><div class="field-group"><label id="advanced-label" for="advanced-link">' + soy.$$escapeHtml('Link') + '</label><input type="text" tabindex="0" class="text" id="advanced-link" name="advanced-link"><div class="advanced-desc description">' + soy.$$escapeHtml('To insert a link to a new page, type in the desired page title.') + '<br/>' + soy.$$escapeHtml('To insert an anchor link, type #anchorname.') + '</div><div name="advanced-error" class="advanced-error error"></div></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.advancedPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.advancedPanel';
}


Confluence.Templates.LinkBrowser.locationPanel = function(opt_data, opt_ignored) {
  return '<div id="link-browser-location" class="location-info"><form class="aui"><div class="row hidden field-group"><label class="link-location-label" for="breadcrumbs-link">' + soy.$$escapeHtml('Link location') + '</label><div class="breadcrumbs-container" id="breadcrumbs-link"><div class="breadcrumbs-line"><ol id="breadcrumbs-container" class="breadcrumbs"></ol></div></div></div></form><div class="row link-text"><form class="aui" onsubmit="return false;"><div class="field-group"><label for="alias" id="alias-label">' + soy.$$escapeHtml('Link text') + '</label><input type="text" tabindex="0" class="text" name="alias" id="alias"></div></form></div><div class="row link-open-in-new-window hidden"><div class="field-group"><div class="checkbox"><input type="checkbox" class="checkbox" name="open-in-new-window" tabindex="0" id="link-open-in-new-window"><label for="link-open-in-new-window" id="open-window-label">' + soy.$$escapeHtml('Open in new tab/window') + '</label></div></div></div><div class="row link-image hidden"><div class="readonly"><label for="link-image-filename">' + soy.$$escapeHtml('Link image') + '</label><span id="link-image-filename" class="content-type-attachment-image"></span></div></div><div class="row link-mixed hidden"><div class="readonly"><label for="link-mixed-content">' + soy.$$escapeHtml('Link text') + '</label><span id="link-mixed-content"></span></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.locationPanel.soyTemplateName = 'Confluence.Templates.LinkBrowser.locationPanel';
}


Confluence.Templates.LinkBrowser.helpLink = function(opt_data, opt_ignored) {
  return '<div class="dialog-help-link"><a href="' + soy.$$escapeHtml("https://docs.atlassian.com/confluence/docs-88/Links") + '" target="_blank">' + soy.$$escapeHtml('Help') + '</a></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LinkBrowser.helpLink.soyTemplateName = 'Confluence.Templates.LinkBrowser.helpLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:editor-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/move-hidden-fields-hack.js' */
AJS.toInit(function(a){a("fieldset.create-content-template-fields \x3e input").appendTo("form.editor")});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-macro-browser-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-from-template-macro-fields.js' */
AJS.toInit(function(g){function k(a,b){a=a||AJS.Meta.get("space-key");Confluence.Blueprint.Dialog.requestWebItems(a,!1,function(e){var f=Confluence.Blueprint.Dialog.loadedWebitems[a];_.isEmpty(f)?AJS.log("create-from-template-macro-fields: No Create dialog web items found for spaceKey \x3e"+a+"\x3c"):b(e,f)},function(){AJS.error("create-from-template-macro-fields: requestWebItems call for spaceKey \x3e"+a+"\x3c failed")})}function h(a,b){k(b,function(e,f){e=a.val();a.empty();_.each(f,function(c){var d=
c.itemModuleCompleteKey;"com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blank-page"!==d&&"com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post"!==d&&(c.templateId||c.contentBlueprintId)&&(d=g("\x3coption\x3e\x3c/option\x3e").text(c.name),d.attr("data-template-id",c.templateId),d.attr("data-blueprint-module-complete-key",c.blueprintModuleCompleteKey),d.attr("data-content-blueprint-id",c.contentBlueprintId),d.attr("data-create-result",c.createResult),
d.val(c.templateId||c.contentBlueprintId),a.append(d))});a.val(e)})}AJS.MacroBrowser.setMacroJsOverride("create-from-template",{fields:{spacekey:{spaceKey:function(a){var b=AJS.MacroBrowser.ParameterFields.spacekey(a),e=b.input.val();a=function(){var f=b.input.val();f!=e&&h(AJS.MacroBrowser.fields.templateName.input,f);e=f};b.input.bind("selected.autocomplete-content",a);b.input.blur(a);return b}}},beforeParamsSet:function(a,b){a.buttonLabel=a.buttonLabel||a.createButtonLabel||"Create from template";
h(g("#macro-param-templateName"),a.spaceKey);return a},beforeParamsRetrieved:function(a,b,e){b=AJS.MacroBrowser.fields.templateName.input.find("option:selected");a.blueprintModuleCompleteKey=b.data("blueprint-module-complete-key");a.contentBlueprintId=b.data("content-blueprint-id");a.templateId=b.data("template-id");a.createResult=b.data("create-result");return a}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-image-attributes:soy-resources', location = 'soy/image-attributes-panel.soy' */
// This file was automatically generated from image-attributes-panel.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Editor.ImageAttributes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Editor == 'undefined') { Confluence.Templates.Editor = {}; }
if (typeof Confluence.Templates.Editor.ImageAttributes == 'undefined') { Confluence.Templates.Editor.ImageAttributes = {}; }


Confluence.Templates.Editor.ImageAttributes.content = function(opt_data, opt_ignored) {
  return '<form class="aui" onsubmit="return false;"><div class="field-group"><label for="image-title-attribute">' + soy.$$escapeHtml('Image caption') + '</label><input class="text" type="text" id="image-title-attribute" name="image-title-attribute" value="' + ((opt_data.imgTitle) ? soy.$$escapeHtml(opt_data.imgTitle) : '') + '"></div><div class="field-group"><label for="image-alt-attribute">' + soy.$$escapeHtml('Alt text') + '</label><input class="text" type="text" id="image-alt-attribute" name="image-alt-attribute" value="' + ((opt_data.imgAlt) ? soy.$$escapeHtml(opt_data.imgAlt) : '') + '"><div class="description">' + soy.$$escapeHtml('Describes image for screen readers and when image can\x27t be shown') + '</div></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.Editor.ImageAttributes.content.soyTemplateName = 'Confluence.Templates.Editor.ImageAttributes.content';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-image-attributes:image-attributes', location = 'js/image-attributes-panel.js' */
define("confluence-image-attributes/image-attributes-panel",["jquery","ajs","confluence/legacy"],function(f,k,h){return function(){function l(){var a=b.val(),g=d,m=g.attr,c=d.attr("data-location");m.call(g,{"data-element-title":a,title:c&&0<c.length&&a&&0<a.length?c+" ("+a+")":c&&0<c.length?c:a&&0<a.length?"("+a+")":"",alt:e.val()})}function n(){b.val()===e.val()&&(b.bind("input.chained",function(a){e.val(b.val())}),e.on("change",function(){b.unbind("input.chained")}))}k.bind("dialog-created.image-properties",
function(a,g){d=f(g.img);a=f(h.Templates.Editor.ImageAttributes.content({imgTitle:d.attr("data-element-title"),imgAlt:d.attr("alt")}));b=a.find("#image-title-attribute");e=a.find("#image-alt-attribute");n();h.Editor.ImageProps.registerPanel(p,a,q,l)});var p="image-attributes",q="image-attributes-panel",d,b,e}});require("confluence/module-exporter").safeRequire("confluence-image-attributes/image-attributes-panel",function(f){require("ajs").toInit(f)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:property-panel-image-link-macro-conf-frontend', location = 'utils/tinymce-image-utils.js' */
define("confluence-editor/utils/tinymce-image-utils","jquery confluence/api/logger confluence/meta ajs tinymce confluence/api/constants".split(" "),function(d,m,n,j,o,r){var p=["imagetext","src","align","border","width","height"],s=/\/download\/(thumbnails|attachments)\/([0-9]+)\//,q=function(a,b,f,c,e){if(c){a.width=b>=e?e:b;a.style.maxWidth=""}else{a.height=f>=e?e:f;a.style.maxHeight=""}},k;k={isScaledByWidth:function(){return false},updateImageElement:function(a,b){var f=d(a),c;c=b.destination;
c=k.isRemoteImg(c)?c:b.thumbnail?c.replace("/attachments/","/thumbnails/"):c.replace("/thumbnails/","/attachments/");b.src=c;f.toggleClass("confluence-content-image-border",!!b.border);f.toggleClass("confluence-thumbnail",!!b.thumbnail);c=0;for(var e=p.length;c<e;c++){var h=p[c],g=b[h];g!==false&&g!=null?f.attr(h,g):f.removeAttr(h)}o.activeEditor.undoManager.add()},insertFromProperties:function(a,b){d.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:r.CONTEXT_PATH+"/rest/tinymce/1/embed/placeholder/image",
data:d.toJSON(a),dataType:"text",success:function(a){k.insertImagePlaceholder(a,b)}})},insertImagePlaceholder:function(a,b){var f,c=k.isScaledByWidth(),e=d(a);f=c?j.Confluence.PropertyPanel.Image.getPresetImageSize("large"):n.get("content-type")==="comment"?j.Confluence.PropertyPanel.Image.getPresetImageSize("small"):j.Confluence.PropertyPanel.Image.getPresetImageSize("medium");e.css(c?"max-width":"max-height",f+"px");var h=o.activeEditor,g="_"+ +new Date,i=d("<div></div>").append(e.attr("id",g));
h.selection.setContent(i.html());var l=h.dom.get(g);h.dom.setAttrib(l,"id","");if(!e.hasClass("confluence-external-resource")){g=e.attr("data-image-width");i=e.attr("data-image-height");if(g===void 0&&i===void 0){g=e.attr("width");i=e.attr("height")}q(l,g,i,c,f);this.updateThumbnailAttribute(l)}d(l).one("load",function(){e.hasClass("confluence-external-resource")&&q(this,this.width,this.height,c,f);j.Rte.showSelection(function(){b||j.trigger("trigger.property-panel",{elem:l});h.undoManager.add()});
h.dispatch("Change")})},updateThumbnailAttribute:function(a){var b=a.width,f=a.height;if(b||f){var c=d(a),e=c.attr("data-image-width"),h=c.attr("data-image-height"),g=n.get("max-thumb-width"),i=n.get("max-thumb-height"),a=!this.isRemoteImg(a.src)&&this.isThumbnailUsable(b,f,e,h,g,i);c.attr("thumbnail",a);c.toggleClass("confluence-thumbnail",a)}},isRemoteImg:function(a){var b=j.Rte.getCurrentBaseUrl();return a.match("(https?://)")&&a.indexOf(b)===-1},isThumbnailUsable:function(a,b,f,c,e,d){if(a){if(a>
e)return false;if(f===void 0&&c===void 0)return true;e=f/c;return e>=1?true:e*d>=a}a=b;if(a>d)return false;if(f===void 0&&c===void 0)return true;d=c/f;return d>=1?true:d*e>=a}};return{ImageProperties:function(a){if(a&&d.nodeName(a,"img")&&d(a).hasClass("confluence-embedded-image")){var b=d(a),a={title:b.attr("data-element-title"),destination:b.attr("src"),url:b.attr("src"),border:b.attr("class")&&b.attr("class").indexOf("confluence-content-image-border")!==-1?1:0,width:b.prop("width"),height:b.prop("height"),
originalSelected:!b.attr("width")&&!b.attr("height")};if(!k.isRemoteImg(a.destination)&&!d(b).hasClass("confluence-external-resource")){var f=a;var b=d(b).attr("src"),c=b.match(s);if(c&&c.length===3)b=c[2];else{m.log("ERROR: could not parse page id from image url "+b);b="0"}f.pageId=b}return d.extend({},a)}if(a.destination){a.imageFileName=a.imageFileName||a.destination;return d.extend({},a)}return null},ImageUtils:k}});
require("confluence/module-exporter").safeRequire("confluence-editor/utils/tinymce-image-utils",function(d){var m=require("tinymce");m.confluence.ImageProperties=d.ImageProperties;m.confluence.ImageUtils=d.ImageUtils});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:property-panel-image-link-macro-conf-frontend', location = 'tinymce3/plugins/propertypanel/js/property-panel-links.js' */
define("confluence-editor/tinymce3/plugins/propertypanel/js/property-panel-links",["ajs","jquery","confluence/legacy","tinymce","window"],function(a,e,i,k,j){var h=0;return{name:"link",canHandleElement:function(a){return a.is("a")&&"#"!=a.attr("href")&&!a.hasClass("unresolved")},handle:function(f){var c=f.containerEl,g=f.ed,b=function(c){return a.Rte.getEditor().translate(c)},f={anchorIframe:a.Rte.getEditorFrame()},d=0===(c.getAttribute("href")||"").indexOf("#"),b=[{className:"link-property-panel-goto-button",
text:b("propertypanel.links_goto"),tooltip:d?b("propertypanel.links_goto_disabled_tooltip"):c.href,href:c.href,disabled:d,click:function(){a.Confluence.PropertyPanel.destroy();var b=j.open(c.href,"confluence-goto-link-"+a.params.pageId+"-"+h);b.focus();b.opener=null}},{className:"link-property-panel-edit-button",text:b("propertypanel.links_edit"),tooltip:b("propertypanel.links_edit_tooltip"),disabled:e(c).hasClass("createlink")||!c.href,click:function(){a.Confluence.PropertyPanel.destroy();g.selection.select(c);
i.Editor.LinkBrowser.open()}},{className:"link-property-panel-unlink-button",text:b("propertypanel.links_unlink"),tooltip:b("propertypanel.links_unlink_tooltip"),click:function(){a.Confluence.PropertyPanel.destroy();g.execCommand("mceConfUnlink",!1,c);g.focus()}}],d=[];a.trigger("link-property-panel-buttons.created",{buttons:d,link:c});b=b.concat(d);a.Confluence.PropertyPanel.createFromButtonModel(this.name,c,b,f);h++}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/propertypanel/js/property-panel-links","AJS.Confluence.PropertyPanel.Link",function(a){var e=require("ajs");e.bind("init.rte",function(){e.trigger("add-handler.property-panel",a)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:property-panel-image-link-macro-conf-frontend', location = 'tinymce3/plugins/propertypanel/js/property-panel-macros.js' */
define("confluence-editor/tinymce3/plugins/propertypanel/js/property-panel-macros","ajs tinymce jquery confluence/legacy document confluence/macro-js-overrides underscore".split(" "),function(b,m,d,s,n,t,u){var o=[],p=[],l={},k="__PROPERTY_PANEL_SPACER",v=[{key:k}];return{name:"macro",registeredEvents:o,canHandleElement:function(a){return a.hasClass("editor-inline-macro")||a.hasClass("wysiwyg-macro")},handle:function(a){function i(){var c="macro-placeholder-property-panel-remove-button";e.length>
0&&e[e.length-1].key==k&&(c=c+" first");h.push({className:c,text:"Remove",click:function(){b.Confluence.PropertyPanel.destroy();b.Rte.getEditor().execCommand("mceConfRemoveMacro",j)},ariaLabel:"Remove"});if(g.attr("data-macro-parameters")){var a=s.MacroParameterSerializer.deserialize(g.attr("data-macro-parameters"));if("atlassian-macro-output-type"in a){c=function(c){return function(b){a["atlassian-macro-output-type"]=c;g.attr("data-macro-parameters",
s.MacroParameterSerializer.serialize(a));c=="INLINE"?d(".macro-placeholder-property-panel-display-newline-button").removeClass("active"):d(".macro-placeholder-property-panel-display-inline-button").removeClass("active");d(b).addClass("active")}};h.push(null);h.push({className:"macro-placeholder-property-panel-display-newline-button",tooltip:"Display on new line",selected:a["atlassian-macro-output-type"]=="BLOCK",click:c("BLOCK")});h.push({className:"macro-placeholder-property-panel-display-inline-button",
tooltip:"Display inline",selected:a["atlassian-macro-output-type"]=="INLINE",click:c("INLINE")})}}d.each(o,function(){(!this.macroName||this.macroName==f)&&d(n).bind(q(this.id,this.macroName),this.handler)});c=p;f&&l[f]&&(c=c.concat(l[f]));d.each(c,function(){try{this(j,h,w)}catch(c){b.debug("Property panel init handler failed for : "+f+".  Is global handler : "+(d.inArray(this,p)>-1),c)}});if(h.length>0){var c=b.Confluence.PropertyPanel.createFromButtonModel("macro",
j,h,w),x=t.getFunction(f,"propertyPanelIFrameInjector");x&&x(c)}}if(!(a.e.type!=="click"&&a.e.type!=="mouseup")){var j=a.containerEl,g=d(j),f,e=[],a=!g.hasClass("editor-inline-macro"),y=!g.hasClass("wysiwyg-unknown-macro"),h=[],w={originalHeight:a&&g.height(),anchorIframe:b.Rte.getEditorFrame()},q=function(c,a){return c+"-button-click"+(a?a+".macro":"")+".property-panel"};if(y){var r=d.Deferred();f=g.attr("data-macro-name");if(b.MacroBrowser.getMacroMetadata(f))e=b.MacroBrowser.getMacroMetadata(f).buttons;
(a=t.getFunction(f,"getControls"))?a(function(a){var b=e,a=u.filter(a,function(a){return a.type==="button"}),a=u.map(a,function(a){return{key:a.key,label:a.name.value}});e=b.concat(v).concat(a).concat(v);r.resolve()}):r.resolve();r.done(function(){var a="macro-placeholder-property-panel-edit-button";e.length>0&&e[0].key==k&&(a=a+" last");h.push({className:a,text:"Edit",click:function(){b.Confluence.PropertyPanel.destroy();m.confluence.macrobrowser.editMacro(g)},
ariaLabel:"Edit"});d.each(e,function(a,c){if(c.key!=k){var i="macro-property-panel-"+c.key;a>0&&e[a-1].key==k&&(i=i+" first");a<e.length-1&&e[a+1].key==k&&(i=i+" last");h.push({className:i,text:c.label,parameterName:c.key,click:function(){d(n).trigger(q(c.key),g);d(n).trigger(q(c.key,f),g);b.Confluence.PropertyPanel.destroy()}})}})}).then(i())}else i()}},registerButtonHandler:function(a,b,d){Array.isArray(a)||(a=[a]);a.forEach(function(a){o.push({id:a,handler:b,
macroName:d})})},registerInitHandler:function(a,b){if(b){l[b]=l[b]||[];l[b].push(a)}else p.push(a)},yieldButtonFor:function(a,b){var j;d.each(a,function(){this.parameterName&&this.parameterName==b&&(j=this)});return j}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/propertypanel/js/property-panel-macros","AJS.Confluence.PropertyPanel.Macro",function(b){var m=require("ajs");m.bind("init.rte",function(){m.trigger("add-handler.property-panel",b)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:property-panel-image-link-macro-conf-frontend', location = 'tinymce3/plugins/propertypanel/js/property-panel-images.js' */
define("confluence-editor/tinymce3/plugins/propertypanel/js/property-panel-images","jquery ajs tinymce confluence-editor/utils/tinymce-image-utils confluence/meta confluence/legacy confluence/api/browser confluence/property-panel confluence/api/event".split(" "),function(f,j,K,L,z,A,M,h,m){function B(){var a=[];f.each(v,function(b,c){a.push(c)});h.current.panel.find(a.join(", ")).removeClass("active")}function C(){return f("#image-caption-input").val().replace(/\n/g," ")}function r(a,b,c){var f=D(a,
b),c=D(a,c),d=f||c;if(d){var g=h.getAnchor(),e=g.width(),g=g.height(),i=z.get("max-thumb-width"),j=z.get("max-thumb-height");a.thumbnail=k.isRemoteImg(a.destination)?false:k.isThumbnailUsable(f,c,e,g,i,j);a.originalSelected=false;if(b){delete a.height;a.width=d}else{delete a.width;a.height=d}o(a);B();return true}return false}function E(a,b){if(w?r(a,p[b]):r(a,null,p[b])){F(b);o(a);return true}return false}function G(a){delete a.width;delete a.height;a.thumbnail=false;a.originalSelected=true;B();F("original");
var b=h,c=b.getAnchor();b.current.updating=true;c.one("load",function(){l(b);s(a);x(a);a.width=Math.floor(c.width());a.height=Math.floor(c.height())});k.updateImageElement(c,a);c.each(function(){this.complete&&f(this).trigger("load")});return true}function F(a){h.current.panel.find(v[a]).addClass("active")}function H(a){f(".image-border-toggle").toggleClass("active",!a.border);a.border=+!a.border||false;o(a)}function s(a){a=a.width?a.width:h.getAnchor().width();a=Math.floor(a);f("#image-size-input").val(a+
"px")}function x(a){f("#image-caption-input").val(a.title)}function o(a){var b=h,c=b.getAnchor(),f=c.attr("src"),d=c.height();b.current.updating=true;k.updateImageElement(c,a);if(a.src!=f){var g=setInterval(function(){var a=c.height();if(a!=d){j.debug("updateImageElement : height changed after image src change - "+d+" to "+a);clearTimeout(g);g=null;l(b)}},10);setTimeout(function(){if(g){clearTimeout(g);g=null;l(b)}},1E3)}else l(b);s(a);x(a)}function D(a,b){b=parseInt(b);if(!isNaN(b)){b<I?b=I:b>J&&
(b=J);return b}return null}var k=L.ImageUtils,w=k.isScaledByWidth(),p;p=w?{small:100,medium:300,large:500}:{small:150,medium:250,large:400};var v={small:".image-size-small",medium:".image-size-medium",large:".image-size-large",original:".image-size-original"},I=16,J=9E4,l=function(a){a.current.updating=false;a.current.snapToElement({animate:true,animateDuration:100})};return{_resizeImage:r,pluginButtons:[],name:"image",getPresetImageSize:function(a){return p[a]},canHandleElement:function(a){return a.is("img")&&
!a.hasClass("editor-inline-macro")&&!a.hasClass("template-variable")},handle:function(a){function b(a){var b=C(),c,e=h.getAnchor()[0];c=e.getAttribute("data-element-title");if(b!==c){m.trigger("analyticsEvent",{name:"confluence.editor.image.caption.change"});e.setAttribute("data-element-title",b);c=e.getAttribute("data-location")||"";b?e.setAttribute("title",c+" ("+b+")"):e.setAttribute("title",c)}d.title=C();if(!a){r(d,f("#image-size-input").val())||s(d);m.trigger("analyticsEvent",{name:"confluence.editor.image.resize.custom"})}}
function c(){(document.activeElement===t[0]||document.activeElement===y[0])&&b();m.unbind("destroyed.property-panel",c)}var n;n=a.nodeName==="IMG"?a:a.containerEl;var a=f(n),d=K.confluence.ImageProperties(n);if(d&&!a.attr("data-resource-id")){var g=j.Rte.getEditor(),e=function(a){return g.translate(a)},i=function(a){return{className:["image-size-"+a,"editor-resize","resize-"+a].join(" "),text:e("propertypanel.images_"+a),tooltip:e("propertypanel.images_"+a+"_tooltip"),iconClass:"aui-icon aui-icon-small aui-iconfont-image-resize",
click:function(){E(d,a);m.trigger("analyticsEvent",{name:"confluence.editor.image.resize."+a})},selected:w?d.width==p[a]:d.height==p[a]}},i=[{isFooter:true,className:"editable textarea",tooltip:e("propertypanel.images_caption_tooltip"),html:'<textarea placeholder="'+e("propertypanel.images_caption_placeholder")+'" id="image-caption-input"/>'},{className:"editable",tooltip:e("propertypanel.images_sizing_tooltip"),html:'<input id="image-size-input"/>'},null,i("small"),i("medium"),i("large"),{className:"image-size-original",
text:e("propertypanel.images_original"),tooltip:e("propertypanel.images_original_tooltip"),click:function(){G(d);m.trigger("analyticsEvent",{name:"confluence.editor.image.resize.original"})},selected:d.originalSelected},null,{className:"image-border-toggle",text:e("propertypanel.images_border"),tooltip:e("propertypanel.images_border_tooltip"),click:function(){H(d)},selected:d.border||d.border==1}];i.push(null);var k=a.parent();if(k.is("a[href]")){i.push({className:"image-link-edit",text:e("propertypanel.images_link_edit"),
tooltip:e("propertypanel.images_link_edit_tooltip"),click:function(){h.destroy();g.selection.select(k[0]);A.Editor.LinkBrowser.open()}});i.push({className:"image-link-remove",text:e("propertypanel.images_link_remove"),tooltip:e("propertypanel.images_link_remove_tooltip"),click:function(){h.destroy();g.execCommand("mceConfUnlink",false,n);g.focus()}})}else i.push({className:"image-make-link",text:e("propertypanel.images_link_create"),tooltip:e("propertypanel.images_link_create_tooltip"),iconClass:"aui-icon aui-icon-small aui-iconfont-link",
click:function(){h.destroy();g.selection.select(n);A.Editor.LinkBrowser.open()}});for(var l=h.Image.pluginButtons,u=0;u<l.length;u++)if(l[u]===null)i.push(null);else{var o=l[u].create(a);o&&i.push(o)}h.createFromButtonModel(this.name,n,i,{anchorIframe:j.Rte.getEditorFrame()});var t=f("#image-size-input"),y=f("#image-caption-input");t.bind("focus",function(){f(this).select()});y.keydown(function(a){if(a.key==="Enter"){a.preventDefault();b(true);h.destroy()}});t.bind("change",function(){b()});y.bind("input",
function(){b(true)});m.bind("destroyed.property-panel",c);(new M(window.navigator.userAgent)).isIE()&&t.bind("keyup",function(a){a.keyCode===13&&b()});h.current.imageProps=d;s(d);x(d);var q=d;return{setPresetSize:function(a){E(q,a)},setPixelSize:function(a){r(q,a)},setToOriginalSize:function(){G(q)},toggleBorder:function(){H(q)},getWidth:function(){return q.width},getHeight:function(){return q.height},getDisplayWidth:function(){return f("#image-size-input").val()},isButtonSelected:function(a){return h.current.panel.find(v[a]).hasClass("active")}}}}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/propertypanel/js/property-panel-images","AJS.Confluence.PropertyPanel.Image",function(f){var j=require("ajs");j.bind("init.rte",function(){j.trigger("add-handler.property-panel",f)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:property-panel-image-link-macro-conf-frontend', location = 'tinymce3/plugins/imageproperties/js/image-properties-dialog.js' */
define("confluence-editor/tinymce3/plugins/imageproperties/js/image-properties-dialog",["jquery","ajs"],function(d,a){function l(){h||(h=d("#image-properties-tab-items > div").map(function(){var a=d(this);return{key:a.text(),weight:a.attr("data-weight"),label:this.title}}).sort(function(a,b){return a.weight-b.weight}));return h}function m(){var a=c.popup.element,b=650/60,e=d('<div class="image-properties-loading-blanket"><div class="loading-data"></div></div>').appendTo(a.find(".dialog-page-body")),
f=e.find(".loading-data");e.css({width:e.parent().width(),height:a.height()});f.css({marginTop:-60,marginLeft:-60});f.spin({color:'var("--ds-text", #666)',width:b,radius:25,length:25,top:0,left:0,zIndex:0,speed:1.042});var a=[],g;for(g in i)b=i[g],(b=b.saveFn&&b.saveFn())&&b.done&&a.push(b);d.when.apply(d,a).done(function(){var a=c.popup.element.find(".image-properties-loading-blanket .loading-data");a.css({marginTop:"",marginLeft:""});a.spinStop();a.closest(".image-properties-loading-blanket").remove();
c.hide().remove()})}function o(){c.hide().remove()}var c,h,i={},n;return{init:function(){n||(h=null,0<l().length&&(n=!0,a.Confluence.PropertyPanel.Image.pluginButtons.push(null,{create:function(){return{className:"image-properties",text:"Properties",tooltip:"Set additional image properties",click:function(h,b){a.trigger("analyticsEvent",{name:"confluence.editor.image-properties-trigger"});a.Confluence.PropertyPanel.destroy();d("#image-properties-dialog").remove();
c=new a.ConfluenceDialog({id:"image-properties-dialog",onSubmit:m});a.trigger("dialog-created.image-properties",{img:b});c.popup.element.attr("data-tab-default","0");c.addHeader("Image properties");c.addSubmit("Save",m);c.addCancel("Cancel",o);for(var e=c,f=l(),g=0;g<f.length;g++){var j=f[g],k=i[j.key];k&&e.addPanel(j.label,k.content,k.panelClass,j.key)}1===f.length&&e.popup.element.find(".dialog-page-menu").show();
a.trigger("dialog-before-show.image-properties");c.show()}}}})))},registerPanel:function(a,b,c,d){i[a]={content:b,panelClass:c,saveFn:d}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/tinymce3/plugins/imageproperties/js/image-properties-dialog","Confluence.Editor.ImageProps",function(d){var a=require("ajs");a.toInit(d.init);a.bind("quickedit.success",d.init)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-templates:template-editor-variables-resources', location = 'js/variable-manager.js' */
define("confluence-templates/variable-manager",["confluence/api/event","jquery"],function(f,g){function i(c,a){var b=c.toLocaleLowerCase(),d=a.toLocaleLowerCase(),b=b.localeCompare(d);0==b&&(b=c.localCompare(a));return b}function h(c){return g.extend(!0,{},e.defaults[c]||e.defaults.string)}var e=function(){var c={};return{find:function(a){var a=a.toLocaleLowerCase(),b={},d;for(d in c)if(c.hasOwnProperty(d)&&(!a.length||0===d.toLocaleLowerCase().indexOf(a)))b[d]=c[d];return b},contains:function(a){return!!c[a]},
get:function(a){return c[a]},getAll:function(){return g.extend(!0,{},c)},getSortedNames:function(){var a=[],b;for(b in c)a.push(b);return a.sort(i)},add:function(a,b){c[a]=b||h();f.trigger("add.confluence-variable",{name:a,details:g.extend(!0,{},b)})},del:function(a){var b=c[a];delete c[a];f.trigger("delete.confluence-variable",{name:a,details:g.extend(!0,{},b)})},rename:function(a,b){var d=c[a];delete c[a];d&&(c[b]=d,f.trigger("rename.confluence-variable",{oldName:a,newName:b,details:g.extend(!0,
{},details)}))},createDefault:h}};e.defaultVariableManager=e();e.defaults={textarea:{type:"textarea",rows:5,columns:100},list:{type:"list",options:[]},string:{type:"string"}};return e});"template"===AJS.Meta.get("content-type")&&require("confluence/module-exporter").safeRequire("confluence-templates/variable-manager",function(f){require("confluence/legacy").VariableManager=f});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-templates:template-editor-variables-resources', location = 'js/variable-placeholder.js' */
define("confluence-templates/variable-placeholder",["ajs","jquery"],function(a,d){return{component:{insertPlaceholder:function(c,e){var b;b="$"+c;var f=a.Rte.getEditor();a.Rte.BookmarkManager.storeBookmark();b={title:b,src:a.Meta.get("context-path")+"/plugins/servlet/confluence/placeholder/template-variable?name="+encodeURIComponent(c),"data-variable-name":c,"class":"template-variable",alt:"$"+c};e&&d.extend(b,e);b=d("<img/>").attr(b);f.selection.setNode(b[0])}},init:function(){d(a.Rte.getEditor().getBody()).delegate("img.template-variable",
"dragstart",function(a){a.preventDefault()})}}});"template"===AJS.Meta.get("content-type")&&require("confluence/module-exporter").safeRequire("confluence-templates/variable-placeholder",function(a){require("confluence/legacy").VariablePlaceHolder=a.component;require("ajs").bind("init.rte",a.init)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-templates:template-editor-variables-resources', location = 'js/variable-toolbar.js' */
define("confluence-templates/variable-toolbar",["ajs","document","confluence/api/event","jquery","confluence/legacy"],function(e,k,h,f,c){return{init:function(){h.bind("init.rte",function(){var g=c.VariableManager.defaultVariableManager,a=f("#template-menu"),i=a.find(".variables-list");h.bind("add.confluence-variable,delete.confluence-variable,rename.confluence-variable",function(){var b=g.getSortedNames(),j=b.length,d="";i.toggleClass("hidden",!j);for(var a=0;a<j;a++)d+=c.Templates.Variables.renderVariableItem({variableName:"$"+
b[a],tooltip:e.format("Insert the \u0027\u0027{0}\u0027\u0027 field into the page for the template user to fill out.",b[a])});i.html(d)});a.delegate(".variables-list a","click",function(){var b=f(this).attr("data-variable-name");!g.contains(b)&&g.add(b);c.VariablePlaceHolder.insertPlaceholder(b)});a.delegate(".variables-add","click",function(b){var a=c.Editor.Autocompleter.Manager.getInputDrivenDropdown();e.Rte.getEditor().focus();(!a||a.inactive)&&c.Editor.Autocompleter.Manager.shortcutFired("$",!0);b.stopPropagation()});f(k).bind("showLayer",
function(b,c,d){"dropdown"===c&&d.$.closest(a).length&&d.reset()})})}}});"template"===AJS.Meta.get("content-type")&&require("confluence/module-exporter").safeRequire("confluence-templates/variable-toolbar",function(e){e.init()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-templates:template-editor-variables-resources', location = 'js/autocomplete-settings-variables.js' */
define("confluence-templates/autocomplete-settings-variables",["confluence/legacy","ajs"],function(d,c){return function(){function e(a,b){return{callback:function(c){c.replaceWithSelectedSearchText();!f.contains(a)&&f.add(a);d.VariablePlaceHolder.insertPlaceholder(a,b)},name:c.escapeHtml(a),href:"#"}}function i(a,b){return!a&&!b?0:!a?-1:!b?1:a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase())}var f=d.VariableManager.defaultVariableManager;return{ch:"$",cache:!1,endChars:[],dropDownDelay:0,
preventStartNodes:"",dropDownClassName:"autocomplete-variables",selectFirstItem:!0,getHeaderText:function(a,b){return b?"Variable suggestions":"Variable suggestions"},getAdditionalLinks:function(a,b){var e=d.unescapeEntities(b);return f.get(e)||0===b.length?[]:[{className:"dropdown-create-variable",href:"#",callback:function(a){var b=a.plainText();a.replaceWithSelectedSearchText();!f.contains(b)&&f.add(b);d.VariablePlaceHolder.insertPlaceholder(b,
void 0)},name:c.format("Create variable \u0027\u0027{0}\u0027\u0027",b)}]},getDataAndRunCallback:function(a,b,c){var g,k,a=d.unescapeEntities(b),j=f.find(a),h=[],l=[];for(g in j)j.hasOwnProperty(g)&&h.push(g);h.sort(i);a=0;for(k=h.length;a<k;a++)g=h[a],l.push(e(g,j[g]));c([l],b)},update:function(){}}}});
require("confluence/module-exporter").safeRequire("confluence-templates/autocomplete-settings-variables",function(d){var c=require("ajs"),e=require("confluence/legacy"),i=require("confluence/meta");c.bind("init.rte",function(){var c=require("tinymce");"template"===i.get("content-type")&&(e.Editor.Autocompleter||(e.Editor.Autocompleter=c.confluence.Autocompleter),e.Editor.Autocompleter.Settings.$=d())})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-templates:template-editor-variables-resources', location = 'js/property-panel-variables.js' */
define("confluence-templates/property-panel-variables",["ajs","jquery","confluence/legacy"],function(b,a,h){return{name:"variable",canHandleElement:function(a){return a.hasClass("template-variable")},handle:function(f){function l(d){b.debug("clicked type: "+d);var c=a("#property-panel");c.find(".panel-buttons").toggleClass("no-inputs","string"===d);c.find(".textarea-section,.list-section,.string-section").addClass("hidden");c.find("."+d+"-section").removeClass("hidden");"textarea"===d?(a("#variable-property-panel-textarea-rows").val(e.rows),
a("#variable-property-panel-textarea-columns").val(e.columns)):"list"===d&&a("#variable-property-panel-list-values").val(e.options.join(","))}function i(d,b,c){return{className:"variable-property-panel-type-item variable-property-panel-type-"+d,text:b,tooltip:c,selected:m===d,click:function(){e.type=d;e=j.createDefault(d);j.add(k,e);a(".variable-property-panel-type-item").removeClass("selected");a(".variable-property-panel-type-"+d).addClass("selected");l(d)}}}function g(a){return m===a?"":" hidden"}
if(!("click"!==f.e.type&&"mouseup"!==f.e.type)){var f=f.containerEl,n=a(f),k,c=[],o={originalHeight:n.height(),anchorIframe:b.Rte.getEditorFrame()};k=n.attr("data-variable-name");var j=h.VariableManager.defaultVariableManager,e=j.get(k),m=e&&e.type||"string";c.push(i("string","Text","Single line text input field."));c.push(i("textarea","Multi-line Text","Multi-line text input field."));
c.push(i("list","List","Drop down list."));c.push(null);c.push({className:"editable textarea-section"+g("textarea"),tooltip:"Number of rows to display for the field.",html:'<input id="variable-property-panel-textarea-rows"/>'});c.push({className:"variable-property-panel-textarea-split textarea-section"+g("textarea"),tooltip:"",html:"<span>x</span>"});c.push({className:"editable textarea-section"+
g("textarea"),tooltip:"Number of columns to display for the field.",html:'<input id="variable-property-panel-textarea-columns"/>'});c.push(null);c.push({className:"editable list-section"+g("list"),tooltip:"Enter each item for the list, separating each with a comma.",html:"<input id=\"variable-property-panel-list-values\" size='50'/>"});b.Confluence.PropertyPanel.createFromButtonModel("variable",f,c,o);l(e.type);a("#variable-property-panel-textarea-rows").change(function(){e.rows=
+a(this).val()||h.VariableManager.defaults.textarea.rows});a("#variable-property-panel-textarea-columns").change(function(){e.columns=+a(this).val()||h.VariableManager.defaults.textarea.columns});a("#variable-property-panel-list-values").change(function(){var d,b,c,f=a(this).val().split(",");e.options=[];d=0;for(b=f.length;d<b;d++)(c=a.trim(f[d]))&&e.options.push(c)});a("#variable-property-panel-textarea-rows,#variable-property-panel-textarea-columns,#variable-property-panel-list-values").keypress(function(b){13===
b.which&&a(this).blur()})}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-templates/property-panel-variables","AJS.Confluence.PropertyPanel.Variable",function(b){var a=require("ajs");a.bind("init.rte",function(){a.trigger("add-handler.property-panel",b)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-templates:template-editor-variables-resources', location = 'js/variable-marshaller.js' */
define("confluence-templates/variable-marshaller",["ajs","jquery","confluence/legacy"],function(d,b,p){function q(c){var a=c.attr("data-variable-type");return"textarea"===a?{type:a,rows:+c.attr("data-variable-rows")||i,columns:+c.attr("data-variable-columns")||r}:"list"===a?{type:a,options:c.find("li").map(function(){return b(this).attr("data-variable-option")}).toArray()}:{type:"string"}}function m(){var c=b(d.Rte.getEditor().getBody()).find("img[data-variable-name]"),a={};b.map(c,function(c){var f=
{};b(c).attr("data-variable-raw-xhtml")&&(f={"data-variable-raw-xhtml":!0});a[b(c).attr("data-variable-name")]=f});return a}var i=5,r=100;return function(){function c(a){for(var b in a)a.hasOwnProperty(b)&&!f.contains(b)&&(d.debug("adding: ",b),f.add(b,a[b]))}var a=d.Rte.getEditor(),i=b(a.getBody()),f=p.VariableManager.defaultVariableManager;a.on("GetContent",function(a){if(!a.selection){var d=b("<div></div>"),i=b("<ul></ul>").attr("data-variable-declarations","true"),e;d.append(i);var n=m();c(n);
var o=f.getAll(),l;for(l in o)if(n.hasOwnProperty(l)){var j=l;e=o[l];var g=void 0,k=void 0,g=e.type,h=b("<li></li>");h.attr("data-variable-name",j);h.attr("data-variable-type",g);h.text(j);if("textarea"===g)h.attr("data-variable-rows",e.rows),h.attr("data-variable-columns",e.columns);else if("list"===g){g=b("<ul></ul>");j=void 0;for(j in e.options)k=e.options[j],k=b("<li></li>").text(k).attr("data-variable-option",k),g.append(k);h.append(g)}e=h;i.append(e)}a.content=d.html()+a.content}});a=i.find("ul[data-variable-declarations]");
a.remove();a.find("li[data-variable-name]").each(function(){var a=b(this);f.add(a.attr("data-variable-name"),q(a))});c(m())}});"template"===AJS.Meta.get("content-type")&&require("confluence/module-exporter").safeRequire("confluence-templates/variable-marshaller",function(d){require("ajs").bind("init.rte",d)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-templates:template-editor-variables-template-resources', location = 'js/variable-templates.soy' */
// This file was automatically generated from variable-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Variables.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Variables == 'undefined') { Confluence.Templates.Variables = {}; }


Confluence.Templates.Variables.renderVariableItem = function(opt_data, opt_ignored) {
  return '<li class="dropdown-item" data-tooltip="' + soy.$$escapeHtml(opt_data.tooltip) + '"><a href="#" class="item-link variable-item" title="' + soy.$$escapeHtml(opt_data.variableName) + '" data-variable-name="' + soy.$$escapeHtml(opt_data.variableName) + '">' + soy.$$escapeHtml(opt_data.variableName) + '</a></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Variables.renderVariableItem.soyTemplateName = 'Confluence.Templates.Variables.renderVariableItem';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.onresolve.confluence.groovy.groovyrunner:split_createPage', location = 'js/createPage.8c072a29a501af47423b.js' */
"use strict";(self.webpackJsonpScriptRunner=self.webpackJsonpScriptRunner||[]).push([["createPage"],{98725:function(){var e=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,a=t&&e[t],r=0;if(a)return a.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};function t(e,t){var n=e(t),o=n.find("a.adaptavist-create-page-link"),i=o.attr("href"),c=o.attr("openInNewTab"),l=a("parentId",i),s=a("spaceKey",i),f=function(t){var a=r(o,n),l=AJS.escapeHtml(a);if(!1===t.success)AJS.messages.warning(e("#action-messages"),{title:t.errorMessage,body:"<p>Title: ".concat(l,"</p><p>Space: ").concat(AJS.escapeHtml(s),"</p>")}),o.attr("href",i);else{var f=i.concat("&title=".concat(encodeURIComponent(a)));"true"===c?(AJS.$("#text-input").val(""),window.open(f,"_blank")):window.location.href=f,o.attr("href",i)}},u=function(t){t.preventDefault(),o.removeAttr("href");var a=r(o,n);""!==a&&e.ajax({type:"POST",url:"".concat(AJS.contextPath(),"/rest/create-page/1.0/pageResources/pagesExist"),data:JSON.stringify({space:s,title:a,parentId:l}),error:function(t,a,r){console.error(t.statusText),console.error(a),console.error(r),AJS.messages.error(e("#action-messages"),{title:"JS ERROR",body:r})},dataType:"json",contentType:"application/json; charset=utf-8",success:f,async:!1})},d=n.find(".create-page-dialog");n.find(".dialog-close-button").off("click").on("click",(function(){AJS.dialog2(d).hide()})),n.find(".dialog-submit-button").off("click").on("click",(function(e){var t=d.find("input").val();o.attr("data-title-dialog",t),""===t?d.find(".submitHiddenButton").click():(AJS.dialog2(d).hide(),u(e))})),o.off("click").on("click",u)}function a(e,t){var a=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),r=new RegExp("[?&]".concat(a,"=([^&#]*)")).exec(t);return null===r?null:r[1]}function r(e,t){var a=e.attr("data-title-dialog");if(""===a){var r=t.find(".create-page-dialog");return AJS.dialog2(r).show(),""}return e.attr("data-prefix")&&(a=e.attr("data-prefix")+a),e.attr("data-postfix")&&(a+=e.attr("data-postfix")),a}jQuery((function(a){var r=document.querySelector("#main-content");if(a(".create-page-main-div").each((function(e,r){t(a,r)})),r){new MutationObserver((function(r){r.forEach((function(r){var n,o,i,c,l=r.addedNodes;if(l){var s=a(l);try{for(var f=e(s),u=f.next();!u.done;u=f.next()){var d=u.value.getElementsByClassName("create-page-main-div");if(d)try{for(var p=(i=void 0,e(d)),v=p.next();!v.done;v=p.next()){var g=v.value;t(a,g)}}catch(e){i={error:e}}finally{try{v&&!v.done&&(c=p.return)&&c.call(p)}finally{if(i)throw i.error}}}}catch(e){n={error:e}}finally{try{u&&!u.done&&(o=f.return)&&o.call(f)}finally{if(n)throw n.error}}}}))})).observe(r,{childList:!0,subtree:!0})}}))}},e=>{var t;t=98725,e(e.s=t)}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.onresolve.confluence.groovy.groovyrunner:split_pageInfo', location = 'js/pageInfo.309040334d824f7c2399.js' */
"use strict";(self.webpackJsonpScriptRunner=self.webpackJsonpScriptRunner||[]).push([["pageInfo"],{47753:()=>{AJS.toInit((function(){AJS.MacroBrowser.setMacroJsOverride("page-info",{beforeParamsSet:function(e){var a=e[""];if(a)switch(a){case"created-user":e.infoType="Created by";break;case"created-date":e.infoType="Create date";break;case"modified-user":e.infoType="Modified by";break;case"modified-users":e.infoType="Modified users";break;case"modified-date":e.infoType="Modified date";break;case"participants":e.infoType="Participants";break;case"commenters":e.infoType="Commenters";break;case"current-version":e.infoType="Current version";break;case"versions":e.infoType="Versions";break;case"diffs":e.infoType="Diffs";break;case"labels":e.infoType="Labels";break;case"tinyurl":e.infoType="Tiny url";break;case"title":e.infoType="Title";break;case"pageId":e.infoType="Page id"}return e}})}))}},e=>{var a;a=47753,e(e.s=a)}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-mentions-plugin:smart-mentions-editor-resources', location = 'templates/mentions.soy' */
// This file was automatically generated from mentions.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Mentions.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Mentions == 'undefined') { Confluence.Templates.Mentions = {}; }


Confluence.Templates.Mentions.userNotFoundResult = function(opt_data, opt_ignored) {
  return '<div class="mention-error no-result">' + soy.$$escapeHtml('Sorry, we can\x27t find that person') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Mentions.userNotFoundResult.soyTemplateName = 'Confluence.Templates.Mentions.userNotFoundResult';
}


Confluence.Templates.Mentions.searchFailureResult = function(opt_data, opt_ignored) {
  return '<div class="mention-error search-failure"><div class="search-failure-title">' + soy.$$escapeHtml('Something went wrong') + '</div><div class="search-failure-body">' + soy.$$escapeHtml('We can\x27t fetch people right now. Try again in a few minutes.') + '</div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Mentions.searchFailureResult.soyTemplateName = 'Confluence.Templates.Mentions.searchFailureResult';
}


Confluence.Templates.Mentions.loadingPlaceholder = function(opt_data, opt_ignored) {
  return '<div class="mention-loading"><div class="avatar-placeholder"></div><div class="text-container"><div class="text-placeholder lg"></div><div class="text-placeholder sm"></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Mentions.loadingPlaceholder.soyTemplateName = 'Confluence.Templates.Mentions.loadingPlaceholder';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-mentions-plugin:smart-mentions-editor-resources', location = '/js-target/bundle.js' */
define("confluence-mentions", ["ajs","confluence/meta","jquery","confluence/legacy","confluence/templates","confluence-editor/tinymce3/plugins/autocomplete/autocomplete-manager","tinymce","confluence/storage-manager","confluence/dark-features","confluence/analytics-support","confluence-link-browser/link-object","confluence-editor/tinymce3/plugins/autocomplete/autocomplete-settings"], function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_36__, __WEBPACK_EXTERNAL_MODULE_44__, __WEBPACK_EXTERNAL_MODULE_50__, __WEBPACK_EXTERNAL_MODULE_51__, __WEBPACK_EXTERNAL_MODULE_52__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports) {
    'use strict';

    exports.default = {
        CURRENT: 'current',
        RELATED: 'related',
        RECENT: 'recent',
        SERVER: 'server'
    };
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(0), __webpack_require__(29), __webpack_require__(36), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _ajs, _lruCache, _storageManager, _userSupplierKeys) {
    'use strict';

    var AJS = _interopRequireDefault(_ajs).default;

    var LRU = _interopRequireDefault(_lruCache).default;

    var StorageManager = _interopRequireDefault(_storageManager).default;

    var UserSupplier = _interopRequireDefault(_userSupplierKeys).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * Returns users from a localstorage-backed LRU (least-recently-used) cache, and adds entries to that cache.
     */
    var inMemoryCache = void 0;
    var persistentCache = void 0;

    var CACHE_PREFIX = 'mentions';
    var CACHE_ID = 'recently-mentioned-users';
    var CACHE_ITEMS_KEY = 'items';

    /**
     * The maximum number of recently-mentioned users to keep in the cache.
     * @type {number}
     */
    var RECENT_USER_LIMIT = 20;
    /**
     * WaterTightValidation means that any users at or past this expiry _must_ be refreshed before being displayed in the UI.
     * @type {{expireTimeMillis: number}}
     */
    var WATERTIGHT_VALIDATION = { expireTimeMillis: 29 * 24 * 60 * 60 * 1000 }; //29 days in millis
    /**
     * EarlyValidation means that any users at or past this expiry _should_ be refreshed after the UI is completed (so as to not block users)
     * @type {{expireTimeMillis: number}}
     */
    var EARLY_VALIDATION = { expireTimeMillis: 7 * 24 * 60 * 60 * 1000 }; //7 days in millis
    /**
     * stores the enums used for calls to {getStaleUsers()}.
     * @type {{WATERTIGHT_VALIDATION: {expireTimeMillis: number}, EARLY_VALIDATION: {expireTimeMillis: number}}}
     */
    var ValidationType = { WATERTIGHT_VALIDATION: WATERTIGHT_VALIDATION, EARLY_VALIDATION: EARLY_VALIDATION };

    // Lazy-initialise to avoid interacting with localStorage when it isn't required.
    function loadCache() {
        inMemoryCache = LRU(RECENT_USER_LIMIT);
        persistentCache = new StorageManager(CACHE_PREFIX, CACHE_ID);

        var recentUsersDump = persistentCache.getItem(CACHE_ITEMS_KEY);
        if (recentUsersDump) {
            var recentUsersJson = JSON.parse(recentUsersDump);
            inMemoryCache.load(recentUsersJson);
        }
    }

    function getUsers() {
        return new Promise(function (resolve) {
            inMemoryCache || loadCache();

            // Add users with order of most-recently-mentioned first
            var users = [];
            var index = 0;
            inMemoryCache.forEach(function (user) {
                user.supplier = UserSupplier.RECENT;
                user.role = null;
                user.sortIndex = index++;
                users.push(user);
            });
            AJS.debug('Found ' + users.length + ' recently-mentioned users');
            resolve(users);
        });
    }

    /**
     * Store a recently-mentioned User in the cache.
     * @param user
     * @param refreshed {Boolean} true if the user is from the server. This will update the timestamp of the last refresh to now().
     *                            Defaults to false if not passed in.
     */
    function store(user, refreshed) {
        inMemoryCache || loadCache();
        var oldUser = inMemoryCache.peek(user.username);
        var oldRefreshDate = oldUser ? oldUser.refreshedAt || 0 : 0;
        var refreshedAt = refreshed || !oldUser ? new Date().getTime() : oldRefreshDate;
        inMemoryCache.set(user.username, Object.assign({}, user.model ? user.model : user, { timestamp: user.timestamp, refreshedAt: refreshedAt }));
        persistentCache.setItemQuietly(CACHE_ITEMS_KEY, JSON.stringify(inMemoryCache.dump()));
    }

    function remove(username) {
        inMemoryCache || loadCache();
        inMemoryCache.del(username);
        persistentCache.setItemQuietly(CACHE_ITEMS_KEY, JSON.stringify(inMemoryCache.dump()));
    }

    /**
     * A stale user is one which has not been refreshed from the server for X days or more, X being calculated from the validation type.
     * @param validationType {{expireTimeMillis: number}} an enum to flag what kind of stale users to return. Use a value from ValidationType
     * @return {Array} a list of stale usersnames (NOTE: not the user objects - just the usernames)
     */
    function getStaleUsers(validationType) {
        inMemoryCache || loadCache();
        var stale = [];
        var now = new Date().getTime();
        //use a hack to iterate the keys to prevent the LRU from changing the ordering
        var existingKeys = inMemoryCache.keys();
        existingKeys.map(function (k) {
            return [inMemoryCache.peek(k), k];
        }).forEach(function (entry) {
            var val = entry[0];
            var key = entry[1];
            if (!val.refreshedAt || now - val.refreshedAt > validationType.expireTimeMillis) {
                stale.push(key);
            }
        });
        return stale;
    }

    function refresh(users) {
        inMemoryCache || loadCache();
        users.forEach(function (user) {
            if (inMemoryCache.has(user.username)) {
                var entry = inMemoryCache.peek(user.username);
                var timestamp = entry.timestamp || 0;
                //treat no timestamp as though it is stale, and refresh it
                if (!user.timestamp || !timestamp || user.timestamp > timestamp) {
                    store(user, true);
                }
            }
        });
    }

    // Used in tests
    function _clear() {
        loadCache();
    }

    exports.default = {
        getUsers: getUsers,
        store: store,
        remove: remove,
        getStaleUsers: getStaleUsers,
        refresh: refresh,
        _clear: _clear,
        RECENT_USER_LIMIT: RECENT_USER_LIMIT,
        ValidationType: ValidationType
    };
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(0), __webpack_require__(7), __webpack_require__(14), __webpack_require__(41), __webpack_require__(48), __webpack_require__(17)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _ajs, _userSupplierManager, _userCache, _pipelines, _executor, _scoreBooster) {
    'use strict';

    var AJS = _interopRequireDefault(_ajs).default;

    var userSupplierManager = _interopRequireDefault(_userSupplierManager).default;

    var UserCache = _interopRequireDefault(_userCache).default;

    var Pipelines = _interopRequireDefault(_pipelines).default;

    var PipelineExecutor = _interopRequireDefault(_executor).default;

    var ScoreBooster = _interopRequireDefault(_scoreBooster).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    "use strict";

    /**
     * The maximum number of Users that will be displayed in the Mentions dropdown.
     */
    var DISPLAY_LIMIT = 5;
    var NON_BREAKING_SPACE = String.fromCharCode(160);

    // The last query to be triggered, used when server responses return out of order and we need to skip the render of
    // stale responses.
    var latestQuery = void 0;

    /**
     *
     * @param {string}   query              User's query
     * @param {function} renderCallback     Callback function to render the results
     * @param {function} selectedUser       (optional) the currently-selected user in the dropdown
     * @param {object} editor               the currently-active editor
     */
    function searchAndRender(query, renderCallback, selectedUser, editor) {
        // Trim the query but don't convert to lowercase just yet - the ranker should handle this. (i.e. upper case
        // letters could be weighted higher in matches).
        // Note that 160 is the non-breaking-space character and is not handled by trim().
        // It IS handled by $.trim(str) but noooooo, noooooo.
        query = query.replace(NON_BREAKING_SPACE, ' ').trim();
        latestQuery = query;

        var promises = userSupplierManager.search(query, editor);

        promises.client.then(function () {
            resolveClientUsers();
            // Guarantee that server results are handled after local ones - chain the promises!
            promises.server.then(resolveServerUsers, renderErrorOnReject);
        }, renderErrorOnReject);

        function resolveClientUsers() {
            renderPipeline(UserCache.getAll(), query, renderCallback, selectedUser, false);
        }

        function resolveServerUsers() {
            // We could in future wrap the renderCallback so that if the server render would have the same values as the
            // client render, we skip it and avoid a browser repaint.
            renderPipeline(UserCache.getAll(), query, renderCallback, selectedUser, true);
        }

        function renderErrorOnReject() {
            var iterator = new PipelineExecutor(Pipelines.error(renderCallback));
            iterator.execute([]);
        }
    }

    function renderPipeline(users, query, renderCallback, selectedUser, isServerCall) {
        var context = {
            query: query,
            latestQuery: latestQuery,
            selectedUser: selectedUser,
            isServerCall: isServerCall,
            DISPLAY_LIMIT: DISPLAY_LIMIT
        };

        var pipeline = void 0;
        if (!query) {
            pipeline = Pipelines.default(renderCallback);
        } else {
            pipeline = isServerCall ? Pipelines.server(renderCallback) : Pipelines.client(renderCallback);
        }

        var executor = new PipelineExecutor(pipeline, context);
        executor.execute(users);
    }

    // Called during testing to clear caches.
    function reset() {
        userSupplierManager.reset();
        UserCache._clear();
        ScoreBooster.reset();
    }

    exports.default = {
        searchAndRender: searchAndRender,
        prefetchSuppliers: userSupplierManager.prefetchSuppliers,
        reset: reset
    };
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(8), __webpack_require__(4), __webpack_require__(11), __webpack_require__(40), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _relatedUsersSupplier, _recentUsersSupplier, _serverUsersSupplier, _currentUserSupplier, _userCache) {
    'use strict';

    var RelatedUsersSupplier = _interopRequireDefault(_relatedUsersSupplier).default;

    var RecentUsersSupplier = _interopRequireDefault(_recentUsersSupplier).default;

    var ServerUsersSupplier = _interopRequireDefault(_serverUsersSupplier).default;

    var CurrentUserSupplier = _interopRequireDefault(_currentUserSupplier).default;

    var UserCache = _interopRequireDefault(_userCache).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    "use strict";

    /**
     *
     * @param {string}   query              User's query
     * @param {object}   editor             the currently-active editor
     */
    function search(query, editor) {

        var serverUsersPromise = ServerUsersSupplier.getUsers(query);
        var relatedUsersPromise = RelatedUsersSupplier.getUsers(editor);
        var recentUsersPromise = RecentUsersSupplier.getUsers();
        var currentUserPromise = CurrentUserSupplier.getCurrentUser();

        var fastPromises = [relatedUsersPromise, recentUsersPromise, currentUserPromise];

        return {
            client: Promise.all(fastPromises).then(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 3),
                    relatedUsers = _ref2[0],
                    recentUsers = _ref2[1],
                    currentUser = _ref2[2];

                UserCache.addAll(relatedUsers);
                UserCache.addAll(recentUsers, true);
                if (currentUser) {
                    // May be undefined if anonymous.
                    UserCache.add(currentUser, true);
                }
            }),
            server: serverUsersPromise.then(function (serverUsers) {
                UserCache.addAll(serverUsers);
                RecentUsersSupplier.refresh(serverUsers);
            })
        };
    }

    function prefetchSuppliers(editor) {
        var waterTightValidationCheck = RecentUsersSupplier.getStaleUsers(RecentUsersSupplier.ValidationType.WATERTIGHT_VALIDATION);
        if (waterTightValidationCheck.length > 0) {
            //found some users whose stale for longer than 30 days. Must revalidate and delete if needed, before showing in UI.
            deleteStaleUsers(waterTightValidationCheck, RecentUsersSupplier.ValidationType.WATERTIGHT_VALIDATION);
        }
        // This will load related users into the cache in 'service/content-users/users-related-to-content'.
        RelatedUsersSupplier.getUsers(editor);
    }

    function deleteStaleUsers(usersToCheck, validationType) {
        ServerUsersSupplier._searchWithUsernames(usersToCheck).then(function (resultUsers) {
            RecentUsersSupplier.refresh(resultUsers);
            //if users are still stale after a refresh, it means they've not been returned by the server
            //time to delete 'em
            var usersToDelete = RecentUsersSupplier.getStaleUsers(validationType);
            usersToDelete.forEach(function (u) {
                return RecentUsersSupplier.remove(u);
            });
        });
    }

    // Reset any of the suppliers that hold state. Used in testing.
    function reset() {
        RelatedUsersSupplier.reset();
        ServerUsersSupplier.reset();
        RecentUsersSupplier._clear();
    }

    exports.default = {
        search: search,
        prefetchSuppliers: prefetchSuppliers,
        deleteStaleUsers: deleteStaleUsers,
        reset: reset
    };
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(24), __webpack_require__(25)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _draftContentSupplier, _usersRelatedToContent) {
    'use strict';

    var getDraft = _interopRequireDefault(_draftContentSupplier).default;

    var UsersRelatedToContent = _interopRequireDefault(_usersRelatedToContent).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     Returns users related to the Content currently in the Editor, optionally filtered by a search string.
    
     You can test this logic in your browser console against a running instance by running something like :
    
     `require('confluence-mentions').userSuppliers.contentRelated.getUsers().then((result) => { window.relatedUsers = result; });`
    
     and then viewing the `window.relatedUsers` value.
     */
    function getUsers(editor) {
        var content = getDraft(editor);
        return UsersRelatedToContent.getUsers(content);
    }

    /*
     We assume that all useful information is returned in the getUsersRelatedTo call.
     */
    function isExhausted() {
        return true;
    }

    // Clears the related user cache, used in testing.
    function reset() {
        UsersRelatedToContent.reset();
    }

    exports.default = {
        getUsers: getUsers,
        isExhausted: isExhausted,
        reset: reset
    };
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _i18n) {
    'use strict';

    var I18n = _interopRequireDefault(_i18n).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var newRole = function newRole(role) {
        return {
            role: role,
            i18n: I18n('user.role.' + role)
        };
    }; /**
        A simple User Role bean that can provide its i18n'd display name.
        */
    exports.default = {
        CREATOR: newRole('creator'),
        CONTRIBUTOR: newRole('contributor'),
        COMMENTER: newRole('commenter'),
        ANCESTOR_COMMENTER: newRole('ancestorCommenter') // never shown, but available
    };
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _ajs) {
    'use strict';

    var AJS = _interopRequireDefault(_ajs).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var i18nMap = {
        'user.role.creator': "Creator",
        'user.role.contributor': "Contributor",
        'user.role.commenter': "Commenter",
        'user.supplier.recent': "Recent"
    }; /**
        A way to get the i18nTransformer away from all-the-JS, this module allows clients to get I18n text using
        dynamic keys. Normally the i18nTransformer would fail to handle this and the developer would be forced to add
       
        AJS.format("foo100")
       
        entries for each case. By extracting those invocations of AJS.I18n.getText to a single place, we can plan for a future
        where the transformer is not necessary and we can serve one set of JS resources for all locales.
       
        A future improvement might be to generate an i18n.js file directly from a plugin's
        i18n.properties file at build time.
        */

    exports.default = function (key) {
        // TODO - could interpolate args, etc. dT
        return i18nMap[key];
    };

    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(0), __webpack_require__(12), __webpack_require__(2), __webpack_require__(3), __webpack_require__(13), __webpack_require__(38), __webpack_require__(1), __webpack_require__(39)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _ajs, _legacy, _meta, _jquery, _userRanker, _serverUserCache, _userSupplierKeys, _luceneQuery) {
    'use strict';

    var AJS = _interopRequireDefault(_ajs).default;

    var Confluence = _interopRequireDefault(_legacy).default;

    var Meta = _interopRequireDefault(_meta).default;

    var $ = _interopRequireDefault(_jquery).default;

    var UserRanker = _interopRequireDefault(_userRanker).default;

    var Cache = _interopRequireDefault(_serverUserCache).default;

    var UserSupplier = _interopRequireDefault(_userSupplierKeys).default;

    var LuceneQuery = _interopRequireDefault(_luceneQuery).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * Wait this long after REST call triggers before actually doing a search - results in fewer HTTP requests.
     */
    var DEBOUNCE_WAIT_MS = 250;

    // 1 char query is now supported by CQL.
    var MIN_CHARS_TO_SEARCH = 1;

    var limit = 100;
    var cache = Cache(limit);

    /**
     * The id of the last timeout to be created for a REST call. We cancel this timeout if
     * a scheduled call becomes stale.
     */
    var lastTimeout = void 0;

    /**
     Returns users from the backend via a CQL search.
     */
    function getUsers(query) {
        return new Promise(function (resolve, reject) {

            if (!query || query.length < MIN_CHARS_TO_SEARCH) {
                // No query - no server results.
                return resolve([]);
            }

            AJS.debug('server-users-supplier: Looking in cache for ' + query);
            var cacheEntry = cache.getClosest(query);
            if (cacheEntry) {
                AJS.debug('server-users-supplier: Found cache entry with query ' + cacheEntry.query);
                if (cacheEntry.query === query) {
                    // Exact match - just serve these results.
                    return resolve(cacheEntry.users);
                }

                // Not an exact match. Might need a REST call, but we can show results based on what we have cached.
                var rankedUsers = UserRanker(cacheEntry.users, query);
                cache.add(query, rankedUsers);

                // TODO Always resolve with what we have from the cache - this is information that can be put in front of
                // the user immediately. We then decide whether to follow up the local results with remote ones.
                // However, we need the ability to 'resolve' multiple times - to call the render once with the cached
                // results and again (if not debounced, stale, etc, etc) with the server results.
                if (cacheEntry.isExhausted) {
                    return resolve(rankedUsers);
                }

                // Else we might be searching for "John" but "Joh" already has >={limit} users.
                // We need to hit the server!
                // TODO - can we resolve multiple times?
            }

            var contextPath = Meta.get('context-path');
            var escapedQuery = LuceneQuery.escape(query);
            var queryParameters = {
                cql: 'user ~ "' + Confluence.unescapeEntities(escapedQuery) + '"',
                start: 0,
                limit: limit
            };
            var url = contextPath + '/rest/api/search';
            var success = function success(response) {
                var results = response.results;
                var users = results.map(function (result) {
                    var user = result.user;
                    user.supplier = UserSupplier.SERVER;
                    user.timestamp = result.timestamp;
                    AJS.debug('server-users-supplier: Adding user to cache: ' + user.username);
                    return user;
                });
                cache.add(query, users);
                resolve(users);
            };

            // Debounce
            clearTimeout(lastTimeout);
            lastTimeout = setTimeout(function () {
                $.getJSON(url, queryParameters, success).fail(reject);
            }, DEBOUNCE_WAIT_MS);
        });
    }

    /**
     * Forces a search for exact usernames. Use this to ensure the cached entries in
     * other suppliers are not stale.
     * @param usernames {Array} Array of username strings
     * @returns {Promise} a promise which will resolve with an array of user objects from the search that matched any of the input usernames.
     * @private
     */
    function _searchWithUsernames(usernames) {
        return new Promise(function (resolve, reject) {
            if (!usernames || usernames.length === 0) {
                return resolve([]);
            }
            var contextPath = Meta.get('context-path');
            var queryParameters = {
                cql: 'user in (' + usernames.map(function (u) {
                    return '"' + u + '"';
                }).join(",") + ')',
                start: 0,
                limit: usernames.length
            };
            AJS.debug('querying with \'' + queryParameters.cql + '\'');
            var url = contextPath + '/rest/api/search';
            var success = function success(response) {
                var results = response.results;
                var users = results.map(function (result) {
                    var user = result.user;
                    user.supplier = UserSupplier.SERVER;
                    user.timestamp = result.timestamp;
                    return user;
                });
                resolve(users);
            };

            // Debounce
            clearTimeout(lastTimeout);
            lastTimeout = setTimeout(function () {
                $.getJSON(url, queryParameters, success).fail(reject);
            }, DEBOUNCE_WAIT_MS);
        });
    }

    /**
     If a given search returns less that the specified limit, we say that that query is exhausted - adding more
     characters to the query will return a subset of users from the shorter query.
     */
    function isExhausted(query) {
        return true;
    }

    // Flushes the cache between tests.
    function reset() {
        cache.reset();
        AJS.debug('server-users-supplier: Cache reset');
    }

    exports.default = {
        getUsers: getUsers,
        _searchWithUsernames: _searchWithUsernames,
        isExhausted: isExhausted,
        reset: reset,
        DEBOUNCE_WAIT_MS: DEBOUNCE_WAIT_MS
    };
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(12), __webpack_require__(37)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _legacy, _fuse) {
    'use strict';

    var Confluence = _interopRequireDefault(_legacy).default;

    var Fuse = _interopRequireDefault(_fuse).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * Details for these options are available at http://fusejs.io/, but the basic gist is:
     *
     * - tokenize is required so that first and last names are searched from their first character
     * - matchAllTokens so that tokenize will match all words in the query
     * - threshold close to 0 to avoid unhelpful results, but this can be tweaked because...
     * - shouldSort will put the best matches at the top of the result array.
     * - location means that matching should start at the beginning of words, which is usually
     *     what name searches will want
     */
    /**
     * Ranks users, given a query.
     */
    var options = {
        includeMatches: true,
        includeScore: true,
        tokenize: true,
        matchAllTokens: true,
        threshold: 0.1,
        location: 0,
        distance: 0,
        maxPatternLength: 16,
        minMatchCharLength: 1,
        keys: [{
            name: 'displayName',
            weight: 0.7
        }, {
            name: 'username',
            weight: 0.3
        }]
    };

    exports.default = function (users, query) {
        if (!query) {
            return users;
        }

        // TODO Depending on what kind of setup is done in the Fuse constructor, we might want to
        // optimise by keeping an instance around that has all of the users currently-known to the
        // frontend: including cached Server search results.
        var fuse = new Fuse(users, options);
        var results = fuse.search(Confluence.unescapeEntities(query));
        return results.map(function (result) {
            var item = result.item;
            item.fuseMatches = result.matches;
            item.fuseScore = result.score;
            return item;
        });
    };

    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports) {
    /**
     * Where all the aggregation and caching happens
     */
    "use strict";

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    var userCache = new Map();

    /**
     * Updates the incoming User object to split "displayName" into "firstName" and "lastNames" to aid Fuse matching.
     * @param user
     * @private
     */
    function _splitNames(user) {
        if (!user || !user.displayName) {
            return;
        }

        // We store first and last names separately to enable search weightings in Fuse.
        // JS String.split doesn't quite do what we need so we just use a substring.
        var firstSpace = user.displayName.indexOf(' ');
        if (firstSpace > 0) {
            user.firstName = user.displayName.substring(0, firstSpace);
            user.lastNames = user.displayName.substring(firstSpace + 1);
        } else {
            // A user display name in a language without spaces. Setting the firstName should work in most cases.
            user.firstName = user.displayName;
            user.lastNames = '';
        }
    }

    function _isStaleEntry(user) {
        if (!userCache.has(user.username)) {
            return true;
        }
        var entry = userCache.get(user.username);
        var timestamp = entry.timestamp || 0;
        return user.timestamp > timestamp;
    }

    exports.default = {
        /**
         * Will add the user to the user cache, if it's not already present.
         * @param {user}    user     A single user in API format
         * @param {boolean} force    if true, any cached user with the same username will be replaced with this user
         */
        add: function add(user) {
            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            // Existing cache entries may have a different Supplier for a given user - don't overwrite.
            if (user && user.hasOwnProperty("username") && (force === true || _isStaleEntry(user))) {
                _splitNames(user);
                userCache.set(user.username, user);
            }
        },

        /**
         * Will add all the supplied users by individually calling add
         * @param users an array of users
         */
        addAll: function addAll(users, force) {
            var _this = this;

            users.forEach(function (user) {
                _this.add(user, force);
            });
        },

        /**
         * @returns an array of all the users in the cache
         */
        getAll: function getAll() {
            return [].concat(_toConsumableArray(userCache.values()));
        },

        /**
         * Used for testing
         * @private
         */
        _get: function _get(username) {
            return userCache.get(username);
        },

        /**
         * Used for testing
         * @private
         */
        _clear: function _clear() {
            userCache.clear();
        }
    };
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports) {
    "use strict";

    exports.default = {
        resultWithHtml: function resultWithHtml(html) {
            return {
                html: html
            };
        }
    };
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _userSupplierKeys) {
    'use strict';

    var UserSupplier = _interopRequireDefault(_userSupplierKeys).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var suggestedUsers = [];

    /**
     * When searching for a user you're likely to want a user you've recently mentioned, even if other Fuse matches have
     * slightly better (lower) scores. For now we boost all recent matches, but we could adjust this to only the recent match
     * with the best score.
     *
     * Also, contributors should bubble to the top in the search results, at least until the search token is compelling enough
     * to switch.
     */
    function boostScores(users, next, context) {
        var query = context && context.query || '';
        if (query.indexOf(' ') > 0) {
            // Don't boost on supplier once multiple names are being added - the user seems to know who they're after so
            // let Fuse do its job.
            return next(users);
        }

        // The pipeline could be ensuring that users passed down the pipe are immutable, but for now just clone. fuseScore
        // should NOT be making its way into the user cache.
        var boostedUsers = users.map(function (userIn) {
            var user = Object.assign({}, userIn);
            if (suggestedUsers.includes(user.username)) {
                user.fuseScore /= 1000; // keep ordering for multiple matched suggestions
            } else if (typeof user.fuseScore === 'number') {
                switch (user.supplier) {
                    case UserSupplier.RECENT:
                        user.fuseScore /= 5;
                        break;
                    case UserSupplier.RELATED:
                        user.fuseScore /= 10;
                        break;
                }
            }
            return user;
        });
        return next(boostedUsers);
    }

    function setSuggestedUsers(users, next) {
        suggestedUsers = users.map(function (user) {
            return user.username;
        });
        return next(users);
    }

    function reset() {
        suggestedUsers = [];
    }

    exports.default = {
        boostScores: boostScores,
        setSuggestedUsers: setSuggestedUsers,
        reset: reset
    };
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(22), __webpack_require__(8), __webpack_require__(4), __webpack_require__(11), __webpack_require__(19)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _editorPluginInit, _relatedUsersSupplier, _recentUsersSupplier, _serverUsersSupplier, _tinymce) {
    'use strict';

    var editorPluginInit = _interopRequireDefault(_editorPluginInit).default;

    var RelatedUsersSupplier = _interopRequireDefault(_relatedUsersSupplier).default;

    var RecentUsersSupplier = _interopRequireDefault(_recentUsersSupplier).default;

    var ServerUsersSupplier = _interopRequireDefault(_serverUsersSupplier).default;

    var tinymce = _interopRequireDefault(_tinymce).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function init(_jqueryEvent, context) {
        var editor = context && context.editor; // in case the initCallback internal code breaks API
        // This function is called from BootstrapManager.addOnInitCallback, tinymce.activeEditor already exists so it's too late to register a new plugin anyway.
        // We start up mentions right away.
        editorPluginInit(editor);
        // Do this just so it shows in plugin manager but it isn't used in tinymce.init settings.
        tinymce.PluginManager.add("insertmentions", function () {
            return {
                getMetadata: function getMetadata() {
                    return {
                        longname: "Insert Mentions",
                        author: "Atlassian",
                        authorurl: "http://www.atlassian.com"
                    };
                }
            };
        });
    }

    /**
     * This is the main export from the Mentions module set.
     */
    exports.default = {
        init: init,
        userSuppliers: {
            // Users from localstorage
            recent: RecentUsersSupplier,
            // Users from the server
            serverSearch: ServerUsersSupplier,
            // Users from the front-end cache of the Content in the editor
            contentRelated: RelatedUsersSupplier
        }
    };
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(0), __webpack_require__(3), __webpack_require__(23), __webpack_require__(6), __webpack_require__(18), __webpack_require__(52)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _ajs, _jquery, _autocompleteAdapter, _Mentions, _autocompleteManager, _autocompleteSettings) {
    'use strict';

    var AJS = _interopRequireDefault(_ajs).default;

    var $ = _interopRequireDefault(_jquery).default;

    var Adapter = _interopRequireDefault(_autocompleteAdapter).default;

    var Mentions = _interopRequireDefault(_Mentions).default;

    var AutocompleteManager = _interopRequireDefault(_autocompleteManager).default;

    var AutocompleteSettings = _interopRequireDefault(_autocompleteSettings).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    "use strict";

    function activateMentions() {
        AJS.EventQueue.push({ name: 'confluencementioninsert' });
        AutocompleteManager.shortcutFired("@");
    }

    function onClickEvent(event) {
        event.stopPropagation();
        event.preventDefault();
        AJS.Rte.getEditor().focus();
        activateMentions();
    }

    function editorPluginInit(editor) {
        AJS.EventQueue = AJS.EventQueue || [];
        Mentions.prefetchSuppliers(editor);

        AutocompleteSettings.Settings["@"] = {
            ch: "@",
            cache: true,
            endChars: [],
            dropDownClassName: "autocomplete-mentions fabric",
            autocompleteClassNames: "fabric",
            dropDownDelay: 0, // No delay needed because there is no AJAX request involved
            selectFirstItem: true,
            minLengthForGetData: 1,
            displayHandler: function displayHandler(user) {
                // Use Jquery to encode the user name
                return $('<div/>').text(user.name).html();
            },

            getHeaderText: function getHeaderText() {
                return null; // HACK this could be an option in core, the header is currently being hidden with CSS.
            },

            getAdditionalLinks: function getAdditionalLinks(autoCompleteControl, value, callback) {
                var additionalLinks = [];
                if (callback) callback(value, additionalLinks);
                return additionalLinks;
            },

            /**
             *
             * @param autoCompleteControl
             * @param value     The user's input
             * @param {function} renderResults  function to run with the resulting users (from input-driven-dropdown in
             *                                  Core)
             */
            getDataAndRunCallback: function getDataAndRunCallback(autoCompleteControl, value, renderResults) {
                Adapter.search(autoCompleteControl, value, renderResults, editor);
            },

            /**
             * Overrides the confluence/highlighter used to highlight query term matches in results
             */
            // For now, this override is ignored: we're getting better results from the default highlighter than with the
            // highlighting based on Fuse.js output.
            // Highlighter,

            update: Adapter.insert
        };

        $('#insertmention-button').on('click', onClickEvent);

        if (AJS.Rte.Placeholder && AJS.Rte.Placeholder.addPlaceholderType) {
            AJS.Rte.Placeholder.addPlaceholderType({
                type: 'mention',
                label: "User mention",
                tooltip: "Instructional text is replaced with suggested people when a person types."
            });
        }
    }

    exports.default = editorPluginInit;
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(0), __webpack_require__(6), __webpack_require__(4), __webpack_require__(7), __webpack_require__(49), __webpack_require__(2), __webpack_require__(51), __webpack_require__(19)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _ajs, _Mentions, _recentUsersSupplier, _userSupplierManager, _mentionAnalytics, _meta, _linkObject, _tinymce) {
    'use strict';

    var AJS = _interopRequireDefault(_ajs).default;

    var Mentions = _interopRequireDefault(_Mentions).default;

    var RecentUsers = _interopRequireDefault(_recentUsersSupplier).default;

    var UserSupplierManager = _interopRequireDefault(_userSupplierManager).default;

    var MentionsAnalytics = _interopRequireDefault(_mentionAnalytics).default;

    var Meta = _interopRequireDefault(_meta).default;

    var Link = _interopRequireDefault(_linkObject).default;

    var tinymce = _interopRequireDefault(_tinymce).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    "use strict";

    var BASE_URL = Meta.get('base-url');

    function search(autoCompleteControl, value, renderResults, editor) {
        MentionsAnalytics.updateSession(autoCompleteControl);

        // The && guard here can be removed once the core tinymce3/plugins/autocomplete/autocomplete-manager.js code is released.
        // Hacky try catch to work around CONFSRVDEV-3101 and CONFSRVDEV-3138
        var selectedUser = void 0;
        try {
            var selectedItem = autoCompleteControl.getCurrentItem && autoCompleteControl.getCurrentItem();
            selectedUser = selectedItem && selectedItem.model;
        } catch (ignored) {
            console.log('Error retrieving currently-selected autoComplete item');
            console.log(ignored);
        }

        // renderResults likes a 2D array, and the query tokens in an array for highlighting
        var tokens = value && value.split(' ') || [];
        var render = function render(results, next, context) {
            return renderResults([results], value, null, tokens, context);
        };
        Mentions.searchAndRender(value, render, selectedUser, editor);
    }

    function insert(autoCompleteControl, user) {
        MentionsAnalytics.publishEventForSelection(user, autoCompleteControl.analytics);

        // Add this user to the cache - it will be retrieved with the recent-users-supplier module.
        RecentUsers.store(user);

        var earlyValidationCheck = RecentUsers.getStaleUsers(RecentUsers.ValidationType.EARLY_VALIDATION);
        if (earlyValidationCheck.length > 0) {
            //asynchronously attempt to update the recently mentioned cache to remove any stale users, after the UI insert is completed
            setTimeout(function () {
                return UserSupplierManager.deleteStaleUsers(earlyValidationCheck, RecentUsers.ValidationType.EARLY_VALIDATION);
            }, 0);
        }

        var link = {
            attrs: {
                href: user.link,
                'userkey': user.model.userKey, // required to unmarshall ResourceIdentifier
                'data-base-url': BASE_URL,
                'data-linked-resource-type': 'userinfo',
                'data-linked-resource-default-alias': user.name
            },
            body: {
                html: AJS.escapeHtml(user.name)
            },
            classes: ['confluence-link']
        };
        Link.fromData(link).insert();
        tinymce.activeEditor.selection.setContent(" ");
    }

    // Called during testing
    function reset() {
        Mentions.reset();
    }

    exports.default = {
        search: search,
        insert: insert,
        reset: reset
    };
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _meta, _jquery) {
    'use strict';

    var Meta = _interopRequireDefault(_meta).default;

    var $ = _interopRequireDefault(_jquery).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    // Adapted from confluence-quick-edit/src/main/resources/jscripts/handlers/comment.js.
    /**
     Supplies the Content API model object associated with the current draft in the editor.
    
     This is basically a shim for something that the Editor JS API *should* provide but currently doesn't
     */
    function getParameter(url, paramName) {
        if (!url) {
            return '';
        }
        var regex = new RegExp("[?&]" + paramName + "=(\\d+)");
        var match = url.match(regex);
        return match && match.length > 1 ? match[1] : '';
    }

    function safeGetDraft(editor) {
        if (!editor) {
            return null;
        }

        try {
            return getDraft(editor);
        } catch (e) {
            // This might happen if the Editor is being initialised in a context we don't yet support.
            console.error(e.message);
            return null;
        }
    }

    function getDraft(editor) {
        var id = Meta.get('page-id');

        var form = editor.formElement;
        var action = form.action || '';

        if (action.indexOf('/doaddcomment.action') > -1 || action.indexOf('/doeditcomment.action') > -1 || $(form).closest('.ic-sidebar').length) {
            var commentId = getParameter(action, "commentId") || '0';

            var content = {
                id: commentId,
                type: 'comment',
                status: 'draft',
                container: {
                    id: id
                }
            };

            var parentCommentId = getParameter(action, "parentId");
            if (parentCommentId) {
                content.ancestors = [{
                    id: parentCommentId
                }];
            }

            return content;
        }

        var previewContainer = $(form).closest('.cp-container');
        if (previewContainer.length) {
            // This is a comment for a Preview. Until we have a proper API, scrape the DOM and shed a single tear.
            var previewTitle = previewContainer.find('.cp-file-title').text().replace(/"/g, "\\\"");
            // CONFSRVDEV-11704 because the previewer can be triggered from like million places, and because we suck
            // and don't set the alias for attachment titles consistently , which means we need to look for them with spaces
            // a well as with + for space
            var alternateTitle = escape(previewTitle.replace(/\s/g, "+"));
            var $element = $('body').find('*[data-linked-resource-default-alias="' + previewTitle + '"], *[data-linked-resource-default-alias="' + alternateTitle + '"]');
            if ($element.length) {
                var attachmentId = $element.attr('data-linked-resource-id');
                // Again, until Previews exposes an API, and the Editor consumes it in a way that THIS code can consume,
                // we're limited in how Smart the suggestions here can be. For now, editing an existing comment or replying
                // to a comment are treated the same as creating a new comment.
                return {
                    id: 0,
                    type: 'comment',
                    status: 'draft',
                    container: {
                        id: attachmentId
                    }
                };
            }
        }

        var newPage = Meta.get('new-page');

        var type = Meta.get('content-type');
        return {
            id: newPage ? '0' : id,
            type: type,
            status: 'draft'
        };
    }

    exports.default = safeGetDraft;
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(2), __webpack_require__(3), __webpack_require__(26), __webpack_require__(27), __webpack_require__(28)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _meta, _jquery, _aggregateUsers, _restParameters, _relatedUserTransformer) {
    'use strict';

    var Meta = _interopRequireDefault(_meta).default;

    var $ = _interopRequireDefault(_jquery).default;

    var aggregateUsers = _interopRequireDefault(_aggregateUsers).default;

    var getRestParameters = _interopRequireDefault(_restParameters).default;

    var flattenUsers = _interopRequireDefault(_relatedUserTransformer).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    "use strict"; /**
                   Supplies Users that are related to a piece of Content, calculated from server data via the Content API.
                   */


    var cache = {};

    var getUsers = function getUsers(contentStub) {
        var restParams = getRestParameters(contentStub);
        if (!restParams) {
            // Will be null for new pages and blogposts: don't make a REST call, don't cache
            return Promise.resolve([]);
        }

        if (restParams.contentId in cache) {
            return cache[restParams.contentId];
        }

        var promise = new Promise(function (resolve, reject) {
            var contextPath = Meta.get('context-path');
            var url = contextPath + '/rest/api/content/' + restParams.contentId;
            var queryParameters = {
                expand: restParams.expand
            };

            $.getJSON(url, queryParameters, function (content) {
                resolve(flattenUsers(aggregateUsers(content)));
            }).fail(reject);
        });

        cache[restParams.contentId] = promise;
        return promise;
    };

    // Used in testing.
    function reset() {
        cache = {};
    }

    exports.default = {
        getUsers: getUsers,
        reset: reset,
        _cache: cache //exposed for testing
    };
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(9), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _userRole, _userSupplierKeys) {
    'use strict';

    var UserRole = _interopRequireDefault(_userRole).default;

    var UserSupplier = _interopRequireDefault(_userSupplierKeys).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    exports.default = function (content) {
        var relatedUsers = {};

        // Used to track users that have already been added to relatedUsers
        var usernames = new Set();

        // Skip anonymous users, disabled/deleted users, and users already in the result
        function shouldAddUser(user) {
            if (user.type === 'anonymous') {
                return false;
            }

            if (typeof user.status === 'undefined') {
                console.error("User status is undefined. Not adding to relatedUsers aggregate.");
                return false;
            }
            return user.status === 'current' && !usernames.has(user.username);
        }

        function addUser(user, role) {
            user.role = role;
            user.supplier = UserSupplier.RELATED;
            var roleKey = role.role;
            relatedUsers[roleKey] = relatedUsers[roleKey] || [];
            relatedUsers[roleKey].push(user);
            usernames.add(user.username);
        }

        function addUserWithRole(user, role) {
            if (shouldAddUser(user)) {
                addUser(user, role);
            }
        }

        var page = content.type === 'comment' ? content.container : content;

        // Only do this for content that has history
        if ('history' in page) {
            addUserWithRole(page.history.createdBy, UserRole.CREATOR);

            // Contributors are reversed to descending chronological order - users are more likely to mention contributors who
            // edited the content more recently.
            page.history.contributors.publishers.users.reverse().forEach(function (contributor) {
                addUserWithRole(contributor, UserRole.CONTRIBUTOR);
            });
        }

        if (content.type === 'comment' && content.ancestors) {
            // A new or existing comment that is a reply to another comment. We catch ancestor commenters before other
            // commenters because they are more likely to be mentioned.
            // Ancestor order is not reversed because they are already ordered youngest to oldest.
            content.ancestors.forEach(function (ancestorComment) {
                addUserWithRole(ancestorComment.version.by, UserRole.ANCESTOR_COMMENTER);
            });
        }

        if ('children' in page) {
            // Page commenters are also listed in reverse order
            page.children.comment.results.reverse().forEach(function (comment) {
                addUserWithRole(comment.version.by, UserRole.COMMENTER);
            });
        }

        return relatedUsers;
    };

    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports) {
    'use strict';

    /**
     Calculations the content id and expansions that should be used in the REST API call when building the
     list of users related to a piece of Content in the editor.
     */

    var PAGE_REST_EXPANSIONS = 'history.createdBy.status,history.contributors.publishers.users.status,children.comment.version.by.status';
    var COMMENT_REST_EXPANSIONS = 'ancestors.version.by.status,container.history.createdBy.status,container.history.contributors.publishers.users.status,container.children.comment.version.by.status';

    function restParams(id, expansions) {
        return {
            contentId: id,
            expand: expansions
        };
    }

    function isBlankId(val) {
        return !val || val === '0';
    }

    exports.default = function (contentStub) {
        if (!contentStub) {
            return null;
        }

        if (contentStub.type === 'page' || contentStub.type === 'blogpost') {
            var pageId = contentStub.id;
            if (isBlankId(pageId)) {
                // A new page/blogpost has no related users.
                return null;
            }
            // Editing an existing page or blogpost
            return restParams(pageId, PAGE_REST_EXPANSIONS);
        }

        if (contentStub.type === 'comment') {
            var commentId = contentStub.id;
            if (!isBlankId(commentId)) {
                // Editing an existing comment
                return restParams(commentId, COMMENT_REST_EXPANSIONS);
            }

            // A new comment: the stub will include the id of the comment it is replying to, unless this is a top-level
            // comment. NOTE: if we end up with access to a Draft comment, we should be able to use its id as the
            // content id, and not use the parent-comment or page ids here.
            var parentCommentId = contentStub.ancestors && contentStub.ancestors[0] && contentStub.ancestors[0].id;
            if (!isBlankId(parentCommentId)) {
                // A new reply
                return restParams(parentCommentId, COMMENT_REST_EXPANSIONS);
            }

            // A new top-level comment
            var _pageId = contentStub.container.id;
            return restParams(_pageId, PAGE_REST_EXPANSIONS);
        }
    };

    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _userRole) {
    "use strict";

    var UserRole = _interopRequireDefault(_userRole).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    "use strict";

    /**
     * Converts the map of users by role into a list of users.
     */

    exports.default = function (usersMap) {
        var transformedList = [];

        function addUsersWithRoleToList(userRole) {
            var users = usersMap[userRole.role];
            if (users && users.length) {
                transformedList = transformedList.concat(users);
            }
        }

        addUsersWithRoleToList(UserRole.CREATOR);
        addUsersWithRoleToList(UserRole.CONTRIBUTOR);
        addUsersWithRoleToList(UserRole.COMMENTER);
        addUsersWithRoleToList(UserRole.ANCESTOR_COMMENTER);

        return transformedList;
    };

    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

module.exports = LRUCache

// This will be a proper iterable 'Map' in engines that support it,
// or a fakey-fake PseudoMap in older versions.
var Map = __webpack_require__(30)
var util = __webpack_require__(32)

// A linked list to keep track of recently-used-ness
var Yallist = __webpack_require__(35)

// use symbols if possible, otherwise just _props
var hasSymbol = typeof Symbol === 'function' && process.env._nodeLRUCacheForceNoSymbol !== '1'
var makeSymbol
if (hasSymbol) {
  makeSymbol = function (key) {
    return Symbol(key)
  }
} else {
  makeSymbol = function (key) {
    return '_' + key
  }
}

var MAX = makeSymbol('max')
var LENGTH = makeSymbol('length')
var LENGTH_CALCULATOR = makeSymbol('lengthCalculator')
var ALLOW_STALE = makeSymbol('allowStale')
var MAX_AGE = makeSymbol('maxAge')
var DISPOSE = makeSymbol('dispose')
var NO_DISPOSE_ON_SET = makeSymbol('noDisposeOnSet')
var LRU_LIST = makeSymbol('lruList')
var CACHE = makeSymbol('cache')

function naiveLength () { return 1 }

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
function LRUCache (options) {
  if (!(this instanceof LRUCache)) {
    return new LRUCache(options)
  }

  if (typeof options === 'number') {
    options = { max: options }
  }

  if (!options) {
    options = {}
  }

  var max = this[MAX] = options.max
  // Kind of weird to have a default max of Infinity, but oh well.
  if (!max ||
      !(typeof max === 'number') ||
      max <= 0) {
    this[MAX] = Infinity
  }

  var lc = options.length || naiveLength
  if (typeof lc !== 'function') {
    lc = naiveLength
  }
  this[LENGTH_CALCULATOR] = lc

  this[ALLOW_STALE] = options.stale || false
  this[MAX_AGE] = options.maxAge || 0
  this[DISPOSE] = options.dispose
  this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
  this.reset()
}

// resize the cache when the max changes.
Object.defineProperty(LRUCache.prototype, 'max', {
  set: function (mL) {
    if (!mL || !(typeof mL === 'number') || mL <= 0) {
      mL = Infinity
    }
    this[MAX] = mL
    trim(this)
  },
  get: function () {
    return this[MAX]
  },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'allowStale', {
  set: function (allowStale) {
    this[ALLOW_STALE] = !!allowStale
  },
  get: function () {
    return this[ALLOW_STALE]
  },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'maxAge', {
  set: function (mA) {
    if (!mA || !(typeof mA === 'number') || mA < 0) {
      mA = 0
    }
    this[MAX_AGE] = mA
    trim(this)
  },
  get: function () {
    return this[MAX_AGE]
  },
  enumerable: true
})

// resize the cache when the lengthCalculator changes.
Object.defineProperty(LRUCache.prototype, 'lengthCalculator', {
  set: function (lC) {
    if (typeof lC !== 'function') {
      lC = naiveLength
    }
    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC
      this[LENGTH] = 0
      this[LRU_LIST].forEach(function (hit) {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
        this[LENGTH] += hit.length
      }, this)
    }
    trim(this)
  },
  get: function () { return this[LENGTH_CALCULATOR] },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'length', {
  get: function () { return this[LENGTH] },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'itemCount', {
  get: function () { return this[LRU_LIST].length },
  enumerable: true
})

LRUCache.prototype.rforEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this[LRU_LIST].tail; walker !== null;) {
    var prev = walker.prev
    forEachStep(this, fn, walker, thisp)
    walker = prev
  }
}

function forEachStep (self, fn, node, thisp) {
  var hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self[ALLOW_STALE]) {
      hit = undefined
    }
  }
  if (hit) {
    fn.call(thisp, hit.value, hit.key, self)
  }
}

LRUCache.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this[LRU_LIST].head; walker !== null;) {
    var next = walker.next
    forEachStep(this, fn, walker, thisp)
    walker = next
  }
}

LRUCache.prototype.keys = function () {
  return this[LRU_LIST].toArray().map(function (k) {
    return k.key
  }, this)
}

LRUCache.prototype.values = function () {
  return this[LRU_LIST].toArray().map(function (k) {
    return k.value
  }, this)
}

LRUCache.prototype.reset = function () {
  if (this[DISPOSE] &&
      this[LRU_LIST] &&
      this[LRU_LIST].length) {
    this[LRU_LIST].forEach(function (hit) {
      this[DISPOSE](hit.key, hit.value)
    }, this)
  }

  this[CACHE] = new Map() // hash of items by key
  this[LRU_LIST] = new Yallist() // list of items in order of use recency
  this[LENGTH] = 0 // length of items in the list
}

LRUCache.prototype.dump = function () {
  return this[LRU_LIST].map(function (hit) {
    if (!isStale(this, hit)) {
      return {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }
    }
  }, this).toArray().filter(function (h) {
    return h
  })
}

LRUCache.prototype.dumpLru = function () {
  return this[LRU_LIST]
}

/* istanbul ignore next */
LRUCache.prototype.inspect = function (n, opts) {
  var str = 'LRUCache {'
  var extras = false

  var as = this[ALLOW_STALE]
  if (as) {
    str += '\n  allowStale: true'
    extras = true
  }

  var max = this[MAX]
  if (max && max !== Infinity) {
    if (extras) {
      str += ','
    }
    str += '\n  max: ' + util.inspect(max, opts)
    extras = true
  }

  var maxAge = this[MAX_AGE]
  if (maxAge) {
    if (extras) {
      str += ','
    }
    str += '\n  maxAge: ' + util.inspect(maxAge, opts)
    extras = true
  }

  var lc = this[LENGTH_CALCULATOR]
  if (lc && lc !== naiveLength) {
    if (extras) {
      str += ','
    }
    str += '\n  length: ' + util.inspect(this[LENGTH], opts)
    extras = true
  }

  var didFirst = false
  this[LRU_LIST].forEach(function (item) {
    if (didFirst) {
      str += ',\n  '
    } else {
      if (extras) {
        str += ',\n'
      }
      didFirst = true
      str += '\n  '
    }
    var key = util.inspect(item.key).split('\n').join('\n  ')
    var val = { value: item.value }
    if (item.maxAge !== maxAge) {
      val.maxAge = item.maxAge
    }
    if (lc !== naiveLength) {
      val.length = item.length
    }
    if (isStale(this, item)) {
      val.stale = true
    }

    val = util.inspect(val, opts).split('\n').join('\n  ')
    str += key + ' => ' + val
  })

  if (didFirst || extras) {
    str += '\n'
  }
  str += '}'

  return str
}

LRUCache.prototype.set = function (key, value, maxAge) {
  maxAge = maxAge || this[MAX_AGE]

  var now = maxAge ? Date.now() : 0
  var len = this[LENGTH_CALCULATOR](value, key)

  if (this[CACHE].has(key)) {
    if (len > this[MAX]) {
      del(this, this[CACHE].get(key))
      return false
    }

    var node = this[CACHE].get(key)
    var item = node.value

    // dispose of the old one before overwriting
    // split out into 2 ifs for better coverage tracking
    if (this[DISPOSE]) {
      if (!this[NO_DISPOSE_ON_SET]) {
        this[DISPOSE](key, item.value)
      }
    }

    item.now = now
    item.maxAge = maxAge
    item.value = value
    this[LENGTH] += len - item.length
    item.length = len
    this.get(key)
    trim(this)
    return true
  }

  var hit = new Entry(key, value, len, now, maxAge)

  // oversized objects fall out of cache automatically.
  if (hit.length > this[MAX]) {
    if (this[DISPOSE]) {
      this[DISPOSE](key, value)
    }
    return false
  }

  this[LENGTH] += hit.length
  this[LRU_LIST].unshift(hit)
  this[CACHE].set(key, this[LRU_LIST].head)
  trim(this)
  return true
}

LRUCache.prototype.has = function (key) {
  if (!this[CACHE].has(key)) return false
  var hit = this[CACHE].get(key).value
  if (isStale(this, hit)) {
    return false
  }
  return true
}

LRUCache.prototype.get = function (key) {
  return get(this, key, true)
}

LRUCache.prototype.peek = function (key) {
  return get(this, key, false)
}

LRUCache.prototype.pop = function () {
  var node = this[LRU_LIST].tail
  if (!node) return null
  del(this, node)
  return node.value
}

LRUCache.prototype.del = function (key) {
  del(this, this[CACHE].get(key))
}

LRUCache.prototype.load = function (arr) {
  // reset the cache
  this.reset()

  var now = Date.now()
  // A previous serialized cache has the most recent items first
  for (var l = arr.length - 1; l >= 0; l--) {
    var hit = arr[l]
    var expiresAt = hit.e || 0
    if (expiresAt === 0) {
      // the item was created without expiration in a non aged cache
      this.set(hit.k, hit.v)
    } else {
      var maxAge = expiresAt - now
      // dont add already expired items
      if (maxAge > 0) {
        this.set(hit.k, hit.v, maxAge)
      }
    }
  }
}

LRUCache.prototype.prune = function () {
  var self = this
  this[CACHE].forEach(function (value, key) {
    get(self, key, false)
  })
}

function get (self, key, doUse) {
  var node = self[CACHE].get(key)
  if (node) {
    var hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self[ALLOW_STALE]) hit = undefined
    } else {
      if (doUse) {
        self[LRU_LIST].unshiftNode(node)
      }
    }
    if (hit) hit = hit.value
  }
  return hit
}

function isStale (self, hit) {
  if (!hit || (!hit.maxAge && !self[MAX_AGE])) {
    return false
  }
  var stale = false
  var diff = Date.now() - hit.now
  if (hit.maxAge) {
    stale = diff > hit.maxAge
  } else {
    stale = self[MAX_AGE] && (diff > self[MAX_AGE])
  }
  return stale
}

function trim (self) {
  if (self[LENGTH] > self[MAX]) {
    for (var walker = self[LRU_LIST].tail;
      self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      var prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

function del (self, node) {
  if (node) {
    var hit = node.value
    if (self[DISPOSE]) {
      self[DISPOSE](hit.key, hit.value)
    }
    self[LENGTH] -= hit.length
    self[CACHE].delete(hit.key)
    self[LRU_LIST].removeNode(node)
  }
}

// classy, since V8 prefers predictable objects.
function Entry (key, value, length, now, maxAge) {
  this.key = key
  this.value = value
  this.length = length
  this.now = now
  this.maxAge = maxAge || 0
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {if (process.env.npm_package_name === 'pseudomap' &&
    process.env.npm_lifecycle_script === 'test')
  process.env.TEST_PSEUDOMAP = 'true'

if (typeof Map === 'function' && !process.env.TEST_PSEUDOMAP) {
  module.exports = Map
} else {
  module.exports = __webpack_require__(31)
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

var hasOwnProperty = Object.prototype.hasOwnProperty

module.exports = PseudoMap

function PseudoMap (set) {
  if (!(this instanceof PseudoMap)) // whyyyyyyy
    throw new TypeError("Constructor PseudoMap requires 'new'")

  this.clear()

  if (set) {
    if ((set instanceof PseudoMap) ||
        (typeof Map === 'function' && set instanceof Map))
      set.forEach(function (value, key) {
        this.set(key, value)
      }, this)
    else if (Array.isArray(set))
      set.forEach(function (kv) {
        this.set(kv[0], kv[1])
      }, this)
    else
      throw new TypeError('invalid argument')
  }
}

PseudoMap.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  Object.keys(this._data).forEach(function (k) {
    if (k !== 'size')
      fn.call(thisp, this._data[k].value, this._data[k].key)
  }, this)
}

PseudoMap.prototype.has = function (k) {
  return !!find(this._data, k)
}

PseudoMap.prototype.get = function (k) {
  var res = find(this._data, k)
  return res && res.value
}

PseudoMap.prototype.set = function (k, v) {
  set(this._data, k, v)
}

PseudoMap.prototype.delete = function (k) {
  var res = find(this._data, k)
  if (res) {
    delete this._data[res._index]
    this._data.size--
  }
}

PseudoMap.prototype.clear = function () {
  var data = Object.create(null)
  data.size = 0

  Object.defineProperty(this, '_data', {
    value: data,
    enumerable: false,
    configurable: true,
    writable: false
  })
}

Object.defineProperty(PseudoMap.prototype, 'size', {
  get: function () {
    return this._data.size
  },
  set: function (n) {},
  enumerable: true,
  configurable: true
})

PseudoMap.prototype.values =
PseudoMap.prototype.keys =
PseudoMap.prototype.entries = function () {
  throw new Error('iterators are not implemented in this version')
}

// Either identical, or both NaN
function same (a, b) {
  return a === b || a !== a && b !== b
}

function Entry (k, v, i) {
  this.key = k
  this.value = v
  this._index = i
}

function find (data, k) {
  for (var i = 0, s = '_' + k, key = s;
       hasOwnProperty.call(data, key);
       key = s + i++) {
    if (same(data[key].key, k))
      return data[key]
  }
}

function set (data, k, v) {
  for (var i = 0, s = '_' + k, key = s;
       hasOwnProperty.call(data, key);
       key = s + i++) {
    if (same(data[key].key, k)) {
      data[key].value = v
      return
    }
  }
  data.size++
  data[key] = new Entry(k, v, key)
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(33);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(34);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Fuse.js v3.6.1 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("Fuse",[],t):"object"==typeof exports?exports.Fuse=t():e.Fuse=t()}(this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=r(1),a=r(7),s=a.get,c=(a.deepValue,a.isArray),h=function(){function e(t,r){var n=r.location,o=void 0===n?0:n,i=r.distance,a=void 0===i?100:i,c=r.threshold,h=void 0===c?.6:c,l=r.maxPatternLength,u=void 0===l?32:l,f=r.caseSensitive,v=void 0!==f&&f,p=r.tokenSeparator,d=void 0===p?/ +/g:p,g=r.findAllMatches,y=void 0!==g&&g,m=r.minMatchCharLength,k=void 0===m?1:m,b=r.id,S=void 0===b?null:b,x=r.keys,M=void 0===x?[]:x,_=r.shouldSort,w=void 0===_||_,L=r.getFn,A=void 0===L?s:L,O=r.sortFn,C=void 0===O?function(e,t){return e.score-t.score}:O,j=r.tokenize,P=void 0!==j&&j,I=r.matchAllTokens,F=void 0!==I&&I,T=r.includeMatches,N=void 0!==T&&T,z=r.includeScore,E=void 0!==z&&z,W=r.verbose,K=void 0!==W&&W;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:a,threshold:h,maxPatternLength:u,isCaseSensitive:v,tokenSeparator:d,findAllMatches:y,minMatchCharLength:k,id:S,keys:M,includeMatches:N,includeScore:E,shouldSort:w,getFn:A,sortFn:C,verbose:K,tokenize:P,matchAllTokens:F},this.setCollection(t),this._processKeys(M)}var t,r,a;return t=e,(r=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,r=e.length;t<r;t+=1){var n=e[t];this._keyWeights[n]=1,this._keyNames.push(n)}else{for(var o=null,i=null,a=0,s=0,c=e.length;s<c;s+=1){var h=e[s];if(!h.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var l=h.name;if(this._keyNames.push(l),!h.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var u=h.weight;if(u<0||u>1)throw new Error('"weight" property in key must bein the range of [0, 1)');i=null==i?u:Math.max(i,u),o=null==o?u:Math.min(o,u),this._keyWeights[l]=u,a+=u}if(a>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var r=this._prepareSearchers(e),n=r.tokenSearchers,o=r.fullSearcher,i=this._search(n,o);return this._computeScore(i),this.options.shouldSort&&this._sort(i),t.limit&&"number"==typeof t.limit&&(i=i.slice(0,t.limit)),this._format(i)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var r=e.split(this.options.tokenSeparator),n=0,o=r.length;n<o;n+=1)t.push(new i(r[n],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=this.list,n={},o=[];if("string"==typeof r[0]){for(var i=0,a=r.length;i<a;i+=1)this._analyze({key:"",value:r[i],record:i,index:i},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t});return o}for(var s=0,c=r.length;s<c;s+=1)for(var h=r[s],l=0,u=this._keyNames.length;l<u;l+=1){var f=this._keyNames[l];this._analyze({key:f,value:this.options.getFn(h,f),record:h,index:s},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t})}return o}},{key:"_analyze",value:function(e,t){var r=this,n=e.key,o=e.arrayIndex,i=void 0===o?-1:o,a=e.value,s=e.record,h=e.index,l=t.tokenSearchers,u=void 0===l?[]:l,f=t.fullSearcher,v=t.resultMap,p=void 0===v?{}:v,d=t.results,g=void 0===d?[]:d;!function e(t,o,i,a){if(null!=o)if("string"==typeof o){var s=!1,h=-1,l=0;r._log("\nKey: ".concat(""===n?"--":n));var v=f.search(o);if(r._log('Full text: "'.concat(o,'", score: ').concat(v.score)),r.options.tokenize){for(var d=o.split(r.options.tokenSeparator),y=d.length,m=[],k=0,b=u.length;k<b;k+=1){var S=u[k];r._log('\nPattern: "'.concat(S.pattern,'"'));for(var x=!1,M=0;M<y;M+=1){var _=d[M],w=S.search(_),L={};w.isMatch?(L[_]=w.score,s=!0,x=!0,m.push(w.score)):(L[_]=1,r.options.matchAllTokens||m.push(1)),r._log('Token: "'.concat(_,'", score: ').concat(L[_]))}x&&(l+=1)}h=m[0];for(var A=m.length,O=1;O<A;O+=1)h+=m[O];h/=A,r._log("Token score average:",h)}var C=v.score;h>-1&&(C=(C+h)/2),r._log("Score average:",C);var j=!r.options.tokenize||!r.options.matchAllTokens||l>=u.length;if(r._log("\nCheck Matches: ".concat(j)),(s||v.isMatch)&&j){var P={key:n,arrayIndex:t,value:o,score:C};r.options.includeMatches&&(P.matchedIndices=v.matchedIndices);var I=p[a];I?I.output.push(P):(p[a]={item:i,output:[P]},g.push(p[a]))}}else if(c(o))for(var F=0,T=o.length;F<T;F+=1)e(F,o[F],i,a)}(i,a,s,h)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,r=!!Object.keys(t).length,n=0,o=e.length;n<o;n+=1){for(var i=e[n],a=i.output,s=a.length,c=1,h=0;h<s;h+=1){var l=a[h],u=l.key,f=r?t[u]:1,v=0===l.score&&t&&t[u]>0?Number.EPSILON:l.score;c*=Math.pow(v,f)}i.score=c,this._log(i)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var r=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===n(t)&&null!==t){if(-1!==r.indexOf(t))return;r.push(t)}return t},2)),r=null}var o=[];this.options.includeMatches&&o.push(function(e,t){var r=e.output;t.matches=[];for(var n=0,o=r.length;n<o;n+=1){var i=r[n];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a)}}}),this.options.includeScore&&o.push(function(e,t){t.score=e.score});for(var i=0,a=e.length;i<a;i+=1){var s=e[i];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},h=0,l=o.length;h<l;h+=1)o[h](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&o(t.prototype,r),a&&o(t,a),e}();e.exports=h},function(e,t,r){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=r(2),i=r(3),a=r(6),s=function(){function e(t,r){var n=r.location,o=void 0===n?0:n,i=r.distance,s=void 0===i?100:i,c=r.threshold,h=void 0===c?.6:c,l=r.maxPatternLength,u=void 0===l?32:l,f=r.isCaseSensitive,v=void 0!==f&&f,p=r.tokenSeparator,d=void 0===p?/ +/g:p,g=r.findAllMatches,y=void 0!==g&&g,m=r.minMatchCharLength,k=void 0===m?1:m,b=r.includeMatches,S=void 0!==b&&b;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:v,tokenSeparator:d,findAllMatches:y,includeMatches:S,minMatchCharLength:k},this.pattern=v?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=a(this.pattern))}var t,r,s;return t=e,(r=[{key:"search",value:function(e){var t=this.options,r=t.isCaseSensitive,n=t.includeMatches;if(r||(e=e.toLowerCase()),this.pattern===e){var a={isMatch:!0,score:0};return n&&(a.matchedIndices=[[0,e.length-1]]),a}var s=this.options,c=s.maxPatternLength,h=s.tokenSeparator;if(this.pattern.length>c)return o(e,this.pattern,h);var l=this.options,u=l.location,f=l.distance,v=l.threshold,p=l.findAllMatches,d=l.minMatchCharLength;return i(e,this.pattern,this.patternAlphabet,{location:u,distance:f,threshold:v,findAllMatches:p,minMatchCharLength:d,includeMatches:n})}}])&&n(t.prototype,r),s&&n(t,s),e}();e.exports=s},function(e,t){var r=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(r,"\\$&").replace(n,"|")),i=e.match(o),a=!!i,s=[];if(a)for(var c=0,h=i.length;c<h;c+=1){var l=i[c];s.push([e.indexOf(l),l.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(e,t,r){var n=r(4),o=r(5);e.exports=function(e,t,r,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,h=void 0===c?100:c,l=i.threshold,u=void 0===l?.6:l,f=i.findAllMatches,v=void 0!==f&&f,p=i.minMatchCharLength,d=void 0===p?1:p,g=i.includeMatches,y=void 0!==g&&g,m=s,k=e.length,b=u,S=e.indexOf(t,m),x=t.length,M=[],_=0;_<k;_+=1)M[_]=0;if(-1!==S){var w=n(t,{errors:0,currentLocation:S,expectedLocation:m,distance:h});if(b=Math.min(w,b),-1!==(S=e.lastIndexOf(t,m+x))){var L=n(t,{errors:0,currentLocation:S,expectedLocation:m,distance:h});b=Math.min(L,b)}}S=-1;for(var A=[],O=1,C=x+k,j=1<<(x<=31?x-1:30),P=0;P<x;P+=1){for(var I=0,F=C;I<F;){n(t,{errors:P,currentLocation:m+F,expectedLocation:m,distance:h})<=b?I=F:C=F,F=Math.floor((C-I)/2+I)}C=F;var T=Math.max(1,m-F+1),N=v?k:Math.min(m+F,k)+x,z=Array(N+2);z[N+1]=(1<<P)-1;for(var E=N;E>=T;E-=1){var W=E-1,K=r[e.charAt(W)];if(K&&(M[W]=1),z[E]=(z[E+1]<<1|1)&K,0!==P&&(z[E]|=(A[E+1]|A[E])<<1|1|A[E+1]),z[E]&j&&(O=n(t,{errors:P,currentLocation:W,expectedLocation:m,distance:h}))<=b){if(b=O,(S=W)<=m)break;T=Math.max(1,2*m-S)}}if(n(t,{errors:P+1,currentLocation:m,expectedLocation:m,distance:h})>b)break;A=z}var $={isMatch:S>=0,score:0===O?.001:O};return y&&($.matchedIndices=o(M,d)),$}},function(e,t){e.exports=function(e,t){var r=t.errors,n=void 0===r?0:r,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?100:c,l=n/e.length,u=Math.abs(s-i);return h?l+u/h:u?1:l}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=[],n=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===n?n=i:s||-1===n||((o=i-1)-n+1>=t&&r.push([n,o]),n=-1)}return e[i-1]&&i-n>=t&&r.push([n,i-1]),r}},function(e,t){e.exports=function(e){for(var t={},r=e.length,n=0;n<r;n+=1)t[e.charAt(n)]=0;for(var o=0;o<r;o+=1)t[e.charAt(o)]|=1<<r-o-1;return t}},function(e,t){var r=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},n=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},o=function(e){return"string"==typeof e},i=function(e){return"number"==typeof e};e.exports={get:function(e,t){var a=[];return function e(t,s){if(s){var c=s.indexOf("."),h=s,l=null;-1!==c&&(h=s.slice(0,c),l=s.slice(c+1));var u=t[h];if(null!=u)if(l||!o(u)&&!i(u))if(r(u))for(var f=0,v=u.length;f<v;f+=1)e(u[f],l);else l&&e(u,l);else a.push(n(u))}else a.push(t)}(e,t),a},isArray:r,isString:o,isNum:i,toString:n}}])});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports) {
    "use strict";

    /**
     * Stores user search results for the server-users-supplier
     */
    // TODO CONFSRVDEV-2015 - shouldn't store the same User object more than once. Should only store lists of keys in the query map,
    // and then have a separate cross-supplier Map of User objects by key. dT
    var cache = {};
    var queries = [];

    exports.default = function (limit) {
        return {
            add: function add(query, users) {
                cache[query] = {
                    query: query,
                    users: users,
                    isExhausted: users.length < limit
                };

                // Queries list is alph sorted descending so that longer queries are above the shorter queries that
                // they contain.
                queries.push(query);
                queries.sort();
                queries.reverse();
            },

            /**
             * Look in the cache for this query or a shorter one.
             */
            getClosest: function getClosest(query) {
                if (cache[query]) {
                    return cache[query];
                }

                // Else find the longest matching substring of the query.
                // The query list is sorted, so the first item found should be the longest one.
                var queryMatch = queries.find(function (subquery) {
                    return query.indexOf(subquery) === 0;
                });
                if (queryMatch) {
                    return cache[queryMatch];
                }

                return null; // just to make this obvious...
            },

            // Used in tests.
            reset: function reset() {
                cache = {};
                queries = [];
            }
        };
    };

    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports) {
    "use strict";

    function escape(query) {
        return [].map.call(query, function escapeSpecialCharacter(char) {
            if (char === '+' || char === '-' || char === '&' || char === '|' || char === '!' || char === '(' || char === ')' || char === '{' || char === '}' || char === '[' || char === ']' || char === '^' || char === '"' || char === '~' || char === '*' || char === '?' || char === ':' || char === '\\') return '\\' + char;
            return char;
        }).join('');
    }

    exports.default = {
        escape: escape
    };
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(2), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _meta, _userSupplierKeys) {
    'use strict';

    var Meta = _interopRequireDefault(_meta).default;

    var UserSupplier = _interopRequireDefault(_userSupplierKeys).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    "use strict";

    function getCurrentUser() {
        return new Promise(function (resolve) {

            var username = Meta.get('remote-user');
            if (!username) {
                // Anonymous user.
                return resolve();
            }

            var userKey = Meta.get('remote-user-key');
            var displayName = Meta.get('current-user-fullname');
            var path = Meta.get('current-user-avatar-uri-reference');

            resolve({
                type: "known",
                username: username,
                userKey: userKey,
                profilePicture: {
                    path: path,
                    width: 48,
                    height: 48
                },
                displayName: displayName,
                supplier: UserSupplier.CURRENT
            });
        });
    }

    exports.default = {
        getCurrentUser: getCurrentUser
    };
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(15), __webpack_require__(42), __webpack_require__(13), __webpack_require__(43), __webpack_require__(16), __webpack_require__(45), __webpack_require__(46), __webpack_require__(47), __webpack_require__(17)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _templates, _resultPlaceholder, _userRanker, _userConverter, _utils, _defaultOrdering, _scoreLogger, _defaultFiltering, _scoreBooster) {
    'use strict';

    var Templates = _interopRequireDefault(_templates).default;

    var ResultPlaceholder = _interopRequireDefault(_resultPlaceholder).default;

    var SearchUsers = _interopRequireDefault(_userRanker).default;

    var ConvertUsers = _interopRequireDefault(_userConverter).default;

    var RenderUtils = _interopRequireDefault(_utils).default;

    var ensureDefaultOrder = _interopRequireDefault(_defaultOrdering).default;

    var scoreLogger = _interopRequireDefault(_scoreLogger).default;

    var filterServerResults = _interopRequireDefault(_defaultFiltering).default;

    var ScoreBooster = _interopRequireDefault(_scoreBooster).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    "use strict"; /**
                   * The contents of the UserCache is passed through the user pipeline which filters, ranks and modifies
                   * the list until we arrive at the final 5 elements to display.
                   *
                   * Want To add another function to the user pipeline? Easy...
                   *
                   * Define a function like the following and add it to a pipeline. Ordering is very important.
                   *
                   * @param results   The results array as supplied by the previous function
                   * @param next      Call this function and pass some results to trigger the next stage of the pipeline
                   * @param context   Some context about the current rendering request. See Mentions.js
                   *
                   * function pipelineTransformation(results, next, context) {
                   *      //Do some things on results
                   *      results.forEach((results) => transform(result))
                   *
                   *      //Remember to call next
                   *      next(results);
                   * }
                   */

    function filterUsingQuery(results, next, context) {
        next(SearchUsers(results, context.query));
    }

    function moveSelectedUserToTop(oldUsers, next, context) {
        if (!context.selectedUser) {
            return next(oldUsers);
        }

        var index = oldUsers.findIndex(function (user) {
            return user.username === context.selectedUser.username;
        });
        // Note that > -1 means that the user IS in the array. If index is 0, the user is already in the correct position
        // at the start of the array and there is nothing to do.
        if (index <= 0) {
            return next(oldUsers);
        }

        // Put this user at the start of the array.
        var user = oldUsers[index];
        var newUsers = oldUsers.slice(0); // clone the array to avoid modifying the original
        newUsers.splice(index, 1);
        newUsers.unshift(user);

        return next(newUsers);
    }

    /**
     * fuseScore is available on all user results for a query-term search, so we can sort at any point in the pipeline.
     */
    function sortOnScore(users, next) {
        if (users.length && typeof users[0].fuseScore === 'number') {
            // If the first result has a fuseScore they all will.
            users.sort(function (user1, user2) {
                return user1.fuseScore - user2.fuseScore;
            });
        }
        next(users);
    }

    function limit(array, next, context) {
        next(array.slice(0, context.DISPLAY_LIMIT));
    }

    // Called in the Server pipeline when there are no results.
    function userNotFound(results, next) {
        if (!results.length) {
            var notFoundResult = RenderUtils.resultWithHtml(Templates.Mentions.userNotFoundResult());
            results = [notFoundResult];
        }

        next(results);
    }

    function empty(results, next) {
        if (!results.length) {
            next([RenderUtils.resultWithHtml(Templates.Mentions.loadingPlaceholder())]);
        } else {
            next(results);
        }
    }

    function addErrorResult(results, next) {
        var failureResult = RenderUtils.resultWithHtml(Templates.Mentions.searchFailureResult());
        next([failureResult]);
    }

    /**
     * This function convert Users from API format to something that the Dropdown can display.
     *
     * All elements in the results array should be Users in API format.
     * If you want to add other elements to the results array, do this *after* convertUsers in the pipeline
     *
     * @param results
     * @param next
     */
    function convertUsers(results, next) {
        next(ConvertUsers(results));
    }

    // Don't continue the render if the query is stale.
    function staleServerResponseFilter(results, next, context) {
        if (context.latestQuery === context.query) {
            next(results);
        }
    }

    exports.default = {

        default: function _default(renderCallback) {
            return [ResultPlaceholder.cancelTimeout, filterServerResults, ensureDefaultOrder, limit, ScoreBooster.setSuggestedUsers, convertUsers, renderCallback];
        },

        client: function client(renderCallback) {
            return [ResultPlaceholder.cancelTimeout, filterUsingQuery, ScoreBooster.boostScores, sortOnScore, limit, moveSelectedUserToTop, convertUsers, ResultPlaceholder.startTimeout, empty, renderCallback];
        },
        server: function server(renderCallback) {
            return [ResultPlaceholder.cancelTimeout, staleServerResponseFilter, filterUsingQuery, ScoreBooster.boostScores, sortOnScore, limit, moveSelectedUserToTop, scoreLogger, convertUsers, userNotFound, renderCallback];
        },

        error: function error(renderCallback) {
            return [ResultPlaceholder.cancelTimeout, addErrorResult, renderCallback];
        },

        _functions: {
            moveSelectedUserToTop: moveSelectedUserToTop,
            sortOnScore: sortOnScore
        }
    };
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(16), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _utils, _templates) {
    'use strict';

    var RenderUtils = _interopRequireDefault(_utils).default;

    var Templates = _interopRequireDefault(_templates).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var displayTimeout = void 0;

    function _padResults(results, context) {
        var additionalElements = context.DISPLAY_LIMIT - results.length;
        if (additionalElements > 0) {
            var placeholder = RenderUtils.resultWithHtml(Templates.Mentions.loadingPlaceholder());
            for (var index = 0; index < additionalElements; index++) {
                results.push(placeholder);
            }
        }
        return results;
    }

    function startTimeout(results, next, context) {
        displayTimeout = setTimeout(function () {
            results = _padResults(results, context);
            next(results);
        }, window.skeletonPlaceholder || 3000); // CONFSRVDEV-3833 Remove once an appropriate value has been found.
        next(results);
    }

    function cancelTimeout(results, next) {
        clearTimeout(displayTimeout);
        next(results);
    }

    exports.default = {
        startTimeout: startTimeout,
        cancelTimeout: cancelTimeout
    };
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(2), __webpack_require__(10), __webpack_require__(1), __webpack_require__(44)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _meta, _i18n, _userSupplierKeys, _darkFeatures) {
    'use strict';

    var Meta = _interopRequireDefault(_meta).default;

    var I18n = _interopRequireDefault(_i18n).default;

    var UserSupplier = _interopRequireDefault(_userSupplierKeys).default;

    var DarkFeatures = _interopRequireDefault(_darkFeatures).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * Converts Users from API format to something that the Dropdown can display.
     */
    var contextPath = Meta.get('context-path');

    function getProfilePicture(user) {
        if (user && user.profilePicture && Meta.get('can-view-profile')) {
            // HACK - work around CONFSRVDEV-2936 by removing the dud context-path from the path.
            return user.profilePicture.path.replace('/_' + contextPath, '/_');
        }
        return contextPath + '/images/icons/profilepics/anonymous.svg';
    }

    var converter = function converter(users) {
        var addRecentLozenge = DarkFeatures.isEnabled('smart.mentions.recent.lozenge');
        var linkBase = Meta.get('base-url') + '/display/~';

        return users.map(function (user) {
            var link = linkBase + user.username;

            var lozenge = user.supplier === UserSupplier.RELATED && user.role && user.role.i18n;

            if (!lozenge && addRecentLozenge) {
                // Including a lozenge for Recent helps us see why an item is promoted, but make it opt-in.
                lozenge = user.supplier === UserSupplier.RECENT && I18n('user.supplier.recent');
            }
            // Uncomment this line to see why the results are in the order they are.
            // const lozenge = "" + user.fuseScore;

            return {
                className: 'insert-mentions-dropdown-option',
                name: user.displayName,
                username: user.username,
                href: link, // only used if the user tries to middle-click/open-in-new-tab the dropdown item
                icon: getProfilePicture(user),
                lozenge: lozenge,
                link: link,
                model: user,
                fuseMatches: user.fuseMatches
            };
        });
    };

    // Available for unit testing.
    converter._getProfilePicture = getProfilePicture;

    exports.default = converter;
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_44__;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _recentUsersSupplier) {
    "use strict";

    var RecentUsers = _interopRequireDefault(_recentUsersSupplier).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var supplierToScoreMap = {
        "current": 1,
        "recent": 2,
        "related": {
            "creator": 3,
            "contributor": 4,
            "commenter": 5
        },
        "server": 6
    };

    var MAX_SCORE = 100;

    function scoreUser(user) {
        var potentialScore = supplierToScoreMap[user.supplier];

        if (typeof potentialScore === "number") {
            if (typeof user.sortIndex === "number") {
                // This allows us to sort recent users coming out of the cache. The highest calculated score will be just < 3.
                potentialScore += user.sortIndex / (RecentUsers.RECENT_USER_LIMIT + 1);
            }
            return potentialScore;
        }

        // Not a number, probably another object, index into it with role
        // Otherwise, it might have been undefined
        return (typeof potentialScore === "undefined" ? "undefined" : _typeof(potentialScore)) === "object" ? potentialScore[user.role.role] : MAX_SCORE;
    }

    function ensureDefaultOrder(results, next) {
        var sorted = results.sort(function (user1, user2) {
            return scoreUser(user1) - scoreUser(user2);
        });
        next(sorted);
    }

    exports.default = ensureDefaultOrder;
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _ajs) {
    "use strict";

    exports.default = logScores;

    var AJS = _interopRequireDefault(_ajs).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    "use strict";

    /**
     * Just used during development, logs result score information to help us figure out reasons for result order.
     */
    function logScores(results, next, context) {
        if (context.query) {
            AJS.debug("*** Mentions *** user-pipeline/logger: Logging search results for " + context.query);

            results.forEach(function (user) {
                AJS.debug("*** Mentions *** user-pipeline/logger: " + user.displayName + " has a score of " + user.fuseScore);
            });
        }

        next(results);
    };
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _userSupplierKeys) {
    "use strict";

    var DEFAULT_SUPPLIERS = [_userSupplierKeys.RECENT, _userSupplierKeys.CURRENT, _userSupplierKeys.RELATED];

    function filterServerResults(results, next) {
        var filteredUsers = results.filter(function (user) {
            return DEFAULT_SUPPLIERS.indexOf(user.supplier) !== -1;
        });
        next(filteredUsers);
    }

    exports.default = filterServerResults;
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports) {
    "use strict";

    function PipelineExecutor(pipeline, context) {
        this.pipeline = pipeline;
        this.context = context;
    }

    PipelineExecutor.prototype.execute = function (input) {
        this._next(0, input);
    };

    PipelineExecutor.prototype._next = function (index, results) {
        this.pipeline[index](results, this._next.bind(this, index + 1), this.context);
    };

    exports.default = PipelineExecutor;
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(0), __webpack_require__(50), __webpack_require__(18)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (module, exports, _ajs, _analyticsSupport, _autocompleteManager) {
    'use strict';

    var AJS = _interopRequireDefault(_ajs).default;

    var Analytics = _interopRequireDefault(_analyticsSupport).default;

    var AutocompleteManager = _interopRequireDefault(_autocompleteManager).default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    "use strict";

    function publishEventForSelection(user) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var idd = typeof AutocompleteManager.getInputDrivenDropdown === 'function' && AutocompleteManager.getInputDrivenDropdown();
        if (!idd || !user) {
            AJS.debug("Cannot publish 'confluence.mention.selection' analytics with missing dropdown, user or context.");
            return;
        }

        var query = idd._value || '';
        var dd = idd.dd;
        var index = dd && typeof dd.getFocusIndex === 'function' && dd.getFocusIndex();

        var analyticsData = {
            source: user.model.supplier,
            queryLength: query.length,
            queryWords: query.split(' ').length,
            index: index,
            numberOfSearches: context.numGetDataAndRunCallbackCalls
        };

        // By publishing the supplier source of the selected User, we can determine whether users are finding
        // the users they need from the Smart mentions or whether they still have to wait for the Dumb (server)
        // ones.
        Analytics.publish('confluence.mention.selection', analyticsData);
        AJS.debug("Published 'confluence.mention.selection' event with supplier: " + user.model.supplier);
    }

    /**
     * Updates the state of the current Mention interaction.
     * @param autoCompleteControl
     */
    function updateSession(autoCompleteControl) {
        autoCompleteControl.analytics = Object.assign({
            numGetDataAndRunCallbackCalls: 0
        }, autoCompleteControl.analytics);

        autoCompleteControl.analytics.numGetDataAndRunCallbackCalls += 1;
    }

    exports.default = {
        updateSession: updateSession,
        publishEventForSelection: publishEventForSelection
    };
    module.exports = exports['default'];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_50__;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_52__;

/***/ })
/******/ ])});;
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-mentions-plugin:smart-mentions-editor-resources', location = '/js/smart-mentions-init.js' */
require([
    'confluence-editor/loader/tinymce-bootstrap',
    'confluence-mentions'
], function (BootstrapManager,
             Mentions) {
    // Main entry point to Smart Mentions logic. To lower page weight, we could potentially pull in the Mentions
    // bundle.js via a WRM.require on the bootstrap init.
    BootstrapManager.addOnInitCallback(Mentions.init);
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-fixed-headers:confluence-fixed-headers-editor-resources', location = '/js/slow-edit-handler.js' */
require(["confluence/fh/utils/dom","ajs"],function(c,a){a.toInit(function(){var b=a.Meta.get("browse-page-tree-mode");if("create"===b||"edit"===b)c.addClassToPage(),$("#content").css({paddingRight:0})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:edit-resources', location = 'js/edit-init.js' */
require(["ajs","confluence/meta","confluence/share-page/service/share-page","confluence/share-page/service/share-dialog-loader","confluence/dark-features"],function(b,d,n,p,q){function m(){if("page"===d.get("content-type")||"blogpost"===d.get("content-type")){var c=b.$;if(q.isEnabled("react.share.dialog")){var h=c("\x3cdiv\x3e").addClass("invite-to-edit-container").tooltip({title:function(){return "Invite people to edit with you"},gravity:"ne"});h.append(c("\x3cspan\x3e").attr("id",
"share-react-link"));c("#rte-toolbar").prepend(h);p.init("share-react-link","edit")}else{c("#rte-toolbar").prepend(c(document.createElement("button")).prop("id","#inviteToEditLink".replace("#","")).attr("aria-label","Invite people to edit with you").attr("aria-haspopup",!0).attr("aria-expanded",!1).addClass("aui-button").addClass("invite-to-edit-button").html('\x3cspan class\x3d"invite-plus-icon"\x3e\x3c/span\x3e').tooltip({title:function(){return "Invite people to edit with you"},
gravity:"ne"}));var f=c("#inviteToEditLink");h="page"===d.get("content-type")?"Let\u0027s work together on this page":"Let\u0027s work together on this blog post";var r=function(){var a=c("#inline-dialog-inviteToEditPopup .share-content-popup"),e=c().add(a.find("button, input, select, textarea")).add(a.find("[href]")).add(a.find("[tabindex]:not([tabindex\x3d'-1'])"));a.focus().keydown(function(g){if("tab"===g.key.toLowerCase()){var k=c(g.target);if(g.shiftKey){if(k.is(a)||
k.is(e.first()))g.preventDefault(),e.last().focus()}else k.is(e.last())&&(g.preventDefault(),e.first().focus())}})},l=!1;n.initDialog("#inviteToEditLink","inviteToEditPopup",{},{heading:"Invite people to edit",notePlaceholder:h,link:function(){return require("confluence/share-page/fetch/content-info")(d.get("content-id"),"draft").pipe(function(a){return d.get("base-url")+a._links.edit})},entityId:function(){return d.get("draft-id")},restriction:function(){return require("confluence/share-page/fetch/content-restrictions")(d.get("content-id")).pipe(function(a){var e=
{};if(a.read.restrictions.user.size||a.read.restrictions.group.size||a.update.restrictions.user.size||a.update.restrictions.group.size)e.type="restrict",e.message="Restrictions on this page may prevent people viewing or editing.";return e})},copyOption:"invite",shareType:"edit",contentType:d.get("content-type"),errorText:"An unexpected error occurred. Please try again.",beforeLoad:function(){f.find(".invite-plus-icon").css("visibility","hidden");f.spin()},afterLoad:function(){f.find(".invite-plus-icon").css("visibility","visible");
f.spinStop()},onShow:function(){f.attr("aria-expanded",!0);var a=c("#inline-dialog-inviteToEditPopup").find('a[href]:visible, input:visible, button:not([disabled]):visible, textarea:visible, select:visible, details:visible,[tabindex]:not([tabindex\x3d"-1"]):visible').first();a&&a.focus();r();l=!0},onHide:function(){l&&(f.attr("aria-expanded",!1),c(document).off("keyup").on("keyup",function(a){27===a.keyCode&&f.focus()}));l=!1}})}}}"collaborative"===d.get("edit-mode")&&d.get("remote-user")&&(b.Rte.getEditor()&&
b.Rte.getEditor().initialized?m():b.bind("rte-collab-ready",m))});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.deprecated.pattern.toolbar1', location = 'aui.chunk.e1ab10802b2cc6c8050a--e4bf8fac8ac092f5e218.js' */
"use strict";(self.webpackChunk_auiRuntime=self.webpackChunk_auiRuntime||[]).push([[5178],{2284:(u,e,s)=>{s.r(e)}},u=>{var e;e=2284,u(u.s=e)}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.keyboardshortcuts:confluence-tinymce-keyboard-shortcuts', location = 'js/tinymce-plugin.js' */
define("confluence-keyboard-shortcuts/tinymce-plugin",["confluence-keyboard-shortcuts/confluence-keyboard-shortcuts"],function(d){var e={init:function(a){for(var b=function(b){return function(){a.execCommand("FormatBlock",!1,b)}},c=1;7>c;c++)a.addCommand("FormatBlock-h"+c,b("h"+c));a.addCommand("FormatBlock-p",b("p"));a.addCommand("FormatBlock-pre",b("pre"));a.addCommand("FormatBlock-blockquote",b("blockquote"));a.addCommand("mceConfShortcutDialog",d.keyboardShortcuts.openDialog);a.ui.registry.addButton("help",
{text:"confluence.conf_shortcuts_help_desc",onAction:function(){a.execCommand("mceConfShortcutDialog")}})},getInfo:function(){return{longname:"Atlassian Editor Keyboard Shortcuts Plugin",author:"Atlassian",authorurl:"http://www.atlassian.com"}}};return function(){return e}});require("confluence/module-exporter").safeRequire("confluence-keyboard-shortcuts/tinymce-plugin",function(d){require("tinymce").PluginManager.add("keyboardshortcuts",d)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.sticky-table-headers:stickytableheaders-resources', location = '/js/vendor/jquery.stickytableheaders.js' */
/*
 Modified by Atlassian | Copyright (c) 2011 by Jonas Mosbech - https://github.com/jmosbech/StickyTableHeaders
 MIT license info: https://github.com/jmosbech/StickyTableHeaders/blob/master/license.txt */
(function(d,l,t){function p(g,k){var a=this;a.$el=d(g);a.el=g;a.id=q++;a.$el.bind("destroyed",d.proxy(a.teardown,a));a.$clonedHeader=null;a.$originalHeader=null;a.cachedHeaderHeight=null;a.isSticky=!1;a.hasBeenSticky=!1;a.leftOffset=null;a.topOffset=null;a.init=function(){a.setOptions(k);a.$el.each(function(){var c=d(this);c.css("padding",0);a.$originalHeader=d("thead:first",this);a.$clonedHeader=a.$originalHeader.clone();c.trigger("clonedHeader.stickyTableHeaders",[a.$clonedHeader]);a.$clonedHeader.addClass("tableFloatingHeader");
a.$clonedHeader.css("display","none");a.$originalHeader.addClass("tableFloatingHeaderOriginal");a.$originalHeader.after(a.$clonedHeader);a.$printStyle=d('\x3cstyle type\x3d"text/css" media\x3d"print"\x3e.tableFloatingHeader{display:none !important;}.tableFloatingHeaderOriginal{position:static !important;}\x3c/style\x3e');a.$head.append(a.$printStyle)});a.updateWidth();a.toggleHeaders();a.bind()};a.destroy=function(){a.$el.unbind("destroyed",a.teardown);a.teardown()};a.teardown=function(){a.isSticky&&
a.$originalHeader.css("position","static");d.removeData(a.el,"plugin_stickyTableHeaders");a.unbind();a.$clonedHeader.remove();a.$originalHeader.removeClass("tableFloatingHeaderOriginal");a.$originalHeader.css("visibility","visible");a.$printStyle.remove();a.el=null;a.$el=null};a.bind=function(){a.$scrollableArea.on("scroll.stickyTableHeaders",a.toggleHeaders);a.isWindowScrolling||(a.$window.on("scroll.stickyTableHeaders"+a.id,a.setPositionValues),a.$window.on("resize.stickyTableHeaders"+a.id,a.toggleHeaders));
a.$scrollableArea.on("resize.stickyTableHeaders",a.toggleHeaders);a.$scrollableArea.on("resize.stickyTableHeaders",a.updateWidth)};a.unbind=function(){a.$scrollableArea.off(".stickyTableHeaders",a.toggleHeaders);a.isWindowScrolling||(a.$window.off(".stickyTableHeaders"+a.id,a.setPositionValues),a.$window.off(".stickyTableHeaders"+a.id,a.toggleHeaders));a.$scrollableArea.off(".stickyTableHeaders",a.updateWidth)};a.debounce=function(c,e){var f=null;return function(){var b=this,h=arguments;clearTimeout(f);
f=setTimeout(function(){c.apply(b,h)},e)}};a.toggleHeaders=a.debounce(function(){a.$el&&a.$el.each(function(){var c=d(this),e=a.isWindowScrolling?isNaN(a.options.fixedOffset)?a.options.fixedOffset.outerHeight():a.options.fixedOffset:a.$scrollableArea.offset().top+(isNaN(a.options.fixedOffset)?0:a.options.fixedOffset);var f=c.offset();var b=a.$scrollableArea.scrollTop()+e,h=a.$scrollableArea.scrollLeft(),m=a.options.cacheHeaderHeight?a.cachedHeaderHeight:a.$clonedHeader.height(),n=a.isWindowScrolling?
b>f.top:e>f.top;b=(a.isWindowScrolling?b:0)<f.top+c.height()-m-(a.isWindowScrolling?0:e);n&&b?(f=f.left-h+a.options.leftOffset,a.$originalHeader.css({position:"fixed","margin-top":a.options.marginTop,left:f,"z-index":3}),a.leftOffset=f,a.topOffset=e,a.$clonedHeader.css("display",""),a.isSticky||(a.isSticky=!0,a.updateWidth(),c.trigger("enabledStickiness.stickyTableHeaders")),a.setPositionValues()):a.isSticky&&(a.$originalHeader.css("position","static"),a.$clonedHeader.css("display","none"),a.isSticky=
!1,a.resetWidth(d("td,th",a.$clonedHeader),d("td,th",a.$originalHeader)),c.trigger("disabledStickiness.stickyTableHeaders"))})},0);a.setPositionValues=a.debounce(function(){var c=a.$window.scrollTop(),e=a.$window.scrollLeft();!a.isSticky||0>c||c+a.$window.height()>a.$document.height()||0>e||e+a.$window.width()>a.$document.width()||a.$originalHeader.css({top:a.topOffset-(a.isWindowScrolling?0:c),left:a.leftOffset-(a.isWindowScrolling?0:e)})},0);a.updateWidth=a.debounce(function(){if(a.isSticky){a.$originalHeaderCells||
(a.$originalHeaderCells=d("th,td",a.$originalHeader));a.$clonedHeaderCells||(a.$clonedHeaderCells=d("th,td",a.$clonedHeader));var c=a.getWidth(a.$clonedHeaderCells);a.setWidth(c,a.$clonedHeaderCells,a.$originalHeaderCells);a.$originalHeader.css("width",a.$clonedHeader.width());a.options.cacheHeaderHeight&&(a.cachedHeaderHeight=a.$clonedHeader.height())}},0);a.getWidth=function(c){var e=[];c.each(function(f){var b=d(this);if("border-box"===b.css("box-sizing"))b=b[0].getBoundingClientRect(),b=b.width?
b.width:b.right-b.left;else if("collapse"===d("th",a.$originalHeader).css("border-collapse"))if(l.getComputedStyle)b=parseFloat(l.getComputedStyle(this,null).width);else{var h=parseFloat(b.css("padding-left")),m=parseFloat(b.css("padding-right")),n=parseFloat(b.css("border-width"));b=b.outerWidth()-h-m-n}else b=b.width();e[f]=b});return e};a.setWidth=function(c,e,f){e.each(function(b){var h=c[b];f.eq(b).css({"min-width":h,"max-width":h})})};a.resetWidth=function(c,e){c.each(function(f){var b=d(this);
e.eq(f).css({"min-width":b.css("min-width"),"max-width":b.css("max-width")})})};a.setOptions=function(c){a.options=d.extend({},r,c);a.$window=d(a.options.objWindow);a.$head=d(a.options.objHead);a.$document=d(a.options.objDocument);a.$scrollableArea=d(a.options.scrollableArea);a.isWindowScrolling=a.$scrollableArea[0]===a.$window[0]};a.updateOptions=function(c){a.setOptions(c);a.unbind();a.bind();a.updateWidth();a.toggleHeaders()};a.init()}var q=0,r={fixedOffset:0,leftOffset:0,marginTop:0,objDocument:document,
objHead:"head",objWindow:l,scrollableArea:l,cacheHeaderHeight:!1};d.fn.stickyTableHeaders=function(g){return this.each(function(){var k=d.data(this,"plugin_stickyTableHeaders");k?"string"===typeof g?k[g].apply(k):k.updateOptions(g):"destroy"!==g&&d.data(this,"plugin_stickyTableHeaders",new p(this,g))})}})(jQuery,window);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.sticky-table-headers:stickytableheaders-resources', location = '/js/lib/utils.js' */
define("sticky-table-headers/utils",["jquery"],function(d){var e=function(){return!d("body").hasClass("theme-documentation")};return{isAValidTable:function(a){a=d(a);var b;if(b=e()&&!a.hasClass("stickyTableHeaders")&&0< !a.closest(".columnLayout").length&&0< !a.parents("table").length&&a.find("\x3e thead:first").is(":visible")&&1===a.find("thead").children().length&&1===a.find(".confluenceTh").parent().length)b=0===a.find(".confluenceTh").siblings().length||0===a.find(".confluenceTh").siblings().not(".confluenceTh").length;
return b},bindHorizontalScrolling:function(a,b){var c=b||d(window);a.closest(".table-wrap").scroll(function(){c.trigger("scroll.stickyTableHeaders")})},moveHeaderRowsToTHead:function(a){d(a).each(function(){var b=d(this);if(!(0<b.find("\x3e thead").length)){var c=b.find("\x3e tbody \x3e :first-child \x3e :first-child.confluenceTh");!(0>=c.length||0<c.parent().find("\x3e .confluenceTh[rowspan]").length)&&0< !b.parents("table").length&&0< !b.closest(".columnLayout").length&&(c=d("\x3cthead /\x3e").append(c.parent()),
b.prepend(c))}})},isNotDocumentationTheme:e}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.sticky-table-headers:stickytableheaders-resources', location = '/js/lib/viewpage.js' */
define("sticky-table-headers/viewpage",["jquery","ajs","sticky-table-headers/utils"],function(c,l,d){var e,h,f,n=function(a,b){a=c(a).filter(function(){return d.isAValidTable(this)});a.stickyTableHeaders(b).addClass("stickyTableHeaders");f?f.add(a):f=a;b=function(m,g){f.stickyTableHeaders(g)};h&&l.unbind("sticky-table-headers.change.options",h);l.bind("sticky-table-headers.change.options",b);h=b;d.bindHorizontalScrolling(a)};return{initialize:function(){var a=c(".confluenceTable:not(.stickyTableHeaders)"),
b=c(window);if(d.isNotDocumentationTheme()){d.moveHeaderRowsToTHead(a);if(window.MutationObserver){a=document.querySelector("#page")||document.querySelector("#confluence-ui");var m=/sticky|tableFloating|confluenceTh/,g=new MutationObserver(c.debounce(function(p){for(var q=!1,r,k=0,t=p.length;k<t;k++)if(r=p[k].target.className,!m.test(r)){q=!0;break}q&&b.trigger("resize.stickyTableHeaders")},0));e&&e.unobserve&&e.unobserve();g.observe(a,{subtree:!0,attributes:!0,childList:!0});e=g}n(c(".confluenceTable"),
{cacheHeaderHeight:!0})}},setupTable:n}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.sticky-table-headers:stickytableheaders-resources', location = '/js/lib/editor.js' */
define("sticky-table-headers/editor",["ajs","jquery","sticky-table-headers/utils"],function(f,c,e){var h=function(a){var b={};b.objWindow=c(a.getWin());b.scrollableArea=b.objWindow;b.objDocument=c(a.getDoc());b.objHead=b.objDocument.find("head");return b},g=function(a,b){var d=f.Rte.getEditor();d&&(d=h(d),b=c.extend({},d,b),a=c(a).filter(function(){return e.isAValidTable(this)}),a.stickyTableHeaders(b).addClass("stickyTableHeaders"),e.bindHorizontalScrolling(a,b.objWindow))};return{initialize:function(){var a=
f.Rte.getEditor();a&&(a=c(a.getBody()).find(".confluenceTable"),e.moveHeaderRowsToTHead(a),g(a))},setupTable:g}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.sticky-table-headers:stickytableheaders-resources', location = '/js/stickytableheaders.js' */
define("sticky-table-headers",["ajs","sticky-table-headers/viewpage","sticky-table-headers/editor","jquery"],function(a,c,b,d){var e=a.debounce(c.initialize,0);return{initialize:function(){a.DarkFeatures.isEnabled("confluence-table-enhancements.sticky-headers.disabled")||d(function(){e()});a.DarkFeatures.isEnabled("confluence-table-enhancements.sticky-headers-editor")&&(a.bind("rte-ready",b.initialize),a.bind("rte-quick-edit-push-state",b.initialize),a.bind("rte-quick-edit-push-hash",b.initialize))}}});
require("sticky-table-headers").initialize();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.image.effects.ImageEffectsPlugin:propertiespanel', location = 'com/atlassian/confluence/image/effects/property-panel.js' */
AJS.toInit(function(e){function u(){AJS.bind("dialog-created.image-properties",function(a,c){d=c.img;n()?d.naturalHeight&&d.naturalWidth&&16E6<d.naturalHeight*d.naturalWidth?Confluence.Editor.ImageProps.registerPanel("image-effects",k("This image is too large to rotate or apply image effects. You\u0027ll need to upload a smaller version of the file."),"image-effects-panel",null):Confluence.Editor.ImageProps.registerPanel("image-effects",k(),"image-effects-panel",v):Confluence.Editor.ImageProps.registerPanel("image-effects",k("Image effects can\u0027t be applied to web images"),
"image-effects-panel",null)});AJS.bind("dialog-before-show.image-properties",function(){p();q(l(e(d)))})}function w(){var a=new AJS.Dialog({width:600,height:500,id:"image-effects-dialog"});a.addHeader("Add Image Effect");a.addPanel("",k(),"");p();a.addSubmit("Save",function(){r(x,y).done(function(){a.hide()})});a.addCancel("Close",function(){a.hide()});AJS.Confluence.PropertyPanel.Image.pluginButtons.push(null,
{create:function(c){d=c[0];c=l(c);var b=!n();return{className:"image-effects",text:"Effects...",tooltip:b?"Image effects can\u0027t be applied to web images":"Add an image effect like drop shadow or picture frame",click:function(){if(d.naturalHeight&&d.naturalWidth&&16E6<d.naturalHeight*d.naturalWidth)return alert("This image is too large to rotate or apply image effects. You\u0027ll need to upload a smaller version of the file."),!1;q(l(e(d)));AJS.Confluence.PropertyPanel.destroy();a.show()},disabled:b,selected:!!c}}})}function z(a,
c){var b=a.attr("src"),f=A.exec(b),h=c?"effects\x3d"+c:"";f?b=b.replace(f[2],h):c&&(b=b+(-1!=b.indexOf("?")?"\x26":"?")+h);a.attr("src",b);a.attr("data-mce-src",b);c=(c=a.attr("confluence-query-params"))?(f=t.exec(c))?c.replace(f[2],h):c+"\x26"+h:h;a.attr("confluence-query-params",c)}function l(a){a=a.attr("confluence-query-params");if(a=t.exec(a))return a[3]}function q(a){e(".image-effect-preview.selected").removeClass("selected");a?e(g).each(function(c,b){if(b.effects==a)return e(e(".image-effect-preview")[c]).addClass("selected"),
!1}):e(".image-effect-preview.image-effect-none").addClass("selected");m=a}function k(a){return a?'\x3cdiv class\x3d"aui-message aui-message-warning warning"\x3e\x3cspan class\x3d"aui-icon icon-warning"\x3e\x3c/span\x3e'+a+"\x3c/div\x3e":'\x3cdiv class\x3d"image-effects"\x3e\x3cul class\x3d"image-list"\x3e\x3c/ul\x3e\x3c/div\x3e'}function p(){for(var a=e("div.image-effects ul.image-list"),c=Math.floor(22*Math.random())+1,b=0;b<g.length;b++){var f=e('\x3cli class\x3d"attached-image image-effect-preview'+
(g[b].effects?"":" image-effect-none")+'"\x3e\x3cdiv class\x3d"image-container"\x3e\x3cimg class\x3d"thumbnail" src\x3d"'+AJS.contextPath()+"/plugins/servlet/imgFilter.png?preview\x3dtrue\x26id\x3d"+c+"\x26effects\x3d"+g[b].effects+'" title\x3d"'+g[b].name+'" style\x3d"margin-top: 5px"\x3e\x3c/div\x3e\x3cspan class\x3d"caption filename" title\x3d"'+g[b].name+'"\x3e'+g[b].name+"\x3c/span\x3e\x3c/li\x3e");f.hover(function(){e(this).addClass("hover")},function(){e(this).removeClass("hover")});a.append(f);
f.click(g[b],function(h){e(".image-effect-preview.selected").removeClass("selected");e(this).addClass("selected");m=h.data.effects})}}function n(){return!e(d).hasClass("confluence-external-resource")}function v(){return r()}function r(a,c){function b(){c&&c();f.resolve();d.onload=null;tinyMCE.activeEditor.undoManager.add()}var f=e.Deferred();a&&a();d.onload=b;a=d.src;z(e(d),m);d.src==a&&b();return f}function x(){var a=dialog.popup.element,c=650/60,b=e('\x3cdiv class\x3d"image-properties-loading-blanket"\x3e\x3cdiv class\x3d"loading-data"\x3e\x3c/div\x3e\x3c/div\x3e').appendTo(a.find(".dialog-page-body")),
f=b.find(".loading-data");b.css({width:b.parent().width(),height:a.height()});f.css({marginTop:-60,marginLeft:-60});f.spin({color:"#666",width:c,radius:25,length:25,top:0,left:0,zIndex:0,speed:1.042})}function y(){var a=dialog.popup.element.find(".image-properties-loading-blanket .loading-data");a.css({marginTop:"",marginLeft:""});a.spinStop();a.closest(".image-properties-loading-blanket").remove()}var d,A=/(\?|&)(effects=[^&]+)($|&)/,t=/(^|&)(effects=([^&]+))($|&)/,m=null,g=[];g.push({name:"None",
effects:null});g.push({name:"Taped",effects:"border-simple,blur-border,tape"});g.push({name:"Instant Camera",effects:"border-polaroid,blur-border"});g.push({name:"Curl Shadow",effects:"border-simple,shadow-kn"});g.push({name:"Snapshot",effects:"border-simple,blur-border"});g.push({name:"Drop Shadow",effects:"drop-shadow"});Confluence.Editor.ImageProps?
u():w()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:editor', location = '/js/editor.js' */
require(["internal/browser-metrics","jquery"],function(a,e){e(function(){var c=AJS.Meta.get("content-type"),d=AJS.Meta.getBoolean("new-page")?"create":"edit",f=e("body");if((f.hasClass("edit")||f.hasClass("create"))&&c&&d)if(AJS.Meta.getBoolean("collaborative-content")){var b="confluence."+c+"."+d+".collaborative.view";a.start({key:b,isInitial:!0});AJS.bind("rte-collab-ready",function(){a.end({key:b});a.start({key:b+".connected"})});AJS.bind("synchrony.connected",function(){a.end({key:b+".connected"})})}else AJS.Meta.getBoolean("collaborative-content")||
a.start({key:"confluence."+c+"."+d+".view",ready:".active-richtext",isInitial:!0})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-utilities-resources', location = 'utils/roadmap-helper.js' */
(function($,_){var RM=Confluence.Roadmap=Confluence.Roadmap||{};RM.Helper={getPosXOnMonthTimeline:function(timeline,date){const startDate=Confluence.Roadmap.DateUtilities.parseDate(timeline.startDate);const dateToBeginRender=Confluence.Roadmap.DateUtilities.parseDate(date);var months=RM.DateUtilities.getNumberOfMonths(RM.DateUtilities.getStartOfMonth(startDate),RM.DateUtilities.getStartOfMonth(dateToBeginRender));var posX=months*Roadmap.MONTH_WIDTH;var pixelFromStartMonth=RM.DateUtilities.getMillisecondsFromStartMonth(dateToBeginRender)*
Roadmap.MONTH_WIDTH/RM.DateUtilities.getMillisecondsInMonth(dateToBeginRender);return Math.round(posX+pixelFromStartMonth)},getPosXOnWeekTimeline:function(timeline,startDate){const date=Confluence.Roadmap.DateUtilities.parseDate(timeline.startDate);const startDateTimelineStartFromMonday=RM.DateUtilities.getStartOfIsoWeek(date);const weeks=(startDate-startDateTimelineStartFromMonday)/RM.DateUtilities.MILLISECONDS_A_WEEK;const posX=weeks*Roadmap.WEEK_WIDTH;return Math.round(posX)},getWidthTimeline:function(timeline,
bar){var barWidth=bar.duration;if(timeline.displayOption===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH)barWidth*=Roadmap.MONTH_WIDTH;else barWidth*=Roadmap.WEEK_WIDTH;return barWidth<Roadmap.EXTRA_SPACE_AROUND?0:Math.round(barWidth-Roadmap.EXTRA_SPACE_AROUND)},getMonthStartDateByPosition:function(timeline,positionX){const months=Math.floor(positionX/Roadmap.MONTH_WIDTH);const startDate=RM.DateUtilities.parseDate(timeline.startDate);const timelineStartMonth=RM.DateUtilities.getStartOfMonth(startDate);timelineStartMonth.setMonth(timelineStartMonth.getMonth()+
months);const daysWidth=Math.abs(positionX)%Roadmap.MONTH_WIDTH;if(daysWidth!==0&&months<0)daysWidth=Roadmap.MONTH_WIDTH-daysWidth;const msFromMonth=RM.DateUtilities.getMillisecondsInMonth(timelineStartMonth)*daysWidth/Roadmap.MONTH_WIDTH;return new Date(timelineStartMonth.getTime()+msFromMonth)},getWeekStartDateByPosition:function(timeline,positionX){const startDate=RM.DateUtilities.parseDate(timeline.startDate);const startDateTimeline=Confluence.Roadmap.DateUtilities.getStartOfIsoWeek(startDate);
const numberOfWeeks=positionX/Roadmap.WEEK_WIDTH;return new Date(startDateTimeline.setDate(startDateTimeline.getDate()+numberOfWeeks*7))},guid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(c){var r=Math.random()*16|0,v=c=="x"?r:r&3|8;return v.toString(16)})}};RM.ColorHelper={resetColorCounts:function(){_.each(Roadmap.COLORS,function(color){color.count=0})},findColor:function(color){return _.find(Roadmap.COLORS,function(roadmapColor){return roadmapColor.lane===color.lane})},
adjustColorCount:function(color,adjustAmount){var roadmapColor=RM.ColorHelper.findColor(color);if(roadmapColor)roadmapColor.count=roadmapColor.count+adjustAmount},getColor:function(){return _.min(Roadmap.COLORS,function(color){return color.count})}}})(AJS.$,window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-utilities-resources', location = 'utils/roadmap-utilities.js' */
(function(g,p){var e=Confluence.Roadmap=Confluence.Roadmap||{},h=AJS.Meta.get("user-locale").replace("_","-");e.DateUtilities={MILLISECONDS_A_DAY:864E5,MILLISECONDS_A_WEEK:6048E5,getStartOfIsoWeek:a=>new Date(a.getFullYear(),a.getMonth(),a.getDate()-a.getDay()+1),getEndOfIsoWeek:a=>new Date(a.getFullYear(),a.getMonth(),a.getDate()-a.getDay()+7),getStartOfMonth:a=>new Date(a.getFullYear(),a.getMonth(),1),getEndOfMonth:a=>new Date((new Date(a.getFullYear(),a.getMonth()+1,1)).getTime()-1),addMonths:(a,
b)=>{a=new Date(a);const c=a.getDate();a.setDate(1);a.setMonth(a.getMonth()+b);b=a.getFullYear();b=[31,0==b%4&&0!=b%100||0==b%400?29:28,31,30,31,30,31,31,30,31,30,31][a.getMonth()];a.setDate(Math.min(c,b));return a},areInSameWeek:(a,b)=>{a=new Date((new Date(a)).setHours(0,0,0,0));b=new Date((new Date(b)).setHours(0,0,0,0));return(new Date(a.setDate(a.getDate()-a.getDay()))).getTime()===(new Date(b.setDate(b.getDate()-b.getDay()))).getTime()},setIsoWeekday:(a,b)=>new Date(a.setDate(a.getDate()-a.getDay()+
b)),diffInYears:(a,b)=>Math.abs((new Date(b.getTime()-a.getTime())).getUTCFullYear()-1970),parseDate:function(a){if(!a)return null;if(a instanceof Date||"number"===typeof a||a.includes&&a.includes(":"))return new Date(a);a=a.split("-");var b=a[0].toString();const c=(new Date).getFullYear().toString();a[0]=c.substring(0,c.length-b.length)+b;b=Date.parse(a.join("-"));return isNaN(b)?null:new Date(new Date(a[0],a[1]-1,a[2]))},getDateStringFromDate:function(a,b){switch(b){case Roadmap.SHORT_DATE_FORMAT:return`${a.getFullYear()}-${(a.getMonth()+
1).toString().padStart(2,0)}-${a.getDate().toString().padStart(2,0)}`;case Roadmap.WEEK_FORMAT:return a.getDate().toString().padStart(2,"0")+"-"+a.toLocaleString(h,{month:"short"});case Roadmap.MONTH_FORMAT:return a.toLocaleString(h,{month:"short"});default:return a.getFullYear().toString()+"-"+(a.getMonth()+1).toString().padStart(2,"0")+"-"+a.getDate().toString().padStart(2,"0")+" "+a.getHours().toString().padStart(2,"0")+":"+a.getMinutes().toString().padStart(2,"0")+":"+a.getSeconds().toString().padStart(2,
"0")}},getNumberOfMonths:function(a,b){return b.getMonth()-a.getMonth()+12*(b.getFullYear()-a.getFullYear())},getMillisecondsInMonth:function(a){return(new Date(a.getFullYear(),a.getMonth()+1,0)).getDate()*e.DateUtilities.MILLISECONDS_A_DAY},getMillisecondsFromStartMonth:function(a){return a.getTime()-(new Date(a.getFullYear(),a.getMonth(),1)).getTime()},calculateDurationInformation:function(a){var b=e.DateUtilities.getMillisecondsInMonth(a);a=e.DateUtilities.getMillisecondsFromStartMonth(a);var c=
b-a;return{totalMsOfMonth:b,msFromStartMonth:a,msRemainingOfMonth:c,durationOfMonth:a/b,remainingDurationOfMonth:c/b}},convertToWeekDuration:function(a,b){let c=new Date(a);var d=e.DateUtilities.calculateDurationInformation(a);b<=d.remainingDurationOfMonth?(b*=d.totalMsOfMonth,c=new Date(c.getTime()+b)):(c=new Date(c.getTime()+d.msRemainingOfMonth),b-=d.remainingDurationOfMonth,d=Math.floor(b),0<d&&c.setMonth(c.getMonth()+d),b%=1,d=e.DateUtilities.getMillisecondsInMonth(c),b*=d,c=new Date(c.getTime()+
b));return result=Math.abs(c.getTime()-a.getTime())/e.DateUtilities.MILLISECONDS_A_WEEK},convertToMonthDuration:function(a,b){const c=b*e.DateUtilities.MILLISECONDS_A_WEEK;var d=new Date(a.getTime()+c);b=12*d.getFullYear()+d.getMonth();b-=12*a.getFullYear()+a.getMonth();a=e.DateUtilities.calculateDurationInformation(a);0===b?b=c/a.totalMsOfMonth:(a=a.remainingDurationOfMonth,d=e.DateUtilities.calculateDurationInformation(d),a+=d.durationOfMonth,b=a+=b-1);return b}};e.FieldUtilities={fixDatePickerFields:function(a){a.find("input[data-aui-dp-uuid]").each(function(b,
c){var d=g(c),k=d.attr("data-aui-dp-uuid");d.on("click focus",function(){var f=g("[data-aui-dp-popup-uuid\x3d"+k+"]");if("5.4.5">=AJS.version){var l=f.datepicker("option","onSelect");f.datepicker("option","onSelect",function(m,n){l(m,n);d.change()})}f.parents(".aui-inline-dialog").addClass("datepicker-roadmap-patch")})})}}})(AJS.$,window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-models', location = '/models/model.js' */
(function(){window.Roadmap=window.Roadmap||{};Roadmap.Bar=Backbone.Model.extend({defaults:function(){return{id:Confluence.Roadmap.Helper.guid(),title:"New Bar",description:"",startDate:new Date,duration:1,rowIndex:0,pageLink:{}}}});Roadmap.Lane=Backbone.Model.extend({defaults:function(){return{title:"New Lane",color:Confluence.Roadmap.ColorHelper.getColor(),bars:[]}},initialize:function(){var a=new Roadmap.Bars(this.get("bars"));
this.set("bars",a)},getNumberOfRows:function(){var a=this.get("bars");if(0===a.length)return 0;var b=0;a.each(function(c){b=Math.max(c.get("rowIndex"),b)});return b+1}});Roadmap.Marker=Backbone.Model.extend({defaults:function(){return{title:"Marker"}}});Roadmap.Timeline=Backbone.Model.extend({defaults:function(){return{displayOption:Roadmap.TIMELINE_DISPLAY_OPTION.MONTH}},validate:function(a){var b=[],c=Confluence.Roadmap.DateUtilities.parseDate(a.startDateString);
a=Confluence.Roadmap.DateUtilities.parseDate(a.endDateString);c&&a?c>=a?b.push({name:"endDate",message:"Start date needs to be before the end date"}):Confluence.Roadmap.DateUtilities.diffInYears(c,a)>Roadmap.TIMELINE_YEARS_LIMIT&&b.push({name:"endDate",message:AJS.format("You cannot plan more than {0} years ahead.",Roadmap.TIMELINE_YEARS_LIMIT)}):b.push({name:"date",message:"Enter dates in yy-mm-dd"});return 0<b.length?b:!1},calculateTimelineColumns:function(){var a=Confluence.Roadmap.DateUtilities.parseDate(this.get("startDate")),
b=Confluence.Roadmap.DateUtilities.parseDate(this.get("endDate")),c=[];if(this.get("displayOption")===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH){a=Confluence.Roadmap.DateUtilities.getStartOfMonth(a);b=Confluence.Roadmap.DateUtilities.getEndOfMonth(b);do c.push({month:Confluence.Roadmap.DateUtilities.getDateStringFromDate(a,Roadmap.MONTH_FORMAT),year:a.getFullYear()}),a.setMonth(a.getMonth()+1);while(a<b)}else{a=Confluence.Roadmap.DateUtilities.getStartOfIsoWeek(a);b=Confluence.Roadmap.DateUtilities.getEndOfIsoWeek(b);
do c.push({month:Confluence.Roadmap.DateUtilities.getDateStringFromDate(a,Roadmap.WEEK_FORMAT),year:a.getFullYear()}),a.setDate(a.getDate()+7);while(a<b)}this.attributes.displayTimelineColumns=c}});Roadmap.Roadmap=Backbone.Model.extend({defaults:function(){return{title:"Roadmap Planner",lanes:[],markers:[]}},initialize:function(){var a=new Roadmap.Lanes(this.get("lanes"));this.set("lanes",a);a=new Roadmap.Markers(this.get("markers"));this.set("markers",a);a=new Roadmap.Timeline(this.get("timeline"));
this.set("timeline",a)},parse:function(a){return a.timeline?this.fromMacroData(a):Roadmap.getDefaultRoadmapData()},fromMacroData:function(a){var b=a.timeline;b.startDate=Confluence.Roadmap.DateUtilities.parseDate(b.startDate);b.endDate=Confluence.Roadmap.DateUtilities.parseDate(b.endDate);b=a.lanes;_.each(b,function(c){var d=c.bars;_.each(d,function(e){e.startDate=Confluence.Roadmap.DateUtilities.parseDate(e.startDate);e.id||(e.id=Confluence.Roadmap.Helper.guid())});c.bars=d});a.lanes=b;b=a.markers;
_.each(b,function(c){c.markerDate=Confluence.Roadmap.DateUtilities.parseDate(c.markerDate)});a.markers=b;return a},toMacroData:function(){var a=this.toJSON(),b=a.timeline.toJSON();b.startDate=Confluence.Roadmap.DateUtilities.getDateStringFromDate(b.startDate);b.endDate=Confluence.Roadmap.DateUtilities.getDateStringFromDate(b.endDate);delete b.displayTimelineColumns;a.timeline=b;b=a.lanes.toJSON();_.each(b,function(c){var d=c.bars.toJSON();_.each(d,function(e){e.startDate=Confluence.Roadmap.DateUtilities.getDateStringFromDate(e.startDate)});
c.bars=d});a.lanes=b;b=a.markers.toJSON();_.each(b,function(c){c.markerDate=Confluence.Roadmap.DateUtilities.getDateStringFromDate(c.markerDate)});a.markers=b;return a},updateDurationUnit:function(a){this.get("lanes").each(function(b){b.get("bars").each(function(c){var d=a===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH?Confluence.Roadmap.DateUtilities.convertToMonthDuration(c.get("startDate"),c.get("duration")):Confluence.Roadmap.DateUtilities.convertToWeekDuration(c.get("startDate"),c.get("duration"));
c.attributes.duration=d})})}})})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-models', location = '/models/collection.js' */
(function(){window.Roadmap=window.Roadmap||{};Roadmap.Bars=Backbone.Collection.extend({model:Roadmap.Bar});Roadmap.Lanes=Backbone.Collection.extend({model:Roadmap.Lane});Roadmap.Markers=Backbone.Collection.extend({model:Roadmap.Marker})})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-toolbar-view-resources', location = 'view/roadmap-editor/toolbar/toolbar-templates.soy' */
// This file was automatically generated from toolbar-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Roadmap.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Roadmap == 'undefined') { Confluence.Templates.Roadmap = {}; }


Confluence.Templates.Roadmap.toolbar = function(opt_data, opt_ignored) {
  return '<div id="roadmap-editor-toolbar" class="aui-toolbar2"><div class="aui-toolbar2-inner"><div class="aui-toolbar2-group"><div class="aui-toolbar2-primary">' + aui.buttons.buttons({content: '' + aui.buttons.button({id: 'toolbar-button-add-lane', text: ' ' + soy.$$escapeHtml('Add lane'), iconType: 'aui', iconClass: 'aui-icon-small aui-iconfont-add', iconText: 'Add'}) + aui.buttons.button({id: 'toolbar-button-add-bar', text: ' ' + soy.$$escapeHtml('Add bar'), iconType: 'aui', iconClass: 'aui-icon-small aui-iconfont-add', iconText: 'Add'}) + aui.buttons.button({id: 'toolbar-button-add-marker', text: ' ' + soy.$$escapeHtml('Add marker'), iconType: 'aui', iconClass: 'aui-icon-small aui-iconfont-add', iconText: 'Add'})}) + '</div><div class="aui-toolbar2-secondary">' + Confluence.Templates.Roadmap.timelineOptionsForm(null) + '</div></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.toolbar.soyTemplateName = 'Confluence.Templates.Roadmap.toolbar';
}


Confluence.Templates.Roadmap.timelineOptionsForm = function(opt_data, opt_ignored) {
  return '' + aui.form.form({id: 'timeline-options-form', action: '#', content: '<fieldset>' + aui.form.selectField({id: 'timeline-display-options-select', labelContent: '' + soy.$$escapeHtml('View by'), options: [{text: 'Months', value: 'MONTH'}, {text: 'Weeks', value: 'WEEK'}], extraClasses: 'view-by'}) + aui.form.textField({id: 'timeline-startdate-input', name: 'startDate', isRequired: true, extraClasses: 'roadmap-toolbar-date start-date aui-date-picker'}) + ' - ' + aui.form.textField({id: 'timeline-enddate-input', name: 'endDate', isRequired: true, extraClasses: 'roadmap-toolbar-date end-date aui-date-picker'}) + '<div class="field-group timeline-field-group-error"><div id="roadmap-timeline-error" class="error"></div></div></fieldset>'});
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.timelineOptionsForm.soyTemplateName = 'Confluence.Templates.Roadmap.timelineOptionsForm';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-toolbar-view-resources', location = 'view/roadmap-editor/toolbar/toolbar.js' */
(function(f,e){window.Roadmap=window.Roadmap||{};Roadmap.ToolbarView=Backbone.View.extend({className:"roadmap-toolbar",events:{"click #toolbar-button-add-bar":"onAddBarClick","click #toolbar-button-add-lane":"onAddLaneClick","click #toolbar-button-add-marker":"onAddMarkerClick","change #timeline-display-options-select":"onTimelineOptionChange"},initialize:function(){e.bindAll(this,"render")},render:function(){f(this.$el).html(Confluence.Templates.Roadmap.toolbar());this._initVariables();this._setupTimelineOptionsForm();
return this},onAddBarClick:function(a){a.preventDefault();a=this.model.get("lanes").at(0);var c=a.get("bars"),b=this.model.get("timeline"),d=Confluence.Roadmap.DateUtilities.parseDate(this.model.get("timeline").get("startDate"));b=b.get("displayOption")===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH?Confluence.Roadmap.DateUtilities.getStartOfMonth(d):Confluence.Roadmap.DateUtilities.getStartOfIsoWeek(d);c.add(new Roadmap.Bar({rowIndex:a.getNumberOfRows(),startDate:b}))},onAddLaneClick:function(a){a.preventDefault();
this.model.get("lanes").add(new Roadmap.Lane)},onAddMarkerClick:function(a){a=this.model.get("markers");const c=this.model.get("timeline"),b=Confluence.Roadmap.DateUtilities.parseDate(c.get("startDate")),d=Confluence.Roadmap.DateUtilities.parseDate(b);c.get("displayOption")===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH?b.setDate(15):Confluence.Roadmap.DateUtilities.setIsoWeekday(b,4);a.add(new Roadmap.Marker({markerDate:d}))},onTimelineOptionChange:function(a){this.model.get("timeline").set({displayOption:this.$timelineSelect.val()})},
_initVariables:function(){this.$timelineForm=this.$el.find("#timeline-options-form");this.$startDateInput=this.$timelineForm.find("#timeline-startdate-input");this.$endDateInput=this.$timelineForm.find("#timeline-enddate-input");this.$timelineSelect=this.$timelineForm.find("#timeline-display-options-select");this.$timelineError=this.$timelineForm.find("#roadmap-timeline-error");this.newTimeline=new Roadmap.Timeline},_clearTimelineErrors:function(){this.$timelineError.empty()},_showTimelineErrors:function(){var a=
this;e.each(a.newTimeline.validationError,function(c){a.$timelineError.append(c.message)})},_applyNewTimeline:function(){this.model.get("timeline").set({startDate:Confluence.Roadmap.DateUtilities.parseDate(this.$startDateInput.val()),endDate:Confluence.Roadmap.DateUtilities.parseDate(this.$endDateInput.val())});this._showTimeLineFormat()},_showTimeLineFormat:function(){var a=this.model.get("timeline");this.$startDateInput.val(Confluence.Roadmap.DateUtilities.getDateStringFromDate(a.get("startDate"),
Roadmap.SHORT_DATE_FORMAT));this.$endDateInput.val(Confluence.Roadmap.DateUtilities.getDateStringFromDate(a.get("endDate"),Roadmap.SHORT_DATE_FORMAT))},_validate:function(){this._clearTimelineErrors();this.newTimeline.isValid()?this._applyNewTimeline():this._showTimelineErrors()},_setupTimelineOptionsForm:function(){var a=this.model.get("timeline"),c=Confluence.Roadmap.DateUtilities.parseDate(a.get("startDate")),b=Confluence.Roadmap.DateUtilities.parseDate(a.get("endDate"));c=Confluence.Roadmap.DateUtilities.getDateStringFromDate(c,
Roadmap.SHORT_DATE_FORMAT);b=Confluence.Roadmap.DateUtilities.getDateStringFromDate(b,Roadmap.SHORT_DATE_FORMAT);this.$startDateInput.val(c);this.$endDateInput.val(b);this.newTimeline.set({startDateString:c,endDateString:b});this.$timelineSelect.val(a.get("displayOption"));a={overrideBrowserDefault:!0,firstDay:1};this.$startDateInput.datePicker(a);this.$endDateInput.datePicker(a);Confluence.Roadmap.FieldUtilities.fixDatePickerFields(this.$timelineForm);var d=this;this.$startDateInput.on("change",
function(){d.newTimeline.set({startDateString:d.$startDateInput.val()});d._validate()});this.$endDateInput.on("change",function(){d.newTimeline.set({endDateString:d.$endDateInput.val()});d._validate()})}})})(AJS.$,window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-timeline-view-resources', location = 'view/roadmap-editor/timeline/timeline-templates.soy' */
// This file was automatically generated from timeline-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Roadmap.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Roadmap == 'undefined') { Confluence.Templates.Roadmap = {}; }


Confluence.Templates.Roadmap.timeline = function(opt_data, opt_ignored) {
  var output = '';
  var displayTimelineList3 = opt_data.displayTimelines;
  var displayTimelineListLen3 = displayTimelineList3.length;
  for (var displayTimelineIndex3 = 0; displayTimelineIndex3 < displayTimelineListLen3; displayTimelineIndex3++) {
    var displayTimelineData3 = displayTimelineList3[displayTimelineIndex3];
    output += '<div class="roadmap-column-title">' + ((displayTimelineIndex3 == 0 || displayTimelineData3.year != opt_data.displayTimelines[displayTimelineIndex3 - 1].year) ? '<span class="roadmap-column-year">' + soy.$$escapeHtml(displayTimelineData3.year) + '</span><br/>' : '') + soy.$$escapeHtml(displayTimelineData3.month) + '</div>';
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.timeline.soyTemplateName = 'Confluence.Templates.Roadmap.timeline';
}


Confluence.Templates.Roadmap.timelineColumn = function(opt_data, opt_ignored) {
  var output = '';
  var iLimit14 = opt_data.numberOfColumns;
  for (var i14 = 0; i14 < iLimit14; i14++) {
    output += '<div class="roadmap-column-item">&nbsp;</div>';
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.timelineColumn.soyTemplateName = 'Confluence.Templates.Roadmap.timelineColumn';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-timeline-view-resources', location = 'view/roadmap-editor/timeline/timeline.js' */
(function(d,c){window.Roadmap=window.Roadmap||{};var b=Confluence.Roadmap.Helper;Roadmap.TimelineView=Backbone.View.extend({className:"roadmap-frame-title",initialize:function(){c.bindAll(this,"render")},render:function(){this.model.calculateTimelineColumns();this.$el.html(Confluence.Templates.Roadmap.timeline({displayTimelines:this.model.get("displayTimelineColumns")}));return this},update:function(){this.render()},getBarPosition:function(a){return this.model.get("displayOption")===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH?
{left:b.getPosXOnMonthTimeline(this.model.attributes,a.startDate),width:b.getWidthTimeline(this.model.attributes,a)}:{left:b.getPosXOnWeekTimeline(this.model.attributes,a.startDate),width:b.getWidthTimeline(this.model.attributes,a)}},getBarDuration:function(a){return this.model.get("displayOption")===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH?a/Roadmap.MONTH_WIDTH:a/Roadmap.WEEK_WIDTH},getBarStartDate:function(a){return this.model.get("displayOption")===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH?b.getMonthStartDateByPosition(this.model.attributes,
a):b.getWeekStartDateByPosition(this.model.attributes,a)}})})(AJS.$,window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-timeline-view-resources', location = 'view/roadmap-editor/timeline/timeline-column.js' */
(function(c,b){window.Roadmap=window.Roadmap||{};Roadmap.TimelineColumnView=Backbone.View.extend({className:"roadmap-frame-content",initialize:function(){b.bindAll(this,"render")},render:function(){var a=this.model.get("displayTimelineColumns").length;this.$el.html(Confluence.Templates.Roadmap.timelineColumn({numberOfColumns:a}));return this},updateHeight:function(a){this.$el.height(a)},update:function(){this.render()},getSizeAndPosition:function(){return{width:this.$el.width(),height:this.$el.height(),
left:this.$el.position().left,top:this.$el.position().top}}})})(AJS.$,window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-dialog-resources', location = 'view/dialog-view.js' */
(function(l,n){window.Roadmap=window.Roadmap||{};Roadmap.InlineDialogView=Backbone.View.extend({initialize:function(a){n.bindAll(this,"_onDocumentClick","_onKeyDown","_shouldHide","_onHide");this._trigger=a.trigger;this._dialogOptions=a.dialogOptions;this._reset();var b=this;l(".roadmap-editor-popup, .roadmap-macro-view").scroll(function(){b.hide()})},_shouldHideWhenClick:function(a){return!l.contains(this._inlineDialog[0],a.target)},_createInlineDialog:function(a,b){var e=this,c={hideCallback:this._onHide,
initCallback:function(){e._onBeforeShow();n.delay(function(){AJS.InlineDialog.current=null;e._onShow();l(document).on({click:e._onDocumentClick,keydown:e._onKeyDown})},e._inlineDialog.getOptions().fadeTime)},noBind:!0,persistent:!0,preHideCallback:this._shouldHide};b&&b.isSideInlineDialog&&(n.extend(c,{calculatePositions:n.compose(this._calculateSidePositions,this._getSideDimensions),offsetX:8,offsetY:0}),Raphael.version&&n.extend(c,{getArrowPath:this._getSideArrowPath}));return new AJS.InlineDialog(a,
"roadmap-dialog",function(d,g,m){e._getContent(d);m()},n.extend({},c,b))},_onHide:function(){l(document).off({click:this._onDocumentClick,keydown:this._onKeyDown})},hide:function(){this._inlineDialog.remove()},_onDocumentClick:function(a){this._shouldHideWhenClick(a)&&this.hide()},_onBeforeShow:l.noop,_onKeyDown:function(a){var b=a.which===l.ui.keyCode.ESCAPE;a=l(a.target).is(":input");b&&!a&&this.hide()},_onShow:l.noop,_reset:function(){this._inlineDialog=this._createInlineDialog(this._trigger,this._dialogOptions);
this.setElement(this._inlineDialog)},_shouldHide:function(){return!0},show:function(){this._inlineDialog.show()},disable:function(){this.$el.find(":input").attr("disabled","disabled")},enable:function(){this.$el.find(":input").removeAttr("disabled")},_onSubmit:function(){throw Error("DialogView subclasses must implement _onSubmit().");},_getSideDimensions:function(a,b,e,c){var d="body"!==c.container.toLowerCase();e=AJS.$(c.container);var g=d?AJS.$(c.container).parent():AJS.$(window),m=d?e.offset():
{left:0,top:0};d=d?g.offset():{left:0,top:0};b=b.target;var h=b.offset(),k=b[0].getBoundingClientRect&&b[0].getBoundingClientRect(),f=k?k.width:b.outerWidth();if(c.timelineWidth){var p=b.position();p.left+f>c.timelineWidth&&(f=c.timelineWidth-p.left-1)}return{screenPadding:10,arrowMargin:5,window:{top:d.top,left:d.left,scrollTop:g.scrollTop(),scrollLeft:g.scrollLeft(),width:g.width(),height:g.height()},scrollContainer:{width:e.width(),height:e.height()},trigger:{top:h.top-m.top,left:h.left-m.left,
width:f,height:k?k.height:b.outerHeight()},dialog:{width:a.width(),height:a.height(),offset:{top:c.offsetY,left:c.offsetX}},arrow:{height:a.find(".arrow").outerHeight()}}},_calculateSidePositions:function(a){var b=a.screenPadding,e=a.window,c=a.trigger,d=a.dialog,g=a.arrow,m=c.top-e.scrollTop,h=c.left-e.scrollLeft,k=Math.floor(c.height/2),f=Math.floor(d.height/2),p=Math.floor(g.height/2),q=h-d.offset.left-b>=d.width;h=a.scrollContainer.width-h-c.width-d.offset.left-b>=d.width||!q?"right":"left";q=
m+k-p;g=e.height-q-g.height;b=Math.min(b,q-a.arrowMargin);b=Math.min(b,g-a.arrowMargin);a=Math.max(f-k+d.offset.top-Math.max(e.height-m-c.height-b,0),0);b=Math.max(f-k-d.offset.top-Math.max(m-b,0),0)||-a||0;c={top:c.top+k-f+d.offset.top+b,left:"right"===h?c.left+c.width+d.offset.left:c.left-d.width-d.offset.left};d="w";f={position:"absolute",top:f-p-b};"right"===h?(f.right="auto",f.left=Raphael.version?"-7px":"0px"):(f.right="-7px",f.left="auto",d="e");return{dialogLocation:h,popupCss:c,arrowCss:f,
gravity:d}},_getSideArrowPath:function(a){return"right"===a.dialogLocation?"M8,0L0,8,8,16":"M8,0L16,8,8,16"},refresh:function(){this._inlineDialog&&this._inlineDialog.refresh()}})})(AJS.$,window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-bar-dialog-resources', location = 'view/roadmap-editor/bar-dialog/bar-dialog-templates.soy' */
// This file was automatically generated from bar-dialog-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Roadmap.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Roadmap == 'undefined') { Confluence.Templates.Roadmap = {}; }


Confluence.Templates.Roadmap.barDialog = function(opt_data, opt_ignored) {
  var output = '';
  var hasPageLink__soy3 = opt_data.bar.pageLink != null && opt_data.bar.pageLink.id != null;
  output += '<h3 id="bar-title" class="editable-field">' + soy.$$escapeHtml(opt_data.bar.title) + '</h3><div class="information"><div class="bar-page-link-wrapper">' + ((opt_data.linkPageEditable) ? '<div class="link-update-page ' + ((hasPageLink__soy3) ? 'hidden-field' : '') + '"><a href="#">' + soy.$$escapeHtml('Link page') + '</a></div>' : '') + '<div class="bar-page-link editable-field ' + ((! hasPageLink__soy3) ? 'hidden-field' : '') + '">' + ((hasPageLink__soy3) ? Confluence.Templates.Roadmap.buildPageLink({pageLink: opt_data.bar.pageLink, isEditMode: opt_data.renderOption.isEditMode}) : '') + '</div>' + ((opt_data.linkPageEditable) ? '<div class="link-new-page' + ((hasPageLink__soy3) ? ' hidden-field' : '') + '"><span class=\'page-link-separator\'>\u2022</span><a href="#">' + soy.$$escapeHtml('Create page') + '</a></div>' : '') + '</div><div class="clear"></div><div class="bar-description editable-field">' + soy.$$filterNoAutoescape(opt_data.bar.description) + '</div></div>' + ((opt_data.renderOption.isEditMode) ? '<div class="inner">' + aui.buttons.button({id: 'delete-button', text: 'Delete bar', type: 'link'}) + '</div>' : '');
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.barDialog.soyTemplateName = 'Confluence.Templates.Roadmap.barDialog';
}


Confluence.Templates.Roadmap.buildPageLink = function(opt_data, opt_ignored) {
  return '<a href=' + soy.$$escapeHtml("") + '/pages/viewpage.action?pageId=' + soy.$$escapeHtml(opt_data.pageLink.id) + ' ' + ((opt_data.isEditMode) ? 'target=\'_blank\'' : '') + ' class=\'confluence-link content-type-' + soy.$$escapeHtml(opt_data.pageLink.type) + '\'><span class="link-page-title">' + soy.$$escapeHtml(opt_data.pageLink.title) + '</span></a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.buildPageLink.soyTemplateName = 'Confluence.Templates.Roadmap.buildPageLink';
}


Confluence.Templates.Roadmap.inlineEditSaveButton = function(opt_data, opt_ignored) {
  return '' + aui.buttons.button({id: 'inline-edit-save', iconType: 'aui', extraClasses: 'aui-button-compact', text: '', extraAttributes: {title: 'Save'}, iconClass: 'aui-icon-small aui-iconfont-success'});
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.inlineEditSaveButton.soyTemplateName = 'Confluence.Templates.Roadmap.inlineEditSaveButton';
}


Confluence.Templates.Roadmap.inlineEditCancelButton = function(opt_data, opt_ignored) {
  return '' + aui.buttons.button({id: 'inline-edit-cancel', iconType: 'aui', extraClasses: 'aui-button-compact', text: '', extraAttributes: {title: 'Cancel'}, iconClass: 'aui-icon-small aui-iconfont-close-dialog'});
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.inlineEditCancelButton.soyTemplateName = 'Confluence.Templates.Roadmap.inlineEditCancelButton';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-bar-dialog-resources', location = 'view/roadmap-editor/bar-dialog/roadmap-editinplace.js' */
(function(d){function h(a,b){this.settings=a;this.dom=b;this.originalValue=null;this.shouldDelayReinit=this.didInsertDefaultText=!1}function l(a){""!==a&&((new Image).src=a)}function g(a){return a.replace(/^\s+/,"").replace(/\s+$/,"")}function k(a){return void 0===a||null===a||0===a.length?!1:!0}d.fn.editInPlace=function(a){var b=d.extend({},d.fn.editInPlace.defaults,a);if(!b.url&&!b.callback)throw Error("Need to set either url: or callback: option for the inline editor to work.");l(b.saving_image);
return this.each(function(){var c=d(this);c.data("editInPlace")||(c.data("editInPlace",!0),(new h(b,c)).init())})};d.fn.editInPlace.defaults={url:"",bg_over:"#ffc",bg_out:"transparent",hover_class:"",form_extra_classes:[],show_buttons:!1,save_button:'\x3cbutton class\x3d"inplace_save"\x3eSave\x3c/button\x3e',cancel_button:'\x3cbutton class\x3d"inplace_cancel"\x3eCancel\x3c/button\x3e',params:"",field_type:"text",field_extra_classes:[],default_text:"(Click here to add text)",use_html:!1,textarea_rows:10,
textarea_cols:25,select_text:"Choose new value",select_options:"",text_size:null,saving_text:void 0,saving_image:"",saving_animation_color:"transparent",value_required:!1,disable_submit_when_empty:!1,element_id:"element_id",update_value:"update_value",original_value:"original_value",original_html:"original_html",save_if_nothing_changed:!1,on_blur:"save",cancel:"",callback:null,callback_skip_dom_reset:!1,success:null,error:null,error_sink:function(a,b){alert(b)},preinit:null,postclose:null,delegate:null,
isAutoCompleteField:!1};d.extend(h.prototype,{init:function(){this.setDefaultTextIfNeccessary();this.connectOpeningEvents()},reinit:function(){this.shouldDelayReinit||(this.triggerCallback(this.settings.postclose,this.dom),this.triggerDelegateCall("didCloseEditInPlace"),this.markEditorAsInactive(),this.connectOpeningEvents())},setDefaultTextIfNeccessary:function(){""===this.dom.html()&&(this.dom.html(this.settings.default_text),this.didInsertDefaultText=!0)},connectOpeningEvents:function(){var a=
this;this.dom.bind("mouseenter.editInPlace",function(){a.addHoverEffect()}).bind("mouseleave.editInPlace",function(){a.removeHoverEffect()}).bind("click.editInPlace",function(b){a.openEditor(b)})},disconnectOpeningEvents:function(){this.dom.unbind(".editInPlace")},addHoverEffect:function(){this.settings.hover_class?this.dom.addClass(this.settings.hover_class):this.dom.css("background-color",this.settings.bg_over)},removeHoverEffect:function(){this.settings.hover_class?this.dom.removeClass(this.settings.hover_class):
this.dom.css("background-color",this.settings.bg_out)},openEditor:function(a){this.shouldOpenEditor(a)&&(this.disconnectOpeningEvents(),this.removeHoverEffect(),this.removeInsertedDefaultTextIfNeccessary(),this.saveOriginalValue(),this.markEditorAsActive(),this.replaceContentWithEditor(),this.setInitialValue(),this.workAroundMissingBlurBug(),this.connectClosingEventsToEditor(),this.triggerDelegateCall("didOpenEditInPlace"))},shouldOpenEditor:function(a){return this.isClickedObjectCancelled(a.target)||
!1===this.triggerCallback(this.settings.preinit,this.dom)||!1===this.triggerDelegateCall("shouldOpenEditInPlace",!0,a)||this.settings.isAutoCompleteField&&d(a.target).hasClass("link-page-title")?!1:!0},removeInsertedDefaultTextIfNeccessary:function(){this.didInsertDefaultText&&this.dom.html()===this.settings.default_text&&(this.dom.html(""),this.didInsertDefaultText=!1)},isClickedObjectCancelled:function(a){return this.settings.cancel?0!==d(a).parents().andSelf().filter(this.settings.cancel).length:
!1},saveOriginalValue:function(){this.originalValue=this.settings.use_html?this.dom.html():g(this.dom.text())},restoreOriginalValue:function(){this.setClosedEditorContent(this.originalValue)},setClosedEditorContent:function(a){a=a||this.settings.default_text;this.settings.use_html?this.dom.html(a):this.dom.text(a)},workAroundMissingBlurBug:function(){var a=this.dom.find(":input");this.dom.parents(":last").find(".editInPlace-active :input").not(a).blur()},replaceContentWithEditor:function(){var a=
this.createEditorElement(),b="inplace_form";this.settings.form_extra_classes instanceof Array&&(b=b+" "+this.settings.form_extra_classes.join(" "));this.dom.html('\x3cform class\x3d"'+b+'" style\x3d"display: inline; margin: 0; padding: 0;"\x3e\x3c/form\x3e');b=this.dom.find("form");b.append(a);if(this.settings.show_buttons){a=d('\x3cdiv class\x3d"inline-edit-buttons"\x3e\x3c/div\x3e');var c=d(this.settings.save_button);c.addClass("inplace_save");a.append(c);c=d(this.settings.cancel_button);c.addClass("inplace_cancel");
a.append(c);b.append(a)}},createEditorElement:function(){if(-1===d.inArray(this.settings.field_type,["text","textarea","select"]))throw"Unknown field_type \x3cfnord\x3e, supported are 'text', 'textarea' and 'select'";var a=null;"select"===this.settings.field_type?a=this.createSelectEditor():"text"===this.settings.field_type?a=d('\x3cinput type\x3d"text" '+this.inputNameAndClass()+' size\x3d"'+this.settings.text_size+'" /\x3e'):"textarea"===this.settings.field_type&&(a=d("\x3ctextarea "+this.inputNameAndClass()+
' rows\x3d"'+this.settings.textarea_rows+'"  cols\x3d"'+this.settings.textarea_cols+'" /\x3e'));return a},setInitialValue:function(){var a=this.triggerDelegateCall("willOpenEditInPlace",this.originalValue),b=this.dom.find(":input");b.val(a);b.val()!==a&&b.val("")},inputNameAndClass:function(){var a="inplace_field";this.settings.field_extra_classes instanceof Array&&(a=a+" "+this.settings.field_extra_classes.join(" "));return' name\x3d"inplace_value" class\x3d"'+a+'"'},createSelectEditor:function(){var a=
d("\x3cselect"+this.inputNameAndClass()+'\x3e\x3coption disabled\x3d"true" value\x3d""\x3e'+this.settings.select_text+"\x3c/option\x3e\x3c/select\x3e"),b=this.settings.select_options;d.isArray(b)||(b=b.split(","));for(var c=0;c<b.length;c++){var e=b[c];d.isArray(e)||(e=e.split(":"));var f=g(e[1]||e[0]);e=g(e[0]);f=d("\x3coption\x3e").val(f).text(e);a.append(f)}return a},connectClosingEventsToEditor:function(){function a(f){c.settings.isAutoCompleteField||c.handleCancelEditor(f);return!1}function b(f){c.handleSaveEditor(f);
return!1}var c=this,e=this.dom.find("form");e.find(".inplace_field").focus().select();e.find(".inplace_cancel").click(a);e.find(".inplace_save").click(b);this.settings.show_buttons||("save"===this.settings.on_blur?e.find(".inplace_field").blur(b):e.find(".inplace_field").blur(a));e.keyup(function(f){if(27===f.which)return a()});this.bindInputKeyup();e.submit(b)},bindSubmitOnEnterInInput:function(){if("textarea"!==this.settings.field_type){var a=this;this.dom.find(":input").keyup(function(b){if(13===
b.which)return a.dom.find("form").submit()})}},bindInputKeyup:function(){if("textarea"!==this.settings.field_type){var a=this,b=this.dom.find(":input"),c=this.dom.find(".inplace_save");b.keyup(function(e){if(13===e.which)return a.dom.find("form").submit();a.settings.disable_submit_when_empty&&(d.trim(b.val()).length?c.removeAttr("disabled"):c.attr("disabled","disabled"))})}},handleCancelEditor:function(a){!1!==this.triggerDelegateCall("shouldCloseEditInPlace",!0,a)&&(a=this.dom.find(":input").val(),
this.triggerDelegateCall("willCloseEditInPlace",a),this.restoreOriginalValue(),this.reinit())},handleSaveEditor:function(a){if(!1!==this.triggerDelegateCall("shouldCloseEditInPlace",!0,a)){var b=d.trim(this.dom.find(":input").val());b=this.triggerDelegateCall("willCloseEditInPlace",b);this.isDisabledDefaultSelectChoice()||this.isUnchangedInput(b)?this.handleCancelEditor(a):this.didForgetRequiredText(b)?this.settings.disable_submit_when_empty||(this.handleCancelEditor(a),this.reportError("Error: You must enter a value to save this field")):
(this.showSaving(b),this.settings.callback?this.handleSubmitToCallback(b):this.handleSubmitToServer(b))}},didForgetRequiredText:function(a){return this.settings.value_required&&(""===a||void 0===a||null===a)},isDisabledDefaultSelectChoice:function(){return this.dom.find("option").eq(0).is(":selected:disabled")},isUnchangedInput:function(a){return!this.settings.save_if_nothing_changed&&this.originalValue===a},showSaving:function(a){this.settings.callback&&this.settings.callback_skip_dom_reset||(k(this.settings.saving_text)&&
(a=this.settings.saving_text),k(this.settings.saving_image)&&(a=d("\x3cimg /\x3e").attr("src",this.settings.saving_image).attr("alt",a)),this.dom.html(encodeURIComponent(a)))},handleSubmitToCallback:function(a){this.enableOrDisableAnimationCallbacks(!0,!1);var b=this.triggerCallback(this.settings.callback,this.id(),a,this.originalValue,this.settings.params,this.savingAnimationCallbacks());this.settings.callback_skip_dom_reset||(void 0===b?(this.reportError("Error: Failed to save value: "+a),this.restoreOriginalValue()):
this.dom.html(b));this.didCallNoCallbacks()&&(this.enableOrDisableAnimationCallbacks(!1,!1),this.reinit())},handleSubmitToServer:function(a){a=this.settings.update_value+"\x3d"+encodeURIComponent(a)+"\x26"+this.settings.element_id+"\x3d"+this.dom.attr("id")+(this.settings.params?"\x26"+this.settings.params:"")+"\x26"+this.settings.original_html+"\x3d"+encodeURIComponent(this.originalValue)+"\x26"+this.settings.original_value+"\x3d"+encodeURIComponent(this.originalValue);this.enableOrDisableAnimationCallbacks(!0,
!1);this.didStartSaving();var b=this;d.ajax({url:b.settings.url,type:"POST",data:a,dataType:"html",complete:function(c){b.didEndSaving()},success:function(c){b.dom.html(c||b.settings.default_text);b.triggerCallback(b.settings.success,c)},error:function(c){b.dom.html(b.originalHTML);b.settings.error?b.triggerCallback(b.settings.error,c):b.reportError("Failed to save value: "+c.responseText||"Unspecified Error")}})},triggerCallback:function(a){if(a){var b=Array.prototype.slice.call(arguments,1);return a.apply(this.dom[0],
b)}},triggerDelegateCall:function(a,b,c){if(!this.settings.delegate||!d.isFunction(this.settings.delegate[a]))return b;a=this.settings.delegate[a](this.dom,this.settings,c);return void 0===a?b:a},reportError:function(a){this.triggerCallback(this.settings.error_sink,this.id(),a)},id:function(){return this.dom.attr("id")},markEditorAsActive:function(){this.dom.addClass("editInPlace-active")},markEditorAsInactive:function(){this.dom.removeClass("editInPlace-active")},savingAnimationCallbacks:function(){var a=
this;return{didStartSaving:function(){a.didStartSaving()},didEndSaving:function(){a.didEndSaving()}}},enableOrDisableAnimationCallbacks:function(a,b){this.didStartSaving.enabled=a;this.didEndSaving.enabled=b},didCallNoCallbacks:function(){return this.didStartSaving.enabled&&!this.didEndSaving.enabled},assertCanCall:function(a){if(!this[a].enabled)throw Error("Cannot call "+a+" now. See documentation for details.");},didStartSaving:function(){this.assertCanCall("didStartSaving");this.shouldDelayReinit=
!0;this.enableOrDisableAnimationCallbacks(!1,!0);this.startSavingAnimation()},didEndSaving:function(){this.assertCanCall("didEndSaving");this.shouldDelayReinit=!1;this.enableOrDisableAnimationCallbacks(!1,!1);this.reinit();this.stopSavingAnimation()},startSavingAnimation:function(){var a=this;this.dom.animate({backgroundColor:this.settings.saving_animation_color},400).animate({backgroundColor:"transparent"},400,"swing",function(){setTimeout(function(){a.startSavingAnimation()},10)})},stopSavingAnimation:function(){this.dom.stop(!0).css({backgroundColor:""})},
missingCommaErrorPreventer:""})})(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-bar-dialog-resources', location = 'view/roadmap-editor/bar-dialog/bar-dialog.js' */
(function(e,f){var h=Roadmap.InlineDialogView;Roadmap.BarDialogView=h.extend({events:{"click #delete-button":"_onDeleteClick","click .link-new-page":"_goToCreateLinkPage","click .link-update-page":"_goToUpdateLinkPage"},initialize:function(){f.bindAll(this,"_onPageLinkOpen","_onPageLinkSelectCompleted","_onPageLinkCallback","_onPageLinkBlur","_goToCreateLinkPage");this.options.dialogOptions={width:260,timelineWidth:this.options.timelineWidth,isSideInlineDialog:!0,renderOption:this.options.renderOption,
linkPageEditable:this.options.linkPageEditable,createLinkPageCallback:this.options.createLinkPageCallback};h.prototype.initialize.call(this,this.options)},_getContent:function(a){a.html(Confluence.Templates.Roadmap.barDialog({bar:f.extend({},this.model.attributes,{description:AJS.escapeHtml(this.model.attributes.description).replace(/\r?\n/g,"\x3cbr /\x3e")}),renderOption:this.options.dialogOptions.renderOption,linkPageEditable:this.options.dialogOptions.linkPageEditable}))},_onBeforeShow:function(){this.fields=
this._getFields();this._setupInlineEdit()},_getFields:function(){return{$title:this.$el.find("#bar-title"),$description:this.$el.find(".bar-description"),$pageLink:this.$el.find(".bar-page-link"),$pageLinkNew:this.$el.find(".link-new-page"),$pageLinkUpdate:this.$el.find(".link-update-page")}},_setupInlineEdit:function(){var a=this,b=this.fields,c=this.options.dialogOptions.renderOption.editInplace,g={form_extra_classes:["aui"],hover_class:"editable-field-hover aui-icon-small aui-iconfont-edit",field_extra_classes:["text"],
show_buttons:!0,save_button:Confluence.Templates.Roadmap.inlineEditSaveButton(),cancel_button:Confluence.Templates.Roadmap.inlineEditCancelButton(),error_sink:null,use_html:!0,default_text:"Click to add description.",delegate:{shouldOpenEditInPlace:function(){a.$el.find(".inplace_cancel").trigger("click")},didCloseEditInPlace:function(){setTimeout(function(){a.refresh()},0)}}};c.title&&b.$title.editInPlace(e.extend(!0,{},g,{callback:function(k,d){a.options.updateTitle(d);
return AJS.escapeHtml(d)},value_required:!0,disable_submit_when_empty:!0,delegate:{willOpenEditInPlace:function(){a.refresh();b.$title.find(".text").attr("maxlength",Roadmap.BarDialog.MAX_LENGTH_TITLE)}}}));""===e.trim(b.$description.text())?b.$description.addClass("empty-field"):b.$description.removeClass("empty-field");var l=e.extend(!0,{},g,{field_type:"textarea",field_extra_classes:["textarea"],value_required:!1,save_if_nothing_changed:!0,callback:function(k,d){d=e.trim(d);a.options.updateDescription(d);
""===d?(d="Click to add description.",e(this).addClass("empty-field")):(e(this).removeClass("empty-field"),Confluence.Roadmap.Analytics.addDescription());return AJS.escapeHtml(d).replace(/\r?\n/g,"\x3cbr /\x3e")},delegate:{willOpenEditInPlace:function(){a.refresh();b.$description.find(".textarea").attr("maxlength",Roadmap.BarDialog.MAX_LENGTH_DESCRIPTION);return a.model.attributes.description.replace(/<br\s*[\/]?>/gi,"\n")}}});c.description&&b.$description.editInPlace(l);
g=e.extend(!0,{},g,{isAutoCompleteField:!0,show_buttons:!1,default_text:"",field_extra_classes:["text","autocomplete-confluence-content"],delegate:{willOpenEditInPlace:a._onPageLinkOpen,didCloseEditInPlace:function(){f.isEmpty(b.$pageLink.data("linkData"))&&(b.$pageLink.hide(),b.$pageLinkNew.show(),b.$pageLinkUpdate.show())}},on_blur:null,callback:a._onPageLinkCallback});c.pageLink&&this.options.dialogOptions.linkPageEditable&&this.fields.$pageLink.editInPlace(g)},_onPageLinkOpen:function(a){var b=
this;a.append('\x3cdiv class\x3d"link-page-dropdown" /\x3e');var c=a.find(".autocomplete-confluence-content");c.attr({placeholder:"Search page","data-dropdown-target":"#inline-dialog-roadmap-dialog .link-page-dropdown","data-none-message":"No matches found"});Confluence.Binder.autocompleteConfluenceContent(a);c.bind("selected.autocomplete-content",this._onPageLinkSelectCompleted);c.on("blur",function(){setTimeout(b._onPageLinkBlur,
150)});a=this.model.attributes.pageLink;this.fields.$pageLink.data("linkData",a);return f.isEmpty(a)?!0:a.title},_onPageLinkSelectCompleted:function(a,b){a.stopPropagation();this.fields.$pageLink.find(".autocomplete-confluence-content").val(b.content.title);this.fields.$pageLink.data("linkData",b.content);f.defer(this._onPageLinkBlur)},_onPageLinkBlur:function(){var a=this.fields.$pageLink.find(".autocomplete-confluence-content"),b=e.Event("keyup");b.which=AJS.keyCode.ENTER;a.trigger(b)},_onPageLinkCallback:function(a,
b){a=""===b?{}:this.fields.$pageLink.data("linkData");return this._updatePageLink(a)},_updatePageLink:function(a){if(a.id!==this.model.attributes.pageLink.id){var b=this.fields;if(f.isEmpty(a))return this.options.updatePageLink({}),b.$pageLink.hide(),b.$pageLinkNew.show(),b.$pageLinkUpdate.show(),"No linked page";var c=f.pick(a,"id","title","type","spaceKey","wikiLink");a.spaceKey||(c.spaceKey=a.space.key);this.options.updatePageLink(c);b.$pageLink.show();b.$pageLinkNew.hide();
b.$pageLinkUpdate.hide();this.options.renderOption.isEditMode?Confluence.Roadmap.Analytics.addPageLinkEditMode({linkedPageId:a.id,pageId:0<AJS.Meta.get("page-id")?AJS.Meta.get("page-id"):AJS.Meta.get("draft-id"),isDraft:0>=AJS.Meta.get("page-id")}):Confluence.Roadmap.Analytics.addPageLinkViewMode({linkedPageId:a.id,pageId:AJS.Meta.get("page-id")});return Confluence.Templates.Roadmap.buildPageLink({pageLink:a,isEditMode:this.options.renderOption.isEditMode})}},_onDeleteClick:function(){this.options.deleteBar();
this.remove()},_goToCreateLinkPage:function(a){var b=this.options.dialogOptions;b.createLinkPageCallback&&f.bind(b.createLinkPageCallback,{me:this},a)()},_goToUpdateLinkPage:function(a){a.preventDefault();this.fields.$pageLink.show();this.fields.$pageLinkNew.hide();this.fields.$pageLinkUpdate.hide();this.fields.$pageLink.click()}})})(AJS.$,window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-bar-dialog-resources', location = 'view/roadmap-editor/bar-dialog/bar-link-new-page.js' */
Confluence.RoadmapLink=function(b,f){function g(a){return b.ajax({contentType:"application/json",type:"PUT",url:AJS.contextPath()+"/rest/roadmap/1.0/bar/"+a+"/PENDING"})}function h(a){return b.ajax({contentType:"application/json",type:"GET",url:AJS.contextPath()+"/rest/roadmap/1.0/bar/"+a+"/status"})}Roadmap.trackingBars=[];return{addCreateLinkPageListener:function(a,k){0>=parseInt(a.pageId)&&(a.parentPageId=AJS.Meta.get("parent-page-id"));var l=b.param(a);window.open(AJS.contextPath()+"/plugins/roadmap/create-page.action?"+
l,"_blank").opener=null;g(a.roadmapBarId).done(function(c){Roadmap.trackingBars.push(a.roadmapBarId)});b(window).off("focus");b(window).on("focus",function(){Roadmap.trackingBars.length||b(window).off("focus");f.each(Roadmap.trackingBars,function(c){h(c).done(function(d){var e=d.status;"REDEEM"==e?(Roadmap.trackingBars.splice(Roadmap.trackingBars.indexOf(c),1),k({barId:c,pageLink:b.parseJSON(d.pageLink)})):"UNKNOWN"==e&&Roadmap.trackingBars.splice(Roadmap.trackingBars.indexOf(c),1)})})})}}}(AJS.$,
window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.vendors--c7d6d1dc80', location = 'aui.chunk.689ecb44dce7d16cf764--dbf0e3c38ca329481d3b.js' */
(self.webpackChunk_auiRuntime=self.webpackChunk_auiRuntime||[]).push([[7051],{3981:(t,i,o)=>{var e,n,l;
/*!
 * jQuery UI Position 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */!function(f){"use strict";n=[o(7963),o(21)],e=function(t){return function(){var i,o=Math.max,e=Math.abs,n=/left|center|right/,l=/top|center|bottom/,f=/[\+\-]\d+(\.[\d]+)?%?/,s=/^\w+/,h=/%$/,r=t.fn.position;function p(t,i,o){return[parseFloat(t[0])*(h.test(t[0])?i/100:1),parseFloat(t[1])*(h.test(t[1])?o/100:1)]}function c(i,o){return parseInt(t.css(i,o),10)||0}function a(t){return null!=t&&t===t.window}function d(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:a(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}t.position={scrollbarWidth:function(){if(void 0!==i)return i;var o,e,n=t("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>"),l=n.children()[0];return t("body").append(n),o=l.offsetWidth,n.css("overflow","scroll"),o===(e=l.offsetWidth)&&(e=n[0].clientWidth),n.remove(),i=o-e},getScrollInfo:function(i){var o=i.isWindow||i.isDocument?"":i.element.css("overflow-x"),e=i.isWindow||i.isDocument?"":i.element.css("overflow-y"),n="scroll"===o||"auto"===o&&i.width<i.element[0].scrollWidth;return{width:"scroll"===e||"auto"===e&&i.height<i.element[0].scrollHeight?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(i){var o=t(i||window),e=a(o[0]),n=!!o[0]&&9===o[0].nodeType;return{element:o,isWindow:e,isDocument:n,offset:!e&&!n?t(i).offset():{left:0,top:0},scrollLeft:o.scrollLeft(),scrollTop:o.scrollTop(),width:o.outerWidth(),height:o.outerHeight()}}},t.fn.position=function(i){if(!i||!i.of)return r.apply(this,arguments);var h,a,g,u,m,w,W="string"==typeof(i=t.extend({},i)).of?t(document).find(i.of):t(i.of),v=t.position.getWithinInfo(i.within),y=t.position.getScrollInfo(v),H=(i.collision||"flip").split(" "),b={};return w=d(W),W[0].preventDefault&&(i.at="left top"),a=w.width,g=w.height,u=w.offset,m=t.extend({},u),t.each(["my","at"],(function(){var t,o,e=(i[this]||"").split(" ");1===e.length&&(e=n.test(e[0])?e.concat(["center"]):l.test(e[0])?["center"].concat(e):["center","center"]),e[0]=n.test(e[0])?e[0]:"center",e[1]=l.test(e[1])?e[1]:"center",t=f.exec(e[0]),o=f.exec(e[1]),b[this]=[t?t[0]:0,o?o[0]:0],i[this]=[s.exec(e[0])[0],s.exec(e[1])[0]]})),1===H.length&&(H[1]=H[0]),"right"===i.at[0]?m.left+=a:"center"===i.at[0]&&(m.left+=a/2),"bottom"===i.at[1]?m.top+=g:"center"===i.at[1]&&(m.top+=g/2),h=p(b.at,a,g),m.left+=h[0],m.top+=h[1],this.each((function(){var n,l,f=t(this),s=f.outerWidth(),r=f.outerHeight(),d=c(this,"marginLeft"),w=c(this,"marginTop"),x=s+d+c(this,"marginRight")+y.width,T=r+w+c(this,"marginBottom")+y.height,L=t.extend({},m),P=p(b.my,f.outerWidth(),f.outerHeight());"right"===i.my[0]?L.left-=s:"center"===i.my[0]&&(L.left-=s/2),"bottom"===i.my[1]?L.top-=r:"center"===i.my[1]&&(L.top-=r/2),L.left+=P[0],L.top+=P[1],n={marginLeft:d,marginTop:w},t.each(["left","top"],(function(o,e){t.ui.position[H[o]]&&t.ui.position[H[o]][e](L,{targetWidth:a,targetHeight:g,elemWidth:s,elemHeight:r,collisionPosition:n,collisionWidth:x,collisionHeight:T,offset:[h[0]+P[0],h[1]+P[1]],my:i.my,at:i.at,within:v,elem:f})})),i.using&&(l=function(t){var n=u.left-L.left,l=n+a-s,h=u.top-L.top,p=h+g-r,c={target:{element:W,left:u.left,top:u.top,width:a,height:g},element:{element:f,left:L.left,top:L.top,width:s,height:r},horizontal:l<0?"left":n>0?"right":"center",vertical:p<0?"top":h>0?"bottom":"middle"};a<s&&e(n+l)<a&&(c.horizontal="center"),g<r&&e(h+p)<g&&(c.vertical="middle"),o(e(n),e(l))>o(e(h),e(p))?c.important="horizontal":c.important="vertical",i.using.call(this,t,c)}),f.offset(t.extend(L,{using:l}))}))},t.ui.position={fit:{left:function(t,i){var e,n=i.within,l=n.isWindow?n.scrollLeft:n.offset.left,f=n.width,s=t.left-i.collisionPosition.marginLeft,h=l-s,r=s+i.collisionWidth-f-l;i.collisionWidth>f?h>0&&r<=0?(e=t.left+h+i.collisionWidth-f-l,t.left+=h-e):t.left=r>0&&h<=0?l:h>r?l+f-i.collisionWidth:l:h>0?t.left+=h:r>0?t.left-=r:t.left=o(t.left-s,t.left)},top:function(t,i){var e,n=i.within,l=n.isWindow?n.scrollTop:n.offset.top,f=i.within.height,s=t.top-i.collisionPosition.marginTop,h=l-s,r=s+i.collisionHeight-f-l;i.collisionHeight>f?h>0&&r<=0?(e=t.top+h+i.collisionHeight-f-l,t.top+=h-e):t.top=r>0&&h<=0?l:h>r?l+f-i.collisionHeight:l:h>0?t.top+=h:r>0?t.top-=r:t.top=o(t.top-s,t.top)}},flip:{left:function(t,i){var o,n,l=i.within,f=l.offset.left+l.scrollLeft,s=l.width,h=l.isWindow?l.scrollLeft:l.offset.left,r=t.left-i.collisionPosition.marginLeft,p=r-h,c=r+i.collisionWidth-s-h,a="left"===i.my[0]?-i.elemWidth:"right"===i.my[0]?i.elemWidth:0,d="left"===i.at[0]?i.targetWidth:"right"===i.at[0]?-i.targetWidth:0,g=-2*i.offset[0];p<0?((o=t.left+a+d+g+i.collisionWidth-s-f)<0||o<e(p))&&(t.left+=a+d+g):c>0&&((n=t.left-i.collisionPosition.marginLeft+a+d+g-h)>0||e(n)<c)&&(t.left+=a+d+g)},top:function(t,i){var o,n,l=i.within,f=l.offset.top+l.scrollTop,s=l.height,h=l.isWindow?l.scrollTop:l.offset.top,r=t.top-i.collisionPosition.marginTop,p=r-h,c=r+i.collisionHeight-s-h,a="top"===i.my[1]?-i.elemHeight:"bottom"===i.my[1]?i.elemHeight:0,d="top"===i.at[1]?i.targetHeight:"bottom"===i.at[1]?-i.targetHeight:0,g=-2*i.offset[1];p<0?((n=t.top+a+d+g+i.collisionHeight-s-f)<0||n<e(p))&&(t.top+=a+d+g):c>0&&((o=t.top-i.collisionPosition.marginTop+a+d+g-h)>0||e(o)<c)&&(t.top+=a+d+g)}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position},void 0===(l="function"==typeof e?e.apply(i,n):e)||(t.exports=l)}()}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_jquery.ui.position', location = 'aui.chunk.f3fbd206b477f77b3507--cfa5ccb3ec9f768c9f24.js' */
"use strict";(self.webpackChunk_auiRuntime=self.webpackChunk_auiRuntime||[]).push([[638],{5286:(u,e,s)=>{s.r(e),s.d(e,{default:()=>t});s(3981);const t="jquery"}},u=>{u.O(0,[3043,7051,7035],(()=>{return e=5286,u(u.s=e);var e}));u.O()}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.vendors--825acd7236', location = 'aui.chunk.8a6695f58f10135c1f65--c639cf387058cf009306.js' */
(self.webpackChunk_auiRuntime=self.webpackChunk_auiRuntime||[]).push([[1034],{5367:(e,t,i)=>{var s,o,n;
/*!
 * jQuery UI Droppable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */!function(r){"use strict";o=[i(7963),i(8757),i(5927),i(21),i(1993)],s=function(e){e.widget("ui.droppable",{version:"1.13.2",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,t=this.options,i=t.accept;this.isover=!1,this.isout=!0,this.accept="function"==typeof i?i:function(e){return e.is(i)},this.proportions=function(){if(!arguments.length)return e||(e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight});e=arguments[0]},this._addToManager(t.scope),t.addClasses&&this._addClass("ui-droppable")},_addToManager:function(t){e.ui.ddmanager.droppables[t]=e.ui.ddmanager.droppables[t]||[],e.ui.ddmanager.droppables[t].push(this)},_splice:function(e){for(var t=0;t<e.length;t++)e[t]===this&&e.splice(t,1)},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];this._splice(t)},_setOption:function(t,i){if("accept"===t)this.accept="function"==typeof i?i:function(e){return e.is(i)};else if("scope"===t){var s=e.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(t,i)},_activate:function(t){var i=e.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,o=!1;return!(!s||(s.currentItem||s.element)[0]===this.element[0])&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each((function(){var i=e(this).droppable("instance");if(i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(i,{offset:i.element.offset()}),i.options.tolerance,t))return o=!0,!1})),!o&&(!!this.accept.call(this.element[0],s.currentItem||s.element)&&(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",t,this.ui(s)),this.element)))},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}}),e.ui.intersect=function(){function e(e,t,i){return e>=t&&e<t+i}return function(t,i,s,o){if(!i.offset)return!1;var n=(t.positionAbs||t.position.absolute).left+t.margins.left,r=(t.positionAbs||t.position.absolute).top+t.margins.top,a=n+t.helperProportions.width,l=r+t.helperProportions.height,p=i.offset.left,c=i.offset.top,u=p+i.proportions().width,h=c+i.proportions().height;switch(s){case"fit":return p<=n&&a<=u&&c<=r&&l<=h;case"intersect":return p<n+t.helperProportions.width/2&&a-t.helperProportions.width/2<u&&c<r+t.helperProportions.height/2&&l-t.helperProportions.height/2<h;case"pointer":return e(o.pageY,c,i.proportions().height)&&e(o.pageX,p,i.proportions().width);case"touch":return(r>=c&&r<=h||l>=c&&l<=h||r<c&&l>h)&&(n>=p&&n<=u||a>=p&&a<=u||n<p&&a>u);default:return!1}}}(),e.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(t,i){var s,o,n=e.ui.ddmanager.droppables[t.options.scope]||[],r=i?i.type:null,a=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;s<n.length;s++)if(!(n[s].options.disabled||t&&!n[s].accept.call(n[s].element[0],t.currentItem||t.element))){for(o=0;o<a.length;o++)if(a[o]===n[s].element[0]){n[s].proportions().height=0;continue e}n[s].visible="none"!==n[s].element.css("display"),n[s].visible&&("mousedown"===r&&n[s]._activate.call(n[s],i),n[s].offset=n[s].element.offset(),n[s].proportions({width:n[s].element[0].offsetWidth,height:n[s].element[0].offsetHeight}))}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),(function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))})),s},dragStart:function(t,i){t.element.parentsUntil("body").on("scroll.droppable",(function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}))},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],(function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,o,n,r=e.ui.intersect(t,this,this.options.tolerance,i),a=!r&&this.isover?"isout":r&&!this.isover?"isover":null;a&&(this.options.greedy&&(o=this.options.scope,(n=this.element.parents(":data(ui-droppable)").filter((function(){return e(this).droppable("instance").options.scope===o}))).length&&((s=e(n[0]).droppable("instance")).greedyChild="isover"===a)),s&&"isover"===a&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[a]=!0,this["isout"===a?"isover":"isout"]=!1,this["isover"===a?"_over":"_out"].call(this,i),s&&"isout"===a&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}}))},dragStop:function(t,i){t.element.parentsUntil("body").off("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}},!1!==e.uiBackCompat&&e.widget("ui.droppable",e.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}});return e.ui.droppable},void 0===(n="function"==typeof s?s.apply(t,o):s)||(e.exports=n)}()}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_jquery.ui.droppable', location = 'aui.chunk.565b14939fb1ee05730a--5b71e2ec4445a69a36e8.js' */
"use strict";(self.webpackChunk_auiRuntime=self.webpackChunk_auiRuntime||[]).push([[3294],{6102:(u,e,s)=>{s.r(e),s.d(e,{default:()=>t});s(5367);const t="jquery"}},u=>{u.O(0,[3043,6097,3916,9862,8291,5058,9089,1034,7035],(()=>{return e=6102,u(u.s=e);var e}));u.O()}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.vendors--85718a7eef', location = 'aui.chunk.f704ed501c762f1d9f2e--3c2b8f1c4cf59b85daa2.js' */
(self.webpackChunk_auiRuntime=self.webpackChunk_auiRuntime||[]).push([[2220],{2520:(t,e,i)=>{var s,h,n;
/*!
 * jQuery UI Disable Selection 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */!function(o){"use strict";h=[i(7963),i(21)],void 0===(n="function"==typeof(s=function(t){return t.fn.extend({disableSelection:(e="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(e+".ui-disableSelection",(function(t){t.preventDefault()}))}),enableSelection:function(){return this.off(".ui-disableSelection")}});var e})?s.apply(e,h):s)||(t.exports=n)}()},4464:(t,e,i)=>{var s,h,n;
/*!
 * jQuery UI Resizable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */!function(o){"use strict";h=[i(7963),i(5927),i(2520),i(2111),i(21),i(1993)],s=function(t){return t.widget("ui.resizable",t.ui.mouse,{version:"1.13.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",h=!1;if(e[s]>0)return!0;try{e[s]=1,h=e[s]>0,e[s]=0}catch(t){}return h},_create:function(){var e,i=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper'></div>").css({overflow:"hidden",position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",(function(){i.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())})).on("mouseleave",(function(){i.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy(),this._addedHandles.remove();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable")};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles();break;case"aspectRatio":this._aspectRatio=!!e}},_setupHandles:function(){var e,i,s,h,n,o=this.options,a=this;if(this.handles=o.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this._addedHandles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},i=0;i<s.length;i++)h="ui-resizable-"+(e=String.prototype.trim.call(s[i])),n=t("<div>"),this._addClass(n,"ui-resizable-handle "+h),n.css({zIndex:o.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.children(this.handles[e]).length||(this.element.append(n),this._addedHandles=this._addedHandles.add(n));this._renderAxis=function(e){var i,s,h,n;for(i in e=e||this.element,this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:a._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[i],this.element),n=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),h=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(h,n),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",(function(){a.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=n&&n[1]?n[1]:"se")})),o.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._addedHandles.remove()},_mouseCapture:function(e){var i,s,h=!1;for(i in this.handles)((s=t(this.handles[i])[0])===e.target||t.contains(s,e.target))&&(h=!0);return!this.options.disabled&&h},_mouseStart:function(e){var i,s,h,n=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),n.containment&&(i+=t(n.containment).scrollLeft()||0,s+=t(n.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof n.aspectRatio?n.aspectRatio:this.originalSize.width/this.originalSize.height||1,h=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===h?this.axis+"-resize":h),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,h=this.originalMousePosition,n=this.axis,o=e.pageX-h.left||0,a=e.pageY-h.top||0,l=this._change[n];return this._updatePrevProperties(),!!l&&(i=l.apply(this,[e,o,a]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1)},_mouseStop:function(e){this.resizing=!1;var i,s,h,n,o,a,l,r=this.options,p=this;return this._helper&&(h=(s=(i=this._proportionallyResizeElements).length&&/textarea/i.test(i[0].nodeName))&&this._hasScroll(i[0],"left")?0:p.sizeDiff.height,n=s?0:p.sizeDiff.width,o={width:p.helper.width()-n,height:p.helper.height()-h},a=parseFloat(p.element.css("left"))+(p.position.left-p.originalPosition.left)||null,l=parseFloat(p.element.css("top"))+(p.position.top-p.originalPosition.top)||null,r.animate||this.element.css(t.extend(o,{top:l,left:a})),p.helper.height(p.size.height),p.helper.width(p.size.width),this._helper&&!r.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,h,n,o=this.options;n={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||t)&&(e=n.minHeight*this.aspectRatio,s=n.minWidth/this.aspectRatio,i=n.maxHeight*this.aspectRatio,h=n.maxWidth/this.aspectRatio,e>n.minWidth&&(n.minWidth=e),s>n.minHeight&&(n.minHeight=s),i<n.maxWidth&&(n.maxWidth=i),h<n.maxHeight&&(n.maxHeight=h)),this._vBoundaries=n},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,h=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,n=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,o=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,a=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,r=/sw|nw|w/.test(i),p=/nw|ne|n/.test(i);return n&&(t.width=e.minWidth),o&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),h&&(t.height=e.maxHeight),n&&r&&(t.left=a-e.minWidth),s&&r&&(t.left=a-e.maxWidth),o&&p&&(t.top=l-e.minHeight),h&&p&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],h=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];e<4;e++)i[e]=parseFloat(s[e])||0,i[e]+=parseFloat(h[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;e<this._proportionallyResizeElements.length;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div></div>").css({overflow:"hidden"}),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize;return{left:this.originalPosition.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize;return{top:this.originalPosition.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,h=i._proportionallyResizeElements,n=h.length&&/textarea/i.test(h[0].nodeName),o=n&&i._hasScroll(h[0],"left")?0:i.sizeDiff.height,a=n?0:i.sizeDiff.width,l={width:i.size.width-a,height:i.size.height-o},r=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,p=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(l,p&&r?{top:p,left:r}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};h&&h.length&&t(h[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,h,n,o,a,l=t(this).resizable("instance"),r=l.options,p=l.element,d=r.containment,g=d instanceof t?d.get(0):/parent/.test(d)?p.parent().get(0):d;g&&(l.containerElement=t(g),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(g),i=[],t(["Top","Right","Left","Bottom"]).each((function(t,s){i[t]=l._num(e.css("padding"+s))})),l.containerOffset=e.offset(),l.containerPosition=e.position(),l.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=l.containerOffset,h=l.containerSize.height,n=l.containerSize.width,o=l._hasScroll(g,"left")?g.scrollWidth:n,a=l._hasScroll(g)?g.scrollHeight:h,l.parentData={element:g,left:s.left,top:s.top,width:o,height:a}))},resize:function(e){var i,s,h,n,o=t(this).resizable("instance"),a=o.options,l=o.containerOffset,r=o.position,p=o._aspectRatio||e.shiftKey,d={top:0,left:0},g=o.containerElement,u=!0;g[0]!==document&&/static/.test(g.css("position"))&&(d=l),r.left<(o._helper?l.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-l.left:o.position.left-d.left),p&&(o.size.height=o.size.width/o.aspectRatio,u=!1),o.position.left=a.helper?l.left:0),r.top<(o._helper?l.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-l.top:o.position.top),p&&(o.size.width=o.size.height*o.aspectRatio,u=!1),o.position.top=o._helper?l.top:0),h=o.containerElement.get(0)===o.element.parent().get(0),n=/relative|absolute/.test(o.containerElement.css("position")),h&&n?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-l.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-l.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,p&&(o.size.height=o.size.width/o.aspectRatio,u=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,p&&(o.size.width=o.size.height*o.aspectRatio,u=!1)),u||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,h=e.containerPosition,n=e.containerElement,o=t(e.helper),a=o.offset(),l=o.outerWidth()-e.sizeDiff.width,r=o.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(n.css("position"))&&t(this).css({left:a.left-h.left-s.left,width:l,height:r}),e._helper&&!i.animate&&/static/.test(n.css("position"))&&t(this).css({left:a.left-h.left-s.left,width:l,height:r})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance").options;t(e.alsoResize).each((function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})}))},resize:function(e,i){var s=t(this).resizable("instance"),h=s.options,n=s.originalSize,o=s.originalPosition,a={height:s.size.height-n.height||0,width:s.size.width-n.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0};t(h.alsoResize).each((function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),h={},n=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(n,(function(t,e){var i=(s[e]||0)+(a[e]||0);i&&i>=0&&(h[e]=i||null)})),e.css(h)}))},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),!1!==t.uiBackCompat&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,h=i.size,n=i.originalSize,o=i.originalPosition,a=i.axis,l="number"==typeof s.grid?[s.grid,s.grid]:s.grid,r=l[0]||1,p=l[1]||1,d=Math.round((h.width-n.width)/r)*r,g=Math.round((h.height-n.height)/p)*p,u=n.width+d,c=n.height+g,f=s.maxWidth&&s.maxWidth<u,m=s.maxHeight&&s.maxHeight<c,z=s.minWidth&&s.minWidth>u,w=s.minHeight&&s.minHeight>c;s.grid=l,z&&(u+=r),w&&(c+=p),f&&(u-=r),m&&(c-=p),/^(se|s|e)$/.test(a)?(i.size.width=u,i.size.height=c):/^(ne)$/.test(a)?(i.size.width=u,i.size.height=c,i.position.top=o.top-g):/^(sw)$/.test(a)?(i.size.width=u,i.size.height=c,i.position.left=o.left-d):((c-p<=0||u-r<=0)&&(e=i._getPaddingPlusBorderDimensions(this)),c-p>0?(i.size.height=c,i.position.top=o.top-g):(c=p-e.height,i.size.height=c,i.position.top=o.top+n.height-c),u-r>0?(i.size.width=u,i.position.left=o.left-d):(u=r-e.width,i.size.width=u,i.position.left=o.left+n.width-u))}}),t.ui.resizable},void 0===(n="function"==typeof s?s.apply(e,h):s)||(t.exports=n)}()}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_jquery.ui.resizable', location = 'aui.chunk.b1945a6d433e34033244--dbc945d6ff241e27087c.js' */
"use strict";(self.webpackChunk_auiRuntime=self.webpackChunk_auiRuntime||[]).push([[9077],{749:(u,e,s)=>{s.r(e),s.d(e,{default:()=>t});s(4464);const t="jquery"}},u=>{u.O(0,[3043,6097,3916,8291,2220,7035],(()=>{return e=749,u(u.s=e);var e}));u.O()}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.vendors--7c76061134', location = 'aui.chunk.6fdc5fed9a4b5e5217b2--4216ff657ea766b6f0f3.js' */
(self.webpackChunk_auiRuntime=self.webpackChunk_auiRuntime||[]).push([[1159],{1549:(e,t,s)=>{var l,i,n;
/*!
 * jQuery UI Selectable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */!function(c){"use strict";i=[s(7963),s(5927),s(21),s(1993)],void 0===(n="function"==typeof(l=function(e){return e.widget("ui.selectable",e.ui.mouse,{version:"1.13.2",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t.elementPos=e(t.element[0]).offset(),t.selectees=e(t.options.filter,t.element[0]),t._addClass(t.selectees,"ui-selectee"),t.selectees.each((function(){var s=e(this),l=s.offset(),i={left:l.left-t.elementPos.left,top:l.top-t.elementPos.top};e.data(this,"selectable-item",{element:this,$element:s,left:i.left,top:i.top,right:i.left+s.outerWidth(),bottom:i.top+s.outerHeight(),startselected:!1,selected:s.hasClass("ui-selected"),selecting:s.hasClass("ui-selecting"),unselecting:s.hasClass("ui-unselecting")})}))},this.refresh(),this._mouseInit(),this.helper=e("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(t){var s=this,l=this.options;this.opos=[t.pageX,t.pageY],this.elementPos=e(this.element[0]).offset(),this.options.disabled||(this.selectees=e(l.filter,this.element[0]),this._trigger("start",t),e(l.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),l.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each((function(){var l=e.data(this,"selectable-item");l.startselected=!0,t.metaKey||t.ctrlKey||(s._removeClass(l.$element,"ui-selected"),l.selected=!1,s._addClass(l.$element,"ui-unselecting"),l.unselecting=!0,s._trigger("unselecting",t,{unselecting:l.element}))})),e(t.target).parents().addBack().each((function(){var l,i=e.data(this,"selectable-item");if(i)return l=!t.metaKey&&!t.ctrlKey||!i.$element.hasClass("ui-selected"),s._removeClass(i.$element,l?"ui-unselecting":"ui-selected")._addClass(i.$element,l?"ui-selecting":"ui-unselecting"),i.unselecting=!l,i.selecting=l,i.selected=l,l?s._trigger("selecting",t,{selecting:i.element}):s._trigger("unselecting",t,{unselecting:i.element}),!1})))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var s,l=this,i=this.options,n=this.opos[0],c=this.opos[1],a=t.pageX,o=t.pageY;return n>a&&(s=a,a=n,n=s),c>o&&(s=o,o=c,c=s),this.helper.css({left:n,top:c,width:a-n,height:o-c}),this.selectees.each((function(){var s=e.data(this,"selectable-item"),r=!1,u={};s&&s.element!==l.element[0]&&(u.left=s.left+l.elementPos.left,u.right=s.right+l.elementPos.left,u.top=s.top+l.elementPos.top,u.bottom=s.bottom+l.elementPos.top,"touch"===i.tolerance?r=!(u.left>a||u.right<n||u.top>o||u.bottom<c):"fit"===i.tolerance&&(r=u.left>n&&u.right<a&&u.top>c&&u.bottom<o),r?(s.selected&&(l._removeClass(s.$element,"ui-selected"),s.selected=!1),s.unselecting&&(l._removeClass(s.$element,"ui-unselecting"),s.unselecting=!1),s.selecting||(l._addClass(s.$element,"ui-selecting"),s.selecting=!0,l._trigger("selecting",t,{selecting:s.element}))):(s.selecting&&((t.metaKey||t.ctrlKey)&&s.startselected?(l._removeClass(s.$element,"ui-selecting"),s.selecting=!1,l._addClass(s.$element,"ui-selected"),s.selected=!0):(l._removeClass(s.$element,"ui-selecting"),s.selecting=!1,s.startselected&&(l._addClass(s.$element,"ui-unselecting"),s.unselecting=!0),l._trigger("unselecting",t,{unselecting:s.element}))),s.selected&&(t.metaKey||t.ctrlKey||s.startselected||(l._removeClass(s.$element,"ui-selected"),s.selected=!1,l._addClass(s.$element,"ui-unselecting"),s.unselecting=!0,l._trigger("unselecting",t,{unselecting:s.element})))))})),!1}},_mouseStop:function(t){var s=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each((function(){var l=e.data(this,"selectable-item");s._removeClass(l.$element,"ui-unselecting"),l.unselecting=!1,l.startselected=!1,s._trigger("unselected",t,{unselected:l.element})})),e(".ui-selecting",this.element[0]).each((function(){var l=e.data(this,"selectable-item");s._removeClass(l.$element,"ui-selecting")._addClass(l.$element,"ui-selected"),l.selecting=!1,l.selected=!0,l.startselected=!0,s._trigger("selected",t,{selected:l.element})})),this._trigger("stop",t),this.helper.remove(),!1}})})?l.apply(t,i):l)||(e.exports=n)}()}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_jquery.ui.selectable', location = 'aui.chunk.27365d0b8c0810bdc679--ab28a463279ff04c0918.js' */
"use strict";(self.webpackChunk_auiRuntime=self.webpackChunk_auiRuntime||[]).push([[495],{2484:(u,e,s)=>{s.r(e),s.d(e,{default:()=>t});s(1549);const t="jquery"}},u=>{u.O(0,[3043,6097,3916,1159,7035],(()=>{return e=2484,u(u.s=e);var e}));u.O()}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Roadmap.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Roadmap == 'undefined') { Confluence.Templates.Roadmap = {}; }


Confluence.Templates.Roadmap.roadmapPopupPanel = function(opt_data, opt_ignored) {
  return '<div class="roadmap-editor-popup"><div id=\'' + soy.$$escapeHtml(opt_data.roadmapPopupPanelId) + '\'></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.roadmapPopupPanel.soyTemplateName = 'Confluence.Templates.Roadmap.roadmapPopupPanel';
}


Confluence.Templates.Roadmap.roadmapEditor = function(opt_data, opt_ignored) {
  return '<div id="roadmap-editor-edit-area"><div id="roadmap-editor-edit-content"><!-- START GENERATE ROADMAP --><div id="roadmap-container"><div class="roadmap-drag-area"></div><div class="roadmap-frame"><div class="roadmap-marker"></div></div><div class="roadmap-content"></div></div><!-- END GENERATE ROADMAP --></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.roadmapEditor.soyTemplateName = 'Confluence.Templates.Roadmap.roadmapEditor';
}


Confluence.Templates.Roadmap.lane = function(opt_data, opt_ignored) {
  return '<div class="roadmap-lane-title" style="background-color: ' + soy.$$escapeHtml(opt_data.color.lane) + '; color: ' + soy.$$escapeHtml(opt_data.color.text) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"><div class="title-outer"><div class="title-inner">' + soy.$$escapeHtml(opt_data.title) + '</div></div></div><div class="roadmap-separate-content">&nbsp;</div><div class="roadmap-lane-content"></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.lane.soyTemplateName = 'Confluence.Templates.Roadmap.lane';
}


Confluence.Templates.Roadmap.marker = function(opt_data, opt_ignored) {
  return '<div class="marker-drag-placeholder"></div><div class="marker-title-wrapper"><span class="marker-title" title="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.title) + '</span></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.marker.soyTemplateName = 'Confluence.Templates.Roadmap.marker';
}


Confluence.Templates.Roadmap.bar = function(opt_data, opt_ignored) {
  return '<p class="roadmap-bar-title">' + soy.$$escapeHtml(opt_data.title) + '</p>';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.bar.soyTemplateName = 'Confluence.Templates.Roadmap.bar';
}


Confluence.Templates.Roadmap.newRowLine = function(opt_data, opt_ignored) {
  return '<hr class="new-row-line" />';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.newRowLine.soyTemplateName = 'Confluence.Templates.Roadmap.newRowLine';
}


Confluence.Templates.Roadmap.deprecationDialog = function(opt_data, opt_ignored) {
  return '<section role="dialog" id="' + soy.$$escapeHtml(opt_data.id) + '" class="aui-layer aui-dialog2 aui-dialog2-medium" aria-hidden="true"><header class="aui-dialog2-header"><h1 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Macro unavailable') + '</h1></header><div class="aui-dialog2-content">' + soy.$$filterNoAutoescape('\x3cp\x3eThe roadmap macro has been deprecated as of version 12. You can still view your existing roadmap macros but you will no longer be able to edit them or create new ones.\x3c/p\x3e\x3cp\x3ePlease use our new Roadmap Planner macro to plan your roadmap.\x3c/p\x3e') + '<div class="new-roadmap-thumb"></div></div><footer class="aui-dialog2-footer"><div class="aui-dialog2-footer-actions"><button id="dialog-close-button" class="aui-button aui-button-link">' + soy.$$escapeHtml('Close') + '</button></div></footer></section>';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.deprecationDialog.soyTemplateName = 'Confluence.Templates.Roadmap.deprecationDialog';
}


Confluence.Templates.Roadmap.newRowPlaceholder = function(opt_data, opt_ignored) {
  return '<hr class= "new-row-placeholder" />';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.newRowPlaceholder.soyTemplateName = 'Confluence.Templates.Roadmap.newRowPlaceholder';
}


Confluence.Templates.Roadmap.laneDialog = function(opt_data, opt_ignored) {
  return '' + aui.buttons.button({id: 'add-bar-button', type: 'subtle', iconType: 'aui', extraClasses: 'aui-button-compact', text: '', extraAttributes: {title: 'Add bar'}, iconClass: 'aui-icon-small aui-iconfont-add'}) + aui.buttons.button({id: 'rename-button', type: 'subtle', iconType: 'aui', extraClasses: 'aui-button-compact', text: '', extraAttributes: {title: 'Rename lane'}, iconClass: 'aui-icon-small aui-iconfont-edit'}) + Confluence.Templates.Roadmap.laneColorSelect(opt_data) + ((opt_data.canDelete) ? aui.buttons.button({id: 'delete-button', type: 'subtle', iconType: 'aui', extraClasses: 'aui-button-compact', text: '', extraAttributes: {title: 'Delete lane'}, iconClass: 'aui-icon-small delete-icon'}) : '');
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.laneDialog.soyTemplateName = 'Confluence.Templates.Roadmap.laneDialog';
}


Confluence.Templates.Roadmap.markerDialog = function(opt_data, opt_ignored) {
  return '' + aui.buttons.button({id: 'rename-button', type: 'subtle', iconType: 'aui', extraClasses: 'aui-button-compact', text: '', extraAttributes: {title: 'Rename marker'}, iconClass: 'aui-icon-small aui-iconfont-edit'}) + aui.buttons.button({id: 'delete-button', type: 'subtle', iconType: 'aui', extraClasses: 'aui-button-compact', text: '', extraAttributes: {title: 'Delete marker'}, iconClass: 'aui-icon-small delete-icon'});
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.markerDialog.soyTemplateName = 'Confluence.Templates.Roadmap.markerDialog';
}


Confluence.Templates.Roadmap.markerRenameDialog = function(opt_data, opt_ignored) {
  return '' + aui.form.form({action: '', content: '' + aui.form.input({extraClasses: 'marker-title', name: 'marker-title', type: 'text', value: opt_data.markerTitle}) + aui.buttons.button({extraClasses: 'rename-button', text: 'Save'})});
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.markerRenameDialog.soyTemplateName = 'Confluence.Templates.Roadmap.markerRenameDialog';
}


Confluence.Templates.Roadmap.laneRenameDialog = function(opt_data, opt_ignored) {
  return '' + aui.form.form({action: '', content: '' + aui.form.input({extraClasses: 'lane-title', name: 'lane-title', type: 'text', value: opt_data.laneTitle}) + aui.buttons.button({extraClasses: 'rename-button', text: 'Save'})});
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.laneRenameDialog.soyTemplateName = 'Confluence.Templates.Roadmap.laneRenameDialog';
}


Confluence.Templates.Roadmap.laneColorSelect = function(opt_data, opt_ignored) {
  var output = '<a id="lane-color-select" href="#" aria-owns="lane-color-picker" aria-haspopup="true" class="aui-button aui-button-subtle aui-button-compact aui-dropdown2-trigger aui-style-default" title="' + soy.$$escapeHtml('Lane color') + '"><span class="color-item" style="background-color: ' + soy.$$escapeHtml(opt_data.laneColor) + ';">&nbsp;</span></a></a><div id="lane-color-picker" class="aui-dropdown2"><ul class="aui-list-truncate">';
  var colorList120 = opt_data.colors;
  var colorListLen120 = colorList120.length;
  for (var colorIndex120 = 0; colorIndex120 < colorListLen120; colorIndex120++) {
    var colorData120 = colorList120[colorIndex120];
    output += '<li class="color-display-item"><a href="#" ><span class="color-item ' + ((colorData120.lane == opt_data.laneColor) ? 'aui-icon aui-icon-small aui-iconfont-success' : '') + '" style="background-color: ' + soy.$$escapeHtml(colorData120.lane) + ';"></span></a></li>';
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.laneColorSelect.soyTemplateName = 'Confluence.Templates.Roadmap.laneColorSelect';
}


Confluence.Templates.Roadmap.linkPageTitle = function(opt_data, opt_ignored) {
  return '<span class="link-page-title"></span>';
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.linkPageTitle.soyTemplateName = 'Confluence.Templates.Roadmap.linkPageTitle';
}


Confluence.Templates.Roadmap.footerActionContent = function(opt_data, opt_ignored) {
  return '' + aui.buttons.button({text: 'Insert', id: 'roadmapInsertBtn'}) + aui.buttons.button({text: 'Cancel', type: 'link', id: 'roadmapCancelBtn'});
};
if (goog.DEBUG) {
  Confluence.Templates.Roadmap.footerActionContent.soyTemplateName = 'Confluence.Templates.Roadmap.footerActionContent';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/bar/bar.js' */
(function(d,e){Roadmap.BarView=Backbone.View.extend({className:"roadmap-bar",events:{click:"_showDialog",dragstart:"_onDragstart",dragstop:"_onDragStop",dropover:"_onDropOver",dropout:"_onDropOut"},attributes:function(){return{cid:this.cid}},initialize:function(){e.bindAll(this,"render","_updateBar","_beforeResize","updateMaxWidth","_deleteBar","_updateTitle");this._addEvents()},_addEvents:function(){var a=this;this.$el.draggable({opacity:.3,cursor:"move",appendTo:".roadmap-drag-area",snap:".roadmap-bar-row, .new-bar-row",
snapMode:"inner",snapTolerance:17,scroll:!0,zIndex:4020,helper:function(){return a.$el.clone().addClass("roadmap-bar-clone").data("View",a)}});this.$el.droppable({accept:".roadmap-bar",tolerance:"touch",hoverClass:"bar-hover-bar"});this.$el.data("View",this)},render:function(){this.updateColor(this.options.color);var a=this.options.timelineView.getBarPosition(this.model.attributes);this.$el.css({left:a.left+"px",width:a.width+"px"});this.$el.attr("title",this.model.get("title"));this.$el.append(Confluence.Templates.Roadmap.bar({title:this.model.get("title")}));
this.$el.resizable({handles:"e, w",minWidth:Roadmap.barMinWidth,start:this._beforeResize,stop:this._updateBar});return this},updateMaxWidth:function(a){this.$el.resizable("option","maxWidth",a);var b=this.$el.resizable("option","minWidth");a<b&&this.$el.resizable("option","minWidth",a)},_beforeResize:function(a,b){this._barDialog&&this._barDialog.remove();this.trigger("beforeResize",this,this._checkHandleDirection(a))},_checkHandleDirection:function(a){a=d(a.toElement?a.toElement:a.originalEvent.target);
if(a.hasClass("ui-resizable-w"))return"left";if(a.hasClass("ui-resizable-e"))return"right";throw"Unsupport resize direction handling \x3d "+a;},_updateBar:function(a,b){b.originalPosition.left!=b.position.left?this.model.set({startDate:this.options.timelineView.getBarStartDate(b.position.left),duration:this.options.timelineView.getBarDuration(b.element.outerWidth())}):b.originalSize.width!=b.size.width&&this.model.set("duration",this.options.timelineView.getBarDuration(b.element.outerWidth()))},appendTo:function(a){this.$el.appendTo(a)},
updateColor:function(a){this.$el.css({"background-color":a.bar,"border-color":a.lane,color:a.text})},updatePositionLeft:function(a){this.$el.css("left",a)},_onDragStop:function(a,b){this.options.lane.cleanLaneAfterDrop();this.$el.trigger("BarView.dragstop")},updateDeleteBar:function(a){this.options.deleteBar=a},_showDialog:function(a){d(a.target).is(".ui-resizable-handle")||(this._barDialog&&this._barDialog.remove(),this._barDialog=this._createDialog(),this._barDialog.show(),Confluence.Roadmap.Analytics.openBarDialogInEdit())},
_createDialog:function(){return new Roadmap.BarDialogView({trigger:this.$el,model:this.model,timelineWidth:this.options.timelineView.$el.width(),renderOption:{isEditMode:!0,editInplace:{title:!0,pageLink:!0,description:!0}},linkPageEditable:!0,deleteBar:this._deleteBar,updateTitle:this._updateTitle,updateDescription:this._updateDescription,updatePageLink:this._updatePageLink,createLinkPageCallback:this._goToCreateLinkPage})},_deleteBar:function(){this.options.deleteBar(this)},_updateTitle:function(a){this.model.set("title",
a);this.$el.attr("title",a);this.$el.find(".roadmap-bar-title").html(AJS.escapeHtml(a))},_updateDescription:function(a){this.model.set("description",a)},_updatePageLink:function(a){this.model.set("pageLink",a)},_onDragstart:function(a,b){Roadmap.DragDrop.barDraggingOver={};this.$el.trigger("BarView.dragstart",[b])},_onDropOver:function(a,b){Roadmap.DragDrop.barDraggingOver[this.cid]=this.cid;Roadmap.DragDrop.barDraggingOver&&!0!==b.helper.data("isAddingNewRow")&&b.helper.addClass("roadmap-bar-overlapped")},
_onDropOut:function(a,b){delete Roadmap.DragDrop.barDraggingOver[this.cid];b.helper.removeClass("roadmap-bar-overlapped");e.each(Roadmap.DragDrop.barDraggingOver,function(c){!0!==b.helper.data("isAddingNewRow")&&("string"===typeof c?b.helper.addClass("roadmap-bar-overlapped"):"roadmap-bar-row"===c.className&&c.$el.addClass("roadmap-bar-drag-hover"))})},_goToCreateLinkPage:function(a){a.preventDefault();var b=this.me;a=parseInt(AJS.Meta.get("page-id"));a=0<a?a:AJS.Meta.get("parent-page-id");Confluence.RoadmapLink.addCreateLinkPageListener({roadmapBarId:b.model.id,
roadmapContentId:a,updateRoadmap:!1},function(c){c=b._updatePageLink(c.pageLink);b.fields.$pageLink.html(c)})}})})(AJS.$,window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/bar/bar-row.js' */
(function(c,e){Roadmap.BarRowView=Backbone.View.extend({className:"roadmap-bar-row",initialize:function(){e.bindAll(this,"_addEvents");this._addEvents();return this},attributes:function(){return{cid:this.cid}},_addEvents:function(){var d=this;this.$el.droppable({greedy:!0,tolerance:"pointer",hoverClass:"roadmap-bar-drag-hover",activeClass:"roadmap-bar-drag-active",accept:".roadmap-bar",over:function(b,a){Roadmap.DragDrop.barDraggingOver[d.cid]=d;!0!==a.helper.data("isAddingNewRow")?c(this).closest(".roadmap-content").find(".new-row-placeholder").remove():
d.$el.removeClass("roadmap-bar-drag-hover")},out:function(){var b=c(this);delete Roadmap.DragDrop.barDraggingOver[d.cid];b.closest(".roadmap-content").find(".new-row-placeholder").remove()},drop:function(b,a){b=0<e.reject(Roadmap.DragDrop.barDraggingOver,function(f){return"object"===typeof f}).length;a.helper.hasClass("roadmap-bar-overlapped")||b||c(this).trigger("BarView.drop",[{$barViewHelper:a.helper,$barViewOriginal:a.draggable,$barRow:c(this)},a])}})},isEmptyRow:function(){return this.$el.is(":empty")}})})(AJS.$,
window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/bar/bar-row-new.js' */
(function(e,c){Roadmap.BarRowNewView=Backbone.View.extend({className:"new-bar-row",overlayTop:3,margin:5,events:{drop:"_onDrop",dropover:"_onDropOver",dropout:"_onDropOut"},initialize:function(){c.bindAll(this,"render","_addEvent");return this},render:function(){this.$el.append(Confluence.Templates.Roadmap.newRowLine());this._addEvent();this._setSizePosition();return this},_addEvent:function(){this.$el.droppable({accept:".roadmap-bar",tolerance:"pointer",hoverClass:"new-bar-row-hover"})},_setSizePosition:function(){var a=
this.options.$barRow,b=!1===this.options.renderBottom?-1*this.margin:a.height(),d=0===a.index()?this.overlayTop+this.margin:this.overlayTop;this.$el.css({top:a.position().top+b-d,width:a.width()})},_onDrop:function(a,b){this.$el.trigger("BarView.drop",[{barRowNewView:this},b])},_onDropOver:function(a,b){this.$el.trigger("BarRowNew.dropover",[this,b])},_onDropOut:function(a,b){this.$el.trigger("BarRowNew.dropout",[this,b])}})})(AJS.$,window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/lane-dialog/lane-dialog.js' */
(function(a,g){var d=Roadmap.InlineDialogView;Roadmap.LaneDialogView=d.extend({events:{"click #delete-button":"_onDeleteClick","click #rename-button":"_onRenameClick","click #add-bar-button":"_onAddBarClick"},initialize:function(){g.bindAll(this,"_onHide");this.options.dialogOptions={width:this._getDialogWidth(),hideCallback:this._onHide};a(".roadmap-editor-popup, .roadmap-macro-view").scroll(function(){a("#lane-color-picker").hide()});d.prototype.initialize.call(this,this.options)},_getContent:function(b){var e=
this.options.lane.model.get("color").lane;b.html(Confluence.Templates.Roadmap.laneDialog({canDelete:this.options.canDelete,colors:Roadmap.COLORS,laneColor:e}));this.$el.find(".aui-button").tooltip({gravity:"s"});var h=this,f=this.$el.find("#lane-color-picker .color-item");f.click(function(c){c.preventDefault();c=Roadmap.COLORS[f.index(this)];c.lane!=e&&h.options.changeColor(c);a("#lane-color-picker").hide()})},_getDialogWidth:function(){var b=2;this.options.canDelete&&b++;return 29*b+51},_onDeleteClick:function(){this.options.deleteLane();
this.remove()},_onRenameClick:function(){this._laneRenameDialog||(this._laneRenameDialog=new Roadmap.LaneRenameDialogView({trigger:this.options.trigger,lane:this.options.lane}));this._laneRenameDialog.show();this.hide()},_onAddBarClick:function(){this.options.addBar();this.remove()},_onHide:function(){a("#lane-color-picker").hide();d.prototype._onHide.call(this)}})})(AJS.$,window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/lane-dialog/lane-rename-dialog.js' */
(function(d,e){var b=require("confluence/form-state-control"),c=Roadmap.InlineDialogView;Roadmap.LaneRenameDialogView=c.extend({events:{"click .rename-button":"_onRenameButtonClick","keyup .lane-title":"_onChangeLaneTitle"},initialize:function(){this.options.dialogOptions={width:this._getDialogWidth()};c.prototype.initialize.call(this,this.options)},_getContent:function(a){a.html(Confluence.Templates.Roadmap.laneRenameDialog({laneTitle:this.options.trigger.text()}));this.controls={$renameButton:this.$el.find(".rename-button"),
$laneTitle:this.$el.find(".lane-title")}},_getDialogWidth:function(){return 315},_onChangeLaneTitle:function(a){d.trim(this.controls.$laneTitle.val())?(b.enableElement(this.controls.$renameButton),a.which==AJS.$.ui.keyCode.ENTER&&this.controls.$renameButton.click()):b.disableElement(this.controls.$renameButton)},_onShow:function(a){this.controls.$laneTitle.select()},_onRenameButtonClick:function(a){a.preventDefault();this.hide();a=this.controls.$laneTitle.val();this.options.lane.renameTitle(a)}})})(AJS.$,
window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/marker-dialog/marker-dialog.js' */
(function(c,d){var a=Roadmap.InlineDialogView;Roadmap.MarkerDialogView=a.extend({events:{"click #rename-button":"_onRenameButtonClick","click #delete-button":"_onDeleteButtonClick"},initialize:function(){this.options.dialogOptions={width:60};a.prototype.initialize.call(this,this.options)},_getContent:function(b){b.html(Confluence.Templates.Roadmap.markerDialog());this.$el.find(".aui-button.aui-button-compact").tooltip({gravity:"s"})},_onRenameButtonClick:function(){this._markerRenameDialog||(this._markerRenameDialog=
new Roadmap.MarkerRenameDialogView({trigger:this.options.trigger,marker:this.options.marker}));this._markerRenameDialog.show();this.hide()},_onDeleteButtonClick:function(){this.options.marker.removeMarker();this.hide()}})})(AJS.$,window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/marker-dialog/marker-rename-dialog.js' */
(function(d,e){var b=require("confluence/form-state-control"),c=Roadmap.InlineDialogView;Roadmap.MarkerRenameDialogView=c.extend({events:{"click .rename-button":"_onSaveButtonClick","keyup .marker-title":"_onChangeMarkerTitle"},initialize:function(){this.options.dialogOptions={width:315};c.prototype.initialize.call(this,this.options)},_getContent:function(a){a.html(Confluence.Templates.Roadmap.markerRenameDialog({markerTitle:this.options.marker.model.get("title")}));this.controls={$renameButton:this.$el.find(".rename-button"),
$title:this.$el.find(".marker-title")}},_onChangeMarkerTitle:function(a){d.trim(this.controls.$title.val())?(b.enableElement(this.controls.$renameButton),a.which==AJS.$.ui.keyCode.ENTER&&this.controls.$renameButton.click()):b.disableElement(this.controls.$renameButton)},_onShow:function(a){this.controls.$title.select()},_onSaveButtonClick:function(a){a.preventDefault();this.hide();this.options.marker.renameTitle(this.controls.$title.val())}})})(AJS.$,window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/lane.js' */
(function(k,f){window.Roadmap=window.Roadmap||{};Roadmap.LaneView=Backbone.View.extend({tagName:"div",className:"roadmap-lane",events:{"click .roadmap-lane-title":"_showDialog","BarView.drop":"_onBarDropped","BarRowNew.dropover":"_onBarRowNewDropover","BarRowNew.dropout":"_onBarRowNewDropout"},attributes:function(){return{cid:this.cid}},initialize:function(){f.bindAll(this,"render","renameTitle","updateRowIndex","removeEmptyRow","cleanLaneAfterDrop","_deleteLane","_updateLaneHeight","_renderComplete",
"_deleteBar","_addBar","_changeColor","addDefaultBarRow");this._barViews=[];this._barRowViews=[];this.listenTo(this.model.get("bars"),"add",function(a){var b=this._newBarRowView();a=this._newBarView(a);b.$el.append(a.render().$el);this._$laneContent.append(b.$el);this._barViews.push(a);this.$el.trigger("BarView.add",a);f.defer(this._updateLaneHeight)})},render:function(){var a=this;this.$el.append(Confluence.Templates.Roadmap.lane({title:this.model.get("title"),color:this.model.get("color")}));Confluence.Roadmap.ColorHelper.adjustColorCount(this.model.get("color"),
1);var b=this.model.get("bars").models;b=f.sortBy(b,function(c){return c.attributes.rowIndex});f.each(b,function(c){c=a._newBarView(c);a._barViews.push(c)});this._renderBars();f.defer(this._renderComplete);return this},_renderComplete:function(){this._updateLaneHeight()},renameTitle:function(a){this.model.set("title",a);this.$el.find(".roadmap-lane-title").attr("title",a);this.$el.find(".title-inner").html(AJS.escapeHtml(a));this._updateLaneHeight()},_updateLaneHeight:function(){var a=this.$el.find(".title-inner");
a.hide();var b=this._$laneContent.outerHeight();a.width(b-2*Roadmap.LANE_PADDING);a.show()},_barBeforeResize:function(a,b){var c=a.$el,d=Math.ceil(c.outerWidth()-c.width());"left"==b?(b=this._getNearestBarView(a,b),d=null==b?0:b.position().left+b.width()+d,d=c.position().left-d,c=c.width()+d):(b=this._getNearestBarView(a,b),c=(null==b?this._getLaneContentWidth()-d:b.position().left-d)-c.position().left);a.updateMaxWidth(c-Roadmap.BAR_MARGIN)},_renderBars:function(){var a=this;this._$laneContent=this.$el.find(".roadmap-lane-content");
var b={};f.each(this._barViews,function(c){var d="row-"+c.model.get("rowIndex"),e=b[d];e||(e=a._newBarRowView(c.model.get("rowIndex")),b[d]=e);e.$el.append(c.render().$el);a._$laneContent.append(e.$el)})},_newBarRowView:function(){var a=new Roadmap.BarRowView;this._barRowViews.push(a);return a},_newBarView:function(a){a=new Roadmap.BarView({model:a,lane:this,color:this.model.get("color"),timelineView:this.options.timelineView,deleteBar:this._deleteBar});a.on("beforeResize",f.bind(this._barBeforeResize,
this));return a},_getNearestBarView:function(a,b){var c=f.filter(a.options.lane._barViews,function(e){return e.model.get("rowIndex")===a.model.get("rowIndex")}),d=null;"left"==b?f.each(c,function(e){e.$el.position().left<a.$el.position().left&&(null==d||e.$el.position().left>d.$el.position().left)&&(d=e)}):f.each(c,function(e){e.$el.position().left>a.$el.position().left&&(null==d||e.$el.position().left<d.$el.position().left)&&(d=e)});return null!=d?d.$el:null},_getLaneContentWidth:function(){return this.$el.find(".roadmap-lane-content").width()},
_showDialog:function(){this._laneDialog&&this._laneDialog.remove();this._laneDialog=this._createLaneDialog();this._laneDialog.show()},_createLaneDialog:function(){return new Roadmap.LaneDialogView({trigger:this.$el.find(".title-outer"),canDelete:this.options.canDelete,deleteLane:this._deleteLane,addBar:this._addBar,changeColor:this._changeColor,lane:this})},_onBarDropped:function(a,b,c){var d=!!b.barRowNewView;a=c.draggable.data("View");var e=a.model,g=a.options.lane,h=g.cid===this.cid,l=this.model.get("bars"),
m=c.position.left,n=this.options.timelineView.getBarStartDate(m);h&&1===l.models.length&&d||(a.updatePositionLeft(m),a.updateColor(this.model.get("color")),e.attributes.startDate=n,d?(d=this._newBarRowView(),b.barRowNewView.$el.replaceWith(d.$el),a.appendTo(d.$el)):a.appendTo(b.$barRow),c.helper.remove(),h||(a.options.lane.removeEmptyRow(),l._byId[e.id]=e,this._barViews.push(a),a.updateDeleteBar(this._deleteBar),g.model.get("bars").remove(e),l.models.push(e),g._barViews.splice(f.indexOf(g._barViews,
a),1),this.updateRowIndex(g.$el),a.options=f.extend(a.options,{color:this.model.get("color"),lane:this}),g._updateLaneHeight()),this.removeEmptyRow(),this.updateRowIndex(this.$el),this._updateLaneHeight())},updateRowIndex:function(a){a.find(".roadmap-bar-row").each(function(b,c){k(c).find('.roadmap-bar:not(".roadmap-bar-clone")').each(function(d,e){if(d=k(e).data("View"))d.model.attributes.rowIndex=b})})},removeEmptyRow:function(){var a=0;f.each(this._barRowViews,function(b){b.isEmptyRow()&&(b.remove(),
a++)});return!!a},cleanLaneAfterDrop:function(){this._$laneContent.find(".roadmap-bar-drag-active").removeClass("roadmap-bar-drag-active");this._$laneContent.find(".new-row-placeholder").remove()},_deleteLane:function(){Confluence.Roadmap.ColorHelper.adjustColorCount(this.model.get("color"),-1);this.$el.trigger("Lane.delete",this)},updateDeleteStatus:function(a){this._laneDialog&&(this._laneDialog.remove(),delete this._laneDialog);this.options.canDelete=a},_deleteBar:function(a){this.model.get("bars").remove(a.model);
this._barViews.splice(f.indexOf(this._barViews,a),1);a.remove();this.removeEmptyRow()&&(this.updateRowIndex(this.$el),this._updateLaneHeight(),this.$el.trigger("BarRowView.remove"))},_addBar:function(){const a=this.model.get("bars");var b=this.options.timelineView.model;const c=Confluence.Roadmap.DateUtilities.parseDate(b.get("startDate"));b=b.get("displayOption")===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH?Confluence.Roadmap.DateUtilities.getStartOfMonth(c):Confluence.Roadmap.DateUtilities.getStartOfIsoWeek(c);
a.add(new Roadmap.Bar({rowIndex:this.model.getNumberOfRows(),startDate:b}))},_changeColor:function(a){Confluence.Roadmap.ColorHelper.adjustColorCount(this.model.get("color"),-1);this.model.set("color",a);Confluence.Roadmap.ColorHelper.adjustColorCount(a,1);this.$el.find(".roadmap-lane-title").css({"background-color":a.lane,color:a.text});f.each(this._barViews,function(b){b.updateColor(a)})},addNewBarRow:function(a){var b=this._$laneContent.find(".roadmap-bar-row"),c=[],d=function(){b.each(function(){var g=
k(this);if(0===g.index()){var h=new Roadmap.BarRowNewView({$barRow:g,renderBottom:!1});g.before(h.render().$el);c.push(h)}h=new Roadmap.BarRowNewView({$barRow:g});g.after(h.render().$el);c.push(h)})};if(0==b.length)this.addDefaultBarRow();else{var e=b.find(".roadmap-bar");0<e.length&&(0<e.length&&1==e.length&&e.attr("cid")===a.attr("cid")||d())}return c},addDefaultBarRow:function(){var a=this._newBarRowView();this._$laneContent.append(a.$el)},_onBarRowNewDropover:function(a,b,c){f.isEmpty(Roadmap.DragDrop.barDraggingOver)||
f.each(Roadmap.DragDrop.barDraggingOver,function(d){d.$el&&d.$el.removeClass("new-bar-row-hover roadmap-bar-drag-hover")});Roadmap.DragDrop.barDraggingOver[b.cid]=b;c.helper.removeClass("roadmap-bar-overlapped");c.helper.data("isAddingNewRow",!0)},_onBarRowNewDropout:function(a,b,c){c.helper.data("isAddingNewRow",!1);delete Roadmap.DragDrop.barDraggingOver[b.cid];f.each(Roadmap.DragDrop.barDraggingOver,function(d){"string"===typeof d?c.helper.addClass("roadmap-bar-overlapped"):"roadmap-bar-row"===
d.className&&!0!==c.helper.data("isAddingNewRow")&&d.$el.addClass("roadmap-bar-drag-hover")})}})})(AJS.$,window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/marker.js' */
(function(d,c){window.Roadmap=window.Roadmap||{};Roadmap.MarkerView=Backbone.View.extend({className:"vertical-line",events:{dragstop:"_onDragStop",dragstart:"_onDragStart"},initialize:function(){c.bindAll(this,"render","updateHeight","renameTitle","_renderComplete","_onMarkerClick")},render:function(){var a=this.options.roadmap._timelineView.model;a=a.get("displayOption")===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH?Confluence.Roadmap.Helper.getPosXOnMonthTimeline(a.attributes,this.model.get("markerDate")):
Confluence.Roadmap.Helper.getPosXOnWeekTimeline(a.attributes,this.model.get("markerDate"));if(0>a||a>this.options.roadmap._timelineView.$el.width())return!1;this.$el.css({left:a+Roadmap.LANE_TITLE_WIDTH+"px"});this.$el.append(Confluence.Templates.Roadmap.marker({title:this.model.get("title")}));this.updateHeight(this.options.roadmap._getLaneHeight());c.defer(this._renderComplete);return this},_renderComplete:function(){this._setupMarkerDragging();this.$el.click(this._onMarkerClick);this.$el.find(".marker-title").ellipsis({row:Roadmap.MARKER_TITLE_LINE})},
_setupMarkerDragging:function(){this.$el.draggable({axis:"x",zIndex:4013,containment:".roadmap-frame-content",cursor:"move"})},_onDragStop:function(a,b){a=b.position.left-Roadmap.LANE_TITLE_WIDTH;b=this.options.roadmap._timelineView.model.attributes;a=b.displayOption===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH?Confluence.Roadmap.Helper.getMonthStartDateByPosition(b,a):Confluence.Roadmap.Helper.getWeekStartDateByPosition(b,a);this.model.set("markerDate",a)},_onDragStart:function(a,b){this.options.roadmap.hideDialog()},
_onMarkerClick:function(a){d(a.target).hasClass("marker-title")&&(this._markerDialog&&this._markerDialog.remove(),this._markerDialog=this._createMarkerDialog(),this._markerDialog.show())},_createMarkerDialog:function(){return new Roadmap.MarkerDialogView({trigger:this.$el.find(".marker-title"),marker:this})},updateHeight:function(a){this.$el.height(a+Roadmap.MARKER_HEIGHT_PADDING)},renameTitle:function(a){this.model.set("title",a);var b=this.$el.find(".marker-title");b.attr("title",a);b.html(AJS.escapeHtml(a)).ellipsis({row:Roadmap.MARKER_TITLE_LINE})},
removeMarker:function(){this.model.collection.remove(this.model);this.remove()}})})(AJS.$,window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-view-resources', location = 'view/roadmap-editor/roadmap.js' */
(function(f,d){window.Roadmap=window.Roadmap||{};Roadmap.RoadmapEditorView=Backbone.View.extend({className:"roadmap-editor-container",events:{"BarView.add":"_onAddBar","BarView.dragstart":"_onBarDragstart","BarView.dragstop":"_onBarDragstop","BarView.drop":"_onBarDropped","LaneView.drop":"_onBarDropped","Lane.delete":"_onDeleteLane","BarRowView.remove":"_onBarRowViewRemove","sortstart .roadmap-content":"_onSortStart","sortstop .roadmap-content":"_onSortStop",remove:"_onRemove"},initialize:function(){d.bindAll(this,
"render");this.listenTo(this.model.get("lanes"),"add",function(a){a=new Roadmap.LaneView({model:a,timelineView:this._timelineView,canDelete:!0});1===this._laneViews.length&&this._laneViews[0].updateDeleteStatus(!0);this._laneViews.push(a);this.$roadmapContent.append(a.render().$el);this._updateTimelineColumnHeight();this._scrollToBottom()});this.listenTo(this.model.get("markers"),"add",function(a){a=new Roadmap.MarkerView({model:a,roadmap:this});this.$roadmapMarker.append(a.render().$el);this._markerViews.push(a)});
this.listenTo(this.model.get("timeline"),"change",function(){this._isTimelineChanged()&&(this._calculateMinWidthOfABar(),this._timelineView.update(),this._timelineColumnView.update(),this.$roadmapContent.empty(),d.each(this._laneViews,function(a){a.remove()}),this._laneViews=[],this._renderLanes(),this.$roadmapMarker.empty(),this._markerViews=[],this._renderMarkers(),this._updateDragArea())})},render:function(){this.$el.html(Confluence.Templates.Roadmap.roadmapEditor());this._calculateMinWidthOfABar();
this._initVariables();this._renderToolbar();this._renderTimeline();this._renderLanes();this._renderMarkers();this._renderTimelineColumn();this._updateDragArea();return this},_calculateMinWidthOfABar:function(){Roadmap.barMinWidth=this.model.get("timeline").get("displayOption")===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH?Roadmap.MONTH_BAR_MIN_WIDTH:Roadmap.WEEK_BAR_MIN_WIDTH},_initVariables:function(){this.$roadmapContainer=this.$el.find("#roadmap-container");this.$roadmapTimeline=this.$roadmapContainer.find(".roadmap-frame");
this.$roadmapContent=this.$roadmapContainer.find(".roadmap-content");this.$roadmapMarker=this.$roadmapContainer.find(".roadmap-marker");this._timelineView=new Roadmap.TimelineView({model:this.model.get("timeline")});this._timelineColumnView=new Roadmap.TimelineColumnView({model:this.model.get("timeline")});this._laneViews=[];this._markerViews=[]},_renderTimeline:function(){this.$roadmapTimeline.prepend(this._timelineView.render().$el)},_renderTimelineColumn:function(){this._updateTimelineColumnHeight();
this.$roadmapTimeline.append(this._timelineColumnView.render().$el)},_renderMarkers:function(){var a=this;this.model.get("markers").each(function(b){b=new Roadmap.MarkerView({model:b,roadmap:a});a.$roadmapMarker.append(b.render().$el);a._markerViews.push(b)})},_renderLanes:function(){Confluence.Roadmap.ColorHelper.resetColorCounts();var a=this;this._updateLaneWidth();var b=1<this.model.get("lanes").models.length;this.model.get("lanes").each(function(c){c=new Roadmap.LaneView({model:c,timelineView:a._timelineView,
canDelete:b});a._laneViews.push(c);a.$roadmapContent.append(c.render().$el)});this._setupLaneReordering()},_onAddBar:function(a,b){this._updateTimelineColumnHeight();a=b.$el;this._isInViewScreen(a)||this._scrollToBar(a)},_renderToolbar:function(){var a=f("#"+this.options.dialogId+" .aui-dialog2-content");a.find(".roadmap-toolbar").remove();var b=new Roadmap.ToolbarView({model:this.model,timelineView:this._timelineView});a.prepend(b.render().$el)},_getTimelineWidth:function(){return this.$roadmapTimeline.find(".roadmap-frame-title").width()},
_getLaneHeight:function(){return this.$roadmapContent.height()},_updateLaneWidth:function(){this.$roadmapContent.width(this._getTimelineWidth()+Roadmap.LANE_TITLE_WIDTH)},_scrollToBottom:function(){this.options.roadmapEditorPopup.scrollTop(this._getLaneHeight())},_isInViewScreen:function(a){return f.inviewport(a,{threshold:-200})},_scrollToBar:function(a){this.options.roadmapEditorPopup.scrollTop(a.parent().position().top);this.options.roadmapEditorPopup.scrollLeft(0)},_onBarDropped:function(){this._updateTimelineColumnHeight()},
_onDeleteLane:function(a,b){this.model.get("lanes").remove(b.model);this._laneViews.splice(d.indexOf(this._laneViews,b),1);b.remove();this._updateTimelineColumnHeight();1===this._laneViews.length&&this._laneViews[0].updateDeleteStatus(!1)},_onBarRowViewRemove:function(){this._updateTimelineColumnHeight()},_updateTimelineColumnHeight:function(){var a=this._getLaneHeight();this._timelineColumnView.updateHeight(a);d.each(this._markerViews,function(b){b.updateHeight(a)})},hideDialog:function(){f("#inline-dialog-roadmap-dialog, #inline-dialog-timeline-options").hide()},
removeDialog:function(){f("#inline-dialog-roadmap-dialog, #inline-dialog-timeline-options").remove()},_onBarDragstart:function(a,b){var c=this;this.hideDialog();this._updateDragArea();this._barRowNewViewList=[];d.each(this._laneViews,function(e){c._barRowNewViewList.push(e.addNewBarRow(b.helper))})},_updateDragArea:function(){this.$roadmapContainer.find(".roadmap-drag-area").css(this._timelineColumnView.getSizeAndPosition())},_onBarDragstop:function(){d.each(d.flatten(this._barRowNewViewList),function(a){a.remove()});
delete this._barRowNewViewList;d.each(this._laneViews,function(a){a.removeEmptyRow()})},_setupLaneReordering:function(){this.$roadmapContent.sortable({axis:"y",cursor:"move",handle:".roadmap-lane-title",opacity:.3,placeholder:"roadmap-lane lane-sorting-placeholder",helper:function(a,b){return f(b).clone().addClass("lane-sorting-hepler")}})},_onSortStart:function(a,b){this.hideDialog();this._timelineColumnView.$el.hide();b.placeholder.css({height:Math.min(b.helper.height(),100),width:b.helper.width()}).html(Confluence.Templates.Roadmap.lane(Roadmap.TRANSPARENT_LANE));
b.helper.find(".roadmap-lane-content").css({width:b.helper.width()-(b.helper.find(".roadmap-lane-title").outerWidth()+b.helper.find(".roadmap-separate-content").outerWidth())})},_onSortStop:function(a,b){this._timelineColumnView.$el.show();var c=b.item.attr("cid");a=d.find(this._laneViews,function(g){return g.cid===c}).model;var e=this.model.get("lanes");e.remove(a);e.models.splice(b.item.index(),0,a);e._byId[a.cid]=a},_onRemove:function(){this.$roadmapTimeline.remove()},_isMonthYearChanged:function(){var a=
function(c,e){return c.getMonth()!==e.getMonth()||c.getYear()!==e.getYear()?!0:!1},b=this.model.get("timeline");return a(b._previousAttributes.startDate,b.attributes.startDate)||a(b._previousAttributes.endDate,b.attributes.endDate)},_isWeekChanged:function(){var a=this.model.get("timeline"),b=a._previousAttributes.endDate,c=a.attributes.endDate;return!(Confluence.Roadmap.DateUtilities.areInSameWeek(a._previousAttributes.startDate,a.attributes.startDate)&&Confluence.Roadmap.DateUtilities.areInSameWeek(b,
c))},_isTimelineChanged:function(){var a=this.model.get("timeline"),b=a.changed.displayOption;b?this.model.updateDurationUnit(a.get("displayOption")):b=a.get("displayOption")===Roadmap.TIMELINE_DISPLAY_OPTION.MONTH?this._isMonthYearChanged():this._isWeekChanged();return b},resize:function(){this._updateLaneWidth();this._updateTimelineColumnHeight();this.$roadmapContent.css({top:this.$roadmapTimeline.find(".roadmap-column-title:first").innerHeight()})}})})(AJS.$,window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-analytics-resources', location = 'analytics/roadmap-analytics.js' */
Confluence.Roadmap=Confluence.Roadmap||{};
Confluence.Roadmap.Analytics=function(g,e){function b(a,c){AJS.trigger("analytics",{name:a,data:c})}function d(a){var c=0;e.each(a.lanes,function(f){c+=f.bars.length});return{lanes:a.lanes.length,bars:c,markers:a.markers.length,months:Confluence.Roadmap.DateUtilities.getNumberOfMonths(Confluence.Roadmap.DateUtilities.parseDate(a.timeline.startDate),Confluence.Roadmap.DateUtilities.parseDate(a.timeline.endDate))+1}}return{insertRoadmap:function(){b("confluence.roadmap.insert")},createRoadmap:function(a){a=
d(a);b("confluence.roadmap.create",a)},editRoadmap:function(a){a=d(a);b("confluence.roadmap.edit",a)},openBarDialogInEdit:function(){b("confluence.roadmap.editmode.open_bar_dialog")},addDescription:function(){b("confluence.roadmap.editmode.add_description")},addPageLinkEditMode:function(a){b("confluence.roadmap.editmode.add_page_link",a)},addPageLinkViewMode:function(a){b("confluence.roadmap.viewmode.add_page_link",a)},openBarDialogInView:function(){b("confluence.roadmap.viewmode.open_bar_dialog")},
clickPageLink:function(){b("confluence.roadmap.viewmode.click_page_link")}}}(AJS.$,window._);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-resources', location = 'lib/jquery.viewport.js' */
(function(a){a.belowthefold=function(b,c){return a(window).height()+a(window).scrollTop()<=a(b).offset().top-c.threshold};a.abovethetop=function(b,c){return a(window).scrollTop()>=a(b).offset().top+a(b).height()-c.threshold};a.rightofscreen=function(b,c){return a(window).width()+a(window).scrollLeft()<=a(b).offset().left-c.threshold||0>a(b).offset().left};a.leftofscreen=function(b,c){return a(window).scrollLeft()>=a(b).offset().left+a(b).width()-c.threshold};a.inviewport=function(b,c){return!a.rightofscreen(b,
c)&&!a.leftofscreen(b,c)&&!a.belowthefold(b,c)&&!a.abovethetop(b,c)};a.extend(a.expr[":"],{"below-the-fold":function(b,c,d){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b,c,d){return a.abovethetop(b,{threshold:0})},"left-of-screen":function(b,c,d){return a.leftofscreen(b,{threshold:0})},"right-of-screen":function(b,c,d){return a.rightofscreen(b,{threshold:0})},"in-viewport":function(b,c,d){return a.inviewport(b,{threshold:0})}})})(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-resources', location = 'lib/jquery.ellipsis.min.js' */
/*! jQuery ellipsis - v1.1.1 - 2014-02-23
* https://github.com/STAR-ZERO/jquery-ellipsis
* Copyright (c) 2014 Kenji Abe; Licensed MIT */
!function(a){a.fn.ellipsis=function(b){var c={row:1,onlyFullWords:!1,"char":"...",callback:function(){},position:"tail"};return b=a.extend(c,b),this.each(function(){var c=a(this),d=c.text(),e=d,f=e.length,g=c.height();c.text("a");var h=parseFloat(c.css("lineHeight"),10),i=c.height(),j=h>i?h-i:0,k=j*(b.row-1)+i*b.row;if(k>=g)return c.text(d),void b.callback.call(this);var l=1,m=0,n=d.length;if("tail"===b.position){for(;n>l;)m=Math.ceil((l+n)/2),c.text(d.slice(0,m)+b["char"]),c.height()<=k?l=m:n=m-1;d=d.slice(0,l),b.onlyFullWords&&(d=d.replace(/[\u00AD\w\uac00-\ud7af]+$/,"")),d+=b["char"]}else if("middle"===b.position){for(var o=0;n>l;)m=Math.ceil((l+n)/2),o=Math.max(f-m,0),c.text(e.slice(0,Math.floor((f-o)/2))+b["char"]+e.slice(Math.floor((f+o)/2),f)),c.height()<=k?l=m:n=m-1;o=Math.max(f-l,0);var p=e.slice(0,Math.floor((f-o)/2)),q=e.slice(Math.floor((f+o)/2),f);b.onlyFullWords&&(p=p.replace(/[\u00AD\w\uac00-\ud7af]+$/,"")),d=p+b["char"]+q}c.text(d),b.callback.call(this)}),this}}(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-resources', location = 'editor/md5.js' */
var hexcase=0,b64pad="";function hex_md5(d){return rstr2hex(rstr_md5(str2rstr_utf8(d)))}function b64_md5(d){return rstr2b64(rstr_md5(str2rstr_utf8(d)))}function any_md5(d,a){return rstr2any(rstr_md5(str2rstr_utf8(d)),a)}function hex_hmac_md5(d,a){return rstr2hex(rstr_hmac_md5(str2rstr_utf8(d),str2rstr_utf8(a)))}function b64_hmac_md5(d,a){return rstr2b64(rstr_hmac_md5(str2rstr_utf8(d),str2rstr_utf8(a)))}
function any_hmac_md5(d,a,b){return rstr2any(rstr_hmac_md5(str2rstr_utf8(d),str2rstr_utf8(a)),b)}function md5_vm_test(){return"900150983cd24fb0d6963f7d28e17f72"==hex_md5("abc").toLowerCase()}function rstr_md5(d){return binl2rstr(binl_md5(rstr2binl(d),8*d.length))}
function rstr_hmac_md5(d,a){var b=rstr2binl(d);16<b.length&&(b=binl_md5(b,8*d.length));var c=Array(16);d=Array(16);for(var e=0;16>e;e++)c[e]=b[e]^909522486,d[e]=b[e]^1549556828;a=binl_md5(c.concat(rstr2binl(a)),512+8*a.length);return binl2rstr(binl_md5(d.concat(a),640))}function rstr2hex(d){try{hexcase}catch(f){hexcase=0}for(var a=hexcase?"0123456789ABCDEF":"0123456789abcdef",b="",c,e=0;e<d.length;e++)c=d.charCodeAt(e),b+=a.charAt(c>>>4&15)+a.charAt(c&15);return b}
function rstr2b64(d){try{b64pad}catch(g){b64pad=""}for(var a="",b=d.length,c=0;c<b;c+=3)for(var e=d.charCodeAt(c)<<16|(c+1<b?d.charCodeAt(c+1)<<8:0)|(c+2<b?d.charCodeAt(c+2):0),f=0;4>f;f++)a=8*c+6*f>8*d.length?a+b64pad:a+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e>>>6*(3-f)&63);return a}
function rstr2any(d,a){var b=a.length,c,e,f,g=Array(Math.ceil(d.length/2));for(c=0;c<g.length;c++)g[c]=d.charCodeAt(2*c)<<8|d.charCodeAt(2*c+1);var l=Math.ceil(8*d.length/(Math.log(a.length)/Math.log(2)));d=Array(l);for(e=0;e<l;e++){var h=[];for(c=f=0;c<g.length;c++){f=(f<<16)+g[c];var k=Math.floor(f/b);f-=k*b;if(0<h.length||0<k)h[h.length]=k}d[e]=f;g=h}b="";for(c=d.length-1;0<=c;c--)b+=a.charAt(d[c]);return b}
function str2rstr_utf8(d){for(var a="",b=-1,c,e;++b<d.length;)c=d.charCodeAt(b),e=b+1<d.length?d.charCodeAt(b+1):0,55296<=c&&56319>=c&&56320<=e&&57343>=e&&(c=65536+((c&1023)<<10)+(e&1023),b++),127>=c?a+=String.fromCharCode(c):2047>=c?a+=String.fromCharCode(192|c>>>6&31,128|c&63):65535>=c?a+=String.fromCharCode(224|c>>>12&15,128|c>>>6&63,128|c&63):2097151>=c&&(a+=String.fromCharCode(240|c>>>18&7,128|c>>>12&63,128|c>>>6&63,128|c&63));return a}
function str2rstr_utf16le(d){for(var a="",b=0;b<d.length;b++)a+=String.fromCharCode(d.charCodeAt(b)&255,d.charCodeAt(b)>>>8&255);return a}function str2rstr_utf16be(d){for(var a="",b=0;b<d.length;b++)a+=String.fromCharCode(d.charCodeAt(b)>>>8&255,d.charCodeAt(b)&255);return a}function rstr2binl(d){for(var a=Array(d.length>>2),b=0;b<a.length;b++)a[b]=0;for(b=0;b<8*d.length;b+=8)a[b>>5]|=(d.charCodeAt(b/8)&255)<<b%32;return a}
function binl2rstr(d){for(var a="",b=0;b<32*d.length;b+=8)a+=String.fromCharCode(d[b>>5]>>>b%32&255);return a}
function binl_md5(d,a){d[a>>5]|=128<<a%32;d[(a+64>>>9<<4)+14]=a;a=1732584193;for(var b=-271733879,c=-1732584194,e=271733878,f=0;f<d.length;f+=16){var g=a,l=b,h=c,k=e;a=md5_ff(a,b,c,e,d[f+0],7,-680876936);e=md5_ff(e,a,b,c,d[f+1],12,-389564586);c=md5_ff(c,e,a,b,d[f+2],17,606105819);b=md5_ff(b,c,e,a,d[f+3],22,-1044525330);a=md5_ff(a,b,c,e,d[f+4],7,-176418897);e=md5_ff(e,a,b,c,d[f+5],12,1200080426);c=md5_ff(c,e,a,b,d[f+6],17,-1473231341);b=md5_ff(b,c,e,a,d[f+7],22,-45705983);a=md5_ff(a,b,c,e,d[f+8],7,
1770035416);e=md5_ff(e,a,b,c,d[f+9],12,-1958414417);c=md5_ff(c,e,a,b,d[f+10],17,-42063);b=md5_ff(b,c,e,a,d[f+11],22,-1990404162);a=md5_ff(a,b,c,e,d[f+12],7,1804603682);e=md5_ff(e,a,b,c,d[f+13],12,-40341101);c=md5_ff(c,e,a,b,d[f+14],17,-1502002290);b=md5_ff(b,c,e,a,d[f+15],22,1236535329);a=md5_gg(a,b,c,e,d[f+1],5,-165796510);e=md5_gg(e,a,b,c,d[f+6],9,-1069501632);c=md5_gg(c,e,a,b,d[f+11],14,643717713);b=md5_gg(b,c,e,a,d[f+0],20,-373897302);a=md5_gg(a,b,c,e,d[f+5],5,-701558691);e=md5_gg(e,a,b,c,d[f+
10],9,38016083);c=md5_gg(c,e,a,b,d[f+15],14,-660478335);b=md5_gg(b,c,e,a,d[f+4],20,-405537848);a=md5_gg(a,b,c,e,d[f+9],5,568446438);e=md5_gg(e,a,b,c,d[f+14],9,-1019803690);c=md5_gg(c,e,a,b,d[f+3],14,-187363961);b=md5_gg(b,c,e,a,d[f+8],20,1163531501);a=md5_gg(a,b,c,e,d[f+13],5,-1444681467);e=md5_gg(e,a,b,c,d[f+2],9,-51403784);c=md5_gg(c,e,a,b,d[f+7],14,1735328473);b=md5_gg(b,c,e,a,d[f+12],20,-1926607734);a=md5_hh(a,b,c,e,d[f+5],4,-378558);e=md5_hh(e,a,b,c,d[f+8],11,-2022574463);c=md5_hh(c,e,a,b,d[f+
11],16,1839030562);b=md5_hh(b,c,e,a,d[f+14],23,-35309556);a=md5_hh(a,b,c,e,d[f+1],4,-1530992060);e=md5_hh(e,a,b,c,d[f+4],11,1272893353);c=md5_hh(c,e,a,b,d[f+7],16,-155497632);b=md5_hh(b,c,e,a,d[f+10],23,-1094730640);a=md5_hh(a,b,c,e,d[f+13],4,681279174);e=md5_hh(e,a,b,c,d[f+0],11,-358537222);c=md5_hh(c,e,a,b,d[f+3],16,-722521979);b=md5_hh(b,c,e,a,d[f+6],23,76029189);a=md5_hh(a,b,c,e,d[f+9],4,-640364487);e=md5_hh(e,a,b,c,d[f+12],11,-421815835);c=md5_hh(c,e,a,b,d[f+15],16,530742520);b=md5_hh(b,c,e,
a,d[f+2],23,-995338651);a=md5_ii(a,b,c,e,d[f+0],6,-198630844);e=md5_ii(e,a,b,c,d[f+7],10,1126891415);c=md5_ii(c,e,a,b,d[f+14],15,-1416354905);b=md5_ii(b,c,e,a,d[f+5],21,-57434055);a=md5_ii(a,b,c,e,d[f+12],6,1700485571);e=md5_ii(e,a,b,c,d[f+3],10,-1894986606);c=md5_ii(c,e,a,b,d[f+10],15,-1051523);b=md5_ii(b,c,e,a,d[f+1],21,-2054922799);a=md5_ii(a,b,c,e,d[f+8],6,1873313359);e=md5_ii(e,a,b,c,d[f+15],10,-30611744);c=md5_ii(c,e,a,b,d[f+6],15,-1560198380);b=md5_ii(b,c,e,a,d[f+13],21,1309151649);a=md5_ii(a,
b,c,e,d[f+4],6,-145523070);e=md5_ii(e,a,b,c,d[f+11],10,-1120210379);c=md5_ii(c,e,a,b,d[f+2],15,718787259);b=md5_ii(b,c,e,a,d[f+9],21,-343485551);a=safe_add(a,g);b=safe_add(b,l);c=safe_add(c,h);e=safe_add(e,k)}return[a,b,c,e]}function md5_cmn(d,a,b,c,e,f){return safe_add(bit_rol(safe_add(safe_add(a,d),safe_add(c,f)),e),b)}function md5_ff(d,a,b,c,e,f,g){return md5_cmn(a&b|~a&c,d,a,e,f,g)}function md5_gg(d,a,b,c,e,f,g){return md5_cmn(a&c|b&~c,d,a,e,f,g)}
function md5_hh(d,a,b,c,e,f,g){return md5_cmn(a^b^c,d,a,e,f,g)}function md5_ii(d,a,b,c,e,f,g){return md5_cmn(b^(a|~c),d,a,e,f,g)}function safe_add(d,a){var b=(d&65535)+(a&65535);return(d>>16)+(a>>16)+(b>>16)<<16|b&65535}function bit_rol(d,a){return d<<a|d>>>32-a};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-resources', location = 'editor/roadmap-editor.js' */
AJS.toInit(function(){function u(){setTimeout(function(){if(d&&d.is(":visible")){var f=d.height(),p=d.find(".aui-dialog2-header").outerHeight(),q=d.find(".aui-dialog2-footer").outerHeight(),m=d.find("#roadmap-editor-toolbar").outerHeight();d.find(".roadmap-editor-popup").css("height",f-p-q-m)}},0)}var r,d,v,g,t;AJS.MacroBrowser.setMacroJsOverride("roadmap",{opener:function(f){var p=function(h,b,e,a){var c=e?e.split("~~~~~"):[];b=b?b.split("~~~~~"):[];_.isEmpty(c)?a&&a():$.ajax({type:"POST",contentType:"application/json",
url:AJS.contextPath()+"/rest/roadmap/1.0/extractPageLinks",data:JSON.stringify({wikiLinks:_.object(c,b),roadmapSpace:AJS.Meta.get("space-key")}),success:function(k){_.each(h.lanes,function(n){_.chain(n.bars).filter(function(l){return _.contains(c,l.id)}).each(function(l){k[l.id]&&(l.pageLink=k[l.id])})});a&&a()},error:function(k){AJS.log(k);a&&a()}})},q=function(h){var b=[],e=[];h.lanes.forEach(function(a){a.bars.forEach(function(c){if(!_.isEmpty(c.pageLink)){var k=c.pageLink.wikiLink.replace(/[\][]/g,
"");b.push(_.escape(k));e.push(c.id)}})});return{pageLinks:b.join("~~~~~"),mapLinks:e.join("~~~~~")}};if(f.params&&"true"!==f.params.timeline){var m=$(Confluence.Templates.Roadmap.deprecationDialog({id:"roadmap-deprecation-dialog"}));AJS.dialog2(m).on("hide",function(){$("#roadmap-deprecation-dialog").remove()}).on("show",function(){$("#dialog-close-button",m).click(function(h){h.preventDefault();AJS.dialog2("#roadmap-deprecation-dialog").hide()})}).show();return!1}var x=function(){"undefined"==typeof r&&
(r=aui.dialog.dialog2({id:"confluence-roadmap-dialog",size:"xlarge",titleText:"Insert Roadmap Planner",content:Confluence.Templates.Roadmap.roadmapPopupPanel({roadmapPopupPanelId:"roadmap-popup-panel"}),footerActionContent:Confluence.Templates.Roadmap.footerActionContent(),modal:!0}),d=$(r).appendTo($("body")),d.find("#roadmapInsertBtn").on("click",function(a){g.removeDialog();a=g.model.toMacroData();var c=encodeURIComponent(JSON.stringify(a)),k=hex_md5(c),n=q(a);c={timeline:"true",
source:c,hash:k,title:encodeURIComponent(a.title),pagelinks:n.pageLinks,maplinks:n.mapLinks};tinymce.confluence.macrobrowser.macroBrowserComplete({name:"roadmap",params:c});g.remove();h.hide();t?Confluence.Roadmap.Analytics.createRoadmap(a):Confluence.Roadmap.Analytics.editRoadmap(a)}),d.find("#roadmapCancelBtn").on("click",function(a){g.removeDialog();g.remove();h.hide()}),v=d.find(".roadmap-editor-popup"));var h=AJS.dialog2("#confluence-roadmap-dialog").show();var b=$("#roadmap-popup-panel"),e=
b.find(".roadmap-view");e.length||(e=$('\x3cdiv class\x3d"roadmap-view"/\x3e'),b.append(e));b=new Roadmap.Roadmap(w,{parse:!0});g=new Roadmap.RoadmapEditorView({model:b,dialogId:"confluence-roadmap-dialog",el:e,roadmapEditorPopup:v});g.render();u()};if(f.params&&f.params.source){t=!1;var w=JSON.parse(decodeURIComponent(f.params.source));p(w,f.params.pagelinks,f.params.maplinks,x)}else t=!0,Confluence.Roadmap.Analytics.insertRoadmap(),x()}});$(window).resize(function(){u();g&&g.resize()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-resources', location = 'editor/roadmap-editor-config.js' */
(function(){window.Roadmap=window.Roadmap||{};Roadmap.COLORS=[{lane:"#f6c342",bar:"#fadb8e",text:"#594300"},{lane:"#3b7fc4",bar:"#6c9fd3",text:"#ffffff"},{lane:"#d04437",bar:"#dc7369",text:"#ffffff"},{lane:"#8eb021",bar:"#aac459",text:"#ffffff"},{lane:"#ea632b",bar:"#ef8a60",text:"#ffffff"},{lane:"#654982",bar:"#8c77a1",text:"#ffffff"},{lane:"#f15c75",bar:"#f58598",text:"#ffffff"},{lane:"#815b3a",bar:"#a1846b",text:"#ffffff"}];Roadmap.TIMELINE_DISPLAY_OPTION={MONTH:"MONTH",WEEK:"WEEK"};Roadmap.SHORT_DATE_FORMAT=
"YYYY-MM-DD";Roadmap.WEEK_FORMAT="DD-MMM";Roadmap.MONTH_FORMAT="MMM";Roadmap.TIMELINE_YEARS_LIMIT=5;Roadmap.LANE_TITLE_WIDTH=45;Roadmap.MARKER_HEIGHT_PADDING=10;Roadmap.MARKER_TITLE_LINE=2;Roadmap.LANE_PADDING=11;Roadmap.BAR_PADDING=8;Roadmap.BAR_MARGIN=1;Roadmap.BAR_BORDER=1;Roadmap.MONTH_WIDTH=101;Roadmap.WEEK_WIDTH=101;Roadmap.EXTRA_SPACE_AROUND=2*Roadmap.BAR_PADDING+2*Roadmap.BAR_BORDER;Roadmap.MONTH_BAR_MIN_WIDTH=Roadmap.MONTH_WIDTH/4-Roadmap.EXTRA_SPACE_AROUND;Roadmap.WEEK_BAR_MIN_WIDTH=Roadmap.WEEK_WIDTH-
Roadmap.EXTRA_SPACE_AROUND;Roadmap.barMinWidth=Roadmap.MONTH_BAR_MIN_WIDTH;Roadmap.TRANSPARENT_LANE={title:"",color:{lane:"#ffffff",bar:"#ffffff",text:"#ffffff"}};Roadmap.DragDrop={};Roadmap.BarDialog={MAX_LENGTH_TITLE:100,MAX_LENGTH_DESCRIPTION:150};Roadmap.getDefaultRoadmapData=function(){const a=new Date((new Date).setHours(0,0,0,0)),b=Confluence.Roadmap.DateUtilities.addMonths(a,11);return{title:"Roadmap Planner",timeline:{startDate:new Date(a),endDate:b,displayOption:Roadmap.TIMELINE_DISPLAY_OPTION.MONTH},
lanes:[{title:"Lane 1",color:Roadmap.COLORS[0],bars:[{title:"Bar 1",description:"This is the first bar.",startDate:new Date(a.setDate(1)),duration:2,rowIndex:0},{title:"Bar 2",description:"This is the second bar.",startDate:new Date(a),duration:1,rowIndex:1}]},{title:"Lane 2",
color:Roadmap.COLORS[1],bars:[{title:"Bar 3",description:"This is the third bar.",startDate:a,duration:2.5,rowIndex:0}]}],markers:[{title:"Marker 1",markerDate:new Date((new Date(a)).setDate(15))}]}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:amd-slim', location = '/com/atlassian/confluence/extra/calendar3/amd/shim/dialogs-amd.js' */
define("tc/dialogs",function(){return Confluence.TeamCalendars.Dialogs});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:amd-slim', location = '/com/atlassian/confluence/extra/calendar3/lib/amd/shim/backbone-amd.js' */
if(typeof Backbone!=="undefined"){define("tc-backbone",["underscore"],function(){return Backbone})};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:amd-slim', location = '/com/atlassian/confluence/extra/calendar3/lib/amd/shim/wrm-amd.js' */
define("wrm",function(){return WRM});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-init-common', location = 'com/atlassian/confluence/extra/calendar3/components/initialiser/init-resources.js' */
define("tc/init-resources",["wrm","jquery"],function(a,c){var b=function(d){return d.removeClass("spinner").removeClass("aui-icon").removeClass("aui-icon-wait")};return{requireResources:function(){console.log("Init TC resources");a.require(["wrc!com.atlassian.confluence.extra.team-calendars.resources-batch"],function(){b(c("div.plugin-calendar"));require(["tc/calendar-plugin"],function(d){d.onTeamCalendarsLoaded()})}).fail(function(){b(c("div.plugin-calendar")).text("Failed to load calendar resources")})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:calendar-init-editor', location = 'com/atlassian/confluence/extra/calendar3/components/initialiser/initialiser-editor.js' */
define("tc/init-resources-unsupported-content-types",function(){var a=["comment","com.atlassian.confluence.plugins.confluence-questions:question"];return a});define("tc/wait-for-calendar-macro-browser-metadata",function(){var a;return function(){if(!a){a=new Promise(function(c){var b=setInterval(function(){if(AJS.MacroBrowser.getMacroMetadata("calendar")){clearInterval(b);c()}},100)})}return a}});define("tc/init-resources-function",["ajs","jquery","wrm","confluence/meta","confluence/api/logger","tc/init-resources-unsupported-content-types","tc/wait-for-calendar-macro-browser-metadata"],function(d,h,c,f,b,g,e){var a=function(){var i=f.get("content-type");if(g.indexOf(i)>=0){c.require(["wrc!com.atlassian.confluence.extra.team-calendars:editor"],function(){e().then(function(){d.MacroBrowser.getMacroMetadata("calendar").hidden=true;h(window).trigger("tc/init-resources-function--load-succeed");a.isEditorResourcesLoadSucceed=true;b.log("TC initialiser-editor: not loading TC editor resources for content-type="+i)})});return}b.log("TC initialiser-editor: Init TC resources in Editor. content-type="+i);c.require(["wrc!com.atlassian.confluence.extra.team-calendars:editor"],function(){require(["tc/init-resources","tc/macro-button-panel","tc/macro-browser","tc/macro-browser-event-macro","tc/editor-auto-convert"],function(l,o,k,j,n){try{o.init();k.init();j.init();n.init();l.requireResources();e().then(function(){d.MacroBrowser.getMacroMetadata("calendar").hidden=false;h(window).trigger("tc/init-resources-function--load-succeed");a.isEditorResourcesLoadSucceed=true})}catch(m){h(window).trigger("tc/init-resources-function--load-failed");a.isEditorResourcesLoadFailed=m;b.error("TC initialiser-editor: Could not init TC resources for editor",m)}})}).fail(function(j){h(window).trigger("tc/init-resources-function--load-failed");a.isEditorResourcesLoadFailed=j;b.error("TC initialiser-editor: Could not load TC resources for editor")})};return a});require(["tc/init-resources-function"],function(a){$(window).bind("rte-ready",a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-emoticons-plugin:confluence.emoticon.editor-plugin', location = 'confluence.emoticon.editor-plugin.js' */
!function(e){function n(n){for(var t,r,a=n[0],i=n[1],c=0,l=[];c<a.length;c++)r=a[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(u&&u(n);l.length;)l.shift()()}var t={},o={"confluence.emoticon.editor-plugin":0};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var n=[];return 0===o[e]?Promise.resolve():o[e]?o[e][2]:(n.push(new Promise((function(n,t){o[e]=[n,t]})),new Promise((function(n,t){WRM.require("wrc!com.atlassian.confluence.plugins.confluence-emoticons-plugin:"+e).then(n,t)}))),o[e][2]=Promise.all(n))},r.m=e,r.c=t,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r.oe=function(e){throw console.error(e),e},"undefined"!=typeof AJS&&(r.p=AJS.contextPath()+"/s/c8280418-6a45-41ce-93ea-b1d56fcfc1e0/_/download/resources/com.atlassian.confluence.plugins.confluence-emoticons-plugin:assets-c8280418-6a45-41ce-93ea-b1d56fcfc1e0/");var a=window.atlassianWebpackJsonpeca76e5ef4d162f55baedb6b81d3ee1f=window.atlassianWebpackJsonpeca76e5ef4d162f55baedb6b81d3ee1f||[],i=a.push.bind(a);a.push=n,a=a.slice();for(var c=0;c<a.length;c++)n(a[c]);var u=i;r(r.s=324)}({0:function(e,n){e.exports=require("react")},130:function(e,n){e.exports=WRM.format},131:function(e,n){if(void 0===WRM.I18n){var t=new Error("Cannot find module 'WRM.I18n'");throw t.code="MODULE_NOT_FOUND",t}e.exports=WRM.I18n},189:function(e,n){e.exports=require("tinymce")},221:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return b}));var o,r=t(34),a=t.n(r),i=t(24),c=t(189),u=t.n(c),l=t(222),f=t.n(l);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var d,m;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function p(){u.a.PluginManager.add("confEmoticon",(function(e){var n=!1;return e.ui.registry.addButton("confluence-insert-emoticon",{text:"",tooltip:"Insert emoji",icon:"aui-icon aui-icon-small aui-iconfont-emoji",locationGroup:"rte-toolbar-group-table",onAction:function(){n||(Promise.all([t.e("vendors~emoticon-autocomplete-manager~emoticon-autoformat-manager~emoticon-popup-manager"),t.e("vendors~@atlaskit-internal_emojiTypeAheadComponent~emoticon-popup-manager"),t.e("vendors~emoticon-autocomplete-manager~emoticon-popup-manager"),t.e("vendors~emoticon-popup-manager"),t.e("emoticon-popup-manager")]).then(t.bind(null,395)).then((function(e){(0,e.init)()})),n=!0)}}),{getMetadata:function(){return{name:"Confluence emoticon plugin",url:"https://example.com/docs/customplugin"}}}})),f.a.addTinyMcePluginInit((function(e){e.plugins+=",confEmoticon"}))}function s(){a.a.bind("rte-ready",(function(){Promise.all([t.e("vendors~emoticon-autocomplete-manager~emoticon-autoformat-manager~emoticon-popup-manager"),t.e("emoticon-autocomplete-manager~emoticon-autoformat-manager"),t.e("emoticon-autoformat-manager")]).then(t.bind(null,396)).then((function(e){(0,e.init)()}))}))}function g(){a.a.bind("rte-ready",(function(){Promise.all([t.e("vendors~emoticon-autocomplete-manager~emoticon-autoformat-manager~emoticon-popup-manager"),t.e("vendors~emoticon-autocomplete-manager~emoticon-popup-manager"),t.e("emoticon-autocomplete-manager~emoticon-autoformat-manager"),t.e("emoticon-autocomplete-manager")]).then(t.bind(null,397)).then((function(e){(0,e.init)()}))}))}function b(){p(),s(),g()}(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(p,"addButtonToToolbar","/buildeng/bamboo-agent-home/xml-data/build-dir/CBP88-CONTENTPLUGINS-RELEASE/target/checkout/confluence-emoticons-plugin/plugin/src/main/frontend/integration/index.ts"),d.register(s,"initEmoticonAutoformat","/buildeng/bamboo-agent-home/xml-data/build-dir/CBP88-CONTENTPLUGINS-RELEASE/target/checkout/confluence-emoticons-plugin/plugin/src/main/frontend/integration/index.ts"),d.register(g,"initAutocomplete","/buildeng/bamboo-agent-home/xml-data/build-dir/CBP88-CONTENTPLUGINS-RELEASE/target/checkout/confluence-emoticons-plugin/plugin/src/main/frontend/integration/index.ts"),d.register(b,"init","/buildeng/bamboo-agent-home/xml-data/build-dir/CBP88-CONTENTPLUGINS-RELEASE/target/checkout/confluence-emoticons-plugin/plugin/src/main/frontend/integration/index.ts")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}).call(this,t(53)(e))},222:function(e,n){e.exports=require("confluence-editor/loader/tinymce-bootstrap")},24:function(e,n,t){!function(e,n,o){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=r(n),i=r(o);const c=function(){try{return t(131)}catch(e){return null}}();function u(e,...t){let o=0;const r={};t=t.map(e=>{if(n.isValidElement(e)){const n=`!PLACEHOLDER_${++o}!`;return r[n]=e,n}return e});const c=i.default(e,...t).split(/(!PLACEHOLDER_\d+!)/g);if(1===c.length)return c.join("");const u=c.map((e,t)=>a.default.createElement(n.Fragment,{key:t},t%2?r[e]:e));return a.default.createElement(n.Fragment,null,u)}const l={getText:(...e)=>{if(!c)return console.warn('Call to "getText" function was not replaced with either raw translation or call to "format" function. Have you included the "jsI18n" transformation in Web Resource Manager?'),u(...e);let n;try{WRM.I18n.format=u,n=c.getText.apply(null,e)}finally{WRM.I18n.format=i.default}return n}};e.I18n=l,e.format=u,Object.defineProperty(e,"__esModule",{value:!0})}(n,t(0),t(130))},324:function(e,n,t){e.exports=t(325)},325:function(e,n,t){"use strict";t.r(n);t(326);var o=t(221);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;Object(o.a)()},326:function(e,n,t){e.exports=void 0},34:function(e,n){e.exports=require("confluence/api/event")},53:function(e,n){e.exports=function(e){if(!e.webpackPolyfill){var n=Object.create(e);n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),Object.defineProperty(n,"exports",{enumerable:!0}),n.webpackPolyfill=1}return n}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.advanced:include_macro', location = 'com/atlassian/confluence/plugins/macros/advanced/js/include-macro.js' */
AJS.bind("init.rte",function(){var c=AJS.Meta.get("context-path"),d=AJS.Meta.get("content-id");AJS.Confluence.PropertyPanel.Macro.registerButtonHandler("goto-page",function(a,b){a=AJS.$(b).attr("data-macro-default-parameter");a=c+"/plugins/servlet/confluence/include-page-macro/goto?location\x3d"+encodeURIComponent(a)+"\x26contentId\x3d"+d;(b=window.open(a,AJS.$.browser&&AJS.$.browser.msie?"_blank":"confluence-goto-link-include-macro-"+b.id))&&b.focus()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.multimedia:macro-browser-smart-fields', location = 'javascript/macro-fields.js' */
(function(a){AJS.MacroBrowser.activateSmartFieldsAttachmentsOnPage("multimedia","swf avi mov mp4 mpeg mpg wmv wma mp3 ram rm".split(" "))})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.k15t.scroll.scroll-exporter-extensions:macro-ui-resource', location = 'com/k15t/scroll/exporter/macro/ui/ext-macro-bootstrap.js' */
require(['ajs'], function(AJS) {
    function initExportersMacro() {
        'use strict';

        // register custom dialog for macro editor

        AJS.MacroBrowser.setMacroJsOverride('scroll-tablelayout', {
            opener: function(macro) {
                openMacroEditor(macro, 'ext-tablelayout-macro-editor-dialog', null,
                    'k15t-ext-tablelayout-macro-editor')
            }
        });

        AJS.MacroBrowser.setMacroJsOverride('scroll-ignore', {
            opener: function(macro) {
                openMacroEditor(macro, 'ext-content-visibility-macro-editor-dialog', 'scroll-ignore',
                    'k15t-ext-content-visibility-macro-editor')
            }
        });

        AJS.MacroBrowser.setMacroJsOverride('scroll-ignore-inline', {
            opener: function(macro) {
                openMacroEditor(macro, 'ext-content-visibility-macro-editor-dialog', 'scroll-ignore-inline',
                    'k15t-ext-content-visibility-macro-editor')
            }
        });

        AJS.MacroBrowser.setMacroJsOverride('scroll-only', {
            opener: function(macro) {
                openMacroEditor(macro, 'ext-content-visibility-macro-editor-dialog', 'scroll-only',
                    'k15t-ext-content-visibility-macro-editor')
            }
        });

        AJS.MacroBrowser.setMacroJsOverride('scroll-only-inline', {
            opener: function(macro) {
                openMacroEditor(macro, 'ext-content-visibility-macro-editor-dialog', 'scroll-only-inline',
                    'k15t-ext-content-visibility-macro-editor')
            }
        });

        AJS.MacroBrowser.setMacroJsOverride('scroll-exportbutton', {
            opener: function(macro) {
                openMacroEditor(macro, 'ext-export-button-macro-editor-dialog', 'scroll-exportbutton',
                    'k15t-ext-exportbutton-macro-editor')
            }
        });

        AJS.MacroBrowser.setMacroJsOverride('scroll-export-button', {
            opener: function(macro) {
                openMacroEditor(macro, 'ext-export-button-macro-editor-dialog', 'scroll-export-button',
                    'k15t-ext-exportbutton-macro-editor')
            }
        });

    }

    function openMacroEditor(macro, appName, macroName, dialogId) {
        window['com.k15t.scroll.scroll-exporter-extensions:app-loaders']['k15t-cxp-macro-editor-dialog'](macro, appName, macroName,
            dialogId);
    }

    AJS.toInit(function() {

        'use strict';

        if (!AJS.Editor.currentEditMode) {
            AJS.bind('init.rte', initExportersMacro);
        } else {
            initExportersMacro();
        }
    });
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-portfolio-server-macro:jpos-editor', location = 'js/jpos-editor.js' */
define("jpos-editor",["ajs","aui/dialog2","confluence/templates","confluence/macro-js-overrides"],function(f,q,k,r){return{_validateUrl:function(a){return a.match(new RegExp(/^https?:\/\/.+\/secure\/PortfolioRoadmapConfluence\.jspa\?r=[a-zA-Z0-9]{0,30}$/))},_validateHeight:function(a){return 0<a.length&&300<=parseInt(a,10)},_renderPreview:function(){var a=this,c=a.previewContainer.offsetHeight,e=f.contextPath()+"/rest/tinymce/1/macro/preview";c={contentId:f.Meta.get("page-id"),macro:{name:a.macro.name,
params:{url:a.urlInput.value,planHeight:c}}};a._disablePreviewBtn.call(a,"Loading...");a._clearPreview.call(a);f.$.ajax({url:e,type:"POST",contentType:"application/json",data:JSON.stringify(c)}).done(function(b){a.previewContainer.innerHTML=k.JPOS.jposMacroIframe({height:a.heightInput.value});var h=document.querySelector(".jpos__iframe"),g=h.contentWindow.document;h&&(a.iframeLoadTimeout=setTimeout(a._iframeLoadTimeout.bind(a),2E4),h.addEventListener("load",function(){clearTimeout(a.iframeLoadTimeout);
a._enablePreviewBtn.call(a);g.querySelector("#main").setAttribute("style","padding: 0px; overflow: hidden");g.querySelector("body").style.overflow="hidden"}));b=b.replace("window.onload","var preventPreviewOnloadFnTrigger");b=b.replace("2px solid #efefef","none");g.open();g.write(b);g.close()})},_iframeLoadTimeout:function(){this.previewContainer.innerHTML=k.JPOS.jposIframeTimeout();this._enablePreviewBtn.call(this)},_clearPreview:function(){this.previewContainer.innerHTML="";clearTimeout(this.iframeLoadTimeout)},
_enablePreviewBtn:function(){this.previewBtn.innerHTML="Preview";this.previewBtn.removeAttribute("disabled")},_disablePreviewBtn:function(a){this.previewBtn.innerHTML=f.I18n.getText(a);this.previewBtn.setAttribute("disabled",!0)},_addListeners:function(){function a(d){b.heightInput.value=d.target.dataset.value;l.style.display="none";b._validateUrl(b.urlInput.value)&&b.insertBtn.removeAttribute("disabled")}function c(d,t){var n;return function(){var u=this,v=arguments;clearTimeout(n);
n=setTimeout(function(){d.apply(u,v);t})}}function e(){b.urlInput.value=b.urlInput.value.replace(/(%20|\s)/g,"")}for(var b=this,h=document.querySelectorAll(".jpos__size-button"),g=document.querySelector(".jpos__close-dialog"),p=document.querySelector(".jpos__field-error--url"),l=document.querySelector(".jpos__field-error--height"),m=0;m<h.length;m++)h[m].addEventListener("click",a);b.previewBtn.addEventListener("click",function(){e();b._renderPreview()});g.addEventListener("click",function(){b.dialog.hide()});
b.insertBtn.addEventListener("click",function(){e();tinymce.confluence.macrobrowser.macroBrowserComplete({name:b.macro.name,params:{url:b.urlInput.value,planHeight:b.heightInput.value}});b.dialog.hide()});b.urlInput.addEventListener("keydown",function(d){" "===d.key&&d.preventDefault()});b.urlInput.addEventListener("input",c(function(d){e();b._clearPreview();if(!b._validateUrl(this.value))return p.style.display="block",b._disablePreviewBtn.call(b,"Preview"),b.insertBtn.setAttribute("disabled",!0),
!1;p.style.display="none";b._enablePreviewBtn.call(b);b._validateHeight(b.heightInput.value)&&b.insertBtn.removeAttribute("disabled")},500));b.heightInput.addEventListener("input",c(function(d){if(!b._validateHeight(d.target.value))return l.style.display="block",b.insertBtn.setAttribute("disabled",!0),!1;l.style.display="none";b._validateUrl(b.urlInput.value)&&b.insertBtn.removeAttribute("disabled")},500))},init:function(){var a=this;r.put("portfolio-for-jira-plan",{opener:function(c){var e=document.createElement("div");
e.innerHTML=k.JPOS.jposMacroDialog();document.body.appendChild(e.firstChild);a.macro=c;a.dialog=q(".jpos__macro-dialog");a.dialog.show();a.urlInput=document.querySelector(".jpos__url-input");a.heightInput=document.querySelector(".jpos__height-input");a.insertBtn=document.querySelector(".jpos__insert-macro");a.previewBtn=document.querySelector(".jpos__preview-btn");a.previewContainer=document.querySelector(".jpos__preview-container");a._addListeners();c.params?(a.urlInput.value=c.params.url,a.heightInput.value=
c.params.planHeight||"700",a.previewBtn.focus()):(a.heightInput.value="700",a._disablePreviewBtn.call(a,"Preview"),a.insertBtn.setAttribute("disabled",!0),a.urlInput.focus())}})}}});require("confluence/module-exporter").safeRequire("jpos-editor",function(f){require("ajs").toInit(function(){f.init()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-portfolio-server-macro:jpos-editor', location = 'templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.JPOS.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.JPOS == 'undefined') { Confluence.Templates.JPOS = {}; }


Confluence.Templates.JPOS.jposMacroDialog = function(opt_data, opt_ignored) {
  return '<section class="jpos__macro-dialog aui-dialog2 aui-dialog2-xlarge aui-layer" role="dialog" aria-hidden="true" data-aui-remove-on-hide="true"><header class="jpos__macro-dialog-header aui-dialog2-header"><h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Insert an Advanced Roadmaps for Jira plan') + '</h2></header><div class="jpos__macro-dialog-content aui-dialog2-content"><form action="" onsubmit="return false" class="aui jpos__form">' + soy.$$escapeHtml('This macro currently supports Advanced Roadmaps for Jira plan sharing.') + '<div class="jpos__form-fields"><div class="jpos__field-group jpos__field-group--url"><label for="url" class="jpos__field-label">' + soy.$$escapeHtml('URL') + '</label><div class="jpos__field-group jpos__field-group--flex"><input id="url" type="text" class="jpos__url-input text" /><button tabindex="0" class="jpos__preview-btn aui-button aui-button-primary">' + soy.$$escapeHtml('Preview') + '</button></div><div class="jpos__field-label jpos__field-label--inline">' + soy.$$escapeHtml('Paste the link copied from the Confluence sharing option in Advanced Roadmaps for Jira') + '<a class="jpos__learn-more" href="https://confluence.atlassian.com/display/JIRAPortfolioServer/Sharing+roadmaps" target="_blank" rel="noopener noreferrer">' + soy.$$escapeHtml('Learn More') + '</a></div><div class="jpos__field-error jpos__field-error--url"><span class="aui-icon aui-icon-small aui-iconfont-error"></span>' + soy.$$escapeHtml('It looks like you\x27ve entered an invalid URL. Check the Confluence sharing link in Advanced Roadmaps for Jira, then try again') + '</div></div><div class="jpos__field-group jpos__field-group--height"><label for="height" class="jpos__field-label">' + soy.$$escapeHtml('Height') + '</label><div class="jpos__field-group jpos__field-group--flex"><div class="aui-buttons"><button tabindex="0" class="jpos__size-button aui-button" data-value="700" title="small"></button><button tabindex="0" class="jpos__size-button jpos__size-button--medium aui-button" data-value="900" title="medium"></button><button tabindex="0" class="jpos__size-button jpos__size-button--large aui-button" data-value="1100" title="large"></button></div><input id="height" type="number" step="10" min="300" class="jpos__height-input text" /><span class="jpos__height-unit">px</span></div><div class="jpos__field-label">' + soy.$$escapeHtml('Choose the height to display on your page') + '</div><div class="jpos__field-error jpos__field-error--height">' + soy.$$escapeHtml('Height must be at least 300px') + '</div></div></div></form><div tabindex="-1" class="jpos__preview-container"></div></div><footer class="jpos__macro-dialog-footer aui-dialog2-footer"><div class="aui-dialog2-footer-actions"><form onsubmit="return false" class="aui"><button tabindex="0" class="jpos__close-dialog aui-button aui-button-link">' + soy.$$escapeHtml('Cancel') + '</button><button tabindex="0" class="jpos__insert-macro aui-button aui-button-primary">' + soy.$$escapeHtml('Insert') + '</button></form></div></footer></section>';
};
if (goog.DEBUG) {
  Confluence.Templates.JPOS.jposMacroDialog.soyTemplateName = 'Confluence.Templates.JPOS.jposMacroDialog';
}


Confluence.Templates.JPOS.jposMacroIframe = function(opt_data, opt_ignored) {
  return '<div class="jpos__iframe-container"><iframe class="jpos__iframe" frameborder="none" src="' + soy.$$escapeHtml(opt_data.url) + '" width="100%" height="' + soy.$$escapeHtml(opt_data.height) + '"></iframe></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.JPOS.jposMacroIframe.soyTemplateName = 'Confluence.Templates.JPOS.jposMacroIframe';
}


Confluence.Templates.JPOS.jposIframeTimeout = function(opt_data, opt_ignored) {
  return '<div class="jpos__iframe-load-timeout"><span class="aui-icon aui-icon-small aui-iconfont-error"></span>' + soy.$$escapeHtml('Your preview couldn\x27t be rendered. Please check the url and try again') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.JPOS.jposIframeTimeout.soyTemplateName = 'Confluence.Templates.JPOS.jposIframeTimeout';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:space-page-picker-shim', location = 'js/space-page-picker-shim.js' */
define("confluence-inline-tasks/space-page-picker-shim",["confluence-ui-components/js/space-page-picker"],function(e){function f(a){var c={page:[],space:[]};if(!a)return c;a.split(",").forEach(function(b){b=b.split(":");c[b[0]].push(b[1])});return c}return{build:function(a){return e.build(a)},setValue:function(a,c){return e.setValue(a,c)},splitStringToMap:f,combineMapToString:function(a){var c=a.space;a=a.page;var b=[];c&&(b=b.concat(_.map(c.split(","),function(d){return"space:"+d})));a&&(b=b.concat(_.map(a.split(","),
function(d){return"page:"+d})));return b.join(",")},getValueAsMap:function(a){return f(a.val())}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-macro-browser', location = 'js/macro-browser-overrides.js' */
define("confluence-inline-tasks/macro-browser-overrides",["jquery","ajs","confluence/templates","confluence-macro-browser/macro-browser","confluence-inline-tasks/space-page-picker-shim"],function(e,h,k,f,d){return{fields:{string:{spaceAndPage:function(a){var b=a.multiple?"autocomplete-multi-space-and-page":"autocomplete-space-and-page",g=e(k.MacroBrowser.macroParameter()),c=g.find("input[type\x3d'text']");c.addClass(b).attr("data-none-message","Not found");
a.required&&c.keyup(f.processRequiredParameters);c.auiSelect2(d.build({multiple:a.multiple,orgElement:c,inputSpaceId:"legacy-macro-param-spaces",inputSpaceCatId:"legacy-macro-param-space-cats",inputPageId:"legacy-macro-param-pages"}));return f.Field(g,c,{setValue:function(l){d.setValue(l,c)}})}}},beforeParamsSet:function(a){var b=d.combineMapToString({page:a.pages,space:a.spaces});b&&(a.spaceAndPage=b);delete a.pages;delete a.spaces;return a},beforeParamsRetrieved:function(a){var b=d.splitStringToMap(a.spaceAndPage);
b.page.length&&(a.pages=b.page.join(","));b.space.length&&(a.spaces=b.space.join(","));delete a.spaceAndPage;return a}}});require("confluence/module-exporter").safeRequire("confluence-inline-tasks/macro-browser-overrides",function(e){require("confluence-macro-browser/macro-browser").setMacroJsOverride("tasks-report-macro",e)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:confluence-inlineTasks-utils', location = '/js/util.js' */
define("confluence-inline-tasks/util",["jquery"],function(a){return{NODE_TYPE:{ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12},KEY:{BACKSPACE:8,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,INS:45,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46,META:91},addContentEditableIfApplicable:function(b){a(b).attr({contenteditable:!1,
class:"non-editable",onselectstart:"return false;"})}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-inline-tasks/util","Confluence.InlineTasks.Util");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:datepicker1', location = '/js/date-picker1.js' */
define("confluence-inline-tasks/date-picker1",["jquery","ajs","confluence-editor/utils/tinymce-node-utils"],function(d,k){function h(v,c){var n;var b={};var x=C++;var a=d(v);a.attr("data-aui-dp-uuid",x);c=d.extend(void 0,h.prototype.defaultOptions,c);b.getField=function(){return a};b.getOptions=function(){return c};var F=function(){var f,r,p;b.hide=function(){l.hide()};b.show=function(){l.show()};b.setDate=function(g){"undefined"!==typeof f&&f.datepicker("setDate",g)};b.getDate=function(){if("undefined"!==
typeof f)return f.datepicker("getDate")};var D=function(g){p.off();if(c.hint){var e=d("\x3cdiv/\x3e").addClass("aui-datepicker-hint");e.append("\x3cspan/\x3e").text(c.hint);p.append(e)}f=d("\x3cdiv/\x3e");f.attr("data-aui-dp-popup-uuid",x);p.append(f);e={dateFormat:c.dateFormat,defaultDate:a.val(),maxDate:a.attr("max"),minDate:a.attr("min"),nextText:"\x3e",onSelect:function(m){a.val(m);a.change();b.hide();r=!0;a.focus();c.onSelect&&c.onSelect.call(this,m)},onChangeMonthYear:function(){setTimeout(l.refresh,
0)},prevText:"\x3c"};d.extend(e,g);-1<c.firstDay&&(e.firstDay=c.firstDay);"undefined"!==typeof a.attr("step")&&k.debug("WARNING: The date picker polyfill currently does not support the step attribute!");f.datepicker(e);d("body").on("keydown",t);a.on("focusout keydown",y);a.on("propertychange keyup input paste",z)};var t=function(g){var e=d(g.target),m=e.closest(p).length||e.is(a),E=e.closest(".ui-datepicker-header").length;!m&&!E||g.keyCode===k.keyCode.ESCAPE?b.hide():e[0]!==a[0]&&g.preventDefault()};
var y=function(){w||(d("body").on("focus blur click mousedown","*",t),w=!0)};var A=function(){r?r=!1:b.show()};var z=function(){d(this).val()&&(f.datepicker("setDate",a.val()),f.datepicker("option",{maxDate:a.attr("max"),minDate:a.attr("min")}))};b.destroyPolyfill=function(){b.hide();a.attr("placeholder",null);a.off("propertychange keyup input paste",z);a.off("focus click",A);a.off("focusout keydown",y);d("body").off("keydown",t);h.prototype.browserSupportsDateField&&(a[0].type="date");"undefined"!==
typeof f&&f.datepicker("destroy");delete b.destroyPolyfill;delete b.show;delete b.hide};var w=r=!1;c.languageCode in h.prototype.localisations||(c.languageCode="");var B=h.prototype.localisations,u="",q=9>k.versionDetails.major?240:255;"large"===B.size&&(q=325,u="aui-datepicker-dialog-large");q={hideCallback:function(){d("body").off("focus blur click mousedown","*",t);w=!1;n&&n._datePickerPopup&&delete n._datePickerPopup},hideDelay:null,noBind:!0,persistent:!0,closeOthers:!1,width:q};c.position&&
(q.calculatePositions=function(g,e){g=d(g[0]);return c.position.call(this,g,e)});var l=k.InlineDialog(a,void 0,function(g,e,m){"undefined"===typeof f&&(p=g,D(B));if(n=d(e).closest(".aui-inline-dialog").get(0))n._datePickerPopup=l;m()},q);l.addClass("aui-datepicker-dialog");l.addClass(u);a.on("focus click",A);a.attr("placeholder",c.dateFormat);c.overrideBrowserDefault&&h.prototype.browserSupportsDateField&&(a[0].type="text",u=a[0].getAttribute("value"))&&(a[0].value=u)};b.reset=function(){"function"===
typeof b.destroyPolyfill&&b.destroyPolyfill();h.prototype.browserSupportsDateField&&!c.overrideBrowserDefault||F()};b.reset();return b}var C=0;h.prototype.browserSupportsDateField=k.DatePicker.prototype.browserSupportsDateField;h.prototype.defaultOptions={overrideBrowserDefault:!1,firstDay:-1,languageCode:d("html").attr("lang")||"en-AU",dateFormat:d.datepicker.W3C};h.prototype.localisations=k.DatePicker.prototype.localisations;d.fn.inlineTasksDatePicker1=function(v){return new h(this,v)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:dateutil', location = '/js/dateutil.js' */
define("confluence-inline-tasks/dateutil",["jquery","ajs","confluence/position","confluence-inline-tasks/util","confluence-inline-tasks/date-picker1"],function(m,n,t,v,y){const r=n.Meta.get("user-locale").replace("_","-"),w=function(a=r){const b=["de-DE","ja-JP"],c=["fi-FI","ko-KR"];c.push("is-IS");let e="short",d="numeric";c.includes(a)?e="numeric":b.includes(a)&&(d=e="2-digit");return{year:"numeric",month:e,day:d}},p={isDateStringValid:function(a){return isNaN(new Date(a))?!1:!0},parseDate:function(a){return p.isDateStringValid(a)?
(a=a.split("-"),new Date(parseInt(a[0]),parseInt(a[1])-1,parseInt(a[2]))):null},getPatternByLocale:function(a=r){let b="";(new Intl.DateTimeFormat(a)).formatToParts().forEach(c=>{b="literal"===c.type?b+c.value:"year"===c.type?b+"yyyy":b+c.type[0]+c.type[0]});return b},getDateTime:function(a){return`${a.getFullYear()}-${(a.getMonth()+1).toString().padStart(2,0)}-${a.getDate().toString().padStart(2,0)}`},getLozengeTime:function(a,b=r){return(new Intl.DateTimeFormat(b,w(b))).format(a)},getInputDate:function(a,
b=r){return(new Intl.DateTimeFormat(b,{year:"numeric",month:"2-digit",day:"2-digit"})).format(a)},convertDateIntoHtml:function(a,b=""){var c=m("\x3cdiv\x3e"),e=p.getLozengeTime(a);a=m("\x3ctime\x3e",{datetime:p.getDateTime(a)});v.addContentEditableIfApplicable(a);b&&a.attr("class",b);a.text(e);c.append(a);return c.html()},insertDateIntoCurrentCursor:function(a,b,c){var e=require("tinymce"),d=require("confluence-editor/utils/tinymce-node-utils");e=e.activeEditor;a=p.convertDateIntoHtml(a,b);a=m(a,
e.getDoc())[0];d=d.replaceSelection(a);c&&e.execCommand("mceInsertContent",!1,c,{skip_undo:!0});c={context:m(e.selection.getRng(!0).startContainer).closest("li[data-inline-task-id]").length?"task":"page",trigger:"character"};n.trigger("analyticsEvent",{name:"confluence-spaces.date.added",data:c});return d},getDateByPartialString:function(a,b=new Date,c=r){if(""===a)return b;const e=a.match(/[\d]+/g);if(!e)return null;let d,h,g;const k=new Date(b);(new Intl.DateTimeFormat(c,{year:"numeric",month:"2-digit",
day:"2-digit"})).formatToParts(k).filter(f=>"literal"!==f.type).forEach((f,q)=>{"year"===f.type?(d=k.getFullYear().toString(),e[q]&&(d=d.substring(0,d.length-e[q].length)+e[q])):"month"===f.type?h=(parseInt(e[q])||parseInt(f.value))-1:"day"===f.type&&(g=e[q]||f.value)});k.setFullYear(d,h,g);a=`${d}-${(h+1).toString().padStart(2,0)}-${g.toString().padStart(2,0)}`;return p.isDateStringValid(a)?k:null},datepicker:{POSITION_ABOVE:!0,POSITION_BELOW:!1,POSITION_RIGHT:!0,POSITION_LEFT:!1,dropDownStillFitsVertically:function(a,
b,c){return a===this.POSITION_ABOVE?b.above>=c:b.below>=c},dropDownStillFitsHorizontally:function(a,b,c){return a===this.POSITION_RIGHT?b.right>=c:b.left>=c},getPreferredHorizontalPosition:function(a,b){return a.right>=b?this.POSITION_RIGHT:a.left>=b?this.POSITION_LEFT:a.right>a.left?this.POSITION_RIGHT:this.POSITION_LEFT},getPreferredVerticalPosition:function(a,b){return a.below>=b?this.POSITION_BELOW:a.above>=b?this.POSITION_ABOVE:a.below>a.above?this.POSITION_BELOW:this.POSITION_ABOVE},calculateDatepickerPosition:function(a){var b=
this;return function(c,e){var d=require("confluence-editor/editor/atlassian-editor");e=require("confluence-editor/editor/atlassian-editor-content");d=d.Rte.getEditorFrame();void 0===t.spaceLeftRight&&(t.spaceLeftRight=function(x,u){u=u.position().left;return{left:u,right:m(x).width()-u}});var h=t.spaceAboveBelow(d,a);var g=t.spaceLeftRight(d,a);var k=e.offset(a);e=c.outerHeight(!0);c=c.outerWidth(!0);var f=e+16;var q=c+0;d=b.POSITION_BELOW;var l=b.POSITION_RIGHT;d&&(b.dropDownStillFitsVertically(d,
h,f)||(d=null));d||(d=b.getPreferredVerticalPosition(h,f));l&&(b.dropDownStillFitsHorizontally(l,g,f)||(l=null));l=b.getPreferredHorizontalPosition(g,q);h=d===b.POSITION_ABOVE?k.top-e-16:k.top+a.height()+16;g=l===b.POSITION_RIGHT?k.left-0:k.left+a.outerWidth()-c;h={top:h,left:g};l=l===b.POSITION_RIGHT?a.outerWidth()/2:c-a.outerWidth()/2;if(0>l||l>c)l=c/10;return{displayAbove:d,popupCss:h,arrowCss:{left:l,top:d===b.POSITION_ABOVE?e:-8}}}},getHintTextOfDatePicker:function(a){return a?"Select a due date for this task.":
"Select a date."},create:function(a){var b=a.$attachTo,c=a.$positionTo,e=a.startDate,d=a.onSelect;a=a.isSetDueDate;var h=m("\x3cinput\x3e").attr("type","date").addClass("aui-date-picker").css("display","none"),g=h.inlineTasksDatePicker1({overrideBrowserDefault:!0,dateFormat:"yy-mm-dd",languageCode:n.Meta.get("user-locale")&&n.Meta.get("user-locale").split("_")[0],position:this.calculateDatepickerPosition(c),onSelect:function(f){d(f);k()},hint:this.getHintTextOfDatePicker(a)}),
k=function(){g&&g.destroyPolyfill&&g.destroyPolyfill();h&&h.remove();m(".aui-datepicker-dialog").remove();h=g=null};g.show();g.setDate(e);m(".aui-datepicker-dialog .aui-datepicker-hint").addClass(a?"set-duedate":"set-date");b.before(h);return{die:function(){k()},show:function(){g.show()},hide:function(){g.hide()},getContainer:function(){return h},setDate:function(f){n.debug("Set date: "+f);g.setDate(p.getDateByPartialString(f))},placeDatePicker:function(){var f=n.InlineDialog.current;(f=f&&f.popup)&&
f.refresh()}}}}};return p});require("confluence/module-exporter").exportModuleAsGlobal("confluence-inline-tasks/dateutil","Confluence.InlineTasks.DateUtil");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:editor-autocomplete-date-js', location = '/js/editor-plugin/date-autocomplete-help-dialog.js' */
AJS.toInit(function(){Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.Autoformat&&Confluence.KeyboardShortcuts.Autoformat.push({action:"//",context:"autoformat.autocomplete",description:"Date"})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:editor-autocomplete-date-js', location = '/js/editor-plugin/autocomplete-manager.js' */
(function(g){var e=window.Confluence||{};e.Editor=e.Editor||{};e.Editor.AutoComplete=e.Editor.AutoComplete||{};var c=e.InlineTasks.Util.KEY,p=e.InlineTasks.DateUtil,h=e.Editor.AutoComplete;h.SETTING_DEFAULT={leadingChar:"",isDataValid:function(a){return!1},backWords:0,onBeforeDie:function(){},onAfterStart:function(){},onScroll:function(){}};h.Manager=function(a){this.ed=AJS.Rte.getEditor();this.settings=g.extend({},h.SETTING_DEFAULT,a);this.log=AJS.debug;this.control=null};h.Manager.prototype={start:function(a){AJS.trigger("synchrony.stop",
{id:"confluence.date-autocomplete-manager.plugin"});this.log("startAutoComplete - Started");var f=g.extend({},this.settings,a);this.control=e.Editor.Autocompleter.Control(this.ed,f);if(!this.control)return!1;this.attachEventsToControl();f.onAfterStart&&f.onAfterStart({date:a.date,isTriggerFromOrphan:a.isTriggerFromOrphan?!0:!1});return!0},attachEventsToControl:function(){var a=this,f=a.control,k=a.log,q=a.settings;if("function"===typeof this.settings.onBeforeDie){var l=this.control.die,m=!1;this.control.die=
function(){m||(m=!0,a.settings.onBeforeDie.apply(a.control,arguments),a.dateInserted()?(l.apply(a.control,[!0]),AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.daterecognition.killed"})):l.apply(a.control,arguments))}}var r=_.bind(_.throttle(a.settings.onScroll,40),this);g.extend(f,{onBeforeKey:function(b,d){b.keyCode!==c.ESCAPE&&b.keyCode!==c.ENTER&&a.control&&a.control.getContainer().addClass("isDirty");return b.keyCode===c.DOWN||b.keyCode===c.UP||b.keyCode===c.ENTER?(tinymce.dom.Event.cancel(b),
!1):b.keyCode===c.ESCAPE||b.keyCode===c.TAB||b.keyCode===c.BACKSPACE&&!d?(k("autoCompleteControl.onBeforeKey - killing autoCompleteControl"),this.die(b.keyCode===c.BACKSPACE),!1):!0},onKeyPress:function(b,d){d=b.which;if(b.keyCode===c.ENTER)return tinymce.dom.Event.cancel(b),!1;b=String.fromCharCode(d);this.settings.endChars.includes(b)&&(k("autoCompleteControl.onKeyPress - caught autocomplete-closing char - character"),f.die());return!0},onAfterKey:function(b,d){var n=g("#autocomplete-trigger",a.control.getContainer()),
t=n.text();return 0<n.length&&t!==a.settings.leadingChar?(k("after","dying because of: trigger text is modified"),a.reset(),!1):b.keyCode===c.ENTER?(q.isDataValid(d)?f.update(d):(k("autoCompleteControl.onAfterKey - closing autocomplete due to invalid data - "+d),f.die(!1)),!1):a.dateInserted()&&10<d.length&&!p.getDateByPartialString(d)?(a.reset(),!1):!0},onDeath:function(){a.reset()},onScroll:function(){a.isAlive()&&r()}})},isAlive:function(){return this.control&&!this.control.dying},reset:function(){this.control&&
(this.control.die(),this.control=null,AJS.trigger("synchrony.start",{id:"confluence.date-autocomplete-manager.plugin"}))},dateInserted:function(a){return!0===a?this.control.getContainer().addClass("hasDateInserted"):!1===a?this.control.getContainer().removeClass("hasDateInserted"):this.control.getContainer().hasClass("hasDateInserted")},dirty:function(a){return!0===a?this.control.getContainer().addClass("isDirty"):this.control.getContainer().hasClass("isDirty")},reattach:function(){var a=e.Editor.Autocompleter.Control.removeOrphanedControl();
return a&&a.leadingChar===this.settings.leadingChar?(this.reset(),this.start({backWords:1,isTriggerFromOrphan:!0})):!1}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:editor-autocomplete-date-js', location = '/js/editor-plugin/date-autocomplete.js' */
(function(g,p){var w=Confluence.InlineTasks.Util,n=w.NODE_TYPE,l=w.KEY,k=Confluence.InlineTasks.DateUtil,m=null,d=null,y=!1,z=p.dom.TreeWalker,t=p.Env.browser,x=t.isSafari()||("isChromium"in t?t.isChromium():t.isChrome()),f={initDateAutoCompleteObject:function(b){Confluence.Editor.Autocompleter.Settings["//"]={ch:"//",endChars:[],update:function(a,c){d.picker.die();(a=c===k.getPatternByLocale()?new Date:k.getDateByPartialString(c))&&k.insertDateIntoCurrentCursor(a,"","\x26nbsp;");d.dateInserted()&&
AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.daterecognition.used"});d.reset();b.undoManager.add();AJS.trigger("synchrony.start",{id:"confluence.date-autocomplete.plugin"})}};d=new Confluence.Editor.AutoComplete.Manager({leadingChar:"//",isDataValid:function(a){return!d.dirty()||k.getDateByPartialString(a)},onBeforeDie:function(){d.picker&&d.picker.die();if(d.control){var a=g(d.control.getContainer());d.dirty()||a.find("#autocomplete-search-text").remove()}},onAfterStart:function(a){a&&
a.date?(f.fillPlaceholderDateAutoComplete(b,a.date,!0),d.dirty(!0),d.dateInserted(!0)):a&&!a.isTriggerFromOrphan&&(f.fillPlaceholderDateAutoComplete(b,k.getPatternByLocale(),!1),d.dateInserted(!1));a=d.control.text();a=k.getDateByPartialString(a)||new Date;f.bindDatePickerToAutoComplete(a)},onScroll:function(){d.picker&&d.picker.placeDatePicker()}})},activateDateAutocomplete:function(b,a,c){b=Object.assign({},c,a);b.hasOwnProperty("insertedFromMenu")||(b.insertedFromMenu=!1);if(!d.isAlive()&&!d.start(b)&&
!b.insertedFromMenu)return m.execCommand("mceInsertContent",!1,"//",{skip_undo:!0}),!1},bindDatePickerToAutoComplete:function(b){var a=d.control&&d.control.getContainer();if(a.length){a.addClass("date-autocomplete");a.find("#autocomplete-search-text span").addClass("inserting");var c=f.isInsideTaskAndFirstTimeNode(a);d.picker=k.datepicker.create({$attachTo:a,$positionTo:a,startDate:b,onSelect:function(e){d.control.update(k.getInputDate(k.parseDate(e)))},isSetDueDate:c})}},fillPlaceholderDateAutoComplete:function(b,
a,c){var e=d.control.getContainer().find("#autocomplete-search-text span");e.text(AJS.Rte.HIDDEN_CHAR+a);var h=b.dom.createRng();h.setStart(e[0].firstChild,1);h.setEnd(e[0].firstChild,a.length+1);c&&h.collapse(!1);b.selection.setRng(h)},autocompleteDoubleSlash:function(b,a){b=a.handlerManager;var c=a.ed;a=a.createHandler;a=a(/(?:\s|\xA0|^|\ufeff|\u200b)(\/)$/,function(){c.execCommand("mceConfInsertDateAutocomplete",!1,{},{skip_undo:!0})},!0,`#${6>p.majorVersion?"autocomplete":"autocomplete-container"}`);
b.registerHandler(47,a)},registerTriggerDoubleSlash:function(b){b.addCommand("mceConfInsertDateAutocomplete",f.activateDateAutocomplete);b.addCommand("confMenuInsertDate",function(){AJS.trigger("analytics",{name:"editor.insert-data-from-menu"});m.execCommand("mceConfInsertDateAutocomplete",!1,{insertedFromMenu:!0},{skip_undo:!0})}.bind(this));AJS.bind("confluence.editor.registerHandlers",this.autocompleteDoubleSlash)},isTimeNode:function(b){return b&&b.nodeType===n.ELEMENT_NODE&&"time"===b.tagName.toLowerCase()},
getTimeNodeAtCursor:function(b){b||(b=m);var a=b.selection.getNode();if(f.isTimeNode(a))return a;a=b.selection.getStart();if(f.isTimeNode(a))return a;a=b.selection.getEnd();if(f.isTimeNode(a))return a},makeTimeNodesUnEditable:function(b){b.each(function(){var a=g(this);""===g.trim(a.text())&&a.remove();x&&a.remove("br.Apple-interchange-newline");w.addContentEditableIfApplicable(this)})},wrapTimeNodesWithHiddenChar:function(b){b.each(function(){var a=g(this);this.previousSibling&&this.previousSibling.nodeType===
n.TEXT_NODE&&""!==this.previousSibling.nodeValue||a.before(AJS.Rte.HIDDEN_CHAR);this.nextSibling&&this.nextSibling.nodeType===n.TEXT_NODE&&""!==this.previousSibling.nodeValue||a.after(AJS.Rte.HIDDEN_CHAR)})},putCursorAtEdge:function(b,a,c){(c=!!c)?a.nextSibling&&a.nextSibling.nodeType===n.TEXT_NODE||g(a).after(b.dom.doc.createTextNode("")):a.previousSibling&&a.previousSibling.nodeType===n.TEXT_NODE||g(a).before(b.dom.doc.createTextNode(""));var e=b.selection.dom.createRng();e.selectNode(c?a.nextSibling:
a.previousSibling);e.collapse(c);b.selection.setRng(e)},findFirstTimeNodeInClosestBlock:function(b,a,c){var e=new z(a,b.getBody()),h=a,r=0;do{if(1===r&&f.isTimeNode(a))return a;var q=c?a.previousSibling:a.nextSibling;a!==h&&q&&(b.dom.isBlock(a)||b.dom.isBlock(q))&&r++}while((a=c?e.next():e.prev())&&2>r)},findFirstTimeNodeNearby:function(b,a,c){var e=a,h=new z(a,b.getBody());do{if(f.isTimeNode(a))return a;if(b.dom.isBlock(a)||a!==e&&a.nodeType===n.TEXT_NODE&&""!==a.nodeValue)break}while(a=c?h.next():
h.prev())},convertInvalidTimeNodeToPlainText:function(b){b.each(function(){var a=g(this),c=a.attr("datetime");k.isDateStringValid(c)||(a.before(a.text()),a.remove())})},isInsideTaskAndFirstTimeNode:function(b){b=g(b);var a=b.closest("ul.inline-task-list \x3e li[data-inline-task-id]");return a.length?a.find("time, span.date-autocomplete")[0]===b[0]:!1}},E=function(b){b=b.keyCode;if(b===l.BACKSPACE||b===l.DELETE){b=b===l.DELETE;var a=m.selection.getRng(!0),c=a.startContainer,e=c;if(c.nodeType!==n.TEXT_NODE||
(b?a.startOffset===c.nodeValue.length:0===a.startOffset))c.nodeType===n.ELEMENT_NODE&&(e=b?c.childNodes.length===a.startOffset?c:c.childNodes.item(a.startOffset):0===a.startOffset?c:c.childNodes.item(a.startOffset-1)),(b=f.findFirstTimeNodeNearby(m,e,b))&&m.dom.remove(b)}},F=function(b){var a=g(b.target);if(a.is("time")){AJS.trigger("synchrony.stop",{id:"confluence.date-autocomplete.plugin"});var c=a.closest("li[data-inline-task-id]").length?"task":"page";AJS.trigger("analyticsEvent",{name:"confluence-spaces.date.clicked",
data:{mode:"editor",context:c}});var e=a.closest("body"),h=function(){AJS.Rte.unbindScroll("date-lozenge-date-picker");q.die();AJS.trigger("synchrony.start",{id:"confluence.date-autocomplete.plugin"})};e.one("keydown click",h);b=k.parseDate(a.attr("datetime"));var r=f.isInsideTaskAndFirstTimeNode(a),q=k.datepicker.create({$attachTo:a,$positionTo:a,startDate:b,onSelect:function(u){var v=k.parseDate(u);u=k.getDateTime(v);v=k.getLozengeTime(v);u!==a.attr("datetime")&&AJS.trigger("analyticsEvent",{name:"confluence-spaces.date.changed",
data:{context:c}});a.attr("datetime",u);a.text(v);e.unbind("keydown click",h);AJS.trigger("synchrony.start",{id:"confluence.date-autocomplete.plugin"})},isSetDueDate:r});b=_.bind(_.throttle(function(){q&&AJS.Rte.isAnyPartShown(a)?q.placeDatePicker():h()},40),this);AJS.Rte.bindScroll("date-lozenge-date-picker",b)}},G=function(b){var a=b.keyCode;a===l.UP||a===l.DOWN||a===l.LEFT||a===l.RIGHT||a===l.HOME||a===l.END||a===l.PAGEDOWN||a===l.PAGEUP||b.metaKey||b.ctrlKey||b.altKey||!d.control||!d.picker||
(b=d.control.text(),d.picker.setDate(b))},H=function(){var b=g(m.dom.doc).find("time");f.makeTimeNodesUnEditable(b);f.wrapTimeNodesWithHiddenChar(b)},A=function(b,a,c){f.convertInvalidTimeNodeToPlainText(g(c.node).find("time"))},B=function(b,a,c){b=g(c.node).find("time");f.makeTimeNodesUnEditable(b)},C=function(b,a,c){if(f.getTimeNodeAtCursor(m))return c.content="",!1},I=function(b){var a=b.keyCode;if(a===l.UP||a===l.DOWN){b=m.selection.getRng(!0);var c=b.startContainer,e=c;a=a===l.DOWN;c.nodeType===
n.ELEMENT_NODE&&(e=a?c.childNodes.length===b.startOffset?c:c.childNodes.item(b.startOffset):0===b.startOffset?c:c.childNodes.item(b.startOffset-1));(b=f.findFirstTimeNodeInClosestBlock(m,e,a))&&f.wrapTimeNodesWithHiddenChar(g(b))}},J=function(b){b=b.element.nodeType===n.TEXT_NODE?b.element.parentNode:b.element;f.isTimeNode(b)&&(y||1<m.selection.getRng().startOffset?f.putCursorAtEdge(m,b,!0):f.putCursorAtEdge(m,b,!1))},D=function(){d&&d.reattach()},K={init:function(b){f.initDateAutoCompleteObject(b);
f.registerTriggerDoubleSlash(b);m=b;b.on("contextmenu",function(){d.reset()});b.on("SetContent",H);b.on("click",F);b.on("keyup",G);x&&(b.on("keydown",I),b.on("init",function(){g(document).bind("postPaste",B)}),b.on("remove",function(){g(document).unbind("postPaste",B)}));b.on("keyup",function(a){y=a.keyCode===l.RIGHT;var c=b.selection.getRng(!0),e=c.commonAncestorContainer,h=!!e&&e.data;h&&!AJS.$(e).closest("pre,.text-placeholder").length&&(String.prototype.slice.apply(h,[-11]),48<=a.keyCode&&57>=
a.keyCode||96<=a.keyCode&&105>=a.keyCode)&&(a=String.prototype.slice.apply(h,[-10]),/(^| )\d{2}[\/\-]\d{2}[\/\-]\d{4}$/.test(h)&&k.getDateByPartialString(a)&&(c.setStart(c.commonAncestorContainer,c.endOffset-a.length),b.undoManager.add(),b.undoManager.beforeChange(),b.selection.setRng(c),b.execCommand("mceConfInsertDateAutocomplete",!1,{date:a},{skip_undo:!0}),AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.daterecognition.triggered"})))});p.Env.browser.isFirefox()&&(b.on("keydown",E),
b.on("init",function(){g(document).bind("prePaste",C)}),b.on("remove",function(){g(document).unbind("prePaste",C)}));if(x||p.Env.browser.isFirefox())b.on("NodeChange",J);b.on("Undo",D);b.on("Redo",D);b.on("init",function(){g(document).bind("postPaste",A)});b.on("remove",function(){g(document).unbind("postPaste",A);AJS.unbind("confluence.editor.registerHandlers",f.autocompleteDoubleSlash)});AJS.bind("editor.remote.change",function(){f.makeTimeNodesUnEditable(g(b.dom.doc).find("time"))})},getInfo:function(){return{longname:"Insert Date Autocomplete",
author:"Atlassian",authorurl:"http://www.atlassian.com",version:p.majorVersion+"."+p.minorVersion}}};(function(){p.PluginManager.add("dateautocomplete",function(){return K});AJS.Rte.BootstrapManager.addTinyMcePluginInit(function(b){b.plugins+=",dateautocomplete"})})()})(AJS.$,tinymce);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.pattern.page-layout', location = 'aui.chunk.0d262d40682045cde417--c6ecd211a20a578ddb4f.js' */
"use strict";(self.webpackChunk_auiRuntime=self.webpackChunk_auiRuntime||[]).push([[9376],{8036:(u,e,s)=>{s.r(e)}},u=>{u.O(0,[8196,3039,713,4389],(()=>{return e=8036,u(u.s=e);var e}));u.O()}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.036a05e5ff', location = 'aui.chunk.978a9e33ad61bd1e90fc--34149b67a7674fce91ed.js' */
"use strict";(self.webpackChunk_auiRuntime=self.webpackChunk_auiRuntime||[]).push([[372],{4627:(e,t,a)=>{a.r(t),a.d(t,{NavigationEl:()=>i.NavigationEl,navigation:()=>i.default});var i=a(1957)},1957:(e,t,a)=>{a.r(t),a.d(t,{NavigationEl:()=>o,default:()=>c});var i=a(6110),n=a(7159),s=a(7843),r=a(6862),l=a(2949);function d(e){if(this.$el=(0,n.default)(e).closest(".aui-nav"),this.$el.length>1)return this.$el.map((function(e,t){return new d(t)}))[0];if(this.$el.data("aui-navigation"))return this.$el.data("aui-navigation");this.$el.data("aui-navigation",this),this.$treeParent=this.$el.parent("li[aria-expanded]"),this.$subtreeToggleIcon=this.$treeParent.children(".aui-nav-subtree-toggle").children("span.aui-icon"),this.$el.children("li:has(.aui-nav-selected)").addClass("aui-nav-child-selected");var t=this.$el.children(".aui-nav-selected");t.parents(".aui-nav > [aria-expanded=false]").add(t.filter("[aria-expanded=false]")).each((function(){u((0,n.default)(this).children(".aui-nav")).expand()}));var a=this.$el.find("> li[aria-expanded] > .aui-nav-subtree-toggle");return a.on("click",(function(){u((0,n.default)(this).siblings(".aui-nav")).toggle()})),a.each((function(){var e=(0,n.default)(this).parent("li[aria-expanded]"),t=(0,n.default)(this).find(".aui-icon"),a="true"===e.attr("aria-expanded");t.text(a?"Collapse":"Expand")})),this}d.prototype.isNested=function(){return 1===this.$treeParent.length},d.prototype.isCollapsed=function(){return"false"===this.$treeParent.attr("aria-expanded")},d.prototype.expand=function(){return this.$treeParent.attr("aria-expanded","true"),this.$subtreeToggleIcon.removeClass("aui-iconfont-collapsed").addClass("aui-iconfont-expanded").text("Collapse"),this},d.prototype.collapse=function(){return this.$treeParent.attr("aria-expanded","false"),this.$subtreeToggleIcon.removeClass("aui-iconfont-expanded").addClass("aui-iconfont-collapsed").text("Expand"),this},d.prototype.toggle=function(){return this.isCollapsed()?this.expand():this.collapse(),this};const u=(0,l.default)("navigation",d),o=(0,s.default)("aui-nav",{type:s.default.type.CLASSNAME,attached:function(e){new d(e)},detached:function(e){(0,n.default)(e).removeData()}});(0,r.default)("navigation",u);const c=u}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.component.nav', location = 'aui.chunk.0b53ee273654dad3b25f--13007772beb360a0b324.js' */
"use strict";(self.webpackChunk_auiRuntime=self.webpackChunk_auiRuntime||[]).push([[8370],{},u=>{u.O(0,[7224,7035,8196,3469,3039,2276,713,4678,7981,4544,113,5260,5192,372],(()=>{return e=4627,u(u.s=e);var e}));u.O()}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.component.tabs', location = 'aui.chunk.28f9a0060c50a611b9ee--7551f87e167ab7a6b1b2.js' */
"use strict";(self.webpackChunk_auiRuntime=self.webpackChunk_auiRuntime||[]).push([[4733],{9606:(t,a,e)=>{e.r(a),e.d(a,{TabContainerEl:()=>R,TabItemEl:()=>E,TabPaneEl:()=>O});e(7743),e(2596);var i=e(1086),n=e(3477),r=e(7159),s=e(6862),o=e(8660);function u(t,a=""){var e=(0,r.default)(t),i=a||!1;e.each((function(){var t=(0,r.default)(this);t.attr("id")||t.attr("id",(0,o.default)(i))}))}(0,s.default)("_addID",u);const d=u;function l(t){return(t=(0,r.default)(t)).prop("scrollWidth")>t.prop("clientWidth")}(0,s.default)("isClipped",l);const c=l;var f=e(7843),b=window.skateTemplateHtml,p="_internal-aui-tabs-",v='.aui-tabs.horizontal-tabs[data-aui-responsive]:not([data-aui-responsive="false"]), aui-tabs[responsive]:not([responsive="false"])';function h(t){let a=(0,r.default)(t),e=String(a.attr("href")||"").trim();return 0===e.indexOf("#")?e.substr(1):null}function m(t){let a=h(t);return a?document.getElementById(a):null}var g={totalTabsWidth:function(t,a){var e=this.totalVisibleTabWidth(t),i=0;return a.find("li").each((function(t,a){i+=parseInt(a.getAttribute("data-aui-tab-width"))})),e+i},totalVisibleTabWidth:function(t){var a=0;return t.each((function(t,e){a+=(0,r.default)(e).outerWidth()})),a},removeResponsiveDropdown:function(t,a){t.remove(),a.remove()},createResponsiveDropdownTrigger:function(t,a){var e=`<li class="menu-item aui-tabs-responsive-trigger-item">\n            <a\n                class="aui-dropdown2-trigger aui-tabs-responsive-trigger aui-dropdown2-trigger-arrowless"\n                id="aui-tabs-responsive-trigger-${a}"\n                aria-haspopup="true"\n                aria-controls="aui-tabs-responsive-dropdown-${a}"\n                href="#aui-tabs-responsive-dropdown-${a}">...</a>\n            </li>`;return t.append(e),t.find(".aui-tabs-responsive-trigger-item")},createResponsiveDropdown:function(t,a){var e='<div class="aui-dropdown2 aui-tabs-responsive-dropdown" id="aui-tabs-responsive-dropdown-'+a+'"><ul></ul></div>';return t.append(e),t.find("#aui-tabs-responsive-dropdown-"+a)},findNewVisibleTabs:function(t,a,e){function i(t,a,e){return t+a<=e}for(var n=0,s=0;i(n,e,a)&&s<t.length;s++){n+=(0,r.default)(t[s]).outerWidth(!0)}return t.slice(0,s-1)},moveVisibleTabs:function(t,a,e){for(var i=e.find("a").attr("aria-controls"),n=(0,r.default)("#"+i),s=this.findNewVisibleTabs(t,a.outerWidth(),e.parent().outerWidth(!0)),o=s.length-1,u=t.length-1;u>=o;u--){var d=(0,r.default)(t[u]);this.moveTabToResponsiveDropdown(d,n,e)}return(0,r.default)(s)},moveTabToResponsiveDropdown:function(t,a,e){var i=t.find("a");t.attr("data-aui-tab-width",t.outerWidth(!0)),i.addClass("aui-dropdown2-radio aui-tabs-responsive-item"),t.hasClass("active-tab")&&(i.addClass("aui-dropdown2-checked"),e.addClass("active-tab")),a.find("ul").prepend(t)},moveInvisibleTabs:function(t,a,e){function i(t){return t>0}for(var n=0;i(a)&&n<t.length;n++){var s=(0,r.default)(t[n]),o=parseInt(s.attr("data-aui-tab-width"),10);o<a&&this.moveTabOutOfDropdown(s,e),a-=o}},moveTabOutOfDropdown:function(t,a){t.find("a").hasClass("aui-dropdown2-checked")&&(t.addClass("active-tab"),a.removeClass("active-tab")),t.children("a").removeClass("aui-dropdown2-radio aui-tabs-responsive-item aui-dropdown2-checked"),a.before(t)}};function w(t){var a=(0,r.default)(t);if(!a.hasClass("aui-tabs-responsive-trigger")){var e=m(a);if(e){var n=(0,r.default)(e);n.addClass("active-pane").siblings(".tabs-pane").removeClass("active-pane");var s=a.parents(".aui-tabs").find(".aui-tabs-responsive-trigger-item a").attr("aria-controls"),o=(0,r.default)(document.getElementById(s));if(o.find("li a").attr("aria-checked",!1).removeClass("checked aui-dropdown2-checked"),o.find("li").removeClass("active-tab"),a.parent("li.menu-item").addClass("active-tab").siblings(".menu-item").removeClass("active-tab"),a.hasClass("aui-tabs-responsive-item")){var u=n.parent(".aui-tabs").find("li.menu-item:not(.aui-tabs-responsive-trigger-item)");u.removeClass("active-tab"),u.find("a").removeClass("checked").removeAttr("aria-checked")}a.hasClass("aui-tabs-responsive-item")&&n.parent(".aui-tabs").find("li.menu-item.aui-tabs-responsive-trigger-item").addClass("active-tab"),a.closest(".tabs-menu").find("a").attr("aria-selected","false"),a.attr("aria-selected","true"),a.trigger("tabSelect",{tab:a,pane:n})}else i.error("Cannot switch to tab panel because it does not exist. Check whether the tab link href is correct.",t)}}function C(t){return void 0!==t.attr("data-aui-persist")&&"false"!==t.attr("data-aui-persist")}function T(t){var a=t.attr("id"),e=t.attr("data-aui-persist");return p+(a||"")+(e&&"true"!==e?"-"+e:"")}function k(t){S.change((0,r.default)(t.target).closest("a")),t&&t.preventDefault()}function y(t){t.forEach((function(t,a){!function(t,a){var e=(0,r.default)(t),i=e.find(".tabs-menu").first(),n=i.find("li:not(.aui-tabs-responsive-trigger-item)"),s=i.find(".aui-tabs-responsive-trigger").parent(),o=s.find("a"),u=o.attr("aria-controls"),d=(0,r.default)(document.getElementById(u)).attr("aria-checked",!1),l=d.length>0,c=g.totalTabsWidth(n,d)>e.outerWidth();if(!l&&c&&(s=g.createResponsiveDropdownTrigger(i,a),d=g.createResponsiveDropdown(e,a)),o.attr("aria-controls","aui-tabs-responsive-dropdown-"+a),o.attr("id","aui-tabs-responsive-trigger-"+a),o.attr("href","#aui-tabs-responsive-trigger-"+a),d.attr("id","aui-tabs-responsive-dropdown-"+a),c){var f=g.moveVisibleTabs(n.toArray(),e,s),b=g.totalVisibleTabWidth(f),p=e.outerWidth()-b-s.outerWidth(!0);if(p>0){var v=d.find("li");g.moveInvisibleTabs(v.toArray(),p,s)}e.hasClass("aui-tabs-disabled")||d.on("click.aui-tabs","a",k),i.is(":visible")&&i.hide().show()}l&&!c&&(d.find("li").each((function(){g.moveTabOutOfDropdown((0,r.default)(this),s)})),g.removeResponsiveDropdown(d,s))}(t,a)}))}function A(){return(0,r.default)(v).toArray()}function W(t){var a=(0,r.default)(t);if(t.setAttribute("role","application"),!a.data("aui-tab-events-bound")){var e=a.children("ul.tabs-menu");e.attr("role","tablist"),e.children("li").attr("role","presentation"),e.find("> .menu-item a").each((function(){var t,a,e;t=this,a=(0,r.default)(t),e=m(a),h(t)||i.error('A tab link must use an anchor link (e.g., <a href="#a-valid-id"></a>) to work correctly.',t),e?(d(a),a.attr("role","tab"),(0,r.default)(e).attr("aria-labelledby",a.attr("id")),a.parent().hasClass("active-tab")?a.attr("aria-selected","true"):a.attr("aria-selected","false")):i.warn("A tab panel could not be found with the tab link's configured href. Check whether the tab link href is correct.",t)})),e.on("click.aui-tabs","a",k),a.data("aui-tab-events-bound",!0),function(t){[].slice.call(t.querySelectorAll(".tabs-pane")).forEach(I)}(t)}}function D(){var t=(0,r.default)(".aui-tabs:not(.aui-tabs-disabled)");t.each((function(){W(this)})),function(t){for(var a=0,e=t.length;a<e;a++){var n=t.eq(a),r=t.get(a);if(C(n)&&window.localStorage)if(n.attr("id")){var s=window.localStorage.getItem(T(n));if(s){var o=r.querySelector(`a[href$="${s}"]`);o&&w(o)}}else i.warn("A tab group must specify an id attribute if it specifies data-aui-persist.")}}(t)}function I(t){t.setAttribute("role","tabpanel")}var S={setup:function(){!function(){const t=(0,n.debounce)(y,200);t(A()),(0,r.default)(window).on("resize.aui-tabs",(()=>t(A())))}(),D(),(0,r.default)(".aui-tabs.vertical-tabs").find("a").each((function(){var t=(0,r.default)(this);t.attr("title")||c(t)&&t.attr("title",t.text())}))},change:function(t){var a=t instanceof HTMLElement||t instanceof r.default?t:document.querySelector(t),e=(0,r.default)(a).first(),n=e.closest(".aui-tabs");w(e),C(n)&&window.localStorage&&function(t){var a=t.closest(".aui-tabs");if(a.attr("id")){var e=h(t);e&&window.localStorage.setItem(T(a),"#"+e)}else i.warn("A tab group must specify an id attribute if it specifies data-aui-persist.")}(e)}};(0,r.default)(S.setup);const R=(0,f.default)("aui-tabs",{created:function(t){(0,r.default)(t).addClass("aui-tabs horizontal-tabs"),f.default.init(t),W(t)},template:b('<ul class="tabs-menu">','<content select="li[is=aui-tabs-tab]"></content>',"</ul>",'<content select="aui-tabs-pane"></content>'),prototype:{select:function(t){var a=(0,r.default)(function(t){return t.querySelectorAll("aui-tabs-pane")}(this)).index(t);return a>-1&&S.change(function(t){return t.querySelectorAll("li[is=aui-tabs-tab]")}(this)[a].children[0]),this}}}),E=(0,f.default)("aui-tabs-tab",{extends:"li",created:function(t){(0,r.default)(t).addClass("menu-item")},template:b('<a href="#">',"<strong>","<content></content>","</strong>","</a>")}),O=(0,f.default)("aui-tabs-pane",{attached:function(t){var a=(0,r.default)(function(t){return(0,r.default)(t).closest("aui-tabs").get(0)}(t)),e=(0,r.default)(t),i=a.find("aui-tabs-pane").index(e),n=new E,s=(0,r.default)(n);e.addClass("tabs-pane"),n.firstChild.setAttribute("href","#"+t.id),b.wrap(n).textContent=e.attr("title"),0===i&&e.addClass("active-pane"),e.hasClass("active-pane")&&s.addClass("active-tab"),e.siblings("ul").append(n)},template:b("<content></content>")});(0,s.default)("tabs",S)}},t=>{t.O(0,[7224,9378,1356,2582,7035,8196,3469,3039,2276,4271,4678,7981,8877,7201,7501,4544,7991,3136,9030,113,9110,2990,9009,5260,7524,3042,4191,8106,5396,7428,5853,7598,23,2799,3672],(()=>{return a=9606,t(t.s=a);var a}));t.O()}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.mxgraph.confluence.plugins.diagramly:drawio-rte', location = 'js/theming.js' */
try{window.mxConfThemeObserver=function(f,d,c){function g(b){var a=document.documentElement.getAttribute("data-color-mode");return a?"dark"===a:b?null:!1}function e(b){clearTimeout(m);var a=Date.now();1E3<a-h&&(h=a,f(b,d))}var h=0,m=setTimeout(function(){e(!1)},200);const n=new MutationObserver(function(b,a){for(const k of b)if("attributes"===k.type&&"data-color-mode"===k.attributeName&&(e(g()),c)){a.disconnect();break}});var l=g(!0);if(null!=l&&(e(l),c))return;n.observe(document.documentElement,
{attributes:!0})}}catch(f){window.mxConfThemeObserver=function(d,c){d(!1,c)}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.mxgraph.confluence.plugins.diagramly:drawio-rte', location = 'js/mxInit.js' */
window.ATLAS_RESOURCE_BASE="undefined"!==typeof DrawioProperties&&null!=DrawioProperties.drawioResourceRoot?DrawioProperties.drawioResourceRoot:AJS.contextPath()+"/download/resources/com.mxgraph.confluence.plugins.diagramly:drawio-editor";window.RESOURCES_PATH=ATLAS_RESOURCE_BASE+"/resources";window.RESOURCE_BASE=RESOURCES_PATH+"/dia";window.STENCIL_PATH=ATLAS_RESOURCE_BASE+"/stencils";window.SHAPES_PATH=ATLAS_RESOURCE_BASE+"/shapes";window.IMAGE_PATH=ATLAS_RESOURCE_BASE+"/images";
window.GRAPH_IMAGE_PATH="/img";window.STYLE_PATH=ATLAS_RESOURCE_BASE+"/styles";window.CSS_PATH=STYLE_PATH;window.OPEN_FORM=ATLAS_RESOURCE_BASE+"/html/open.html";window.TEMPLATE_PATH=ATLAS_RESOURCE_BASE+"/templates";window.PROXY_URL=("undefined"!==typeof DrawioProperties?DrawioProperties.contextPath:AJS.contextPath())+"/plugins/servlet/drawio-proxyServlet";window.SVGLOADER_URL=("undefined"!==typeof DrawioProperties?DrawioProperties.contextPath:AJS.contextPath())+"/plugins/servlet/drawio-svgServlet";
window.mxBasePath=ATLAS_RESOURCE_BASE+"/mxgraph";window.mxImageBasePath=window.mxBasePath+"/images";window.mxLoadStylesheets=!1;window.mxLoadResources=!1;window.mxLoadSettings=!1;window.isSvgBrowser=0>navigator.userAgent.indexOf("MSIE")||9<=document.documentMode;window.DRAWIO_VIEWER_URL=window.location.protocol+"//"+window.location.host+("undefined"!==typeof DrawioProperties?DrawioProperties.contextPath:AJS.contextPath())+"/download/resources/com.mxgraph.confluence.plugins.diagramly:drawio-reader/js/viewer-static.min.js";
window.VIEWER_URL=window.DRAWIO_VIEWER_URL;window.DRAW_MATH_URL=ATLAS_RESOURCE_BASE+"/math/es5";window.MXGRAPH=window.MXGRAPH||{};MXGRAPH.viewerContainer=null;MXGRAPH.readerOpts=null;var isLocalStorage=!1,mxIsElectron=!1;try{isLocalStorage="undefined"!=typeof localStorage}catch(b){}
(function(){if(!window.mxCssInjected)try{window.mxCssInjected=!0;var b=document.createElement("style");b.type="text/css";b.innerHTML=".geDiagramContainer blockquote,\n.drawio-macro blockquote {\ncolor: #000 !important;\nmargin:1em 40px 1em 40px !important;\npadding: 0px !important;\nborder-style: none;\n}\nhtml body .geDiagramContainer ul, html body .geDiagramContainer ol,\nhtml body .drawio-macro ul, html body .drawio-macro ol {\nmargin:1em 0px 1em 0px;\npadding-left: 40px;\n}\n.geDiagramContainer h1,\n.drawio-macro h1 {\ncolor: #000 !important;\nfont-size: 2em;\nfont-weight: bold !important;\nline-height: inherit !important;\nmargin:0.67em 0px 0.67em 0px !important;\n}\n.geDiagramContainer h2,\n.drawio-macro h2 {\ncolor: #000 !important;\nfont-size: 1.5em !important;\nfont-weight: bold !important;\nline-height: inherit !important;\nmargin:0.83em 0px 0.83em 0px !important;\n}\n.geDiagramContainer h3,\n.drawio-macro h3 {\ncolor: #000 !important;\nfont-size: 1.17em !important;\nfont-weight: bold !important;\nline-height: inherit !important;\nmargin:1em 0px 1em 0px !important;\n}\n.geDiagramContainer h4,\n.drawio-macro h4 {\ncolor: #000 !important;\nfont-size: 1em !important;\nfont-weight: bold !important;\nline-height: inherit !important;\nmargin:1.33em 0px 1.33em 0px !important;\n}\n.geDiagramContainer h5,\n.drawio-macro h5 {\ncolor: #000 !important;\nfont-size: 0.83em !important;\nfont-weight: bold !important;\nline-height: inherit !important;\nmargin:1.67em 0px 1.67em 0px !important;\n}\n.geDiagramContainer h6,\n.drawio-macro h6 {\ncolor: #000 !important;\nfont-size: 0.67em !important;\nfont-weight: bold !important;\nline-height: inherit !important;\nmargin:2.33em 0px 2.33em 0px !important;\n}\nhtml body .geDiagramContainer p,\nhtml body .drawio-macro p {\nmargin: 1em 0 1em 0;\n}";document.getElementsByTagName("head")[0].appendChild(b)}catch(d){}})();
var urlParams=function(b){var d={},f=b.lastIndexOf("?");if(0<f){b=b.substring(f+1).split("\x26");for(var e=0;e<b.length;e++)f=b[e].indexOf("\x3d"),0<f&&(d[b[e].substring(0,f)]=b[e].substring(f+1))}return d}(window.location.href),mxLanguage="undefined"!==typeof LANGUAGE?LANGUAGE:"en";MXGRAPH.mxscriptOnLoad=MXGRAPH.mxscriptOnLoad||{};
function mxscript(b,d){var f=b.substring(b.lastIndexOf("/")+1);if(1==MXGRAPH.mxscriptOnLoad[b]||null!=f&&null!=document.getElementById(f))null!=d&&d();else if(null==MXGRAPH.mxscriptOnLoad[b])if(MXGRAPH.mxscriptOnLoad[b]=[d],"1"!=urlParams.dev){var e=document.createElement("script");e.setAttribute("type","text/javascript");e.setAttribute("defer","true");e.setAttribute("src",b);var g=!1;e.onload=e.onreadystatechange=function(){if(!(g||this.readyState&&"complete"!=this.readyState)){g=!0;for(var h=0;h<
MXGRAPH.mxscriptOnLoad[b].length;h++)if(null!=MXGRAPH.mxscriptOnLoad[b][h])MXGRAPH.mxscriptOnLoad[b][h]();null!=f&&e.setAttribute("id",f);MXGRAPH.mxscriptOnLoad[b]=!0}};d=document.getElementsByTagName("script")[0];null!=d&&d.parentNode.insertBefore(e,d)}else document.write('\x3cscript src\x3d"'+b+'"'+(null!=f?' id\x3d"'+f+'" ':"")+"\x3e\x3c/script\x3e");else MXGRAPH.mxscriptOnLoad[b].push(d)}
mxLoadScripts=function(b,d){for(var f=b.length,e=0;e<b.length;e++)mxscript(b[e],function(){0==--f&&null!=d&&d()})};MXGRAPH.resolvePageTargetName=function(b,d){if(null==b||null==d)return null;d=decodeURIComponent(d);if(-1==d.indexOf("{pageTitle}"))return d;b=8401<=DrawioProperties.buildNumber?b.replace(/-/g,""):b;return d.replace("{pageTitle}",/^[a-zA-Z]/.test(b)?b:"id-"+b).replace(/\s/g,"")};
MXGRAPH.restorePageTitlePlaceholder=function(b,d){if(null==d)return null;b=b.replace(/\s/g,"");return d.replace("id-","").replace(b,"{pageTitle}")};
MXGRAPH.overrideGlobalVariables=function(b,d){d=d||Graph.prototype;var f=d.getGlobalVariable;d.getGlobalVariable=function(e){if(null!=DrawioProperties.serverConfig&&"1"==DrawioProperties.serverConfig.disableplaceholders)return"placeholder disabled";try{if("filename"==e)return b.title||b.diagramDisplayName||b.diagramName;if("creatorName"==e)return b.creatorName;if("lastModifiedBy"==e)return b.lastModifierName;if("lastModifiedTime"==e.substring(0,16)){var g=e.indexOf(":"),h=0<g?e.substring(g+1):"";
return this.formatDate(new Date(b.lastModified),h)}if("version"==e)return b.revision}catch(l){}return f.apply(this,arguments)}};
if("1"==urlParams.dev){var mxDevUrl=document.location.protocol+"//devhost.jgraph.com/drawio/src/main",drawDevUrl=document.location.protocol+"//devhost.jgraph.com/drawio/src/main/webapp/",geBasePath=drawDevUrl+"/js/grapheditor",mxBasePath=mxDevUrl+"/mxgraph";mxscript(drawDevUrl+"js/diagramly/Init.js");mxscript(geBasePath+"/Init.js");mxscript(mxBasePath+"/mxClient.js");mxscript(drawDevUrl+"js/diagramly/Devel.js");mxscript(drawDevUrl+"js/diagramly/GraphViewer.js")}
(function(){function b(){var g=$(".drawio-macro");0<g.length&&(e?f(g):mxscript(ATLAS_RESOURCE_BASE+"/js/atlas-viewer.min.js",function(){mxLoadScripts([ATLAS_RESOURCE_BASE+"/js/EmbedUtils.js",ATLAS_RESOURCE_BASE+"/js/mxViewer.js",ATLAS_RESOURCE_BASE+"/js/DrawioComments.js",ATLAS_RESOURCE_BASE+"/js/shapes-14-6-5.min.js",ATLAS_RESOURCE_BASE+"/js/mxEditorEventListener.js"],function(){e=!0;f(g)})}))}function d(g){if("undefined"===typeof TextDecoder||"undefined"===typeof Uint8Array)return decodeURIComponent(escape(window.atob(g)));
var h=new TextDecoder("utf8"),l=h.decode;g=atob(g);var m=new ArrayBuffer(g.length);m=new Uint8Array(m);for(var k=0;k<g.length;k+=1)m[k]=g.charCodeAt(k);return l.call(h,m.buffer)}function f(g){for(var h=0;h<g.length;h++)try{var l=g[h],m=l.getAttribute("data-macroId"),k=$("#drawio-macro-data-"+m);0<k.length&&(mxConfThemeObserver(function(p,a){a.macro.className=a.className;a.macro.innerHTML="";var n=a.macro;a=a.macroData;var q="drawio-sketch"===n.parentNode.getAttribute("data-macro-name"),c=a.serverConfig;
DrawioProperties={contextPath:AJS.contextPath(),buildNumber:n.getAttribute("data-buildNum"),serverConfig:c};try{a.uiConfig&&(DrawioProperties.uiConfig=JSON.parse(mxUtils.decodeHtml(a.uiConfig)))}catch(r){console.log(r),DrawioProperties.uiConfig={}}c={};a.templateUrl?(c.loadUrl=(0==a.templateUrl.indexOf(AJS.contextPath())?"":AJS.contextPath())+a.templateUrl,c.imageUrl=(0==a.templateImageLoadUrl.indexOf(AJS.contextPath())?"":AJS.contextPath())+a.templateImageLoadUrl):(c.loadUrl=AJS.contextPath()+"/rest/drawio/1.0/diagram/crud/"+
encodeURIComponent(a.diagramName)+"/"+encodeURIComponent(a.owningPageId)+"?revision\x3d"+encodeURIComponent(a.revision),c.imageUrl=AJS.contextPath()+"/download/attachments/"+encodeURIComponent(a.owningPageId)+"/"+encodeURIComponent(a.previewName)+"?version\x3d"+encodeURIComponent(a.revision)+"\x26api\x3dv2",c.editUrl=AJS.contextPath()+"/plugins/drawio/addDiagram.action?ceoId\x3d"+encodeURIComponent(a.ceoId)+"\x26owningPageId\x3d"+encodeURIComponent(a.owningPageId)+"\x26diagramName\x3d"+encodeURIComponent(a.diagramName)+
"\x26revision\x3d"+encodeURIComponent(a.revision)+"\x26diagramDisplayName\x3d"+encodeURIComponent(a.diagramDisplayName)+(q?"\x26ui\x3dsketch\x26saveAndExit\x3d1\x26noSaveBtn\x3d1":"")+(p?"\x26dark\x3d1":""));c.editable=a.editable;c.canComment=a.canComment;c.stylePath=STYLE_PATH;c.stencilPath=STENCIL_PATH;c.imagePath=IMAGE_PATH+"/reader";c.border=a.border;c.width=a.width;c.simpleViewer=a.simpleViewer;c.tbstyle=a.tbstyle;c.links=a.links;c.lightbox=a.lbox;c.resourcePath=ATLAS_RESOURCE_BASE+"/resources/viewer";
c.disableButtons=!1;c.zoomToFit=!0;c.language=a.language;c.licenseStatus=a.licenseStatus;c.contextPath=AJS.contextPath();c.diagramName=a.diagramName;c.diagramDisplayName=a.diagramDisplayName;c.aspect=a.aspect;c.ceoName=a.ceoName;c.attVer=a.revision;c.revision=a.revision;c.attId=a.attId;c.lastModifierName=a.lastModifierName;c.lastModified=parseInt(a.lastModified);c.creatorName=a.creatorName;c.maxScale=parseFloat(a.maxScale);c.extSrvIntegType=a.extSrvIntegType;c.gClientId=a.gClientId;c.oClientId=a.oClientId;
c.service=a.service;c.sFileId=a.sFileId;c.odriveId=a.odriveId;c.diagramUrl=a.diagramUrl;c.csvFileUrl=a.csvFileUrl;c.pageId=a.pageId||Confluence.getContentId();c.aspectHash=a.aspectHash;c.isTemplate=a.isTemplate;""==c.width&&(c.width=null);"GDrive"==a.service||"OneDrive"==a.service||""!=a.diagramUrl||""!=a.csvFileUrl?createRemoteViewer(n,c,null,p):(createViewer(n,c,p),c.editable&&($(n).data("viewerConfig",c),$(n).on("drawioViewerUpdate",updateDrawioViewer)))},{macro:l,className:l.className,macroData:JSON.parse(d(k.text().trim()))}),
k.remove())}catch(p){console.log(p)}setTimeout(b,500)}if("undefined"!==typeof AJS&&!MXGRAPH.macroRenderingStarted){$=AJS.$;MXGRAPH.macroRenderingStarted=!0;var e=!1;$(document).ready(b)}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.mxgraph.confluence.plugins.diagramly:drawio-rte', location = 'js/mxViewer.js' */
var gOpenCommentsFn=null;null==window.mxResourcesLoadingDone&&(window.mxResourcesLoadingDone=!1,window.mxMainPending=[]);function gOpenCommentsFunc(){null!=gOpenCommentsFn&&gOpenCommentsFn()}
function mxAddSpinner(c,a){var h=document.createElement("div");h.style.cssText=(a?"position:absolute;top:50%;left:50%;margin-left:-20px;margin-top:-20px;":"position:relative;")+"width:40px;height:40px;";c.appendChild(h);(new Spinner({lines:12,length:7,width:3,radius:6,rotate:0,color:"#000",speed:2,trail:60,shadow:!1,hwaccel:!1,className:"spinner",zIndex:999})).spin(h);return h}
function createViewer(c,a,h){function l(k){c.innerHTML=mxResources.get("error")+": "+mxUtils.htmlEntities(k);c.style.height="24px"}function t(k,p){var b=document.createElement("div");b.style.position="absolute";b.style.overflow="hidden";b.style.left="0px";b.style.top="0px";b.style.right="0px";b.style.fontSize="14px";b.style.margin="2px";mxUtils.setOpacity(b,50);b.style.color="gray";b.style.textAlign="center";b.style.whiteSpace="nowrap";span=document.createElement("span");span.innerHTML=k;b.appendChild(span);
p.appendChild(b)}function u(k){"NO_LICENSE"==a.licenseStatus?t(mxResources.get("drawio.reader.noLicense"),k):"EVAL_LICENSE"==a.licenseStatus?t(mxResources.get("drawio.reader.evaluation"),k):"EVAL_EXPIRED"==a.licenseStatus?t(mxResources.get("drawio.reader.evaluationExpired"),k):"VERSION_MISMATCH"==a.licenseStatus?t(mxResources.get("drawio.reader.versionMismatch",["https://support.draw.io/pages/viewpage.action?pageId\x3d11829320"]),k):"USER_MISMATCH"==a.licenseStatus&&t(mxResources.get("drawio.reader.userMismatch",
["https://support.draw.io/pages/viewpage.action?pageId\x3d11829323"]),k)}function w(k){var p={};try{p=JSON.parse(k)}catch(d){try{mxUtils.parseXml(k);p.xml=k;p.revision="";var b=a.loadUrl.match(/\/([^/]+)$/);p.name=2<=b.length?decodeURIComponent(b[1]):""}catch(f){}}return p}function A(k,p){if(null!=k){var b=k.openLink;k.openLink=function(f,g){var n=window,e=f;f=f.replace(/\+/g,"%2B");e.substring(0,this.baseUrl.length)==this.baseUrl&&"#"==e.charAt(this.baseUrl.length)&&"_top"==g&&window==window.top?
(e=document.createElement("a"),e.href="#"+MXGRAPH.resolvePageTargetName(p,f.split("#")[1]),e.style.display="none",c.appendChild(e),e.click(),e.parentNode.removeChild(e)):n=-1!=f.lastIndexOf("/lightbox.action")?b.apply(this,[f,"_blank"]):b.apply(this,arguments);return n};var d=k.customLinkClicked;k.customLinkClicked=function(f){var g=AJS.contextPath();if("data:confluence/id,"==f.substring(0,19)){var n=f.substring(19),e=window.open();if(n)$.ajax({url:g+"/rest/api/content/"+encodeURIComponent(n),type:"GET",
success:function(v){e.location=document.location.origin+g+v._links.webui},error:function(){e.document.writeln(mxResources.get("objectNotFound"))}});else throw Error("Empty ID");}else if("data:scrollPage,"==f.substring(0,16))try{var q=JSON.parse(Base64.decode(f.substring(16)));e=window.open();e.document.writeln(mxResources.get("connecting")+"...");$.ajax({url:g+"/rest/api/content/"+encodeURIComponent(AJS.Confluence.getContentId()),type:"GET",success:function(v){var r=v.space.key;if(/^[ -~\t\n\r]+$/.test(q.confTitle)){var x=
document.location.origin+g+"/display/"+encodeURIComponent(r)+"/"+encodeURIComponent(q.confTitle.replace(/\s/g,"+"));$.ajax({url:x,type:"GET",success:function(C){e.location=x},error:function(C){$.ajax({url:g+"/rest/api/content/"+encodeURIComponent(q.confId),type:"GET",success:function(E){e.location=document.location.origin+g+"/display/"+encodeURIComponent(r)+"/"+encodeURIComponent(E.title.replace(/\s/g,"+"))},error:function(E){e.document.writeln(mxResources.get("pageNotFound"))}})}})}else e.location=
document.location.origin+g+"/pages/viewpage.action?pageId\x3d"+encodeURIComponent(q.confId)},error:function(){e.document.writeln(mxResources.get("pageNotFound"))}});return!0}catch(v){throw Error("Unexpected Error");}else return d.apply(this,arguments)}}}function D(k,p){null!=k&&null!=p&&$(k).parents().each(function(b,d){"ui-expand"==$(d).data("macro-name")&&(p["check-visible-state"]=!1)})}if(null!=c){var B=$.Deferred(),F=!1,m=c.parentNode;null==m||null==m.previousSibling||"drawio"!=m.getAttribute("data-macro-name")||
"P"!=m.previousSibling.nodeName||0!=m.previousSibling.childNodes.length&&""!=m.previousSibling.innerHTML.trim()||m.previousSibling.appendChild(c);try{a.darkMode=h;var G=a.contextPath;editUrl=a.editUrl;Editor.initMath();GraphViewer.initCss();"undefined"!==typeof DrawioProperties&&DrawioProperties.uiConfig&&DrawioProperties.uiConfig.fontCss&&Editor.configureFontCss(DrawioProperties.uiConfig.fontCss);a.isTemplate&&(GraphViewer.prototype.checkVisibleState=!1);if(!window.mxResourcesLoaded&&null!=a.language){window.mxResourcesLoaded=
!0;var K=a.language;mxResources.isLanguageSupported(K)&&(mxClient.language=K);mxUtils.getAll([mxResources.getSpecialBundle(RESOURCE_BASE,mxClient.language)||mxResources.getDefaultBundle(RESOURCE_BASE,mxClient.language),a.resourcePath+("de"==K?"_de":"")+".txt"],function(b){for(var d=0;d<b.length;d++)mxResources.parse(b[d].getText());for(window.mxResourcesLoadingDone=!0;0<window.mxMainPending.length;)window.mxMainPending.pop()()});var L=document.head.getElementsByTagName("link"),H=null;for(m=0;m<L.length;m++){var I=
L[m];if("text/css"===I.getAttribute("type")&&"stylesheet"===I.getAttribute("rel")&&/.*\/styles\/custom\.css\?spaceKey=.*$/.test(I.getAttribute("href"))){H=I.outerHTML;break}}if(null!=H){var O=PrintDialog.createPrintPreview;PrintDialog.createPrintPreview=function(){var b=O.apply(this,arguments),d=b.writeHead;b.writeHead=function(f){d.apply(this,arguments);null!=H&&f.writeln(H)};return b}}}function k(b){if("undefined"!==typeof DrawioProperties&&DrawioProperties.serverConfig&&DrawioProperties.serverConfig.linkAdjustments){if("string"===
typeof DrawioProperties.serverConfig.linkAdjustments)try{for(var d=JSON.parse(mxUtils.decodeHtml(DrawioProperties.serverConfig.linkAdjustments)),f=0;f<d.length;f++)d[f].re=new RegExp(d[f].re,d[f].m);DrawioProperties.serverConfig.linkAdjustments=d}catch(n){console.log("linkAdjustments parsing error",n)}try{if("object"===typeof DrawioProperties.serverConfig.linkAdjustments)for(d=DrawioProperties.serverConfig.linkAdjustments,f=0;f<d.length;f++){var g=d[f];b=b.replace(g.re,g.r)}}catch(n){console.log("linkAdjustments error",
n)}}return b}var P=Graph.prototype.getAbsoluteUrl;Graph.prototype.getAbsoluteUrl=function(b){null!=b&&(b=k(b),"/"==b.charAt(0)&&b.substring(0,G.length)!==G&&(b=G+b));return P.apply(this,arguments)};var Q=Graph.prototype.getTooltipForCell;Graph.prototype.getTooltipForCell=function(b){var d=null;try{return mxUtils.isNode(b.value)&&(d=b.value.getAttribute("link"),null!=d&&b.value.setAttribute("link",k(d))),Q.apply(this,arguments)}finally{null!=d&&b.value.setAttribute("link",d)}};GraphViewer.prototype.toolbarZIndex=
1;var R=GraphViewer.prototype.getImageUrl,S=/^(\.\.\/)*(\.\.)?\/download\//,M=/.*com.mxgraph.confluence.plugins.diagramly:(drawio|diagramly)-editor/;GraphViewer.prototype.imageBaseUrl=document.location.origin+"/";GraphViewer.prototype.getImageUrl=function(b){return null==b?b:"img/"==b.substring(0,4)?-1!=b.indexOf(".svg")?SVGLOADER_URL+"?url\x3d"+encodeURIComponent(b):ATLAS_RESOURCE_BASE+"/"+b:"/img/"==b.substring(0,5)?ATLAS_RESOURCE_BASE+b:S.test(b)?G+b.substring(b.indexOf("/download/")):"data:image"!=
b.substring(0,10)&&M.test(b)?ATLAS_RESOURCE_BASE+b.replace(M,""):-1!=b.indexOf("/drawio/1.0/diagram/getImageAtt")?b:R.apply(this,arguments)};var T=GraphViewer.prototype.addClickHandler;GraphViewer.prototype.addClickHandler=function(b,d){var f=mxUtils.bind(this,function(){var g=b.container.getElementsByTagName("img");if(null!=g)for(var n=0;n<g.length;n++)g[n].setAttribute("src",this.getImageUrl(g[n].getAttribute("src")))});b.model.addListener(mxEvent.CHANGE,f);f();T.apply(this,arguments)};GraphViewer.prototype.showLightbox=
function(b,d,f){this.showLocalLightbox()};null!=a.width&&"fixed"!=a.width&&(c.style.width=a.width+"px");function p(b,d){if(!d&&!window.mxResourcesLoadingDone)window.mxMainPending.push(function(g){p(b,g)});else if(!F){F=!0;GraphViewer.prototype.autoCrop=!0;var f=mxAddSpinner(c);mxUtils.get(a.loadUrl,mxUtils.bind(this,function(g){try{f.parentNode.removeChild(f)}catch(C){console.log("drawio: viewer noise",C)}c.style.minHeight="";if(200>g.getStatus()||299<g.getStatus())l(g.getStatus());else{mxStencilRegistry.dynamicLoading=
!0;u(c);g=w(g.getText());var n=mxUtils.parseXml(g.xml);a.border&&(c.style.border="1px solid #d0d0d0");var e={"toolbar-position":a.tbstyle,nav:!0,highlight:"#3b73af",border:8,"dark-mode":h};"auto"!=a.links&&(e.target=a.links);"top"==a.tbstyle&&(e.title=(null!=a.diagramDisplayName&&0<a.diagramDisplayName.length?a.diagramDisplayName:g.name)+" ["+g.revision+"]");a.lightbox||(e.lightbox=!1);"hidden"==a.tbstyle?e.resize=!0:(e.toolbar="edit pages zoom layers tags",a.lightbox&&(e.toolbar+=" lightbox"));"fixed"==
a.width?(c.style.maxWidth="",e["allow-zoom-out"]=!1):null!=a.width&&(e["allow-zoom-in"]=!0);e.zoom=isFinite(a.maxScale)?a.maxScale:1;var q=null;e["toolbar-buttons"]={edit:{title:mxResources.get("edit"),enabled:a.editable,image:MXGRAPH.editImage,handler:function(y){-1==a.editUrl.lastIndexOf("page-id")&&(a.editUrl=a.editUrl+"\x26page\x3d"+r.currentPage);a.editUrl+="\x26directEdit\x3dtrue";MXGRAPH.openEditor(a.editUrl,y.srcElement);MXGRAPH.viewerContainer=c;MXGRAPH.readerOpts=a}}};if(null!=a.aspect&&
0<a.aspect.length&&(pageAndLayers=a.aspect.split(" "),e.layerIds=1<pageAndLayers.length?pageAndLayers.slice(1):null,pageId=pageAndLayers[0],a.editUrl+="\x26page-id\x3d"+pageId,diagrams=n.documentElement.getElementsByTagName("diagram"),null!=diagrams))for(var v=0;v<diagrams.length;v++)if(diagrams[v].getAttribute("id")==pageId){e.page=v;break}MXGRAPH.overrideGlobalVariables(a);D(c,e);var r=new GraphViewer(c,n.documentElement,e);function C(){A(r.graph,a.ceoName);MXGRAPH.overrideCellTooltips(r.graph,
a.ceoName)}r.addListener("render",C);C();MXGRAPH.addCommentsIcon(r,c,g.attachmentId);var x=null;EditorUi.prototype.createUi=function(){};EditorUi.prototype.addTrees=function(){};EditorUi.prototype.updateActionStates=function(){};EditorUi.prototype.installNativeClipboardHandler=function(){};EditorUi.prototype.createKeyHandler=function(){var y=new mxKeyHandler(this.editor.graph);y.bindAction=function(){};return y};EditorUi.prototype.getServiceName=function(){return"atlassian"};function E(){null==x&&
(x=new EditorUi(new Editor(!1,null,null,null,!1)),x.editor.attachmentInfo={attachmentId:a.attId,revision:a.attVer},x.canComment=function(){return a.canComment});return x}function N(){null!=q?q.window.setVisible(!q.window.isVisible()):(q=new CommentsWindow(E(),document.body.offsetWidth-380,120,300,350),q.window.setVisible(!0),q.window.getElement().style.position="fixed");q.window.getElement().style.zIndex=2E3}a.canComment&&(EditorUi.prototype.lightboxToolbarActions=[{icon:Editor.commentImage,tooltip:mxResources.get("comments"),
fn:gOpenCommentsFunc}]);null!=r.graph&&null!=r.graph.model&&(r.showLocalLightbox=function(y){gOpenCommentsFn=N;var J=GraphViewer.prototype.showLocalLightbox.call(r);A(J.editor.graph,a.ceoName);var U=J.destroy;J.destroy=function(){null!=q&&q.window.setVisible(!1);U.apply(this,arguments)};y&&N();return J},a.canComment&&E().hasUnresolvedComments(function(y){y&&(img=document.getElementById("comments-icon-"+a.attId),img.style.display="inline")},function(){}),b.resolve(r))}}),function(){f.parentNode.removeChild(f);
c.style.minHeight="";l(req.getStatus())})}}if(a.simpleViewer){var z=document.createElement("img");z.setAttribute("src",a.imageUrl);z.setAttribute("border","0");z.style.cssText="width:100%;box-sizing:border-box;padding:8px;";"fixed"==a.width&&(c.style.overflow="visible",z.style.width="");a.border&&(z.style.border="1px solid #d0d0d0");c.appendChild(z);a.lightbox&&(z.style.cursor="pointer",mxEvent.addListener(z,"click",function(){var b=mxAddSpinner(c,!0);mxUtils.get(a.loadUrl,function(d){b.parentNode.removeChild(b);
200<=d.getStatus()&&299>=d.getStatus()&&(d=w(d.getText()),d=mxUtils.parseXml(d.xml),d=new GraphViewer(null,d.documentElement,{highlight:"#3b73af",nav:!0,lightbox:!1,toolbar:"pages zoom layers tags",target:a.links,"check-visible-state":!1}),A(d.showLocalLightbox().editor.graph,a.ceoName))},function(){b.parentNode.removeChild(b)})}))}else c.style.minHeight="200px",p(B),setTimeout(function(){for(;0<window.mxMainPending.length;)window.mxMainPending.pop()(!0)},2E3)}catch(k){l(k.message)}return B.promise()}}
MXGRAPH.addCommentsIcon=function(c,a,h){var l=document.createElement("img");l.style.cssText="position:absolute;bottom: 5px; right: 5px;opacity: 0.25; cursor: pointer;display : none";l.id="comments-icon-"+h;l.setAttribute("title",mxResources.get("showComments"));l.src=Editor.commentImage;l.addEventListener("click",mxUtils.bind(this,function(){c.showLocalLightbox(!0)}));a.appendChild(l)};
function updateDrawioViewer(c,a,h){viewerConfig=$(this).data("viewerConfig");a==viewerConfig.diagramName&&($(this).empty(),viewerConfig.editUrl=viewerConfig.editUrl.replace(/revision=\d+/,"revision\x3d"+h),viewerConfig.loadUrl=viewerConfig.loadUrl.replace(/revision=\d+/,"revision\x3d"+h),viewerConfig.attVer=h,createViewer(this,viewerConfig,viewerConfig.darkMode))}
MXGRAPH.openEditor=function(c,a){var h=$('\x3ciframe id\x3d"drawioEditor" \x3e');h.appendTo("body");h.css({position:"fixed",width:"100%",height:"100%",top:"0px",left:"0px","border-style":"none",zIndex:9E3});h.attr("src",c);MXGRAPH.editorFrame=h;MXGRAPH.editImgEl=a;a.src=window.IMAGE_PATH+"/spin.gif";a.width=21;a.height=21};
MXGRAPH.closeEditor=function(){MXGRAPH.editorFrame.remove();MXGRAPH.editorFrame=null;MXGRAPH.viewerContainer=null;MXGRAPH.readerOpts=null;document.body.style.overflow="auto";MXGRAPH.editImgEl.src=MXGRAPH.editImage};
MXGRAPH.postSave=function(c,a,h,l){$(".drawio-macro").trigger("drawioViewerUpdate",[a,h]);c=new mxXmlRequest(AJS.contextPath()+"/rest/drawio/1.0/diagram/updateMacros/"+c+"/"+encodeURIComponent(a)+"/"+h+"?diagramWidth\x3d"+l,"","POST");c.setRequestHeaders=function(t,u){t.setRequestHeader("X-Atlassian-Token","no-check")};c.send(function(t){},function(t){console.log("There was a problem updating the drawio macro")})};
MXGRAPH.overrideCellTooltips=function(c,a){null!=c&&(oldF=c.getTooltipForCell,c.getTooltipForCell=function(h){var l=oldF.apply(this,arguments);return null!=h.value&&null!=h.value.getAttribute&&null!=h.value.getAttribute("tooltip")?l:null==l?null:MXGRAPH.resolvePageTargetName(a,l)})};
function createRemoteViewer(c,a,h,l){var t="localhost"==window.location.hostname?"test.draw.io":"ac.draw.io",u=AJS.Meta.get("user-locale");if(null!=u){var w=u.indexOf("_");0<=w&&(u=u.substring(0,w))}if(null!=c){c.style.height="200px";c.style.width="100%";w=a.diagramUrl||a.csvFileUrl?"extUrl":"GDrive"==a.service?"gdrive":"onedrive";var A="";if(l){var D=document.createElement("div");D.style.color="var(--ds-surface)";document.body.appendChild(D);A="\x26dark\x3d1\x26bkgrndClr\x3d"+encodeURIComponent(getComputedStyle(D).color);
a.darkMode=l;document.body.removeChild(D)}l=3==a.extSrvIntegType||a.diagramUrl||a.csvFileUrl?AJS.contextPath()+"/plugins/drawio/embedViewer.action?type\x3d"+w+"\x26lang\x3d"+u+A:"https://"+t+"/connect/remote_"+w+"/viewer.html?lang\x3d"+u+A;l=$('\x3ciframe style\x3d"height:100%;width:100%;border:0" src\x3d"'+l+'"\x3e');$(c).append(l);var B=l[0].contentWindow,F=mxAddSpinner(c);window.addEventListener("message",function(m){if(m.source==B)switch(m=JSON.parse(m.data),m.action){case "viewerReady":B.postMessage(JSON.stringify({action:"viewFile",
data:a}),"*");F.parentNode.removeChild(F);break;case "diagramRendered":null!=h&&(a.fileTS=m.fileTS,h(a,B));break;case "updateHeight":c.style.height=m.height+"px"}});return B}}MXGRAPH.editImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVBAMAAABbObilAAAAD1BMVEUAAAAAAAAQEBBycnIgICBqwj3hAAAAAXRSTlMAQObYZgAAADlJREFUCNdjoBwoChrAmCyGggJwYWVBBSiTSVDICKFa0AEuLCiEJKyAX5gBSZgBSZgBKGwMBKQ7HAAWzQSfKKAyBgAAAABJRU5ErkJggg\x3d\x3d";
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.mxgraph.confluence.plugins.diagramly:drawio-rte', location = 'templates/soy/dialogs.soy' */
// This file was automatically generated from dialogs.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace diagramlySoy.macro.dialog.
 */

if (typeof diagramlySoy == 'undefined') { var diagramlySoy = {}; }
if (typeof diagramlySoy.macro == 'undefined') { diagramlySoy.macro = {}; }
if (typeof diagramlySoy.macro.dialog == 'undefined') { diagramlySoy.macro.dialog = {}; }


diagramlySoy.macro.dialog.searchDialog = function(opt_data, opt_ignored) {
  return '<div class="diagramly-search-dialog" id="diagramly-search-dialog"><form name="diagramly-search-form" class="aui search-form"><fieldset class="search-input"><input name="diagramly-search-field" class="text" style="max-width :450px;margin-right : 10px" type="text" size="50"/><!-- <select name="diagramly-search-space" class="diagramly-space-select select"><option value="">' + soy.$$escapeHtml('All spaces') + '</option></select>--><button type="submit" class="button submit">' + soy.$$escapeHtml('Search') + '</button></fieldset><div class="description">' + soy.$$escapeHtml('Enter the name of a diagram') + '</div></form><div class="diagramly-search-results"></div></div>';
};
if (goog.DEBUG) {
  diagramlySoy.macro.dialog.searchDialog.soyTemplateName = 'diagramlySoy.macro.dialog.searchDialog';
}


diagramlySoy.macro.dialog.importDialog = function(opt_data, opt_ignored) {
  return '<div class="diagramly-import-dialog" id="diagramly-import-dialog"><form id="diagramly-import-form" name="diagramly-import-form" class="aui import-form" method="post" action="' + soy.$$escapeHtml(opt_data.url) + '" enctype="multipart/form-data"><fieldset class="import-input"><input name="diagramly-import-field" id="diagramly-import-field" class="import-text" type="file" size="50"/></fieldset><div class="description">' + soy.$$escapeHtml('Select a Visio file (.vdx)') + '</div><div class="spinner"></div></form></div>';
};
if (goog.DEBUG) {
  diagramlySoy.macro.dialog.importDialog.soyTemplateName = 'diagramlySoy.macro.dialog.importDialog';
}


diagramlySoy.macro.dialog.searchResults = function(opt_data, opt_ignored) {
  var output = '<table class="drawio-results-table"><thead><tr class="drawio-results-header"><th class="drawio-results-column-diagramname">' + soy.$$escapeHtml('Diagram') + '</th><th class="drawio-results-column-spacename">' + soy.$$escapeHtml('Space name') + '</th><th class="drawio-results-column-lastmodified">' + soy.$$escapeHtml('Last modified') + '</th></tr></thead><tbody>';
  var diagramList24 = opt_data.diagrams;
  var diagramListLen24 = diagramList24.length;
  if (diagramListLen24 > 0) {
    for (var diagramIndex24 = 0; diagramIndex24 < diagramListLen24; diagramIndex24++) {
      var diagramData24 = diagramList24[diagramIndex24];
      output += '<tr data-attachment-id="' + soy.$$escapeHtml(diagramData24.attachmentId) + '" data-name="' + soy.$$escapeHtml(diagramData24.name) + '" data-revision="' + soy.$$escapeHtml(diagramData24.revision) + '" ><td class="drawio-results-column-diagramname">' + soy.$$escapeHtml(diagramData24.name) + '</td><td class="drawio-results-column-spacename">' + soy.$$escapeHtml(diagramData24.spaceName) + '</td><td class="drawio-results-column-lastmodified">' + soy.$$escapeHtml(diagramData24.lastModified) + '</td></tr>';
    }
  } else {
    output += '<tr data-empty="true"><td>' + soy.$$escapeHtml('drawio.search.noResults') + '</td></tr>';
  }
  output += '</tbody></table>';
  return output;
};
if (goog.DEBUG) {
  diagramlySoy.macro.dialog.searchResults.soyTemplateName = 'diagramlySoy.macro.dialog.searchResults';
}


diagramlySoy.macro.dialog.spinner = function(opt_data, opt_ignored) {
  return '<div class="diagramly-results-spinner"></div>';
};
if (goog.DEBUG) {
  diagramlySoy.macro.dialog.spinner.soyTemplateName = 'diagramlySoy.macro.dialog.spinner';
}


diagramlySoy.macro.dialog.errorMessage = function(opt_data, opt_ignored) {
  return '<div class="aui-message error shadowed"><span class="aui-icon icon-error"></span><span>' + soy.$$escapeHtml(opt_data.message) + '</span></div>';
};
if (goog.DEBUG) {
  diagramlySoy.macro.dialog.errorMessage.soyTemplateName = 'diagramlySoy.macro.dialog.errorMessage';
}


diagramlySoy.macro.dialog.newDiagramWizard = function(opt_data, opt_ignored) {
  return '<div class="diagramly-blueprint-list" ><div class="diagramly-blueprint-list-item-wrapper" ><div id="blank" class="diagramly-blueprint-list-item"></div><span>' + soy.$$escapeHtml('Blank') + '</span></div><div style="margin-top : 35px;margin-bottom : 25px; width : 100%; height : 1px; border : 1px solid #c5c5c5;"></div><div  class="diagramly-blueprint-list-item-wrapper" ><img id="search" class="diagramly-blueprint-list-item" height="80px" length="80px" src="' + soy.$$escapeHtml(opt_data.imageUrlBase) + '/search.png"></img><span>' + soy.$$escapeHtml('Search') + '</span></div>';
};
if (goog.DEBUG) {
  diagramlySoy.macro.dialog.newDiagramWizard.soyTemplateName = 'diagramlySoy.macro.dialog.newDiagramWizard';
}


diagramlySoy.macro.dialog.newDiagram = function(opt_data, opt_ignored) {
  return '<div id="drawio-newdiagram-panel" class="drawio-newdiagram-panel" ><div class="drawio-list" ><div class="drawio-list-item" data-blank="true"></div><span>' + soy.$$escapeHtml('Blank') + '</span></div><div class="drawio-separator"></div><div >' + soy.$$escapeHtml('Recent diagrams') + ' :</div><div class="drawio-search-results"></div></div>';
};
if (goog.DEBUG) {
  diagramlySoy.macro.dialog.newDiagram.soyTemplateName = 'diagramlySoy.macro.dialog.newDiagram';
}


diagramlySoy.macro.dialog.diagramThumbnails = function(opt_data, opt_ignored) {
  var output = '<div>';
  var diagramList66 = opt_data.diagrams;
  var diagramListLen66 = diagramList66.length;
  for (var diagramIndex66 = 0; diagramIndex66 < diagramListLen66; diagramIndex66++) {
    var diagramData66 = diagramList66[diagramIndex66];
    output += '<div class="drawio-list" ><div class="drawio-list-item drawio-thumbnail" style="background-image:url(\'' + soy.$$escapeHtml(diagramData66.thumbnailURL) + '\')" data-diagramname="' + soy.$$escapeHtml(diagramData66.name) + '" data-ceoid="' + soy.$$escapeHtml(diagramData66.pageId) + '" data-revision="' + soy.$$escapeHtml(diagramData66.revision) + '" data-mimetype="' + soy.$$escapeHtml(diagramData66.mimeType) + '"></div><div style="max-height : 35px; overflow : hidden;font-size : 13px; word-wrap : break-word">' + soy.$$escapeHtml(diagramData66.name) + '</div></div>';
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  diagramlySoy.macro.dialog.diagramThumbnails.soyTemplateName = 'diagramlySoy.macro.dialog.diagramThumbnails';
}


diagramlySoy.macro.dialog.customTemplateThumbnails = function(opt_data, opt_ignored) {
  var output = '<div>';
  var templateList84 = opt_data.templates;
  var templateListLen84 = templateList84.length;
  for (var templateIndex84 = 0; templateIndex84 < templateListLen84; templateIndex84++) {
    var templateData84 = templateList84[templateIndex84];
    output += '<div class="drawio-list" ><div class="drawio-list-item drawio-thumbnail" style="background-image:url(\'' + soy.$$escapeHtml(templateData84.imagePath) + '\')" data-templateurl="' + soy.$$escapeHtml(templateData84.path) + '"></div><div class="description" style="max-height : 35px; overflow : hidden;font-size : 13px;text-transform:capitalize;">' + soy.$$escapeHtml(templateData84.name) + '</div></div>';
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  diagramlySoy.macro.dialog.customTemplateThumbnails.soyTemplateName = 'diagramlySoy.macro.dialog.customTemplateThumbnails';
}


diagramlySoy.macro.dialog.macroSettings = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" name="drawio-macro-settings"><fieldset><div style="margin: 12px 0 0 12px;"><label for="drawio-macro-width">' + soy.$$escapeHtml('Width') + ': </label><input id="drawio-macro-width" name="drawio-macro-width" size="5" type="text" value="' + soy.$$escapeHtml(opt_data.settings.width) + '"/>&nbsp &nbsp<label for="drawio-macro-tbstyle">' + soy.$$escapeHtml('Toolbar') + ': </label><select id="drawio-macro-tbstyle" name="drawio-macro-tbstyle"><option value="top" ' + ((opt_data.settings.tbstyle != 'embed' && opt_data.settings.tbstyle != 'hidden') ? 'selected="selected"' : '') + '>' + soy.$$escapeHtml('Top') + '</option><option value="inline" ' + ((opt_data.settings.tbstyle == 'inline') ? 'selected="selected"' : '') + '>' + soy.$$escapeHtml('Embed') + '</option><option value="hidden" ' + ((opt_data.settings.tbstyle == 'hidden') ? 'selected="selected"' : '') + '>' + soy.$$escapeHtml('Hidden') + '</option></select></div><div style="margin: 12px 0 0 12px;"><label for="drawio-macro-border">' + soy.$$escapeHtml('Border') + ' </label><input id="drawio-macro-border" name="drawio-macro-border" type="checkbox" ' + ((opt_data.settings.border == true) ? 'checked ' : '') + '/>&nbsp &nbsp<label for="drawio-macro-lightbox">' + soy.$$escapeHtml('Lightbox') + ' </label><input id="drawio-macro-lightbox" name="drawio-macro-lightbox" type="checkbox" ' + ((opt_data.settings.lbox == true) ? 'checked ' : '') + '/>&nbsp &nbsp<label for="drawio-macro-simpleViewer">' + soy.$$escapeHtml('Simple Viewer') + ' </label><input id="drawio-macro-simpleViewer" name="drawio-macro-simpleViewer" type="checkbox" ' + ((opt_data.settings.simpleViewer == true) ? 'checked ' : '') + '/></div><div style="margin: 12px 0 0 12px;"><label for="drawio-macro-links">' + soy.$$escapeHtml('Links') + ': </label><select id="drawio-macro-links" name="drawio-macro-links"><option value="auto" ' + ((opt_data.settings.links != 'blank' && opt_data.settings.links != 'self') ? 'selected="selected"' : '') + '>' + soy.$$escapeHtml('Automatic') + '</option><option value="blank" ' + ((opt_data.settings.links == 'blank') ? 'selected="selected"' : '') + '>' + soy.$$escapeHtml('Open in New Window') + '</option><option value="self" ' + ((opt_data.settings.links == 'self') ? 'selected="selected"' : '') + '>' + soy.$$escapeHtml('Open in This Window') + '</option></select></div><div style="margin: 12px 0 0 12px;"><label for="diagram-display-name">' + soy.$$escapeHtml('Diagram Title') + ': </label><input id="diagram-display-name" name="diagram-display-name" type="text" size="23" ' + ((opt_data.settings.diagramDisplayName) ? ' value="' + soy.$$escapeHtml(opt_data.settings.diagramDisplayName) + '" ' : '') + '/></div><div style="margin: 12px 0 0 12px;"><button id="drawio-aspect-selection" class="aui-button" >' + soy.$$escapeHtml('Select viewer page and layers') + '</button></div><div style="margin: 12px 0 0 12px; color : red;" id="drawioMacroMessageContainer"></div></fieldset></form>';
};
if (goog.DEBUG) {
  diagramlySoy.macro.dialog.macroSettings.soyTemplateName = 'diagramlySoy.macro.dialog.macroSettings';
}


diagramlySoy.macro.dialog.splashDialog = function(opt_data, opt_ignored) {
  var output = '<section id="drawio-splash-dialog" class="aui-dialog2 aui-dialog2-xlarge aui-layer" role="dialog" aria-hidden="true" data-aui-modal="true" data-aui-remove-on-hide="true"><!-- Dialog header --><header class="aui-dialog2-header" style="height : 50px"><h2 class="aui-dialog2-header-main">' + soy.$$escapeHtml('draw.io diagram') + '</h2></header><!-- Main dialog content --><div class="aui-dialog2-content" style="overflow : hidden; display : flex; padding : 0px"><div class="aui-navgroup-inner thin-scrollbar" style="max-height : 100%; width : 200px; overflow-y : auto"><nav class="aui-navgroup aui-navgroup-vertical" style="max-height : 100%"><ul class="aui-nav" style="margin-left : 5px; margin-top : 5px"><div class="aui-nav-heading" style="font-weight : 800; font-size : 12px; line-height : 1.9"><strong>' + soy.$$escapeHtml('draw.io diagram') + '</strong></div><li  data-item-type=\'blank\'><a class=\'docs-nav-link\'>' + soy.$$escapeHtml('Blank') + '</a></li><li  data-item-type=\'search\'><a class=\'docs-nav-link\'>' + soy.$$escapeHtml('Search') + '</a></li><li  data-item-type=\'thisPage\'><a class=\'docs-nav-link\'>' + soy.$$escapeHtml('From This Page') + '</a></li>';
  if (opt_data.customTemplateGroups.length > 0) {
    output += '<div class="aui-nav-heading" style="font-weight : 800; font-size : 12px; line-height : 1.9"><strong>' + soy.$$escapeHtml('Custom Templates') + '</strong></div>';
    var customTemplateGroupList185 = opt_data.customTemplateGroups;
    var customTemplateGroupListLen185 = customTemplateGroupList185.length;
    for (var customTemplateGroupIndex185 = 0; customTemplateGroupIndex185 < customTemplateGroupListLen185; customTemplateGroupIndex185++) {
      var customTemplateGroupData185 = customTemplateGroupList185[customTemplateGroupIndex185];
      output += '<li  data-item-type=\'customTemplate\' data-group-name=\'' + soy.$$escapeHtml(customTemplateGroupData185.name) + '\'><a class=\'docs-nav-link\' >' + soy.$$escapeHtml(customTemplateGroupData185.name) + '</a></li>';
    }
  }
  output += '<div class="aui-nav-heading" style="font-weight : 800; font-size : 12px; line-height : 1.9"><strong>' + soy.$$escapeHtml('draw.io Templates') + '</strong></div>';
  var templateGroupList195 = opt_data.templateGroups;
  var templateGroupListLen195 = templateGroupList195.length;
  for (var templateGroupIndex195 = 0; templateGroupIndex195 < templateGroupListLen195; templateGroupIndex195++) {
    var templateGroupData195 = templateGroupList195[templateGroupIndex195];
    output += '<li  data-item-type=\'template\' data-group-name=\'' + soy.$$escapeHtml(templateGroupData195.name) + '\'><a style="text-transform: capitalize" class=\'docs-nav-link\' >' + soy.$$escapeHtml(templateGroupData195.name) + '</a></li>';
  }
  output += '</ul></nav></div><div id=\'splash-dialog-content\' class="thin-scrollbar" style="overflow-y : auto; width : calc(100% - 200px); padding : 10px; border-left : 1px solid #cccccc"></div></div><footer class="aui-dialog2-footer" style="height : 50px"><div class="aui-dialog2-footer-actions"><input type="checkbox" id="sensitive-diagram-checkbox" class="sensitive-diagram" /> <label for="sensitive-diagram-checkbox" class="sensitive-diagram">' + soy.$$escapeHtml('Mark as sensitive') + '</label> <a href="https://www.diagrams.net/blog/drawio-sensitive-label" style="padding-right: 8px;" class="sensitive-diagram">?</a><button id="link-button" style="display : none;" class="aui-button">' + soy.$$escapeHtml('Link to Diagram') + '</button><button id="create-button" class="aui-button aui-button-primary">' + soy.$$escapeHtml('Create') + '</button><button id="import-button" style="display : none;" class="aui-button aui-button-primary">' + soy.$$escapeHtml('Import') + '</button><button id="close-button" class="aui-button aui-button-link">' + soy.$$escapeHtml('Close') + '</button></div></footer></section>';
  return output;
};
if (goog.DEBUG) {
  diagramlySoy.macro.dialog.splashDialog.soyTemplateName = 'diagramlySoy.macro.dialog.splashDialog';
}


diagramlySoy.macro.dialog.searchForm = function(opt_data, opt_ignored) {
  return '<form class="aui search-form" action="#"><fieldset class="search-input"><input id="drawio-search-input" style="max-width : 400px; height : 30px; margin-right : 5px; margin-top: -22px;"  type="text" class="select2-container aui" size="50" autocomplete="off"><input type="hidden" id="space-select" style="width: 300px" class="aui" /></fieldset></form><div id="search-results-container" class="thin-scrollbar" style="padding-top : 10px"></div>';
};
if (goog.DEBUG) {
  diagramlySoy.macro.dialog.searchForm.soyTemplateName = 'diagramlySoy.macro.dialog.searchForm';
}


diagramlySoy.macro.dialog.templateThumbnails = function(opt_data, opt_ignored) {
  var output = '<div><ul class="file-list">';
  var templateList217 = opt_data.templates;
  var templateListLen217 = templateList217.length;
  for (var templateIndex217 = 0; templateIndex217 < templateListLen217; templateIndex217++) {
    var templateData217 = templateList217[templateIndex217];
    output += '<li class="attached-file" data-url="' + soy.$$escapeHtml(templateData217.url) + '" data-libs="' + soy.$$escapeHtml(templateData217.libs) + '"><div class="file-container" ' + ((opt_data.darkMode) ? 'style="filter: invert(100%);"' : '') + '><img class="thumbnail" src="' + soy.$$escapeHtml(templateData217.previewUrl) + '"><i data-action="select" class="abs-icon select">Select</i>' + ((opt_data.zoomEnabled) ? '<i data-action="zoom" class="abs-icon zoom">Zoom</i>' : '') + '</div><span class="caption filename">' + soy.$$escapeHtml(templateData217.name) + '</span></li>';
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  diagramlySoy.macro.dialog.templateThumbnails.soyTemplateName = 'diagramlySoy.macro.dialog.templateThumbnails';
}


diagramlySoy.macro.dialog.searchResults2 = function(opt_data, opt_ignored) {
  var output = '<div><ul class="file-list">';
  var diagramList239 = opt_data.diagrams;
  var diagramListLen239 = diagramList239.length;
  for (var diagramIndex239 = 0; diagramIndex239 < diagramListLen239; diagramIndex239++) {
    var diagramData239 = diagramList239[diagramIndex239];
    output += '<li class="attached-file" data-url="' + soy.$$escapeHtml(diagramData239.url) + '" data-name="' + soy.$$escapeHtml(diagramData239.name) + '" data-ceo-id="' + soy.$$escapeHtml(diagramData239.ceoId) + '" data-revision="' + soy.$$escapeHtml(diagramData239.revision) + '" data-mime-type="' + soy.$$escapeHtml(diagramData239.mimeType) + '" title="' + soy.$$escapeHtml('Space') + ' - ' + soy.$$escapeHtml(diagramData239.spaceName) + '<br>' + soy.$$escapeHtml('Updated') + ' - ' + soy.$$escapeHtml(diagramData239.lastModified) + '<br>' + soy.$$escapeHtml('Last Updated By') + ' - ' + soy.$$escapeHtml(diagramData239.lastModifierName) + '<br>' + soy.$$escapeHtml('Version') + ' - ' + soy.$$escapeHtml(diagramData239.revision) + '"><div class="file-container" ' + ((opt_data.darkMode) ? 'style="filter: invert(100%);"' : '') + '><img class="thumbnail" src="' + soy.$$escapeHtml(diagramData239.previewUrl) + '"><i data-action="select" class="abs-icon select">Select</i>' + ((diagramData239.mimeType == 'application/gliffy+json') ? '<i class="abs-icon drawio-gliffy-logo">Zoom</i>' : '<i data-action="zoom" class="abs-icon zoom">Zoom</i>') + '</div><span class="caption filename">' + soy.$$escapeHtml(diagramData239.name) + '</span></li>';
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  diagramlySoy.macro.dialog.searchResults2.soyTemplateName = 'diagramlySoy.macro.dialog.searchResults2';
}


diagramlySoy.macro.dialog.massGliffyImportConfirmationDialog = function(opt_data, opt_ignored) {
  var output = '<section id="mass-gliffy-import-confirmation-dialog" class="aui-dialog2 aui-dialog2-medium aui-dialog2-warning aui-layer" role="dialog" tabindex="-1" aria-labelledby="demo-warning-dialog--heading" hidden><header class="aui-dialog2-header"><h1 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Confirm mass import') + '</h1></header><div class="aui-dialog2-content" style="min-height : 50px; max-height : 50px; overflow : hidden">' + ((opt_data.spaces.length == 0) ? '<span class="caption">' + soy.$$escapeHtml('All spaces will be imported') + '</span>' : '<span class="caption">' + soy.$$escapeHtml('Spaces listed below will be imported') + '</span>') + '</div><div class="aui-dialog2-content" style="overflow : auto; max-height : 500px"><ul class="file-list">';
  var spaceList297 = opt_data.spaces;
  var spaceListLen297 = spaceList297.length;
  for (var spaceIndex297 = 0; spaceIndex297 < spaceListLen297; spaceIndex297++) {
    var spaceData297 = spaceList297[spaceIndex297];
    output += '<li><span class="caption">' + soy.$$escapeHtml(spaceData297.key) + ' - ' + soy.$$escapeHtml(spaceData297.name) + '</span></li>';
  }
  output += '</ul></div><footer class="aui-dialog2-footer"><div class="aui-dialog2-footer-actions"><button id="mass-import-confirm-dialog-ok" class="aui-button aui-button-primary">' + soy.$$escapeHtml('Confirm') + '</button><button id="mass-import-confirm-dialog-cancel" class="aui-button aui-button-link">' + soy.$$escapeHtml('Cancel') + '</button></div></footer></section>';
  return output;
};
if (goog.DEBUG) {
  diagramlySoy.macro.dialog.massGliffyImportConfirmationDialog.soyTemplateName = 'diagramlySoy.macro.dialog.massGliffyImportConfirmationDialog';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.mxgraph.confluence.plugins.diagramly:drawio-rte', location = 'templates/soy/embedEditor.soy' */
// This file was automatically generated from embedEditor.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace diagramlySoy.embedEditor.
 */

if (typeof diagramlySoy == 'undefined') { var diagramlySoy = {}; }
if (typeof diagramlySoy.embedEditor == 'undefined') { diagramlySoy.embedEditor = {}; }


diagramlySoy.embedEditor.editorDialog = function(opt_data, opt_ignored) {
  return '<section role="dialog" id="drawio-embedEditor-dialog" class="aui-layer aui-dialog2 aui-dialog2-xlarge" aria-hidden="true"><!-- Dialog header --><header class="aui-dialog2-header"><!-- The dialog\'s title --><h2 class="aui-dialog2-header-main" data-i18n="embedDrawDiag">Embed draw.io Diagram</h2><!-- Close icon --><a class="aui-dialog2-header-close"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog" data-i18n="close">Close</span></a></header><!-- Main dialog content --><div class="aui-dialog2-content" style="padding: 5px;"> <!-- xlarge size is not enough, so this hack is to increase the height! --><div id="drawio-embedDialogTabs" class="aui-tabs horizontal-tabs" style="height: 520px; display: flex; flex-flow: column;"><ul class="tabs-menu"><li id="drawio-currentTab" class="menu-item" style="display: none"><a href="#drawio-current" data-i18n="curDiagram">Current Diagram</a></li><li class="menu-item active-tab"><a href="#drawio-recent" data-i18n="recentDiags">Recent Diagrams</a></li><li class="menu-item"><a href="#drawio-search" data-i18n="search">Search</a></li>' + ((opt_data.integType == 2 || opt_data.integType == 3 && opt_data.gClientId) ? '<li class="menu-item"><a href="#drawio-gDrive" data-i18n="googleDrive">Google Drive</a></li>' : '') + ((opt_data.integType == 2 || opt_data.integType == 3 && opt_data.oClientId) ? '<li class="menu-item"><a href="#drawio-oneDrive" data-i18n="oneDrive">OneDrive</a></li>' : '') + '<li class="menu-item"><a href="#drawio-extUrl" data-i18n="fromUrl">From URL</a></li><li class="menu-item"><a href="#drawio-csvImp" data-i18n="csvImport">CSV Import</a></li></ul><div class="tabs-pane" id="drawio-current" style="position: relative; flex: 1 1 auto; padding: 0;"></div><div class="tabs-pane active-pane" id="drawio-recent" style="position: relative; flex: 1 1 auto; padding: 0;"><div id="drawio-recentList"></div><div id="drawio-current-preview" style="bottom:4px;left:355px;position:absolute;top:0px;right:4px;"><span style="display:block;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);cursor:pointer"  data-i18n="diagPreview">Diagram Preview</span></div></div><div class="tabs-pane" id="drawio-search" style="position: relative; flex: 1 1 auto; padding: 0;"><form class="aui" action="#"><div class="field-group"><label for="drawio-searchStr" data-i18n="search">Search</label> <input class="text large-field" id="drawio-searchStr" value="" data-i18n-placeholder="diagramName" placeholder="Diagram Name"><button class="aui-button aui-button-primary" style="margin-left: 5px;" id="drawio-searchBtn" data-i18n="search">Search</button></div></form><div id="drawio-searchList"></div><div id="drawio-search-preview" style="bottom:4px;left:355px;position:absolute;top:40px;right:4px;"><span style="display:block;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);cursor:pointer"  data-i18n="diagPreview">Diagram Preview</span></div></div><div class="tabs-pane" id="drawio-gDrive" style="position: relative; flex: 1 1 auto; padding: 0;"></div><div class="tabs-pane" id="drawio-oneDrive" style="position: relative; flex: 1 1 auto; padding: 0;"></div><div class="tabs-pane" id="drawio-extUrl" style="position: relative; flex: 1 1 auto; padding: 0;"><table style="height:100%;width:100%;min-height: 450px;"><tr><td style="height:100%;width:350px;"><div style="height:100%;width:350px;border-right:1px solid #cccccc;"><form class="aui top-label" action="#"><div class="field-group" style="padding-left:15px;"><label for="drawio-diagramName" data-i18n="diagramName">Diagram Name</label><input class="text large-field" id="drawio-diagramName" value="" data-i18n-placeholder="diagramName" placeholder="Diagram Name"><br><label for="drawio-diagramUrl" data-i18n="diagUrl">Diagram URL</label><input class="text large-field" id="drawio-diagramUrl" value="" data-i18n-placeholder="diagUrl" placeholder="Diagram URL"><button class="aui-button aui-button-primary" style="margin: 5px;float: right;" id="drawio-showDiagBtn" data-i18n="showDiag">Show Diagram</button></div></form></div></td><td style="text-align: center; height:100%;width:calc(100% - 365px)"><div id="drawio-extUrlDiagram" style="text-align: center; height:100%;width:100%;position:relative;"><span style="display:block;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);cursor:pointer" data-i18n="diagPreview">Diagram Preview</span></div></td></tr></table></div><div class="tabs-pane" id="drawio-csvImp" style="position: relative; flex: 1 1 auto; padding: 0;"><table style="height:100%;width:100%;min-height: 450px;"><tr><td style="height:100%;width:350px;"><div style="height:100%;width:350px;border-right:1px solid #cccccc;"><form class="aui top-label" action="#"><div class="field-group" style="padding-left:15px;"><label for="drawio-csvDiagName" data-i18n="diagramName">Diagram Name</label><input class="text large-field" id="drawio-csvDiagName" value="" data-i18n-placeholder="diagramName" placeholder="Diagram Name"><br><label for="drawio-csvFileUrl" data-i18n="csvFileUrl">CSV File URL</label><input class="text large-field" id="drawio-csvFileUrl" value="" data-i18n-placeholder="csvFileUrl" placeholder="CSV File URL"><button class="aui-button aui-button-primary" style="margin: 5px;float: right;" id="drawio-impCsvBtn" data-i18n="generate">Generate</button></div></form></div></td><td style="text-align: center; height:100%;width:calc(100% - 365px)"><div id="drawio-csvDiagram" style="text-align: center; height:100%;width:100%;position:relative;"><span style="display:block;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);cursor:pointer" data-i18n="diagPreview">Diagram Preview</span></div></td></tr></table></div></div></div><!-- Dialog footer --><footer class="aui-dialog2-footer"><!-- Actions to render on the right of the footer --><div class="aui-dialog2-footer-actions"><button id="drawio-dialog-editSrc-button" style="display: none" class="aui-button aui-button-primary" data-i18n="editOwningPg">Edit owning page</button><button id="drawio-dialog-submit-button" class="aui-button aui-button-primary"  data-i18n="insert">Insert</button><button id="drawio-dialog-cancel-button" class="aui-button aui-button-link" data-i18n="cancel">Cancel</button></div><!-- Hint text is rendered on the left of the footer --><div id="drawio-errorMsg" class="aui-dialog2-footer-hint"></div></footer></section>';
};
if (goog.DEBUG) {
  diagramlySoy.embedEditor.editorDialog.soyTemplateName = 'diagramlySoy.embedEditor.editorDialog';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.mxgraph.confluence.plugins.diagramly:drawio-rte', location = 'js/mxEditorEventListener.js' */
window.addEventListener("message",function(a){if(MXGRAPH.editorFrame&&a.source==MXGRAPH.editorFrame[0].contentWindow&&a.origin==window.location.origin){a.stopImmediatePropagation();try{JSON.parse(a.data)}catch(b){return}a=JSON.parse(a.data);"MXGRAPH.postSave"==a["function"]&&MXGRAPH.postSave.apply(this,a.arguments);"MXGRAPH.closeEditor"==a["function"]&&MXGRAPH.closeEditor();"MXGRAPH.insertMacro"==a["function"]&&MXGRAPH.insertMacro.apply(this,a.arguments)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.mxgraph.confluence.plugins.diagramly:drawio-rte', location = 'js/mxInitRTE.js' */
AJS.bind("init.rte",function(c){function a(){b||alert("Loading, please wait...")}null==MXGRAPH.customMacroHandlers&&(MXGRAPH.customMacroHandlers={});var b=!1;AJS.MacroBrowser.setMacroJsOverride("inc-drawio",{opener:a});AJS.MacroBrowser.setMacroJsOverride("drawio",{opener:a});AJS.MacroBrowser.setMacroJsOverride("diagramly",{opener:a});AJS.Confluence.PropertyPanel.Macro.registerButtonHandler("dupe-diagram",a);AJS.Confluence.PropertyPanel.Macro.registerButtonHandler("edit-macro",a);AJS.Confluence.PropertyPanel.Macro.registerButtonHandler("drawio-size-small",
a);AJS.Confluence.PropertyPanel.Macro.registerButtonHandler("drawio-size-medium",a);AJS.Confluence.PropertyPanel.Macro.registerButtonHandler("drawio-size-large",a);AJS.Confluence.PropertyPanel.Macro.registerButtonHandler("drawio-size-original",a);AJS.I18n.get("com.mxgraph.confluence.plugins.diagramly");AJS.I18n.load({"close.name":"Close","apply.name":"Apply","remove.name":"Delete","allspaces.name":"all spaces"});
mxscript(ATLAS_RESOURCE_BASE+"/js/atlas-viewer.min.js",function(){mxLoadScripts([ATLAS_RESOURCE_BASE+"/js/mxUrlConverter.js",ATLAS_RESOURCE_BASE+"/js/DiagramlyUtils.js",ATLAS_RESOURCE_BASE+"/js/SplashDialog.js",ATLAS_RESOURCE_BASE+"/js/EmbedUtils.js"],function(){mxLoadScripts([ATLAS_RESOURCE_BASE+"/js/DrawioMacroButtonHandlers.js",ATLAS_RESOURCE_BASE+"/js/DiagramlyPageEditor.js",ATLAS_RESOURCE_BASE+"/js/EmbedEditor.js",ATLAS_RESOURCE_BASE+"/js/SpaceDropdown.js",ATLAS_RESOURCE_BASE+"/js/AspectDialog.js",
ATLAS_RESOURCE_BASE+"/js/DiagramUtils.js",ATLAS_RESOURCE_BASE+"/js/mxImageExport.js",ATLAS_RESOURCE_BASE+"/js/shapes-14-6-5.min.js"],function(){b=!0;for(fn in MXGRAPH.customMacroHandlers)MXGRAPH.customMacroHandlers[fn]();console.log("draw.io scripts loaded")})})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.reconcile-unknown-attachments:property-panel-unknown-image-placeholder', location = 'js/unknown-image-placeholder-property-panel.js' */
define("confluence-editor/unknown-attachment/property-panel",["wrm/context-path","ajs"],function(d,a){a&&a.Rte&&a.Rte.BootstrapManager?a.Rte.BootstrapManager.addOnInitCallback(function(){const c=a.Rte.getEditor();c?c.onClick.add(function(e,b){b=b.target;"IMG"===b.nodeName&&b.hasAttribute("src")&&0<=b.getAttribute("src").indexOf(d()+"/plugins/servlet/confluence/placeholder/unknown-attachment")&&e.execCommand("mceConfimage")}):a.log("Could not get Editor from adapter")}):a.log("Could not initialize property panel onclick handler on Confluence.Editor")});
require("confluence-editor/unknown-attachment/property-panel");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:drag-and-drop-for-editor-v4', location = 'js/editor-v4-init.js' */
require(["ajs","jquery","wrm/require"],function(b,d,c){b.Rte.BootstrapManager.addOnInitCallback(function(){c(["wrc!com.atlassian.confluence.plugins.drag-and-drop:editor-drop-handler"]).then(function(){require(["confluence-drag-and-drop/editor-drop-handler"],function(a){a.initialiseOverlay();a.initialise()})})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.gadgets.embedded:gadget-core-resources', location = 'js/rpc.js' */
var gadgets=gadgets||{};gadgets.rpc=function(){var CALLBACK_NAME="__cb";var DEFAULT_NAME="";var FE_G2C_CHANNEL="__g2c_rpc";var FE_C2G_CHANNEL="__c2g_rpc";var services={};var iframePool=[];var relayUrl={};var useLegacyProtocol={};var authToken={};var callId=0;var callbacks={};var setup={};var sameDomain={};var params={};if(gadgets.util){params=gadgets.util.getUrlParameters()}authToken[".."]=params.rpctoken||params.ifpctok||0;function getRelayChannel(){return typeof window.postMessage==="function"?"wpm":typeof document.postMessage==="function"?"dpm":navigator.product==="Gecko"?"fe":"ifpc"}function setupChannel(){if(relayChannel==="dpm"||relayChannel==="wpm"){window.addEventListener("message",function(packet){try{if(packet&&packet.origin&&packet.origin!=="null"&&typeof packet.data==="string"){if(packet.origin===location.origin){process(gadgets.json.parse(packet.data))}else{AJS.$.get(AJS.contextPath()+"/rest/whitelist/1/check",{url:packet.origin}).done(function(result){if(result&&result.inbound&&result.inbound===true){process(gadgets.json.parse(packet.data))}else{if(AJS.debug){AJS.log("RPC: request rejected (bad origin): "+(packet&&packet.origin?packet.origin:"undefined origin"))}}}).fail(function(jqXHR,textStatus,errorThrown){AJS.log("RPC: REST "+textStatus,errorThrown)})}}else{if(AJS.debug){AJS.log("RPC: request rejected (bad origin): "+(packet&&packet.origin?packet.origin:"undefined origin"))}}}catch(e){if(AJS.debug){var origin=packet&&packet.origin?packet.origin:"undefined origin";AJS.log("Error processing gadget rpc message from '"+origin+"': "+e)}}},false)}}var relayChannel=getRelayChannel();setupChannel();services[DEFAULT_NAME]=function(){throw new Error("Unknown RPC service: "+this.s)};services[CALLBACK_NAME]=function(callbackId,result){var callback=callbacks[callbackId];if(callback){delete callbacks[callbackId];callback(result)}};function setupFrame(frameId){if(setup[frameId]){return }if(relayChannel==="fe"){try{var frame=document.getElementById(frameId);frame[FE_G2C_CHANNEL]=function(args){process(gadgets.json.parse(args))}}catch(e){}}setup[frameId]=true}function encodeLegacyData(args){var stringify=gadgets.json.stringify;var argsEscaped=[];for(var i=0,j=args.length;i<j;++i){argsEscaped.push(encodeURIComponent(stringify(args[i])))}return argsEscaped.join("&")}function process(rpc){if(rpc&&typeof rpc.s==="string"&&typeof rpc.f==="string"&&rpc.a instanceof Array){if(authToken[rpc.f]){if(authToken[rpc.f]!=rpc.t){if(AJS.debug){console.log("Invalid auth token received for operation: "+rpc.s)}return }}if(rpc.c){rpc.callback=function(result){gadgets.rpc.call(rpc.f,CALLBACK_NAME,null,rpc.c,result)}}var result=(services[rpc.s]||services[DEFAULT_NAME]).apply(rpc,rpc.a);if(rpc.c&&typeof result!="undefined"){gadgets.rpc.call(rpc.f,CALLBACK_NAME,null,rpc.c,result)}}}function callFrameElement(targetId,serviceName,from,rpcData,callArgs){try{if(from!=".."){var fe=window.frameElement;if(typeof fe[FE_G2C_CHANNEL]==="function"){if(typeof fe[FE_G2C_CHANNEL][FE_C2G_CHANNEL]!=="function"){fe[FE_G2C_CHANNEL][FE_C2G_CHANNEL]=function(args){process(gadgets.json.parse(args))}}fe[FE_G2C_CHANNEL](rpcData);return }}else{var frame=document.getElementById(targetId);if(typeof frame[FE_G2C_CHANNEL]==="function"&&typeof frame[FE_G2C_CHANNEL][FE_C2G_CHANNEL]==="function"){frame[FE_G2C_CHANNEL][FE_C2G_CHANNEL](rpcData);return }}}catch(e){}callIfpc(targetId,serviceName,from,rpcData,callArgs)}function callIfpc(targetId,serviceName,from,rpcData,callArgs){var relay=gadgets.rpc.getRelayUrl(targetId);if(!relay){throw new Error("No relay file assigned for IFPC")}var src=null;if(useLegacyProtocol[targetId]){src=[relay,"#",encodeLegacyData([from,callId,1,0,encodeLegacyData([from,serviceName,"","",from].concat(callArgs))])].join("")}else{src=[relay,"#",targetId,"&",from,"@",callId,"&1&0&",encodeURIComponent(rpcData)].join("")}emitInvisibleIframe(src)}function emitInvisibleIframe(src){var iframe;for(var i=iframePool.length-1;i>=0;--i){var ifr=iframePool[i];try{if(ifr&&(ifr.recyclable||ifr.readyState==="complete")){ifr.parentNode.removeChild(ifr);if(window.ActiveXObject){iframePool[i]=ifr=null;iframePool.splice(i,1)}else{ifr.recyclable=false;iframe=ifr;break}}}catch(e){}}if(!iframe){iframe=document.createElement("iframe");iframe.style.border=iframe.style.width=iframe.style.height="0px";iframe.style.visibility="hidden";iframe.style.position="absolute";iframe.onload=function(){this.recyclable=true};iframePool.push(iframe)}iframe.src=src;setTimeout(function(){document.body.appendChild(iframe)},0)}function callSameDomain(target,rpc){if(typeof sameDomain[target]==="undefined"){sameDomain[target]=false;var targetEl=null;if(target===".."){targetEl=parent}else{targetEl=frames[target]}try{sameDomain[target]=targetEl.gadgets.rpc.receiveSameDomain}catch(e){}}if(typeof sameDomain[target]==="function"){sameDomain[target](rpc);return true}return false}if(gadgets.config){function init(config){if(config.rpc.parentRelayUrl.substring(0,7)==="http://"){relayUrl[".."]=config.rpc.parentRelayUrl}else{var params=document.location.search.substring(0).split("&");var parentParam="";for(var i=0,param;param=params[i];++i){if(param.indexOf("parent=")===0){parentParam=decodeURIComponent(param.substring(7));break}}relayUrl[".."]=parentParam+config.rpc.parentRelayUrl}useLegacyProtocol[".."]=!!config.rpc.useLegacyProtocol}var requiredConfig={parentRelayUrl:gadgets.config.NonEmptyStringValidator};gadgets.config.register("rpc",requiredConfig,init)}return{register:function(serviceName,handler){if(serviceName==CALLBACK_NAME){throw new Error("Cannot overwrite callback service")}if(serviceName==DEFAULT_NAME){throw new Error("Cannot overwrite default service:"+" use registerDefault")}services[serviceName]=handler},unregister:function(serviceName){if(serviceName==CALLBACK_NAME){throw new Error("Cannot delete callback service")}if(serviceName==DEFAULT_NAME){throw new Error("Cannot delete default service:"+" use unregisterDefault")}delete services[serviceName]},registerDefault:function(handler){services[""]=handler},unregisterDefault:function(){delete services[""]},call:function(targetId,serviceName,callback,var_args){++callId;targetId=targetId||"..";if(callback){callbacks[callId]=callback}var from="..";if(targetId===".."){from=window.name}var rpc={s:serviceName,f:from,c:callback?callId:0,a:Array.prototype.slice.call(arguments,3),t:authToken[targetId]};if(callSameDomain(targetId,rpc)){return }var rpcData=gadgets.json.stringify(rpc);var channelType=relayChannel;if(useLegacyProtocol[targetId]){channelType="ifpc"}switch(channelType){case"dpm":var targetDoc=targetId===".."?parent.document:frames[targetId].document;targetDoc.postMessage(rpcData);break;case"wpm":var targetWin=targetId===".."?parent:frames[targetId];targetWin.postMessage(rpcData,relayUrl[targetId]);break;case"fe":callFrameElement(targetId,serviceName,from,rpcData,rpc.a);break;default:callIfpc(targetId,serviceName,from,rpcData,rpc.a);break}},getRelayUrl:function(targetId){return relayUrl[targetId]},setRelayUrl:function(targetId,url,opt_useLegacy){relayUrl[targetId]=url;useLegacyProtocol[targetId]=!!opt_useLegacy},setAuthToken:function(targetId,token){authToken[targetId]=token;setupFrame(targetId)},getRelayChannel:function(){return relayChannel},receive:function(fragment){if(fragment.length>4){process(gadgets.json.parse(decodeURIComponent(fragment[fragment.length-1])))}},receiveSameDomain:function(rpc){rpc.a=Array.prototype.slice.call(rpc.a);window.setTimeout(function(){process(rpc)},0)}}}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.gadgets.embedded:gadget-core-resources', location = 'js/util.js' */
Function.prototype.inherits=function(parentCtor){function tempCtor(){}tempCtor.prototype=parentCtor.prototype;this.superClass_=parentCtor.prototype;this.prototype=new tempCtor();this.prototype.constructor=this};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.gadgets.embedded:gadget-core-resources', location = 'js/json.js' */
var gadgets=gadgets||{};gadgets.json=function(){function f(n){return n<10?"0"+n:n}Date.prototype.toJSON=function(){return[this.getUTCFullYear(),"-",f(this.getUTCMonth()+1),"-",f(this.getUTCDate()),"T",f(this.getUTCHours()),":",f(this.getUTCMinutes()),":",f(this.getUTCSeconds()),"Z"].join("")};var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function stringify(value){var a,i,k,l,r=/["\\\x00-\x1f\x7f-\x9f]/g,v;switch(typeof value){case"string":return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];if(c){return c}c=a.charCodeAt();return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)})+'"':'"'+value+'"';case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}a=[];if(typeof value.length==="number"&&!(value.propertyIsEnumerable("length"))){l=value.length;for(i=0;i<l;i+=1){a.push(stringify(value[i])||"null")}return"["+a.join(",")+"]"}for(k in value){if(value.hasOwnProperty(k)){if(typeof k==="string"){v=stringify(value[k]);if(v){a.push(stringify(k)+":"+v)}}}}return"{"+a.join(",")+"}"}}return{stringify:stringify,parse:function(text){if(/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/b-u]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return eval("("+text+")")}return false}}}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.gadgets.embedded:gadget-core-resources', location = 'js/gadgets-core.js' */
var gadgets=gadgets||{};gadgets.error={};gadgets.error.SUBCLASS_RESPONSIBILITY="subclass responsibility";gadgets.error.TO_BE_DONE="to be done";gadgets.log=function(message){if(window.console&&console.log){console.log(message)}else{var logEntry=document.createElement("div");logEntry.className="gadgets-log-entry";logEntry.innerHTML=message;document.body.appendChild(logEntry)}};gadgets.Extensible=function(){};gadgets.Extensible.prototype.setDependencies=function(dependencies){for(var p in dependencies){this[p]=dependencies[p]}};gadgets.Extensible.prototype.getDependencies=function(name){return this[name]};gadgets.UserPrefStore=function(){};gadgets.UserPrefStore.prototype.getPrefs=function(gadget){throw Error(gadgets.error.SUBCLASS_RESPONSIBILITY)};gadgets.UserPrefStore.prototype.savePrefs=function(gadget){throw Error(gadgets.error.SUBCLASS_RESPONSIBILITY)};gadgets.DefaultUserPrefStore=function(){gadgets.UserPrefStore.call(this)};gadgets.DefaultUserPrefStore.inherits(gadgets.UserPrefStore);gadgets.DefaultUserPrefStore.prototype.getPrefs=function(gadget){};gadgets.DefaultUserPrefStore.prototype.savePrefs=function(gadget){};gadgets.GadgetService=function(){};gadgets.GadgetService.prototype.setHeight=function(elementId,height){throw Error(gadgets.error.SUBCLASS_RESPONSIBILITY)};gadgets.GadgetService.prototype.setTitle=function(gadget,title){throw Error(gadgets.error.SUBCLASS_RESPONSIBILITY)};gadgets.GadgetService.prototype.setUserPref=function(id){throw Error(gadgets.error.SUBCLASS_RESPONSIBILITY)};gadgets.IfrGadgetService=function(){gadgets.GadgetService.call(this);var service=this;gadgets.rpc.register("resize_iframe",function(){service.setHeight.apply(this,arguments)});gadgets.rpc.register("set_pref",function(){service.setUserPref.apply(this,arguments)});gadgets.rpc.register("set_title",function(){service.setTitle.apply(this,arguments)});gadgets.rpc.register("requestNavigateTo",function(){service.requestNavigateTo.apply(this,arguments)})};gadgets.IfrGadgetService.inherits(gadgets.GadgetService);gadgets.IfrGadgetService.prototype.setHeight=function(height){if(height>gadgets.container.maxheight_){height=gadgets.container.maxheight_}var element=document.getElementById(this.f);if(element){element.style.height=height+"px"}};gadgets.IfrGadgetService.prototype.requestNavigateTo=function(view,opt_params){var id=this.getGadgetIdFromModuleId(this.f);var url=this.getUrlForView(view);if(opt_params){var paramStr=JSON.stringify(opt_params);if(paramStr.length>0){url+="&appParams="+encodeURIComponent(paramStr)}}if(url&&document.location.href.indexOf(url)==-1){document.location.href=url}};gadgets.IfrGadgetService.prototype.getUrlForView=function(view){if(view==="canvas"){return"/canvas"}else{if(view==="profile"){return"/profile"}else{return null}}};gadgets.IfrGadgetService.prototype.getGadgetIdFromModuleId=function(moduleId){return parseInt(moduleId.match(/_([0-9]+)$/)[1],10)};gadgets.LayoutManager=function(){};gadgets.LayoutManager.prototype.getGadgetChrome=function(gadget){throw Error(gadgets.error.SUBCLASS_RESPONSIBILITY)};gadgets.StaticLayoutManager=function(){gadgets.LayoutManager.call(this)};gadgets.StaticLayoutManager.inherits(gadgets.LayoutManager);gadgets.StaticLayoutManager.prototype.setGadgetChromeIds=function(gadgetChromeIds){this.gadgetChromeIds_=gadgetChromeIds};gadgets.StaticLayoutManager.prototype.getGadgetChrome=function(gadget){var chromeId=this.gadgetChromeIds_[gadget.id];return chromeId?document.getElementById(chromeId):null};gadgets.FloatLeftLayoutManager=function(layoutRootId){gadgets.LayoutManager.call(this);this.layoutRootId_=layoutRootId};gadgets.FloatLeftLayoutManager.inherits(gadgets.LayoutManager);gadgets.FloatLeftLayoutManager.prototype.getGadgetChrome=function(gadget){var layoutRoot=document.getElementById(this.layoutRootId_);if(layoutRoot){var chrome=document.createElement("div");chrome.className="gadgets-gadget-chrome";chrome.style.cssFloat="left";layoutRoot.appendChild(chrome);return chrome}else{return null}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.gadgets:macro-browser-for-gadgetsplugin', location = 'script/gadget-macro-browser.js' */
AJS.toInit(function(l){AJS.MacroBrowser.setMacroJsOverride("gadget",{postPreview:function(b,c){b=b.contentWindow.AJS;for(var a={},d=l("#macro-param-div-preferences input").val().split("\x26"),e=0,f=d.length;e<f;e++){var g=d[e].split("\x3d");try{a[decodeURI(g[0])]=decodeURI(g[1])}catch(m){}}c.needsConfig&&b&&!a.isConfigured&&(c=l("#macro-browser-dialog .dialog-button-panel .ok"),l("#save-warning-span").addClass("gadget-not-configured-warning").text("Please complete the configuration in the preview area first").removeClass("hidden"),
c.prop("disabled",!0))},beforeParamsSet:function(b,c){var a=b.preferences;if(!c&&a){c=a.split("\x26");a=0;for(var d=c.length;a<d;a++){var e=c[a].split("\x3d");b[decodeURI(e[0])]=decodeURI(e[1])}}return b},updateMacroParametersForPreview:function(b){b.forceWrite=!0;return b},manipulateMarkup:function(b){if(AJS.MacroBrowser.gadgetPrefsChanged){b=top.document.getElementById("macro-insert-container");b=l("#macro-param-div-preferences input",b);var c="",a;for(a in AJS.MacroBrowser.gadgetPrefs)0!=c.length&&
(c+="\x26"),c=c+encodeURI(a)+"\x3d"+encodeURI(AJS.MacroBrowser.gadgetPrefs[a]);b.val(c)}},getMacroDetailsFromSelectedMacro:function(b,c){for(var a=c.params.url,d=0,e=b.length;d<e;d++){var f=b[d];if(f.macroName===c.name&&f.gadgetUrl===a)return f}},beforeParamsRetrieved:function(b,c,a){var d="";if(c.nonHiddenUserPrefs){var e=!0,f={},g=b.preferences;if(g){g=g.split("\x26");for(var m=0,p=g.length;m<p;m++){var n=g[m].split("\x3d"),q=decodeURI(n[0]);n=decodeURI(n[1]);f[q]=n}}for(var h in a)f[h]=a[h];for(var k in f){a:{a=
c.formDetails.parameters;for(h=0;h<a.length;h++)if(a[h].name==k){a=f[k]==a[h].defaultValue;break a}AJS.log("Unable to find matching param for "+k);a=!1}a||(e||(d+="\x26"),e=!1,d=d+encodeURI(k)+"\x3d"+encodeURI(f[k]))}b.preferences=d}return b}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.profile-picture:profile-picture-editor_resources', location = 'js/profile-picture.js' */
AJS.bind("init.rte",function(){AJS.Confluence.PropertyPanel.Macro.registerButtonHandler("viewProfile",function(a,d){a=AJS.$(d);var c={};a.attr("data-macro-parameters")&&AJS.$.each(a.attr("data-macro-parameters").split("|"),function(b,e){b=e.split("\x3d");c[b[0]]=b[1]});window.open(AJS.Confluence.getBaseUrl()+"/display/~"+c.User).opener=null})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-editor-resources', location = 'templates/view-file-macro-editor.soy' */
// This file was automatically generated from view-file-macro-editor.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.ViewFileMacro.Templates.Editor.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.ViewFileMacro == 'undefined') { Confluence.ViewFileMacro = {}; }
if (typeof Confluence.ViewFileMacro.Templates == 'undefined') { Confluence.ViewFileMacro.Templates = {}; }
if (typeof Confluence.ViewFileMacro.Templates.Editor == 'undefined') { Confluence.ViewFileMacro.Templates.Editor = {}; }


Confluence.ViewFileMacro.Templates.Editor.viewFilePropertyPanelHeader = function(opt_data, opt_ignored) {
  return '<div class="view-file-property-panel-header"><span class="file-name"><span class="aui-icon aui-icon-small ' + soy.$$escapeHtml(opt_data.fileIcon) + '"></span>' + soy.$$escapeHtml(opt_data.fileName) + '</span></div>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.Editor.viewFilePropertyPanelHeader.soyTemplateName = 'Confluence.ViewFileMacro.Templates.Editor.viewFilePropertyPanelHeader';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-editor-resources', location = '/js/components/view-file-macro-properties-panel.js' */
define("vfm/components/view-file-macro-properties-panel","jquery underscore ajs confluence/legacy confluence/jsUri tinymce vfm/view-file-macro-utils".split(" "),function(h,m,e,r,x,l,n){function y(a,d){var b=m.find(Object.keys(p),function(z){return p[z]===d});if(b)for(var c=0,f=a.length;c<f;c++){var g=a[c],k=g.className.replace(" active","");-1!==k.indexOf("macro-property-panel-"+b)&&(k+=" active");g.className=k}}function A(a){var d=m.reject(a,function(c){return-1<c.className.indexOf("macro-placeholder-property-panel-edit-button")||
-1<c.className.indexOf("macro-placeholder-property-panel-remove-button")});a.splice(0,a.length);for(var b=0;b<d.length;b++)a.push(d[b])}function t(a,d){a=new x(a);""!==a.getQueryParamValue("height")&&a.replaceQueryParam("height",d);return a.toString()}function u(a){a=a.attr("data-macro-parameters");for(var d=[],b="",c=0;c<a.length;c++){var f=a[c];"\\"===f?(b+=f,c+1!==a.length&&(b+=a[++c])):"|"===f?(d.push(b),b=""):b+=f}d.push(b);return d}function v(a,d){a=u(a);return(a=m.find(a,function(b){return 0<=
b.indexOf(d+"\x3d")}))?a.split("\x3d")[1]:null}function q(a,d){if(-1===h(a).attr("class").indexOf("active")){e.Confluence.PropertyPanel.destroy();var b=Object.keys(p),c=h(a).attr("class");for(a=0;a<b.length;a++)if(-1!==c.indexOf(b[a])){var f=p[b[a]];c=h(d);c.attr("height",f);var g=c.attr("src");null!=g&&0<=g.indexOf("/servlet/view-file-macro/placeholder")&&(c.attr("src",t(c.attr("src"),f)),c.attr("data-mce-src",t(c.attr("data-mce-src"),f)));f="height\x3d"+f;g=u(c);var k=v(c,"height");k?(k=m.indexOf(g,
"height\x3d"+k),g[k]=f):g.push(f);c.attr("data-macro-parameters",g.join("|"));l.activeEditor.undoManager.add();h(d).click();c=l.activeEditor.getDoc().createRange();c.setStartBefore(d);c.setEndAfter(d);l.activeEditor.getDoc().getSelection().addRange(c);e.trigger("analyticsEvent",{name:"confluence.view-file.resize."+b[a].substring(b[a].lastIndexOf("-")+1,b[a].length)});break}}}function B(){e.bind("created.property-panel",function(a,d){var b=h(d.anchor);if("view-file"===b.attr("data-macro-name")){a=
r.ViewFileMacro.Templates.Editor.viewFilePropertyPanelHeader;var c=v(b,"name");b=n.getParameterByName(b.attr("src"),"mimeType");b=e.Confluence.FileTypesUtils.getAUIIconFromMime(b);a=h(a({fileName:c,fileIcon:b}));d.panel.find(".aui-property-panel").prepend(a);d.shouldFlip&&d.tip.css({top:d.panel.outerHeight()})}})}var p={"view-file-size-small":"150","view-file-size-medium":"250","view-file-size-large":"400"},w=[{className:"macro-property-panel-view-file-size-small editor-resize resize-small",text:"",
tooltip:"Small thumbnail",iconClass:"aui-icon aui-icon-small aui-iconfont-image-resize",click:q},{className:"macro-property-panel-view-file-size-medium editor-resize resize-medium",text:"",tooltip:"Medium thumbnail",iconClass:"aui-icon aui-icon-small aui-iconfont-image-resize",click:q},{className:"macro-property-panel-view-file-size-large editor-resize resize-large",text:"",tooltip:"Large thumbnail",
iconClass:"aui-icon aui-icon-small aui-iconfont-image-resize",click:q},null,{className:"macro-property-panel-view-file-convert-to-link",text:"Show as link",tooltip:"Show as link",click:function(a,d){e.trigger("analyticsEvent",{name:"confluence.view-file.convert.to-link-trigger"});e.Confluence.PropertyPanel.destroy();(function(b){b=n.getParameterByName(h(b).attr("src"),"attachmentId");
b=e.REST.makeUrl("attachment/"+b+".json");h.ajax({type:"GET",url:b,contentType:"application/json; charset\x3dutf-8",dataType:"json"}).success(function(c){c=r.Link.fromREST(c).insert();l.activeEditor.undoManager.add();l.activeEditor.focus();c.click()})})(d)}}];return{init:function(){e.Confluence.PropertyPanel.Macro.registerInitHandler(function(a,d,b){A(d);a=h(a);b=a.attr("data-mce-src");if(!(b&&-1<b.indexOf("placeholder/unknown-attachment"))){b=0;for(var c=w.length;b<c;b++)d.push(w[b]);(a=a.attr("height"))||
(a="comment"===e.Meta.get("content-type")?n.DEFAULT_HEIGHT_IN_COMMENT:n.DEFAULT_HEIGHT);y(d,a)}},"view-file");B()}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-editor-resources', location = '/js/components/view-file-macro-link-properties-panel.js' */
define("vfm/components/view-file-macro-link-properties-panel",["jquery","ajs","tinymce","vfm/view-file-macro-utils"],function(f,b,g,l){function m(c){if(c){var d=f(c);c=d.attr("data-linked-resource-type");d=d.attr("data-linked-resource-content-type");return b.MacroBrowser.getMacroMetadata("view-file")&&"attachment"===c&&!(d&&0===d.indexOf("image"))}return!1}function n(c){var d=b.REST.makeUrl("attachment/"+f(c).attr("data-linked-resource-id")+".json");f.ajax({type:"GET",url:d,contentType:"application/json; charset\x3dutf-8",
dataType:"json"}).success(function(a){var e={name:a.fileName};b.Data.get("content-id")!==a.ownerId&&(e.page=a.parentTitle,e.space=a.space.key,"blogpost"===a.parentContentType&&(a=a.createdDate.date.split("-"),e.date=a[0]+"/"+a[1]+"/"+a[2].substring(0,2)+"/"));e.height="comment"===b.Meta.get("content-type")?l.DEFAULT_HEIGHT_IN_COMMENT:l.DEFAULT_HEIGHT;e={contentId:b.Meta.get("content-id")||"0",macro:{name:"view-file",params:e}};g.confluence.MacroUtils.insertMacro(e,c).done(function(h){f(h).click();
const k=g.activeEditor.getDoc().createRange();k.setStartBefore(h);k.setEndAfter(h);g.activeEditor.getDoc().getSelection().addRange(k)})})}return{init:function(){b.bind("link-property-panel-buttons.created",function(c,d){c=d.buttons;var a=d.link;m(a)&&c.push({className:"link-property-panel-convert-to-thumbnail-button",text:"Show as thumbnail",tooltip:"Show as thumbnail",click:function(){b.Confluence.PropertyPanel.destroy();
n(a);b.trigger("analyticsEvent",{name:"confluence.view-file.convert.to-thumbnail-trigger"})}})})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-editor-resources', location = '/js/components/vfm-editor-poller.js' */
define("vfm/components/vfm-editor-poller","ajs jquery underscore tinymce vfm/view-file-macro-utils vfm/services/conversion-service".split(" "),function(x,m,r,k,a,t){function v(){if(k.activeEditor&&l){var n=m("img[data-macro-name\x3d'view-file'][src*\x3d'thumbnailStatus\x3d"+a.THUMBNAIL_STATUS_IN_PROGRESS+"'][data-thumbnail-status!\x3d'"+a.THUMBNAIL_STATUS_ERROR+"']",k.activeEditor.dom.doc);if(0<n.length){var u=!1;n.each(function(){var d=m(this).attr("src"),c=a.getParameterByName(d,"attachmentId");
d=a.getParameterByName(d,"version");b[c]&&b[c].version===d||(b[c]={version:d},u=!0)});u&&(f=a.THUMBNAIL_POLLING_PERIOD);t.postThumbnailConversionResults(b).then(function(d){k.activeEditor&&l&&(r.each(d,function(c,e){if(b[e]){var p=m("img[data-macro-name\x3d'view-file'][src*\x3d'attachmentId\x3d"+e+"']",k.activeEditor.dom.doc),h=b[e].version;p.attr("data-thumbnail-status",c);c===a.THUMBNAIL_STATUS_CONVERTED?(c=p.attr("src"),h=t.getThumbnailUrl(e,h),h=a.addParamsToUrl(h,{attachmentId:e,mimeType:a.getParameterByName(c,
"mimeType")}),p.attr("src",h),delete b[e]):c===a.THUMBNAIL_STATUS_ERROR&&delete b[e]}}),f=r.isEmpty(b)?a.THUMBNAIL_POLLING_PERIOD:f*w,q())})}else 0===n.length&&(f=a.THUMBNAIL_POLLING_PERIOD,q())}}function q(){l=!0;g&&clearTimeout(g);g=setTimeout(v,f)}var g,l=!1,b={},f=a.THUMBNAIL_POLLING_PERIOD,w=a.THUMBNAIL_POLLING_BACKOFF_RATIO;return{startPolling:q,stopPolling:function(){g&&(clearTimeout(g),g=void 0);l=!1;b={};f=a.THUMBNAIL_POLLING_PERIOD}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-editor-resources', location = '/js/vfm-editor.js' */
require(["ajs","tinymce","vfm/components/view-file-macro-properties-panel","vfm/components/view-file-macro-link-properties-panel","vfm/components/vfm-editor-poller"],function(a,d,e,f,c){a.toInit(function(){a.MacroBrowser.setMacroJsOverride("view-file",{opener:function(b){}});e.init();f.init()});d.PluginManager.add("viewFilePoller",function(){return{init:function(b){a.bind("rte-ready",function(){c.startPolling()});a.bind("rte-destroyed",function(){c.stopPolling()})}}});a.Rte.BootstrapManager.addTinyMcePluginInit(function(b){b.plugins+=
",viewFilePoller"})},void 0,!0);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.widgetconnector:widget-connector-autoconvert-web-resources-v4', location = 'com/atlassian/confluence/extra/widgetconnector/js/autoconvert-widget-links.js' */
define("confluence-widget-connector/autoconvert",["tinymce"],function(c){var d=[/open.spotify.com/,/facebook.com/,/linkedin.com\/embed/,/twitter.com/,/figma.com/,/prezi.com/,/microsoftstream.com/,/google([.a-z]+)\/(maps|calendar|presentation|document)/,/google([.a-z]+)\/spreadsheets(.*)(pubchart|pubhtml)/];return{WidgetAutoConvertFn:function(e,g,a){var b=decodeURI(e.source);d.find(function(f){return b.match(f)})?c.plugins.Autoconvert.convertMacroToDom({name:"widget",params:{url:b}},a,a):a()}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.widgetconnector:widget-connector-autoconvert-web-resources-v4', location = 'com/atlassian/confluence/extra/widgetconnector/js/autoconvert-widget-links-editor-v4.js' */
define("confluence-widget-connector/autoconvert-plugin-v4",["tinymce","confluence-editor/loader/tinymce-bootstrap","confluence-widget-connector/autoconvert"],function(b,c,d){b.PluginManager.add("widgetconnector",function(a){a.on("init",function(){a.execCommand("addAutoconverter",!1,d.WidgetAutoConvertFn)})});c.addTinyMcePluginInit(function(a){a.plugins+=",widgetconnector"})});
try{require("confluence-widget-connector/autoconvert-plugin-v4")}catch(b){console.warn("Unable to load widget autoconvert",b)};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.extra.officeconnector:macro-browser-smart-fields', location = 'javascript/office-connector-macro-fields.js' */
(function(d){AJS.MacroBrowser.activateSmartFieldsAttachmentsOnPage("viewdoc",["doc","docx"]);AJS.MacroBrowser.activateSmartFieldsAttachmentsOnPage("viewpdf",["pdf"]);AJS.MacroBrowser.activateSmartFieldsAttachmentsOnPage("viewxls",["xls","xlsx"]);AJS.MacroBrowser.activateSmartFieldsAttachmentsOnPage("viewppt",["ppt","pptx"]);AJS.MacroBrowser.Macros.viewfile={updateSelectedMacro:function(b){var a=b.params[""]||b.params.name;if(a){var c=a.lastIndexOf(".");0<c&&(a=a.substring(c+1))&&("doc"==a&&"docx"==
a&&(b.name="viewdoc"),"pdf"==a&&(b.name="viewpdf"),"ppt"==a&&"pptx"==a&&(b.name="viewppt"),"xls"==a&&"xlsx"==a&&(b.name="viewxls"))}}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.masterdetail:master-details-macro-browser', location = 'com/atlassian/confluence/extra/masterdetail/js/macro-browser-options.js' */
AJS.toInit(function(a){AJS.MacroBrowser.setMacroJsOverride("detailssummary",{fields:{cqlSelect2CustomOptions:{maximumSelectionSize:"60"}}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.onresolve.confluence.groovy.groovyrunner:split_includeVersionMacro', location = 'js/includeVersionMacro.b4437582d733de697b60.js' */
"use strict";(self.webpackJsonpScriptRunner=self.webpackJsonpScriptRunner||[]).push([["includeVersionMacro"],{38896:()=>{AJS.toInit((function(e){var t="location",n=function(t,n){e.ajax({type:"GET",dataType:"json",url:"".concat(AJS.contextPath(),"/rest/scriptrunner-confluence/latest/content-info/history"),data:{location:t,spaceKey:AJS.params.spaceKey}}).fail((function(e,t,n){403===e.status?alert("You do not have permission to view the included page, press Cancel"):alert("Failed to get versions for this page: ".concat(e.responseText))})).done((function(t){var o=e("#macro-param-location-select");o.empty().append("<option value='0'>Latest</option>"),e.each(t,(function(t,a){var r=e("<option>".concat(a,"</option>"));a.toString()===n&&r.attr("selected","selected"),o.append(r)})),n||o.find("option:nth(1)").attr("selected","selected"),o.trigger("change")}))};AJS.MacroBrowser.setMacroJsOverride("include-version",{fields:{int:{version:function(){var t=e(Confluence.Templates.MacroBrowser.macroParameterSelect()),n=e("select",t).attr("id","macro-param-location-select"),o=e('<input type="hidden"/>').appendTo(t);return n.bind("change",(function(){o.val(e(n).val()),o.trigger("change")})),AJS.MacroBrowser.Field(t,o,{})}}},beforeParamsSet:function(o){return e("#macro-param-location").on("selected.autocomplete-content",(function(t){n(e(t.currentTarget).val(),null)})),t in o&&n(o.location,o.version),o}})}))}},e=>{var t;t=38896,e(e.s=t)}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:code-macro-editor', location = '/scripts/code-macro-languages.js' */
/**
 * Provides custom behaviour in the macro browser for the code macro.
 */
(function($) {

    var CodeMacroConfig = function() {};

    CodeMacroConfig.prototype.fields = {
        "string" : {
            "language" : function(param, options) {

                var paramDiv = $(Confluence.Templates.MacroBrowser.macroParameterSelect());
                var input = $("select", paramDiv);

                // we need to do some trickery when the value is first set, and when the value is subsequently changed,
                // so set this up.
                if (options == null)
                    options = {};
                options.setValue = function(value) {

                    var targetOption = input.find("option[value='" + value + "']");
                    if (targetOption.length == 0) {
                        var option = $("<option/>");
                        option.val(value);
                        option.text(value);
                        input.append(option);
                    }
                };

                bindAsyncDropDown(input);
                return new AJS.MacroBrowser.Field(paramDiv, input, options);
            }
        }
    };

    AJS.MacroBrowser.Macros["code"] = new CodeMacroConfig();

    /**
     * Populates an HTML Select element with the list of configured syntax highlighters.
     * @param dropDown JQuery selector for the HTML select element to be populated.
     */
    function bindAsyncDropDown(dropDown) {
        // Load the languages from Confluence
        getLanguagesAsync(function(languages) {
                    if (!languages.length)
                    {
                        AJS.log("Configured code macro languages result was not in the expected format.");
                        return;
                    }

                    var currentValue = dropDown.val();

                    dropDown.empty();
                    dropDown.append($("<option/>").attr("value", ""));

                    $.each(languages, function(index, lang) {
                        var option = $("<option />");
                        option.val(lang.aliases[0]);
                        option.text(lang.friendlyName);

                        dropDown.append(option);
                    });

                    // restore the currently selected value.
                    dropDown.val(currentValue);
                },
                function(xhr, textStatus, errorThrown) {
                    AJS.log("Failed to retrieve syntax highlighters from Confluence " + textStatus + " - " + errorThrown);
                });
    }

    /**
     * Asynchronously retrieves the current set of syntax highlighters currently installed for the Code macro.
     *
     * @param successHandler Callback to invoke if the retrieval is successful
     * @param errorHandler Callback to invoke if the retrieval fails.
     */
    function getLanguagesAsync(successHandler, errorHandler) {
        AJS.$.ajax({
            async: true,
            url: AJS.contextPath() + "/plugins/newcode/getlanguages.action",
            dataType: "json",
            timeout: 10000, // 10 seconds,
            error: function(xhr, textStatus, errorThrown) {
                if (errorHandler && typeof(errorHandler) == "function") {
                    errorHandler(xhr, textStatus, errorThrown);
                }
            },
            success: function(data) {
                if (successHandler && typeof(successHandler) == "function") {
                    successHandler(data);
                }
            }
        });
    }
})(AJS.$);
}catch(e){WRMCB(e)};