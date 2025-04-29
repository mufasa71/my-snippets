#include <emscripten.h>
#include <stdio.h>

typedef long (*fooFun)();

// promise a function
EM_ASYNC_JS(fooFun, resolveFun, (), {
  console.log('loading promise42');
  LoadedModule =
      (await WebAssembly.instantiateStreaming(fetch('/src/emcc/jspi/p42.wasm')))
          .instance;
  return addFunction(LoadedModule.exports['provide42']);
});

EM_JS_DEPS(funDeps, "$addFunction")

extern fooFun get42;

long stub() {
  get42 = resolveFun();
  return get42();
}

fooFun get42 = stub;

int main() {
  printf("first call p42() = %ld\n", get42());
  printf("second call = %ld\n", get42());
}
