console.log("hello");

let results = {
  tag: "",
  free: true,
  role: false,
  user: "jhasagar700",
  email: "jhasagar700@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
};


submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
  console.log("clicked");
  resultsCont.innerHTML = `<img width="233 " src="img/loading.svg" alt="">`
  let key = "ema_live_zsz4TOaxAWpLOotIGg9hhjo5j0ZDFKh1gSsacMuj"
  let email = document.getElementById("username").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

  let res = await fetch(url)
  let results = await res.json()

  let str = ``;
  for (key of Object.keys(results)) {
    if(results[key] !== "" && results[key] !== " "){
        str = str + `<div>${key}: ${results[key]}</div>`;
    }
  }

  console.log(str);
  resultsCont.innerHTML = str;

  username.value = "";

});
