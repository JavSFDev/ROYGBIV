var AnimationHandler = function(){
  this.animationTypes = {
    LINEAR: 0,
    QUAD_EASE_IN: 1, QUAD_EASE_OUT: 2, QUAD_EASE_INOUT: 3,
    CUBIC_EASE_IN: 4, CUBIC_EASE_OUT: 5, CUBIC_EASE_INOUT: 6,
    QUART_EASE_IN: 7, QUART_EASE_OUT: 8, QUART_EASE_INOUT: 9,
    QUINT_EASE_IN: 10, QUINT_EASE_OUT: 11, QUINT_EASE_INOUT: 12,
    SINE_EASE_IN: 13, SINE_EASE_OUT: 14, SINE_EASE_INOUT: 15,
    EXPO_EASE_IN: 16, EXPO_EASE_OUT: 17, EXPO_EASE_INOUT: 18,
    CIRC_EASE_IN: 19, CIRC_EASE_OUT: 20, CIRC_EASE_INOUT: 21,
    ELASTIC_EASE_IN: 22, ELASTIC_EASE_OUT: 23, ELASTIC_EASE_INOUT: 24,
    BACK_EASE_IN: 25, BACK_EASE_OUT: 26, BACK_EASE_INOUT: 27,
    BOUNCE_EASE_IN: 28, BOUNCE_EASE_OUT: 29, BOUNCE_EASE_INOUT: 30
  }
  this.updateFunctionsByType = new Object();
  this.updateFunctionsByType[this.animationTypes.LINEAR] = this.linearFunc;
  this.updateFunctionsByType[this.animationTypes.QUAD_EASE_IN] = this.quadEaseInFunc;
  this.updateFunctionsByType[this.animationTypes.QUAD_EASE_OUT] = this.quadEaseOutFunc;
  this.updateFunctionsByType[this.animationTypes.QUAD_EASE_INOUT] = this.quadEaseInOutFunc;
  this.updateFunctionsByType[this.animationTypes.CUBIC_EASE_IN] = this.cubicEaseInFunc;
  this.updateFunctionsByType[this.animationTypes.CUBIC_EASE_OUT] = this.cubicEaseOutFunc;
  this.updateFunctionsByType[this.animationTypes.CUBIC_EASE_INOUT] = this.cubicEaseInOutFunc;
  this.updateFunctionsByType[this.animationTypes.QUART_EASE_IN] = this.quartEaseInFunc;
  this.updateFunctionsByType[this.animationTypes.QUART_EASE_OUT] = this.quartEaseOutFunc;
  this.updateFunctionsByType[this.animationTypes.QUART_EASE_INOUT] = this.quartEaseInOutFunc;
  this.updateFunctionsByType[this.animationTypes.QUINT_EASE_IN] = this.quintEaseInFunc;
  this.updateFunctionsByType[this.animationTypes.QUINT_EASE_OUT] = this.quintEaseOutFunc;
  this.updateFunctionsByType[this.animationTypes.QUINT_EASE_INOUT] = this.quintEaseInOutFunc;
  this.updateFunctionsByType[this.animationTypes.SINE_EASE_IN] = this.sineEaseInFunc;
  this.updateFunctionsByType[this.animationTypes.SINE_EASE_OUT] = this.sineEaseOutFunc;
  this.updateFunctionsByType[this.animationTypes.SINE_EASE_INOUT] = this.sineEaseInOutFunc;
  this.updateFunctionsByType[this.animationTypes.EXPO_EASE_IN] = this.expoEaseInFunc;
  this.updateFunctionsByType[this.animationTypes.EXPO_EASE_OUT] = this.expoEaseOutFunc;
  this.updateFunctionsByType[this.animationTypes.EXPO_EASE_INOUT] = this.expoEaseInOutFunc;
  this.updateFunctionsByType[this.animationTypes.CIRC_EASE_IN] = this.circEaseInFunc;
  this.updateFunctionsByType[this.animationTypes.CIRC_EASE_OUT] = this.circEaseOutFunc;
  this.updateFunctionsByType[this.animationTypes.CIRC_EASE_INOUT] = this.circEaseInOutFunc;
  this.updateFunctionsByType[this.animationTypes.ELASTIC_EASE_IN] = this.elasticEaseInFunc;
  this.updateFunctionsByType[this.animationTypes.ELASTIC_EASE_OUT] = this.elasticEaseOutFunc;
  this.updateFunctionsByType[this.animationTypes.ELASTIC_EASE_INOUT] = this.elasticEaseInOutFunc;
  this.updateFunctionsByType[this.animationTypes.BACK_EASE_IN] = this.backEaseInFunc;
  this.updateFunctionsByType[this.animationTypes.BACK_EASE_OUT] = this.backEaseOutFunc;
  this.updateFunctionsByType[this.animationTypes.BACK_EASE_INOUT] = this.backEaseInOutFunc;
  this.updateFunctionsByType[this.animationTypes.BOUNCE_EASE_IN] = this.bounceEaseInFunc;
  this.updateFunctionsByType[this.animationTypes.BOUNCE_EASE_OUT] = this.bounceEaseOutFunc;
  this.updateFunctionsByType[this.animationTypes.BOUNCE_EASE_INOUT] = this.bounceEaseInOutFunc;
}

