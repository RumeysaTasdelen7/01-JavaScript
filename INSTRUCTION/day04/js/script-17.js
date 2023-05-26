const txtNameEl = document.querySelector("#txtName");
const welcomeEl = document.querySelector("#Welcome");

welcomeEl.innerHTML = `<strong>Welcome <em>${txtNameEl.value}</em></strong>`