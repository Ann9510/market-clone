const form = document.querySelector("#login-form");

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);

  const res = await fetch("/login", {
    method: "post",
    body: formData,
  });
  const data = await res.json();
  const accessToken = data.access_token;

  console.log(accessToken);

  window.localStorage.setItem("token", accessToken);
  alert("로그인 성공");

  // window.location.pathname = "/";
};

form.addEventListener("submit", handleSubmit);
