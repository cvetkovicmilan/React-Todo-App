(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(16)},16:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),d=n(8),o=n.n(d),s=n(9),l=n(2),c=n(3),u=n(6),r=n(4),m=n(1),h=n(5),p=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(u.a)(this,Object(r.a)(e).call(this))).inputElement=i.a.createRef(),t}return Object(h.a)(e,t),Object(c.a)(e,[{key:"componentDidUpdate",value:function(){this.inputElement.current.focus()}},{key:"componentDidMount",value:function(){this.inputElement.current.focus()}},{key:"render",value:function(){var t=this.props,e=t.editTime,n=t.editTodo,a=t.addTodo,d=t.handleChange,o=t.submited,s=t.input;return i.a.createElement("form",{className:"input-container",onSubmit:e?n:a},i.a.createElement("div",{className:"input-wrapper"},i.a.createElement("i",{className:"fas fa-book book"}),i.a.createElement("input",{type:"text",onChange:d,value:o&&!e?"":s,className:"inputfield",placeholder:"Add a Todo Item",ref:this.inputElement})),i.a.createElement("button",{type:"submit",className:e?"btn-edit":"btn-submit"},e?"Edit Item":"Add Item"))}}]),e}(a.Component),b=function(t){var e=t.getIdEdit,n=t.deleteTodo,a=t.todos.map(function(t){return i.a.createElement("li",{key:t.id},i.a.createElement("h3",null,t.content),i.a.createElement("div",{className:"item-icons"},i.a.createElement("i",{className:"fas fa-pencil-alt edit",onClick:function(){e(t.id)}}),i.a.createElement("i",{className:"fas fa-trash trash",onClick:function(){n(t.id)}})))});return i.a.createElement("div",null,a)},f=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(u.a)(this,Object(r.a)(e).call(this,t))).state={todos:[],input:"",submited:!1,editTime:!1,idEdit:null},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.deleteTodo=n.deleteTodo.bind(Object(m.a)(n)),n.addTodo=n.addTodo.bind(Object(m.a)(n)),n.deleteAll=n.deleteAll.bind(Object(m.a)(n)),n.editTodo=n.editTodo.bind(Object(m.a)(n)),n.getIdEdit=n.getIdEdit.bind(Object(m.a)(n)),n}return Object(h.a)(e,t),Object(c.a)(e,[{key:"handleChange",value:function(t){this.setState({input:t.target.value,submited:!1})}},{key:"deleteTodo",value:function(t){var e=this.state.todos.filter(function(e){return e.id!==t});this.setState({todos:e,editTime:!1,input:""})}},{key:"deleteAll",value:function(){this.setState({todos:[]})}},{key:"addTodo",value:function(t){t.preventDefault();var e=[].concat(Object(s.a)(this.state.todos),[{id:Math.random(),content:this.state.input}]);this.setState({todos:e,submited:!0,input:""})}},{key:"getIdEdit",value:function(t){var e=this.state.todos.filter(function(e){return e.id===t});this.setState({editTime:!0,idEdit:t,input:e[0].content})}},{key:"editTodo",value:function(t){var e=this;t.preventDefault();var n=this.state.todos.map(function(t){return t.id===e.state.idEdit?{id:e.state.idEdit,content:e.state.input}:t});this.setState({todos:n,editTime:!1,submited:!0,input:""})}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,"todo input"),i.a.createElement(p,{handleChange:this.handleChange,addTodo:this.addTodo,editTodo:this.editTodo,submited:this.state.submited,editTime:this.state.editTime,input:this.state.input}),i.a.createElement("div",{className:"todolist-container"},i.a.createElement("h2",null,"Todo List"),i.a.createElement("ul",null,i.a.createElement(b,{todos:this.state.todos,deleteTodo:this.deleteTodo,getIdEdit:this.getIdEdit}))),i.a.createElement("button",{className:"clear",onClick:this.deleteAll},"Clear List"))}}]),e}(i.a.Component);o.a.render(i.a.createElement(f,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.ea415211.chunk.js.map