(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(6),s=n.n(o),i=(n(14),n(9)),r=n(2),l=n.p+"static/media/header-logo.c2821b38.svg",u=n(0);function p(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("img",{className:"header__logo",src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto Russia"})})}var d=Object(a.createContext)();function j(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,o=e.onCardDelete,s=Object(a.useContext)(d),i=t.owner._id===s._id,r="place-card__delete-button ".concat(i?"place-card__delete-button_visible.css":"place-card__delete-button_hidden"),l=t.likes.some((function(e){return e._id===s._id})),p="place-card__like-button ".concat(l&&"place-card__like-button_active");return Object(u.jsxs)("li",{className:"place-card",children:[Object(u.jsx)("button",{type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:r,onClick:function(){o(t)}}),Object(u.jsx)("img",{className:"place-card__photo",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(u.jsxs)("div",{className:"place-card__photo-description",children:[Object(u.jsx)("h2",{className:"place-card__photo-name",children:t.name}),Object(u.jsxs)("div",{className:"place-card__like-section",children:[Object(u.jsx)("button",{type:"button","aria-label":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a",className:p,onClick:function(){c(t)}}),Object(u.jsx)("span",{className:"place-card__like-count",children:t.likes.length})]})]})]})}function h(){return Object(u.jsx)("div",{className:"loader",children:Object(u.jsx)("div",{className:"loader__circle"})})}function b(e){var t=e.onEditAvatar,n=e.onEditProfile,c=e.onAddPlace,o=e.cards,s=e.onCardClick,i=e.onCardLike,r=e.onCardDelete,l=e.isCardsLoading,p=Object(a.useContext)(d);return Object(u.jsxs)("main",{children:[Object(u.jsx)("section",{className:"profile",children:Object(u.jsxs)("div",{className:"profile__information",children:[Object(u.jsxs)("div",{className:"profile__avatar",children:[Object(u.jsx)("img",{className:"profile__avatar-picture",src:p.avatar,alt:p.name}),Object(u.jsx)("button",{type:"button","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__avatar-edit",onClick:t})]}),Object(u.jsx)("h1",{className:"profile__name",children:p.name}),Object(u.jsx)("p",{className:"profile__description",children:p.about}),Object(u.jsx)("button",{type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__edit-button",onClick:n}),Object(u.jsx)("button",{type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:"profile__add-button",onClick:c})]})}),Object(u.jsxs)("section",{className:"galery",children:[l&&Object(u.jsx)(h,{}),Object(u.jsx)("ul",{className:"galery__places",children:o.map((function(e){return Object(u.jsx)(j,{card:e,onCardClick:s,onCardLike:i,onCardDelete:r},e._id)}))})]})]})}function _(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})}function m(e){var t=e.name,n=e.title,a=e.buttonText,c=e.children,o=e.isOpen,s=e.onClose,i=e.onSubmit;return Object(u.jsx)("section",{className:"popup popup_type_".concat(t," ").concat(o&&"popup_opened"),children:Object(u.jsxs)("div",{className:"popup__container popup__container_profile",children:[Object(u.jsxs)("form",{name:t,noValidate:!0,onSubmit:i,children:[Object(u.jsx)("h3",{className:"popup__title",children:n}),c,Object(u.jsx)("button",{type:"submit",className:"popup__save-button popup__save-button_profile",children:a})]}),Object(u.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",className:"popup__close-button",onClick:s})]})})}function f(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,o=e.isDataSending,s=Object(a.useState)(""),i=Object(r.a)(s,2),l=i[0],p=i[1],j=Object(a.useState)(""),h=Object(r.a)(j,2),b=h[0],_=h[1],f=Object(a.useContext)(d);return Object(a.useEffect)((function(){p(f.name),_(f.about)}),[f,t]),Object(u.jsx)(m,{name:"profile-edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:o?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:l,about:b})},children:Object(u.jsxs)("div",{className:"popup__inputs",children:[Object(u.jsx)("input",{type:"text",name:"name-of-user",className:"popup__input popup__input_type_name",autoComplete:"off",required:!0,minLength:"2",maxLength:"40",value:void 0===l?"":l,onChange:function(e){p(e.target.value)}}),Object(u.jsx)("span",{className:"popup__error-message",id:"name-of-user-error"}),Object(u.jsx)("input",{type:"text",name:"description",className:"popup__input popup__input_type_description",autoComplete:"off",required:!0,minLength:"2",maxLength:"200",value:void 0===b?"":b,onChange:function(e){_(e.target.value)}}),Object(u.jsx)("span",{className:"popup__error-message",id:"description-error"})]})})}function O(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,o=e.isDataSending,s=Object(a.useRef)();Object(a.useContext)(d);return Object(u.jsx)(m,{name:"update-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:o?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c(s.current.value)},children:Object(u.jsxs)("div",{className:"popup__inputs",children:[Object(u.jsx)("input",{type:"url",name:"avatar-url",className:"popup__input popup__input_type_avatar-url",autoComplete:"off",placeholder:"url",required:!0,minLength:"2",maxLength:"",ref:s}),Object(u.jsx)("span",{className:"popup__error-message",id:"avatar-url-error"})]})})}function x(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,o=e.isDataSending,s=Object(a.useState)(""),i=Object(r.a)(s,2),l=i[0],p=i[1],d=Object(a.useState)(""),j=Object(r.a)(d,2),h=j[0],b=j[1];return Object(a.useEffect)((function(){p(""),b("")}),[t]),Object(u.jsx)(m,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:o?"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:l,link:h})},children:Object(u.jsxs)("div",{className:"popup__inputs",children:[Object(u.jsx)("input",{type:"text",name:"name-of-place",className:"popup__input popup__input_type_place-name",autoComplete:"off",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",value:l||"",onChange:function(e){p(e.target.value)}}),Object(u.jsx)("span",{className:"popup__error-message",id:"name-of-place-error"}),Object(u.jsx)("input",{type:"url",name:"image-url",className:"popup__input popup__input_type_image-link",autoComplete:"off",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:h||"",onChange:function(e){b(e.target.value)}}),Object(u.jsx)("span",{className:"popup__error-message",id:"image-url-error"})]})})}function v(e){var t=e.card,n=e.onClose;return Object(u.jsx)("section",{className:"popup ".concat(t&&"popup_opened"),id:"fullSizeImage",children:Object(u.jsxs)("div",{className:"popup__image-container",children:[Object(u.jsxs)("figure",{className:"popup__image-group",children:[Object(u.jsx)("img",{className:"popup__image",src:null!=t?t.link:void 0,alt:null===t||void 0===t?void 0:t.name}),Object(u.jsx)("figcaption",{className:"popup__image-title",children:null===t||void 0===t?void 0:t.name})]}),Object(u.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",className:"popup__close-button",onClick:n})]})})}var g=n(7),C=n(8),k=new(function(){function e(t,n,a){Object(g.a)(this,e),this._token=t,this._url=n,this._cohortId=a}return Object(C.a)(e,[{key:"checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getCards",value:function(){return fetch("".concat(this._url).concat(this._cohortId,"/cards"),{headers:{authorization:this._token}}).then(this.checkResponse)}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._url).concat(this._cohortId,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}).then(this.checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url).concat(this._cohortId,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this.checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._url,"/").concat(this._cohortId,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this.checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url).concat(this._cohortId,"/users/me"),{headers:{authorization:this._token}}).then(this.checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url).concat(this._cohortId,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(this.checkResponse)}},{key:"updataAvatar",value:function(e){return fetch("".concat(this._url).concat(this._cohortId,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(this.checkResponse)}}]),e}())("233fa192-0365-43b1-9635-9ca57a07d48d","https://mesto.nomoreparties.co/v1/","cohort-20");var N=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),s=Object(r.a)(o,2),l=s[0],j=s[1],h=Object(a.useState)(!1),g=Object(r.a)(h,2),C=g[0],N=g[1],y=Object(a.useState)(null),S=Object(r.a)(y,2),L=S[0],D=S[1],T=Object(a.useState)(!1),I=Object(r.a)(T,2),P=I[0],E=I[1],A=Object(a.useState)(!1),R=Object(r.a)(A,2),U=R[0],z=R[1],q=Object(a.useState)({}),w=Object(r.a)(q,2),F=w[0],J=w[1];Object(a.useEffect)((function(){E(!0),Promise.all([k.getUserInfo(),k.getCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];J(n),Y(a)})).catch((function(e){return console.log(e)})).finally((function(){E(!1)}))}),[]);var M=function(){c(!1),j(!1),N(!1),D(null)},B=Object(a.useState)([]),H=Object(r.a)(B,2),V=H[0],Y=H[1];return Object(u.jsx)(d.Provider,{value:F,children:Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("div",{className:"page",children:Object(u.jsxs)("div",{className:"page__content",children:[Object(u.jsx)(p,{}),Object(u.jsx)(b,{onEditAvatar:function(){c(!0)},onEditProfile:function(){j(!0)},onAddPlace:function(){N(!0)},onCardClick:function(e){D(e)},cards:V,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===F._id}));k.changeLikeCardStatus(e._id,!t).then((function(t){Y((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){k.deleteCard(e._id).then((function(){Y((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){return console.log(e)}))},isCardsLoading:P}),Object(u.jsx)(_,{}),Object(u.jsx)(O,{isOpen:n,onClose:M,onUpdateAvatar:function(e){z(!0),k.updataAvatar({avatar:e}).then((function(e){J(e),console.log(F),M()})).catch((function(e){return console.log(e)})).finally((function(){z(!1)}))},isDataSending:U}),Object(u.jsx)(f,{isOpen:l,onClose:M,onUpdateUser:function(e){z(!0),k.setUserInfo(e).then((function(e){J(e),M()})).catch((function(e){return console.log(e)})).finally((function(){z(!1)}))},isDataSending:U}),Object(u.jsx)(x,{isOpen:C,onClose:M,onAddPlace:function(e){z(!0),k.addCard(e).then((function(e){Y([e].concat(Object(i.a)(V)))})).then((function(){M()})).catch((function(e){return console.log(e)})).finally((function(){z(!1)}))},isDataSending:U}),Object(u.jsx)(m,{name:"delete-confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",onClose:M}),Object(u.jsx)(v,{card:L,onClose:M})]})})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.703209f3.chunk.js.map