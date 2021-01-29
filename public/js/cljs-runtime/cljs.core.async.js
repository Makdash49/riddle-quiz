goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29990 = arguments.length;
switch (G__29990) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29995 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29995 = (function (f,blockable,meta29996){
this.f = f;
this.blockable = blockable;
this.meta29996 = meta29996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29997,meta29996__$1){
var self__ = this;
var _29997__$1 = this;
return (new cljs.core.async.t_cljs$core$async29995(self__.f,self__.blockable,meta29996__$1));
}));

(cljs.core.async.t_cljs$core$async29995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29997){
var self__ = this;
var _29997__$1 = this;
return self__.meta29996;
}));

(cljs.core.async.t_cljs$core$async29995.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29995.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29996","meta29996",-1097452592,null)], null);
}));

(cljs.core.async.t_cljs$core$async29995.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29995");

(cljs.core.async.t_cljs$core$async29995.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async29995");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29995.
 */
cljs.core.async.__GT_t_cljs$core$async29995 = (function cljs$core$async$__GT_t_cljs$core$async29995(f__$1,blockable__$1,meta29996){
return (new cljs.core.async.t_cljs$core$async29995(f__$1,blockable__$1,meta29996));
});

}

return (new cljs.core.async.t_cljs$core$async29995(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30003 = arguments.length;
switch (G__30003) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30005 = arguments.length;
switch (G__30005) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30013 = arguments.length;
switch (G__30013) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32201 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32201) : fn1.call(null,val_32201));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32201) : fn1.call(null,val_32201));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30043 = arguments.length;
switch (G__30043) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32227 = n;
var x_32228 = (0);
while(true){
if((x_32228 < n__4613__auto___32227)){
(a[x_32228] = x_32228);

var G__32229 = (x_32228 + (1));
x_32228 = G__32229;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30049 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30049 = (function (flag,meta30050){
this.flag = flag;
this.meta30050 = meta30050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30051,meta30050__$1){
var self__ = this;
var _30051__$1 = this;
return (new cljs.core.async.t_cljs$core$async30049(self__.flag,meta30050__$1));
}));

(cljs.core.async.t_cljs$core$async30049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30051){
var self__ = this;
var _30051__$1 = this;
return self__.meta30050;
}));

(cljs.core.async.t_cljs$core$async30049.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30049.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30049.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30049.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30050","meta30050",-1552784941,null)], null);
}));

(cljs.core.async.t_cljs$core$async30049.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30049");

(cljs.core.async.t_cljs$core$async30049.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30049");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30049.
 */
cljs.core.async.__GT_t_cljs$core$async30049 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30049(flag__$1,meta30050){
return (new cljs.core.async.t_cljs$core$async30049(flag__$1,meta30050));
});

}

return (new cljs.core.async.t_cljs$core$async30049(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30067 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30067 = (function (flag,cb,meta30068){
this.flag = flag;
this.cb = cb;
this.meta30068 = meta30068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30069,meta30068__$1){
var self__ = this;
var _30069__$1 = this;
return (new cljs.core.async.t_cljs$core$async30067(self__.flag,self__.cb,meta30068__$1));
}));

(cljs.core.async.t_cljs$core$async30067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30069){
var self__ = this;
var _30069__$1 = this;
return self__.meta30068;
}));

(cljs.core.async.t_cljs$core$async30067.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30067.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30067.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30067.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30068","meta30068",-988911195,null)], null);
}));

(cljs.core.async.t_cljs$core$async30067.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30067");

(cljs.core.async.t_cljs$core$async30067.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30067");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30067.
 */
cljs.core.async.__GT_t_cljs$core$async30067 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30067(flag__$1,cb__$1,meta30068){
return (new cljs.core.async.t_cljs$core$async30067(flag__$1,cb__$1,meta30068));
});

}

