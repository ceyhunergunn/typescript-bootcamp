let logged;
function sendAnalytics(data: string) {
  console.log(data);
  logged = true;
  console.log(logged);
}

sendAnalytics("The data");
