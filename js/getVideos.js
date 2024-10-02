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
    <div class="px-0 py-2 flex gap-2">
      <div><img class="h-10 w-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/></div>
      <div>
        <h2 class="font-bold">${video.title}</h2>
        <div class="flex items-center gap-2">
         <p>${video.authors[0].profile_name}</p>
         <img class=" w-5 " src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>
        </div>
        <p></p>
      </div>
    </div>

    `;
      
    videoDiv.append(input);
  }
};

getVideo();
