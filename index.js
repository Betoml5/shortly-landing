const $btnMenu = document.querySelector("#btnMenu");
const $menu = document.querySelector("#menu");
const $imgWorking = document.querySelector("#imgWorking");
const $linkInput = document.querySelector("#linkInput");
const $btnShorten = document.querySelector("#btnShorten");
const $errorMsg = document.querySelector("#error");
const $linksContainer = document.querySelector("#links");

const API_URL = "https://api.shrtco.de/v2";

$btnMenu.addEventListener("click", () => {
  if ($menu.style.display === "none") {
    $menu.style.display = "block";
  } else {
    $menu.style.display = "none";
    $imgWorking.style.display = "none";
  }

  if ($imgWorking.style.display === "none") {
    $imgWorking.style.display = "block";
  } else {
    $imgWorking.style.display = "none";
  }
});

$btnShorten.addEventListener("click", async () => {
  try {
    $errorMsg.textContent = "";
    if ($linkInput.value === "") {
      $errorMsg.textContent = "Please enter a valid URL";
      $errorMsg.style.display = "block";
      $linkInput.style.outline = "2px solid red";
      $linkInput.classList.add("placeholderRed");
      return;
    }
    $linkInput.classList.remove("placeholderRed");
    const shortenUrl = await shorten($linkInput.value);
    $linkInput.style.outline = "inherit";
    const html = `
  <div class="bg-white rounded-lg my-10">
  <p class="text-xl p-4 text-ellipsis overflow-hidden">${$linkInput.value}</p>
  <div class="h-px bg-[#9e9aa7] opacity-40"></div>
  <div class="p-4">
    <p class="text-[#2acfcf] text-xl">${shortenUrl}</p>
    <button
      class="bg-[#2acfcf] w-full text-white font-bold px-10 py-3 rounded-lg mt-4"
      id="btnShorten"
    >
      Copy
    </button>
  </div>
</div>
  `;
    $linkInput.value = "";
    $linksContainer.insertAdjacentHTML("beforeend", html);
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const shorten = async (url) => {
  try {
    const response = await fetch(`${API_URL}/shorten?url=${url}`, {
      method: "POST",
    });

    const data = await response.json();
    console.log(data);
    return data.result.short_link;
  } catch (error) {
    throw error;
  }
};
