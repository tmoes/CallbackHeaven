// nothing should be edited below this line until the next comment marker
function fastFunction(cb) {
  setTimeout(function () {
    cb("fastFunction error");
  }, 100);
}

function slowFunction(cb) {
  setTimeout(function () {
    cb(null, "slowFunction worked");
  }, 300);
}

function immediateFunction(cb) {
  cb(null, "immediateFunction worked");
}

// nothing should be edited above this line

function runSequentially(cb) {
  // pass in `messageHandler` as the callback to this function
  // invoke the 3 functions at the top of this file within this function
  // your code here...
  slowFunction(cb);
  setTimeout(function() {
    fastFunction(cb), null;
  }, 200);
  setTimeout(function() {
    null, immediateFunction(cb);
  }, 400);
}

function messageHandler(err, data) {
  // use this function to define the callback that will be passed to `runSequentially`
  // this function supplies the "messageHandler handled..." message
  // your code here...
  if (err) {
    console.log('messageHolder handled this failure:', err);
  } else {
    console.log('messageHandler handled this success:', data);
  }
};

// after defining everything, invoke like this:
runSequentially(messageHandler);

/*
  expected output of invoking `runSequentially`:

  "messageHandler handled this success: slowFunction worked"
  "messageHandler handled this failure: fastFunction error"
  "messageHandler handled this success: immediateFunction worked"

*/