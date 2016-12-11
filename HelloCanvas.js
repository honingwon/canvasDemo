//获取 canvas元素
var canvas = document.getElementById('webgl');

//获取WebGL绘图上下文
var gl = getWebGLContext(canvas);
if(!gl) {
	console.log('Failed to get the rendering context for WebGL');
}

gl.clearColor(0,0,0,1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

function getWebGLContext(canvas) {
	return canvas.getContext('webgl');
}