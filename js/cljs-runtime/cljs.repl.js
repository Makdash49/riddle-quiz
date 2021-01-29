goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37031){
var map__37032 = p__37031;
var map__37032__$1 = (((((!((map__37032 == null))))?(((((map__37032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37032):map__37032);
var m = map__37032__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37032__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37032__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37034_37243 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37035_37244 = null;
var count__37036_37245 = (0);
var i__37037_37246 = (0);
while(true){
if((i__37037_37246 < count__37036_37245)){
var f_37247 = chunk__37035_37244.cljs$core$IIndexed$_nth$arity$2(null,i__37037_37246);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37247], 0));


var G__37248 = seq__37034_37243;
var G__37249 = chunk__37035_37244;
var G__37250 = count__37036_37245;
var G__37251 = (i__37037_37246 + (1));
seq__37034_37243 = G__37248;
chunk__37035_37244 = G__37249;
count__37036_37245 = G__37250;
i__37037_37246 = G__37251;
continue;
} else {
var temp__5735__auto___37252 = cljs.core.seq(seq__37034_37243);
if(temp__5735__auto___37252){
var seq__37034_37253__$1 = temp__5735__auto___37252;
if(cljs.core.chunked_seq_QMARK_(seq__37034_37253__$1)){
var c__4556__auto___37255 = cljs.core.chunk_first(seq__37034_37253__$1);
var G__37256 = cljs.core.chunk_rest(seq__37034_37253__$1);
var G__37257 = c__4556__auto___37255;
var G__37258 = cljs.core.count(c__4556__auto___37255);
var G__37259 = (0);
seq__37034_37243 = G__37256;
chunk__37035_37244 = G__37257;
count__37036_37245 = G__37258;
i__37037_37246 = G__37259;
continue;
} else {
var f_37260 = cljs.core.first(seq__37034_37253__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37260], 0));


var G__37261 = cljs.core.next(seq__37034_37253__$1);
var G__37262 = null;
var G__37263 = (0);
var G__37264 = (0);
seq__37034_37243 = G__37261;
chunk__37035_37244 = G__37262;
count__37036_37245 = G__37263;
i__37037_37246 = G__37264;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37265 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_37265], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_37265)))?cljs.core.second(arglists_37265):arglists_37265)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37040_37266 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37041_37267 = null;
var count__37042_37268 = (0);
var i__37043_37269 = (0);
while(true){
if((i__37043_37269 < count__37042_37268)){
var vec__37055_37270 = chunk__37041_37267.cljs$core$IIndexed$_nth$arity$2(null,i__37043_37269);
var name_37271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37055_37270,(0),null);
var map__37058_37272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37055_37270,(1),null);
var map__37058_37273__$1 = (((((!((map__37058_37272 == null))))?(((((map__37058_37272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37058_37272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37058_37272):map__37058_37272);
var doc_37274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37058_37273__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37058_37273__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37271], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37275], 0));

if(cljs.core.truth_(doc_37274)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37274], 0));
} else {
}


var G__37277 = seq__37040_37266;
var G__37278 = chunk__37041_37267;
var G__37279 = count__37042_37268;
var G__37280 = (i__37043_37269 + (1));
seq__37040_37266 = G__37277;
chunk__37041_37267 = G__37278;
count__37042_37268 = G__37279;
i__37043_37269 = G__37280;
continue;
} else {
var temp__5735__auto___37281 = cljs.core.seq(seq__37040_37266);
if(temp__5735__auto___37281){
var seq__37040_37282__$1 = temp__5735__auto___37281;
if(cljs.core.chunked_seq_QMARK_(seq__37040_37282__$1)){
var c__4556__auto___37283 = cljs.core.chunk_first(seq__37040_37282__$1);
var G__37284 = cljs.core.chunk_rest(seq__37040_37282__$1);
var G__37285 = c__4556__auto___37283;
var G__37286 = cljs.core.count(c__4556__auto___37283);
var G__37287 = (0);
seq__37040_37266 = G__37284;
chunk__37041_37267 = G__37285;
count__37042_37268 = G__37286;
i__37043_37269 = G__37287;
continue;
} else {
var vec__37062_37288 = cljs.core.first(seq__37040_37282__$1);
var name_37289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37062_37288,(0),null);
var map__37065_37290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37062_37288,(1),null);
var map__37065_37291__$1 = (((((!((map__37065_37290 == null))))?(((((map__37065_37290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37065_37290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37065_37290):map__37065_37290);
var doc_37292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37065_37291__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37065_37291__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37289], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37293], 0));

if(cljs.core.truth_(doc_37292)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37292], 0));
} else {
}


var G__37295 = cljs.core.next(seq__37040_37282__$1);
var G__37296 = null;
var G__37297 = (0);
var G__37298 = (0);
seq__37040_37266 = G__37295;
chunk__37041_37267 = G__37296;
count__37042_37268 = G__37297;
i__37043_37269 = G__37298;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37069 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37070 = null;
var count__37071 = (0);
var i__37072 = (0);
while(true){
if((i__37072 < count__37071)){
var role = chunk__37070.cljs$core$IIndexed$_nth$arity$2(null,i__37072);
var temp__5735__auto___37299__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37299__$1)){
var spec_37300 = temp__5735__auto___37299__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37300)], 0));
} else {
}


