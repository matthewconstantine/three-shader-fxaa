var glslify = require('glslify');
module.exports = threeShaderFXAA;
function threeShaderFXAA (THREE) {
  return function(opt) {
    opt = opt || {};
    return {
      uniforms: {
        tDiffuse: { type: 't', value: new THREE.Texture() },
        resolution: { type: 'v2', value: opt.resolution || new THREE.Vector2() }
      },
      vertexShader: glslify('./vert.glsl'),
      fragmentShader: glslify('./frag.glsl')
    };
  };
}
