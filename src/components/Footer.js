import msCPTDSDDT from "../assets/musics/cptdsddt.mp3";

async function catchEvent() {
  let x;
  const tienDo = document.querySelector("#tiendo");
  // tienDo.addEventListener("click", function (e) {
  //   // Lấy tọa độ theo cửa sổ trình duyệt
  //   x = e.clientX;
  //   console.log("X:", x);
  // });
  const handle = (e) => {
    const progress = document.querySelector(".js-progess");

    progress.style.width = `${e.offsetX}px`;
  };

  tienDo.addEventListener("click", handle);

  tienDo.addEventListener("mousedown", function (e) {
    // console.log(e.clientX);
    tienDo.addEventListener("mousemove", handle);
  });

  tienDo.addEventListener("mouseup", function (e) {
    tienDo.removeEventListener("mousemove", handle);
  });
}

const handleAudio = async () => {
  const audio = document.querySelector("#audio");

  const play = document.querySelector(".fa-play");
  const pause = document.querySelector(".fa-pause");

  play.addEventListener("click", () => {
    audio.play();
  });

  pause.addEventListener("click", () => {
    audio.pause();
  });
};

function Footer() {
  return `
    <div class="fixed left-0 right-0 bottom-0 bg-neutral-900 text-black text-[24px] h-[60px] w-[100%] bg-white flex items-center justify-between">
      <div id="tiendo">
        <div  class="bg-[red] w-[100%] h-[5px] absolute top-0"></div>
      <div  class="js-progess bg-[green]  h-[5px] absolute top-0 left-0"></div>

      <audio id="audio" src="${msCPTDSDDT}"></audio>

      </div>
      <div class="ml-[10px] flex gap-[16px]">
        <i class="fa-solid fa-backward-step hover:cursor-pointer hover:bg-[#ddd] hover:rounded-full p-1.5"></i>
        <i class="fa-solid fa-play hover:cursor-pointer hover:bg-[#ddd] hover:rounded-full p-1.5"></i>
        <i class="fa-solid fa-pause hover:cursor-pointer hover:bg-[#ddd] hover:rounded-full p-1.5 hidden"></i>
        <i class="fa-solid fa-forward-step hover:cursor-pointer hover:bg-[#ddd] hover:rounded-full p-1.5"></i>
      </div>

      <div>
      </div>

      <div class="mr-[10px] flex gap-[16px]">
        <i class="fa-solid fa-volume-high hover:cursor-pointer hover:bg-[#ddd] hover:rounded-full p-1.5"></i>
        <i class="fa-solid fa-repeat hover:cursor-pointer hover:bg-[#ddd] hover:rounded-full p-1.5"></i>
        <i class="fa-solid fa-shuffle hover:cursor-pointer hover:bg-[#ddd] hover:rounded-full p-1.5"></i>
        <i class="fa-solid fa-sort-up hover:cursor-pointer hover:bg-[#ddd] hover:rounded-full p-1.5"></i>
      </div>
    </div>
    `;
}

export default Footer;
export { catchEvent, handleAudio };
