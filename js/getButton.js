
const loadData = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
      .then((res) => res.json())
      .then((data) => getData(data.categories))
      .catch((error) => console.log(error));
}

const getData = (data) => {
    const newDiv = document.getElementById("put-element");
    for (const info of data) {
        const input = document.createElement('div');
        input.innerText = info.category;
        newDiv.append(input);
        input.classList=('btn')
    }
}


loadData()