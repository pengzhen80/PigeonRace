function resolveAfter2Seconds(x) {
    console.log("start wait");
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 10000);
    });
  }
  
  async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
    // console.log('i am not wait');
  }
  f1();
  console.log('i am not wait');