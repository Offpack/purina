(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.curtain = function() {
	this.initialize(img.curtain);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,90);


(lib.kitten = function() {
	this.initialize(img.kitten);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.legal = function() {
	this.initialize(img.legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,173);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B91881").s().p("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FQgNAFgRAAQgOAAgOgEgAF4gmQgLgGgHgKQgHgKAAgPIAAAAQAAgRAIgKQAHgLAOgFQANgFASAAQAMAAAIABIARAFIAAgDQAAgNgIgHQgIgHgQAAIgQABIgOADIgDABIgDAAQgHAAgFgFQgFgFAAgHQAAgGADgEQADgFAFgCQAKgDAMgCQALgDAPAAQARAAANAFQANAEAIAIQAIAJAEAMQAEAMAAAPIAABEQAAAJgGAGQgGAGgJAAQgJAAgGgGQgFgFAAgHQgIAJgLAFQgLAFgQAAQgOAAgMgFgAGQhhQgIAGAAAKIAAAAQAAAJAGAFQAHAFAKAAQAPAAAJgIQAJgHAAgMIAAgHQgFgDgHgBQgHgCgIAAQgNAAgIAFgADHgqQgPgJgKgRQgKgRAAgaIAAAAQAAgZAKgSQAJgRAQgJQAPgJASAAQARABALAGQAMAGAHAKIAAg3QAAgJAGgGQAGgGAKAAQAJAAAFAGQAGAGABAJIAACmQgBAJgGAGQgFAGgJAAQgKAAgGgGQgGgGAAgJIAAgCQgHAKgMAHQgLAHgRAAQgRAAgQgJgADhiTQgIAFgFAJQgFAJAAANIAAAAQAAANAFAJQAFAKAIAFQAIAFAKAAQAKAAAJgFQAIgFAFgKQAFgJAAgNIAAAAQAAgNgFgJQgFgJgIgFQgJgGgKAAQgKAAgIAGgAAVgmQgLgGgHgKQgGgKAAgPIAAAAQAAgRAHgKQAHgLAOgFQANgFASAAQAMAAAIABIARAFIAAgDQAAgNgIgHQgIgHgQAAIgQABIgOADIgDABIgDAAQgHAAgFgFQgFgFAAgHQAAgGADgEQADgFAFgCQAKgDAMgCQALgDAPAAQARAAANAFQANAEAIAIQAIAJAEAMQAEAMAAAPIAABEQAAAJgGAGQgGAGgJAAQgJAAgGgGQgFgFAAgHQgIAJgLAFQgLAFgQAAQgOAAgMgFgAAthhQgIAGAAAKIAAAAQAAAJAGAFQAHAFAKAAQAPAAAJgIQAJgHAAgMIAAgHQgFgDgHgBQgHgCgIAAQgNAAgIAFgAk+gmQgMgGgHgKQgGgKgBgPIAAAAQABgRAHgKQAIgLANgFQAOgFASAAQALAAAJABIAQAFIAAgDQAAgNgIgHQgIgHgQAAIgQABIgNADIgDABIgDAAQgIAAgFgFQgFgFAAgHQAAgGADgEQADgFAGgCQAKgDALgCQAMgDAOAAQASAAAMAFQANAEAIAIQAIAJAEAMQAEAMAAAPIAABEQAAAJgGAGQgGAGgIAAQgKAAgFgGQgGgFAAgHQgHAJgMAFQgLAFgPAAQgOAAgMgFgAknhhQgHAGAAAKIAAAAQAAAJAGAFQAGAFALAAQAPAAAJgIQAJgHAAgMIAAgHQgFgDgHgBQgHgCgIAAQgOAAgIAFgAQngoQgGgGAAgJIAAiIIgPAEIgEABIgEAAQgHAAgGgFQgFgGAAgHQAAgHAEgFQADgFAHgCIAcgIIALgDIAJgBIAAAAQAKABAFAGQAGAGABAJIAACeQgBAJgGAGQgFAGgKAAQgJAAgGgGgAOXgpQgGgGABgIIAEgXIglAAIgFAdQgBAGgFAEQgFAFgHAAQgJAAgFgGQgFgGABgJIAEgXIgHAAQgHAAgFgFQgFgFgBgIQABgHAFgFQAFgFAHgBIANAAIAHgpIgKAAQgHAAgGgFQgFgFAAgIQAAgIAFgFQAGgFAHAAIAQAAIAFgcQABgGAFgEQAFgEAHAAQAIAAAFAGQAGAGgBAJIgEAVIAmAAIAFgcQABgGAFgEQAFgEAGAAQAJAAAFAGQAFAGgBAJIgDAVIAGAAQAIAAAFAFQAFAFAAAIQAAAIgFAFQgFAFgIAAIgMAAIgHApIAJAAQAIABAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAIgQAAIgFAdQgBAHgFAEQgFAEgHAAQgIAAgFgHgAN3hyIAmAAIAHgpIgmAAgAhDgoQgGgGgBgJIAAhBQAAgPgHgHQgGgIgNAAQgMAAgHAIQgHAHAAAQIAABAQAAAJgHAGQgFAGgKAAQgJAAgFgGQgGgGgBgJIAAhvQABgJAGgGQAFgGAJgBQAKABAFAGQAHAGAAAJIAAABQAHgJAKgHQALgHAQgBQAYABANAOQAOAPAAAaIAABOQAAAJgGAGQgGAGgJAAQgKAAgFgGgAuEgoQgGgGAAgJIAAhvQAAgJAGgGQAGgGAJgBQAJABAGAGQAGAGAAAJIAAAHQADgIAFgGQAEgHAFgEQAGgDAGgBQAKABAFAFQAGAGAAAJQAAAJgFAFQgEAFgHABQgQAEgJANQgJAMAAAXIAAAoQAAAJgGAGQgGAGgJAAQgJAAgGgGgAwHgoQgGgGgBgKIAAiIIgpAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgGAIAAIB+AAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAIgqAAIAACIQAAAKgGAGQgGAGgJAAQgJAAgGgGgAIEiQQgDgDAAgEQABgEACgCIAGgDQALgDAFgHQAGgHgBgKQgHgCgGgGQgGgGAAgJIAAAAQAAgLAGgGQAGgGALAAQAMAAAGAIQAHAIAAAPIAAABQAAAPgEAMQgFALgIAIQgGAGgIAEQgJADgIAAQgFAAgDgCg");
	this.shape.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_2_Layer_1, null, null);


(lib.Scene_1_outline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1,3,true).p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(512));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(157).to({_off:false},0).to({_off:true},98).wait(158).to({_off:false},0).wait(273));

}).prototype = p = new cjs.MovieClip();


