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
    const width = tienDo.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
  });
}

const handleAudio = async () => {
  const audio = document.querySelector("#audio");

  const play = document.querySelector(".fa-play");
  const pause = document.querySelector(".fa-pause");
  const mute = document.querySelector(".fa-volume-high");
  const cur = document.querySelector("#current");
  const dur = document.querySelector("#duration");

  audio.addEventListener("loadedmetadata", () => {
    // console.log("Tổng thời gian:", audio.duration);
    const duration = audio.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    dur.innerHTML = `${minutes}:${seconds}`;
  });

  // audio.addEventListener("loadedmetadata", () => {
  //   dur.textContent = formatTime(audio.duration);
  // });

  audio.addEventListener("timeupdate", () => {
    const current = audio.currentTime;
    const minutes = Math.floor(current / 60);
    const seconds = Math.floor(current % 60);
    cur.innerHTML = `${minutes}:${seconds}`;
  });

  play.addEventListener("click", () => {
    audio.play();
  });

  pause.addEventListener("click", () => {
    audio.pause();
  });

  mute.addEventListener("click", () => {
    audio.muted = !audio.muted;
  });
};

function Footer() {
  return `
    <div class="fixed left-0 right-0 bottom-0 bg-neutral-900 text-black text-[24px] h-[60px] w-[100%] bg-white flex items-center justify-between">
      <div id="tiendo">
        <div  class="bg-[#383838] w-[100%] h-[6px] absolute top-0"></div>
      <div  class="js-progess bg-[red]  h-[6px] absolute top-0 left-0"></div>

      <audio id="audio" src="${msCPTDSDDT}"></audio>

      </div>
      <div class="ml-[10px] flex gap-[16px]">
        <i class="fa-solid fa-backward-step hover:cursor-pointer hover:bg-[#ddd] hover:rounded-full p-1.5"></i>
        <i class="fa-solid fa-play hover:cursor-pointer hover:bg-[#ddd] hover:rounded-full p-1.5"></i>
        <i class="fa-solid fa-pause hover:cursor-pointer hover:bg-[#ddd] hover:rounded-full p-1.5 hidden"></i>
        <i class="fa-solid fa-forward-step hover:cursor-pointer hover:bg-[#ddd] hover:rounded-full p-1.5"></i>
        <span id="current">0:00</span> 
        <span id="duration">0:00</span>
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