return (new cljs.core.async.t_cljs$core$async30067(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30073_SHARP_){
var G__30078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30073_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30078) : fret.call(null,G__30078));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30074_SHARP_){
var G__30079 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30074_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30079) : fret.call(null,G__30079));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32239 = (i + (1));
i = G__32239;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32242 = arguments.length;
var i__4737__auto___32243 = (0);
while(true){
if((i__4737__auto___32243 < len__4736__auto___32242)){
args__4742__auto__.push((arguments[i__4737__auto___32243]));

var G__32244 = (i__4737__auto___32243 + (1));
i__4737__auto___32243 = G__32244;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30095){
var map__30096 = p__30095;
var map__30096__$1 = (((((!((map__30096 == null))))?(((((map__30096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30096):map__30096);
var opts = map__30096__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30090){
var G__30091 = cljs.core.first(seq30090);
var seq30090__$1 = cljs.core.next(seq30090);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30091,seq30090__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30115 = arguments.length;
switch (G__30115) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29877__auto___32252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_30162){
var state_val_30163 = (state_30162[(1)]);
if((state_val_30163 === (7))){
var inst_30158 = (state_30162[(2)]);
var state_30162__$1 = state_30162;
var statearr_30167_32253 = state_30162__$1;
(statearr_30167_32253[(2)] = inst_30158);

(statearr_30167_32253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (1))){
var state_30162__$1 = state_30162;
var statearr_30168_32254 = state_30162__$1;
(statearr_30168_32254[(2)] = null);

(statearr_30168_32254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (4))){
var inst_30139 = (state_30162[(7)]);
var inst_30139__$1 = (state_30162[(2)]);
var inst_30140 = (inst_30139__$1 == null);
var state_30162__$1 = (function (){var statearr_30183 = state_30162;
(statearr_30183[(7)] = inst_30139__$1);

return statearr_30183;
})();
if(cljs.core.truth_(inst_30140)){
var statearr_30184_32255 = state_30162__$1;
(statearr_30184_32255[(1)] = (5));

} else {
var statearr_30185_32256 = state_30162__$1;
(statearr_30185_32256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (13))){
var state_30162__$1 = state_30162;
var statearr_30186_32257 = state_30162__$1;
(statearr_30186_32257[(2)] = null);

(statearr_30186_32257[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (6))){
var inst_30139 = (state_30162[(7)]);
var state_30162__$1 = state_30162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30162__$1,(11),to,inst_30139);
} else {
if((state_val_30163 === (3))){
var inst_30160 = (state_30162[(2)]);
var state_30162__$1 = state_30162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30162__$1,inst_30160);
} else {
if((state_val_30163 === (12))){
var state_30162__$1 = state_30162;
var statearr_30187_32258 = state_30162__$1;
(statearr_30187_32258[(2)] = null);

(statearr_30187_32258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (2))){
var state_30162__$1 = state_30162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30162__$1,(4),from);
} else {
if((state_val_30163 === (11))){
var inst_30151 = (state_30162[(2)]);
var state_30162__$1 = state_30162;
if(cljs.core.truth_(inst_30151)){
var statearr_30188_32259 = state_30162__$1;
(statearr_30188_32259[(1)] = (12));

} else {
var statearr_30189_32260 = state_30162__$1;
(statearr_30189_32260[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (9))){
var state_30162__$1 = state_30162;
var statearr_30190_32273 = state_30162__$1;
(statearr_30190_32273[(2)] = null);

(statearr_30190_32273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (5))){
var state_30162__$1 = state_30162;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30191_32274 = state_30162__$1;
(statearr_30191_32274[(1)] = (8));

} else {
var statearr_30196_32275 = state_30162__$1;
(statearr_30196_32275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (14))){
var inst_30156 = (state_30162[(2)]);
var state_30162__$1 = state_30162;
var statearr_30197_32279 = state_30162__$1;
(statearr_30197_32279[(2)] = inst_30156);

(statearr_30197_32279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (10))){
var inst_30148 = (state_30162[(2)]);
var state_30162__$1 = state_30162;
var statearr_30206_32280 = state_30162__$1;
(statearr_30206_32280[(2)] = inst_30148);

(statearr_30206_32280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30163 === (8))){
var inst_30144 = cljs.core.async.close_BANG_(to);
var state_30162__$1 = state_30162;
var statearr_30211_32281 = state_30162__$1;
(statearr_30211_32281[(2)] = inst_30144);

(statearr_30211_32281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29715__auto__ = null;
var cljs$core$async$state_machine__29715__auto____0 = (function (){
var statearr_30212 = [null,null,null,null,null,null,null,null];
(statearr_30212[(0)] = cljs$core$async$state_machine__29715__auto__);

(statearr_30212[(1)] = (1));

return statearr_30212;
});
var cljs$core$async$state_machine__29715__auto____1 = (function (state_30162){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_30162);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e30213){var ex__29718__auto__ = e30213;
var statearr_30214_32285 = state_30162;
(statearr_30214_32285[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_30162[(4)]))){
var statearr_30215_32286 = state_30162;
(statearr_30215_32286[(1)] = cljs.core.first((state_30162[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32291 = state_30162;
state_30162 = G__32291;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$state_machine__29715__auto__ = function(state_30162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29715__auto____1.call(this,state_30162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29715__auto____0;
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29715__auto____1;
return cljs$core$async$state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_30216 = f__29878__auto__();
(statearr_30216[(6)] = c__29877__auto___32252);

return statearr_30216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30218){
var vec__30219 = p__30218;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30219,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30219,(1),null);
var job = vec__30219;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29877__auto___32295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_30226){
var state_val_30227 = (state_30226[(1)]);
if((state_val_30227 === (1))){
var state_30226__$1 = state_30226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30226__$1,(2),res,v);
} else {
if((state_val_30227 === (2))){
var inst_30223 = (state_30226[(2)]);
var inst_30224 = cljs.core.async.close_BANG_(res);
var state_30226__$1 = (function (){var statearr_30228 = state_30226;
(statearr_30228[(7)] = inst_30223);

return statearr_30228;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30226__$1,inst_30224);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____0 = (function (){
var statearr_30229 = [null,null,null,null,null,null,null,null];
(statearr_30229[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__);

(statearr_30229[(1)] = (1));

return statearr_30229;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____1 = (function (state_30226){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_30226);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e30230){var ex__29718__auto__ = e30230;
var statearr_30231_32306 = state_30226;
(statearr_30231_32306[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_30226[(4)]))){
var statearr_30232_32307 = state_30226;
(statearr_30232_32307[(1)] = cljs.core.first((state_30226[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32308 = state_30226;
state_30226 = G__32308;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__ = function(state_30226){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____1.call(this,state_30226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_30233 = f__29878__auto__();
(statearr_30233[(6)] = c__29877__auto___32295);

return statearr_30233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30236){
var vec__30239 = p__30236;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30239,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30239,(1),null);
var job = vec__30239;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___32316 = n;
var __32317 = (0);
while(true){
if((__32317 < n__4613__auto___32316)){
var G__30245_32318 = type;
var G__30245_32319__$1 = (((G__30245_32318 instanceof cljs.core.Keyword))?G__30245_32318.fqn:null);
switch (G__30245_32319__$1) {
case "compute":
var c__29877__auto___32322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32317,c__29877__auto___32322,G__30245_32318,G__30245_32319__$1,n__4613__auto___32316,jobs,results,process,async){
return (function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = ((function (__32317,c__29877__auto___32322,G__30245_32318,G__30245_32319__$1,n__4613__auto___32316,jobs,results,process,async){
return (function (state_30261){
var state_val_30262 = (state_30261[(1)]);
if((state_val_30262 === (1))){
var state_30261__$1 = state_30261;
var statearr_30264_32324 = state_30261__$1;
(statearr_30264_32324[(2)] = null);

(statearr_30264_32324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30262 === (2))){
var state_30261__$1 = state_30261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30261__$1,(4),jobs);
} else {
if((state_val_30262 === (3))){
var inst_30259 = (state_30261[(2)]);
var state_30261__$1 = state_30261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30261__$1,inst_30259);
} else {
if((state_val_30262 === (4))){
var inst_30251 = (state_30261[(2)]);
var inst_30252 = process(inst_30251);
var state_30261__$1 = state_30261;
if(cljs.core.truth_(inst_30252)){
var statearr_30265_32325 = state_30261__$1;
(statearr_30265_32325[(1)] = (5));

} else {
var statearr_30266_32326 = state_30261__$1;
(statearr_30266_32326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30262 === (5))){
var state_30261__$1 = state_30261;
var statearr_30267_32327 = state_30261__$1;
(statearr_30267_32327[(2)] = null);

(statearr_30267_32327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30262 === (6))){
var state_30261__$1 = state_30261;
var statearr_30268_32328 = state_30261__$1;
(statearr_30268_32328[(2)] = null);

(statearr_30268_32328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30262 === (7))){
var inst_30257 = (state_30261[(2)]);
var state_30261__$1 = state_30261;
var statearr_30269_32329 = state_30261__$1;
(statearr_30269_32329[(2)] = inst_30257);

(statearr_30269_32329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32317,c__29877__auto___32322,G__30245_32318,G__30245_32319__$1,n__4613__auto___32316,jobs,results,process,async))
;
return ((function (__32317,switch__29714__auto__,c__29877__auto___32322,G__30245_32318,G__30245_32319__$1,n__4613__auto___32316,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____0 = (function (){
var statearr_30270 = [null,null,null,null,null,null,null];
(statearr_30270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__);

(statearr_30270[(1)] = (1));

return statearr_30270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____1 = (function (state_30261){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_30261);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e30271){var ex__29718__auto__ = e30271;
var statearr_30272_32338 = state_30261;
(statearr_30272_32338[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_30261[(4)]))){
var statearr_30277_32339 = state_30261;
(statearr_30277_32339[(1)] = cljs.core.first((state_30261[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32340 = state_30261;
state_30261 = G__32340;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__ = function(state_30261){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____1.call(this,state_30261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__;
})()
;})(__32317,switch__29714__auto__,c__29877__auto___32322,G__30245_32318,G__30245_32319__$1,n__4613__auto___32316,jobs,results,process,async))
})();
var state__29879__auto__ = (function (){var statearr_30286 = f__29878__auto__();
(statearr_30286[(6)] = c__29877__auto___32322);

return statearr_30286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
});})(__32317,c__29877__auto___32322,G__30245_32318,G__30245_32319__$1,n__4613__auto___32316,jobs,results,process,async))
);


break;
case "async":
var c__29877__auto___32348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32317,c__29877__auto___32348,G__30245_32318,G__30245_32319__$1,n__4613__auto___32316,jobs,results,process,async){
return (function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = ((function (__32317,c__29877__auto___32348,G__30245_32318,G__30245_32319__$1,n__4613__auto___32316,jobs,results,process,async){
return (function (state_30300){
var state_val_30301 = (state_30300[(1)]);
if((state_val_30301 === (1))){
var state_30300__$1 = state_30300;
var statearr_30304_32355 = state_30300__$1;
(statearr_30304_32355[(2)] = null);

(statearr_30304_32355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (2))){
var state_30300__$1 = state_30300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30300__$1,(4),jobs);
} else {
if((state_val_30301 === (3))){
var inst_30297 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30300__$1,inst_30297);
} else {
if((state_val_30301 === (4))){
var inst_30289 = (state_30300[(2)]);
var inst_30290 = async(inst_30289);
var state_30300__$1 = state_30300;
if(cljs.core.truth_(inst_30290)){
var statearr_30313_32356 = state_30300__$1;
(statearr_30313_32356[(1)] = (5));

} else {
var statearr_30316_32357 = state_30300__$1;
(statearr_30316_32357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (5))){
var state_30300__$1 = state_30300;
var statearr_30317_32358 = state_30300__$1;
(statearr_30317_32358[(2)] = null);

(statearr_30317_32358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (6))){
var state_30300__$1 = state_30300;
var statearr_30318_32359 = state_30300__$1;
(statearr_30318_32359[(2)] = null);

(statearr_30318_32359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (7))){
var inst_30295 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
var statearr_30319_32360 = state_30300__$1;
(statearr_30319_32360[(2)] = inst_30295);

(statearr_30319_32360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32317,c__29877__auto___32348,G__30245_32318,G__30245_32319__$1,n__4613__auto___32316,jobs,results,process,async))
;
return ((function (__32317,switch__29714__auto__,c__29877__auto___32348,G__30245_32318,G__30245_32319__$1,n__4613__auto___32316,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____0 = (function (){
var statearr_30320 = [null,null,null,null,null,null,null];
(statearr_30320[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__);

(statearr_30320[(1)] = (1));

return statearr_30320;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____1 = (function (state_30300){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_30300);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e30321){var ex__29718__auto__ = e30321;
var statearr_30322_32361 = state_30300;
(statearr_30322_32361[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_30300[(4)]))){
var statearr_30323_32362 = state_30300;
(statearr_30323_32362[(1)] = cljs.core.first((state_30300[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32363 = state_30300;
state_30300 = G__32363;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__ = function(state_30300){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____1.call(this,state_30300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__;
})()
;})(__32317,switch__29714__auto__,c__29877__auto___32348,G__30245_32318,G__30245_32319__$1,n__4613__auto___32316,jobs,results,process,async))
})();
var state__29879__auto__ = (function (){var statearr_30324 = f__29878__auto__();
(statearr_30324[(6)] = c__29877__auto___32348);

return statearr_30324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
});})(__32317,c__29877__auto___32348,G__30245_32318,G__30245_32319__$1,n__4613__auto___32316,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30245_32319__$1)].join('')));

}

var G__32370 = (__32317 + (1));
__32317 = G__32370;
continue;
} else {
}
break;
}

var c__29877__auto___32371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_30355){
var state_val_30356 = (state_30355[(1)]);
if((state_val_30356 === (7))){
var inst_30351 = (state_30355[(2)]);
var state_30355__$1 = state_30355;
var statearr_30357_32372 = state_30355__$1;
(statearr_30357_32372[(2)] = inst_30351);

(statearr_30357_32372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (1))){
var state_30355__$1 = state_30355;
var statearr_30358_32373 = state_30355__$1;
(statearr_30358_32373[(2)] = null);

(statearr_30358_32373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (4))){
var inst_30332 = (state_30355[(7)]);
var inst_30332__$1 = (state_30355[(2)]);
var inst_30334 = (inst_30332__$1 == null);
var state_30355__$1 = (function (){var statearr_30359 = state_30355;
(statearr_30359[(7)] = inst_30332__$1);

return statearr_30359;
})();
if(cljs.core.truth_(inst_30334)){
var statearr_30360_32374 = state_30355__$1;
(statearr_30360_32374[(1)] = (5));

} else {
var statearr_30361_32375 = state_30355__$1;
(statearr_30361_32375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (6))){
var inst_30338 = (state_30355[(8)]);
var inst_30332 = (state_30355[(7)]);
var inst_30338__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30342 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30343 = [inst_30332,inst_30338__$1];
var inst_30344 = (new cljs.core.PersistentVector(null,2,(5),inst_30342,inst_30343,null));
var state_30355__$1 = (function (){var statearr_30365 = state_30355;
(statearr_30365[(8)] = inst_30338__$1);

return statearr_30365;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30355__$1,(8),jobs,inst_30344);
} else {
if((state_val_30356 === (3))){
var inst_30353 = (state_30355[(2)]);
var state_30355__$1 = state_30355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30355__$1,inst_30353);
} else {
if((state_val_30356 === (2))){
var state_30355__$1 = state_30355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30355__$1,(4),from);
} else {
if((state_val_30356 === (9))){
var inst_30348 = (state_30355[(2)]);
var state_30355__$1 = (function (){var statearr_30367 = state_30355;
(statearr_30367[(9)] = inst_30348);

return statearr_30367;
})();
var statearr_30368_32376 = state_30355__$1;
(statearr_30368_32376[(2)] = null);

(statearr_30368_32376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (5))){
var inst_30336 = cljs.core.async.close_BANG_(jobs);
var state_30355__$1 = state_30355;
var statearr_30369_32377 = state_30355__$1;
(statearr_30369_32377[(2)] = inst_30336);

(statearr_30369_32377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30356 === (8))){
var inst_30338 = (state_30355[(8)]);
var inst_30346 = (state_30355[(2)]);
var state_30355__$1 = (function (){var statearr_30370 = state_30355;
(statearr_30370[(10)] = inst_30346);

return statearr_30370;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30355__$1,(9),results,inst_30338);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____0 = (function (){
var statearr_30373 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__);

(statearr_30373[(1)] = (1));

return statearr_30373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____1 = (function (state_30355){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_30355);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e30374){var ex__29718__auto__ = e30374;
var statearr_30375_32390 = state_30355;
(statearr_30375_32390[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_30355[(4)]))){
var statearr_30376_32391 = state_30355;
(statearr_30376_32391[(1)] = cljs.core.first((state_30355[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32392 = state_30355;
state_30355 = G__32392;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__ = function(state_30355){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____1.call(this,state_30355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_30384 = f__29878__auto__();
(statearr_30384[(6)] = c__29877__auto___32371);

return statearr_30384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));


var c__29877__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_30426){
var state_val_30427 = (state_30426[(1)]);
if((state_val_30427 === (7))){
var inst_30422 = (state_30426[(2)]);
var state_30426__$1 = state_30426;
var statearr_30432_32393 = state_30426__$1;
(statearr_30432_32393[(2)] = inst_30422);

(statearr_30432_32393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (20))){
var state_30426__$1 = state_30426;
var statearr_30434_32394 = state_30426__$1;
(statearr_30434_32394[(2)] = null);

(statearr_30434_32394[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (1))){
var state_30426__$1 = state_30426;
var statearr_30435_32395 = state_30426__$1;
(statearr_30435_32395[(2)] = null);

(statearr_30435_32395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (4))){
var inst_30388 = (state_30426[(7)]);
var inst_30388__$1 = (state_30426[(2)]);
var inst_30389 = (inst_30388__$1 == null);
var state_30426__$1 = (function (){var statearr_30437 = state_30426;
(statearr_30437[(7)] = inst_30388__$1);

return statearr_30437;
})();
if(cljs.core.truth_(inst_30389)){
var statearr_30438_32396 = state_30426__$1;
(statearr_30438_32396[(1)] = (5));

} else {
var statearr_30439_32397 = state_30426__$1;
(statearr_30439_32397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (15))){
var inst_30404 = (state_30426[(8)]);
var state_30426__$1 = state_30426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30426__$1,(18),to,inst_30404);
} else {
if((state_val_30427 === (21))){
var inst_30417 = (state_30426[(2)]);
var state_30426__$1 = state_30426;
var statearr_30440_32398 = state_30426__$1;
(statearr_30440_32398[(2)] = inst_30417);

(statearr_30440_32398[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (13))){
var inst_30419 = (state_30426[(2)]);
var state_30426__$1 = (function (){var statearr_30441 = state_30426;
(statearr_30441[(9)] = inst_30419);

return statearr_30441;
})();
var statearr_30442_32399 = state_30426__$1;
(statearr_30442_32399[(2)] = null);

(statearr_30442_32399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (6))){
var inst_30388 = (state_30426[(7)]);
var state_30426__$1 = state_30426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30426__$1,(11),inst_30388);
} else {
if((state_val_30427 === (17))){
var inst_30412 = (state_30426[(2)]);
var state_30426__$1 = state_30426;
if(cljs.core.truth_(inst_30412)){
var statearr_30445_32400 = state_30426__$1;
(statearr_30445_32400[(1)] = (19));

} else {
var statearr_30447_32401 = state_30426__$1;
(statearr_30447_32401[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (3))){
var inst_30424 = (state_30426[(2)]);
var state_30426__$1 = state_30426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30426__$1,inst_30424);
} else {
if((state_val_30427 === (12))){
var inst_30401 = (state_30426[(10)]);
var state_30426__$1 = state_30426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30426__$1,(14),inst_30401);
} else {
if((state_val_30427 === (2))){
var state_30426__$1 = state_30426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30426__$1,(4),results);
} else {
if((state_val_30427 === (19))){
var state_30426__$1 = state_30426;
var statearr_30448_32409 = state_30426__$1;
(statearr_30448_32409[(2)] = null);

(statearr_30448_32409[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (11))){
var inst_30401 = (state_30426[(2)]);
var state_30426__$1 = (function (){var statearr_30449 = state_30426;
(statearr_30449[(10)] = inst_30401);

return statearr_30449;
})();
var statearr_30450_32411 = state_30426__$1;
(statearr_30450_32411[(2)] = null);

(statearr_30450_32411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (9))){
var state_30426__$1 = state_30426;
var statearr_30451_32413 = state_30426__$1;
(statearr_30451_32413[(2)] = null);

(statearr_30451_32413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (5))){
var state_30426__$1 = state_30426;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30452_32414 = state_30426__$1;
(statearr_30452_32414[(1)] = (8));

} else {
var statearr_30453_32415 = state_30426__$1;
(statearr_30453_32415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (14))){
var inst_30404 = (state_30426[(8)]);
var inst_30404__$1 = (state_30426[(2)]);
var inst_30405 = (inst_30404__$1 == null);
var inst_30406 = cljs.core.not(inst_30405);
var state_30426__$1 = (function (){var statearr_30454 = state_30426;
(statearr_30454[(8)] = inst_30404__$1);

return statearr_30454;
})();
if(inst_30406){
var statearr_30455_32416 = state_30426__$1;
(statearr_30455_32416[(1)] = (15));

} else {
var statearr_30456_32417 = state_30426__$1;
(statearr_30456_32417[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (16))){
var state_30426__$1 = state_30426;
var statearr_30457_32418 = state_30426__$1;
(statearr_30457_32418[(2)] = false);

(statearr_30457_32418[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (10))){
var inst_30397 = (state_30426[(2)]);
var state_30426__$1 = state_30426;
var statearr_30458_32419 = state_30426__$1;
(statearr_30458_32419[(2)] = inst_30397);

(statearr_30458_32419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (18))){
var inst_30409 = (state_30426[(2)]);
var state_30426__$1 = state_30426;
var statearr_30459_32420 = state_30426__$1;
(statearr_30459_32420[(2)] = inst_30409);

(statearr_30459_32420[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30427 === (8))){
var inst_30394 = cljs.core.async.close_BANG_(to);
var state_30426__$1 = state_30426;
var statearr_30461_32421 = state_30426__$1;
(statearr_30461_32421[(2)] = inst_30394);

(statearr_30461_32421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____0 = (function (){
var statearr_30462 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30462[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__);

(statearr_30462[(1)] = (1));

return statearr_30462;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____1 = (function (state_30426){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_30426);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e30463){var ex__29718__auto__ = e30463;
var statearr_30464_32422 = state_30426;
(statearr_30464_32422[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_30426[(4)]))){
var statearr_30465_32423 = state_30426;
(statearr_30465_32423[(1)] = cljs.core.first((state_30426[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32424 = state_30426;
state_30426 = G__32424;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__ = function(state_30426){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____1.call(this,state_30426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29715__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_30467 = f__29878__auto__();
(statearr_30467[(6)] = c__29877__auto__);

return statearr_30467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));

return c__29877__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30469 = arguments.length;
switch (G__30469) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30471 = arguments.length;
switch (G__30471) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30475 = arguments.length;
switch (G__30475) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29877__auto___32430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_30503){
var state_val_30504 = (state_30503[(1)]);
if((state_val_30504 === (7))){
var inst_30499 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
var statearr_30505_32437 = state_30503__$1;
(statearr_30505_32437[(2)] = inst_30499);

(statearr_30505_32437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (1))){
var state_30503__$1 = state_30503;
var statearr_30506_32438 = state_30503__$1;
(statearr_30506_32438[(2)] = null);

(statearr_30506_32438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (4))){
var inst_30480 = (state_30503[(7)]);
var inst_30480__$1 = (state_30503[(2)]);
var inst_30481 = (inst_30480__$1 == null);
var state_30503__$1 = (function (){var statearr_30511 = state_30503;
(statearr_30511[(7)] = inst_30480__$1);

return statearr_30511;
})();
if(cljs.core.truth_(inst_30481)){
var statearr_30512_32439 = state_30503__$1;
(statearr_30512_32439[(1)] = (5));

} else {
var statearr_30515_32440 = state_30503__$1;
(statearr_30515_32440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (13))){
var state_30503__$1 = state_30503;
var statearr_30518_32441 = state_30503__$1;
(statearr_30518_32441[(2)] = null);

(statearr_30518_32441[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (6))){
var inst_30480 = (state_30503[(7)]);
var inst_30486 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30480) : p.call(null,inst_30480));
var state_30503__$1 = state_30503;
if(cljs.core.truth_(inst_30486)){
var statearr_30519_32458 = state_30503__$1;
(statearr_30519_32458[(1)] = (9));

} else {
var statearr_30520_32459 = state_30503__$1;
(statearr_30520_32459[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (3))){
var inst_30501 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30503__$1,inst_30501);
} else {
if((state_val_30504 === (12))){
var state_30503__$1 = state_30503;
var statearr_30529_32461 = state_30503__$1;
(statearr_30529_32461[(2)] = null);

(statearr_30529_32461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (2))){
var state_30503__$1 = state_30503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30503__$1,(4),ch);
} else {
if((state_val_30504 === (11))){
var inst_30480 = (state_30503[(7)]);
var inst_30490 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30503__$1,(8),inst_30490,inst_30480);
} else {
if((state_val_30504 === (9))){
var state_30503__$1 = state_30503;
var statearr_30533_32466 = state_30503__$1;
(statearr_30533_32466[(2)] = tc);

(statearr_30533_32466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (5))){
var inst_30483 = cljs.core.async.close_BANG_(tc);
var inst_30484 = cljs.core.async.close_BANG_(fc);
var state_30503__$1 = (function (){var statearr_30536 = state_30503;
(statearr_30536[(8)] = inst_30483);

return statearr_30536;
})();
var statearr_30537_32474 = state_30503__$1;
(statearr_30537_32474[(2)] = inst_30484);

(statearr_30537_32474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (14))){
var inst_30497 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
var statearr_30538_32475 = state_30503__$1;
(statearr_30538_32475[(2)] = inst_30497);

(statearr_30538_32475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (10))){
var state_30503__$1 = state_30503;
var statearr_30543_32476 = state_30503__$1;
(statearr_30543_32476[(2)] = fc);

(statearr_30543_32476[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (8))){
var inst_30492 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
if(cljs.core.truth_(inst_30492)){
var statearr_30546_32480 = state_30503__$1;
(statearr_30546_32480[(1)] = (12));

} else {
var statearr_30547_32481 = state_30503__$1;
(statearr_30547_32481[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29715__auto__ = null;
var cljs$core$async$state_machine__29715__auto____0 = (function (){
var statearr_30552 = [null,null,null,null,null,null,null,null,null];
(statearr_30552[(0)] = cljs$core$async$state_machine__29715__auto__);

(statearr_30552[(1)] = (1));

return statearr_30552;
});
var cljs$core$async$state_machine__29715__auto____1 = (function (state_30503){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_30503);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e30553){var ex__29718__auto__ = e30553;
var statearr_30554_32485 = state_30503;
(statearr_30554_32485[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_30503[(4)]))){
var statearr_30555_32486 = state_30503;
(statearr_30555_32486[(1)] = cljs.core.first((state_30503[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32490 = state_30503;
state_30503 = G__32490;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$state_machine__29715__auto__ = function(state_30503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29715__auto____1.call(this,state_30503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29715__auto____0;
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29715__auto____1;
return cljs$core$async$state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_30562 = f__29878__auto__();
(statearr_30562[(6)] = c__29877__auto___32430);

return statearr_30562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29877__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_30590){
var state_val_30591 = (state_30590[(1)]);
if((state_val_30591 === (7))){
var inst_30586 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30595_32495 = state_30590__$1;
(statearr_30595_32495[(2)] = inst_30586);

(statearr_30595_32495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (1))){
var inst_30569 = init;
var inst_30570 = inst_30569;
var state_30590__$1 = (function (){var statearr_30596 = state_30590;
(statearr_30596[(7)] = inst_30570);

return statearr_30596;
})();
var statearr_30597_32496 = state_30590__$1;
(statearr_30597_32496[(2)] = null);

(statearr_30597_32496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (4))){
var inst_30573 = (state_30590[(8)]);
var inst_30573__$1 = (state_30590[(2)]);
var inst_30574 = (inst_30573__$1 == null);
var state_30590__$1 = (function (){var statearr_30598 = state_30590;
(statearr_30598[(8)] = inst_30573__$1);

return statearr_30598;
})();
if(cljs.core.truth_(inst_30574)){
var statearr_30599_32497 = state_30590__$1;
(statearr_30599_32497[(1)] = (5));

} else {
var statearr_30600_32498 = state_30590__$1;
(statearr_30600_32498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (6))){
var inst_30577 = (state_30590[(9)]);
var inst_30573 = (state_30590[(8)]);
var inst_30570 = (state_30590[(7)]);
var inst_30577__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30570,inst_30573) : f.call(null,inst_30570,inst_30573));
var inst_30578 = cljs.core.reduced_QMARK_(inst_30577__$1);
var state_30590__$1 = (function (){var statearr_30601 = state_30590;
(statearr_30601[(9)] = inst_30577__$1);

return statearr_30601;
})();
if(inst_30578){
var statearr_30602_32501 = state_30590__$1;
(statearr_30602_32501[(1)] = (8));

} else {
var statearr_30603_32502 = state_30590__$1;
(statearr_30603_32502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (3))){
var inst_30588 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30590__$1,inst_30588);
} else {
if((state_val_30591 === (2))){
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30590__$1,(4),ch);
} else {
if((state_val_30591 === (9))){
var inst_30577 = (state_30590[(9)]);
var inst_30570 = inst_30577;
var state_30590__$1 = (function (){var statearr_30613 = state_30590;
(statearr_30613[(7)] = inst_30570);

return statearr_30613;
})();
var statearr_30614_32503 = state_30590__$1;
(statearr_30614_32503[(2)] = null);

(statearr_30614_32503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (5))){
var inst_30570 = (state_30590[(7)]);
var state_30590__$1 = state_30590;
var statearr_30615_32504 = state_30590__$1;
(statearr_30615_32504[(2)] = inst_30570);

(statearr_30615_32504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (10))){
var inst_30584 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30616_32505 = state_30590__$1;
(statearr_30616_32505[(2)] = inst_30584);

(statearr_30616_32505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (8))){
var inst_30577 = (state_30590[(9)]);
var inst_30580 = cljs.core.deref(inst_30577);
var state_30590__$1 = state_30590;
var statearr_30617_32506 = state_30590__$1;
(statearr_30617_32506[(2)] = inst_30580);

(statearr_30617_32506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29715__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29715__auto____0 = (function (){
var statearr_30619 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30619[(0)] = cljs$core$async$reduce_$_state_machine__29715__auto__);

(statearr_30619[(1)] = (1));

return statearr_30619;
});
var cljs$core$async$reduce_$_state_machine__29715__auto____1 = (function (state_30590){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_30590);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e30621){var ex__29718__auto__ = e30621;
var statearr_30622_32507 = state_30590;
(statearr_30622_32507[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_30590[(4)]))){
var statearr_30623_32508 = state_30590;
(statearr_30623_32508[(1)] = cljs.core.first((state_30590[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32509 = state_30590;
state_30590 = G__32509;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29715__auto__ = function(state_30590){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29715__auto____1.call(this,state_30590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29715__auto____0;
cljs$core$async$reduce_$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29715__auto____1;
return cljs$core$async$reduce_$_state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_30628 = f__29878__auto__();
(statearr_30628[(6)] = c__29877__auto__);

return statearr_30628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));

return c__29877__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29877__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_30665){
var state_val_30666 = (state_30665[(1)]);
if((state_val_30666 === (1))){
var inst_30660 = cljs.core.async.reduce(f__$1,init,ch);
var state_30665__$1 = state_30665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30665__$1,(2),inst_30660);
} else {
if((state_val_30666 === (2))){
var inst_30662 = (state_30665[(2)]);
var inst_30663 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30662) : f__$1.call(null,inst_30662));
var state_30665__$1 = state_30665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30665__$1,inst_30663);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29715__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29715__auto____0 = (function (){
var statearr_30673 = [null,null,null,null,null,null,null];
(statearr_30673[(0)] = cljs$core$async$transduce_$_state_machine__29715__auto__);

(statearr_30673[(1)] = (1));

return statearr_30673;
});
var cljs$core$async$transduce_$_state_machine__29715__auto____1 = (function (state_30665){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_30665);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e30676){var ex__29718__auto__ = e30676;
var statearr_30677_32510 = state_30665;
(statearr_30677_32510[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_30665[(4)]))){
var statearr_30678_32511 = state_30665;
(statearr_30678_32511[(1)] = cljs.core.first((state_30665[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32512 = state_30665;
state_30665 = G__32512;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29715__auto__ = function(state_30665){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29715__auto____1.call(this,state_30665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29715__auto____0;
cljs$core$async$transduce_$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29715__auto____1;
return cljs$core$async$transduce_$_state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_30683 = f__29878__auto__();
(statearr_30683[(6)] = c__29877__auto__);

return statearr_30683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));

return c__29877__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30693 = arguments.length;
switch (G__30693) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29877__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_30723){
var state_val_30724 = (state_30723[(1)]);
if((state_val_30724 === (7))){
var inst_30703 = (state_30723[(2)]);
var state_30723__$1 = state_30723;
var statearr_30726_32517 = state_30723__$1;
(statearr_30726_32517[(2)] = inst_30703);

(statearr_30726_32517[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30724 === (1))){
var inst_30695 = cljs.core.seq(coll);
var inst_30696 = inst_30695;
var state_30723__$1 = (function (){var statearr_30727 = state_30723;
(statearr_30727[(7)] = inst_30696);

return statearr_30727;
})();
var statearr_30729_32518 = state_30723__$1;
(statearr_30729_32518[(2)] = null);

(statearr_30729_32518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30724 === (4))){
var inst_30696 = (state_30723[(7)]);
var inst_30701 = cljs.core.first(inst_30696);
var state_30723__$1 = state_30723;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30723__$1,(7),ch,inst_30701);
} else {
if((state_val_30724 === (13))){
var inst_30717 = (state_30723[(2)]);
var state_30723__$1 = state_30723;
var statearr_30737_32523 = state_30723__$1;
(statearr_30737_32523[(2)] = inst_30717);

(statearr_30737_32523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30724 === (6))){
var inst_30706 = (state_30723[(2)]);
var state_30723__$1 = state_30723;
if(cljs.core.truth_(inst_30706)){
var statearr_30738_32527 = state_30723__$1;
(statearr_30738_32527[(1)] = (8));

} else {
var statearr_30740_32528 = state_30723__$1;
(statearr_30740_32528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30724 === (3))){
var inst_30721 = (state_30723[(2)]);
var state_30723__$1 = state_30723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30723__$1,inst_30721);
} else {
if((state_val_30724 === (12))){
var state_30723__$1 = state_30723;
var statearr_30748_32529 = state_30723__$1;
(statearr_30748_32529[(2)] = null);

(statearr_30748_32529[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30724 === (2))){
var inst_30696 = (state_30723[(7)]);
var state_30723__$1 = state_30723;
if(cljs.core.truth_(inst_30696)){
var statearr_30753_32530 = state_30723__$1;
(statearr_30753_32530[(1)] = (4));

} else {
var statearr_30754_32531 = state_30723__$1;
(statearr_30754_32531[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30724 === (11))){
var inst_30714 = cljs.core.async.close_BANG_(ch);
var state_30723__$1 = state_30723;
var statearr_30758_32532 = state_30723__$1;
(statearr_30758_32532[(2)] = inst_30714);

(statearr_30758_32532[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30724 === (9))){
var state_30723__$1 = state_30723;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30760_32533 = state_30723__$1;
(statearr_30760_32533[(1)] = (11));

} else {
var statearr_30763_32534 = state_30723__$1;
(statearr_30763_32534[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30724 === (5))){
var inst_30696 = (state_30723[(7)]);
var state_30723__$1 = state_30723;
var statearr_30766_32535 = state_30723__$1;
(statearr_30766_32535[(2)] = inst_30696);

(statearr_30766_32535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30724 === (10))){
var inst_30719 = (state_30723[(2)]);
var state_30723__$1 = state_30723;
var statearr_30769_32536 = state_30723__$1;
(statearr_30769_32536[(2)] = inst_30719);

(statearr_30769_32536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30724 === (8))){
var inst_30696 = (state_30723[(7)]);
var inst_30708 = cljs.core.next(inst_30696);
var inst_30696__$1 = inst_30708;
var state_30723__$1 = (function (){var statearr_30772 = state_30723;
(statearr_30772[(7)] = inst_30696__$1);

return statearr_30772;
})();
var statearr_30773_32537 = state_30723__$1;
(statearr_30773_32537[(2)] = null);

(statearr_30773_32537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29715__auto__ = null;
var cljs$core$async$state_machine__29715__auto____0 = (function (){
var statearr_30776 = [null,null,null,null,null,null,null,null];
(statearr_30776[(0)] = cljs$core$async$state_machine__29715__auto__);

(statearr_30776[(1)] = (1));

return statearr_30776;
});
var cljs$core$async$state_machine__29715__auto____1 = (function (state_30723){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_30723);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e30777){var ex__29718__auto__ = e30777;
var statearr_30778_32547 = state_30723;
(statearr_30778_32547[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_30723[(4)]))){
var statearr_30779_32548 = state_30723;
(statearr_30779_32548[(1)] = cljs.core.first((state_30723[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32549 = state_30723;
state_30723 = G__32549;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$state_machine__29715__auto__ = function(state_30723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29715__auto____1.call(this,state_30723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29715__auto____0;
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29715__auto____1;
return cljs$core$async$state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_30800 = f__29878__auto__();
(statearr_30800[(6)] = c__29877__auto__);

return statearr_30800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));

return c__29877__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30813 = arguments.length;
switch (G__30813) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32552 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32552(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32557 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32557(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32558 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32558(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32559 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32559(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30903 = (function (ch,cs,meta30904){
this.ch = ch;
this.cs = cs;
this.meta30904 = meta30904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30905,meta30904__$1){
var self__ = this;
var _30905__$1 = this;
return (new cljs.core.async.t_cljs$core$async30903(self__.ch,self__.cs,meta30904__$1));
}));

(cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30905){
var self__ = this;
var _30905__$1 = this;
return self__.meta30904;
}));

(cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30903.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30904","meta30904",-406672184,null)], null);
}));

(cljs.core.async.t_cljs$core$async30903.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30903");

(cljs.core.async.t_cljs$core$async30903.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30903");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30903.
 */
cljs.core.async.__GT_t_cljs$core$async30903 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30903(ch__$1,cs__$1,meta30904){
return (new cljs.core.async.t_cljs$core$async30903(ch__$1,cs__$1,meta30904));
});

}

return (new cljs.core.async.t_cljs$core$async30903(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29877__auto___32581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_31084){
var state_val_31085 = (state_31084[(1)]);
if((state_val_31085 === (7))){
var inst_31080 = (state_31084[(2)]);
var state_31084__$1 = state_31084;
var statearr_31086_32582 = state_31084__$1;
(statearr_31086_32582[(2)] = inst_31080);

(statearr_31086_32582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (20))){
var inst_30957 = (state_31084[(7)]);
var inst_30969 = cljs.core.first(inst_30957);
var inst_30970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30969,(0),null);
var inst_30971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30969,(1),null);
var state_31084__$1 = (function (){var statearr_31087 = state_31084;
(statearr_31087[(8)] = inst_30970);

return statearr_31087;
})();
if(cljs.core.truth_(inst_30971)){
var statearr_31088_32583 = state_31084__$1;
(statearr_31088_32583[(1)] = (22));

} else {
var statearr_31089_32584 = state_31084__$1;
(statearr_31089_32584[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (27))){
var inst_31004 = (state_31084[(9)]);
var inst_30925 = (state_31084[(10)]);
var inst_31024 = (state_31084[(11)]);
var inst_31002 = (state_31084[(12)]);
var inst_31024__$1 = cljs.core._nth(inst_31002,inst_31004);
var inst_31029 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31024__$1,inst_30925,done);
var state_31084__$1 = (function (){var statearr_31090 = state_31084;
(statearr_31090[(11)] = inst_31024__$1);

return statearr_31090;
})();
if(cljs.core.truth_(inst_31029)){
var statearr_31091_32585 = state_31084__$1;
(statearr_31091_32585[(1)] = (30));

} else {
var statearr_31092_32586 = state_31084__$1;
(statearr_31092_32586[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (1))){
var state_31084__$1 = state_31084;
var statearr_31093_32587 = state_31084__$1;
(statearr_31093_32587[(2)] = null);

(statearr_31093_32587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (24))){
var inst_30957 = (state_31084[(7)]);
var inst_30976 = (state_31084[(2)]);
var inst_30977 = cljs.core.next(inst_30957);
var inst_30934 = inst_30977;
var inst_30935 = null;
var inst_30936 = (0);
var inst_30937 = (0);
var state_31084__$1 = (function (){var statearr_31094 = state_31084;
(statearr_31094[(13)] = inst_30936);

(statearr_31094[(14)] = inst_30937);

(statearr_31094[(15)] = inst_30934);

(statearr_31094[(16)] = inst_30976);

(statearr_31094[(17)] = inst_30935);

return statearr_31094;
})();
var statearr_31095_32590 = state_31084__$1;
(statearr_31095_32590[(2)] = null);

(statearr_31095_32590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (39))){
var state_31084__$1 = state_31084;
var statearr_31099_32591 = state_31084__$1;
(statearr_31099_32591[(2)] = null);

(statearr_31099_32591[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (4))){
var inst_30925 = (state_31084[(10)]);
var inst_30925__$1 = (state_31084[(2)]);
var inst_30926 = (inst_30925__$1 == null);
var state_31084__$1 = (function (){var statearr_31100 = state_31084;
(statearr_31100[(10)] = inst_30925__$1);

return statearr_31100;
})();
if(cljs.core.truth_(inst_30926)){
var statearr_31101_32602 = state_31084__$1;
(statearr_31101_32602[(1)] = (5));

} else {
var statearr_31102_32603 = state_31084__$1;
(statearr_31102_32603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (15))){
var inst_30936 = (state_31084[(13)]);
var inst_30937 = (state_31084[(14)]);
var inst_30934 = (state_31084[(15)]);
var inst_30935 = (state_31084[(17)]);
var inst_30953 = (state_31084[(2)]);
var inst_30954 = (inst_30937 + (1));
var tmp31096 = inst_30936;
var tmp31097 = inst_30934;
var tmp31098 = inst_30935;
var inst_30934__$1 = tmp31097;
var inst_30935__$1 = tmp31098;
var inst_30936__$1 = tmp31096;
var inst_30937__$1 = inst_30954;
var state_31084__$1 = (function (){var statearr_31103 = state_31084;
(statearr_31103[(13)] = inst_30936__$1);

(statearr_31103[(14)] = inst_30937__$1);

(statearr_31103[(15)] = inst_30934__$1);

(statearr_31103[(17)] = inst_30935__$1);

(statearr_31103[(18)] = inst_30953);

return statearr_31103;
})();
var statearr_31104_32605 = state_31084__$1;
(statearr_31104_32605[(2)] = null);

(statearr_31104_32605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (21))){
var inst_30980 = (state_31084[(2)]);
var state_31084__$1 = state_31084;
var statearr_31108_32606 = state_31084__$1;
(statearr_31108_32606[(2)] = inst_30980);

(statearr_31108_32606[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (31))){
var inst_31024 = (state_31084[(11)]);
var inst_31032 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31024);
var state_31084__$1 = state_31084;
var statearr_31109_32607 = state_31084__$1;
(statearr_31109_32607[(2)] = inst_31032);

(statearr_31109_32607[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (32))){
var inst_31004 = (state_31084[(9)]);
var inst_31002 = (state_31084[(12)]);
var inst_31001 = (state_31084[(19)]);
var inst_31003 = (state_31084[(20)]);
var inst_31034 = (state_31084[(2)]);
var inst_31035 = (inst_31004 + (1));
var tmp31105 = inst_31002;
var tmp31106 = inst_31001;
var tmp31107 = inst_31003;
var inst_31001__$1 = tmp31106;
var inst_31002__$1 = tmp31105;
var inst_31003__$1 = tmp31107;
var inst_31004__$1 = inst_31035;
var state_31084__$1 = (function (){var statearr_31110 = state_31084;
(statearr_31110[(9)] = inst_31004__$1);

(statearr_31110[(21)] = inst_31034);

(statearr_31110[(12)] = inst_31002__$1);

(statearr_31110[(19)] = inst_31001__$1);

(statearr_31110[(20)] = inst_31003__$1);

return statearr_31110;
})();
var statearr_31111_32609 = state_31084__$1;
(statearr_31111_32609[(2)] = null);

(statearr_31111_32609[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (40))){
var inst_31050 = (state_31084[(22)]);
var inst_31054 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31050);
var state_31084__$1 = state_31084;
var statearr_31112_32611 = state_31084__$1;
(statearr_31112_32611[(2)] = inst_31054);

(statearr_31112_32611[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (33))){
var inst_31038 = (state_31084[(23)]);
var inst_31040 = cljs.core.chunked_seq_QMARK_(inst_31038);
var state_31084__$1 = state_31084;
if(inst_31040){
var statearr_31113_32612 = state_31084__$1;
(statearr_31113_32612[(1)] = (36));

} else {
var statearr_31114_32613 = state_31084__$1;
(statearr_31114_32613[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (13))){
var inst_30947 = (state_31084[(24)]);
var inst_30950 = cljs.core.async.close_BANG_(inst_30947);
var state_31084__$1 = state_31084;
var statearr_31115_32614 = state_31084__$1;
(statearr_31115_32614[(2)] = inst_30950);

(statearr_31115_32614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (22))){
var inst_30970 = (state_31084[(8)]);
var inst_30973 = cljs.core.async.close_BANG_(inst_30970);
var state_31084__$1 = state_31084;
var statearr_31116_32615 = state_31084__$1;
(statearr_31116_32615[(2)] = inst_30973);

(statearr_31116_32615[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (36))){
var inst_31038 = (state_31084[(23)]);
var inst_31042 = cljs.core.chunk_first(inst_31038);
var inst_31043 = cljs.core.chunk_rest(inst_31038);
var inst_31044 = cljs.core.count(inst_31042);
var inst_31001 = inst_31043;
var inst_31002 = inst_31042;
var inst_31003 = inst_31044;
var inst_31004 = (0);
var state_31084__$1 = (function (){var statearr_31117 = state_31084;
(statearr_31117[(9)] = inst_31004);

(statearr_31117[(12)] = inst_31002);

(statearr_31117[(19)] = inst_31001);

(statearr_31117[(20)] = inst_31003);

return statearr_31117;
})();
var statearr_31118_32620 = state_31084__$1;
(statearr_31118_32620[(2)] = null);

(statearr_31118_32620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (41))){
var inst_31038 = (state_31084[(23)]);
var inst_31056 = (state_31084[(2)]);
var inst_31057 = cljs.core.next(inst_31038);
var inst_31001 = inst_31057;
var inst_31002 = null;
var inst_31003 = (0);
var inst_31004 = (0);
var state_31084__$1 = (function (){var statearr_31119 = state_31084;
(statearr_31119[(9)] = inst_31004);

(statearr_31119[(12)] = inst_31002);

(statearr_31119[(25)] = inst_31056);

(statearr_31119[(19)] = inst_31001);

(statearr_31119[(20)] = inst_31003);

return statearr_31119;
})();
var statearr_31120_32621 = state_31084__$1;
(statearr_31120_32621[(2)] = null);

(statearr_31120_32621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (43))){
var state_31084__$1 = state_31084;
var statearr_31121_32622 = state_31084__$1;
(statearr_31121_32622[(2)] = null);

(statearr_31121_32622[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (29))){
var inst_31065 = (state_31084[(2)]);
var state_31084__$1 = state_31084;
var statearr_31122_32623 = state_31084__$1;
(statearr_31122_32623[(2)] = inst_31065);

(statearr_31122_32623[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (44))){
var inst_31077 = (state_31084[(2)]);
var state_31084__$1 = (function (){var statearr_31123 = state_31084;
(statearr_31123[(26)] = inst_31077);

return statearr_31123;
})();
var statearr_31124_32624 = state_31084__$1;
(statearr_31124_32624[(2)] = null);

(statearr_31124_32624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (6))){
var inst_30992 = (state_31084[(27)]);
var inst_30991 = cljs.core.deref(cs);
var inst_30992__$1 = cljs.core.keys(inst_30991);
var inst_30993 = cljs.core.count(inst_30992__$1);
var inst_30994 = cljs.core.reset_BANG_(dctr,inst_30993);
var inst_31000 = cljs.core.seq(inst_30992__$1);
var inst_31001 = inst_31000;
var inst_31002 = null;
var inst_31003 = (0);
var inst_31004 = (0);
var state_31084__$1 = (function (){var statearr_31125 = state_31084;
(statearr_31125[(27)] = inst_30992__$1);

(statearr_31125[(9)] = inst_31004);

(statearr_31125[(28)] = inst_30994);

(statearr_31125[(12)] = inst_31002);

(statearr_31125[(19)] = inst_31001);

(statearr_31125[(20)] = inst_31003);

return statearr_31125;
})();
var statearr_31126_32625 = state_31084__$1;
(statearr_31126_32625[(2)] = null);

(statearr_31126_32625[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (28))){
var inst_31038 = (state_31084[(23)]);
var inst_31001 = (state_31084[(19)]);
var inst_31038__$1 = cljs.core.seq(inst_31001);
var state_31084__$1 = (function (){var statearr_31127 = state_31084;
(statearr_31127[(23)] = inst_31038__$1);

return statearr_31127;
})();
if(inst_31038__$1){
var statearr_31128_32626 = state_31084__$1;
(statearr_31128_32626[(1)] = (33));

} else {
var statearr_31129_32627 = state_31084__$1;
(statearr_31129_32627[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (25))){
var inst_31004 = (state_31084[(9)]);
var inst_31003 = (state_31084[(20)]);
var inst_31021 = (inst_31004 < inst_31003);
var inst_31022 = inst_31021;
var state_31084__$1 = state_31084;
if(cljs.core.truth_(inst_31022)){
var statearr_31130_32628 = state_31084__$1;
(statearr_31130_32628[(1)] = (27));

} else {
var statearr_31131_32629 = state_31084__$1;
(statearr_31131_32629[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (34))){
var state_31084__$1 = state_31084;
var statearr_31132_32630 = state_31084__$1;
(statearr_31132_32630[(2)] = null);

(statearr_31132_32630[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (17))){
var state_31084__$1 = state_31084;
var statearr_31133_32634 = state_31084__$1;
(statearr_31133_32634[(2)] = null);

(statearr_31133_32634[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (3))){
var inst_31082 = (state_31084[(2)]);
var state_31084__$1 = state_31084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31084__$1,inst_31082);
} else {
if((state_val_31085 === (12))){
var inst_30985 = (state_31084[(2)]);
var state_31084__$1 = state_31084;
var statearr_31134_32635 = state_31084__$1;
(statearr_31134_32635[(2)] = inst_30985);

(statearr_31134_32635[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (2))){
var state_31084__$1 = state_31084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31084__$1,(4),ch);
} else {
if((state_val_31085 === (23))){
var state_31084__$1 = state_31084;
var statearr_31135_32636 = state_31084__$1;
(statearr_31135_32636[(2)] = null);

(statearr_31135_32636[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (35))){
var inst_31063 = (state_31084[(2)]);
var state_31084__$1 = state_31084;
var statearr_31136_32637 = state_31084__$1;
(statearr_31136_32637[(2)] = inst_31063);

(statearr_31136_32637[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (19))){
var inst_30957 = (state_31084[(7)]);
var inst_30961 = cljs.core.chunk_first(inst_30957);
var inst_30962 = cljs.core.chunk_rest(inst_30957);
var inst_30963 = cljs.core.count(inst_30961);
var inst_30934 = inst_30962;
var inst_30935 = inst_30961;
var inst_30936 = inst_30963;
var inst_30937 = (0);
var state_31084__$1 = (function (){var statearr_31137 = state_31084;
(statearr_31137[(13)] = inst_30936);

(statearr_31137[(14)] = inst_30937);

(statearr_31137[(15)] = inst_30934);

(statearr_31137[(17)] = inst_30935);

return statearr_31137;
})();
var statearr_31138_32638 = state_31084__$1;
(statearr_31138_32638[(2)] = null);

(statearr_31138_32638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (11))){
var inst_30934 = (state_31084[(15)]);
var inst_30957 = (state_31084[(7)]);
var inst_30957__$1 = cljs.core.seq(inst_30934);
var state_31084__$1 = (function (){var statearr_31139 = state_31084;
(statearr_31139[(7)] = inst_30957__$1);

return statearr_31139;
})();
if(inst_30957__$1){
var statearr_31140_32639 = state_31084__$1;
(statearr_31140_32639[(1)] = (16));

} else {
var statearr_31141_32640 = state_31084__$1;
(statearr_31141_32640[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (9))){
var inst_30987 = (state_31084[(2)]);
var state_31084__$1 = state_31084;
var statearr_31142_32641 = state_31084__$1;
(statearr_31142_32641[(2)] = inst_30987);

(statearr_31142_32641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (5))){
var inst_30932 = cljs.core.deref(cs);
var inst_30933 = cljs.core.seq(inst_30932);
var inst_30934 = inst_30933;
var inst_30935 = null;
var inst_30936 = (0);
var inst_30937 = (0);
var state_31084__$1 = (function (){var statearr_31145 = state_31084;
(statearr_31145[(13)] = inst_30936);

(statearr_31145[(14)] = inst_30937);

(statearr_31145[(15)] = inst_30934);

(statearr_31145[(17)] = inst_30935);

return statearr_31145;
})();
var statearr_31147_32653 = state_31084__$1;
(statearr_31147_32653[(2)] = null);

(statearr_31147_32653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (14))){
var state_31084__$1 = state_31084;
var statearr_31148_32659 = state_31084__$1;
(statearr_31148_32659[(2)] = null);

(statearr_31148_32659[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (45))){
var inst_31074 = (state_31084[(2)]);
var state_31084__$1 = state_31084;
var statearr_31150_32665 = state_31084__$1;
(statearr_31150_32665[(2)] = inst_31074);

(statearr_31150_32665[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (26))){
var inst_30992 = (state_31084[(27)]);
var inst_31067 = (state_31084[(2)]);
var inst_31068 = cljs.core.seq(inst_30992);
var state_31084__$1 = (function (){var statearr_31151 = state_31084;
(statearr_31151[(29)] = inst_31067);

return statearr_31151;
})();
if(inst_31068){
var statearr_31152_32673 = state_31084__$1;
(statearr_31152_32673[(1)] = (42));

} else {
var statearr_31153_32678 = state_31084__$1;
(statearr_31153_32678[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (16))){
var inst_30957 = (state_31084[(7)]);
var inst_30959 = cljs.core.chunked_seq_QMARK_(inst_30957);
var state_31084__$1 = state_31084;
if(inst_30959){
var statearr_31154_32686 = state_31084__$1;
(statearr_31154_32686[(1)] = (19));

} else {
var statearr_31155_32687 = state_31084__$1;
(statearr_31155_32687[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (38))){
var inst_31060 = (state_31084[(2)]);
var state_31084__$1 = state_31084;
var statearr_31156_32691 = state_31084__$1;
(statearr_31156_32691[(2)] = inst_31060);

(statearr_31156_32691[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (30))){
var state_31084__$1 = state_31084;
var statearr_31157_32696 = state_31084__$1;
(statearr_31157_32696[(2)] = null);

(statearr_31157_32696[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (10))){
var inst_30937 = (state_31084[(14)]);
var inst_30935 = (state_31084[(17)]);
var inst_30945 = cljs.core._nth(inst_30935,inst_30937);
var inst_30947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30945,(0),null);
var inst_30948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30945,(1),null);
var state_31084__$1 = (function (){var statearr_31163 = state_31084;
(statearr_31163[(24)] = inst_30947);

return statearr_31163;
})();
if(cljs.core.truth_(inst_30948)){
var statearr_31164_32697 = state_31084__$1;
(statearr_31164_32697[(1)] = (13));

} else {
var statearr_31165_32698 = state_31084__$1;
(statearr_31165_32698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (18))){
var inst_30983 = (state_31084[(2)]);
var state_31084__$1 = state_31084;
var statearr_31166_32701 = state_31084__$1;
(statearr_31166_32701[(2)] = inst_30983);

(statearr_31166_32701[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (42))){
var state_31084__$1 = state_31084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31084__$1,(45),dchan);
} else {
if((state_val_31085 === (37))){
var inst_31050 = (state_31084[(22)]);
var inst_31038 = (state_31084[(23)]);
var inst_30925 = (state_31084[(10)]);
var inst_31050__$1 = cljs.core.first(inst_31038);
var inst_31051 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31050__$1,inst_30925,done);
var state_31084__$1 = (function (){var statearr_31167 = state_31084;
(statearr_31167[(22)] = inst_31050__$1);

return statearr_31167;
})();
if(cljs.core.truth_(inst_31051)){
var statearr_31169_32702 = state_31084__$1;
(statearr_31169_32702[(1)] = (39));

} else {
var statearr_31170_32703 = state_31084__$1;
(statearr_31170_32703[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (8))){
var inst_30936 = (state_31084[(13)]);
var inst_30937 = (state_31084[(14)]);
var inst_30939 = (inst_30937 < inst_30936);
var inst_30940 = inst_30939;
var state_31084__$1 = state_31084;
if(cljs.core.truth_(inst_30940)){
var statearr_31171_32704 = state_31084__$1;
(statearr_31171_32704[(1)] = (10));

} else {
var statearr_31172_32705 = state_31084__$1;
(statearr_31172_32705[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29715__auto__ = null;
var cljs$core$async$mult_$_state_machine__29715__auto____0 = (function (){
var statearr_31175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31175[(0)] = cljs$core$async$mult_$_state_machine__29715__auto__);

(statearr_31175[(1)] = (1));

return statearr_31175;
});
var cljs$core$async$mult_$_state_machine__29715__auto____1 = (function (state_31084){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_31084);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e31176){var ex__29718__auto__ = e31176;
var statearr_31177_32706 = state_31084;
(statearr_31177_32706[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_31084[(4)]))){
var statearr_31178_32707 = state_31084;
(statearr_31178_32707[(1)] = cljs.core.first((state_31084[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32708 = state_31084;
state_31084 = G__32708;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29715__auto__ = function(state_31084){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29715__auto____1.call(this,state_31084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29715__auto____0;
cljs$core$async$mult_$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29715__auto____1;
return cljs$core$async$mult_$_state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_31179 = f__29878__auto__();
(statearr_31179[(6)] = c__29877__auto___32581);

return statearr_31179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31181 = arguments.length;
switch (G__31181) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32711 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32711(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32722 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32722(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32723 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32723(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32724 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32724(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32725 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32725(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32726 = arguments.length;
var i__4737__auto___32727 = (0);
while(true){
if((i__4737__auto___32727 < len__4736__auto___32726)){
args__4742__auto__.push((arguments[i__4737__auto___32727]));

var G__32728 = (i__4737__auto___32727 + (1));
i__4737__auto___32727 = G__32728;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31246){
var map__31247 = p__31246;
var map__31247__$1 = (((((!((map__31247 == null))))?(((((map__31247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31247):map__31247);
var opts = map__31247__$1;
var statearr_31249_32729 = state;
(statearr_31249_32729[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31250_32730 = state;
(statearr_31250_32730[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31251_32731 = state;
(statearr_31251_32731[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31238){
var G__31239 = cljs.core.first(seq31238);
var seq31238__$1 = cljs.core.next(seq31238);
var G__31240 = cljs.core.first(seq31238__$1);
var seq31238__$2 = cljs.core.next(seq31238__$1);
var G__31241 = cljs.core.first(seq31238__$2);
var seq31238__$3 = cljs.core.next(seq31238__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31239,G__31240,G__31241,seq31238__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31261 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31262){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31262 = meta31262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31263,meta31262__$1){
var self__ = this;
var _31263__$1 = this;
return (new cljs.core.async.t_cljs$core$async31261(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31262__$1));
}));

(cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31263){
var self__ = this;
var _31263__$1 = this;
return self__.meta31262;
}));

(cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31261.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31262","meta31262",2038700718,null)], null);
}));

(cljs.core.async.t_cljs$core$async31261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31261");

(cljs.core.async.t_cljs$core$async31261.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31261.
 */
cljs.core.async.__GT_t_cljs$core$async31261 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31261(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31262){
return (new cljs.core.async.t_cljs$core$async31261(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31262));
});

}

return (new cljs.core.async.t_cljs$core$async31261(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29877__auto___32732 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_31375){
var state_val_31376 = (state_31375[(1)]);
if((state_val_31376 === (7))){
var inst_31289 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31378_32740 = state_31375__$1;
(statearr_31378_32740[(2)] = inst_31289);

(statearr_31378_32740[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (20))){
var inst_31301 = (state_31375[(7)]);
var state_31375__$1 = state_31375;
var statearr_31379_32744 = state_31375__$1;
(statearr_31379_32744[(2)] = inst_31301);

(statearr_31379_32744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (27))){
var state_31375__$1 = state_31375;
var statearr_31380_32745 = state_31375__$1;
(statearr_31380_32745[(2)] = null);

(statearr_31380_32745[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (1))){
var inst_31275 = (state_31375[(8)]);
var inst_31275__$1 = calc_state();
var inst_31277 = (inst_31275__$1 == null);
var inst_31278 = cljs.core.not(inst_31277);
var state_31375__$1 = (function (){var statearr_31381 = state_31375;
(statearr_31381[(8)] = inst_31275__$1);

return statearr_31381;
})();
if(inst_31278){
var statearr_31382_32746 = state_31375__$1;
(statearr_31382_32746[(1)] = (2));

} else {
var statearr_31383_32747 = state_31375__$1;
(statearr_31383_32747[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (24))){
var inst_31326 = (state_31375[(9)]);
var inst_31349 = (state_31375[(10)]);
var inst_31335 = (state_31375[(11)]);
var inst_31349__$1 = (inst_31326.cljs$core$IFn$_invoke$arity$1 ? inst_31326.cljs$core$IFn$_invoke$arity$1(inst_31335) : inst_31326.call(null,inst_31335));
var state_31375__$1 = (function (){var statearr_31385 = state_31375;
(statearr_31385[(10)] = inst_31349__$1);

return statearr_31385;
})();
if(cljs.core.truth_(inst_31349__$1)){
var statearr_31387_32751 = state_31375__$1;
(statearr_31387_32751[(1)] = (29));

} else {
var statearr_31388_32752 = state_31375__$1;
(statearr_31388_32752[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (4))){
var inst_31292 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
if(cljs.core.truth_(inst_31292)){
var statearr_31389_32753 = state_31375__$1;
(statearr_31389_32753[(1)] = (8));

} else {
var statearr_31390_32754 = state_31375__$1;
(statearr_31390_32754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (15))){
var inst_31320 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
if(cljs.core.truth_(inst_31320)){
var statearr_31391_32758 = state_31375__$1;
(statearr_31391_32758[(1)] = (19));

} else {
var statearr_31392_32759 = state_31375__$1;
(statearr_31392_32759[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (21))){
var inst_31325 = (state_31375[(12)]);
var inst_31325__$1 = (state_31375[(2)]);
var inst_31326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31325__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31325__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31325__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31375__$1 = (function (){var statearr_31393 = state_31375;
(statearr_31393[(9)] = inst_31326);

(statearr_31393[(12)] = inst_31325__$1);

(statearr_31393[(13)] = inst_31327);

return statearr_31393;
})();
return cljs.core.async.ioc_alts_BANG_(state_31375__$1,(22),inst_31328);
} else {
if((state_val_31376 === (31))){
var inst_31357 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
if(cljs.core.truth_(inst_31357)){
var statearr_31394_32760 = state_31375__$1;
(statearr_31394_32760[(1)] = (32));

} else {
var statearr_31395_32761 = state_31375__$1;
(statearr_31395_32761[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (32))){
var inst_31334 = (state_31375[(14)]);
var state_31375__$1 = state_31375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31375__$1,(35),out,inst_31334);
} else {
if((state_val_31376 === (33))){
var inst_31325 = (state_31375[(12)]);
var inst_31301 = inst_31325;
var state_31375__$1 = (function (){var statearr_31396 = state_31375;
(statearr_31396[(7)] = inst_31301);

return statearr_31396;
})();
var statearr_31397_32765 = state_31375__$1;
(statearr_31397_32765[(2)] = null);

(statearr_31397_32765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (13))){
var inst_31301 = (state_31375[(7)]);
var inst_31309 = inst_31301.cljs$lang$protocol_mask$partition0$;
var inst_31310 = (inst_31309 & (64));
var inst_31311 = inst_31301.cljs$core$ISeq$;
var inst_31312 = (cljs.core.PROTOCOL_SENTINEL === inst_31311);
var inst_31313 = ((inst_31310) || (inst_31312));
var state_31375__$1 = state_31375;
if(cljs.core.truth_(inst_31313)){
var statearr_31401_32766 = state_31375__$1;
(statearr_31401_32766[(1)] = (16));

} else {
var statearr_31403_32767 = state_31375__$1;
(statearr_31403_32767[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (22))){
var inst_31334 = (state_31375[(14)]);
var inst_31335 = (state_31375[(11)]);
var inst_31333 = (state_31375[(2)]);
var inst_31334__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31333,(0),null);
var inst_31335__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31333,(1),null);
var inst_31336 = (inst_31334__$1 == null);
var inst_31337 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31335__$1,change);
var inst_31338 = ((inst_31336) || (inst_31337));
var state_31375__$1 = (function (){var statearr_31405 = state_31375;
(statearr_31405[(14)] = inst_31334__$1);

(statearr_31405[(11)] = inst_31335__$1);

return statearr_31405;
})();
if(cljs.core.truth_(inst_31338)){
var statearr_31406_32769 = state_31375__$1;
(statearr_31406_32769[(1)] = (23));

} else {
var statearr_31407_32770 = state_31375__$1;
(statearr_31407_32770[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (36))){
var inst_31325 = (state_31375[(12)]);
var inst_31301 = inst_31325;
var state_31375__$1 = (function (){var statearr_31408 = state_31375;
(statearr_31408[(7)] = inst_31301);

return statearr_31408;
})();
var statearr_31409_32771 = state_31375__$1;
(statearr_31409_32771[(2)] = null);

(statearr_31409_32771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (29))){
var inst_31349 = (state_31375[(10)]);
var state_31375__$1 = state_31375;
var statearr_31411_32772 = state_31375__$1;
(statearr_31411_32772[(2)] = inst_31349);

(statearr_31411_32772[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (6))){
var state_31375__$1 = state_31375;
var statearr_31412_32773 = state_31375__$1;
(statearr_31412_32773[(2)] = false);

(statearr_31412_32773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (28))){
var inst_31345 = (state_31375[(2)]);
var inst_31346 = calc_state();
var inst_31301 = inst_31346;
var state_31375__$1 = (function (){var statearr_31413 = state_31375;
(statearr_31413[(15)] = inst_31345);

(statearr_31413[(7)] = inst_31301);

return statearr_31413;
})();
var statearr_31414_32774 = state_31375__$1;
(statearr_31414_32774[(2)] = null);

(statearr_31414_32774[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (25))){
var inst_31371 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31415_32778 = state_31375__$1;
(statearr_31415_32778[(2)] = inst_31371);

(statearr_31415_32778[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (34))){
var inst_31369 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31417_32785 = state_31375__$1;
(statearr_31417_32785[(2)] = inst_31369);

(statearr_31417_32785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (17))){
var state_31375__$1 = state_31375;
var statearr_31419_32786 = state_31375__$1;
(statearr_31419_32786[(2)] = false);

(statearr_31419_32786[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (3))){
var state_31375__$1 = state_31375;
var statearr_31421_32787 = state_31375__$1;
(statearr_31421_32787[(2)] = false);

(statearr_31421_32787[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (12))){
var inst_31373 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31375__$1,inst_31373);
} else {
if((state_val_31376 === (2))){
var inst_31275 = (state_31375[(8)]);
var inst_31281 = inst_31275.cljs$lang$protocol_mask$partition0$;
var inst_31282 = (inst_31281 & (64));
var inst_31283 = inst_31275.cljs$core$ISeq$;
var inst_31284 = (cljs.core.PROTOCOL_SENTINEL === inst_31283);
var inst_31285 = ((inst_31282) || (inst_31284));
var state_31375__$1 = state_31375;
if(cljs.core.truth_(inst_31285)){
var statearr_31422_32794 = state_31375__$1;
(statearr_31422_32794[(1)] = (5));

} else {
var statearr_31423_32795 = state_31375__$1;
(statearr_31423_32795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (23))){
var inst_31334 = (state_31375[(14)]);
var inst_31340 = (inst_31334 == null);
var state_31375__$1 = state_31375;
if(cljs.core.truth_(inst_31340)){
var statearr_31425_32796 = state_31375__$1;
(statearr_31425_32796[(1)] = (26));

} else {
var statearr_31426_32797 = state_31375__$1;
(statearr_31426_32797[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (35))){
var inst_31360 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
if(cljs.core.truth_(inst_31360)){
var statearr_31427_32799 = state_31375__$1;
(statearr_31427_32799[(1)] = (36));

} else {
var statearr_31428_32803 = state_31375__$1;
(statearr_31428_32803[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (19))){
var inst_31301 = (state_31375[(7)]);
var inst_31322 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31301);
var state_31375__$1 = state_31375;
var statearr_31429_32804 = state_31375__$1;
(statearr_31429_32804[(2)] = inst_31322);

(statearr_31429_32804[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (11))){
var inst_31301 = (state_31375[(7)]);
var inst_31305 = (inst_31301 == null);
var inst_31306 = cljs.core.not(inst_31305);
var state_31375__$1 = state_31375;
if(inst_31306){
var statearr_31430_32808 = state_31375__$1;
(statearr_31430_32808[(1)] = (13));

} else {
var statearr_31431_32809 = state_31375__$1;
(statearr_31431_32809[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (9))){
var inst_31275 = (state_31375[(8)]);
var state_31375__$1 = state_31375;
var statearr_31432_32810 = state_31375__$1;
(statearr_31432_32810[(2)] = inst_31275);

(statearr_31432_32810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (5))){
var state_31375__$1 = state_31375;
var statearr_31433_32811 = state_31375__$1;
(statearr_31433_32811[(2)] = true);

(statearr_31433_32811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (14))){
var state_31375__$1 = state_31375;
var statearr_31434_32812 = state_31375__$1;
(statearr_31434_32812[(2)] = false);

(statearr_31434_32812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (26))){
var inst_31335 = (state_31375[(11)]);
var inst_31342 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31335);
var state_31375__$1 = state_31375;
var statearr_31435_32813 = state_31375__$1;
(statearr_31435_32813[(2)] = inst_31342);

(statearr_31435_32813[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (16))){
var state_31375__$1 = state_31375;
var statearr_31436_32820 = state_31375__$1;
(statearr_31436_32820[(2)] = true);

(statearr_31436_32820[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (38))){
var inst_31365 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31437_32821 = state_31375__$1;
(statearr_31437_32821[(2)] = inst_31365);

(statearr_31437_32821[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (30))){
var inst_31326 = (state_31375[(9)]);
var inst_31335 = (state_31375[(11)]);
var inst_31327 = (state_31375[(13)]);
var inst_31352 = cljs.core.empty_QMARK_(inst_31326);
var inst_31353 = (inst_31327.cljs$core$IFn$_invoke$arity$1 ? inst_31327.cljs$core$IFn$_invoke$arity$1(inst_31335) : inst_31327.call(null,inst_31335));
var inst_31354 = cljs.core.not(inst_31353);
var inst_31355 = ((inst_31352) && (inst_31354));
var state_31375__$1 = state_31375;
var statearr_31438_32822 = state_31375__$1;
(statearr_31438_32822[(2)] = inst_31355);

(statearr_31438_32822[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (10))){
var inst_31275 = (state_31375[(8)]);
var inst_31297 = (state_31375[(2)]);
var inst_31298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31297,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31297,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31297,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31301 = inst_31275;
var state_31375__$1 = (function (){var statearr_31439 = state_31375;
(statearr_31439[(7)] = inst_31301);

(statearr_31439[(16)] = inst_31299);

(statearr_31439[(17)] = inst_31300);

(statearr_31439[(18)] = inst_31298);

return statearr_31439;
})();
var statearr_31440_32823 = state_31375__$1;
(statearr_31440_32823[(2)] = null);

(statearr_31440_32823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (18))){
var inst_31317 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31441_32824 = state_31375__$1;
(statearr_31441_32824[(2)] = inst_31317);

(statearr_31441_32824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (37))){
var state_31375__$1 = state_31375;
var statearr_31442_32825 = state_31375__$1;
(statearr_31442_32825[(2)] = null);

(statearr_31442_32825[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (8))){
var inst_31275 = (state_31375[(8)]);
var inst_31294 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31275);
var state_31375__$1 = state_31375;
var statearr_31443_32834 = state_31375__$1;
(statearr_31443_32834[(2)] = inst_31294);

(statearr_31443_32834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29715__auto__ = null;
var cljs$core$async$mix_$_state_machine__29715__auto____0 = (function (){
var statearr_31444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31444[(0)] = cljs$core$async$mix_$_state_machine__29715__auto__);

(statearr_31444[(1)] = (1));

return statearr_31444;
});
var cljs$core$async$mix_$_state_machine__29715__auto____1 = (function (state_31375){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_31375);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e31445){var ex__29718__auto__ = e31445;
var statearr_31446_32835 = state_31375;
(statearr_31446_32835[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_31375[(4)]))){
var statearr_31447_32836 = state_31375;
(statearr_31447_32836[(1)] = cljs.core.first((state_31375[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32837 = state_31375;
state_31375 = G__32837;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29715__auto__ = function(state_31375){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29715__auto____1.call(this,state_31375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29715__auto____0;
cljs$core$async$mix_$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29715__auto____1;
return cljs$core$async$mix_$_state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_31448 = f__29878__auto__();
(statearr_31448[(6)] = c__29877__auto___32732);

return statearr_31448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_32838 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32838(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32839 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32839(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32846 = (function() {
var G__32847 = null;
var G__32847__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32847__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32847 = function(p,v){
switch(arguments.length){
case 1:
return G__32847__1.call(this,p);
case 2:
return G__32847__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32847.cljs$core$IFn$_invoke$arity$1 = G__32847__1;
G__32847.cljs$core$IFn$_invoke$arity$2 = G__32847__2;
return G__32847;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31450 = arguments.length;
switch (G__31450) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32846(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32846(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31453 = arguments.length;
switch (G__31453) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31451_SHARP_){
if(cljs.core.truth_((p1__31451_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31451_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31451_SHARP_.call(null,topic)))){
return p1__31451_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31451_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31454 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31454 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31455){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31455 = meta31455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31456,meta31455__$1){
var self__ = this;
var _31456__$1 = this;
return (new cljs.core.async.t_cljs$core$async31454(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31455__$1));
}));

(cljs.core.async.t_cljs$core$async31454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31456){
var self__ = this;
var _31456__$1 = this;
return self__.meta31455;
}));

(cljs.core.async.t_cljs$core$async31454.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31454.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31454.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31454.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31454.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31454.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31454.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31455","meta31455",-38333954,null)], null);
}));

(cljs.core.async.t_cljs$core$async31454.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31454");

(cljs.core.async.t_cljs$core$async31454.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31454");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31454.
 */
cljs.core.async.__GT_t_cljs$core$async31454 = (function cljs$core$async$__GT_t_cljs$core$async31454(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31455){
return (new cljs.core.async.t_cljs$core$async31454(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31455));
});

}

return (new cljs.core.async.t_cljs$core$async31454(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29877__auto___32855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_31528){
var state_val_31529 = (state_31528[(1)]);
if((state_val_31529 === (7))){
var inst_31524 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
var statearr_31530_32856 = state_31528__$1;
(statearr_31530_32856[(2)] = inst_31524);

(statearr_31530_32856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (20))){
var state_31528__$1 = state_31528;
var statearr_31531_32857 = state_31528__$1;
(statearr_31531_32857[(2)] = null);

(statearr_31531_32857[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (1))){
var state_31528__$1 = state_31528;
var statearr_31532_32858 = state_31528__$1;
(statearr_31532_32858[(2)] = null);

(statearr_31532_32858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (24))){
var inst_31507 = (state_31528[(7)]);
var inst_31516 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31507);
var state_31528__$1 = state_31528;
var statearr_31533_32861 = state_31528__$1;
(statearr_31533_32861[(2)] = inst_31516);

(statearr_31533_32861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (4))){
var inst_31459 = (state_31528[(8)]);
var inst_31459__$1 = (state_31528[(2)]);
var inst_31460 = (inst_31459__$1 == null);
var state_31528__$1 = (function (){var statearr_31534 = state_31528;
(statearr_31534[(8)] = inst_31459__$1);

return statearr_31534;
})();
if(cljs.core.truth_(inst_31460)){
var statearr_31535_32862 = state_31528__$1;
(statearr_31535_32862[(1)] = (5));

} else {
var statearr_31536_32863 = state_31528__$1;
(statearr_31536_32863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (15))){
var inst_31501 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
var statearr_31537_32864 = state_31528__$1;
(statearr_31537_32864[(2)] = inst_31501);

(statearr_31537_32864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (21))){
var inst_31521 = (state_31528[(2)]);
var state_31528__$1 = (function (){var statearr_31538 = state_31528;
(statearr_31538[(9)] = inst_31521);

return statearr_31538;
})();
var statearr_31539_32865 = state_31528__$1;
(statearr_31539_32865[(2)] = null);

(statearr_31539_32865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (13))){
var inst_31483 = (state_31528[(10)]);
var inst_31485 = cljs.core.chunked_seq_QMARK_(inst_31483);
var state_31528__$1 = state_31528;
if(inst_31485){
var statearr_31540_32866 = state_31528__$1;
(statearr_31540_32866[(1)] = (16));

} else {
var statearr_31541_32867 = state_31528__$1;
(statearr_31541_32867[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (22))){
var inst_31513 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
if(cljs.core.truth_(inst_31513)){
var statearr_31542_32868 = state_31528__$1;
(statearr_31542_32868[(1)] = (23));

} else {
var statearr_31543_32869 = state_31528__$1;
(statearr_31543_32869[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (6))){
var inst_31507 = (state_31528[(7)]);
var inst_31459 = (state_31528[(8)]);
var inst_31509 = (state_31528[(11)]);
var inst_31507__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31459) : topic_fn.call(null,inst_31459));
var inst_31508 = cljs.core.deref(mults);
var inst_31509__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31508,inst_31507__$1);
var state_31528__$1 = (function (){var statearr_31544 = state_31528;
(statearr_31544[(7)] = inst_31507__$1);

(statearr_31544[(11)] = inst_31509__$1);

return statearr_31544;
})();
if(cljs.core.truth_(inst_31509__$1)){
var statearr_31545_32870 = state_31528__$1;
(statearr_31545_32870[(1)] = (19));

} else {
var statearr_31546_32871 = state_31528__$1;
(statearr_31546_32871[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (25))){
var inst_31518 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
var statearr_31547_32872 = state_31528__$1;
(statearr_31547_32872[(2)] = inst_31518);

(statearr_31547_32872[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (17))){
var inst_31483 = (state_31528[(10)]);
var inst_31492 = cljs.core.first(inst_31483);
var inst_31493 = cljs.core.async.muxch_STAR_(inst_31492);
var inst_31494 = cljs.core.async.close_BANG_(inst_31493);
var inst_31495 = cljs.core.next(inst_31483);
var inst_31469 = inst_31495;
var inst_31470 = null;
var inst_31471 = (0);
var inst_31472 = (0);
var state_31528__$1 = (function (){var statearr_31548 = state_31528;
(statearr_31548[(12)] = inst_31469);

(statearr_31548[(13)] = inst_31494);

(statearr_31548[(14)] = inst_31472);

(statearr_31548[(15)] = inst_31471);

(statearr_31548[(16)] = inst_31470);

return statearr_31548;
})();
var statearr_31549_32873 = state_31528__$1;
(statearr_31549_32873[(2)] = null);

(statearr_31549_32873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (3))){
var inst_31526 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31528__$1,inst_31526);
} else {
if((state_val_31529 === (12))){
var inst_31503 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
var statearr_31550_32874 = state_31528__$1;
(statearr_31550_32874[(2)] = inst_31503);

(statearr_31550_32874[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (2))){
var state_31528__$1 = state_31528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31528__$1,(4),ch);
} else {
if((state_val_31529 === (23))){
var state_31528__$1 = state_31528;
var statearr_31551_32875 = state_31528__$1;
(statearr_31551_32875[(2)] = null);

(statearr_31551_32875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (19))){
var inst_31459 = (state_31528[(8)]);
var inst_31509 = (state_31528[(11)]);
var inst_31511 = cljs.core.async.muxch_STAR_(inst_31509);
var state_31528__$1 = state_31528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31528__$1,(22),inst_31511,inst_31459);
} else {
if((state_val_31529 === (11))){
var inst_31469 = (state_31528[(12)]);
var inst_31483 = (state_31528[(10)]);
var inst_31483__$1 = cljs.core.seq(inst_31469);
var state_31528__$1 = (function (){var statearr_31552 = state_31528;
(statearr_31552[(10)] = inst_31483__$1);

return statearr_31552;
})();
if(inst_31483__$1){
var statearr_31553_32889 = state_31528__$1;
(statearr_31553_32889[(1)] = (13));

} else {
var statearr_31554_32890 = state_31528__$1;
(statearr_31554_32890[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (9))){
var inst_31505 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
var statearr_31555_32892 = state_31528__$1;
(statearr_31555_32892[(2)] = inst_31505);

(statearr_31555_32892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (5))){
var inst_31466 = cljs.core.deref(mults);
var inst_31467 = cljs.core.vals(inst_31466);
var inst_31468 = cljs.core.seq(inst_31467);
var inst_31469 = inst_31468;
var inst_31470 = null;
var inst_31471 = (0);
var inst_31472 = (0);
var state_31528__$1 = (function (){var statearr_31557 = state_31528;
(statearr_31557[(12)] = inst_31469);

(statearr_31557[(14)] = inst_31472);

(statearr_31557[(15)] = inst_31471);

(statearr_31557[(16)] = inst_31470);

return statearr_31557;
})();
var statearr_31558_32894 = state_31528__$1;
(statearr_31558_32894[(2)] = null);

(statearr_31558_32894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (14))){
var state_31528__$1 = state_31528;
var statearr_31562_32895 = state_31528__$1;
(statearr_31562_32895[(2)] = null);

(statearr_31562_32895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (16))){
var inst_31483 = (state_31528[(10)]);
var inst_31487 = cljs.core.chunk_first(inst_31483);
var inst_31488 = cljs.core.chunk_rest(inst_31483);
var inst_31489 = cljs.core.count(inst_31487);
var inst_31469 = inst_31488;
var inst_31470 = inst_31487;
var inst_31471 = inst_31489;
var inst_31472 = (0);
var state_31528__$1 = (function (){var statearr_31563 = state_31528;
(statearr_31563[(12)] = inst_31469);

(statearr_31563[(14)] = inst_31472);

(statearr_31563[(15)] = inst_31471);

(statearr_31563[(16)] = inst_31470);

return statearr_31563;
})();
var statearr_31564_32896 = state_31528__$1;
(statearr_31564_32896[(2)] = null);

(statearr_31564_32896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (10))){
var inst_31469 = (state_31528[(12)]);
var inst_31472 = (state_31528[(14)]);
var inst_31471 = (state_31528[(15)]);
var inst_31470 = (state_31528[(16)]);
var inst_31477 = cljs.core._nth(inst_31470,inst_31472);
var inst_31478 = cljs.core.async.muxch_STAR_(inst_31477);
var inst_31479 = cljs.core.async.close_BANG_(inst_31478);
var inst_31480 = (inst_31472 + (1));
var tmp31559 = inst_31469;
var tmp31560 = inst_31471;
var tmp31561 = inst_31470;
var inst_31469__$1 = tmp31559;
var inst_31470__$1 = tmp31561;
var inst_31471__$1 = tmp31560;
var inst_31472__$1 = inst_31480;
var state_31528__$1 = (function (){var statearr_31565 = state_31528;
(statearr_31565[(12)] = inst_31469__$1);

(statearr_31565[(14)] = inst_31472__$1);

(statearr_31565[(15)] = inst_31471__$1);

(statearr_31565[(17)] = inst_31479);

(statearr_31565[(16)] = inst_31470__$1);

return statearr_31565;
})();
var statearr_31567_32897 = state_31528__$1;
(statearr_31567_32897[(2)] = null);

(statearr_31567_32897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (18))){
var inst_31498 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
var statearr_31568_32898 = state_31528__$1;
(statearr_31568_32898[(2)] = inst_31498);

(statearr_31568_32898[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (8))){
var inst_31472 = (state_31528[(14)]);
var inst_31471 = (state_31528[(15)]);
var inst_31474 = (inst_31472 < inst_31471);
var inst_31475 = inst_31474;
var state_31528__$1 = state_31528;
if(cljs.core.truth_(inst_31475)){
var statearr_31569_32899 = state_31528__$1;
(statearr_31569_32899[(1)] = (10));

} else {
var statearr_31570_32900 = state_31528__$1;
(statearr_31570_32900[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29715__auto__ = null;
var cljs$core$async$state_machine__29715__auto____0 = (function (){
var statearr_31571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31571[(0)] = cljs$core$async$state_machine__29715__auto__);

(statearr_31571[(1)] = (1));

return statearr_31571;
});
var cljs$core$async$state_machine__29715__auto____1 = (function (state_31528){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_31528);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e31572){var ex__29718__auto__ = e31572;
var statearr_31573_32904 = state_31528;
(statearr_31573_32904[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_31528[(4)]))){
var statearr_31574_32906 = state_31528;
(statearr_31574_32906[(1)] = cljs.core.first((state_31528[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32907 = state_31528;
state_31528 = G__32907;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$state_machine__29715__auto__ = function(state_31528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29715__auto____1.call(this,state_31528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29715__auto____0;
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29715__auto____1;
return cljs$core$async$state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_31577 = f__29878__auto__();
(statearr_31577[(6)] = c__29877__auto___32855);

return statearr_31577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31583 = arguments.length;
switch (G__31583) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31587 = arguments.length;
switch (G__31587) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31605 = arguments.length;
switch (G__31605) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29877__auto___32912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_31650){
var state_val_31651 = (state_31650[(1)]);
if((state_val_31651 === (7))){
var state_31650__$1 = state_31650;
var statearr_31652_32913 = state_31650__$1;
(statearr_31652_32913[(2)] = null);

(statearr_31652_32913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (1))){
var state_31650__$1 = state_31650;
var statearr_31653_32914 = state_31650__$1;
(statearr_31653_32914[(2)] = null);

(statearr_31653_32914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (4))){
var inst_31610 = (state_31650[(7)]);
var inst_31609 = (state_31650[(8)]);
var inst_31612 = (inst_31610 < inst_31609);
var state_31650__$1 = state_31650;
if(cljs.core.truth_(inst_31612)){
var statearr_31654_32915 = state_31650__$1;
(statearr_31654_32915[(1)] = (6));

} else {
var statearr_31655_32916 = state_31650__$1;
(statearr_31655_32916[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (15))){
var inst_31636 = (state_31650[(9)]);
var inst_31641 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31636);
var state_31650__$1 = state_31650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31650__$1,(17),out,inst_31641);
} else {
if((state_val_31651 === (13))){
var inst_31636 = (state_31650[(9)]);
var inst_31636__$1 = (state_31650[(2)]);
var inst_31637 = cljs.core.some(cljs.core.nil_QMARK_,inst_31636__$1);
var state_31650__$1 = (function (){var statearr_31656 = state_31650;
(statearr_31656[(9)] = inst_31636__$1);

return statearr_31656;
})();
if(cljs.core.truth_(inst_31637)){
var statearr_31657_32918 = state_31650__$1;
(statearr_31657_32918[(1)] = (14));

} else {
var statearr_31658_32920 = state_31650__$1;
(statearr_31658_32920[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (6))){
var state_31650__$1 = state_31650;
var statearr_31659_32921 = state_31650__$1;
(statearr_31659_32921[(2)] = null);

(statearr_31659_32921[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (17))){
var inst_31643 = (state_31650[(2)]);
var state_31650__$1 = (function (){var statearr_31661 = state_31650;
(statearr_31661[(10)] = inst_31643);

return statearr_31661;
})();
var statearr_31662_32922 = state_31650__$1;
(statearr_31662_32922[(2)] = null);

(statearr_31662_32922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (3))){
var inst_31648 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31650__$1,inst_31648);
} else {
if((state_val_31651 === (12))){
var _ = (function (){var statearr_31663 = state_31650;
(statearr_31663[(4)] = cljs.core.rest((state_31650[(4)])));

return statearr_31663;
})();
var state_31650__$1 = state_31650;
var ex31660 = (state_31650__$1[(2)]);
var statearr_31664_32925 = state_31650__$1;
(statearr_31664_32925[(5)] = ex31660);


if((ex31660 instanceof Object)){
var statearr_31665_32926 = state_31650__$1;
(statearr_31665_32926[(1)] = (11));

(statearr_31665_32926[(5)] = null);

} else {
throw ex31660;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (2))){
var inst_31608 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31609 = cnt;
var inst_31610 = (0);
var state_31650__$1 = (function (){var statearr_31666 = state_31650;
(statearr_31666[(7)] = inst_31610);

(statearr_31666[(8)] = inst_31609);

(statearr_31666[(11)] = inst_31608);

return statearr_31666;
})();
var statearr_31667_32928 = state_31650__$1;
(statearr_31667_32928[(2)] = null);

(statearr_31667_32928[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (11))){
var inst_31615 = (state_31650[(2)]);
var inst_31616 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31650__$1 = (function (){var statearr_31668 = state_31650;
(statearr_31668[(12)] = inst_31615);

return statearr_31668;
})();
var statearr_31669_32929 = state_31650__$1;
(statearr_31669_32929[(2)] = inst_31616);

(statearr_31669_32929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (9))){
var inst_31610 = (state_31650[(7)]);
var _ = (function (){var statearr_31670 = state_31650;
(statearr_31670[(4)] = cljs.core.cons((12),(state_31650[(4)])));

return statearr_31670;
})();
var inst_31622 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31610) : chs__$1.call(null,inst_31610));
var inst_31623 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31610) : done.call(null,inst_31610));
var inst_31624 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31622,inst_31623);
var ___$1 = (function (){var statearr_31671 = state_31650;
(statearr_31671[(4)] = cljs.core.rest((state_31650[(4)])));

return statearr_31671;
})();
var state_31650__$1 = state_31650;
var statearr_31672_32931 = state_31650__$1;
(statearr_31672_32931[(2)] = inst_31624);

(statearr_31672_32931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (5))){
var inst_31634 = (state_31650[(2)]);
var state_31650__$1 = (function (){var statearr_31673 = state_31650;
(statearr_31673[(13)] = inst_31634);

return statearr_31673;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31650__$1,(13),dchan);
} else {
if((state_val_31651 === (14))){
var inst_31639 = cljs.core.async.close_BANG_(out);
var state_31650__$1 = state_31650;
var statearr_31674_32942 = state_31650__$1;
(statearr_31674_32942[(2)] = inst_31639);

(statearr_31674_32942[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (16))){
var inst_31646 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
var statearr_31675_32944 = state_31650__$1;
(statearr_31675_32944[(2)] = inst_31646);

(statearr_31675_32944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (10))){
var inst_31610 = (state_31650[(7)]);
var inst_31627 = (state_31650[(2)]);
var inst_31628 = (inst_31610 + (1));
var inst_31610__$1 = inst_31628;
var state_31650__$1 = (function (){var statearr_31676 = state_31650;
(statearr_31676[(7)] = inst_31610__$1);

(statearr_31676[(14)] = inst_31627);

return statearr_31676;
})();
var statearr_31677_32950 = state_31650__$1;
(statearr_31677_32950[(2)] = null);

(statearr_31677_32950[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (8))){
var inst_31632 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
var statearr_31678_32951 = state_31650__$1;
(statearr_31678_32951[(2)] = inst_31632);

(statearr_31678_32951[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29715__auto__ = null;
var cljs$core$async$state_machine__29715__auto____0 = (function (){
var statearr_31679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31679[(0)] = cljs$core$async$state_machine__29715__auto__);

(statearr_31679[(1)] = (1));

return statearr_31679;
});
var cljs$core$async$state_machine__29715__auto____1 = (function (state_31650){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_31650);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e31680){var ex__29718__auto__ = e31680;
var statearr_31681_32952 = state_31650;
(statearr_31681_32952[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_31650[(4)]))){
var statearr_31682_32953 = state_31650;
(statearr_31682_32953[(1)] = cljs.core.first((state_31650[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32954 = state_31650;
state_31650 = G__32954;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$state_machine__29715__auto__ = function(state_31650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29715__auto____1.call(this,state_31650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29715__auto____0;
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29715__auto____1;
return cljs$core$async$state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_31683 = f__29878__auto__();
(statearr_31683[(6)] = c__29877__auto___32912);

return statearr_31683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31686 = arguments.length;
switch (G__31686) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29877__auto___32964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_31718){
var state_val_31719 = (state_31718[(1)]);
if((state_val_31719 === (7))){
var inst_31697 = (state_31718[(7)]);
var inst_31698 = (state_31718[(8)]);
var inst_31697__$1 = (state_31718[(2)]);
var inst_31698__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31697__$1,(0),null);
var inst_31699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31697__$1,(1),null);
var inst_31700 = (inst_31698__$1 == null);
var state_31718__$1 = (function (){var statearr_31720 = state_31718;
(statearr_31720[(9)] = inst_31699);

(statearr_31720[(7)] = inst_31697__$1);

(statearr_31720[(8)] = inst_31698__$1);

return statearr_31720;
})();
if(cljs.core.truth_(inst_31700)){
var statearr_31721_32985 = state_31718__$1;
(statearr_31721_32985[(1)] = (8));

} else {
var statearr_31722_32986 = state_31718__$1;
(statearr_31722_32986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (1))){
var inst_31687 = cljs.core.vec(chs);
var inst_31688 = inst_31687;
var state_31718__$1 = (function (){var statearr_31723 = state_31718;
(statearr_31723[(10)] = inst_31688);

return statearr_31723;
})();
var statearr_31724_32987 = state_31718__$1;
(statearr_31724_32987[(2)] = null);

(statearr_31724_32987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (4))){
var inst_31688 = (state_31718[(10)]);
var state_31718__$1 = state_31718;
return cljs.core.async.ioc_alts_BANG_(state_31718__$1,(7),inst_31688);
} else {
if((state_val_31719 === (6))){
var inst_31714 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
var statearr_31725_32988 = state_31718__$1;
(statearr_31725_32988[(2)] = inst_31714);

(statearr_31725_32988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (3))){
var inst_31716 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31718__$1,inst_31716);
} else {
if((state_val_31719 === (2))){
var inst_31688 = (state_31718[(10)]);
var inst_31690 = cljs.core.count(inst_31688);
var inst_31691 = (inst_31690 > (0));
var state_31718__$1 = state_31718;
if(cljs.core.truth_(inst_31691)){
var statearr_31727_32989 = state_31718__$1;
(statearr_31727_32989[(1)] = (4));

} else {
var statearr_31728_32990 = state_31718__$1;
(statearr_31728_32990[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (11))){
var inst_31688 = (state_31718[(10)]);
var inst_31707 = (state_31718[(2)]);
var tmp31726 = inst_31688;
var inst_31688__$1 = tmp31726;
var state_31718__$1 = (function (){var statearr_31729 = state_31718;
(statearr_31729[(11)] = inst_31707);

(statearr_31729[(10)] = inst_31688__$1);

return statearr_31729;
})();
var statearr_31730_32991 = state_31718__$1;
(statearr_31730_32991[(2)] = null);

(statearr_31730_32991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (9))){
var inst_31698 = (state_31718[(8)]);
var state_31718__$1 = state_31718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31718__$1,(11),out,inst_31698);
} else {
if((state_val_31719 === (5))){
var inst_31712 = cljs.core.async.close_BANG_(out);
var state_31718__$1 = state_31718;
var statearr_31731_32992 = state_31718__$1;
(statearr_31731_32992[(2)] = inst_31712);

(statearr_31731_32992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (10))){
var inst_31710 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
var statearr_31732_32993 = state_31718__$1;
(statearr_31732_32993[(2)] = inst_31710);

(statearr_31732_32993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (8))){
var inst_31699 = (state_31718[(9)]);
var inst_31697 = (state_31718[(7)]);
var inst_31698 = (state_31718[(8)]);
var inst_31688 = (state_31718[(10)]);
var inst_31702 = (function (){var cs = inst_31688;
var vec__31693 = inst_31697;
var v = inst_31698;
var c = inst_31699;
return (function (p1__31684_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31684_SHARP_);
});
})();
var inst_31703 = cljs.core.filterv(inst_31702,inst_31688);
var inst_31688__$1 = inst_31703;
var state_31718__$1 = (function (){var statearr_31733 = state_31718;
(statearr_31733[(10)] = inst_31688__$1);

return statearr_31733;
})();
var statearr_31734_32994 = state_31718__$1;
(statearr_31734_32994[(2)] = null);

(statearr_31734_32994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29715__auto__ = null;
var cljs$core$async$state_machine__29715__auto____0 = (function (){
var statearr_31735 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31735[(0)] = cljs$core$async$state_machine__29715__auto__);

(statearr_31735[(1)] = (1));

return statearr_31735;
});
var cljs$core$async$state_machine__29715__auto____1 = (function (state_31718){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_31718);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e31736){var ex__29718__auto__ = e31736;
var statearr_31737_32995 = state_31718;
(statearr_31737_32995[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_31718[(4)]))){
var statearr_31738_32996 = state_31718;
(statearr_31738_32996[(1)] = cljs.core.first((state_31718[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32997 = state_31718;
state_31718 = G__32997;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$state_machine__29715__auto__ = function(state_31718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29715__auto____1.call(this,state_31718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29715__auto____0;
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29715__auto____1;
return cljs$core$async$state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_31739 = f__29878__auto__();
(statearr_31739[(6)] = c__29877__auto___32964);

return statearr_31739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31741 = arguments.length;
switch (G__31741) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29877__auto___33004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_31765){
var state_val_31766 = (state_31765[(1)]);
if((state_val_31766 === (7))){
var inst_31747 = (state_31765[(7)]);
var inst_31747__$1 = (state_31765[(2)]);
var inst_31748 = (inst_31747__$1 == null);
var inst_31749 = cljs.core.not(inst_31748);
var state_31765__$1 = (function (){var statearr_31767 = state_31765;
(statearr_31767[(7)] = inst_31747__$1);

return statearr_31767;
})();
if(inst_31749){
var statearr_31768_33006 = state_31765__$1;
(statearr_31768_33006[(1)] = (8));

} else {
var statearr_31769_33007 = state_31765__$1;
(statearr_31769_33007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (1))){
var inst_31742 = (0);
var state_31765__$1 = (function (){var statearr_31770 = state_31765;
(statearr_31770[(8)] = inst_31742);

return statearr_31770;
})();
var statearr_31771_33008 = state_31765__$1;
(statearr_31771_33008[(2)] = null);

(statearr_31771_33008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (4))){
var state_31765__$1 = state_31765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31765__$1,(7),ch);
} else {
if((state_val_31766 === (6))){
var inst_31760 = (state_31765[(2)]);
var state_31765__$1 = state_31765;
var statearr_31772_33011 = state_31765__$1;
(statearr_31772_33011[(2)] = inst_31760);

(statearr_31772_33011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (3))){
var inst_31762 = (state_31765[(2)]);
var inst_31763 = cljs.core.async.close_BANG_(out);
var state_31765__$1 = (function (){var statearr_31773 = state_31765;
(statearr_31773[(9)] = inst_31762);

return statearr_31773;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31765__$1,inst_31763);
} else {
if((state_val_31766 === (2))){
var inst_31742 = (state_31765[(8)]);
var inst_31744 = (inst_31742 < n);
var state_31765__$1 = state_31765;
if(cljs.core.truth_(inst_31744)){
var statearr_31774_33014 = state_31765__$1;
(statearr_31774_33014[(1)] = (4));

} else {
var statearr_31775_33015 = state_31765__$1;
(statearr_31775_33015[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (11))){
var inst_31742 = (state_31765[(8)]);
var inst_31752 = (state_31765[(2)]);
var inst_31753 = (inst_31742 + (1));
var inst_31742__$1 = inst_31753;
var state_31765__$1 = (function (){var statearr_31776 = state_31765;
(statearr_31776[(10)] = inst_31752);

(statearr_31776[(8)] = inst_31742__$1);

return statearr_31776;
})();
var statearr_31777_33017 = state_31765__$1;
(statearr_31777_33017[(2)] = null);

(statearr_31777_33017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (9))){
var state_31765__$1 = state_31765;
var statearr_31778_33018 = state_31765__$1;
(statearr_31778_33018[(2)] = null);

(statearr_31778_33018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (5))){
var state_31765__$1 = state_31765;
var statearr_31779_33019 = state_31765__$1;
(statearr_31779_33019[(2)] = null);

(statearr_31779_33019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (10))){
var inst_31757 = (state_31765[(2)]);
var state_31765__$1 = state_31765;
var statearr_31780_33021 = state_31765__$1;
(statearr_31780_33021[(2)] = inst_31757);

(statearr_31780_33021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31766 === (8))){
var inst_31747 = (state_31765[(7)]);
var state_31765__$1 = state_31765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31765__$1,(11),out,inst_31747);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29715__auto__ = null;
var cljs$core$async$state_machine__29715__auto____0 = (function (){
var statearr_31781 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31781[(0)] = cljs$core$async$state_machine__29715__auto__);

(statearr_31781[(1)] = (1));

return statearr_31781;
});
var cljs$core$async$state_machine__29715__auto____1 = (function (state_31765){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_31765);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e31782){var ex__29718__auto__ = e31782;
var statearr_31783_33022 = state_31765;
(statearr_31783_33022[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_31765[(4)]))){
var statearr_31784_33023 = state_31765;
(statearr_31784_33023[(1)] = cljs.core.first((state_31765[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33024 = state_31765;
state_31765 = G__33024;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$state_machine__29715__auto__ = function(state_31765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29715__auto____1.call(this,state_31765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29715__auto____0;
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29715__auto____1;
return cljs$core$async$state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_31785 = f__29878__auto__();
(statearr_31785[(6)] = c__29877__auto___33004);

return statearr_31785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31787 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31787 = (function (f,ch,meta31788){
this.f = f;
this.ch = ch;
this.meta31788 = meta31788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31789,meta31788__$1){
var self__ = this;
var _31789__$1 = this;
return (new cljs.core.async.t_cljs$core$async31787(self__.f,self__.ch,meta31788__$1));
}));

(cljs.core.async.t_cljs$core$async31787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31789){
var self__ = this;
var _31789__$1 = this;
return self__.meta31788;
}));

(cljs.core.async.t_cljs$core$async31787.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31787.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31787.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31787.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31787.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31790 = (function (f,ch,meta31788,_,fn1,meta31791){
this.f = f;
this.ch = ch;
this.meta31788 = meta31788;
this._ = _;
this.fn1 = fn1;
this.meta31791 = meta31791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31792,meta31791__$1){
var self__ = this;
var _31792__$1 = this;
return (new cljs.core.async.t_cljs$core$async31790(self__.f,self__.ch,self__.meta31788,self__._,self__.fn1,meta31791__$1));
}));

(cljs.core.async.t_cljs$core$async31790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31792){
var self__ = this;
var _31792__$1 = this;
return self__.meta31791;
}));

(cljs.core.async.t_cljs$core$async31790.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31790.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31790.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31790.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31786_SHARP_){
var G__31793 = (((p1__31786_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31786_SHARP_) : self__.f.call(null,p1__31786_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31793) : f1.call(null,G__31793));
});
}));

(cljs.core.async.t_cljs$core$async31790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31788","meta31788",-198529858,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31787","cljs.core.async/t_cljs$core$async31787",604692986,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31791","meta31791",1462682262,null)], null);
}));

(cljs.core.async.t_cljs$core$async31790.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31790");

(cljs.core.async.t_cljs$core$async31790.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31790");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31790.
 */
cljs.core.async.__GT_t_cljs$core$async31790 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31790(f__$1,ch__$1,meta31788__$1,___$2,fn1__$1,meta31791){
return (new cljs.core.async.t_cljs$core$async31790(f__$1,ch__$1,meta31788__$1,___$2,fn1__$1,meta31791));
});

}

return (new cljs.core.async.t_cljs$core$async31790(self__.f,self__.ch,self__.meta31788,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31794 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31794) : self__.f.call(null,G__31794));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31787.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31787.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31788","meta31788",-198529858,null)], null);
}));

(cljs.core.async.t_cljs$core$async31787.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31787");

(cljs.core.async.t_cljs$core$async31787.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31787");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31787.
 */
cljs.core.async.__GT_t_cljs$core$async31787 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31787(f__$1,ch__$1,meta31788){
return (new cljs.core.async.t_cljs$core$async31787(f__$1,ch__$1,meta31788));
});

}

return (new cljs.core.async.t_cljs$core$async31787(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31795 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31795 = (function (f,ch,meta31796){
this.f = f;
this.ch = ch;
this.meta31796 = meta31796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31797,meta31796__$1){
var self__ = this;
var _31797__$1 = this;
return (new cljs.core.async.t_cljs$core$async31795(self__.f,self__.ch,meta31796__$1));
}));

(cljs.core.async.t_cljs$core$async31795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31797){
var self__ = this;
var _31797__$1 = this;
return self__.meta31796;
}));

(cljs.core.async.t_cljs$core$async31795.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31795.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31795.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31795.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31795.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31795.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31795.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31796","meta31796",1130878796,null)], null);
}));

(cljs.core.async.t_cljs$core$async31795.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31795");

(cljs.core.async.t_cljs$core$async31795.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31795");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31795.
 */
cljs.core.async.__GT_t_cljs$core$async31795 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31795(f__$1,ch__$1,meta31796){
return (new cljs.core.async.t_cljs$core$async31795(f__$1,ch__$1,meta31796));
});

}

return (new cljs.core.async.t_cljs$core$async31795(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31798 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31798 = (function (p,ch,meta31799){
this.p = p;
this.ch = ch;
this.meta31799 = meta31799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31800,meta31799__$1){
var self__ = this;
var _31800__$1 = this;
return (new cljs.core.async.t_cljs$core$async31798(self__.p,self__.ch,meta31799__$1));
}));

(cljs.core.async.t_cljs$core$async31798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31800){
var self__ = this;
var _31800__$1 = this;
return self__.meta31799;
}));

(cljs.core.async.t_cljs$core$async31798.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31798.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31798.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31798.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31798.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31798.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31798.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31799","meta31799",1989246767,null)], null);
}));

(cljs.core.async.t_cljs$core$async31798.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31798");

(cljs.core.async.t_cljs$core$async31798.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31798");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31798.
 */
cljs.core.async.__GT_t_cljs$core$async31798 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31798(p__$1,ch__$1,meta31799){
return (new cljs.core.async.t_cljs$core$async31798(p__$1,ch__$1,meta31799));
});

}

return (new cljs.core.async.t_cljs$core$async31798(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31802 = arguments.length;
switch (G__31802) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29877__auto___33143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_31823){
var state_val_31824 = (state_31823[(1)]);
if((state_val_31824 === (7))){
var inst_31819 = (state_31823[(2)]);
var state_31823__$1 = state_31823;
var statearr_31825_33145 = state_31823__$1;
(statearr_31825_33145[(2)] = inst_31819);

(statearr_31825_33145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (1))){
var state_31823__$1 = state_31823;
var statearr_31826_33146 = state_31823__$1;
(statearr_31826_33146[(2)] = null);

(statearr_31826_33146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (4))){
var inst_31805 = (state_31823[(7)]);
var inst_31805__$1 = (state_31823[(2)]);
var inst_31806 = (inst_31805__$1 == null);
var state_31823__$1 = (function (){var statearr_31827 = state_31823;
(statearr_31827[(7)] = inst_31805__$1);

return statearr_31827;
})();
if(cljs.core.truth_(inst_31806)){
var statearr_31828_33149 = state_31823__$1;
(statearr_31828_33149[(1)] = (5));

} else {
var statearr_31829_33152 = state_31823__$1;
(statearr_31829_33152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (6))){
var inst_31805 = (state_31823[(7)]);
var inst_31810 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31805) : p.call(null,inst_31805));
var state_31823__$1 = state_31823;
if(cljs.core.truth_(inst_31810)){
var statearr_31830_33188 = state_31823__$1;
(statearr_31830_33188[(1)] = (8));

} else {
var statearr_31831_33189 = state_31823__$1;
(statearr_31831_33189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (3))){
var inst_31821 = (state_31823[(2)]);
var state_31823__$1 = state_31823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31823__$1,inst_31821);
} else {
if((state_val_31824 === (2))){
var state_31823__$1 = state_31823;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31823__$1,(4),ch);
} else {
if((state_val_31824 === (11))){
var inst_31813 = (state_31823[(2)]);
var state_31823__$1 = state_31823;
var statearr_31834_33190 = state_31823__$1;
(statearr_31834_33190[(2)] = inst_31813);

(statearr_31834_33190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (9))){
var state_31823__$1 = state_31823;
var statearr_31835_33191 = state_31823__$1;
(statearr_31835_33191[(2)] = null);

(statearr_31835_33191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (5))){
var inst_31808 = cljs.core.async.close_BANG_(out);
var state_31823__$1 = state_31823;
var statearr_31836_33192 = state_31823__$1;
(statearr_31836_33192[(2)] = inst_31808);

(statearr_31836_33192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (10))){
var inst_31816 = (state_31823[(2)]);
var state_31823__$1 = (function (){var statearr_31837 = state_31823;
(statearr_31837[(8)] = inst_31816);

return statearr_31837;
})();
var statearr_31838_33193 = state_31823__$1;
(statearr_31838_33193[(2)] = null);

(statearr_31838_33193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31824 === (8))){
var inst_31805 = (state_31823[(7)]);
var state_31823__$1 = state_31823;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31823__$1,(11),out,inst_31805);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29715__auto__ = null;
var cljs$core$async$state_machine__29715__auto____0 = (function (){
var statearr_31840 = [null,null,null,null,null,null,null,null,null];
(statearr_31840[(0)] = cljs$core$async$state_machine__29715__auto__);

(statearr_31840[(1)] = (1));

return statearr_31840;
});
var cljs$core$async$state_machine__29715__auto____1 = (function (state_31823){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_31823);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e31841){var ex__29718__auto__ = e31841;
var statearr_31842_33201 = state_31823;
(statearr_31842_33201[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_31823[(4)]))){
var statearr_31843_33206 = state_31823;
(statearr_31843_33206[(1)] = cljs.core.first((state_31823[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33214 = state_31823;
state_31823 = G__33214;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$state_machine__29715__auto__ = function(state_31823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29715__auto____1.call(this,state_31823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29715__auto____0;
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29715__auto____1;
return cljs$core$async$state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_31844 = f__29878__auto__();
(statearr_31844[(6)] = c__29877__auto___33143);

return statearr_31844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31846 = arguments.length;
switch (G__31846) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29877__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_31914){
var state_val_31915 = (state_31914[(1)]);
if((state_val_31915 === (7))){
var inst_31910 = (state_31914[(2)]);
var state_31914__$1 = state_31914;
var statearr_31916_33241 = state_31914__$1;
(statearr_31916_33241[(2)] = inst_31910);

(statearr_31916_33241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (20))){
var inst_31880 = (state_31914[(7)]);
var inst_31891 = (state_31914[(2)]);
var inst_31892 = cljs.core.next(inst_31880);
var inst_31865 = inst_31892;
var inst_31866 = null;
var inst_31868 = (0);
var inst_31869 = (0);
var state_31914__$1 = (function (){var statearr_31917 = state_31914;
(statearr_31917[(8)] = inst_31866);

(statearr_31917[(9)] = inst_31869);

(statearr_31917[(10)] = inst_31865);

(statearr_31917[(11)] = inst_31891);

(statearr_31917[(12)] = inst_31868);

return statearr_31917;
})();
var statearr_31918_33246 = state_31914__$1;
(statearr_31918_33246[(2)] = null);

(statearr_31918_33246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (1))){
var state_31914__$1 = state_31914;
var statearr_31919_33248 = state_31914__$1;
(statearr_31919_33248[(2)] = null);

(statearr_31919_33248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (4))){
var inst_31853 = (state_31914[(13)]);
var inst_31853__$1 = (state_31914[(2)]);
var inst_31855 = (inst_31853__$1 == null);
var state_31914__$1 = (function (){var statearr_31920 = state_31914;
(statearr_31920[(13)] = inst_31853__$1);

return statearr_31920;
})();
if(cljs.core.truth_(inst_31855)){
var statearr_31921_33249 = state_31914__$1;
(statearr_31921_33249[(1)] = (5));

} else {
var statearr_31922_33250 = state_31914__$1;
(statearr_31922_33250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (15))){
var state_31914__$1 = state_31914;
var statearr_31926_33251 = state_31914__$1;
(statearr_31926_33251[(2)] = null);

(statearr_31926_33251[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (21))){
var state_31914__$1 = state_31914;
var statearr_31927_33252 = state_31914__$1;
(statearr_31927_33252[(2)] = null);

(statearr_31927_33252[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (13))){
var inst_31866 = (state_31914[(8)]);
var inst_31869 = (state_31914[(9)]);
var inst_31865 = (state_31914[(10)]);
var inst_31868 = (state_31914[(12)]);
var inst_31876 = (state_31914[(2)]);
var inst_31877 = (inst_31869 + (1));
var tmp31923 = inst_31866;
var tmp31924 = inst_31865;
var tmp31925 = inst_31868;
var inst_31865__$1 = tmp31924;
var inst_31866__$1 = tmp31923;
var inst_31868__$1 = tmp31925;
var inst_31869__$1 = inst_31877;
var state_31914__$1 = (function (){var statearr_31928 = state_31914;
(statearr_31928[(8)] = inst_31866__$1);

(statearr_31928[(9)] = inst_31869__$1);

(statearr_31928[(14)] = inst_31876);

(statearr_31928[(10)] = inst_31865__$1);

(statearr_31928[(12)] = inst_31868__$1);

return statearr_31928;
})();
var statearr_31929_33253 = state_31914__$1;
(statearr_31929_33253[(2)] = null);

(statearr_31929_33253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (22))){
var state_31914__$1 = state_31914;
var statearr_31930_33254 = state_31914__$1;
(statearr_31930_33254[(2)] = null);

(statearr_31930_33254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (6))){
var inst_31853 = (state_31914[(13)]);
var inst_31863 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31853) : f.call(null,inst_31853));
var inst_31864 = cljs.core.seq(inst_31863);
var inst_31865 = inst_31864;
var inst_31866 = null;
var inst_31868 = (0);
var inst_31869 = (0);
var state_31914__$1 = (function (){var statearr_31931 = state_31914;
(statearr_31931[(8)] = inst_31866);

(statearr_31931[(9)] = inst_31869);

(statearr_31931[(10)] = inst_31865);

(statearr_31931[(12)] = inst_31868);

return statearr_31931;
})();
var statearr_31932_33255 = state_31914__$1;
(statearr_31932_33255[(2)] = null);

(statearr_31932_33255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (17))){
var inst_31880 = (state_31914[(7)]);
var inst_31884 = cljs.core.chunk_first(inst_31880);
var inst_31885 = cljs.core.chunk_rest(inst_31880);
var inst_31886 = cljs.core.count(inst_31884);
var inst_31865 = inst_31885;
var inst_31866 = inst_31884;
var inst_31868 = inst_31886;
var inst_31869 = (0);
var state_31914__$1 = (function (){var statearr_31933 = state_31914;
(statearr_31933[(8)] = inst_31866);

(statearr_31933[(9)] = inst_31869);

(statearr_31933[(10)] = inst_31865);

(statearr_31933[(12)] = inst_31868);

return statearr_31933;
})();
var statearr_31934_33260 = state_31914__$1;
(statearr_31934_33260[(2)] = null);

(statearr_31934_33260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (3))){
var inst_31912 = (state_31914[(2)]);
var state_31914__$1 = state_31914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31914__$1,inst_31912);
} else {
if((state_val_31915 === (12))){
var inst_31900 = (state_31914[(2)]);
var state_31914__$1 = state_31914;
var statearr_31935_33261 = state_31914__$1;
(statearr_31935_33261[(2)] = inst_31900);

(statearr_31935_33261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (2))){
var state_31914__$1 = state_31914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31914__$1,(4),in$);
} else {
if((state_val_31915 === (23))){
var inst_31908 = (state_31914[(2)]);
var state_31914__$1 = state_31914;
var statearr_31936_33262 = state_31914__$1;
(statearr_31936_33262[(2)] = inst_31908);

(statearr_31936_33262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (19))){
var inst_31895 = (state_31914[(2)]);
var state_31914__$1 = state_31914;
var statearr_31937_33263 = state_31914__$1;
(statearr_31937_33263[(2)] = inst_31895);

(statearr_31937_33263[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (11))){
var inst_31880 = (state_31914[(7)]);
var inst_31865 = (state_31914[(10)]);
var inst_31880__$1 = cljs.core.seq(inst_31865);
var state_31914__$1 = (function (){var statearr_31938 = state_31914;
(statearr_31938[(7)] = inst_31880__$1);

return statearr_31938;
})();
if(inst_31880__$1){
var statearr_31939_33264 = state_31914__$1;
(statearr_31939_33264[(1)] = (14));

} else {
var statearr_31940_33265 = state_31914__$1;
(statearr_31940_33265[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (9))){
var inst_31902 = (state_31914[(2)]);
var inst_31903 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31914__$1 = (function (){var statearr_31941 = state_31914;
(statearr_31941[(15)] = inst_31902);

return statearr_31941;
})();
if(cljs.core.truth_(inst_31903)){
var statearr_31942_33266 = state_31914__$1;
(statearr_31942_33266[(1)] = (21));

} else {
var statearr_31943_33269 = state_31914__$1;
(statearr_31943_33269[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (5))){
var inst_31857 = cljs.core.async.close_BANG_(out);
var state_31914__$1 = state_31914;
var statearr_31944_33270 = state_31914__$1;
(statearr_31944_33270[(2)] = inst_31857);

(statearr_31944_33270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (14))){
var inst_31880 = (state_31914[(7)]);
var inst_31882 = cljs.core.chunked_seq_QMARK_(inst_31880);
var state_31914__$1 = state_31914;
if(inst_31882){
var statearr_31945_33272 = state_31914__$1;
(statearr_31945_33272[(1)] = (17));

} else {
var statearr_31946_33273 = state_31914__$1;
(statearr_31946_33273[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (16))){
var inst_31898 = (state_31914[(2)]);
var state_31914__$1 = state_31914;
var statearr_31947_33274 = state_31914__$1;
(statearr_31947_33274[(2)] = inst_31898);

(statearr_31947_33274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (10))){
var inst_31866 = (state_31914[(8)]);
var inst_31869 = (state_31914[(9)]);
var inst_31874 = cljs.core._nth(inst_31866,inst_31869);
var state_31914__$1 = state_31914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31914__$1,(13),out,inst_31874);
} else {
if((state_val_31915 === (18))){
var inst_31880 = (state_31914[(7)]);
var inst_31889 = cljs.core.first(inst_31880);
var state_31914__$1 = state_31914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31914__$1,(20),out,inst_31889);
} else {
if((state_val_31915 === (8))){
var inst_31869 = (state_31914[(9)]);
var inst_31868 = (state_31914[(12)]);
var inst_31871 = (inst_31869 < inst_31868);
var inst_31872 = inst_31871;
var state_31914__$1 = state_31914;
if(cljs.core.truth_(inst_31872)){
var statearr_31948_33276 = state_31914__$1;
(statearr_31948_33276[(1)] = (10));

} else {
var statearr_31949_33277 = state_31914__$1;
(statearr_31949_33277[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29715__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29715__auto____0 = (function (){
var statearr_31953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31953[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29715__auto__);

(statearr_31953[(1)] = (1));

return statearr_31953;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29715__auto____1 = (function (state_31914){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_31914);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e31954){var ex__29718__auto__ = e31954;
var statearr_31955_33279 = state_31914;
(statearr_31955_33279[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_31914[(4)]))){
var statearr_31956_33280 = state_31914;
(statearr_31956_33280[(1)] = cljs.core.first((state_31914[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33283 = state_31914;
state_31914 = G__33283;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29715__auto__ = function(state_31914){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29715__auto____1.call(this,state_31914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29715__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29715__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_31961 = f__29878__auto__();
(statearr_31961[(6)] = c__29877__auto__);

return statearr_31961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));

return c__29877__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31964 = arguments.length;
switch (G__31964) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31966 = arguments.length;
switch (G__31966) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31973 = arguments.length;
switch (G__31973) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29877__auto___33288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_31998){
var state_val_31999 = (state_31998[(1)]);
if((state_val_31999 === (7))){
var inst_31993 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32003_33289 = state_31998__$1;
(statearr_32003_33289[(2)] = inst_31993);

(statearr_32003_33289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (1))){
var inst_31975 = null;
var state_31998__$1 = (function (){var statearr_32004 = state_31998;
(statearr_32004[(7)] = inst_31975);

return statearr_32004;
})();
var statearr_32005_33293 = state_31998__$1;
(statearr_32005_33293[(2)] = null);

(statearr_32005_33293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (4))){
var inst_31978 = (state_31998[(8)]);
var inst_31978__$1 = (state_31998[(2)]);
var inst_31979 = (inst_31978__$1 == null);
var inst_31980 = cljs.core.not(inst_31979);
var state_31998__$1 = (function (){var statearr_32006 = state_31998;
(statearr_32006[(8)] = inst_31978__$1);

return statearr_32006;
})();
if(inst_31980){
var statearr_32007_33294 = state_31998__$1;
(statearr_32007_33294[(1)] = (5));

} else {
var statearr_32008_33295 = state_31998__$1;
(statearr_32008_33295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (6))){
var state_31998__$1 = state_31998;
var statearr_32009_33296 = state_31998__$1;
(statearr_32009_33296[(2)] = null);

(statearr_32009_33296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (3))){
var inst_31995 = (state_31998[(2)]);
var inst_31996 = cljs.core.async.close_BANG_(out);
var state_31998__$1 = (function (){var statearr_32011 = state_31998;
(statearr_32011[(9)] = inst_31995);

return statearr_32011;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31998__$1,inst_31996);
} else {
if((state_val_31999 === (2))){
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31998__$1,(4),ch);
} else {
if((state_val_31999 === (11))){
var inst_31978 = (state_31998[(8)]);
var inst_31987 = (state_31998[(2)]);
var inst_31975 = inst_31978;
var state_31998__$1 = (function (){var statearr_32012 = state_31998;
(statearr_32012[(7)] = inst_31975);

(statearr_32012[(10)] = inst_31987);

return statearr_32012;
})();
var statearr_32013_33299 = state_31998__$1;
(statearr_32013_33299[(2)] = null);

(statearr_32013_33299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (9))){
var inst_31978 = (state_31998[(8)]);
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31998__$1,(11),out,inst_31978);
} else {
if((state_val_31999 === (5))){
var inst_31975 = (state_31998[(7)]);
var inst_31978 = (state_31998[(8)]);
var inst_31982 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31978,inst_31975);
var state_31998__$1 = state_31998;
if(inst_31982){
var statearr_32015_33300 = state_31998__$1;
(statearr_32015_33300[(1)] = (8));

} else {
var statearr_32016_33301 = state_31998__$1;
(statearr_32016_33301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (10))){
var inst_31990 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32017_33302 = state_31998__$1;
(statearr_32017_33302[(2)] = inst_31990);

(statearr_32017_33302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (8))){
var inst_31975 = (state_31998[(7)]);
var tmp32014 = inst_31975;
var inst_31975__$1 = tmp32014;
var state_31998__$1 = (function (){var statearr_32018 = state_31998;
(statearr_32018[(7)] = inst_31975__$1);

return statearr_32018;
})();
var statearr_32019_33303 = state_31998__$1;
(statearr_32019_33303[(2)] = null);

(statearr_32019_33303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29715__auto__ = null;
var cljs$core$async$state_machine__29715__auto____0 = (function (){
var statearr_32020 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32020[(0)] = cljs$core$async$state_machine__29715__auto__);

(statearr_32020[(1)] = (1));

return statearr_32020;
});
var cljs$core$async$state_machine__29715__auto____1 = (function (state_31998){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_31998);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e32022){var ex__29718__auto__ = e32022;
var statearr_32023_33357 = state_31998;
(statearr_32023_33357[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_31998[(4)]))){
var statearr_32024_33358 = state_31998;
(statearr_32024_33358[(1)] = cljs.core.first((state_31998[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33363 = state_31998;
state_31998 = G__33363;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$state_machine__29715__auto__ = function(state_31998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29715__auto____1.call(this,state_31998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29715__auto____0;
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29715__auto____1;
return cljs$core$async$state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_32025 = f__29878__auto__();
(statearr_32025[(6)] = c__29877__auto___33288);

return statearr_32025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32028 = arguments.length;
switch (G__32028) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29877__auto___33386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_32067){
var state_val_32069 = (state_32067[(1)]);
if((state_val_32069 === (7))){
var inst_32063 = (state_32067[(2)]);
var state_32067__$1 = state_32067;
var statearr_32070_33393 = state_32067__$1;
(statearr_32070_33393[(2)] = inst_32063);

(statearr_32070_33393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (1))){
var inst_32030 = (new Array(n));
var inst_32031 = inst_32030;
var inst_32032 = (0);
var state_32067__$1 = (function (){var statearr_32072 = state_32067;
(statearr_32072[(7)] = inst_32032);

(statearr_32072[(8)] = inst_32031);

return statearr_32072;
})();
var statearr_32073_33404 = state_32067__$1;
(statearr_32073_33404[(2)] = null);

(statearr_32073_33404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (4))){
var inst_32035 = (state_32067[(9)]);
var inst_32035__$1 = (state_32067[(2)]);
var inst_32036 = (inst_32035__$1 == null);
var inst_32037 = cljs.core.not(inst_32036);
var state_32067__$1 = (function (){var statearr_32074 = state_32067;
(statearr_32074[(9)] = inst_32035__$1);

return statearr_32074;
})();
if(inst_32037){
var statearr_32075_33415 = state_32067__$1;
(statearr_32075_33415[(1)] = (5));

} else {
var statearr_32076_33420 = state_32067__$1;
(statearr_32076_33420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (15))){
var inst_32057 = (state_32067[(2)]);
var state_32067__$1 = state_32067;
var statearr_32077_33429 = state_32067__$1;
(statearr_32077_33429[(2)] = inst_32057);

(statearr_32077_33429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (13))){
var state_32067__$1 = state_32067;
var statearr_32078_33430 = state_32067__$1;
(statearr_32078_33430[(2)] = null);

(statearr_32078_33430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (6))){
var inst_32032 = (state_32067[(7)]);
var inst_32053 = (inst_32032 > (0));
var state_32067__$1 = state_32067;
if(cljs.core.truth_(inst_32053)){
var statearr_32079_33431 = state_32067__$1;
(statearr_32079_33431[(1)] = (12));

} else {
var statearr_32080_33432 = state_32067__$1;
(statearr_32080_33432[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (3))){
var inst_32065 = (state_32067[(2)]);
var state_32067__$1 = state_32067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32067__$1,inst_32065);
} else {
if((state_val_32069 === (12))){
var inst_32031 = (state_32067[(8)]);
var inst_32055 = cljs.core.vec(inst_32031);
var state_32067__$1 = state_32067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32067__$1,(15),out,inst_32055);
} else {
if((state_val_32069 === (2))){
var state_32067__$1 = state_32067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32067__$1,(4),ch);
} else {
if((state_val_32069 === (11))){
var inst_32047 = (state_32067[(2)]);
var inst_32048 = (new Array(n));
var inst_32031 = inst_32048;
var inst_32032 = (0);
var state_32067__$1 = (function (){var statearr_32082 = state_32067;
(statearr_32082[(7)] = inst_32032);

(statearr_32082[(10)] = inst_32047);

(statearr_32082[(8)] = inst_32031);

return statearr_32082;
})();
var statearr_32083_33436 = state_32067__$1;
(statearr_32083_33436[(2)] = null);

(statearr_32083_33436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (9))){
var inst_32031 = (state_32067[(8)]);
var inst_32045 = cljs.core.vec(inst_32031);
var state_32067__$1 = state_32067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32067__$1,(11),out,inst_32045);
} else {
if((state_val_32069 === (5))){
var inst_32035 = (state_32067[(9)]);
var inst_32032 = (state_32067[(7)]);
var inst_32031 = (state_32067[(8)]);
var inst_32040 = (state_32067[(11)]);
var inst_32039 = (inst_32031[inst_32032] = inst_32035);
var inst_32040__$1 = (inst_32032 + (1));
var inst_32041 = (inst_32040__$1 < n);
var state_32067__$1 = (function (){var statearr_32084 = state_32067;
(statearr_32084[(12)] = inst_32039);

(statearr_32084[(11)] = inst_32040__$1);

return statearr_32084;
})();
if(cljs.core.truth_(inst_32041)){
var statearr_32086_33437 = state_32067__$1;
(statearr_32086_33437[(1)] = (8));

} else {
var statearr_32087_33438 = state_32067__$1;
(statearr_32087_33438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (14))){
var inst_32060 = (state_32067[(2)]);
var inst_32061 = cljs.core.async.close_BANG_(out);
var state_32067__$1 = (function (){var statearr_32090 = state_32067;
(statearr_32090[(13)] = inst_32060);

return statearr_32090;
})();
var statearr_32091_33439 = state_32067__$1;
(statearr_32091_33439[(2)] = inst_32061);

(statearr_32091_33439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (10))){
var inst_32051 = (state_32067[(2)]);
var state_32067__$1 = state_32067;
var statearr_32092_33440 = state_32067__$1;
(statearr_32092_33440[(2)] = inst_32051);

(statearr_32092_33440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (8))){
var inst_32031 = (state_32067[(8)]);
var inst_32040 = (state_32067[(11)]);
var tmp32089 = inst_32031;
var inst_32031__$1 = tmp32089;
var inst_32032 = inst_32040;
var state_32067__$1 = (function (){var statearr_32095 = state_32067;
(statearr_32095[(7)] = inst_32032);

(statearr_32095[(8)] = inst_32031__$1);

return statearr_32095;
})();
var statearr_32097_33441 = state_32067__$1;
(statearr_32097_33441[(2)] = null);

(statearr_32097_33441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29715__auto__ = null;
var cljs$core$async$state_machine__29715__auto____0 = (function (){
var statearr_32098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32098[(0)] = cljs$core$async$state_machine__29715__auto__);

(statearr_32098[(1)] = (1));

return statearr_32098;
});
var cljs$core$async$state_machine__29715__auto____1 = (function (state_32067){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_32067);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e32100){var ex__29718__auto__ = e32100;
var statearr_32101_33442 = state_32067;
(statearr_32101_33442[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_32067[(4)]))){
var statearr_32102_33443 = state_32067;
(statearr_32102_33443[(1)] = cljs.core.first((state_32067[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33444 = state_32067;
state_32067 = G__33444;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$state_machine__29715__auto__ = function(state_32067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29715__auto____1.call(this,state_32067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29715__auto____0;
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29715__auto____1;
return cljs$core$async$state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_32103 = f__29878__auto__();
(statearr_32103[(6)] = c__29877__auto___33386);

return statearr_32103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32105 = arguments.length;
switch (G__32105) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29877__auto___33447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29878__auto__ = (function (){var switch__29714__auto__ = (function (state_32149){
var state_val_32150 = (state_32149[(1)]);
if((state_val_32150 === (7))){
var inst_32145 = (state_32149[(2)]);
var state_32149__$1 = state_32149;
var statearr_32151_33448 = state_32149__$1;
(statearr_32151_33448[(2)] = inst_32145);

(statearr_32151_33448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32150 === (1))){
var inst_32108 = [];
var inst_32109 = inst_32108;
var inst_32110 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32149__$1 = (function (){var statearr_32152 = state_32149;
(statearr_32152[(7)] = inst_32109);

(statearr_32152[(8)] = inst_32110);

return statearr_32152;
})();
var statearr_32153_33449 = state_32149__$1;
(statearr_32153_33449[(2)] = null);

(statearr_32153_33449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32150 === (4))){
var inst_32113 = (state_32149[(9)]);
var inst_32113__$1 = (state_32149[(2)]);
var inst_32114 = (inst_32113__$1 == null);
var inst_32115 = cljs.core.not(inst_32114);
var state_32149__$1 = (function (){var statearr_32154 = state_32149;
(statearr_32154[(9)] = inst_32113__$1);

return statearr_32154;
})();
if(inst_32115){
var statearr_32155_33450 = state_32149__$1;
(statearr_32155_33450[(1)] = (5));

} else {
var statearr_32156_33451 = state_32149__$1;
(statearr_32156_33451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32150 === (15))){
var inst_32139 = (state_32149[(2)]);
var state_32149__$1 = state_32149;
var statearr_32157_33452 = state_32149__$1;
(statearr_32157_33452[(2)] = inst_32139);

(statearr_32157_33452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32150 === (13))){
var state_32149__$1 = state_32149;
var statearr_32158_33453 = state_32149__$1;
(statearr_32158_33453[(2)] = null);

(statearr_32158_33453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32150 === (6))){
var inst_32109 = (state_32149[(7)]);
var inst_32134 = inst_32109.length;
var inst_32135 = (inst_32134 > (0));
var state_32149__$1 = state_32149;
if(cljs.core.truth_(inst_32135)){
var statearr_32159_33454 = state_32149__$1;
(statearr_32159_33454[(1)] = (12));

} else {
var statearr_32160_33456 = state_32149__$1;
(statearr_32160_33456[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32150 === (3))){
var inst_32147 = (state_32149[(2)]);
var state_32149__$1 = state_32149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32149__$1,inst_32147);
} else {
if((state_val_32150 === (12))){
var inst_32109 = (state_32149[(7)]);
var inst_32137 = cljs.core.vec(inst_32109);
var state_32149__$1 = state_32149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32149__$1,(15),out,inst_32137);
} else {
if((state_val_32150 === (2))){
var state_32149__$1 = state_32149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32149__$1,(4),ch);
} else {
if((state_val_32150 === (11))){
var inst_32117 = (state_32149[(10)]);
var inst_32113 = (state_32149[(9)]);
var inst_32127 = (state_32149[(2)]);
var inst_32128 = [];
var inst_32129 = inst_32128.push(inst_32113);
var inst_32109 = inst_32128;
var inst_32110 = inst_32117;
var state_32149__$1 = (function (){var statearr_32162 = state_32149;
(statearr_32162[(11)] = inst_32127);

(statearr_32162[(12)] = inst_32129);

(statearr_32162[(7)] = inst_32109);

(statearr_32162[(8)] = inst_32110);

return statearr_32162;
})();
var statearr_32165_33457 = state_32149__$1;
(statearr_32165_33457[(2)] = null);

(statearr_32165_33457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32150 === (9))){
var inst_32109 = (state_32149[(7)]);
var inst_32125 = cljs.core.vec(inst_32109);
var state_32149__$1 = state_32149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32149__$1,(11),out,inst_32125);
} else {
if((state_val_32150 === (5))){
var inst_32117 = (state_32149[(10)]);
var inst_32113 = (state_32149[(9)]);
var inst_32110 = (state_32149[(8)]);
var inst_32117__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32113) : f.call(null,inst_32113));
var inst_32118 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32117__$1,inst_32110);
var inst_32119 = cljs.core.keyword_identical_QMARK_(inst_32110,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32120 = ((inst_32118) || (inst_32119));
var state_32149__$1 = (function (){var statearr_32166 = state_32149;
(statearr_32166[(10)] = inst_32117__$1);

return statearr_32166;
})();
if(cljs.core.truth_(inst_32120)){
var statearr_32168_33461 = state_32149__$1;
(statearr_32168_33461[(1)] = (8));

} else {
var statearr_32169_33462 = state_32149__$1;
(statearr_32169_33462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32150 === (14))){
var inst_32142 = (state_32149[(2)]);
var inst_32143 = cljs.core.async.close_BANG_(out);
var state_32149__$1 = (function (){var statearr_32171 = state_32149;
(statearr_32171[(13)] = inst_32142);

return statearr_32171;
})();
var statearr_32172_33463 = state_32149__$1;
(statearr_32172_33463[(2)] = inst_32143);

(statearr_32172_33463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32150 === (10))){
var inst_32132 = (state_32149[(2)]);
var state_32149__$1 = state_32149;
var statearr_32175_33464 = state_32149__$1;
(statearr_32175_33464[(2)] = inst_32132);

(statearr_32175_33464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32150 === (8))){
var inst_32117 = (state_32149[(10)]);
var inst_32113 = (state_32149[(9)]);
var inst_32109 = (state_32149[(7)]);
var inst_32122 = inst_32109.push(inst_32113);
var tmp32170 = inst_32109;
var inst_32109__$1 = tmp32170;
var inst_32110 = inst_32117;
var state_32149__$1 = (function (){var statearr_32176 = state_32149;
(statearr_32176[(14)] = inst_32122);

(statearr_32176[(7)] = inst_32109__$1);

(statearr_32176[(8)] = inst_32110);

return statearr_32176;
})();
var statearr_32177_33465 = state_32149__$1;
(statearr_32177_33465[(2)] = null);

(statearr_32177_33465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29715__auto__ = null;
var cljs$core$async$state_machine__29715__auto____0 = (function (){
var statearr_32178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32178[(0)] = cljs$core$async$state_machine__29715__auto__);

(statearr_32178[(1)] = (1));

return statearr_32178;
});
var cljs$core$async$state_machine__29715__auto____1 = (function (state_32149){
while(true){
var ret_value__29716__auto__ = (function (){try{while(true){
var result__29717__auto__ = switch__29714__auto__(state_32149);
if(cljs.core.keyword_identical_QMARK_(result__29717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29717__auto__;
}
break;
}
}catch (e32179){var ex__29718__auto__ = e32179;
var statearr_32180_33466 = state_32149;
(statearr_32180_33466[(2)] = ex__29718__auto__);


if(cljs.core.seq((state_32149[(4)]))){
var statearr_32181_33467 = state_32149;
(statearr_32181_33467[(1)] = cljs.core.first((state_32149[(4)])));

} else {
throw ex__29718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33468 = state_32149;
state_32149 = G__33468;
continue;
} else {
return ret_value__29716__auto__;
}
break;
}
});
cljs$core$async$state_machine__29715__auto__ = function(state_32149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29715__auto____1.call(this,state_32149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29715__auto____0;
cljs$core$async$state_machine__29715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29715__auto____1;
return cljs$core$async$state_machine__29715__auto__;
})()
})();
var state__29879__auto__ = (function (){var statearr_32182 = f__29878__auto__();
(statearr_32182[(6)] = c__29877__auto___33447);

return statearr_32182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29879__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
