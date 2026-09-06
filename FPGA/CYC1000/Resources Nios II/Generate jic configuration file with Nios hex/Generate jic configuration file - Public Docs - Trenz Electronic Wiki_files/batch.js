WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/request-access-util.js' */
define("confluence/request-access/request-access-util",["confluence/legacy"],function(b){return{messageBody:function(a){return 1===a.length?AJS.format("We\u0027\u0027ve asked {0} to give you access. You\u0027\u0027ll get an email once the request is approved.",b.Request.Access.usernameLink({user:a[0]})):2===a.length?AJS.format("We\u0027\u0027ve asked {0} and {1} to give you access. You\u0027\u0027ll get an email once the request is approved.",b.Request.Access.usernameLink({user:a[0]}),b.Request.Access.usernameLink({user:a[1]})):3===a.length?
AJS.format("We\u0027\u0027ve asked {0}, {1} and one more user to give you access. You\u0027\u0027ll get an email once the request is approved.",b.Request.Access.usernameLink({user:a[0]}),b.Request.Access.usernameLink({user:a[1]})):AJS.format("We\u0027\u0027ve asked {0}, {1} and {2} more users to give you access. You\u0027\u0027ll get an email once the request is approved.",b.Request.Access.usernameLink({user:a[0]}),b.Request.Access.usernameLink({user:a[1]}),a.length-2)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/request-access-page.js' */
require(["ajs","jquery","confluence/legacy","confluence/meta","confluence/request-access/request-access-util"],function(a,b,e,h,m){a.toInit(function(){var d=h.get("page-id"),k=h.get("remote-user"),n=b(".request-access-container"),c=b(".request-access-container button"),f=c.data("access-type");b("#invite-to-edit-draft").length&&(d=b("#invite-to-edit-draft").data("draft-id"));n.length&&(b("#breadcrumbs").hide(),b("#title-text.with-breadcrumbs").hide(),c.length&&a.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page.view",
data:{pageId:d,requestAccessUser:k,accessType:f}}));c.prop("disabled",!1);c.removeAttr("aria-disabled");c.click(function(){a.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page",data:{pageId:d,requestAccessUser:k,accessType:f}});c.attr("aria-disabled","true");var l=b(e.Request.Access.loading({}));c.replaceWith(l);b.ajax({url:e.getContextPath()+"/rest/access/latest/page/restriction/"+d+"/request/"+f,type:"POST",contentType:"application/json; charset\x3dutf-8",success:function(g){0===
g.users.length?a.flag({type:"error",title:"Access request unsuccessful",body:"Your request for access has not been sent. Contact your space admin."}):a.flag({type:"success",title:"Request sent",body:m.messageBody(g.users)})},error:function(g,p){a.flag({type:"error",title:"Access request unsuccessful",
body:"Your request for access has not been sent. Contact your space admin."})},complete:function(){l.remove();e.Binder.userHover()}})})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/request-edit-access-dialog.js' */
require(["ajs","jquery","confluence/legacy","confluence/meta","confluence/request-access/request-access-util"],function(a,c,f,h,q){a.toInit(function(){function r(){var b=window.location.search.match(/[\?&]requestEditAccess=/);return!(!b||!b.length)}var t=WRM.data.claim("com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources.mail-server-configured"),k=c("#system-content-items"),u=0!==c("#content-metadata-page-restrictions").length,l=h.get("page-id"),
g=h.get("remote-user");if(k.length&&u&&!c("#editPageLink").length&&r()){var m=c(f.Request.Access.loading()),e=a.InlineDialog(k,"requestAccessDialog",function(b,w,v){b.css({padding:"20px"}).html(f.Request.Access.dialog({canRequestAccess:t&&g}));b.on("click","#request-access-dialog-button",function(n){n.stopPropagation();b.find(".actions-result").replaceWith(m);a.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page",data:{pageId:l,requestAccessUser:g,accessType:"edit"}});
var p="";c.ajax({url:f.getContextPath()+"/rest/access/latest/page/restriction/"+l+"/request/edit",type:"POST",contentType:"application/json; charset\x3dutf-8",data:g,success:function(d){0===d.users.length?a.flag({type:"error",title:"Access request unsuccessful",body:"Your request for access has not been sent. Contact your space admin."}):a.flag({type:"success",title:"Request sent",
body:q.messageBody(d.users)})},error:function(d){p=412==d.status?"Access was granted, but there is not a mail server configured so the notification could not be sent.":502==d.status?"Access was granted, but an unexpected error happened while sending the notification.":"Sorry, there was an unexpected error while granting access.";a.flag({type:"error",title:"Access request unsuccessful",body:p})},complete:function(){m.remove();e.hide()}})});b.on("click",".aui-button.cancel",function(n){e.hide()});v();return!1},function(){return{offsetY:2,
offsetX:0,width:350,hideDelay:null,noBind:!0,hideCallback:function(){setTimeout(e.hide(),5E3)}}}());e.show()}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/grant-access.js' */
require(["ajs","jquery","confluence/legacy","confluence/meta"],function(a,d,l,m){a.toInit(function(){function e(b){b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");b=(new RegExp("[\\?\x26]"+b+"\x3d([^\x26#]*)")).exec(location.search);return null==b?"":decodeURIComponent(b[1].replace(/\+/g," "))}var f=m.get("page-id"),t=m.get("remote-user"),g=e("username"),c=e("accessType"),x=e("userFullName"),n=d("#system-content-items"),y=0!==d("#content-metadata-page-restrictions").length,u=d("#rte-button-restrictions"),
v=a.Rte&&a.Rte.getEditor&&a.Rte.getEditor()&&(!!a.$("#editpageform").length||!!a.$("#createpageform").length)&&u.length&&e("grantAccess")&&c;if(n.length&&y&&e("grantAccess")&&c||v){v&&(n=u,f=m.get("draft-id"));var z=d(l.Request.Access.loading()),k=a.InlineDialog(n,"grantAccessDialog",function(b,w,p){b.css({padding:"20px"}).html(l.Grant.Access.dialog({requestAccessUsername:g,requestAccessUserFullName:x,requestAccessType:c,contentType:m.get("content-type")}));b.on("click",".aui-button.grant-access",
function(A){A.stopPropagation();b.find(".actions-result").replaceWith(z);a.trigger("analyticsEvent",{name:"confluence.request.access.plugin.grant.access.to.page",data:{pageId:f,grantAccessUser:t,requestAccessUser:g,accessType:c}});var q="",h="";d.ajax({url:l.getContextPath()+"/rest/access/latest/page/restriction/"+f+"/grant/"+c,type:"POST",contentType:"application/json; charset\x3dutf-8",data:g,success:function(r,C,B){202===B.status?(q="It\u0027s the thought that counts",
h="Someone already granted access to this person."):(q="Access request granted",h="We\u0027ll let them know this request has been granted.");a.flag({type:"success",title:q,body:h})},error:function(r){h=412===r.status?"Access was granted, but there is not a mail server configured so the notification could not be sent.":502===r.status?"Access was granted, but an unexpected error happened while sending the notification.":"Sorry, there was an unexpected error while granting access.";a.flag({type:"error",title:"Access request error",
body:h})},complete:function(){k.hide()}})});b.on("click",".aui-button.deny-access",function(){a.trigger("analyticsEvent",{name:"confluence.request.access.plugin.deny.access.to.page",data:{pageId:f,grantAccessUser:t,requestAccessUser:g,accessType:c}});k.hide()});p();return!1},{offsetY:2,offsetX:0,width:350,hideDelay:null,noBind:!0,hideCallback:function(){setTimeout(k.hide(),5E3)}});(function(b,w,p){return d.ajax({url:l.getContextPath()+"/rest/access/latest/page/restriction/"+b+"/check/"+p,data:{username:w},
type:"GET",contentType:"application/json; charset\x3dutf-8"})})(f,g,c).done(function(b){b.hasPermission?a.flag({type:"success",title:"It\u0027s the thought that counts",body:"Someone already granted access to this person."}):k.show()}).fail(function(b){console.error("Was unable to check current user permission",b);k.show()})}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/request-access.soy' */
// This file was automatically generated from request-access.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Request.Access.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Request == 'undefined') { Confluence.Request = {}; }
if (typeof Confluence.Request.Access == 'undefined') { Confluence.Request.Access = {}; }


Confluence.Request.Access.usernameLink = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml("") + '/display/~' + soy.$$escapeUri(opt_data.user.name) + '" class="url fn confluence-userlink" title data-username="' + soy.$$escapeHtml(opt_data.user.name) + '">' + soy.$$escapeHtml(opt_data.user.fullName) + '</a>';
};
if (goog.DEBUG) {
  Confluence.Request.Access.usernameLink.soyTemplateName = 'Confluence.Request.Access.usernameLink';
}


Confluence.Request.Access.loading = function(opt_data, opt_ignored) {
  return '<span id="request-access-loading" class=\'aui-icon aui-icon-wait\'>' + soy.$$escapeHtml('Loading, please wait') + '</span>"';
};
if (goog.DEBUG) {
  Confluence.Request.Access.loading.soyTemplateName = 'Confluence.Request.Access.loading';
}


Confluence.Request.Access.dialog = function(opt_data, opt_ignored) {
  return '<div class="request-access-dialog"><h2 class="grant-access-title">' + soy.$$escapeHtml('You don\x27t have permission to edit') + '</h2>' + ((opt_data.canRequestAccess) ? '<p class="grant-access-message">' + soy.$$escapeHtml('Hit request access and we\x27ll find someone who can give you access.') + '</p><div class="actions-result"><button id="request-access-dialog-button" class="aui-button">' + soy.$$escapeHtml('Request access') + '</button><button class="aui-button aui-button-link cancel">' + soy.$$escapeHtml('Cancel') + '</button><div>' : '<p class="grant-access-message">' + soy.$$escapeHtml('A space admin or the person who shared this page may be able to give you access.') + '</p><div class="actions-result"><button class="aui-button aui-button-link cancel">' + soy.$$escapeHtml('Close') + '</button><div>') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Request.Access.dialog.soyTemplateName = 'Confluence.Request.Access.dialog';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/grant-access.soy' */
// This file was automatically generated from grant-access.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Grant.Access.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Grant == 'undefined') { Confluence.Grant = {}; }
if (typeof Confluence.Grant.Access == 'undefined') { Confluence.Grant.Access = {}; }


Confluence.Grant.Access.dialog = function(opt_data, opt_ignored) {
  var output = '<div class="grant-access-dialog">';
  var usernameLink__soy4 = '' + Confluence.Grant.Access.usernameLink({username: opt_data.requestAccessUsername, userFullName: opt_data.requestAccessUserFullName});
  var requestAccessDescription__soy8 = '' + ((opt_data.requestAccessType == 'edit') ? (opt_data.contentType == 'blogpost') ? soy.$$filterNoAutoescape(AJS.format('{0} wants to \x3cstrong\x3eedit\x3c/strong\x3e this blog post.',usernameLink__soy4)) : soy.$$filterNoAutoescape(AJS.format('{0} wants to \x3cstrong\x3eedit\x3c/strong\x3e this page.',usernameLink__soy4)) : (opt_data.contentType == 'blogpost') ? soy.$$filterNoAutoescape(AJS.format('{0} wants to \x3cstrong\x3eview\x3c/strong\x3e this blog post.',usernameLink__soy4)) : soy.$$filterNoAutoescape(AJS.format('{0} wants to \x3cstrong\x3eview\x3c/strong\x3e this page.',usernameLink__soy4)));
  output += '<h2 class="title grant-access-title">' + soy.$$escapeHtml('Access request') + '</h2><p class="grant-access-message">' + soy.$$filterNoAutoescape(requestAccessDescription__soy8) + '</p><div class="actions-result"><button class="aui-button grant-access">' + soy.$$escapeHtml('Grant access') + '</button><button class="aui-button aui-button-link deny-access">' + soy.$$escapeHtml('Deny') + '</button><div></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Grant.Access.dialog.soyTemplateName = 'Confluence.Grant.Access.dialog';
}


Confluence.Grant.Access.usernameLink = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml("") + '/display/~' + soy.$$escapeHtml(opt_data.username) + '" class="url fn" title data-username="' + soy.$$escapeHtml(opt_data.username) + '"><strong>' + soy.$$escapeHtml(opt_data.userFullName) + '</strong> (' + soy.$$escapeHtml(opt_data.username) + ')</a>';
};
if (goog.DEBUG) {
  Confluence.Grant.Access.usernameLink.soyTemplateName = 'Confluence.Grant.Access.usernameLink';
}

}catch(e){WRMCB(e)};