var G__37301 = seq__37069;
var G__37302 = chunk__37070;
var G__37303 = count__37071;
var G__37304 = (i__37072 + (1));
seq__37069 = G__37301;
chunk__37070 = G__37302;
count__37071 = G__37303;
i__37072 = G__37304;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__37069);
if(temp__5735__auto____$1){
var seq__37069__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37069__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37069__$1);
var G__37306 = cljs.core.chunk_rest(seq__37069__$1);
var G__37307 = c__4556__auto__;
var G__37308 = cljs.core.count(c__4556__auto__);
var G__37309 = (0);
seq__37069 = G__37306;
chunk__37070 = G__37307;
count__37071 = G__37308;
i__37072 = G__37309;
continue;
} else {
var role = cljs.core.first(seq__37069__$1);
var temp__5735__auto___37310__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37310__$2)){
var spec_37311 = temp__5735__auto___37310__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37311)], 0));
} else {
}


var G__37312 = cljs.core.next(seq__37069__$1);
var G__37313 = null;
var G__37314 = (0);
var G__37315 = (0);
seq__37069 = G__37312;
chunk__37070 = G__37313;
count__37071 = G__37314;
i__37072 = G__37315;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__37316 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__37317 = cljs.core.ex_cause(t);
via = G__37316;
t = G__37317;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37077 = datafied_throwable;
var map__37077__$1 = (((((!((map__37077 == null))))?(((((map__37077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37077):map__37077);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37077__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37077__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37077__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37078 = cljs.core.last(via);
var map__37078__$1 = (((((!((map__37078 == null))))?(((((map__37078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37078):map__37078);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37078__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37078__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37078__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37079 = data;
var map__37079__$1 = (((((!((map__37079 == null))))?(((((map__37079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37079):map__37079);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37079__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37079__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37079__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37080 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37080__$1 = (((((!((map__37080 == null))))?(((((map__37080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37080):map__37080);
var top_data = map__37080__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37080__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37086 = phase;
var G__37086__$1 = (((G__37086 instanceof cljs.core.Keyword))?G__37086.fqn:null);
switch (G__37086__$1) {
case "read-source":
var map__37087 = data;
var map__37087__$1 = (((((!((map__37087 == null))))?(((((map__37087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37087):map__37087);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37087__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37087__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37089 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37089__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37089,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37089);
var G__37089__$2 = (cljs.core.truth_((function (){var fexpr__37091 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37091.cljs$core$IFn$_invoke$arity$1 ? fexpr__37091.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37091.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37089__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37089__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37089__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37089__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37092 = top_data;
var G__37092__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37092,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37092);
var G__37092__$2 = (cljs.core.truth_((function (){var fexpr__37093 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37093.cljs$core$IFn$_invoke$arity$1 ? fexpr__37093.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37093.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37092__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37092__$1);
var G__37092__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37092__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37092__$2);
var G__37092__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37092__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37092__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37092__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37092__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37094 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37094,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37094,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37094,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37094,(3),null);
var G__37097 = top_data;
var G__37097__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37097,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37097);
var G__37097__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37097__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37097__$1);
var G__37097__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37097__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37097__$2);
var G__37097__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37097__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37097__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37097__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37097__$4;
}

break;
case "execution":
var vec__37116 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37116,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37116,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37116,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37116,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37074_SHARP_){
var or__4126__auto__ = (p1__37074_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__37120 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37120.cljs$core$IFn$_invoke$arity$1 ? fexpr__37120.cljs$core$IFn$_invoke$arity$1(p1__37074_SHARP_) : fexpr__37120.call(null,p1__37074_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__37121 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37121__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37121,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37121);
var G__37121__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37121__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37121__$1);
var G__37121__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37121__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37121__$2);
var G__37121__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37121__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37121__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37121__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37121__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37086__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37135){
var map__37137 = p__37135;
var map__37137__$1 = (((((!((map__37137 == null))))?(((((map__37137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37137):map__37137);
var triage_data = map__37137__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37137__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37137__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37137__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37137__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37137__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37137__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37137__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37137__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37172 = phase;
var G__37172__$1 = (((G__37172 instanceof cljs.core.Keyword))?G__37172.fqn:null);
switch (G__37172__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37173 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37174 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37175 = loc;
var G__37176 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37177_37329 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37178_37330 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37179_37331 = true;
var _STAR_print_fn_STAR__temp_val__37180_37332 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37179_37331);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37180_37332);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37129_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37129_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37178_37330);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37177_37329);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37173,G__37174,G__37175,G__37176) : format.call(null,G__37173,G__37174,G__37175,G__37176));

break;
case "macroexpansion":
var G__37193 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37194 = cause_type;
var G__37195 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37196 = loc;
var G__37197 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37193,G__37194,G__37195,G__37196,G__37197) : format.call(null,G__37193,G__37194,G__37195,G__37196,G__37197));

break;
case "compile-syntax-check":
var G__37207 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37208 = cause_type;
var G__37209 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37210 = loc;
var G__37211 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37207,G__37208,G__37209,G__37210,G__37211) : format.call(null,G__37207,G__37208,G__37209,G__37210,G__37211));

break;
case "compilation":
var G__37212 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__37213 = cause_type;
var G__37214 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37215 = loc;
var G__37216 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37212,G__37213,G__37214,G__37215,G__37216) : format.call(null,G__37212,G__37213,G__37214,G__37215,G__37216));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__37217 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__37218 = symbol;
var G__37219 = loc;
var G__37220 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37222_37333 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37226_37334 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37227_37335 = true;
var _STAR_print_fn_STAR__temp_val__37228_37336 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37227_37335);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37228_37336);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37130_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37130_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37226_37334);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37222_37333);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37217,G__37218,G__37219,G__37220) : format.call(null,G__37217,G__37218,G__37219,G__37220));
} else {
var G__37233 = "Execution error%s at %s(%s).\n%s\n";
var G__37234 = cause_type;
var G__37235 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37236 = loc;
var G__37237 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37233,G__37234,G__37235,G__37236,G__37237) : format.call(null,G__37233,G__37234,G__37235,G__37236,G__37237));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37172__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