AnimationHandler.prototype.linearFunc = function(curTime, startVal, changeInVal, totalTime){
  return (changeInVal * curTime / totalTime) + startVal;
}

AnimationHandler.prototype.quadEaseInFunc = function(curTime, startVal, changeInVal, totalTime){
  return changeInVal * (curTime/=totalTime) * curTime + startVal;
}

AnimationHandler.prototype.quadEaseOutFunc = function(curTime, startVal, changeInVal, totalTime){
  return -changeInVal * (curTime/=totalTime) * (curTime-2) + startVal;
}

AnimationHandler.prototype.quadEaseInOutFunc = function(curTime, startVal, changeInVal, totalTime){
  if ((curTime/=totalTime/2) < 1) return changeInVal/2*curTime*curTime + startVal;
  return -changeInVal/2 * ((--curTime)*(curTime-2) - 1) + startVal;
}

AnimationHandler.prototype.cubicEaseInFunc = function(curTime, startVal, changeInVal, totalTime){
  return changeInVal*(curTime/=totalTime)*curTime*curTime + startVal;
}

AnimationHandler.prototype.cubicEaseOutFunc = function(curTime, startVal, changeInVal, totalTime){
  return changeInVal*((curTime=curTime/totalTime-1)*curTime*curTime + 1) + startVal;
}

AnimationHandler.prototype.cubicEaseInOutFunc = function(curTime, startVal, changeInVal, totalTime){
  if ((curTime/=totalTime/2) < 1) return changeInVal/2*curTime*curTime*curTime + startVal;
  return changeInVal/2*((curTime-=2)*curTime*curTime + 2) + startVal;
}

AnimationHandler.prototype.quartEaseInFunc = function(curTime, startVal, changeInVal, totalTime){
  return changeInVal*(curTime/=totalTime)*curTime*curTime*curTime + startVal;
}

AnimationHandler.prototype.quartEaseOutFunc = function(curTime, startVal, changeInVal, totalTime){
  return -changeInVal * ((curTime=curTime/totalTime-1)*curTime*curTime*curTime - 1) + startVal;
}

AnimationHandler.prototype.quartEaseInOutFunc = function(curTime, startVal, changeInVal, totalTime){
  if ((curTime/=totalTime/2) < 1) return changeInVal/2*curTime*curTime*curTime*curTime + startVal;
  return -changeInVal/2 * ((curTime-=2)*curTime*curTime*curTime - 2) + startVal;
}

AnimationHandler.prototype.quintEaseInFunc = function(curTime, startVal, changeInVal, totalTime){
  return changeInVal*(curTime/=totalTime)*curTime*curTime*curTime*curTime + startVal;
}

