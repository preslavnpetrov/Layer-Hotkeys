/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var t,e={"./src/scripts/layer-hotkeys.ts":function(t,e){var n=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function a(t){try{c(o.next(t))}catch(t){r(t)}}function l(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,l)}c((o=o.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}};function i(t,e){return t+" [ ".concat(e.map((function(t){var e;return(null===(e=t.modifiers)||void 0===e?void 0:e.length)?"".concat(t.modifiers.join(" + ")," + ").concat(KeyboardManager.getKeycodeDisplayString(t.key)):KeyboardManager.getKeycodeDisplayString(t.key)})).join(" or ")," ]")}function r(t,e){var n=t.tools.filter((function(t){return!1!==t.visible}));if(!(e>=n.length)){var o=n[e];o.toggle?(o.active=!o.active,o.onClick instanceof Function&&o.onClick(o.active)):(o.button||(t.activeTool=o.name),o.onClick instanceof Function&&o.onClick()),ui.controls.render()}}Object.defineProperty(e,"__esModule",{value:!0}),e.init=void 0,e.init=function(){var t=this;Hooks.once("init",(function(){return n(t,void 0,void 0,(function(){var t,e,n,i,a,l;return o(this,(function(o){for(t={token:"KeyQ",measure:"KeyM",tiles:"KeyT",drawings:"KeyD",walls:"KeyW",lighting:"KeyL",sounds:"KeyS",notes:"KeyN"},e=Object.keys(t),n=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal"],i=function(n){game.keybindings.register("layer-hotkeys","layer-control-".concat(n),{name:"Layer Control ".concat(n),hint:"Hotkey to activate {layerName}",editable:t[e[n]]?[{key:t[e[n]]}]:void 0,precedence:CONST.KEYBINDING_PRECEDENCE.NORMAL,onDown:function(){if(!(n>=ui.controls.controls.length)){var t=ui.controls.controls[n];if(!1!==t.visible){var e=$("li.scene-control[data-control=".concat(t.name));ui.controls.activeControl===t.name&&r(t,0),e.trigger("click")}}}})},l=0;l<30;l++)i(l);for(a=function(t){game.keybindings.register("layer-hotkeys","layer-tool-"+t,{name:"Tool ".concat(t+1),hint:"Hotkey to activate tool ".concat(t+1),editable:n[t]?[{key:n[t],modifiers:["Shift"]}]:void 0,precedence:CONST.KEYBINDING_PRECEDENCE.NORMAL,onDown:function(){var e=ui.controls.controls.find((function(t){return t.name===ui.controls.activeControl}));e&&r(e,t)}})},l=0;l<30;l++)a(l);return[2]}))}))})),Hooks.on("renderKeybindingsConfig",(function(t,e,n){var o=ui.controls.controls.filter((function(t){return!1!==t.visible})).length,i=Math.max.apply(Math,ui.controls.controls.filter((function(t){return!1!==t.visible})).map((function(t){return t.tools.filter((function(t){return!1!==t.visible})).length})));e.find("nav.filters div.layer-hotkeys span.count").text("[".concat(o+i,"]"));for(var r=e.find('div.categories div.category-list section.category[data-category-id=layer-hotkeys]>ol.action-list li[data-action-id^="layer-hotkeys.layer-control"]'),a=e.find('div.categories div.category-list section.category[data-category-id=layer-hotkeys]>ol.action-list li[data-action-id^="layer-hotkeys.layer-tool"]'),l=0;l<r.length;l++){var c=r[l];if(l<ui.controls.controls.length&&!1!==ui.controls.controls[l].visible){var s=$(c).find("h4"),u=$(c).find("p"),f=game.i18n.localize(ui.controls.controls[l].title),y=u.text().replace("{layerName}",f);s.text(f),u.text(y)}else c.remove()}for(l=0;l<a.length;l++)c=a[l],l<i||c.remove();ui.controls.render()})),Hooks.on("renderSceneControls",(function(t,e,n){for(var o=e.find("ol.main-controls li.scene-control"),r=e.find("ol.sub-controls"),a=function(t){var e=o[t],n=e.dataset.control,r=ui.controls.controls.findIndex((function(t){return t.name===n})),a=game.keybindings.get("layer-hotkeys","layer-control-".concat(r));a.length&&(e.title=i(e.title,a))},l=0;l<o.length;l++)a(l);for(var c=0;c<r.length;c++){var s=r[c],u=$(s).find("li.control-tool");for(l=0;l<u.length;l++){var f=u[l],y=game.keybindings.get("layer-hotkeys","layer-tool-".concat(l));y.length&&(f.title=i(f.title,y))}}}))}}},n={};t={},Object.defineProperty(t,"__esModule",{value:!0}),(0,function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return e[o].call(r.exports,r,r.exports,t),r.exports}("./src/scripts/layer-hotkeys.ts").init)()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdZLFFBQWlCLFFBQ2xDQyxFQUFlMUQsR0FBR0MsU0FBU0EsU0FBUzBELFdBQVUsU0FBQXhFLEdBQVcsT0FBQUEsRUFBUVksT0FBU2lELEtBRTVFdkUsRUFBYzBDLEtBQUsxQyxZQUFZbUYsSUFBSSxnQkFBaUIsd0JBQWlCRixJQUVyRWpGLEVBQVlJLFNBQ2RnRSxFQUFHTSxNQUFRNUUsRUFBa0JzRSxFQUFHTSxNQUFPMUUsS0FUbEN5QyxFQUFJLEVBQUdBLEVBQUlxQyxFQUFjMUUsT0FBUXFDLE1BQWpDQSxHQWFULElBQUssSUFBSTJDLEVBQWEsRUFBR0EsRUFBYUwsRUFBVzNFLE9BQVFnRixJQUN2RCxLQUFNQyxFQUFZTixFQUFXSyxHQUN2QnhFLEVBQVF3QyxFQUFFaUMsR0FBVzlCLEtBQUssbUJBRWhDLElBQVNkLEVBQUksRUFBR0EsRUFBSTdCLEVBQU1SLE9BQVFxQyxJQUFLLENBQ3JDLElBQU0yQixFQUFLeEQsRUFBTTZCLEdBQ2J6QyxFQUFjMEMsS0FBSzFDLFlBQVltRixJQUFJLGdCQUFpQixxQkFBYzFDLElBRWxFekMsRUFBWUksU0FDZGdFLEVBQUdNLE1BQVE1RSxFQUFrQnNFLEVBQUdNLE1BQU8xRSxZQ3JLN0NzRixFQUEyQiwwRENDL0IsRURFQSxTQUFTQyxFQUFvQkMsR0FFNUIsSUFBSUMsRUFBZUgsRUFBeUJFLEdBQzVDLFFBQXFCMUMsSUFBakIyQyxFQUNILE9BQU9BLEVBQWFDLFFBR3JCLElBQUlDLEVBQVNMLEVBQXlCRSxHQUFZLENBR2pERSxRQUFTLElBT1YsT0FIQUUsRUFBb0JKLEdBQVVLLEtBQUtGLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNILEdBR3BFSSxFQUFPRCxRQ3JCZixtQ0FFQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXllci1ob3RrZXlzLy4vc3JjL3NjcmlwdHMvbGF5ZXItaG90a2V5cy50cyIsIndlYnBhY2s6Ly9sYXllci1ob3RrZXlzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xheWVyLWhvdGtleXMvLi9zcmMvc2NyaXB0cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBLRVlCSU5ESU5HX05BTUVTUEFDRSA9IFwibGF5ZXItaG90a2V5c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgSG9va3Mub25jZShcImluaXRcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IERFRkFVTFRfS0VZU19MQVlFUiA9IHtcbiAgICAgIHRva2VuOiBcIktleVFcIixcbiAgICAgIG1lYXN1cmU6IFwiS2V5TVwiLFxuICAgICAgdGlsZXM6IFwiS2V5VFwiLFxuICAgICAgZHJhd2luZ3M6IFwiS2V5RFwiLFxuICAgICAgd2FsbHM6IFwiS2V5V1wiLFxuICAgICAgbGlnaHRpbmc6IFwiS2V5TFwiLFxuICAgICAgc291bmRzOiBcIktleVNcIixcbiAgICAgIG5vdGVzOiBcIktleU5cIixcbiAgICB9O1xuXG4gICAgY29uc3QgREVGQVVMVF9LRVlTX0xBWUVSX0tFWVMgPSBPYmplY3Qua2V5cyhERUZBVUxUX0tFWVNfTEFZRVIpO1xuXG4gICAgY29uc3QgREVGQVVMVF9LRVlTX0xBWUVSX1RPT0wgPSBbXG4gICAgICBcIkRpZ2l0MVwiLFxuICAgICAgXCJEaWdpdDJcIixcbiAgICAgIFwiRGlnaXQzXCIsXG4gICAgICBcIkRpZ2l0NFwiLFxuICAgICAgXCJEaWdpdDVcIixcbiAgICAgIFwiRGlnaXQ2XCIsXG4gICAgICBcIkRpZ2l0N1wiLFxuICAgICAgXCJEaWdpdDhcIixcbiAgICAgIFwiRGlnaXQ5XCIsXG4gICAgICBcIkRpZ2l0MFwiLFxuICAgICAgXCJNaW51c1wiLFxuICAgICAgXCJFcXVhbFwiLFxuICAgIF07XG5cbiAgICBsZXQgbWF4TnVtVG9vbHMgPSAzMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgZ2FtZS5rZXliaW5kaW5ncy5yZWdpc3RlcihcImxheWVyLWhvdGtleXNcIiwgYGxheWVyLWNvbnRyb2wtJHtpfWAsIHtcbiAgICAgICAgbmFtZTogYExheWVyIENvbnRyb2wgJHtpfWAsXG4gICAgICAgIGhpbnQ6IFwiSG90a2V5IHRvIGFjdGl2YXRlIHtsYXllck5hbWV9XCIsXG4gICAgICAgIGVkaXRhYmxlOiBERUZBVUxUX0tFWVNfTEFZRVJbREVGQVVMVF9LRVlTX0xBWUVSX0tFWVNbaV1dXG4gICAgICAgICAgPyBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IERFRkFVTFRfS0VZU19MQVlFUltERUZBVUxUX0tFWVNfTEFZRVJfS0VZU1tpXV0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIHByZWNlZGVuY2U6IENPTlNULktFWUJJTkRJTkdfUFJFQ0VERU5DRS5OT1JNQUwsXG4gICAgICAgIG9uRG93bjogKCkgPT4ge1xuICAgICAgICAgIGlmIChpID49IHVpLmNvbnRyb2xzLmNvbnRyb2xzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgICAgY29uc3QgY29udHJvbCA9IHVpLmNvbnRyb2xzLmNvbnRyb2xzW2ldO1xuXG4gICAgICAgICAgLy8gU2tpcCBjb250cm9scyAgdGhhdCBhcmVuJ3QgYWNjZXNzaWJsZSBmb3IgdGhlIHVzZXJcbiAgICAgICAgICBpZiAoY29udHJvbC52aXNpYmxlID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICAgICAgLy8gR2V0IHRoZSB1aSBlbGVtZW50XG4gICAgICAgICAgY29uc3QgYnV0dG9uID0gJChcbiAgICAgICAgICAgIGBsaS5zY2VuZS1jb250cm9sW2RhdGEtY29udHJvbD0ke2NvbnRyb2wubmFtZX1gXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmICh1aS5jb250cm9scy5hY3RpdmVDb250cm9sID09PSBjb250cm9sLm5hbWUpIHtcbiAgICAgICAgICAgIGFjdGl2YXRlVG9vbEluZGV4KGNvbnRyb2wsIDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJ1dHRvbi50cmlnZ2VyKFwiY2xpY2tcIik7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heE51bVRvb2xzOyBpKyspIHtcbiAgICAgIGdhbWUua2V5YmluZGluZ3MucmVnaXN0ZXIoXCJsYXllci1ob3RrZXlzXCIsIFwibGF5ZXItdG9vbC1cIiArIGksIHtcbiAgICAgICAgbmFtZTogYFRvb2wgJHtpICsgMX1gLFxuICAgICAgICBoaW50OiBgSG90a2V5IHRvIGFjdGl2YXRlIHRvb2wgJHtpICsgMX1gLFxuICAgICAgICBlZGl0YWJsZTogREVGQVVMVF9LRVlTX0xBWUVSX1RPT0xbaV1cbiAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogREVGQVVMVF9LRVlTX0xBWUVSX1RPT0xbaV0sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzOiBbXCJTaGlmdFwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgcHJlY2VkZW5jZTogQ09OU1QuS0VZQklORElOR19QUkVDRURFTkNFLk5PUk1BTCxcbiAgICAgICAgb25Eb3duOiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgYWN0aXZlQ29udHJvbCA9IHVpLmNvbnRyb2xzLmNvbnRyb2xzLmZpbmQoXG4gICAgICAgICAgICAoZSkgPT4gZS5uYW1lID09PSB1aS5jb250cm9scy5hY3RpdmVDb250cm9sXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmICghYWN0aXZlQ29udHJvbCkgcmV0dXJuO1xuXG4gICAgICAgICAgYWN0aXZhdGVUb29sSW5kZXgoYWN0aXZlQ29udHJvbCwgaSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIEhvb2tzLm9uKFwicmVuZGVyS2V5YmluZGluZ3NDb25maWdcIiwgKGFwcDogQXBwbGljYXRpb24sIGh0bWw6IEpRdWVyeSwgZGF0YTogb2JqZWN0KSA9PiB7XG4gICAgLy8gQWRqdXN0IHRoZSBjb3VudGVyXG4gICAgY29uc3QgY29udHJvbENvdW50ID0gdWkuY29udHJvbHMuY29udHJvbHMuZmlsdGVyKGNvbnRyb2wgPT4gY29udHJvbC52aXNpYmxlICE9PSBmYWxzZSkubGVuZ3RoO1xuICAgIGNvbnN0IG1heFRvb2xzQ291bnQgPSBNYXRoLm1heChcbiAgICAgIC4uLnVpLmNvbnRyb2xzLmNvbnRyb2xzXG4gICAgICAgIC5maWx0ZXIoKGNvbnRyb2wpID0+IGNvbnRyb2wudmlzaWJsZSAhPT0gZmFsc2UpXG4gICAgICAgIC5tYXAoKGNvbnRyb2wpID0+IGNvbnRyb2wudG9vbHMuZmlsdGVyKHRvb2wgPT4gdG9vbC52aXNpYmxlICE9PSBmYWxzZSkubGVuZ3RoKVxuICAgICk7XG4gICAgY29uc3Qgc3BhbkNvdW50ID0gaHRtbC5maW5kKFwibmF2LmZpbHRlcnMgZGl2LmxheWVyLWhvdGtleXMgc3Bhbi5jb3VudFwiKTtcblxuICAgIHNwYW5Db3VudC50ZXh0KGBbJHtjb250cm9sQ291bnQgKyBtYXhUb29sc0NvdW50fV1gKTtcblxuICAgIC8vIFJlbmFtZSBhbmQgcmVtb3ZlIHRoZSBlbnRyaWVzXG4gICAgbGV0IGNvbnRyb2xzRWxlbWVudHMgPSBodG1sLmZpbmQoJ2Rpdi5jYXRlZ29yaWVzIGRpdi5jYXRlZ29yeS1saXN0IHNlY3Rpb24uY2F0ZWdvcnlbZGF0YS1jYXRlZ29yeS1pZD1sYXllci1ob3RrZXlzXT5vbC5hY3Rpb24tbGlzdCBsaVtkYXRhLWFjdGlvbi1pZF49XCJsYXllci1ob3RrZXlzLmxheWVyLWNvbnRyb2xcIl0nKTtcbiAgICBsZXQgdG9vbHNFbGVtZW50cyA9IGh0bWwuZmluZCgnZGl2LmNhdGVnb3JpZXMgZGl2LmNhdGVnb3J5LWxpc3Qgc2VjdGlvbi5jYXRlZ29yeVtkYXRhLWNhdGVnb3J5LWlkPWxheWVyLWhvdGtleXNdPm9sLmFjdGlvbi1saXN0IGxpW2RhdGEtYWN0aW9uLWlkXj1cImxheWVyLWhvdGtleXMubGF5ZXItdG9vbFwiXScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cm9sc0VsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBsaSA9IGNvbnRyb2xzRWxlbWVudHNbaV07XG5cbiAgICAgIC8vIFJlbmFtZVxuICAgICAgaWYgKGkgPCB1aS5jb250cm9scy5jb250cm9scy5sZW5ndGggJiYgdWkuY29udHJvbHMuY29udHJvbHNbaV0udmlzaWJsZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gJChsaSkuZmluZChcImg0XCIpO1xuICAgICAgICBjb25zdCBoaW50RWxlbWVudCA9ICQobGkpLmZpbmQoXCJwXCIpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRyb2xOYW1lID0gZ2FtZS5pMThuLmxvY2FsaXplKHVpLmNvbnRyb2xzLmNvbnRyb2xzW2ldLnRpdGxlKTtcbiAgICAgICAgY29uc3QgaGludFRleHQgPSBoaW50RWxlbWVudC50ZXh0KCkucmVwbGFjZShcIntsYXllck5hbWV9XCIsIGNvbnRyb2xOYW1lKTtcblxuICAgICAgICB0aXRsZUVsZW1lbnQudGV4dChjb250cm9sTmFtZSk7XG4gICAgICAgIGhpbnRFbGVtZW50LnRleHQoaGludFRleHQpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGkucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b29sc0VsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBsaSA9IHRvb2xzRWxlbWVudHNbaV07XG5cbiAgICAgIGlmIChpIDwgbWF4VG9vbHNDb3VudCkgY29udGludWU7XG5cbiAgICAgIGxpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHVpLmNvbnRyb2xzLnJlbmRlcigpO1xuICB9KTtcblxuICBIb29rcy5vbihcInJlbmRlclNjZW5lQ29udHJvbHNcIiwgKGFwcDogQXBwbGljYXRpb24sIGh0bWw6IEpRdWVyeSwgZGF0YTogb2JqZWN0KSA9PiB7XG4gICAgbGV0IHNjZW5lQ29udHJvbHMgPSBodG1sLmZpbmQoXCJvbC5tYWluLWNvbnRyb2xzIGxpLnNjZW5lLWNvbnRyb2xcIik7XG4gICAgbGV0IHRvb2xHcm91cHMgPSBodG1sLmZpbmQoXCJvbC5zdWItY29udHJvbHNcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjZW5lQ29udHJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpID0gc2NlbmVDb250cm9sc1tpXTtcblxuICAgICAgY29uc3QgY29udHJvbE5hbWUgPSBsaS5kYXRhc2V0Wydjb250cm9sJ107XG4gICAgICBjb25zdCBjb250cm9sSW5kZXggPSB1aS5jb250cm9scy5jb250cm9scy5maW5kSW5kZXgoY29udHJvbCA9PiBjb250cm9sLm5hbWUgPT09IGNvbnRyb2xOYW1lKTtcblxuICAgICAgbGV0IGtleWJpbmRpbmdzID0gZ2FtZS5rZXliaW5kaW5ncy5nZXQoXCJsYXllci1ob3RrZXlzXCIsIGBsYXllci1jb250cm9sLSR7Y29udHJvbEluZGV4fWApO1xuXG4gICAgICBpZiAoa2V5YmluZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIGxpLnRpdGxlID0gYXBwZW5kS2V5YmluZGluZ3MobGkudGl0bGUsIGtleWJpbmRpbmdzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBncm91cEluZGV4ID0gMDsgZ3JvdXBJbmRleCA8IHRvb2xHcm91cHMubGVuZ3RoOyBncm91cEluZGV4KyspIHtcbiAgICAgIGNvbnN0IHRvb2xHcm91cCA9IHRvb2xHcm91cHNbZ3JvdXBJbmRleF07XG4gICAgICBjb25zdCB0b29scyA9ICQodG9vbEdyb3VwKS5maW5kKFwibGkuY29udHJvbC10b29sXCIpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvb2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpID0gdG9vbHNbaV07XG4gICAgICAgIGxldCBrZXliaW5kaW5ncyA9IGdhbWUua2V5YmluZGluZ3MuZ2V0KFwibGF5ZXItaG90a2V5c1wiLCBgbGF5ZXItdG9vbC0ke2l9YCk7XG5cbiAgICAgICAgaWYgKGtleWJpbmRpbmdzLmxlbmd0aCkge1xuICAgICAgICAgIGxpLnRpdGxlID0gYXBwZW5kS2V5YmluZGluZ3MobGkudGl0bGUsIGtleWJpbmRpbmdzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRLZXliaW5kaW5ncyhzdHJpbmc6IHN0cmluZywga2V5YmluZGluZ3M6IEtleWJpbmRpbmdBY3Rpb25CaW5kaW5nW10pOiBzdHJpbmcge1xuICBsZXQga2V5YmluZGluZ0FwcGVuZCA9IGAgWyAke2tleWJpbmRpbmdzXG4gICAgLm1hcCgoa2V5YmluZCkgPT5cbiAgICAgIGtleWJpbmQubW9kaWZpZXJzPy5sZW5ndGhcbiAgICAgICAgPyBgJHtrZXliaW5kLm1vZGlmaWVycy5qb2luKFxuICAgICAgICAgICAgXCIgKyBcIlxuICAgICAgICAgICl9ICsgJHtLZXlib2FyZE1hbmFnZXIuZ2V0S2V5Y29kZURpc3BsYXlTdHJpbmcoa2V5YmluZC5rZXkpfWBcbiAgICAgICAgOiBLZXlib2FyZE1hbmFnZXIuZ2V0S2V5Y29kZURpc3BsYXlTdHJpbmcoa2V5YmluZC5rZXkpXG4gICAgKVxuICAgIC5qb2luKFwiIG9yIFwiKX0gXWA7XG4gIFxuICByZXR1cm4gc3RyaW5nICsga2V5YmluZGluZ0FwcGVuZDtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVUb29sSW5kZXgoY29udHJvbDogU2NlbmVDb250cm9sLCB0b29sSW5kZXg6IG51bWJlcikge1xuICBsZXQgdG9vbHMgPSBjb250cm9sLnRvb2xzLmZpbHRlcigodG9vbCkgPT4gdG9vbC52aXNpYmxlICE9PSBmYWxzZSk7XG5cbiAgaWYgKHRvb2xJbmRleCA+PSB0b29scy5sZW5ndGgpIHJldHVybjtcblxuICBsZXQgdG9vbCA9IHRvb2xzW3Rvb2xJbmRleF07XG5cbiAgLy8gSGFuZGxlIFRvZ2dsZXNcbiAgaWYgKHRvb2wudG9nZ2xlKSB7XG4gICAgdG9vbC5hY3RpdmUgPSAhdG9vbC5hY3RpdmU7XG4gICAgaWYgKHRvb2wub25DbGljayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB0b29sLm9uQ2xpY2sodG9vbC5hY3RpdmUpO1xuICB9XG5cbiAgLy8gSGFuZGxlIEJ1dHRvbnNcbiAgZWxzZSBpZiAodG9vbC5idXR0b24pIHtcbiAgICBpZiAodG9vbC5vbkNsaWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHRvb2wub25DbGljaygpO1xuICB9XG5cbiAgLy8gSGFuZGxlIFRvb2xzXG4gIGVsc2Uge1xuICAgIGNvbnRyb2wuYWN0aXZlVG9vbCA9IHRvb2wubmFtZTtcbiAgICBpZiAodG9vbC5vbkNsaWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHRvb2wub25DbGljaygpO1xuICB9XG5cbiAgLy8gUmVuZGVyIHRoZSBjb250cm9sc1xuICB1aS5jb250cm9scy5yZW5kZXIoKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHtpbml0fSBmcm9tICcuL2xheWVyLWhvdGtleXMnO1xuXG5pbml0KCk7Il0sIm5hbWVzIjpbImFwcGVuZEtleWJpbmRpbmdzIiwic3RyaW5nIiwia2V5YmluZGluZ3MiLCJtYXAiLCJrZXliaW5kIiwibW9kaWZpZXJzIiwibGVuZ3RoIiwiam9pbiIsIktleWJvYXJkTWFuYWdlciIsImdldEtleWNvZGVEaXNwbGF5U3RyaW5nIiwia2V5IiwiYWN0aXZhdGVUb29sSW5kZXgiLCJjb250cm9sIiwidG9vbEluZGV4IiwidG9vbHMiLCJmaWx0ZXIiLCJ0b29sIiwidmlzaWJsZSIsInRvZ2dsZSIsImFjdGl2ZSIsIm9uQ2xpY2siLCJGdW5jdGlvbiIsImJ1dHRvbiIsImFjdGl2ZVRvb2wiLCJuYW1lIiwidWkiLCJjb250cm9scyIsInJlbmRlciIsIkhvb2tzIiwib25jZSIsIkRFRkFVTFRfS0VZU19MQVlFUiIsInRva2VuIiwibWVhc3VyZSIsInRpbGVzIiwiZHJhd2luZ3MiLCJ3YWxscyIsImxpZ2h0aW5nIiwic291bmRzIiwibm90ZXMiLCJERUZBVUxUX0tFWVNfTEFZRVJfS0VZUyIsIk9iamVjdCIsImtleXMiLCJERUZBVUxUX0tFWVNfTEFZRVJfVE9PTCIsImkiLCJnYW1lIiwicmVnaXN0ZXIiLCJoaW50IiwiZWRpdGFibGUiLCJ1bmRlZmluZWQiLCJwcmVjZWRlbmNlIiwiQ09OU1QiLCJLRVlCSU5ESU5HX1BSRUNFREVOQ0UiLCJOT1JNQUwiLCJvbkRvd24iLCIkIiwiYWN0aXZlQ29udHJvbCIsInRyaWdnZXIiLCJmaW5kIiwiZSIsIm9uIiwiYXBwIiwiaHRtbCIsImRhdGEiLCJjb250cm9sQ291bnQiLCJtYXhUb29sc0NvdW50IiwiTWF0aCIsIm1heCIsInRleHQiLCJjb250cm9sc0VsZW1lbnRzIiwidG9vbHNFbGVtZW50cyIsImxpIiwidGl0bGVFbGVtZW50IiwiaGludEVsZW1lbnQiLCJjb250cm9sTmFtZSIsImkxOG4iLCJsb2NhbGl6ZSIsInRpdGxlIiwiaGludFRleHQiLCJyZXBsYWNlIiwicmVtb3ZlIiwic2NlbmVDb250cm9scyIsInRvb2xHcm91cHMiLCJkYXRhc2V0IiwiY29udHJvbEluZGV4IiwiZmluZEluZGV4IiwiZ2V0IiwiZ3JvdXBJbmRleCIsInRvb2xHcm91cCIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiY2FsbCIsImluaXQiXSwic291cmNlUm9vdCI6IiJ9