(lib.newLegal_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.legal();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.newLegal_Layer_1, null, null);


(lib.light_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(-83,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.light_Layer_1, null, null);


(lib.kitten_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.kitten();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kitten_Layer_1, null, null);


(lib.curtain_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.curtain();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.curtain_Layer_1, null, null);


(lib.cta_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cta();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_Layer_1, null, null);


(lib.background_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.background();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.background_Layer_1, null, null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-110,-24.2,220,48.5), null);


(lib.newLegal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.newLegal_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(160,25,1,1,0,0,0,160,25);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.newLegal, new cjs.Rectangle(0,0,320,50), null);


(lib.light_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.light_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.light_1, new cjs.Rectangle(-83,-86.5,166,173), null);


(lib.kitten_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.kitten_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(160,25,1,1,0,0,0,160,25);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.kitten_1, new cjs.Rectangle(0,0,320,50), null);


(lib.headline_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.light_1();
	this.instance.parent = this;
	this.instance.setTransform(-161,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({alpha:0.5898},0).to({x:169},19).wait(5).to({x:-161},0).to({x:169},19).wait(5));

}).prototype = p = new cjs.MovieClip();


(lib.headline_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// copy
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(-1.75,70.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59));

}).prototype = p = new cjs.MovieClip();


(lib.headline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{light:11});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_54 = function() {
		this.stop();
	}
	this.frame_58 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(54).call(this.frame_54).wait(4).call(this.frame_58).wait(1));

	// copy_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlCHRQgSgKgKgRQgKgSAAgXIAAgBQAAgVAKgSQAJgSARgKQAQgKAWgBQATABAOAGQANAHAJALQAJALAEAMQAEANAAAMQAAAJgFAFQgGAGgIAAIhVAAQAEAPAJAHQAKAHAOAAQAJAAAHgCQAIgDAGgFIAFgCIAGgBQAHAAAEAFQAFAFAAAHQAAAEgCADIgEAFQgJAJgNAFQgNAFgRAAQgWAAgSgKgAj+GAQgCgOgIgJQgIgIgOgBQgNABgIAIQgJAJgCAOIBAAAIAAAAgAL8HRQgPgJgKgRQgKgRAAgaIAAAAQAAgZAKgSQAJgRAQgJQAPgJASAAQARABALAGQAMAGAHAKIAAg3QAAgJAGgGQAGgGAKAAQAJAAAFAGQAGAGABAJIAACmQgBAJgGAGQgFAGgJAAQgKAAgGgGQgGgGAAgJIAAgCQgHAKgMAHQgLAHgRAAQgRAAgQgJgAMWFoQgIAFgFAJQgFAJAAANIAAAAQAAANAFAJQAFAKAIAFQAIAFAKAAQAKAAAJgFQAIgFAFgKQAFgJAAgNIAAAAQAAgNgFgJQgFgJgIgFQgJgGgKAAQgKAAgIAGgAGcHVQgMgGgHgKQgGgKgBgPIAAAAQABgRAHgKQAIgLANgFQAOgFASAAQALAAAJABIAQAFIAAgDQAAgNgIgHQgIgHgQAAIgQABIgNADIgDABIgDAAQgIAAgFgFQgFgFAAgHQAAgGADgEQADgFAGgCQAKgDALgCQAMgDAOAAQASAAAMAFQANAEAIAIQAIAJAEAMQAEAMAAAPIAABEQAAAJgGAGQgGAGgIAAQgKAAgFgGQgGgFAAgHQgHAJgMAFQgLAFgPAAQgOAAgMgFgAGzGaQgHAGAAAKIAAAAQAAAJAGAFQAGAFALAAQAPAAAJgIQAJgHAAgMIAAgHQgFgDgHgBQgHgCgIAAQgOAAgIAFgAm5HWQgKgEgFgKQgFgKgBgRIAAhHIgBAAQgIgBgFgFQgFgFAAgIQAAgHAFgGQAFgFAIAAIABAAIAAgTQABgJAGgGQAGgGAJAAQAJAAAGAGQAGAGAAAJIAAATIATAAQAHAAAFAFQAGAGAAAHQAAAIgGAFQgFAFgHABIgTAAIAABAQAAAHADAEQADADAIAAIACAAIADAAQAHAAAFAFQAFAFAAAIQAAAFgDAFQgDAEgFACIgLADIgNABQgNAAgKgEgAo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FQgNAFgRAAQgOAAgOgEgAF4DBQgLgGgHgKQgHgKAAgPIAAAAQAAgRAIgKQAHgLAOgFQANgFASAAQAMAAAIABIARAFIAAgDQAAgNgIgHQgIgHgQAAIgQABIgOADIgDABIgDAAQgHAAgFgFQgFgFAAgHQAAgGADgEQADgFAFgCQAKgDAMgCQALgDAPAAQARAAANAFQANAEAIAIQAIAJAEAMQAEAMAAAPIAABEQAAAJgGAGQgGAGgJAAQgJAAgGgGQgFgFAAgHQgIAJgLAFQgLAFgQAAQgOAAgMgFgAGQCGQgIAGAAAKIAAAAQAAAJAGAFQAHAFAKAAQAPAAAJgIQAJgHAAgMIAAgHQgFgDgHgBQgHgCgIAAQgNAAgIAFgADHC9QgPgJgKgRQgKgRAAgaIAAAAQAAgZAKgSQAJgRAQgJQAPgJASAAQARABALAGQAMAGAHAKIAAg3QAAgJAGgFQAGgGAKAAQAJAAAFAGQAGAFABAJIAACmQgBAJgGAGQgFAGgJAAQgKAAgGgGQgGgGAAgJIAAgCQgHAKgMAHQgLAHgRAAQgRAAgQgJgADhBUQgIAFgFAJQgFAJAAANIAAAAQAAANAFAJQAFAKAIAFQAIAFAKAAQAKAAAJgFQAIgFAFgKQAFgJAAgNIAAAAQAAgNgFgJQgFgJgIgFQgJgGgKAAQgKAAgIAGgAAVDBQgLgGgHgKQgGgKAAgPIAAAAQAAgRAHgKQAHgLAOgFQANgFASAAQAMAAAIABIARAFIAAgDQAAgNgIgHQgIgHgQAAIgQABIgOADIgDABIgDAAQgHAAgFgFQgFgFAAgHQAAgGADgEQADgFAFgCQAKgDAMgCQALgDAPAAQARAAANAFQANAEAIAIQAIAJAEAMQAEAMAAAPIAABEQAAAJgGAGQgGAGgJAAQgJAAgGgGQgFgFAAgHQgIAJgLAFQgLAFgQAAQgOAAgMgFgAAtCGQgIAGAAAKIAAAAQAAAJAGAFQAHAFAKAAQAPAAAJgIQAJgHAAgMIAAgHQgFgDgHgBQgHgCgIAAQgNAAgIAFgAk+DBQgMgGgHgKQgGgKgBgPIAAAAQABgRAHgKQAIgLANgFQAOgFASAAQALAAAJABIAQAFIAAgDQAAgNgIgHQgIgHgQAAIgQABIgNADIgDABIgDAAQgIAAgFgFQgFgFAAgHQAAgGADgEQADgFAGgCQAKgDALgCQAMgDAOAAQASAAAMAFQANAEAIAIQAIAJAEAMQAEAMAAAPIAABEQAAAJgGAGQgGAGgIAAQgKAAgFgGQgGgFAAgHQgHAJgMAFQgLAFgPAAQgOAAgMgFgAknCGQgHAGAAAKIAAAAQAAAJAGAFQAGAFALAAQAPAAAJgIQAJgHAAgMIAAgHQgFgDgHgBQgHgCgIAAQgOAAgIAFgAQnC/QgGgGAAgJIAAiIIgPAEIgEABIgEAAQgHAAgGgFQgFgGAAgHQAAgHAEgFQADgFAHgCIAcgIIALgCIAJgBIAAAAQAKABAFAFQAGAGABAJIAACeQgBAJgGAGQgFAGgKAAQgJAAgGgGgAOXC+QgGgGABgIIAEgXIglAAIgFAdQgBAGgFAEQgFAFgHAAQgJAAgFgGQgFgGABgJIAEgXIgHAAQgHAAgFgFQgFgFgBgIQABgHAFgFQAFgFAHgBIANAAIAHgpIgKAAQgHAAgGgFQgFgFAAgIQAAgIAFgFQAGgFAHAAIAQAAIAFgcQABgGAFgEQAFgDAHAAQAIAAAFAFQAGAGgBAJIgEAVIAmAAIAFgcQABgGAFgEQAFgDAGAAQAJAAAFAFQAFAGgBAJIgDAVIAGAAQAIAAAFAFQAFAFAAAIQAAAIgFAFQgFAFgIAAIgMAAIgHApIAJAAQAIABAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAIgQAAIgFAdQgBAHgFAEQgFAEgHAAQgIAAgFgHgAN3B1IAmAAIAHgpIgmAAgAhDC/QgGgGgBgJIAAhBQAAgPgHgHQgGgIgNAAQgMAAgHAIQgHAHAAAQIAABAQAAAJgHAGQgFAGgKAAQgJAAgFgGQgGgGgBgJIAAhvQABgJAGgGQAFgGAJgBQAKABAFAGQAHAGAAAJIAAABQAHgJAKgHQALgHAQgBQAYABANAOQAOAPAAAaIAABOQAAAJgGAGQgGAGgJAAQgKAAgFgGgAuEC/QgGgGAAgJIAAhvQAAgJAGgGQAGgGAJgBQAJABAGAGQAGAGAAAJIAAAHQADgIAFgGQAEgHAFgEQAGgDAGgBQAKABAFAFQAGAGAAAJQAAAJgFAFQgEAFgHABQgQAEgJANQgJAMAAAXIAAAoQAAAJgGAGQgGAGgJAAQgJAAgGgGgAwHC/QgGgGgBgKIAAiIIgpAAQgIAAgGgGQgGgGAAgIQAAgIAGgGQAGgFAIAAIB+AAQAIAAAGAFQAGAGAAAIQAAAIgGAGQgGAGgIAAIgqAAIAACIQAAAKgGAGQgGAGgJAAQgJAAgGgGgAIEBXQgDgDAAgEQABgEACgCIAGgDQALgDAFgHQAGgHgBgKQgHgCgGgGQgGgGAAgJIAAAAQAAgLAGgGQAGgFALAAQAMAAAGAHQAHAIAAAPIAAABQAAAPgEAMQgFALgIAIQgGAGgIAEQgJADgIAAQgFAAgDgCg");
	mask.setTransform(-1.775,47.475);

	// Layer_2_obj_
	this.Layer_2 = new lib.headline_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.setTransform(-161,48.5,1,1,0,0,0,-161,48.5);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 0
	this.Layer_2.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(59));

	// copy_obj_
	this.copy = new lib.headline_copy();
	this.copy.name = "copy";
	this.copy.parent = this;
	this.copy.setTransform(-1.8,70.7,1,1,0,0,0,-1.8,70.7);
	this.copy.depth = 0;
	this.copy.isAttachedToCamera = 0
	this.copy.isAttachedToMask = 0
	this.copy.layerDepth = 0
	this.copy.layerIndex = 1
	this.copy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.copy).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.curtain_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.curtain_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(160,45,1,1,0,0,0,160,45);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.curtain_1, new cjs.Rectangle(0,0,320,90), null);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.cta_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(160,25,1,1,0,0,0,160,25);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,320,50), null);