AnimationHandler.prototype.quintEaseOutFunc = function(curTime, startVal, changeInVal, totalTime){
  return changeInVal*((curTime=curTime/totalTime-1)*curTime*curTime*curTime*curTime + 1) + startVal;
}

AnimationHandler.prototype.quintEaseInOutFunc = function(curTime, startVal, changeInVal, totalTime){
  if ((curTime/=totalTime/2) < 1) return changeInVal/2*curTime*curTime*curTime*curTime*curTime + startVal;
  return changeInVal/2*((curTime-=2)*curTime*curTime*curTime*curTime + 2) + startVal;
}

AnimationHandler.prototype.sineEaseInFunc = function(curTime, startVal, changeInVal, totalTime){
  return -changeInVal * Math.cos(curTime/totalTime * (Math.PI/2)) + changeInVal + startVal;
}

AnimationHandler.prototype.sineEaseOutFunc = function(curTime, startVal, changeInVal, totalTime){
  return changeInVal * Math.sin(curTime/totalTime * (Math.PI/2)) + startVal;
}

AnimationHandler.prototype.sineEaseInOutFunc = function(curTime, startVal, changeInVal, totalTime){
  return -changeInVal/2 * (Math.cos(Math.PI*curTime/totalTime) - 1) + startVal;
}

AnimationHandler.prototype.expoEaseInFunc = function(curTime, startVal, changeInVal, totalTime){
  return (curTime==0) ? startVal : changeInVal * Math.pow(2, 10 * (curTime/totalTime - 1)) + startVal;
}

AnimationHandler.prototype.expoEaseOutFunc = function(curTime, startVal, changeInVal, totalTime){
  return (curTime==totalTime) ? startVal+changeInVal : changeInVal * (-Math.pow(2, -10 * curTime/totalTime) + 1) + startVal;
}

AnimationHandler.prototype.expoEaseInOutFunc = function(curTime, startVal, changeInVal, totalTime){
  return (curTime==totalTime) ? startVal+changeInVal : changeInVal * (-Math.pow(2, -10 * curTime/totalTime) + 1) + startVal;
}

AnimationHandler.prototype.circEaseInFunc = function(curTime, startVal, changeInVal, totalTime){
  return -changeInVal * (Math.sqrt(1 - (curTime/=totalTime)*curTime) - 1) + startVal;
}

AnimationHandler.prototype.circEaseOutFunc = function(curTime, startVal, changeInVal, totalTime){
  return changeInVal * Math.sqrt(1 - (curTime=curTime/totalTime-1)*curTime) + startVal;
}

AnimationHandler.prototype.circEaseInOutFunc = function(curTime, startVal, changeInVal, totalTime){
  if ((curTime/=totalTime/2) < 1) return -changeInVal/2 * (Math.sqrt(1 - curTime*curTime) - 1) + startVal;
  return changeInVal/2 * (Math.sqrt(1 - (curTime-=2)*curTime) + 1) + startVal;
}

AnimationHandler.prototype.elasticEaseInFunc = function(curTime, startVal, changeInVal, totalTime){
  var s=1.70158;var p=0;var a=changeInVal;
  if (curTime==0) return startVal;  if ((curTime/=totalTime)==1) return startVal+changeInVal;  if (!p) p=totalTime*.3;
  if (a < Math.abs(changeInVal)) { a=changeInVal; var s=p/4; }
  else var s = p/(2*Math.PI) * Math.asin (changeInVal/a);
  return -(a*Math.pow(2,10*(curTime-=1)) * Math.sin( (curTime*totalTime-s)*(2*Math.PI)/p )) + startVal;
}

