#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE long provide42() { return 42l; }
