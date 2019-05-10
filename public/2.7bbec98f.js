(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{49:function(t,e,o){},50:function(t,e,o){},51:function(t,e,o){},52:function(t,e,o){"use strict";var n=o(49);o.n(n).a},53:function(t,e,o){"use strict";var n=o(50);o.n(n).a},54:function(t,e,o){"use strict";var n=o(51);o.n(n).a},55:function(t,e,o){"use strict";o.r(e);var n=o(3),l={props:{todo:{type:Object,required:!0}},methods:{deleteTodo:function(){this.$emit("del",this.todo.id)},handleToggle:function(t){t.preventDefault(),this.$emit("toggle",this.todo)}}},i=(o(52),o(0)),r=Object(i.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:["todo-item",t.todo.completed?"completed":""]},[o("input",{staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:t.todo.completed},on:{click:t.handleToggle}}),t._v(" "),o("label",[t._v(t._s(t.todo.content))]),t._v(" "),o("button",{staticClass:"destroy",on:{click:t.deleteTodo}})])},[],!1,null,"6c804e42",null);r.options.__file="item.vue";var s=r.exports,a={props:{filter:{type:String,required:!0},todos:{type:Array,required:!0}},methods:{clearAllCompleted:function(){this.$emit("clearALl")}},computed:{unfinishedTodoLength:function(){return this.todos.filter(function(t){return!t.completed}).length}}},c=(o(53),Object(i.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"helper"},[e("span",{staticClass:"left"},[this._v(this._s(this.unfinishedTodoLength)+" items left")]),this._v(" "),e("span",{staticClass:"clear",on:{click:this.clearAllCompleted}},[this._v("\n    Clear completed\n  ")])])},[],!1,null,"9b2f7bc6",null));function d(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){u(t,e,o[e])})}return t}function u(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}c.options.__file="helper.vue";var f={metaInfo:{title:"this is a todo app"},components:{Item:s,Helper:c.exports},data:function(){return{filter:"all",stats:["all","active","completed"]}},mounted:function(){this.fetchTodos()},methods:d({},Object(n.b)(["fetchTodos","addTodo","deleteTodo","updateTodo","deleteAllCompleted"]),{handleAdd:function(t){var e=t.target.value.trim();if(e){var o={content:e,completed:!1};this.addTodo(o),t.target.value=""}else this.$notify({content:"必须输入要做的内容"})},toggleTodoState:function(t){this.updateTodo({id:t.id,todo:Object.assign({},t,{completed:!t.completed})})},clearAllCompleted:function(){console.log("开始删除"),this.deleteAllCompleted()},handleChangeTab:function(t){this.filter=t}}),computed:d({},Object(n.e)(["todos"]),{filterTodos:function(){if("all"===this.filter)return this.todos;var t="completed"===this.filter;return this.todos.filter(function(e){return t===e.completed})}})},p=(o(54),Object(i.a)(f,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"real-app"},[o("div",{staticClass:"tab-container"},[o("tabs",{attrs:{value:t.filter},on:{change:t.handleChangeTab}},t._l(t.stats,function(t){return o("tab",{key:t,attrs:{label:t,index:t}})}))],1),t._v(" "),o("input",{staticClass:"add-input",attrs:{type:"text",autofocus:"autofocus",placeholder:"接下来要做什么？"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleAdd(e):null}}}),t._v(" "),t._l(t.filterTodos,function(e){return o("Item",{key:e.id,attrs:{todo:e},on:{del:t.deleteTodo,toggle:t.toggleTodoState}})}),t._v(" "),o("helper",{attrs:{filter:t.filter,todos:t.todos},on:{clearALl:t.clearAllCompleted}})],2)},[],!1,null,"66d7408a",null));p.options.__file="todo.vue";e.default=p.exports}}]);