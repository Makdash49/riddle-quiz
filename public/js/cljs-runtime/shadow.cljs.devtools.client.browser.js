goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35237 = arguments.length;
var i__4737__auto___35238 = (0);
while(true){
if((i__4737__auto___35238 < len__4736__auto___35237)){
args__4742__auto__.push((arguments[i__4737__auto___35238]));

var G__35239 = (i__4737__auto___35238 + (1));
i__4737__auto___35238 = G__35239;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34958){
var G__34959 = cljs.core.first(seq34958);
var seq34958__$1 = cljs.core.next(seq34958);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34959,seq34958__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__34960 = cljs.core.seq(sources);
var chunk__34961 = null;
var count__34962 = (0);
var i__34963 = (0);
while(true){
if((i__34963 < count__34962)){
var map__34979 = chunk__34961.cljs$core$IIndexed$_nth$arity$2(null,i__34963);
var map__34979__$1 = (((((!((map__34979 == null))))?(((((map__34979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34979):map__34979);
var src = map__34979__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34979__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34979__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34979__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34979__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e34981){var e_35240 = e34981;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35240);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35240.message)].join('')));
}

var G__35241 = seq__34960;
var G__35242 = chunk__34961;
var G__35243 = count__34962;
var G__35244 = (i__34963 + (1));
seq__34960 = G__35241;
chunk__34961 = G__35242;
count__34962 = G__35243;
i__34963 = G__35244;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34960);
if(temp__5735__auto__){
var seq__34960__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34960__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34960__$1);
var G__35245 = cljs.core.chunk_rest(seq__34960__$1);
var G__35246 = c__4556__auto__;
var G__35247 = cljs.core.count(c__4556__auto__);
var G__35248 = (0);
seq__34960 = G__35245;
chunk__34961 = G__35246;
count__34962 = G__35247;
i__34963 = G__35248;
continue;
} else {
var map__34982 = cljs.core.first(seq__34960__$1);
var map__34982__$1 = (((((!((map__34982 == null))))?(((((map__34982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34982):map__34982);
var src = map__34982__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34982__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34982__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34982__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34982__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e34984){var e_35249 = e34984;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35249);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35249.message)].join('')));
}

var G__35250 = cljs.core.next(seq__34960__$1);
var G__35251 = null;
var G__35252 = (0);
var G__35253 = (0);
seq__34960 = G__35250;
chunk__34961 = G__35251;
count__34962 = G__35252;
i__34963 = G__35253;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35002 = cljs.core.seq(js_requires);
var chunk__35003 = null;
var count__35004 = (0);
var i__35005 = (0);
while(true){
if((i__35005 < count__35004)){
var js_ns = chunk__35003.cljs$core$IIndexed$_nth$arity$2(null,i__35005);
var require_str_35254 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35254);


var G__35255 = seq__35002;
var G__35256 = chunk__35003;
var G__35257 = count__35004;
var G__35258 = (i__35005 + (1));
seq__35002 = G__35255;
chunk__35003 = G__35256;
count__35004 = G__35257;
i__35005 = G__35258;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35002);
if(temp__5735__auto__){
var seq__35002__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35002__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35002__$1);
var G__35259 = cljs.core.chunk_rest(seq__35002__$1);
var G__35260 = c__4556__auto__;
var G__35261 = cljs.core.count(c__4556__auto__);
var G__35262 = (0);
seq__35002 = G__35259;
chunk__35003 = G__35260;
count__35004 = G__35261;
i__35005 = G__35262;
continue;
} else {
var js_ns = cljs.core.first(seq__35002__$1);
var require_str_35263 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35263);


var G__35264 = cljs.core.next(seq__35002__$1);
var G__35265 = null;
var G__35266 = (0);
var G__35267 = (0);
seq__35002 = G__35264;
chunk__35003 = G__35265;
count__35004 = G__35266;
i__35005 = G__35267;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35021){
var map__35023 = p__35021;
var map__35023__$1 = (((((!((map__35023 == null))))?(((((map__35023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35023):map__35023);
var msg = map__35023__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35023__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35023__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35029(s__35030){
return (new cljs.core.LazySeq(null,(function (){
var s__35030__$1 = s__35030;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35030__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35039 = cljs.core.first(xs__6292__auto__);
var map__35039__$1 = (((((!((map__35039 == null))))?(((((map__35039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35039):map__35039);
var src = map__35039__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35039__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35039__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__35030__$1,map__35039,map__35039__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35023,map__35023__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35029_$_iter__35031(s__35032){
return (new cljs.core.LazySeq(null,((function (s__35030__$1,map__35039,map__35039__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35023,map__35023__$1,msg,info,reload_info){
return (function (){
var s__35032__$1 = s__35032;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35032__$1);
if(temp__5735__auto____$1){
var s__35032__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35032__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35032__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35034 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35033 = (0);
while(true){
if((i__35033 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__35033);
cljs.core.chunk_append(b__35034,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35268 = (i__35033 + (1));
i__35033 = G__35268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35034),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35029_$_iter__35031(cljs.core.chunk_rest(s__35032__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35034),null);
}
} else {
var warning = cljs.core.first(s__35032__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35029_$_iter__35031(cljs.core.rest(s__35032__$2)));
}
} else {
return null;
}
break;
}
});})(s__35030__$1,map__35039,map__35039__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35023,map__35023__$1,msg,info,reload_info))
,null,null));
});})(s__35030__$1,map__35039,map__35039__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35023,map__35023__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35029(cljs.core.rest(s__35030__$1)));
} else {
var G__35269 = cljs.core.rest(s__35030__$1);
s__35030__$1 = G__35269;
continue;
}
} else {
var G__35270 = cljs.core.rest(s__35030__$1);
s__35030__$1 = G__35270;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__35051_35271 = cljs.core.seq(warnings);
var chunk__35052_35272 = null;
var count__35053_35273 = (0);
var i__35054_35274 = (0);
while(true){
if((i__35054_35274 < count__35053_35273)){
var map__35064_35275 = chunk__35052_35272.cljs$core$IIndexed$_nth$arity$2(null,i__35054_35274);
var map__35064_35276__$1 = (((((!((map__35064_35275 == null))))?(((((map__35064_35275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35064_35275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35064_35275):map__35064_35275);
var w_35277 = map__35064_35276__$1;
var msg_35278__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35064_35276__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35064_35276__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35064_35276__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35064_35276__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35281)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35279),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35280),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35278__$1)].join(''));


var G__35282 = seq__35051_35271;
var G__35283 = chunk__35052_35272;
var G__35284 = count__35053_35273;
var G__35285 = (i__35054_35274 + (1));
seq__35051_35271 = G__35282;
chunk__35052_35272 = G__35283;
count__35053_35273 = G__35284;
i__35054_35274 = G__35285;
continue;
} else {
var temp__5735__auto___35286 = cljs.core.seq(seq__35051_35271);
if(temp__5735__auto___35286){
var seq__35051_35287__$1 = temp__5735__auto___35286;
if(cljs.core.chunked_seq_QMARK_(seq__35051_35287__$1)){
var c__4556__auto___35288 = cljs.core.chunk_first(seq__35051_35287__$1);
var G__35289 = cljs.core.chunk_rest(seq__35051_35287__$1);
var G__35290 = c__4556__auto___35288;
var G__35291 = cljs.core.count(c__4556__auto___35288);
var G__35292 = (0);
seq__35051_35271 = G__35289;
chunk__35052_35272 = G__35290;
count__35053_35273 = G__35291;
i__35054_35274 = G__35292;
continue;
} else {
var map__35074_35293 = cljs.core.first(seq__35051_35287__$1);
var map__35074_35294__$1 = (((((!((map__35074_35293 == null))))?(((((map__35074_35293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35074_35293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35074_35293):map__35074_35293);
var w_35295 = map__35074_35294__$1;
var msg_35296__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35074_35294__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35074_35294__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35074_35294__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35074_35294__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35299)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35297),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35298),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35296__$1)].join(''));


var G__35300 = cljs.core.next(seq__35051_35287__$1);
var G__35301 = null;
var G__35302 = (0);
var G__35303 = (0);
seq__35051_35271 = G__35300;
chunk__35052_35272 = G__35301;
count__35053_35273 = G__35302;
i__35054_35274 = G__35303;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35020_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35020_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35091){
var map__35092 = p__35091;
var map__35092__$1 = (((((!((map__35092 == null))))?(((((map__35092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35092):map__35092);
var msg = map__35092__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35092__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35097 = cljs.core.seq(updates);
var chunk__35099 = null;
var count__35100 = (0);
var i__35101 = (0);
while(true){
if((i__35101 < count__35100)){
var path = chunk__35099.cljs$core$IIndexed$_nth$arity$2(null,i__35101);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35148_35304 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35151_35305 = null;
var count__35152_35306 = (0);
var i__35153_35307 = (0);
while(true){
if((i__35153_35307 < count__35152_35306)){
var node_35308 = chunk__35151_35305.cljs$core$IIndexed$_nth$arity$2(null,i__35153_35307);
var path_match_35309 = shadow.cljs.devtools.client.browser.match_paths(node_35308.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35309)){
var new_link_35310 = (function (){var G__35158 = node_35308.cloneNode(true);
G__35158.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35309),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35158;
})();
(new_link_35310.onload = ((function (seq__35148_35304,chunk__35151_35305,count__35152_35306,i__35153_35307,seq__35097,chunk__35099,count__35100,i__35101,new_link_35310,path_match_35309,node_35308,path,map__35092,map__35092__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_35308);
});})(seq__35148_35304,chunk__35151_35305,count__35152_35306,i__35153_35307,seq__35097,chunk__35099,count__35100,i__35101,new_link_35310,path_match_35309,node_35308,path,map__35092,map__35092__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35309], 0));

goog.dom.insertSiblingAfter(new_link_35310,node_35308);


var G__35311 = seq__35148_35304;
var G__35312 = chunk__35151_35305;
var G__35313 = count__35152_35306;
var G__35314 = (i__35153_35307 + (1));
seq__35148_35304 = G__35311;
chunk__35151_35305 = G__35312;
count__35152_35306 = G__35313;
i__35153_35307 = G__35314;
continue;
} else {
var G__35315 = seq__35148_35304;
var G__35316 = chunk__35151_35305;
var G__35317 = count__35152_35306;
var G__35318 = (i__35153_35307 + (1));
seq__35148_35304 = G__35315;
chunk__35151_35305 = G__35316;
count__35152_35306 = G__35317;
i__35153_35307 = G__35318;
continue;
}
} else {
var temp__5735__auto___35319 = cljs.core.seq(seq__35148_35304);
if(temp__5735__auto___35319){
var seq__35148_35320__$1 = temp__5735__auto___35319;
if(cljs.core.chunked_seq_QMARK_(seq__35148_35320__$1)){
var c__4556__auto___35321 = cljs.core.chunk_first(seq__35148_35320__$1);
var G__35322 = cljs.core.chunk_rest(seq__35148_35320__$1);
var G__35323 = c__4556__auto___35321;
var G__35324 = cljs.core.count(c__4556__auto___35321);
var G__35325 = (0);
seq__35148_35304 = G__35322;
chunk__35151_35305 = G__35323;
count__35152_35306 = G__35324;
i__35153_35307 = G__35325;
continue;
} else {
var node_35326 = cljs.core.first(seq__35148_35320__$1);
var path_match_35327 = shadow.cljs.devtools.client.browser.match_paths(node_35326.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35327)){
var new_link_35328 = (function (){var G__35161 = node_35326.cloneNode(true);
G__35161.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35327),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35161;
})();
(new_link_35328.onload = ((function (seq__35148_35304,chunk__35151_35305,count__35152_35306,i__35153_35307,seq__35097,chunk__35099,count__35100,i__35101,new_link_35328,path_match_35327,node_35326,seq__35148_35320__$1,temp__5735__auto___35319,path,map__35092,map__35092__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_35326);
});})(seq__35148_35304,chunk__35151_35305,count__35152_35306,i__35153_35307,seq__35097,chunk__35099,count__35100,i__35101,new_link_35328,path_match_35327,node_35326,seq__35148_35320__$1,temp__5735__auto___35319,path,map__35092,map__35092__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35327], 0));

goog.dom.insertSiblingAfter(new_link_35328,node_35326);


var G__35329 = cljs.core.next(seq__35148_35320__$1);
var G__35330 = null;
var G__35331 = (0);
var G__35332 = (0);
seq__35148_35304 = G__35329;
chunk__35151_35305 = G__35330;
count__35152_35306 = G__35331;
i__35153_35307 = G__35332;
continue;
} else {
var G__35333 = cljs.core.next(seq__35148_35320__$1);
var G__35334 = null;
var G__35335 = (0);
var G__35336 = (0);
seq__35148_35304 = G__35333;
chunk__35151_35305 = G__35334;
count__35152_35306 = G__35335;
i__35153_35307 = G__35336;
continue;
}
}
} else {
}
}
break;
}


var G__35337 = seq__35097;
var G__35338 = chunk__35099;
var G__35339 = count__35100;
var G__35340 = (i__35101 + (1));
seq__35097 = G__35337;
chunk__35099 = G__35338;
count__35100 = G__35339;
i__35101 = G__35340;
continue;
} else {
var G__35343 = seq__35097;
var G__35344 = chunk__35099;
var G__35345 = count__35100;
var G__35346 = (i__35101 + (1));
seq__35097 = G__35343;
chunk__35099 = G__35344;
count__35100 = G__35345;
i__35101 = G__35346;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35097);
if(temp__5735__auto__){
var seq__35097__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35097__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35097__$1);
var G__35348 = cljs.core.chunk_rest(seq__35097__$1);
var G__35349 = c__4556__auto__;
var G__35350 = cljs.core.count(c__4556__auto__);
var G__35351 = (0);
seq__35097 = G__35348;
chunk__35099 = G__35349;
count__35100 = G__35350;
i__35101 = G__35351;
continue;
} else {
var path = cljs.core.first(seq__35097__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35162_35352 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35165_35353 = null;
var count__35166_35354 = (0);
var i__35167_35355 = (0);
while(true){
if((i__35167_35355 < count__35166_35354)){
var node_35356 = chunk__35165_35353.cljs$core$IIndexed$_nth$arity$2(null,i__35167_35355);
var path_match_35357 = shadow.cljs.devtools.client.browser.match_paths(node_35356.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35357)){
var new_link_35358 = (function (){var G__35176 = node_35356.cloneNode(true);
G__35176.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35357),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35176;
})();
(new_link_35358.onload = ((function (seq__35162_35352,chunk__35165_35353,count__35166_35354,i__35167_35355,seq__35097,chunk__35099,count__35100,i__35101,new_link_35358,path_match_35357,node_35356,path,seq__35097__$1,temp__5735__auto__,map__35092,map__35092__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_35356);
});})(seq__35162_35352,chunk__35165_35353,count__35166_35354,i__35167_35355,seq__35097,chunk__35099,count__35100,i__35101,new_link_35358,path_match_35357,node_35356,path,seq__35097__$1,temp__5735__auto__,map__35092,map__35092__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35357], 0));

goog.dom.insertSiblingAfter(new_link_35358,node_35356);


var G__35359 = seq__35162_35352;
var G__35360 = chunk__35165_35353;
var G__35361 = count__35166_35354;
var G__35362 = (i__35167_35355 + (1));
seq__35162_35352 = G__35359;
chunk__35165_35353 = G__35360;
count__35166_35354 = G__35361;
i__35167_35355 = G__35362;
continue;
} else {
var G__35363 = seq__35162_35352;
var G__35364 = chunk__35165_35353;
var G__35365 = count__35166_35354;
var G__35366 = (i__35167_35355 + (1));
seq__35162_35352 = G__35363;
chunk__35165_35353 = G__35364;
count__35166_35354 = G__35365;
i__35167_35355 = G__35366;
continue;
}
} else {
var temp__5735__auto___35367__$1 = cljs.core.seq(seq__35162_35352);
if(temp__5735__auto___35367__$1){
var seq__35162_35368__$1 = temp__5735__auto___35367__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35162_35368__$1)){
var c__4556__auto___35369 = cljs.core.chunk_first(seq__35162_35368__$1);
var G__35370 = cljs.core.chunk_rest(seq__35162_35368__$1);
var G__35371 = c__4556__auto___35369;
var G__35372 = cljs.core.count(c__4556__auto___35369);
var G__35373 = (0);
seq__35162_35352 = G__35370;
chunk__35165_35353 = G__35371;
count__35166_35354 = G__35372;
i__35167_35355 = G__35373;
continue;
} else {
var node_35374 = cljs.core.first(seq__35162_35368__$1);
var path_match_35375 = shadow.cljs.devtools.client.browser.match_paths(node_35374.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35375)){
var new_link_35376 = (function (){var G__35181 = node_35374.cloneNode(true);
G__35181.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35375),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35181;
})();
(new_link_35376.onload = ((function (seq__35162_35352,chunk__35165_35353,count__35166_35354,i__35167_35355,seq__35097,chunk__35099,count__35100,i__35101,new_link_35376,path_match_35375,node_35374,seq__35162_35368__$1,temp__5735__auto___35367__$1,path,seq__35097__$1,temp__5735__auto__,map__35092,map__35092__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_35374);
});})(seq__35162_35352,chunk__35165_35353,count__35166_35354,i__35167_35355,seq__35097,chunk__35099,count__35100,i__35101,new_link_35376,path_match_35375,node_35374,seq__35162_35368__$1,temp__5735__auto___35367__$1,path,seq__35097__$1,temp__5735__auto__,map__35092,map__35092__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35375], 0));

goog.dom.insertSiblingAfter(new_link_35376,node_35374);


var G__35377 = cljs.core.next(seq__35162_35368__$1);
var G__35378 = null;
var G__35379 = (0);
var G__35380 = (0);
seq__35162_35352 = G__35377;
chunk__35165_35353 = G__35378;
count__35166_35354 = G__35379;
i__35167_35355 = G__35380;
continue;
} else {
var G__35381 = cljs.core.next(seq__35162_35368__$1);
var G__35382 = null;
var G__35383 = (0);
var G__35384 = (0);
seq__35162_35352 = G__35381;
chunk__35165_35353 = G__35382;
count__35166_35354 = G__35383;
i__35167_35355 = G__35384;
continue;
}
}
} else {
}
}
break;
}


var G__35385 = cljs.core.next(seq__35097__$1);
var G__35386 = null;
var G__35387 = (0);
var G__35388 = (0);
seq__35097 = G__35385;
chunk__35099 = G__35386;
count__35100 = G__35387;
i__35101 = G__35388;
continue;
} else {
var G__35389 = cljs.core.next(seq__35097__$1);
var G__35390 = null;
var G__35391 = (0);
var G__35392 = (0);
seq__35097 = G__35389;
chunk__35099 = G__35390;
count__35100 = G__35391;
i__35101 = G__35392;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35184){
var map__35185 = p__35184;
var map__35185__$1 = (((((!((map__35185 == null))))?(((((map__35185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35185):map__35185);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35185__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35197){
var map__35198 = p__35197;
var map__35198__$1 = (((((!((map__35198 == null))))?(((((map__35198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35198):map__35198);
var _ = map__35198__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35198__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35200,done,error){
var map__35201 = p__35200;
var map__35201__$1 = (((((!((map__35201 == null))))?(((((map__35201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35201):map__35201);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35201__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35203,done,error){
var map__35204 = p__35203;
var map__35204__$1 = (((((!((map__35204 == null))))?(((((map__35204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35204):map__35204);
var msg = map__35204__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35204__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35204__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35204__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35209){
var map__35210 = p__35209;
var map__35210__$1 = (((((!((map__35210 == null))))?(((((map__35210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35210):map__35210);
var src = map__35210__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35210__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35212 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35212) : done.call(null,G__35212));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35213){
var map__35214 = p__35213;
var map__35214__$1 = (((((!((map__35214 == null))))?(((((map__35214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35214):map__35214);
var msg__$1 = map__35214__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35214__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35222){var ex = e35222;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35223){
var map__35224 = p__35223;
var map__35224__$1 = (((((!((map__35224 == null))))?(((((map__35224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35224):map__35224);
var env = map__35224__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35224__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35228){
var map__35229 = p__35228;
var map__35229__$1 = (((((!((map__35229 == null))))?(((((map__35229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35229):map__35229);
var msg = map__35229__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35229__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35231){
var map__35232 = p__35231;
var map__35232__$1 = (((((!((map__35232 == null))))?(((((map__35232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35232):map__35232);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35232__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35232__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35234){
var map__35235 = p__35234;
var map__35235__$1 = (((((!((map__35235 == null))))?(((((map__35235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35235):map__35235);
var svc = map__35235__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35235__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
