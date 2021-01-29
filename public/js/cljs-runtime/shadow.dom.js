goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_32901 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_32901(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_32909 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_32909(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32220 = coll;
var G__32221 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32220,G__32221) : shadow.dom.lazy_native_coll_seq.call(null,G__32220,G__32221));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32226 = arguments.length;
switch (G__32226) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32231 = arguments.length;
switch (G__32231) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32233 = arguments.length;
switch (G__32233) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32235 = arguments.length;
switch (G__32235) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32238 = arguments.length;
switch (G__32238) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32241 = arguments.length;
switch (G__32241) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32245){if((e32245 instanceof Object)){
var e = e32245;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32245;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32247 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32248 = null;
var count__32249 = (0);
var i__32250 = (0);
while(true){
if((i__32250 < count__32249)){
var el = chunk__32248.cljs$core$IIndexed$_nth$arity$2(null,i__32250);
var handler_32933__$1 = ((function (seq__32247,chunk__32248,count__32249,i__32250,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32247,chunk__32248,count__32249,i__32250,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32933__$1);


var G__32934 = seq__32247;
var G__32935 = chunk__32248;
var G__32936 = count__32249;
var G__32937 = (i__32250 + (1));
seq__32247 = G__32934;
chunk__32248 = G__32935;
count__32249 = G__32936;
i__32250 = G__32937;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32247);
if(temp__5735__auto__){
var seq__32247__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32247__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32247__$1);
var G__32938 = cljs.core.chunk_rest(seq__32247__$1);
var G__32939 = c__4556__auto__;
var G__32940 = cljs.core.count(c__4556__auto__);
var G__32941 = (0);
seq__32247 = G__32938;
chunk__32248 = G__32939;
count__32249 = G__32940;
i__32250 = G__32941;
continue;
} else {
var el = cljs.core.first(seq__32247__$1);
var handler_32943__$1 = ((function (seq__32247,chunk__32248,count__32249,i__32250,el,seq__32247__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32247,chunk__32248,count__32249,i__32250,el,seq__32247__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32943__$1);


var G__32945 = cljs.core.next(seq__32247__$1);
var G__32946 = null;
var G__32947 = (0);
var G__32948 = (0);
seq__32247 = G__32945;
chunk__32248 = G__32946;
count__32249 = G__32947;
i__32250 = G__32948;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32262 = arguments.length;
switch (G__32262) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32263 = cljs.core.seq(events);
var chunk__32264 = null;
var count__32265 = (0);
var i__32266 = (0);
while(true){
if((i__32266 < count__32265)){
var vec__32276 = chunk__32264.cljs$core$IIndexed$_nth$arity$2(null,i__32266);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32276,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32276,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32955 = seq__32263;
var G__32956 = chunk__32264;
var G__32957 = count__32265;
var G__32958 = (i__32266 + (1));
seq__32263 = G__32955;
chunk__32264 = G__32956;
count__32265 = G__32957;
i__32266 = G__32958;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32263);
if(temp__5735__auto__){
var seq__32263__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32263__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32263__$1);
var G__32960 = cljs.core.chunk_rest(seq__32263__$1);
var G__32961 = c__4556__auto__;
var G__32962 = cljs.core.count(c__4556__auto__);
var G__32963 = (0);
seq__32263 = G__32960;
chunk__32264 = G__32961;
count__32265 = G__32962;
i__32266 = G__32963;
continue;
} else {
var vec__32282 = cljs.core.first(seq__32263__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32282,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32282,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32965 = cljs.core.next(seq__32263__$1);
var G__32966 = null;
var G__32967 = (0);
var G__32968 = (0);
seq__32263 = G__32965;
chunk__32264 = G__32966;
count__32265 = G__32967;
i__32266 = G__32968;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32287 = cljs.core.seq(styles);
var chunk__32288 = null;
var count__32289 = (0);
var i__32290 = (0);
while(true){
if((i__32290 < count__32289)){
var vec__32299 = chunk__32288.cljs$core$IIndexed$_nth$arity$2(null,i__32290);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32299,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32299,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32969 = seq__32287;
var G__32970 = chunk__32288;
var G__32971 = count__32289;
var G__32972 = (i__32290 + (1));
seq__32287 = G__32969;
chunk__32288 = G__32970;
count__32289 = G__32971;
i__32290 = G__32972;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32287);
if(temp__5735__auto__){
var seq__32287__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32287__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32287__$1);
var G__32973 = cljs.core.chunk_rest(seq__32287__$1);
var G__32974 = c__4556__auto__;
var G__32975 = cljs.core.count(c__4556__auto__);
var G__32976 = (0);
seq__32287 = G__32973;
chunk__32288 = G__32974;
count__32289 = G__32975;
i__32290 = G__32976;
continue;
} else {
var vec__32302 = cljs.core.first(seq__32287__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32302,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32302,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32977 = cljs.core.next(seq__32287__$1);
var G__32978 = null;
var G__32979 = (0);
var G__32980 = (0);
seq__32287 = G__32977;
chunk__32288 = G__32978;
count__32289 = G__32979;
i__32290 = G__32980;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32305_32981 = key;
var G__32305_32982__$1 = (((G__32305_32981 instanceof cljs.core.Keyword))?G__32305_32981.fqn:null);
switch (G__32305_32982__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_32984 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_32984,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_32984,"aria-");
}
})())){
el.setAttribute(ks_32984,value);
} else {
(el[ks_32984] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32309){
var map__32310 = p__32309;
var map__32310__$1 = (((((!((map__32310 == null))))?(((((map__32310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32310):map__32310);
var props = map__32310__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32310__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32312 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32312,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32312,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32312,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32315 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32315,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32315;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32323 = arguments.length;
switch (G__32323) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32330){
var vec__32331 = p__32330;
var seq__32332 = cljs.core.seq(vec__32331);
var first__32333 = cljs.core.first(seq__32332);
var seq__32332__$1 = cljs.core.next(seq__32332);
var nn = first__32333;
var first__32333__$1 = cljs.core.first(seq__32332__$1);
var seq__32332__$2 = cljs.core.next(seq__32332__$1);
var np = first__32333__$1;
var nc = seq__32332__$2;
var node = vec__32331;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32334 = nn;
var G__32335 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32334,G__32335) : create_fn.call(null,G__32334,G__32335));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32336 = nn;
var G__32337 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32336,G__32337) : create_fn.call(null,G__32336,G__32337));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32341 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32341,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32341,(1),null);
var seq__32344_33025 = cljs.core.seq(node_children);
var chunk__32345_33026 = null;
var count__32346_33027 = (0);
var i__32347_33028 = (0);
while(true){
if((i__32347_33028 < count__32346_33027)){
var child_struct_33029 = chunk__32345_33026.cljs$core$IIndexed$_nth$arity$2(null,i__32347_33028);
var children_33030 = shadow.dom.dom_node(child_struct_33029);
if(cljs.core.seq_QMARK_(children_33030)){
var seq__32378_33031 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33030));
var chunk__32380_33032 = null;
var count__32381_33033 = (0);
var i__32382_33034 = (0);
while(true){
if((i__32382_33034 < count__32381_33033)){
var child_33035 = chunk__32380_33032.cljs$core$IIndexed$_nth$arity$2(null,i__32382_33034);
if(cljs.core.truth_(child_33035)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33035);


var G__33036 = seq__32378_33031;
var G__33037 = chunk__32380_33032;
var G__33038 = count__32381_33033;
var G__33039 = (i__32382_33034 + (1));
seq__32378_33031 = G__33036;
chunk__32380_33032 = G__33037;
count__32381_33033 = G__33038;
i__32382_33034 = G__33039;
continue;
} else {
var G__33040 = seq__32378_33031;
var G__33041 = chunk__32380_33032;
var G__33042 = count__32381_33033;
var G__33043 = (i__32382_33034 + (1));
seq__32378_33031 = G__33040;
chunk__32380_33032 = G__33041;
count__32381_33033 = G__33042;
i__32382_33034 = G__33043;
continue;
}
} else {
var temp__5735__auto___33044 = cljs.core.seq(seq__32378_33031);
if(temp__5735__auto___33044){
var seq__32378_33045__$1 = temp__5735__auto___33044;
if(cljs.core.chunked_seq_QMARK_(seq__32378_33045__$1)){
var c__4556__auto___33046 = cljs.core.chunk_first(seq__32378_33045__$1);
var G__33047 = cljs.core.chunk_rest(seq__32378_33045__$1);
var G__33048 = c__4556__auto___33046;
var G__33049 = cljs.core.count(c__4556__auto___33046);
var G__33050 = (0);
seq__32378_33031 = G__33047;
chunk__32380_33032 = G__33048;
count__32381_33033 = G__33049;
i__32382_33034 = G__33050;
continue;
} else {
var child_33051 = cljs.core.first(seq__32378_33045__$1);
if(cljs.core.truth_(child_33051)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33051);


var G__33052 = cljs.core.next(seq__32378_33045__$1);
var G__33053 = null;
var G__33054 = (0);
var G__33055 = (0);
seq__32378_33031 = G__33052;
chunk__32380_33032 = G__33053;
count__32381_33033 = G__33054;
i__32382_33034 = G__33055;
continue;
} else {
var G__33056 = cljs.core.next(seq__32378_33045__$1);
var G__33057 = null;
var G__33058 = (0);
var G__33059 = (0);
seq__32378_33031 = G__33056;
chunk__32380_33032 = G__33057;
count__32381_33033 = G__33058;
i__32382_33034 = G__33059;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33030);
}


var G__33060 = seq__32344_33025;
var G__33061 = chunk__32345_33026;
var G__33062 = count__32346_33027;
var G__33063 = (i__32347_33028 + (1));
seq__32344_33025 = G__33060;
chunk__32345_33026 = G__33061;
count__32346_33027 = G__33062;
i__32347_33028 = G__33063;
continue;
} else {
var temp__5735__auto___33064 = cljs.core.seq(seq__32344_33025);
if(temp__5735__auto___33064){
var seq__32344_33065__$1 = temp__5735__auto___33064;
if(cljs.core.chunked_seq_QMARK_(seq__32344_33065__$1)){
var c__4556__auto___33066 = cljs.core.chunk_first(seq__32344_33065__$1);
var G__33067 = cljs.core.chunk_rest(seq__32344_33065__$1);
var G__33068 = c__4556__auto___33066;
var G__33069 = cljs.core.count(c__4556__auto___33066);
var G__33070 = (0);
seq__32344_33025 = G__33067;
chunk__32345_33026 = G__33068;
count__32346_33027 = G__33069;
i__32347_33028 = G__33070;
continue;
} else {
var child_struct_33071 = cljs.core.first(seq__32344_33065__$1);
var children_33072 = shadow.dom.dom_node(child_struct_33071);
if(cljs.core.seq_QMARK_(children_33072)){
var seq__32384_33073 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33072));
var chunk__32386_33074 = null;
var count__32387_33075 = (0);
var i__32388_33076 = (0);
while(true){
if((i__32388_33076 < count__32387_33075)){
var child_33077 = chunk__32386_33074.cljs$core$IIndexed$_nth$arity$2(null,i__32388_33076);
if(cljs.core.truth_(child_33077)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33077);


var G__33078 = seq__32384_33073;
var G__33079 = chunk__32386_33074;
var G__33080 = count__32387_33075;
var G__33081 = (i__32388_33076 + (1));
seq__32384_33073 = G__33078;
chunk__32386_33074 = G__33079;
count__32387_33075 = G__33080;
i__32388_33076 = G__33081;
continue;
} else {
var G__33082 = seq__32384_33073;
var G__33083 = chunk__32386_33074;
var G__33084 = count__32387_33075;
var G__33085 = (i__32388_33076 + (1));
seq__32384_33073 = G__33082;
chunk__32386_33074 = G__33083;
count__32387_33075 = G__33084;
i__32388_33076 = G__33085;
continue;
}
} else {
var temp__5735__auto___33086__$1 = cljs.core.seq(seq__32384_33073);
if(temp__5735__auto___33086__$1){
var seq__32384_33087__$1 = temp__5735__auto___33086__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32384_33087__$1)){
var c__4556__auto___33088 = cljs.core.chunk_first(seq__32384_33087__$1);
var G__33089 = cljs.core.chunk_rest(seq__32384_33087__$1);
var G__33090 = c__4556__auto___33088;
var G__33091 = cljs.core.count(c__4556__auto___33088);
var G__33092 = (0);
seq__32384_33073 = G__33089;
chunk__32386_33074 = G__33090;
count__32387_33075 = G__33091;
i__32388_33076 = G__33092;
continue;
} else {
var child_33093 = cljs.core.first(seq__32384_33087__$1);
if(cljs.core.truth_(child_33093)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33093);


var G__33094 = cljs.core.next(seq__32384_33087__$1);
var G__33095 = null;
var G__33096 = (0);
var G__33097 = (0);
seq__32384_33073 = G__33094;
chunk__32386_33074 = G__33095;
count__32387_33075 = G__33096;
i__32388_33076 = G__33097;
continue;
} else {
var G__33098 = cljs.core.next(seq__32384_33087__$1);
var G__33099 = null;
var G__33100 = (0);
var G__33101 = (0);
seq__32384_33073 = G__33098;
chunk__32386_33074 = G__33099;
count__32387_33075 = G__33100;
i__32388_33076 = G__33101;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33072);
}


var G__33102 = cljs.core.next(seq__32344_33065__$1);
var G__33103 = null;
var G__33104 = (0);
var G__33105 = (0);
seq__32344_33025 = G__33102;
chunk__32345_33026 = G__33103;
count__32346_33027 = G__33104;
i__32347_33028 = G__33105;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32403 = cljs.core.seq(node);
var chunk__32404 = null;
var count__32405 = (0);
var i__32406 = (0);
while(true){
if((i__32406 < count__32405)){
var n = chunk__32404.cljs$core$IIndexed$_nth$arity$2(null,i__32406);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33114 = seq__32403;
var G__33115 = chunk__32404;
var G__33116 = count__32405;
var G__33117 = (i__32406 + (1));
seq__32403 = G__33114;
chunk__32404 = G__33115;
count__32405 = G__33116;
i__32406 = G__33117;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32403);
if(temp__5735__auto__){
var seq__32403__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32403__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32403__$1);
var G__33118 = cljs.core.chunk_rest(seq__32403__$1);
var G__33119 = c__4556__auto__;
var G__33120 = cljs.core.count(c__4556__auto__);
var G__33121 = (0);
seq__32403 = G__33118;
chunk__32404 = G__33119;
count__32405 = G__33120;
i__32406 = G__33121;
continue;
} else {
var n = cljs.core.first(seq__32403__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33122 = cljs.core.next(seq__32403__$1);
var G__33123 = null;
var G__33124 = (0);
var G__33125 = (0);
seq__32403 = G__33122;
chunk__32404 = G__33123;
count__32405 = G__33124;
i__32406 = G__33125;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32408 = arguments.length;
switch (G__32408) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32412 = arguments.length;
switch (G__32412) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32426 = arguments.length;
switch (G__32426) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33159 = arguments.length;
var i__4737__auto___33160 = (0);
while(true){
if((i__4737__auto___33160 < len__4736__auto___33159)){
args__4742__auto__.push((arguments[i__4737__auto___33160]));

var G__33161 = (i__4737__auto___33160 + (1));
i__4737__auto___33160 = G__33161;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32454_33164 = cljs.core.seq(nodes);
var chunk__32455_33165 = null;
var count__32456_33166 = (0);
var i__32457_33167 = (0);
while(true){
if((i__32457_33167 < count__32456_33166)){
var node_33170 = chunk__32455_33165.cljs$core$IIndexed$_nth$arity$2(null,i__32457_33167);
fragment.appendChild(shadow.dom._to_dom(node_33170));


var G__33171 = seq__32454_33164;
var G__33172 = chunk__32455_33165;
var G__33173 = count__32456_33166;
var G__33174 = (i__32457_33167 + (1));
seq__32454_33164 = G__33171;
chunk__32455_33165 = G__33172;
count__32456_33166 = G__33173;
i__32457_33167 = G__33174;
continue;
} else {
var temp__5735__auto___33175 = cljs.core.seq(seq__32454_33164);
if(temp__5735__auto___33175){
var seq__32454_33176__$1 = temp__5735__auto___33175;
if(cljs.core.chunked_seq_QMARK_(seq__32454_33176__$1)){
var c__4556__auto___33177 = cljs.core.chunk_first(seq__32454_33176__$1);
var G__33178 = cljs.core.chunk_rest(seq__32454_33176__$1);
var G__33179 = c__4556__auto___33177;
var G__33180 = cljs.core.count(c__4556__auto___33177);
var G__33181 = (0);
seq__32454_33164 = G__33178;
chunk__32455_33165 = G__33179;
count__32456_33166 = G__33180;
i__32457_33167 = G__33181;
continue;
} else {
var node_33182 = cljs.core.first(seq__32454_33176__$1);
fragment.appendChild(shadow.dom._to_dom(node_33182));


var G__33183 = cljs.core.next(seq__32454_33176__$1);
var G__33184 = null;
var G__33185 = (0);
var G__33186 = (0);
seq__32454_33164 = G__33183;
chunk__32455_33165 = G__33184;
count__32456_33166 = G__33185;
i__32457_33167 = G__33186;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32446){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32446));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32467_33194 = cljs.core.seq(scripts);
var chunk__32468_33195 = null;
var count__32469_33196 = (0);
var i__32470_33197 = (0);
while(true){
if((i__32470_33197 < count__32469_33196)){
var vec__32482_33198 = chunk__32468_33195.cljs$core$IIndexed$_nth$arity$2(null,i__32470_33197);
var script_tag_33199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32482_33198,(0),null);
var script_body_33200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32482_33198,(1),null);
eval(script_body_33200);


var G__33202 = seq__32467_33194;
var G__33203 = chunk__32468_33195;
var G__33204 = count__32469_33196;
var G__33205 = (i__32470_33197 + (1));
seq__32467_33194 = G__33202;
chunk__32468_33195 = G__33203;
count__32469_33196 = G__33204;
i__32470_33197 = G__33205;
continue;
} else {
var temp__5735__auto___33207 = cljs.core.seq(seq__32467_33194);
if(temp__5735__auto___33207){
var seq__32467_33208__$1 = temp__5735__auto___33207;
if(cljs.core.chunked_seq_QMARK_(seq__32467_33208__$1)){
var c__4556__auto___33209 = cljs.core.chunk_first(seq__32467_33208__$1);
var G__33210 = cljs.core.chunk_rest(seq__32467_33208__$1);
var G__33211 = c__4556__auto___33209;
var G__33212 = cljs.core.count(c__4556__auto___33209);
var G__33213 = (0);
seq__32467_33194 = G__33210;
chunk__32468_33195 = G__33211;
count__32469_33196 = G__33212;
i__32470_33197 = G__33213;
continue;
} else {
var vec__32487_33215 = cljs.core.first(seq__32467_33208__$1);
var script_tag_33216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32487_33215,(0),null);
var script_body_33217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32487_33215,(1),null);
eval(script_body_33217);


var G__33218 = cljs.core.next(seq__32467_33208__$1);
var G__33219 = null;
var G__33220 = (0);
var G__33221 = (0);
seq__32467_33194 = G__33218;
chunk__32468_33195 = G__33219;
count__32469_33196 = G__33220;
i__32470_33197 = G__33221;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32491){
var vec__32492 = p__32491;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32492,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32492,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32500 = arguments.length;
switch (G__32500) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32519 = cljs.core.seq(style_keys);
var chunk__32520 = null;
var count__32521 = (0);
var i__32522 = (0);
while(true){
if((i__32522 < count__32521)){
var it = chunk__32520.cljs$core$IIndexed$_nth$arity$2(null,i__32522);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33233 = seq__32519;
var G__33234 = chunk__32520;
var G__33235 = count__32521;
var G__33236 = (i__32522 + (1));
seq__32519 = G__33233;
chunk__32520 = G__33234;
count__32521 = G__33235;
i__32522 = G__33236;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32519);
if(temp__5735__auto__){
var seq__32519__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32519__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32519__$1);
var G__33237 = cljs.core.chunk_rest(seq__32519__$1);
var G__33238 = c__4556__auto__;
var G__33239 = cljs.core.count(c__4556__auto__);
var G__33240 = (0);
seq__32519 = G__33237;
chunk__32520 = G__33238;
count__32521 = G__33239;
i__32522 = G__33240;
continue;
} else {
var it = cljs.core.first(seq__32519__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33242 = cljs.core.next(seq__32519__$1);
var G__33243 = null;
var G__33244 = (0);
var G__33245 = (0);
seq__32519 = G__33242;
chunk__32520 = G__33243;
count__32521 = G__33244;
i__32522 = G__33245;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32543,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32551 = k32543;
var G__32551__$1 = (((G__32551 instanceof cljs.core.Keyword))?G__32551.fqn:null);
switch (G__32551__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32543,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32553){
var vec__32554 = p__32553;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32554,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32554,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32542){
var self__ = this;
var G__32542__$1 = this;
return (new cljs.core.RecordIter((0),G__32542__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32544,other32545){
var self__ = this;
var this32544__$1 = this;
return (((!((other32545 == null)))) && ((this32544__$1.constructor === other32545.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32544__$1.x,other32545.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32544__$1.y,other32545.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32544__$1.__extmap,other32545.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32542){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32575 = cljs.core.keyword_identical_QMARK_;
var expr__32576 = k__4388__auto__;
if(cljs.core.truth_((pred__32575.cljs$core$IFn$_invoke$arity$2 ? pred__32575.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32576) : pred__32575.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32576)))){
return (new shadow.dom.Coordinate(G__32542,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32575.cljs$core$IFn$_invoke$arity$2 ? pred__32575.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32576) : pred__32575.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32576)))){
return (new shadow.dom.Coordinate(self__.x,G__32542,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32542),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32542){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32542,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32546){
var extmap__4419__auto__ = (function (){var G__32595 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32546,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32546)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32595);
} else {
return G__32595;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32546),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32546),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k32599,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__32608 = k32599;
var G__32608__$1 = (((G__32608 instanceof cljs.core.Keyword))?G__32608.fqn:null);
switch (G__32608__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32599,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__32610){
var vec__32616 = p__32610;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32616,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32616,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32598){
var self__ = this;
var G__32598__$1 = this;
return (new cljs.core.RecordIter((0),G__32598__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32600,other32601){
var self__ = this;
var this32600__$1 = this;
return (((!((other32601 == null)))) && ((this32600__$1.constructor === other32601.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32600__$1.w,other32601.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32600__$1.h,other32601.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32600__$1.__extmap,other32601.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__32598){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__32631 = cljs.core.keyword_identical_QMARK_;
var expr__32632 = k__4388__auto__;
if(cljs.core.truth_((pred__32631.cljs$core$IFn$_invoke$arity$2 ? pred__32631.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32632) : pred__32631.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32632)))){
return (new shadow.dom.Size(G__32598,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32631.cljs$core$IFn$_invoke$arity$2 ? pred__32631.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32632) : pred__32631.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32632)))){
return (new shadow.dom.Size(self__.w,G__32598,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__32598),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__32598){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32598,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32604){
var extmap__4419__auto__ = (function (){var G__32700 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32604,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32604)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32700);
} else {
return G__32700;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32604),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32604),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__33290 = (i + (1));
var G__33291 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33290;
ret = G__33291;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32716){
var vec__32717 = p__32716;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32717,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32717,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32721 = arguments.length;
switch (G__32721) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33297 = ps;
var G__33298 = (i + (1));
el__$1 = G__33297;
i = G__33298;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32733 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32733,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32733,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32733,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32736_33304 = cljs.core.seq(props);
var chunk__32737_33305 = null;
var count__32738_33306 = (0);
var i__32739_33307 = (0);
while(true){
if((i__32739_33307 < count__32738_33306)){
var vec__32755_33308 = chunk__32737_33305.cljs$core$IIndexed$_nth$arity$2(null,i__32739_33307);
var k_33309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32755_33308,(0),null);
var v_33310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32755_33308,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33309);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33309),v_33310);


var G__33311 = seq__32736_33304;
var G__33312 = chunk__32737_33305;
var G__33313 = count__32738_33306;
var G__33314 = (i__32739_33307 + (1));
seq__32736_33304 = G__33311;
chunk__32737_33305 = G__33312;
count__32738_33306 = G__33313;
i__32739_33307 = G__33314;
continue;
} else {
var temp__5735__auto___33315 = cljs.core.seq(seq__32736_33304);
if(temp__5735__auto___33315){
var seq__32736_33316__$1 = temp__5735__auto___33315;
if(cljs.core.chunked_seq_QMARK_(seq__32736_33316__$1)){
var c__4556__auto___33317 = cljs.core.chunk_first(seq__32736_33316__$1);
var G__33318 = cljs.core.chunk_rest(seq__32736_33316__$1);
var G__33319 = c__4556__auto___33317;
var G__33320 = cljs.core.count(c__4556__auto___33317);
var G__33321 = (0);
seq__32736_33304 = G__33318;
chunk__32737_33305 = G__33319;
count__32738_33306 = G__33320;
i__32739_33307 = G__33321;
continue;
} else {
var vec__32762_33322 = cljs.core.first(seq__32736_33316__$1);
var k_33323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32762_33322,(0),null);
var v_33324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32762_33322,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33323);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33323),v_33324);


var G__33325 = cljs.core.next(seq__32736_33316__$1);
var G__33326 = null;
var G__33327 = (0);
var G__33328 = (0);
seq__32736_33304 = G__33325;
chunk__32737_33305 = G__33326;
count__32738_33306 = G__33327;
i__32739_33307 = G__33328;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__32775 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32775,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32775,(1),null);
var seq__32779_33329 = cljs.core.seq(node_children);
var chunk__32781_33330 = null;
var count__32782_33331 = (0);
var i__32783_33332 = (0);
while(true){
if((i__32783_33332 < count__32782_33331)){
var child_struct_33333 = chunk__32781_33330.cljs$core$IIndexed$_nth$arity$2(null,i__32783_33332);
if((!((child_struct_33333 == null)))){
if(typeof child_struct_33333 === 'string'){
var text_33334 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33334),child_struct_33333].join(''));
} else {
var children_33335 = shadow.dom.svg_node(child_struct_33333);
if(cljs.core.seq_QMARK_(children_33335)){
var seq__32826_33336 = cljs.core.seq(children_33335);
var chunk__32828_33337 = null;
var count__32829_33338 = (0);
var i__32830_33339 = (0);
while(true){
if((i__32830_33339 < count__32829_33338)){
var child_33340 = chunk__32828_33337.cljs$core$IIndexed$_nth$arity$2(null,i__32830_33339);
if(cljs.core.truth_(child_33340)){
node.appendChild(child_33340);


var G__33341 = seq__32826_33336;
var G__33342 = chunk__32828_33337;
var G__33343 = count__32829_33338;
var G__33344 = (i__32830_33339 + (1));
seq__32826_33336 = G__33341;
chunk__32828_33337 = G__33342;
count__32829_33338 = G__33343;
i__32830_33339 = G__33344;
continue;
} else {
var G__33345 = seq__32826_33336;
var G__33346 = chunk__32828_33337;
var G__33347 = count__32829_33338;
var G__33348 = (i__32830_33339 + (1));
seq__32826_33336 = G__33345;
chunk__32828_33337 = G__33346;
count__32829_33338 = G__33347;
i__32830_33339 = G__33348;
continue;
}
} else {
var temp__5735__auto___33349 = cljs.core.seq(seq__32826_33336);
if(temp__5735__auto___33349){
var seq__32826_33350__$1 = temp__5735__auto___33349;
if(cljs.core.chunked_seq_QMARK_(seq__32826_33350__$1)){
var c__4556__auto___33351 = cljs.core.chunk_first(seq__32826_33350__$1);
var G__33352 = cljs.core.chunk_rest(seq__32826_33350__$1);
var G__33353 = c__4556__auto___33351;
var G__33354 = cljs.core.count(c__4556__auto___33351);
var G__33355 = (0);
seq__32826_33336 = G__33352;
chunk__32828_33337 = G__33353;
count__32829_33338 = G__33354;
i__32830_33339 = G__33355;
continue;
} else {
var child_33356 = cljs.core.first(seq__32826_33350__$1);
if(cljs.core.truth_(child_33356)){
node.appendChild(child_33356);


var G__33359 = cljs.core.next(seq__32826_33350__$1);
var G__33360 = null;
var G__33361 = (0);
var G__33362 = (0);
seq__32826_33336 = G__33359;
chunk__32828_33337 = G__33360;
count__32829_33338 = G__33361;
i__32830_33339 = G__33362;
continue;
} else {
var G__33364 = cljs.core.next(seq__32826_33350__$1);
var G__33365 = null;
var G__33366 = (0);
var G__33367 = (0);
seq__32826_33336 = G__33364;
chunk__32828_33337 = G__33365;
count__32829_33338 = G__33366;
i__32830_33339 = G__33367;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33335);
}
}


var G__33368 = seq__32779_33329;
var G__33369 = chunk__32781_33330;
var G__33370 = count__32782_33331;
var G__33371 = (i__32783_33332 + (1));
seq__32779_33329 = G__33368;
chunk__32781_33330 = G__33369;
count__32782_33331 = G__33370;
i__32783_33332 = G__33371;
continue;
} else {
var G__33372 = seq__32779_33329;
var G__33373 = chunk__32781_33330;
var G__33374 = count__32782_33331;
var G__33375 = (i__32783_33332 + (1));
seq__32779_33329 = G__33372;
chunk__32781_33330 = G__33373;
count__32782_33331 = G__33374;
i__32783_33332 = G__33375;
continue;
}
} else {
var temp__5735__auto___33376 = cljs.core.seq(seq__32779_33329);
if(temp__5735__auto___33376){
var seq__32779_33378__$1 = temp__5735__auto___33376;
if(cljs.core.chunked_seq_QMARK_(seq__32779_33378__$1)){
var c__4556__auto___33379 = cljs.core.chunk_first(seq__32779_33378__$1);
var G__33380 = cljs.core.chunk_rest(seq__32779_33378__$1);
var G__33381 = c__4556__auto___33379;
var G__33382 = cljs.core.count(c__4556__auto___33379);
var G__33383 = (0);
seq__32779_33329 = G__33380;
chunk__32781_33330 = G__33381;
count__32782_33331 = G__33382;
i__32783_33332 = G__33383;
continue;
} else {
var child_struct_33384 = cljs.core.first(seq__32779_33378__$1);
if((!((child_struct_33384 == null)))){
if(typeof child_struct_33384 === 'string'){
var text_33385 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33385),child_struct_33384].join(''));
} else {
var children_33387 = shadow.dom.svg_node(child_struct_33384);
if(cljs.core.seq_QMARK_(children_33387)){
var seq__32840_33388 = cljs.core.seq(children_33387);
var chunk__32842_33389 = null;
var count__32843_33390 = (0);
var i__32844_33391 = (0);
while(true){
if((i__32844_33391 < count__32843_33390)){
var child_33392 = chunk__32842_33389.cljs$core$IIndexed$_nth$arity$2(null,i__32844_33391);
if(cljs.core.truth_(child_33392)){
node.appendChild(child_33392);


var G__33394 = seq__32840_33388;
var G__33395 = chunk__32842_33389;
var G__33396 = count__32843_33390;
var G__33397 = (i__32844_33391 + (1));
seq__32840_33388 = G__33394;
chunk__32842_33389 = G__33395;
count__32843_33390 = G__33396;
i__32844_33391 = G__33397;
continue;
} else {
var G__33398 = seq__32840_33388;
var G__33399 = chunk__32842_33389;
var G__33400 = count__32843_33390;
var G__33401 = (i__32844_33391 + (1));
seq__32840_33388 = G__33398;
chunk__32842_33389 = G__33399;
count__32843_33390 = G__33400;
i__32844_33391 = G__33401;
continue;
}
} else {
var temp__5735__auto___33402__$1 = cljs.core.seq(seq__32840_33388);
if(temp__5735__auto___33402__$1){
var seq__32840_33403__$1 = temp__5735__auto___33402__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32840_33403__$1)){
var c__4556__auto___33405 = cljs.core.chunk_first(seq__32840_33403__$1);
var G__33406 = cljs.core.chunk_rest(seq__32840_33403__$1);
var G__33407 = c__4556__auto___33405;
var G__33408 = cljs.core.count(c__4556__auto___33405);
var G__33409 = (0);
seq__32840_33388 = G__33406;
chunk__32842_33389 = G__33407;
count__32843_33390 = G__33408;
i__32844_33391 = G__33409;
continue;
} else {
var child_33410 = cljs.core.first(seq__32840_33403__$1);
if(cljs.core.truth_(child_33410)){
node.appendChild(child_33410);


var G__33411 = cljs.core.next(seq__32840_33403__$1);
var G__33412 = null;
var G__33413 = (0);
var G__33414 = (0);
seq__32840_33388 = G__33411;
chunk__32842_33389 = G__33412;
count__32843_33390 = G__33413;
i__32844_33391 = G__33414;
continue;
} else {
var G__33416 = cljs.core.next(seq__32840_33403__$1);
var G__33417 = null;
var G__33418 = (0);
var G__33419 = (0);
seq__32840_33388 = G__33416;
chunk__32842_33389 = G__33417;
count__32843_33390 = G__33418;
i__32844_33391 = G__33419;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33387);
}
}


var G__33421 = cljs.core.next(seq__32779_33378__$1);
var G__33422 = null;
var G__33423 = (0);
var G__33424 = (0);
seq__32779_33329 = G__33421;
chunk__32781_33330 = G__33422;
count__32782_33331 = G__33423;
i__32783_33332 = G__33424;
continue;
} else {
var G__33425 = cljs.core.next(seq__32779_33378__$1);
var G__33426 = null;
var G__33427 = (0);
var G__33428 = (0);
seq__32779_33329 = G__33425;
chunk__32781_33330 = G__33426;
count__32782_33331 = G__33427;
i__32783_33332 = G__33428;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33433 = arguments.length;
var i__4737__auto___33434 = (0);
while(true){
if((i__4737__auto___33434 < len__4736__auto___33433)){
args__4742__auto__.push((arguments[i__4737__auto___33434]));

var G__33435 = (i__4737__auto___33434 + (1));
i__4737__auto___33434 = G__33435;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq32851){
var G__32852 = cljs.core.first(seq32851);
var seq32851__$1 = cljs.core.next(seq32851);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32852,seq32851__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__32860 = arguments.length;
switch (G__32860) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__29877__auto___33455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_32883){
var state_val_32884 = (state_32883[(1)]);
if((state_val_32884 === (1))){
var state_32883__$1 = state_32883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32883__$1,(2),once_or_cleanup);
} else {
if((state_val_32884 === (2))){
var inst_32880 = (state_32883[(2)]);
var inst_32881 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_32883__$1 = (function (){var statearr_32885 = state_32883;
(statearr_32885[(7)] = inst_32880);

return statearr_32885;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32883__$1,inst_32881);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29715__auto__ = null;
var shadow$dom$state_machine__29715__auto____0 = (function (){
var statearr_32886 = [null,null,null,null,null,null,null,null];
(statearr_32886[(0)] = shadow$dom$state_machine__29715__auto__);

(statearr_32886[(1)] = (1));

return statearr_32886;
});
var shadow$dom$state_machine__29715__auto____1 = (function (state_32883){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_32883);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e32887){var ex__29718__auto__ = e32887;
var statearr_32888_33458 = state_32883;
(statearr_32888_33458[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_32883[(4)]))){
var statearr_32891_33459 = state_32883;
(statearr_32891_33459[(1)] = cljs.core.first((state_32883[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33460 = state_32883;
state_32883 = G__33460;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
shadow$dom$state_machine__29715__auto__ = function(state_32883){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29715__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29715__auto____1.call(this,state_32883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29715__auto____0;
shadow$dom$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29715__auto____1;
return shadow$dom$state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_32893 = f__29878__auto__();
(statearr_32893[(6)] = c__29877__auto___33455);

return statearr_32893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
