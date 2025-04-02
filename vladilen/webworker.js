self.addEventListener('message', function({data}) {
  const res = factorial(data)

  postMessage(res);
});

function factorial(n) {
  let result = 1

  while(n > 1) {
    result+=n;
    n--
  }
  return result
}