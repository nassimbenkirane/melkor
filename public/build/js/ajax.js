!function(a,b){"use strict";var c=a.History=a.History||{},d=a.jQuery;if("undefined"!=typeof c.Adapter)throw new Error("History.js Adapter has already been loaded...");c.Adapter={bind:function(a,b,c){d(a).bind(b,c)},trigger:function(a,b,c){d(a).trigger(b,c)},extractEventData:function(a,c,d){var e=c&&c.originalEvent&&c.originalEvent[a]||d&&d[a]||b;return e},onDomLoad:function(a){d(a)}},"undefined"!=typeof c.init&&c.init()}(window),function(a,b){"use strict";var c=a.console||b,d=a.document,e=a.navigator,f=a.sessionStorage||!1,g=a.setTimeout,h=a.clearTimeout,i=a.setInterval,j=a.clearInterval,k=a.JSON,l=a.alert,m=a.History=a.History||{},n=a.history;try{f.setItem("TEST","1"),f.removeItem("TEST")}catch(o){f=!1}if(k.stringify=k.stringify||k.encode,k.parse=k.parse||k.decode,"undefined"!=typeof m.init)throw new Error("History.js Core has already been loaded...");m.init=function(){return"undefined"==typeof m.Adapter?!1:("undefined"!=typeof m.initCore&&m.initCore(),"undefined"!=typeof m.initHtml4&&m.initHtml4(),!0)},m.initCore=function(){if("undefined"!=typeof m.initCore.initialized)return!1;if(m.initCore.initialized=!0,m.options=m.options||{},m.options.hashChangeInterval=m.options.hashChangeInterval||100,m.options.safariPollInterval=m.options.safariPollInterval||500,m.options.doubleCheckInterval=m.options.doubleCheckInterval||500,m.options.disableSuid=m.options.disableSuid||!1,m.options.storeInterval=m.options.storeInterval||1e3,m.options.busyDelay=m.options.busyDelay||250,m.options.debug=m.options.debug||!1,m.options.initialTitle=m.options.initialTitle||d.title,m.options.html4Mode=m.options.html4Mode||!1,m.options.delayInit=m.options.delayInit||!1,m.intervalList=[],m.clearAllIntervals=function(){var a,b=m.intervalList;if("undefined"!=typeof b&&null!==b){for(a=0;a<b.length;a++)j(b[a]);m.intervalList=null}},m.debug=function(){(m.options.debug||!1)&&m.log.apply(m,arguments)},m.log=function(){var a,b,e,f,g,h="undefined"!=typeof c&&"undefined"!=typeof c.log&&"undefined"!=typeof c.log.apply,i=d.getElementById("log");for(h?(f=Array.prototype.slice.call(arguments),a=f.shift(),"undefined"!=typeof c.debug?c.debug.apply(c,[a,f]):c.log.apply(c,[a,f])):a="\n"+arguments[0]+"\n",b=1,e=arguments.length;e>b;++b){if(g=arguments[b],"object"==typeof g&&"undefined"!=typeof k)try{g=k.stringify(g)}catch(j){}a+="\n"+g+"\n"}return i?(i.value+=a+"\n-----\n",i.scrollTop=i.scrollHeight-i.clientHeight):h||l(a),!0},m.getInternetExplorerMajorVersion=function(){var a=m.getInternetExplorerMajorVersion.cached="undefined"!=typeof m.getInternetExplorerMajorVersion.cached?m.getInternetExplorerMajorVersion.cached:function(){for(var a=3,b=d.createElement("div"),c=b.getElementsByTagName("i");(b.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]-->")&&c[0];);return a>4?a:!1}();return a},m.isInternetExplorer=function(){var a=m.isInternetExplorer.cached="undefined"!=typeof m.isInternetExplorer.cached?m.isInternetExplorer.cached:Boolean(m.getInternetExplorerMajorVersion());return a},m.emulated=m.options.html4Mode?{pushState:!0,hashChange:!0}:{pushState:!Boolean(a.history&&a.history.pushState&&a.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),hashChange:Boolean(!("onhashchange"in a||"onhashchange"in d)||m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8)},m.enabled=!m.emulated.pushState,m.bugs={setHash:Boolean(!m.emulated.pushState&&"Apple Computer, Inc."===e.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),safariPoll:Boolean(!m.emulated.pushState&&"Apple Computer, Inc."===e.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),ieDoubleCheck:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<7)},m.isEmptyObject=function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},m.cloneObject=function(a){var b,c;return a?(b=k.stringify(a),c=k.parse(b)):c={},c},m.getRootUrl=function(){var a=d.location.protocol+"//"+(d.location.hostname||d.location.host);return d.location.port&&(a+=":"+d.location.port),a+="/"},m.getBaseHref=function(){var a=d.getElementsByTagName("base"),b=null,c="";return 1===a.length&&(b=a[0],c=b.href.replace(/[^\/]+$/,"")),c=c.replace(/\/+$/,""),c&&(c+="/"),c},m.getBaseUrl=function(){var a=m.getBaseHref()||m.getBasePageUrl()||m.getRootUrl();return a},m.getPageUrl=function(){var a,b=m.getState(!1,!1),c=(b||{}).url||m.getLocationHref();return a=c.replace(/\/+$/,"").replace(/[^\/]+$/,function(a){return/\./.test(a)?a:a+"/"})},m.getBasePageUrl=function(){var a=m.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(a){return/[^\/]$/.test(a)?"":a}).replace(/\/+$/,"")+"/";return a},m.getFullUrl=function(a,b){var c=a,d=a.substring(0,1);return b="undefined"==typeof b?!0:b,/[a-z]+\:\/\//.test(a)||(c="/"===d?m.getRootUrl()+a.replace(/^\/+/,""):"#"===d?m.getPageUrl().replace(/#.*/,"")+a:"?"===d?m.getPageUrl().replace(/[\?#].*/,"")+a:b?m.getBaseUrl()+a.replace(/^(\.\/)+/,""):m.getBasePageUrl()+a.replace(/^(\.\/)+/,"")),c.replace(/\#$/,"")},m.getShortUrl=function(a){var b=a,c=m.getBaseUrl(),d=m.getRootUrl();return m.emulated.pushState&&(b=b.replace(c,"")),b=b.replace(d,"/"),m.isTraditionalAnchor(b)&&(b="./"+b),b=b.replace(/^(\.\/)+/g,"./").replace(/\#$/,"")},m.getLocationHref=function(a){return a=a||d,a.URL===a.location.href?a.location.href:a.location.href===decodeURIComponent(a.URL)?a.URL:a.location.hash&&decodeURIComponent(a.location.href.replace(/^[^#]+/,""))===a.location.hash?a.location.href:-1==a.URL.indexOf("#")&&-1!=a.location.href.indexOf("#")?a.location.href:a.URL||a.location.href},m.store={},m.idToState=m.idToState||{},m.stateToId=m.stateToId||{},m.urlToId=m.urlToId||{},m.storedStates=m.storedStates||[],m.savedStates=m.savedStates||[],m.normalizeStore=function(){m.store.idToState=m.store.idToState||{},m.store.urlToId=m.store.urlToId||{},m.store.stateToId=m.store.stateToId||{}},m.getState=function(a,b){"undefined"==typeof a&&(a=!0),"undefined"==typeof b&&(b=!0);var c=m.getLastSavedState();return!c&&b&&(c=m.createStateObject()),a&&(c=m.cloneObject(c),c.url=c.cleanUrl||c.url),c},m.getIdByState=function(a){var b,c=m.extractId(a.url);if(!c)if(b=m.getStateString(a),"undefined"!=typeof m.stateToId[b])c=m.stateToId[b];else if("undefined"!=typeof m.store.stateToId[b])c=m.store.stateToId[b];else{for(;c=(new Date).getTime()+String(Math.random()).replace(/\D/g,""),"undefined"!=typeof m.idToState[c]||"undefined"!=typeof m.store.idToState[c];);m.stateToId[b]=c,m.idToState[c]=a}return c},m.normalizeState=function(a){var b,c;return a&&"object"==typeof a||(a={}),"undefined"!=typeof a.normalized?a:(a.data&&"object"==typeof a.data||(a.data={}),b={},b.normalized=!0,b.title=a.title||"",b.url=m.getFullUrl(a.url?a.url:m.getLocationHref()),b.hash=m.getShortUrl(b.url),b.data=m.cloneObject(a.data),b.id=m.getIdByState(b),b.cleanUrl=b.url.replace(/\??\&_suid.*/,""),b.url=b.cleanUrl,c=!m.isEmptyObject(b.data),(b.title||c)&&m.options.disableSuid!==!0&&(b.hash=m.getShortUrl(b.url).replace(/\??\&_suid.*/,""),/\?/.test(b.hash)||(b.hash+="?"),b.hash+="&_suid="+b.id),b.hashedUrl=m.getFullUrl(b.hash),(m.emulated.pushState||m.bugs.safariPoll)&&m.hasUrlDuplicate(b)&&(b.url=b.hashedUrl),b)},m.createStateObject=function(a,b,c){var d={data:a,title:b,url:c};return d=m.normalizeState(d)},m.getStateById=function(a){a=String(a);var c=m.idToState[a]||m.store.idToState[a]||b;return c},m.getStateString=function(a){var b,c,d;return b=m.normalizeState(a),c={data:b.data,title:a.title,url:a.url},d=k.stringify(c)},m.getStateId=function(a){var b,c;return b=m.normalizeState(a),c=b.id},m.getHashByState=function(a){var b,c;return b=m.normalizeState(a),c=b.hash},m.extractId=function(a){var b,c,d,e;return e=-1!=a.indexOf("#")?a.split("#")[0]:a,c=/(.*)\&_suid=([0-9]+)$/.exec(e),d=c?c[1]||a:a,b=c?String(c[2]||""):"",b||!1},m.isTraditionalAnchor=function(a){var b=!/[\/\?\.]/.test(a);return b},m.extractState=function(a,b){var c,d,e=null;return b=b||!1,c=m.extractId(a),c&&(e=m.getStateById(c)),e||(d=m.getFullUrl(a),c=m.getIdByUrl(d)||!1,c&&(e=m.getStateById(c)),!e&&b&&!m.isTraditionalAnchor(a)&&(e=m.createStateObject(null,null,d))),e},m.getIdByUrl=function(a){var c=m.urlToId[a]||m.store.urlToId[a]||b;return c},m.getLastSavedState=function(){return m.savedStates[m.savedStates.length-1]||b},m.getLastStoredState=function(){return m.storedStates[m.storedStates.length-1]||b},m.hasUrlDuplicate=function(a){var b,c=!1;return b=m.extractState(a.url),c=b&&b.id!==a.id},m.storeState=function(a){return m.urlToId[a.url]=a.id,m.storedStates.push(m.cloneObject(a)),a},m.isLastSavedState=function(a){var b,c,d,e=!1;return m.savedStates.length&&(b=a.id,c=m.getLastSavedState(),d=c.id,e=b===d),e},m.saveState=function(a){return m.isLastSavedState(a)?!1:(m.savedStates.push(m.cloneObject(a)),!0)},m.getStateByIndex=function(a){var b=null;return b="undefined"==typeof a?m.savedStates[m.savedStates.length-1]:0>a?m.savedStates[m.savedStates.length+a]:m.savedStates[a]},m.getCurrentIndex=function(){var a=null;return a=m.savedStates.length<1?0:m.savedStates.length-1},m.getHash=function(a){var b,c=m.getLocationHref(a);return b=m.getHashByUrl(c)},m.unescapeHash=function(a){var b=m.normalizeHash(a);return b=decodeURIComponent(b)},m.normalizeHash=function(a){var b=a.replace(/[^#]*#/,"").replace(/#.*/,"");return b},m.setHash=function(a,b){var c,e;return b!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.setHash,args:arguments,queue:b}),!1):(m.busy(!0),c=m.extractState(a,!0),c&&!m.emulated.pushState?m.pushState(c.data,c.title,c.url,!1):m.getHash()!==a&&(m.bugs.setHash?(e=m.getPageUrl(),m.pushState(null,null,e+"#"+a,!1)):d.location.hash=a),m)},m.escapeHash=function(b){var c=m.normalizeHash(b);return c=a.encodeURIComponent(c),m.bugs.hashEscape||(c=c.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),c},m.getHashByUrl=function(a){var b=String(a).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return b=m.unescapeHash(b)},m.setTitle=function(a){var b,c=a.title;c||(b=m.getStateByIndex(0),b&&b.url===a.url&&(c=b.title||m.options.initialTitle));try{d.getElementsByTagName("title")[0].innerHTML=c.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(e){}return d.title=c,m},m.queues=[],m.busy=function(a){if("undefined"!=typeof a?m.busy.flag=a:"undefined"==typeof m.busy.flag&&(m.busy.flag=!1),!m.busy.flag){h(m.busy.timeout);var b=function(){var a,c,d;if(!m.busy.flag)for(a=m.queues.length-1;a>=0;--a)c=m.queues[a],0!==c.length&&(d=c.shift(),m.fireQueueItem(d),m.busy.timeout=g(b,m.options.busyDelay))};m.busy.timeout=g(b,m.options.busyDelay)}return m.busy.flag},m.busy.flag=!1,m.fireQueueItem=function(a){return a.callback.apply(a.scope||m,a.args||[])},m.pushQueue=function(a){return m.queues[a.queue||0]=m.queues[a.queue||0]||[],m.queues[a.queue||0].push(a),m},m.queue=function(a,b){return"function"==typeof a&&(a={callback:a}),"undefined"!=typeof b&&(a.queue=b),m.busy()?m.pushQueue(a):m.fireQueueItem(a),m},m.clearQueue=function(){return m.busy.flag=!1,m.queues=[],m},m.stateChanged=!1,m.doubleChecker=!1,m.doubleCheckComplete=function(){return m.stateChanged=!0,m.doubleCheckClear(),m},m.doubleCheckClear=function(){return m.doubleChecker&&(h(m.doubleChecker),m.doubleChecker=!1),m},m.doubleCheck=function(a){return m.stateChanged=!1,m.doubleCheckClear(),m.bugs.ieDoubleCheck&&(m.doubleChecker=g(function(){return m.doubleCheckClear(),m.stateChanged||a(),!0},m.options.doubleCheckInterval)),m},m.safariStatePoll=function(){var b,c=m.extractState(m.getLocationHref());return m.isLastSavedState(c)?void 0:(b=c,b||(b=m.createStateObject()),m.Adapter.trigger(a,"popstate"),m)},m.back=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.back,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.back(!1)}),n.go(-1),!0)},m.forward=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.forward,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.forward(!1)}),n.go(1),!0)},m.go=function(a,b){var c;if(a>0)for(c=1;a>=c;++c)m.forward(b);else{if(!(0>a))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(c=-1;c>=a;--c)m.back(b)}return m},m.emulated.pushState){var o=function(){};m.pushState=m.pushState||o,m.replaceState=m.replaceState||o}else m.onPopState=function(b,c){var d,e,f=!1,g=!1;return m.doubleCheckComplete(),d=m.getHash(),d?(e=m.extractState(d||m.getLocationHref(),!0),e?m.replaceState(e.data,e.title,e.url,!1):(m.Adapter.trigger(a,"anchorchange"),m.busy(!1)),m.expectedStateId=!1,!1):(f=m.Adapter.extractEventData("state",b,c)||!1,g=f?m.getStateById(f):m.expectedStateId?m.getStateById(m.expectedStateId):m.extractState(m.getLocationHref()),g||(g=m.createStateObject(null,null,m.getLocationHref())),m.expectedStateId=!1,m.isLastSavedState(g)?(m.busy(!1),!1):(m.storeState(g),m.saveState(g),m.setTitle(g),m.Adapter.trigger(a,"statechange"),m.busy(!1),!0))},m.Adapter.bind(a,"popstate",m.onPopState),m.pushState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.pushState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.pushState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0},m.replaceState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.replaceState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.replaceState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0};if(f){try{m.store=k.parse(f.getItem("History.store"))||{}}catch(p){m.store={}}m.normalizeStore()}else m.store={},m.normalizeStore();m.Adapter.bind(a,"unload",m.clearAllIntervals),m.saveState(m.storeState(m.extractState(m.getLocationHref(),!0))),f&&(m.onUnload=function(){var a,b,c;try{a=k.parse(f.getItem("History.store"))||{}}catch(d){a={}}a.idToState=a.idToState||{},a.urlToId=a.urlToId||{},a.stateToId=a.stateToId||{};for(b in m.idToState)m.idToState.hasOwnProperty(b)&&(a.idToState[b]=m.idToState[b]);for(b in m.urlToId)m.urlToId.hasOwnProperty(b)&&(a.urlToId[b]=m.urlToId[b]);for(b in m.stateToId)m.stateToId.hasOwnProperty(b)&&(a.stateToId[b]=m.stateToId[b]);m.store=a,m.normalizeStore(),c=k.stringify(a);try{f.setItem("History.store",c)}catch(e){if(e.code!==DOMException.QUOTA_EXCEEDED_ERR)throw e;f.length&&(f.removeItem("History.store"),f.setItem("History.store",c))}},m.intervalList.push(i(m.onUnload,m.options.storeInterval)),m.Adapter.bind(a,"beforeunload",m.onUnload),m.Adapter.bind(a,"unload",m.onUnload)),m.emulated.pushState||(m.bugs.safariPoll&&m.intervalList.push(i(m.safariStatePoll,m.options.safariPollInterval)),("Apple Computer, Inc."===e.vendor||"Mozilla"===(e.appCodeName||""))&&(m.Adapter.bind(a,"hashchange",function(){m.Adapter.trigger(a,"popstate")}),m.getHash()&&m.Adapter.onDomLoad(function(){m.Adapter.trigger(a,"hashchange")})))},(!m.options||!m.options.delayInit)&&m.init()}(window),function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(a){"use strict";function b(b){var c=b.data;b.isDefaultPrevented()||(b.preventDefault(),a(b.target).ajaxSubmit(c))}function c(b){var c=b.target,d=a(c);if(!d.is("[type=submit],[type=image]")){var e=d.closest("[type=submit]");if(0===e.length)return;c=e[0]}var f=this;if(f.clk=c,"image"==c.type)if(void 0!==b.offsetX)f.clk_x=b.offsetX,f.clk_y=b.offsetY;else if("function"==typeof a.fn.offset){var g=d.offset();f.clk_x=b.pageX-g.left,f.clk_y=b.pageY-g.top}else f.clk_x=b.pageX-c.offsetLeft,f.clk_y=b.pageY-c.offsetTop;setTimeout(function(){f.clk=f.clk_x=f.clk_y=null},100)}function d(){if(a.fn.ajaxSubmit.debug){var b="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(b):window.opera&&window.opera.postError&&window.opera.postError(b)}}var e={};e.fileapi=void 0!==a("<input type='file'/>").get(0).files,e.formdata=void 0!==window.FormData;var f=!!a.fn.prop;a.fn.attr2=function(){if(!f)return this.attr.apply(this,arguments);var a=this.prop.apply(this,arguments);return a&&a.jquery||"string"==typeof a?a:this.attr.apply(this,arguments)},a.fn.ajaxSubmit=function(b){function c(c){var d,e,f=a.param(c,b.traditional).split("&"),g=f.length,h=[];for(d=0;g>d;d++)f[d]=f[d].replace(/\+/g," "),e=f[d].split("="),h.push([decodeURIComponent(e[0]),decodeURIComponent(e[1])]);return h}function g(d){for(var e=new FormData,f=0;f<d.length;f++)e.append(d[f].name,d[f].value);if(b.extraData){var g=c(b.extraData);for(f=0;f<g.length;f++)g[f]&&e.append(g[f][0],g[f][1])}b.data=null;var h=a.extend(!0,{},a.ajaxSettings,b,{contentType:!1,processData:!1,cache:!1,type:i||"POST"});b.uploadProgress&&(h.xhr=function(){var c=a.ajaxSettings.xhr();return c.upload&&c.upload.addEventListener("progress",function(a){var c=0,d=a.loaded||a.position,e=a.total;a.lengthComputable&&(c=Math.ceil(d/e*100)),b.uploadProgress(a,d,e,c)},!1),c}),h.data=null;var j=h.beforeSend;return h.beforeSend=function(a,c){c.data=b.formData?b.formData:e,j&&j.call(this,a,c)},a.ajax(h)}function h(c){function e(a){var b=null;try{a.contentWindow&&(b=a.contentWindow.document)}catch(c){d("cannot get iframe.contentWindow document: "+c)}if(b)return b;try{b=a.contentDocument?a.contentDocument:a.document}catch(c){d("cannot get iframe.contentDocument: "+c),b=a.document}return b}function g(){function b(){try{var a=e(r).readyState;d("state = "+a),a&&"uninitialized"==a.toLowerCase()&&setTimeout(b,50)}catch(c){d("Server abort: ",c," (",c.name,")"),h(A),w&&clearTimeout(w),w=void 0}}var c=l.attr2("target"),f=l.attr2("action");x.setAttribute("target",o),(!i||/post/i.test(i))&&x.setAttribute("method","POST"),f!=m.url&&x.setAttribute("action",m.url),m.skipEncodingOverride||i&&!/post/i.test(i)||l.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(w=setTimeout(function(){v=!0,h(z)},m.timeout));var g=[];try{if(m.extraData)for(var j in m.extraData)m.extraData.hasOwnProperty(j)&&g.push(a.isPlainObject(m.extraData[j])&&m.extraData[j].hasOwnProperty("name")&&m.extraData[j].hasOwnProperty("value")?a('<input type="hidden" name="'+m.extraData[j].name+'">').val(m.extraData[j].value).appendTo(x)[0]:a('<input type="hidden" name="'+j+'">').val(m.extraData[j]).appendTo(x)[0]);m.iframeTarget||q.appendTo("body"),r.attachEvent?r.attachEvent("onload",h):r.addEventListener("load",h,!1),setTimeout(b,15);try{x.submit()}catch(k){var n=document.createElement("form").submit;n.apply(x)}}finally{x.setAttribute("action",f),c?x.setAttribute("target",c):l.removeAttr("target"),a(g).remove()}}function h(b){if(!s.aborted&&!F){if(E=e(r),E||(d("cannot access response document"),b=A),b===z&&s)return s.abort("timeout"),void y.reject(s,"timeout");if(b==A&&s)return s.abort("server abort"),void y.reject(s,"error","server abort");if(E&&E.location.href!=m.iframeSrc||v){r.detachEvent?r.detachEvent("onload",h):r.removeEventListener("load",h,!1);var c,f="success";try{if(v)throw"timeout";var g="xml"==m.dataType||E.XMLDocument||a.isXMLDoc(E);if(d("isXml="+g),!g&&window.opera&&(null===E.body||!E.body.innerHTML)&&--G)return d("requeing onLoad callback, DOM not available"),void setTimeout(h,250);var i=E.body?E.body:E.documentElement;s.responseText=i?i.innerHTML:null,s.responseXML=E.XMLDocument?E.XMLDocument:E,g&&(m.dataType="xml"),s.getResponseHeader=function(a){var b={"content-type":m.dataType};return b[a.toLowerCase()]},i&&(s.status=Number(i.getAttribute("status"))||s.status,s.statusText=i.getAttribute("statusText")||s.statusText);var j=(m.dataType||"").toLowerCase(),k=/(json|script|text)/.test(j);if(k||m.textarea){var l=E.getElementsByTagName("textarea")[0];if(l)s.responseText=l.value,s.status=Number(l.getAttribute("status"))||s.status,s.statusText=l.getAttribute("statusText")||s.statusText;else if(k){var o=E.getElementsByTagName("pre")[0],p=E.getElementsByTagName("body")[0];o?s.responseText=o.textContent?o.textContent:o.innerText:p&&(s.responseText=p.textContent?p.textContent:p.innerText)}}else"xml"==j&&!s.responseXML&&s.responseText&&(s.responseXML=H(s.responseText));try{D=J(s,j,m)}catch(t){f="parsererror",s.error=c=t||f}}catch(t){d("error caught: ",t),f="error",s.error=c=t||f}s.aborted&&(d("upload aborted"),f=null),s.status&&(f=s.status>=200&&s.status<300||304===s.status?"success":"error"),"success"===f?(m.success&&m.success.call(m.context,D,"success",s),y.resolve(s.responseText,"success",s),n&&a.event.trigger("ajaxSuccess",[s,m])):f&&(void 0===c&&(c=s.statusText),m.error&&m.error.call(m.context,s,f,c),y.reject(s,"error",c),n&&a.event.trigger("ajaxError",[s,m,c])),n&&a.event.trigger("ajaxComplete",[s,m]),n&&!--a.active&&a.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,s,f),F=!0,m.timeout&&clearTimeout(w),setTimeout(function(){m.iframeTarget?q.attr("src",m.iframeSrc):q.remove(),s.responseXML=null},100)}}}var j,k,m,n,o,q,r,s,t,u,v,w,x=l[0],y=a.Deferred();if(y.abort=function(a){s.abort(a)},c)for(k=0;k<p.length;k++)j=a(p[k]),f?j.prop("disabled",!1):j.removeAttr("disabled");if(m=a.extend(!0,{},a.ajaxSettings,b),m.context=m.context||m,o="jqFormIO"+(new Date).getTime(),m.iframeTarget?(q=a(m.iframeTarget),u=q.attr2("name"),u?o=u:q.attr2("name",o)):(q=a('<iframe name="'+o+'" src="'+m.iframeSrc+'" />'),q.css({position:"absolute",top:"-1000px",left:"-1000px"})),r=q[0],s={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(b){var c="timeout"===b?"timeout":"aborted";d("aborting upload... "+c),this.aborted=1;try{r.contentWindow.document.execCommand&&r.contentWindow.document.execCommand("Stop")}catch(e){}q.attr("src",m.iframeSrc),s.error=c,m.error&&m.error.call(m.context,s,c,b),n&&a.event.trigger("ajaxError",[s,m,c]),m.complete&&m.complete.call(m.context,s,c)}},n=m.global,n&&0===a.active++&&a.event.trigger("ajaxStart"),n&&a.event.trigger("ajaxSend",[s,m]),m.beforeSend&&m.beforeSend.call(m.context,s,m)===!1)return m.global&&a.active--,y.reject(),y;if(s.aborted)return y.reject(),y;t=x.clk,t&&(u=t.name,u&&!t.disabled&&(m.extraData=m.extraData||{},m.extraData[u]=t.value,"image"==t.type&&(m.extraData[u+".x"]=x.clk_x,m.extraData[u+".y"]=x.clk_y)));var z=1,A=2,B=a("meta[name=csrf-token]").attr("content"),C=a("meta[name=csrf-param]").attr("content");C&&B&&(m.extraData=m.extraData||{},m.extraData[C]=B),m.forceSync?g():setTimeout(g,10);var D,E,F,G=50,H=a.parseXML||function(a,b){return window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml"),b&&b.documentElement&&"parsererror"!=b.documentElement.nodeName?b:null},I=a.parseJSON||function(a){return window.eval("("+a+")")},J=function(b,c,d){var e=b.getResponseHeader("content-type")||"",f="xml"===c||!c&&e.indexOf("xml")>=0,g=f?b.responseXML:b.responseText;return f&&"parsererror"===g.documentElement.nodeName&&a.error&&a.error("parsererror"),d&&d.dataFilter&&(g=d.dataFilter(g,c)),"string"==typeof g&&("json"===c||!c&&e.indexOf("json")>=0?g=I(g):("script"===c||!c&&e.indexOf("javascript")>=0)&&a.globalEval(g)),g};return y}if(!this.length)return d("ajaxSubmit: skipping submit process - no element selected"),this;var i,j,k,l=this;"function"==typeof b?b={success:b}:void 0===b&&(b={}),i=b.type||this.attr2("method"),j=b.url||this.attr2("action"),k="string"==typeof j?a.trim(j):"",k=k||window.location.href||"",k&&(k=(k.match(/^([^#]+)/)||[])[1]),b=a.extend(!0,{url:k,success:a.ajaxSettings.success,type:i||a.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},b);var m={};if(this.trigger("form-pre-serialize",[this,b,m]),m.veto)return d("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(b.beforeSerialize&&b.beforeSerialize(this,b)===!1)return d("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var n=b.traditional;void 0===n&&(n=a.ajaxSettings.traditional);var o,p=[],q=this.formToArray(b.semantic,p);if(b.data&&(b.extraData=b.data,o=a.param(b.data,n)),b.beforeSubmit&&b.beforeSubmit(q,this,b)===!1)return d("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[q,this,b,m]),m.veto)return d("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var r=a.param(q,n);o&&(r=r?r+"&"+o:o),"GET"==b.type.toUpperCase()?(b.url+=(b.url.indexOf("?")>=0?"&":"?")+r,b.data=null):b.data=r;var s=[];if(b.resetForm&&s.push(function(){l.resetForm()}),b.clearForm&&s.push(function(){l.clearForm(b.includeHidden)}),!b.dataType&&b.target){var t=b.success||function(){};s.push(function(c){var d=b.replaceTarget?"replaceWith":"html";a(b.target)[d](c).each(t,arguments)})}else b.success&&s.push(b.success);if(b.success=function(a,c,d){for(var e=b.context||this,f=0,g=s.length;g>f;f++)s[f].apply(e,[a,c,d||l,l])},b.error){var u=b.error;b.error=function(a,c,d){var e=b.context||this;u.apply(e,[a,c,d,l])}}if(b.complete){var v=b.complete;b.complete=function(a,c){var d=b.context||this;v.apply(d,[a,c,l])}}var w=a("input[type=file]:enabled",this).filter(function(){return""!==a(this).val()}),x=w.length>0,y="multipart/form-data",z=l.attr("enctype")==y||l.attr("encoding")==y,A=e.fileapi&&e.formdata;d("fileAPI :"+A);var B,C=(x||z)&&!A;b.iframe!==!1&&(b.iframe||C)?b.closeKeepAlive?a.get(b.closeKeepAlive,function(){B=h(q)}):B=h(q):B=(x||z)&&A?g(q):a.ajax(b),l.removeData("jqxhr").data("jqxhr",B);for(var D=0;D<p.length;D++)p[D]=null;return this.trigger("form-submit-notify",[this,b]),this},a.fn.ajaxForm=function(e){if(e=e||{},e.delegation=e.delegation&&a.isFunction(a.fn.on),!e.delegation&&0===this.length){var f={s:this.selector,c:this.context};return!a.isReady&&f.s?(d("DOM not ready, queuing ajaxForm"),a(function(){a(f.s,f.c).ajaxForm(e)}),this):(d("terminating; zero elements found by selector"+(a.isReady?"":" (DOM not ready)")),this)}return e.delegation?(a(document).off("submit.form-plugin",this.selector,b).off("click.form-plugin",this.selector,c).on("submit.form-plugin",this.selector,e,b).on("click.form-plugin",this.selector,e,c),this):this.ajaxFormUnbind().bind("submit.form-plugin",e,b).bind("click.form-plugin",e,c)},a.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},a.fn.formToArray=function(b,c){var d=[];if(0===this.length)return d;var f=this[0],g=b?f.getElementsByTagName("*"):f.elements;if(!g)return d;var h,i,j,k,l,m,n;for(h=0,m=g.length;m>h;h++)if(l=g[h],j=l.name,j&&!l.disabled)if(b&&f.clk&&"image"==l.type)f.clk==l&&(d.push({name:j,value:a(l).val(),type:l.type}),d.push({name:j+".x",value:f.clk_x},{name:j+".y",value:f.clk_y}));else if(k=a.fieldValue(l,!0),k&&k.constructor==Array)for(c&&c.push(l),i=0,n=k.length;n>i;i++)d.push({name:j,value:k[i]});else if(e.fileapi&&"file"==l.type){c&&c.push(l);var o=l.files;if(o.length)for(i=0;i<o.length;i++)d.push({name:j,value:o[i],type:l.type});else d.push({name:j,value:"",type:l.type})}else null!==k&&"undefined"!=typeof k&&(c&&c.push(l),d.push({name:j,value:k,type:l.type,required:l.required}));if(!b&&f.clk){var p=a(f.clk),q=p[0];j=q.name,j&&!q.disabled&&"image"==q.type&&(d.push({name:j,value:p.val()}),d.push({name:j+".x",value:f.clk_x},{name:j+".y",value:f.clk_y}))}return d},a.fn.formSerialize=function(b){return a.param(this.formToArray(b))},a.fn.fieldSerialize=function(b){var c=[];return this.each(function(){var d=this.name;if(d){var e=a.fieldValue(this,b);if(e&&e.constructor==Array)for(var f=0,g=e.length;g>f;f++)c.push({name:d,value:e[f]});else null!==e&&"undefined"!=typeof e&&c.push({name:this.name,value:e})}}),a.param(c)},a.fn.fieldValue=function(b){for(var c=[],d=0,e=this.length;e>d;d++){var f=this[d],g=a.fieldValue(f,b);null===g||"undefined"==typeof g||g.constructor==Array&&!g.length||(g.constructor==Array?a.merge(c,g):c.push(g))}return c},a.fieldValue=function(b,c){var d=b.name,e=b.type,f=b.tagName.toLowerCase();if(void 0===c&&(c=!0),c&&(!d||b.disabled||"reset"==e||"button"==e||("checkbox"==e||"radio"==e)&&!b.checked||("submit"==e||"image"==e)&&b.form&&b.form.clk!=b||"select"==f&&-1==b.selectedIndex))return null;if("select"==f){var g=b.selectedIndex;if(0>g)return null;for(var h=[],i=b.options,j="select-one"==e,k=j?g+1:i.length,l=j?g:0;k>l;l++){var m=i[l];if(m.selected){var n=m.value;if(n||(n=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),j)return n;h.push(n)}}return h}return a(b).val()},a.fn.clearForm=function(b){return this.each(function(){a("input,select,textarea",this).clearFields(b)})},a.fn.clearFields=a.fn.clearInputs=function(b){var c=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var d=this.type,e=this.tagName.toLowerCase();c.test(d)||"textarea"==e?this.value="":"checkbox"==d||"radio"==d?this.checked=!1:"select"==e?this.selectedIndex=-1:"file"==d?/MSIE/.test(navigator.userAgent)?a(this).replaceWith(a(this).clone(!0)):a(this).val(""):b&&(b===!0&&/hidden/.test(d)||"string"==typeof b&&a(this).is(b))&&(this.value="")})},a.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},a.fn.enable=function(a){return void 0===a&&(a=!0),this.each(function(){this.disabled=!a})},a.fn.selected=function(b){return void 0===b&&(b=!0),this.each(function(){var c=this.type;if("checkbox"==c||"radio"==c)this.checked=b;else if("option"==this.tagName.toLowerCase()){var d=a(this).parent("select");b&&d[0]&&"select-one"==d[0].type&&d.find("option").selected(!1),this.selected=b}})},a.fn.ajaxSubmit.debug=!1}),$(function(){var a=window.History,b=function(a){return(window._testConfirm||window.confirm).call(null,a)};$.ajaxSetup({timeout:3e3,async:!0,cache:!1,dataType:"json",type:"GET"});var c=$("#content"),d=0;a.Adapter.bind(window,"statechange",function(){var b=a.getState();b.data&&b.data.counter===d||(d++,h(b.url))});var e=function(a){$("a[role=edit], a[role=delete], .pageBody a",a).click(function(a){var c=$(a.delegateTarget),d=c.attr("href");-1===d.indexOf("://")&&(a.preventDefault(),a.stopPropagation(),("delete"!==c.attr("role")||b("Are you sure you want to delete this?"))&&h(d))}),$("form",a).ajaxForm({beforeSubmit:i,success:g(),error:f})},f=function(a,b,d){j(),a.responseJSON?(c.html(a.responseJSON.html),e(c)):alert("AJAX error: "+b+", "+d),c.trigger("melkorAjaxError",[d])},g=function(b){return function(f,g,h){j();var i=h.getResponseHeader("TM-finalURL")||b||location.href;i!==location.href&&a.pushState({counter:d},f.title,i),c.html(f.html),e(c),c.trigger("melkorAjaxSuccess",[b])}},h=function(a){i(),$.ajax({url:a,success:g(a),error:f})},i=function(){$("#loading").modal("show")},j=function(){$("#loading").modal("hide")};e(c)});