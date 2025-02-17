function main() {
  if (window.innerWidth <= 768) return; // fixes mobile touch blocking

  // Get A WebGL context
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById('canvas');
  const gl = canvas.getContext("webgl");
  if (!gl) return;

  const vs = `
    // an attribute will receive data from a buffer
    attribute vec4 a_position;

    // all shaders have a main function
    void main() {

    // gl_Position is a special variable a vertex shader
    // is responsible for setting
    gl_Position = a_position;
    }
  `;

  const fs = `
    #define HASHSCALE1 .1031
    #define PI 3.141592635

    precision highp float;

    uniform vec2 iResolution;
    uniform float iTime;

    float hash12(vec2 p)
    {
    vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
    p3 += dot(p3, p3.yzx + 200.0);
    return fract((p3.x + p3.y) * p3.z);
    }

    float atan2(in float y, in float x)
    {
    // bool s = (abs(x) > abs(y));
    return mix(PI / 2.0 - atan(x,y), atan(y,x), 1.0);
    }

    void mainImage( out vec4 fragColor, in vec2 fragCoord )
    {
    vec2 centerD = vec2(0.5, 0.5) * iResolution.y;
    vec2 centerA = vec2(-0.2, 0.0) * iResolution.y;
    
    vec2 rCoord = vec2(
    distance(fragCoord, centerD),
    atan2(fragCoord.x - centerA.x, fragCoord.y - centerA.y)
    );
    
    rCoord.y -= iTime * 0.02;
    
    vec2 rCoordFloor = vec2(floor(rCoord.x * 0.75), 0.0);
    rCoordFloor.y = floor(rCoord.y * 20.0 * pow(rCoordFloor.x, 0.5));
    
    float v = pow(hash12(rCoordFloor * 100.0), 200.0);
    
    vec3 col = vec3(v);

    fragColor = vec4(col, 1.0);
    }

    void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
    }
  `;

  // setup GLSL program
  const program = webglUtils.createProgramFromSources(gl, [vs, fs]);

  // look up where the vertex data needs to go.
  const positionAttributeLocation = gl.getAttribLocation(program, "a_position");

  // look up uniform locations
  const resolutionLocation = gl.getUniformLocation(program, "iResolution");
  const mouseLocation = gl.getUniformLocation(program, "iMouse");
  const timeLocation = gl.getUniformLocation(program, "iTime");

  // Create a buffer to put three 2d clip space points in
  const positionBuffer = gl.createBuffer();

  // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // fill it with a 2 triangles that cover clipspace
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1,  // first triangle
    1, -1,
    -1,  1,
    -1,  1,  // second triangle
    1, -1,
    1,  1,
  ]), gl.STATIC_DRAW);

  // const playpauseElem = document.querySelector('.playpause');
  const inputElem = document.querySelector('.divcanvas');
  inputElem.addEventListener('mouseover', requestFrame);
  inputElem.addEventListener('mouseout', cancelFrame);

  let mouseX = 0;
  let mouseY = 0;

  function setMousePosition(e) {
    const rect = inputElem.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = rect.height - (e.clientY - rect.top) - 1;  // bottom is 0 in WebGL
  }

  inputElem.addEventListener('mousemove', setMousePosition);
  // inputElem.addEventListener('touchstart', (e) => {
  // 	e.preventDefault();
  // 	playpauseElem.classList.add('playpausehide');
  // 	requestFrame();
  // }, {passive: false});
  inputElem.addEventListener('touchmove', (e) => {
    e.preventDefault();
    setMousePosition(e.touches[0]);
  }, {passive: false});
  // inputElem.addEventListener('touchend', (e) => {
  // 	e.preventDefault();
  // 	playpauseElem.classList.remove('playpausehide');
  // 	cancelFrame();
  // }, {passive: false});

  let requestId;
  function requestFrame() {
    if (!requestId) {
    requestId = requestAnimationFrame(render);
    }
  }
  function cancelFrame() {
    if (requestId) {
    cancelAnimationFrame(requestId);
    requestId = undefined;
    }
  }

  let then = 0;
  let time = 0;
  function render(now) {
    requestId = undefined;
    now *= 0.001;  // convert to seconds
    const elapsedTime = Math.min(now - then, 0.1);
    time += elapsedTime;
    then = now;

    webglUtils.resizeCanvasToDisplaySize(gl.canvas);

    // Tell WebGL how to convert from clip space to pixels
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    // Tell it to use our program (pair of shaders)
    gl.useProgram(program);

    // Turn on the attribute
    gl.enableVertexAttribArray(positionAttributeLocation);

    // Bind the position buffer.
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    gl.vertexAttribPointer(
    positionAttributeLocation,
    2,          // 2 components per iteration
    gl.FLOAT,   // the data is 32bit floats
    false,      // don't normalize the data
    0,          // 0 = move forward size * sizeof(type) each iteration to get the next position
    0,          // start at the beginning of the buffer
    );

    gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);
    gl.uniform2f(mouseLocation, mouseX, mouseY);
    gl.uniform1f(timeLocation, time);

    gl.drawArrays(
    gl.TRIANGLES,
    0,     // offset
    6,     // num vertices to process
    );

    requestFrame();
  }

  requestFrame();
  requestAnimationFrame(cancelFrame);
  }

  main();