!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1);var i;!function(e){const t="BlazorExtensions",n={Canvas2d:new r.ContextManager("2d"),WebGL:new r.ContextManager("webgl")};e.initialize=function(){"undefined"==typeof window||window[t]?window[t]=Object.assign({},window[t],n):window[t]=Object.assign({},n)}}(i||(i={})),i.initialize()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ContextManager=class{constructor(e){if(this.contexts=new Map,this.webGLObject=new Array,this.webGLContext=!1,this.webGLTypes=[WebGLBuffer,WebGLShader,WebGLProgram,WebGLFramebuffer,WebGLRenderbuffer,WebGLTexture,WebGLUniformLocation],this.add=((e,t)=>{if(!e)throw new Error("Invalid canvas.");if(!this.contexts.get(e.id)){var n;if(!(n=t?e.getContext(this.contextName,t):e.getContext(this.contextName)))throw new Error("Invalid context.");this.contexts.set(e.id,n)}}),this.remove=(e=>{this.contexts.delete(e.id)}),this.setProperty=((e,t,n)=>{this.getContext(e)[t]=this.deserialize(t,n)}),this.getProperty=((e,t)=>{const n=this.getContext(e);return this.serialize(n[t])}),this.call=((e,t,n)=>{const r=this.getContext(e);return this.serialize(this.prototypes[t].apply(r,void 0!=n?n.map(e=>this.deserialize(t,e)):[]))}),this.getContext=(e=>{if(!e)throw new Error("Invalid canvas.");const t=this.contexts.get(e.id);if(!t)throw new Error("Invalid context.");return t}),this.deserialize=((e,t)=>this.webGLContext?t.hasOwnProperty("webGLType")&&t.hasOwnProperty("id")?this.webGLObject[t.id]:Array.isArray(t)&&!e.endsWith("v")?Int8Array.of(...t):t:t),this.serialize=(e=>{if(!this.webGLContext)return e;const t=this.webGLTypes.find(t=>e instanceof t);if(void 0!=t){const n=this.webGLObject.length;return this.webGLObject.push(e),{webGLType:t.name,id:n}}return e}),this.contextName=e,"2d"===e)this.prototypes=CanvasRenderingContext2D.prototype;else{if("webgl"!==e&&"experimental-webgl"!==e)throw new Error(`Invalid context name: ${e}`);this.prototypes=WebGLRenderingContext.prototype,this.webGLContext=!0}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luaXRpYWxpemVDYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhc0NvbnRleHRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiQ2FudmFzQ29udGV4dE1hbmFnZXJfMSIsIkNhbnZhcyIsImJsYXpvckV4dGVuc2lvbnMiLCJleHRlbnNpb25PYmplY3QiLCJDYW52YXMyZCIsIkNvbnRleHRNYW5hZ2VyIiwiV2ViR0wiLCJpbml0aWFsaXplIiwid2luZG93IiwiYXNzaWduIiwiW29iamVjdCBPYmplY3RdIiwiY29udGV4dE5hbWUiLCJ0aGlzIiwiY29udGV4dHMiLCJNYXAiLCJ3ZWJHTE9iamVjdCIsIkFycmF5Iiwid2ViR0xDb250ZXh0Iiwid2ViR0xUeXBlcyIsIldlYkdMQnVmZmVyIiwiV2ViR0xTaGFkZXIiLCJXZWJHTFByb2dyYW0iLCJXZWJHTEZyYW1lYnVmZmVyIiwiV2ViR0xSZW5kZXJidWZmZXIiLCJXZWJHTFRleHR1cmUiLCJXZWJHTFVuaWZvcm1Mb2NhdGlvbiIsImFkZCIsImNhbnZhcyIsInBhcmFtZXRlcnMiLCJFcnJvciIsImlkIiwiY29udGV4dCIsImdldENvbnRleHQiLCJzZXQiLCJyZW1vdmUiLCJkZWxldGUiLCJzZXRQcm9wZXJ0eSIsImRlc2VyaWFsaXplIiwiZ2V0UHJvcGVydHkiLCJzZXJpYWxpemUiLCJtZXRob2QiLCJhcmdzIiwicHJvdG90eXBlcyIsImFwcGx5IiwidW5kZWZpbmVkIiwibWFwIiwiaXNBcnJheSIsImVuZHNXaXRoIiwiSW50OEFycmF5Iiwib2YiLCJ0eXBlIiwiZmluZCIsImxlbmd0aCIsInB1c2giLCJ3ZWJHTFR5cGUiLCJDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQiLCJXZWJHTFJlbmRlcmluZ0NvbnRleHQiXSwibWFwcGluZ3MiOiJhQUNBLElBQUFBLEtBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsSUFDQUcsRUFBQUgsRUFDQUksR0FBQSxFQUNBSCxZQVVBLE9BTkFJLEVBQUFMLEdBQUFNLEtBQUFKLEVBQUFELFFBQUFDLElBQUFELFFBQUFGLEdBR0FHLEVBQUFFLEdBQUEsRUFHQUYsRUFBQUQsUUFLQUYsRUFBQVEsRUFBQUYsRUFHQU4sRUFBQVMsRUFBQVYsRUFHQUMsRUFBQVUsRUFBQSxTQUFBUixFQUFBUyxFQUFBQyxHQUNBWixFQUFBYSxFQUFBWCxFQUFBUyxJQUNBRyxPQUFBQyxlQUFBYixFQUFBUyxHQUEwQ0ssWUFBQSxFQUFBQyxJQUFBTCxLQUsxQ1osRUFBQWtCLEVBQUEsU0FBQWhCLEdBQ0Esb0JBQUFpQixlQUFBQyxhQUNBTixPQUFBQyxlQUFBYixFQUFBaUIsT0FBQUMsYUFBd0RDLE1BQUEsV0FFeERQLE9BQUFDLGVBQUFiLEVBQUEsY0FBaURtQixPQUFBLEtBUWpEckIsRUFBQXNCLEVBQUEsU0FBQUQsRUFBQUUsR0FFQSxHQURBLEVBQUFBLElBQUFGLEVBQUFyQixFQUFBcUIsSUFDQSxFQUFBRSxFQUFBLE9BQUFGLEVBQ0EsS0FBQUUsR0FBQSxpQkFBQUYsUUFBQUcsV0FBQSxPQUFBSCxFQUNBLElBQUFJLEVBQUFYLE9BQUFZLE9BQUEs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LGVBQWUsTUFDdERlLEtBQUtHLFlBQVlyQixFQUFXLElBQzNCc0IsTUFBTThCLFFBQVFwRCxLQUFZOEMsRUFBT08sU0FBUyxLQUM1Q0MsVUFBVUMsTUFBT3ZELEdBRWpCQSxFQVBzQkEsR0FVekJrQixLQUFBMkIsVUFBWSxDQUFDN0MsSUFDbkIsSUFBS2tCLEtBQUtLLGFBQWMsT0FBT3ZCLEVBRS9CLE1BQU13RCxFQUFPdEMsS0FBS00sV0FBV2lDLEtBQU1ELEdBQVN4RCxhQUFrQndELEdBQzlELFFBQVlOLEdBQVJNLEVBQW1CLENBQ3JCLE1BQU1wQixFQUFLbEIsS0FBS0csWUFBWXFDLE9BRzVCLE9BRkF4QyxLQUFLRyxZQUFZc0MsS0FBSzNELElBR3BCNEQsVUFBV0osRUFBSzNFLEtBQ2hCdUQsR0FBSUEsR0FHTixPQUFPcEMsSUE3RVRrQixLQUFLRCxZQUFjQSxFQUNDLE9BQWhCQSxFQUNGQyxLQUFLOEIsV0FBYWEseUJBQXlCM0QsY0FDeEMsSUFBb0IsVUFBaEJlLEdBQTJDLHVCQUFoQkEsRUFJbEMsTUFBTSxJQUFJa0IsK0JBQStCbEIsS0FIekNDLEtBQUs4QixXQUFhYyxzQkFBc0I1RCxVQUN4Q2dCLEtBQUtLLGNBQWUiLCJmaWxlIjoiYmxhem9yLmV4dGVuc2lvbnMuY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgQ29udGV4dE1hbmFnZXIgfSBmcm9tICcuL0NhbnZhc0NvbnRleHRNYW5hZ2VyJztcclxuXHJcbm5hbWVzcGFjZSBDYW52YXMge1xyXG4gIGNvbnN0IGJsYXpvckV4dGVuc2lvbnM6IHN0cmluZyA9ICdCbGF6b3JFeHRlbnNpb25zJztcclxuICAvLyBkZWZpbmUgd2hhdCB0aGlzIGV4dGVuc2lvbiBhZGRzIHRvIHRoZSB3aW5kb3cgb2JqZWN0IGluc2lkZSBCbGF6b3JFeHRlbnNpb25zXHJcbiAgY29uc3QgZXh0ZW5zaW9uT2JqZWN0ID0ge1xyXG4gICAgQ2FudmFzMmQ6IG5ldyBDb250ZXh0TWFuYWdlcihcIjJkXCIpLFxyXG4gICAgV2ViR0w6IG5ldyBDb250ZXh0TWFuYWdlcihcIndlYmdsXCIpXHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemUoKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXdpbmRvd1tibGF6b3JFeHRlbnNpb25zXSkge1xyXG4gICAgICAvLyB3aGVuIHRoZSBsaWJyYXJ5IGlzIGxvYWRlZCBpbiBhIGJyb3dzZXIgdmlhIGEgPHNjcmlwdD4gZWxlbWVudCwgbWFrZSB0aGVcclxuICAgICAgLy8gZm9sbG93aW5nIEFQSXMgYXZhaWxhYmxlIGluIGdsb2JhbCBzY29wZSBmb3IgaW52b2NhdGlvbiBmcm9tIEpTXHJcbiAgICAgIHdpbmRvd1tibGF6b3JFeHRlbnNpb25zXSA9IHtcclxuICAgICAgICAuLi5leHRlbnNpb25PYmplY3RcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvd1tibGF6b3JFeHRlbnNpb25zXSA9IHtcclxuICAgICAgICAuLi53aW5kb3dbYmxhem9yRXh0ZW5zaW9uc10sXHJcbiAgICAgICAgLi4uZXh0ZW5zaW9uT2JqZWN0XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5DYW52YXMuaW5pdGlhbGl6ZSgpO1xyXG4iLCJleHBvcnQgY2xhc3MgQ29udGV4dE1hbmFnZXIge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dHMgPSBuZXcgTWFwPHN0cmluZywgYW55PigpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgd2ViR0xPYmplY3QgPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dE5hbWU6IHN0cmluZztcclxuICBwcml2YXRlIHdlYkdMQ29udGV4dCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgcHJvdG90eXBlczogYW55O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgd2ViR0xUeXBlcyA9IFtcclxuICAgIFdlYkdMQnVmZmVyLCBXZWJHTFNoYWRlciwgV2ViR0xQcm9ncmFtLCBXZWJHTEZyYW1lYnVmZmVyLCBXZWJHTFJlbmRlcmJ1ZmZlciwgV2ViR0xUZXh0dXJlLCBXZWJHTFVuaWZvcm1Mb2NhdGlvblxyXG4gIF07XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb250ZXh0TmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNvbnRleHROYW1lID0gY29udGV4dE5hbWU7XHJcbiAgICBpZiAoY29udGV4dE5hbWUgPT09IFwiMmRcIilcclxuICAgICAgdGhpcy5wcm90b3R5cGVzID0gQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZTtcclxuICAgIGVsc2UgaWYgKGNvbnRleHROYW1lID09PSBcIndlYmdsXCIgfHwgY29udGV4dE5hbWUgPT09IFwiZXhwZXJpbWVudGFsLXdlYmdsXCIpIHtcclxuICAgICAgdGhpcy5wcm90b3R5cGVzID0gV2ViR0xSZW5kZXJpbmdDb250ZXh0LnByb3RvdHlwZTtcclxuICAgICAgdGhpcy53ZWJHTENvbnRleHQgPSB0cnVlO1xyXG4gICAgfSBlbHNlXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBjb250ZXh0IG5hbWU6ICR7Y29udGV4dE5hbWV9YCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHBhcmFtZXRlcnM6IGFueSkgPT4ge1xyXG4gICAgaWYgKCFjYW52YXMpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjYW52YXMuJyk7XHJcbiAgICBpZiAodGhpcy5jb250ZXh0cy5nZXQoY2FudmFzLmlkKSkgcmV0dXJuO1xyXG5cclxuICAgIHZhciBjb250ZXh0O1xyXG4gICAgaWYgKHBhcmFtZXRlcnMpXHJcbiAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCh0aGlzLmNvbnRleHROYW1lLCBwYXJhbWV0ZXJzKTtcclxuICAgIGVsc2VcclxuICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KHRoaXMuY29udGV4dE5hbWUpO1xyXG5cclxuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvbnRleHQuJyk7XHJcblxyXG4gICAgdGhpcy5jb250ZXh0cy5zZXQoY2FudmFzLmlkLCBjb250ZXh0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmUgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkgPT4ge1xyXG4gICAgdGhpcy5jb250ZXh0cy5kZWxldGUoY2FudmFzLmlkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQcm9wZXJ0eSA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KGNhbnZhcyk7XHJcbiAgICBjb250ZXh0W3Byb3BlcnR5XSA9IHRoaXMuZGVzZXJpYWxpemUocHJvcGVydHksIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQcm9wZXJ0eSA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBwcm9wZXJ0eTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KGNhbnZhcyk7XHJcbiAgICByZXR1cm4gdGhpcy5zZXJpYWxpemUoY29udGV4dFtwcm9wZXJ0eV0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbGwgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgbWV0aG9kOiBzdHJpbmcsIGFyZ3M6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dChjYW52YXMpO1xyXG4gICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplKHRoaXMucHJvdG90eXBlc1ttZXRob2RdLmFwcGx5KGNvbnRleHQsIGFyZ3MgIT0gdW5kZWZpbmVkID8gYXJncy5tYXAoKHZhbHVlKSA9PiB0aGlzLmRlc2VyaWFsaXplKG1ldGhvZCwgdmFsdWUpKSA6IFtdKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvbnRleHQgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKCFjYW52YXMpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjYW52YXMuJyk7XHJcblxyXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dHMuZ2V0KGNhbnZhcy5pZCk7XHJcbiAgICBpZiAoIWNvbnRleHQpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb250ZXh0LicpO1xyXG5cclxuICAgIHJldHVybiBjb250ZXh0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXNlcmlhbGl6ZSA9IChtZXRob2Q6IHN0cmluZywgb2JqZWN0OiBhbnkpID0+IHtcclxuICAgIGlmICghdGhpcy53ZWJHTENvbnRleHQpIHJldHVybiBvYmplY3Q7IC8vZGVzZXJpYWxpemF0aW9uIG9ubHkgbmVlZHMgdG8gaGFwcGVuIGZvciB3ZWJHTFxyXG5cclxuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoXCJ3ZWJHTFR5cGVcIikgJiYgb2JqZWN0Lmhhc093blByb3BlcnR5KFwiaWRcIikpIHtcclxuICAgICAgcmV0dXJuICh0aGlzLndlYkdMT2JqZWN0W29iamVjdFtcImlkXCJdXSk7XHJcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSAmJiAhbWV0aG9kLmVuZHNXaXRoKFwidlwiKSkge1xyXG4gICAgICByZXR1cm4gSW50OEFycmF5Lm9mKC4uLihvYmplY3QgYXMgbnVtYmVyW10pKTtcclxuICAgIH0gZWxzZVxyXG4gICAgICByZXR1cm4gb2JqZWN0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXJpYWxpemUgPSAob2JqZWN0OiBhbnkpID0+IHtcclxuICAgIGlmICghdGhpcy53ZWJHTENvbnRleHQpIHJldHVybiBvYmplY3Q7IC8vc2VyaWFsaXphdGlvbiBvbmx5IG5lZWRzIHRvIGhhcHBlbiBmb3Igd2ViR0xcclxuXHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy53ZWJHTFR5cGVzLmZpbmQoKHR5cGUpID0+IG9iamVjdCBpbnN0YW5jZW9mIHR5cGUpO1xyXG4gICAgaWYgKHR5cGUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gdGhpcy53ZWJHTE9iamVjdC5sZW5ndGg7XHJcbiAgICAgIHRoaXMud2ViR0xPYmplY3QucHVzaChvYmplY3QpO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB3ZWJHTFR5cGU6IHR5cGUubmFtZSxcclxuICAgICAgICBpZDogaWRcclxuICAgICAgfTtcclxuICAgIH0gZWxzZVxyXG4gICAgICByZXR1cm4gb2JqZWN0O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9