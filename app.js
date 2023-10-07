console.log("Let's get this party started!");
// NohKENCOkwp49vUT36PWdKZNWEWqyuOp this is the api key
async function getGif(searchItem) {
  let res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: "NohKENCOkwp49vUT36PWdKZNWEWqyuOp",
      limit: 25,
      q: searchItem,
    },
  });
  console.log(res);
  let randomIdx = Math.floor(Math.random() * 25);
  createAndAppend(res.data.data[randomIdx].images.original.url);
}

function createAndAppend(data) {
  const UL = document.querySelector("#gifPlace");
  const newLI = document.createElement("LI");
  newLI.innerHTML = `'<img src="${data}">'`;
  UL.append(newLI);
}

let $searchInput = $("#gifSearch");
let $gifArea = $("#gifPlace");

$("form").on("submit", async function (e) {
  e.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  getGif(searchTerm);
});

$("#btnRemove").on("click", function () {
  $gifArea.empty();
});