AnimationHandler.prototype.elasticEaseOutFunc = function(curTime, startVal, changeInVal, totalTime){
  var s=1.70158;var p=0;var a=changeInVal;
  if (curTime==0) return startVal;  if ((curTime/=totalTime)==1) return startVal+changeInVal;  if (!p) p=totalTime*.3;
  if (a < Math.abs(changeInVal)) { a=changeInVal; var s=p/4; }
  else var s = p/(2*Math.PI) * Math.asin (changeInVal/a);
  return a*Math.pow(2,-10*curTime) * Math.sin( (curTime*totalTime-s)*(2*Math.PI)/p ) + changeInVal + startVal;
}

AnimationHandler.prototype.elasticEaseInOutFunc = function(curTime, startVal, changeInVal, totalTime){
  var s=1.70158;var p=0;var a=changeInVal;
  if (curTime==0) return b;  if ((curTime/=totalTime/2)==2) return b+changeInVal;  if (!p) p=totalTime*(.3*1.5);
  if (a < Math.abs(changeInVal)) { a=changeInVal; var s=p/4; }
  else var s = p/(2*Math.PI) * Math.asin (changeInVal/a);
  if (curTime < 1) return -.5*(a*Math.pow(2,10*(curTime-=1)) * Math.sin( (curTime*totalTime-s)*(2*Math.PI)/p )) + startVal;
  return a*Math.pow(2,-10*(curTime-=1)) * Math.sin( (curTime*totalTime-s)*(2*Math.PI)/p )*.5 + changeInVal + startVal;
}

AnimationHandler.prototype.backEaseInFunc = function(curTime, startVal, changeInVal, totalTime){
  var s = 1.70158;
  return changeInVal*(curTime/=totalTime)*curTime*((s+1)*curTime - s) + startVal;
}

AnimationHandler.prototype.backEaseOutFunc = function(curTime, startVal, changeInVal, totalTime){
  var s = 1.70158;
  return changeInVal*((curTime=curTime/totalTime-1)*curTime*((s+1)*curTime + s) + 1) + startVal;
}

AnimationHandler.prototype.backEaseInOutFunc = function(curTime, startVal, changeInVal, totalTime){
  var s = 1.70158;
  if ((curTime/=totalTime/2) < 1) return changeInVal/2*(curTime*curTime*(((s*=(1.525))+1)*curTime - s)) + startVal;
  return changeInVal/2*((curTime-=2)*curTime*(((s*=(1.525))+1)*curTime + s) + 2) + startVal;
}

AnimationHandler.prototype.bounceEaseInFunc = function(curTime, startVal, changeInVal, totalTime){
  var easeOutBounceFunc = Animation.updateFunctionsByType[this.animationTypes.BOUNCE_EASE_OUT];
  return changeInVal - easeOutBounceFunc(totalTime-curTime, 0, changeInVal, totalTime) + startVal;
}

AnimationHandler.prototype.bounceEaseOutFunc = function(curTime, startVal, changeInVal, totalTime){
  if ((curTime/=totalTime) < (1/2.75)){
    return changeInVal*(7.5625*curTime*curTime) + startVal;
  }else if (curTime < (2/2.75)){
    return changeInVal*(7.5625*(curTime-=(1.5/2.75))*curTime + .75) + startVal;
  }else if (curTime < (2.5/2.75)){
    return changeInVal*(7.5625*(curTime-=(2.25/2.75))*curTime + .9375) + startVal;
  }else{
    return changeInVal*(7.5625*(curTime-=(2.625/2.75))*curTime + .984375) + startVal;
  }
}

AnimationHandler.prototype.bounceEaseInOutFunc = function(curTime, startVal, changeInVal, totalTime){
  var easeInBounceFunc = Animation.updateFunctionsByType[this.animationTypes.BOUNCE_EASE_IN];
  var easeOutBounceFunc = Animation.updateFunctionsByType[this.animationTypes.BOUNCE_EASE_OUT];
  if (curTime < totalTime/2) return easeInBounceFunc(curTime*2, 0, changeInVal, totalTime) * .5 + startVal;
  return easeOutBounceFunc(curTime*2-totalTime, 0, changeInVal, totalTime) * .5 + changeInVal*.5 + startVal;
}
