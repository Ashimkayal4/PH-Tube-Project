
const loadData = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
      .then((res) => res.json())
      .then((data) => getData(data.categories))
      .catch((error) => console.log(error));
}

const clickFunction = (id) => {
   fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
     .then((res) => res.json())
     .then((data) => showVideo(data.category))
     .catch((error) => console.log(error));
}

const getData = (data) => {
  const newDiv = document.getElementById("put-element");
  for (const info of data) {
    const input = document.createElement("div");
    input.innerHTML = `
     <button onclick="clickFunction(${info.category_id})" class="btn">
       ${info.category}
     </button>
   `;
    newDiv.append(input);
  }
};


loadData()