console.log("Hello World!");

function notifyUser() {
  console.log("notifyUser function was called");
}

function myAwesomeFunction(notifyUserCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex tasks complete. I will notify the user");
  notifyUserCallback();
}

myAwesomeFunction(notifyUser);

function myAwesomeFunction2(onSuccessCallback, onFailureCallback) {
  console.log("Running myAwesomeFunction2... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
}

const success = Math.random() > 0.5;
if (success) {
  checkSuccess({
    message: "This is the message of success",
  });
} else {
  checkFailure();
}

function onAwesomeSuccess(data) {
  console.log("It was successful: ", data.message);
}

function onAwesomeFailure() {
  console.log("It failed :(");
}

myAwesomeFunction2(onAwesomeSuccess, onAwesomeFailure);
