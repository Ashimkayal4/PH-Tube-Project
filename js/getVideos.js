const getVideo = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => showVideo(data.videos));
};

const showVideo = (data) => {
  console.log(data);
  const videoDiv = document.getElementById("show-video-div");

  for (const video of data) {
    console.log(video)
    const input = document.createElement("div");
    input.classList = "card card-compact";
    input.innerHTML = `
    <figure class="h-[200px]">
    <img src=${video.thumbnail} class="w-full h-full object-cover"/>
    </figure>
    <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
     </div>

    `;
      
    videoDiv.append(input);
  }
};

getVideo();