(lib.background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.background_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(160,25,1,1,0,0,0,160,25);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.background_1, new cjs.Rectangle(0,0,320,50), null);


(lib.Scene_1_new_legal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// new_legal
	this.instance = new lib.newLegal();
	this.instance.parent = this;
	this.instance.setTransform(160,25,1,1,0,0,0,160,25);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({alpha:1},14).wait(128).to({alpha:0},8).wait(105).to({alpha:1},14).wait(128).to({alpha:0},8).wait(415));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_kitten = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kitten
	this.instance = new lib.kitten_1();
	this.instance.parent = this;
	this.instance.setTransform(160,25,1,1,0,0,0,160,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(686));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_headline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// headline
	this.headline = new lib.headline();
	this.headline.name = "headline";
	this.headline.parent = this;
	this.headline.setTransform(-89.55,-32.5,0.75,0.75);
	this.headline._off = true;

	this.timeline.addTween(cjs.Tween.get(this.headline).wait(4).to({_off:false},0).to({x:230.45},26,cjs.Ease.quadOut).wait(127).to({x:410.45},11,cjs.Ease.quadIn).wait(87).to({x:-89.55},0).wait(4).to({x:230.45},26,cjs.Ease.quadOut).wait(128).to({x:410.45},11,cjs.Ease.quadIn).wait(262));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_curtain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// curtain
	this.instance = new lib.curtain_1();
	this.instance.parent = this;
	this.instance.setTransform(-186.05,33,1,1,-107.9329,0,0,111,45);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({rotation:0,x:111,y:25},26,cjs.Ease.quadOut).wait(127).to({rotation:-107.9329,x:-186.05,y:33},26).to({_off:true},72).wait(4).to({_off:false},0).to({rotation:0,x:111,y:25},26,cjs.Ease.quadOut).wait(128).to({rotation:-107.9329,x:-186.05,y:33},26).wait(247));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cta
	this.instance = new lib.cta_1();
	this.instance.parent = this;
	this.instance.setTransform(160,-25,1,1,0,0,0,160,25);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(181).to({_off:false},0).to({y:25},11,cjs.Ease.quadOut).to({_off:true},63).wait(182).to({_off:false,y:-25},0).to({y:25},11,cjs.Ease.quadOut).wait(238));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cover
	this.instance = new lib.background_1();
	this.instance.parent = this;
	this.instance.setTransform(160,25,1,1,0,0,0,160,25);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(243).to({_off:false},0).to({alpha:1},11).to({_off:true},1).wait(257));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// background
	this.instance = new lib.background_1();
	this.instance.parent = this;
	this.instance.setTransform(160,25,1,1,0,0,0,160,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(512));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib._320 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_4 = function() {
		if(this.headline.parent == undefined || this.headline.parent == this)
		this.headline = this.headline.headline;
	}
	this.frame_30 = function() {
		if(this.headline.parent == undefined || this.headline.parent == this)
		this.headline = this.headline.headline;
	}
	this.frame_37 = function() {
		this.headline.gotoAndPlay("light");
	}
	this.frame_157 = function() {
		if(this.headline.parent == undefined || this.headline.parent == this)
		this.headline = this.headline.headline;
	}
	this.frame_168 = function() {
		if(this.headline.parent == undefined || this.headline.parent == this)
		this.headline = this.headline.headline;
	}
	this.frame_255 = function() {
		if(this.headline.parent == undefined || this.headline.parent == this)
		this.headline = this.headline.headline;
		this.headline.gotoAndStop(1);
	}
	this.frame_259 = function() {
		if(this.headline.parent == undefined || this.headline.parent == this)
		this.headline = this.headline.headline;
	}
	this.frame_285 = function() {
		if(this.headline.parent == undefined || this.headline.parent == this)
		this.headline = this.headline.headline;
	}
	this.frame_292 = function() {
		this.headline.gotoAndPlay("light");
	}
	this.frame_413 = function() {
		if(this.headline.parent == undefined || this.headline.parent == this)
		this.headline = this.headline.headline;
	}
	this.frame_424 = function() {
		if(this.headline.parent == undefined || this.headline.parent == this)
		this.headline = this.headline.headline;
	}
	this.frame_449 = function() {
		this.stop();
	}
	this.frame_835 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(26).call(this.frame_30).wait(7).call(this.frame_37).wait(120).call(this.frame_157).wait(11).call(this.frame_168).wait(87).call(this.frame_255).wait(4).call(this.frame_259).wait(26).call(this.frame_285).wait(7).call(this.frame_292).wait(121).call(this.frame_413).wait(11).call(this.frame_424).wait(25).call(this.frame_449).wait(386).call(this.frame_835).wait(1));

	// outline_obj_
	this.outline = new lib.Scene_1_outline();
	this.outline.name = "outline";
	this.outline.parent = this;
	this.outline.setTransform(160,25,1,1,0,0,0,160,25);
	this.outline.depth = 0;
	this.outline.isAttachedToCamera = 0
	this.outline.isAttachedToMask = 0
	this.outline.layerDepth = 0
	this.outline.layerIndex = 0
	this.outline.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.outline).to({_off:true},512).wait(324));

	// cover_obj_
	this.cover = new lib.Scene_1_cover();
	this.cover.name = "cover";
	this.cover.parent = this;
	this.cover.depth = 0;
	this.cover.isAttachedToCamera = 0
	this.cover.isAttachedToMask = 0
	this.cover.layerDepth = 0
	this.cover.layerIndex = 1
	this.cover.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cover).wait(255).to({_off:true},257).wait(324));

	// cta_obj_
	this.cta = new lib.Scene_1_cta();
	this.cta.name = "cta";
	this.cta.parent = this;
	this.cta.depth = 0;
	this.cta.isAttachedToCamera = 0
	this.cta.isAttachedToMask = 0
	this.cta.layerDepth = 0
	this.cta.layerIndex = 2
	this.cta.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(448).to({_off:true},238).wait(150));

	// headline_obj_
	this.headline = new lib.Scene_1_headline();
	this.headline.name = "headline";
	this.headline.parent = this;
	this.headline.depth = 0;
	this.headline.isAttachedToCamera = 0
	this.headline.isAttachedToMask = 0
	this.headline.layerDepth = 0
	this.headline.layerIndex = 3
	this.headline.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.headline).wait(424).to({_off:true},262).wait(150));

	// curtain_obj_
	this.curtain = new lib.Scene_1_curtain();
	this.curtain.name = "curtain";
	this.curtain.parent = this;
	this.curtain.depth = 0;
	this.curtain.isAttachedToCamera = 0
	this.curtain.isAttachedToMask = 0
	this.curtain.layerDepth = 0
	this.curtain.layerIndex = 4
	this.curtain.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.curtain).wait(439).to({_off:true},247).wait(150));

	// kitten_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A1hupIYoNdIEkMMI00Fmg");
	var mask_graphics_4 = new cjs.Graphics().p("A1hupIYoNdIEkMMI00Fmg");
	var mask_graphics_5 = new cjs.Graphics().p("AzDwCIWgQuIC1MuI1YCpg");
	var mask_graphics_6 = new cjs.Graphics().p("AwuQFMAATggVIUHTiIBJM/g");
	var mask_graphics_7 = new cjs.Graphics().p("AwTOkMAEYggBIRfV6IghNBg");
	var mask_graphics_8 = new cjs.Graphics().p("AvzM4IIP/PIOrX5IiGM2g");
	var mask_graphics_9 = new cjs.Graphics().p("AvPLFIL3+DILwZcIjmMhg");
	var mask_graphics_10 = new cjs.Graphics().p("AulJRIPE8kII6akIk8MDg");
	var mask_graphics_11 = new cjs.Graphics().p("At3HaIR+6zIGFbWImMLdg");
	var mask_graphics_12 = new cjs.Graphics().p("AtFFlIUl43IDSb0InTKxg");
	var mask_graphics_13 = new cjs.Graphics().p("AsSDxIW42xIAmcAIoSKBg");
	var mask_graphics_14 = new cjs.Graphics().p("AsZCFIYz0rIh4b9IpJJQg");
	var mask_graphics_15 = new cjs.Graphics().p("AtPAZIafycIkSbsIp5Ibg");
	var mask_graphics_16 = new cjs.Graphics().p("At7hHIb3wVImdbRIqiHog");
	var mask_graphics_17 = new cjs.Graphics().p("AueifIc9uUIoYawIrCG3g");
	var mask_graphics_18 = new cjs.Graphics().p("Au7j0Id3sRIqNaGIrfGFg");
	var mask_graphics_19 = new cjs.Graphics().p("AvSk/IelqZIrzZbIr2FWg");
	var mask_graphics_20 = new cjs.Graphics().p("AvjmDIfHopItOYuIsIErg");
	var mask_graphics_21 = new cjs.Graphics().p("AvxnAIfjnAIugX/IsXECg");
	var mask_graphics_22 = new cjs.Graphics().p("Av6n2If1lhIvoXTIsiDcg");
	var mask_graphics_23 = new cjs.Graphics().p("AwBojMAgDgEPIwiWpIssC8g");
	var mask_graphics_24 = new cjs.Graphics().p("AwFpKMAgLgDHIxUWEIsyCfg");
	var mask_graphics_25 = new cjs.Graphics().p("AwHprMAgPgCJIx+ViIs2CHg");
	var mask_graphics_26 = new cjs.Graphics().p("AwJqHMAgTgBTIyhVEIs6Bxg");
	var mask_graphics_27 = new cjs.Graphics().p("AwKqaMAgVgAuIy6UuIs8Bjg");
	var mask_graphics_28 = new cjs.Graphics().p("AwKqnMAgVgAUIzLUfIs9BYg");
	var mask_graphics_29 = new cjs.Graphics().p("AwKqwMAgVgACIzWUUIs+BRg");
	var mask_graphics_30 = new cjs.Graphics().p("AwKqxMAgVAAAIzXUTIs+BQg");
	var mask_graphics_157 = new cjs.Graphics().p("AwKqxMAgVAAAIzXUTIs+BQg");
	var mask_graphics_158 = new cjs.Graphics().p("AwHpnMAgPgCRIx5VnIs2CKg");
	var mask_graphics_159 = new cjs.Graphics().p("Av/oaIf/kgIwVWyIsqDDg");
	var mask_graphics_160 = new cjs.Graphics().p("AvznKIfnmvIutX4IsaD7g");
	var mask_graphics_161 = new cjs.Graphics().p("Avhl4IfDo7ItAY1IsGEyg");
	var mask_graphics_162 = new cjs.Graphics().p("AvKkkIeVrFIrOZsIruFng");
	var mask_graphics_163 = new cjs.Graphics().p("AuvjOIdftMIpZaaIrTGbg");
	var mask_graphics_164 = new cjs.Graphics().p("AuNh0IcbvUInbbBIqzHQg");
	var mask_graphics_165 = new cjs.Graphics().p("AtogdIbRxRIlgbeIqRH/g");
	var mask_graphics_166 = new cjs.Graphics().p("As/A5IZ/zHIjkbyIprIrg");
	var mask_graphics_167 = new cjs.Graphics().p("AsSCQIYl05Ihmb+IpEJVg");
	var mask_graphics_168 = new cjs.Graphics().p("AsNDmIXE2kIAXcAIoYJ9g");
	var mask_graphics_169 = new cjs.Graphics().p("As1E8IVb4JICVb6InqKhg");
	var mask_graphics_170 = new cjs.Graphics().p("AtYGTITl5pIEYbqIm3LDg");
	var mask_graphics_171 = new cjs.Graphics().p("At6HkIRw69IGTbTImFLgg");
	var mask_graphics_172 = new cjs.Graphics().p("AuZIzIP08JIINazIlQL6g");
	var mask_graphics_173 = new cjs.Graphics().p("Au1KAIN19MIKDaKIkbMPg");
	var mask_graphics_174 = new cjs.Graphics().p("AvOLJILv+GIL3ZZIjjMig");
	var mask_graphics_175 = new cjs.Graphics().p("AvlMPIJm+2INnYgIiqMvg");
	var mask_graphics_176 = new cjs.Graphics().p("Av6NQIHa/cIPTXfIhwM6g");
	var mask_graphics_177 = new cjs.Graphics().p("AwLORIFG/6IQ+WTIgzNAg");
	var mask_graphics_178 = new cjs.Graphics().p("AwcPKMAC3ggMISgVEIAHNBg");
	var mask_graphics_179 = new cjs.Graphics().p("AwqP+MAAlggUIT9TuIBBM/g");
	var mask_graphics_180 = new cjs.Graphics().p("AxrwJIVOSXIB4M5I1hBDg");
	var mask_graphics_181 = new cjs.Graphics().p("Ay+wCIWcQ0ICyMuI1ZCjg");
	var mask_graphics_182 = new cjs.Graphics().p("A0PvpIXjPNIDqMfI1JEDg");
	var mask_graphics_183 = new cjs.Graphics().p("A1hupIYoNdIEkMMI00Fmg");
	var mask_graphics_255 = new cjs.Graphics().p("A1hupIYoNdIEkMMI00Fmg");
	var mask_graphics_259 = new cjs.Graphics().p("A1hupIYoNdIEkMMI00Fmg");
	var mask_graphics_260 = new cjs.Graphics().p("AzDwCIWgQuIC1MuI1YCpg");
	var mask_graphics_261 = new cjs.Graphics().p("AwuQFMAATggVIUHTiIBJM/g");
	var mask_graphics_262 = new cjs.Graphics().p("AwTOkMAEYggBIRfV6IghNBg");
	var mask_graphics_263 = new cjs.Graphics().p("AvzM4IIP/PIOrX5IiGM2g");
	var mask_graphics_264 = new cjs.Graphics().p("AvPLFIL3+DILwZcIjmMhg");
	var mask_graphics_265 = new cjs.Graphics().p("AulJRIPE8kII6akIk8MDg");
	var mask_graphics_266 = new cjs.Graphics().p("At3HaIR+6zIGFbWImMLdg");
	var mask_graphics_267 = new cjs.Graphics().p("AtFFlIUl43IDSb0InTKxg");
	var mask_graphics_268 = new cjs.Graphics().p("AsSDxIW42xIAmcAIoSKBg");
	var mask_graphics_269 = new cjs.Graphics().p("AsZCFIYz0rIh4b9IpJJQg");
	var mask_graphics_270 = new cjs.Graphics().p("AtPAZIafycIkSbsIp5Ibg");
	var mask_graphics_271 = new cjs.Graphics().p("At7hHIb3wVImdbRIqiHog");
	var mask_graphics_272 = new cjs.Graphics().p("AueifIc9uUIoYawIrCG3g");
	var mask_graphics_273 = new cjs.Graphics().p("Au7j0Id3sRIqNaGIrfGFg");
	var mask_graphics_274 = new cjs.Graphics().p("AvSk/IelqZIrzZbIr2FWg");
	var mask_graphics_275 = new cjs.Graphics().p("AvjmDIfHopItOYuIsIErg");
	var mask_graphics_276 = new cjs.Graphics().p("AvxnAIfjnAIugX/IsXECg");
	var mask_graphics_277 = new cjs.Graphics().p("Av6n2If1lhIvoXTIsiDcg");
	var mask_graphics_278 = new cjs.Graphics().p("AwBojMAgDgEPIwiWpIssC8g");
	var mask_graphics_279 = new cjs.Graphics().p("AwFpKMAgLgDHIxUWEIsyCfg");
	var mask_graphics_280 = new cjs.Graphics().p("AwHprMAgPgCJIx+ViIs2CHg");
	var mask_graphics_281 = new cjs.Graphics().p("AwJqHMAgTgBTIyhVEIs6Bxg");
	var mask_graphics_282 = new cjs.Graphics().p("AwKqaMAgVgAuIy6UuIs8Bjg");
	var mask_graphics_283 = new cjs.Graphics().p("AwKqnMAgVgAUIzLUfIs9BYg");
	var mask_graphics_284 = new cjs.Graphics().p("AwKqwMAgVgACIzWUUIs+BRg");
	var mask_graphics_285 = new cjs.Graphics().p("AwKqxMAgVAAAIzXUTIs+BQg");
	var mask_graphics_413 = new cjs.Graphics().p("AwKqxMAgVAAAIzXUTIs+BQg");
	var mask_graphics_414 = new cjs.Graphics().p("AwHpnMAgPgCRIx5VnIs2CKg");
	var mask_graphics_415 = new cjs.Graphics().p("Av/oaIf/kgIwVWyIsqDDg");
	var mask_graphics_416 = new cjs.Graphics().p("AvznKIfnmvIutX4IsaD7g");
	var mask_graphics_417 = new cjs.Graphics().p("Avhl4IfDo7ItAY1IsGEyg");
	var mask_graphics_418 = new cjs.Graphics().p("AvKkkIeVrFIrOZsIruFng");
	var mask_graphics_419 = new cjs.Graphics().p("AuvjOIdftMIpZaaIrTGbg");
	var mask_graphics_420 = new cjs.Graphics().p("AuNh0IcbvUInbbBIqzHQg");
	var mask_graphics_421 = new cjs.Graphics().p("AtogdIbRxRIlgbeIqRH/g");
	var mask_graphics_422 = new cjs.Graphics().p("As/A5IZ/zHIjkbyIprIrg");
	var mask_graphics_423 = new cjs.Graphics().p("AsSCQIYl05Ihmb+IpEJVg");
	var mask_graphics_424 = new cjs.Graphics().p("AsNDmIXE2kIAXcAIoYJ9g");
	var mask_graphics_425 = new cjs.Graphics().p("As1E8IVb4JICVb6InqKhg");
	var mask_graphics_426 = new cjs.Graphics().p("AtYGTITl5pIEYbqIm3LDg");
	var mask_graphics_427 = new cjs.Graphics().p("At6HkIRw69IGTbTImFLgg");
	var mask_graphics_428 = new cjs.Graphics().p("AuZIzIP08JIINazIlQL6g");
	var mask_graphics_429 = new cjs.Graphics().p("Au1KAIN19MIKDaKIkbMPg");
	var mask_graphics_430 = new cjs.Graphics().p("AvOLJILv+GIL3ZZIjjMig");
	var mask_graphics_431 = new cjs.Graphics().p("AvlMPIJm+2INnYgIiqMvg");
	var mask_graphics_432 = new cjs.Graphics().p("Av6NQIHa/cIPTXfIhwM6g");
	var mask_graphics_433 = new cjs.Graphics().p("AwLORIFG/6IQ+WTIgzNAg");
	var mask_graphics_434 = new cjs.Graphics().p("AwcPKMAC3ggMISgVEIAHNBg");
	var mask_graphics_435 = new cjs.Graphics().p("AwqP+MAAlggUIT9TuIBBM/g");
	var mask_graphics_436 = new cjs.Graphics().p("AxrwJIVOSXIB4M5I1hBDg");
	var mask_graphics_437 = new cjs.Graphics().p("Ay+wCIWcQ0ICyMuI1ZCjg");
	var mask_graphics_438 = new cjs.Graphics().p("A0PvpIXjPNIDqMfI1JEDg");
	var mask_graphics_439 = new cjs.Graphics().p("A1hupIYoNdIEkMMI00Fmg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-137.7628,y:106.15}).wait(4).to({graphics:mask_graphics_4,x:-137.7628,y:106.15}).wait(1).to({graphics:mask_graphics_5,x:-121.9751,y:97.1228}).wait(1).to({graphics:mask_graphics_6,x:-107.075,y:83.0738}).wait(1).to({graphics:mask_graphics_7,x:-104.375,y:77.7285}).wait(1).to({graphics:mask_graphics_8,x:-101.225,y:72.5466}).wait(1).to({graphics:mask_graphics_9,x:-97.6,y:67.6664}).wait(1).to({graphics:mask_graphics_10,x:-93.375,y:62.9989}).wait(1).to({graphics:mask_graphics_11,x:-88.8,y:58.5557}).wait(1).to({graphics:mask_graphics_12,x:-83.825,y:54.334}).wait(1).to({graphics:mask_graphics_13,x:-78.65,y:50.3033}).wait(1).to({graphics:mask_graphics_14,x:-67.0988,y:46.5661}).wait(1).to({graphics:mask_graphics_15,x:-50.6582,y:43.011}).wait(1).to({graphics:mask_graphics_16,x:-35.0599,y:39.6958}).wait(1).to({graphics:mask_graphics_17,x:-20.5276,y:36.6561}).wait(1).to({graphics:mask_graphics_18,x:-6.7069,y:33.8247}).wait(1).to({graphics:mask_graphics_19,x:5.9872,y:31.1716}).wait(1).to({graphics:mask_graphics_20,x:17.6871,y:28.8525}).wait(1).to({graphics:mask_graphics_21,x:28.3621,y:26.6712}).wait(1).to({graphics:mask_graphics_22,x:38.0286,y:24.7886}).wait(1).to({graphics:mask_graphics_23,x:46.4103,y:23.0638}).wait(1).to({graphics:mask_graphics_24,x:53.7336,y:21.5936}).wait(1).to({graphics:mask_graphics_25,x:60.0489,y:20.3538}).wait(1).to({graphics:mask_graphics_26,x:65.1989,y:19.2617}).wait(1).to({graphics:mask_graphics_27,x:69.0621,y:18.5}).wait(1).to({graphics:mask_graphics_28,x:71.8889,y:17.934}).wait(1).to({graphics:mask_graphics_29,x:73.5953,y:17.5774}).wait(1).to({graphics:mask_graphics_30,x:74,y:17.5}).wait(127).to({graphics:mask_graphics_157,x:74,y:17.5}).wait(1).to({graphics:mask_graphics_158,x:59.372,y:20.5268}).wait(1).to({graphics:mask_graphics_159,x:44.7403,y:23.4541}).wait(1).to({graphics:mask_graphics_160,x:30.1063,y:26.4677}).wait(1).to({graphics:mask_graphics_161,x:15.5781,y:29.3575}).wait(1).to({graphics:mask_graphics_162,x:1.1618,y:32.211}).wait(1).to({graphics:mask_graphics_163,x:-13.1798,y:35.2213}).wait(1).to({graphics:mask_graphics_164,x:-27.5921,y:38.1262}).wait(1).to({graphics:mask_graphics_165,x:-41.5624,y:41.1238}).wait(1).to({graphics:mask_graphics_166,x:-55.4106,y:44.1077}).wait(1).to({graphics:mask_graphics_167,x:-69.0648,y:47.0195}).wait(1).to({graphics:mask_graphics_168,x:-78.175,y:50.003}).wait(1).to({graphics:mask_graphics_169,x:-82.15,y:52.9491}).wait(1).to({graphics:mask_graphics_170,x:-85.725,y:55.963}).wait(1).to({graphics:mask_graphics_171,x:-89.05,y:58.8681}).wait(1).to({graphics:mask_graphics_172,x:-92.15,y:61.8122}).wait(1).to({graphics:mask_graphics_173,x:-94.95,y:64.78}).wait(1).to({graphics:mask_graphics_174,x:-97.525,y:67.7116}).wait(1).to({graphics:mask_graphics_175,x:-99.825,y:70.6933}).wait(1).to({graphics:mask_graphics_176,x:-101.925,y:73.6556}).wait(1).to({graphics:mask_graphics_177,x:-103.625,y:76.6068}).wait(1).to({graphics:mask_graphics_178,x:-105.25,y:79.5524}).wait(1).to({graphics:mask_graphics_179,x:-106.7,y:82.524}).wait(1).to({graphics:mask_graphics_180,x:-113.1503,y:88.7906}).wait(1).to({graphics:mask_graphics_181,x:-121.491,y:96.6191}).wait(1).to({graphics:mask_graphics_182,x:-129.6218,y:102.975}).wait(1).to({graphics:mask_graphics_183,x:-137.7628,y:106.15}).wait(72).to({graphics:mask_graphics_255,x:-137.7628,y:106.15}).wait(4).to({graphics:mask_graphics_259,x:-137.7628,y:106.15}).wait(1).to({graphics:mask_graphics_260,x:-121.9751,y:97.1228}).wait(1).to({graphics:mask_graphics_261,x:-107.075,y:83.0738}).wait(1).to({graphics:mask_graphics_262,x:-104.375,y:77.7285}).wait(1).to({graphics:mask_graphics_263,x:-101.225,y:72.5466}).wait(1).to({graphics:mask_graphics_264,x:-97.6,y:67.6664}).wait(1).to({graphics:mask_graphics_265,x:-93.375,y:62.9989}).wait(1).to({graphics:mask_graphics_266,x:-88.8,y:58.5557}).wait(1).to({graphics:mask_graphics_267,x:-83.825,y:54.334}).wait(1).to({graphics:mask_graphics_268,x:-78.65,y:50.3033}).wait(1).to({graphics:mask_graphics_269,x:-67.0988,y:46.5661}).wait(1).to({graphics:mask_graphics_270,x:-50.6582,y:43.011}).wait(1).to({graphics:mask_graphics_271,x:-35.0599,y:39.6958}).wait(1).to({graphics:mask_graphics_272,x:-20.5276,y:36.6561}).wait(1).to({graphics:mask_graphics_273,x:-6.7069,y:33.8247}).wait(1).to({graphics:mask_graphics_274,x:5.9872,y:31.1716}).wait(1).to({graphics:mask_graphics_275,x:17.6871,y:28.8525}).wait(1).to({graphics:mask_graphics_276,x:28.3621,y:26.6712}).wait(1).to({graphics:mask_graphics_277,x:38.0286,y:24.7886}).wait(1).to({graphics:mask_graphics_278,x:46.4103,y:23.0638}).wait(1).to({graphics:mask_graphics_279,x:53.7336,y:21.5936}).wait(1).to({graphics:mask_graphics_280,x:60.0489,y:20.3538}).wait(1).to({graphics:mask_graphics_281,x:65.1989,y:19.2617}).wait(1).to({graphics:mask_graphics_282,x:69.0621,y:18.5}).wait(1).to({graphics:mask_graphics_283,x:71.8889,y:17.934}).wait(1).to({graphics:mask_graphics_284,x:73.5953,y:17.5774}).wait(1).to({graphics:mask_graphics_285,x:74,y:17.5}).wait(128).to({graphics:mask_graphics_413,x:74,y:17.5}).wait(1).to({graphics:mask_graphics_414,x:59.372,y:20.5268}).wait(1).to({graphics:mask_graphics_415,x:44.7403,y:23.4541}).wait(1).to({graphics:mask_graphics_416,x:30.1063,y:26.4677}).wait(1).to({graphics:mask_graphics_417,x:15.5781,y:29.3575}).wait(1).to({graphics:mask_graphics_418,x:1.1618,y:32.211}).wait(1).to({graphics:mask_graphics_419,x:-13.1798,y:35.2213}).wait(1).to({graphics:mask_graphics_420,x:-27.5921,y:38.1262}).wait(1).to({graphics:mask_graphics_421,x:-41.5624,y:41.1238}).wait(1).to({graphics:mask_graphics_422,x:-55.4106,y:44.1077}).wait(1).to({graphics:mask_graphics_423,x:-69.0648,y:47.0195}).wait(1).to({graphics:mask_graphics_424,x:-78.175,y:50.003}).wait(1).to({graphics:mask_graphics_425,x:-82.15,y:52.9491}).wait(1).to({graphics:mask_graphics_426,x:-85.725,y:55.963}).wait(1).to({graphics:mask_graphics_427,x:-89.05,y:58.8681}).wait(1).to({graphics:mask_graphics_428,x:-92.15,y:61.8122}).wait(1).to({graphics:mask_graphics_429,x:-94.95,y:64.78}).wait(1).to({graphics:mask_graphics_430,x:-97.525,y:67.7116}).wait(1).to({graphics:mask_graphics_431,x:-99.825,y:70.6933}).wait(1).to({graphics:mask_graphics_432,x:-101.925,y:73.6556}).wait(1).to({graphics:mask_graphics_433,x:-103.625,y:76.6068}).wait(1).to({graphics:mask_graphics_434,x:-105.25,y:79.5524}).wait(1).to({graphics:mask_graphics_435,x:-106.7,y:82.524}).wait(1).to({graphics:mask_graphics_436,x:-113.1503,y:88.7906}).wait(1).to({graphics:mask_graphics_437,x:-121.491,y:96.6191}).wait(1).to({graphics:mask_graphics_438,x:-129.6218,y:102.975}).wait(1).to({graphics:mask_graphics_439,x:-137.7628,y:106.15}).wait(397));

	// kitten_obj_
	this.kitten = new lib.Scene_1_kitten();
	this.kitten.name = "kitten";
	this.kitten.parent = this;
	this.kitten.setTransform(160,25,1,1,0,0,0,160,25);
	this.kitten.depth = 0;
	this.kitten.isAttachedToCamera = 0
	this.kitten.isAttachedToMask = 0
	this.kitten.layerDepth = 0
	this.kitten.layerIndex = 5
	this.kitten.maskLayerName = 0

	var maskedShapeInstanceList = [this.kitten];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.kitten).wait(255).to({_off:true},431).wait(150));

	// logo_obj_
	this.logo = new lib.Scene_1_logo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.depth = 0;
	this.logo.isAttachedToCamera = 0
	this.logo.isAttachedToMask = 0
	this.logo.layerDepth = 0
	this.logo.layerIndex = 6
	this.logo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(413).to({_off:true},273).wait(150));

	// new_legal_obj_
	this.new_legal = new lib.Scene_1_new_legal();
	this.new_legal.name = "new_legal";
	this.new_legal.parent = this;
	this.new_legal.depth = 0;
	this.new_legal.isAttachedToCamera = 0
	this.new_legal.isAttachedToMask = 0
	this.new_legal.layerDepth = 0
	this.new_legal.layerIndex = 7
	this.new_legal.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.new_legal).wait(836));

	// background_obj_
	this.background = new lib.Scene_1_background();
	this.background.name = "background";
	this.background.parent = this;
	this.background.setTransform(160,25,1,1,0,0,0,160,25);
	this.background.depth = 0;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 8
	this.background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background).to({_off:true},512).wait(324));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.2,-158,624.8,310.5);
// library properties:
lib.properties = {
	id: 'B82DDE33B5D68C469B6C436D6B72A1A3',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"background.png?1566840721782", id:"background"},
		{src:"cta.png?1566840721783", id:"cta"},
		{src:"curtain.png?1566840721783", id:"curtain"},
		{src:"kitten.png?1566840721783", id:"kitten"},
		{src:"legal.png?1566840721783", id:"legal"},
		{src:"light.png?1566840721783", id:"light"},
		{src:"logo.png?1566840721783", id:"logo"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B82DDE33B5D68C469B6C436D6B72A1A3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;