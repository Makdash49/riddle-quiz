goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__34743,p__34744){
var map__34745 = p__34743;
var map__34745__$1 = (((((!((map__34745 == null))))?(((((map__34745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34745):map__34745);
var svc = map__34745__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34745__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34745__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34745__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__34746 = p__34744;
var map__34746__$1 = (((((!((map__34746 == null))))?(((((map__34746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34746):map__34746);
var msg = map__34746__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34746__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34746__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34746__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34746__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__34755,p__34757){
var map__34759 = p__34755;
var map__34759__$1 = (((((!((map__34759 == null))))?(((((map__34759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34759):map__34759);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34759__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__34760 = p__34757;
var map__34760__$1 = (((((!((map__34760 == null))))?(((((map__34760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34760):map__34760);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34760__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__34768,p__34769){
var map__34772 = p__34768;
var map__34772__$1 = (((((!((map__34772 == null))))?(((((map__34772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34772):map__34772);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34772__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34772__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__34773 = p__34769;
var map__34773__$1 = (((((!((map__34773 == null))))?(((((map__34773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34773):map__34773);
var msg = map__34773__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34773__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__34780,tid){
var map__34781 = p__34780;
var map__34781__$1 = (((((!((map__34781 == null))))?(((((map__34781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34781):map__34781);
var svc = map__34781__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34781__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__34792 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__34793 = null;
var count__34794 = (0);
var i__34795 = (0);
while(true){
if((i__34795 < count__34794)){
var vec__34806 = chunk__34793.cljs$core$IIndexed$_nth$arity$2(null,i__34795);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34806,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34806,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__34819 = seq__34792;
var G__34820 = chunk__34793;
var G__34821 = count__34794;
var G__34822 = (i__34795 + (1));
seq__34792 = G__34819;
chunk__34793 = G__34820;
count__34794 = G__34821;
i__34795 = G__34822;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34792);
if(temp__5735__auto__){
var seq__34792__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34792__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34792__$1);
var G__34823 = cljs.core.chunk_rest(seq__34792__$1);
var G__34824 = c__4556__auto__;
var G__34825 = cljs.core.count(c__4556__auto__);
var G__34826 = (0);
seq__34792 = G__34823;
chunk__34793 = G__34824;
count__34794 = G__34825;
i__34795 = G__34826;
continue;
} else {
var vec__34810 = cljs.core.first(seq__34792__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34810,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34810,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__34827 = cljs.core.next(seq__34792__$1);
var G__34828 = null;
var G__34829 = (0);
var G__34830 = (0);
seq__34792 = G__34827;
chunk__34793 = G__34828;
count__34794 = G__34829;
i__34795 = G__34830;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__34783_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__34783_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__34784_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__34784_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__34785_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__34785_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__34786_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__34786_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__34815){
var map__34816 = p__34815;
var map__34816__$1 = (((((!((map__34816 == null))))?(((((map__34816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34816):map__34816);
var svc = map__34816__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34816__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34816__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
