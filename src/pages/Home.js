import PlaylistTags from "../components/PlaylistTags";
import musicList from "../components/Quickblabla";
import { musicListCol } from "../components/Quickblabla";
import albumService from "../service/albumService";
import authSevice from "../service/authSevice";
import homeService from "../service/homeService";
import songdetail from "../service/songdetail";
import { getDetailAlbum } from "../service/albumService";

async function clickToPlayMusic() {
  const slug = document.querySelector("#listMusic");
  const audio = document.querySelector("#audio");

  slug.addEventListener("click", async function (e) {
    const a = await getDetailAlbum(e.target.parentElement.dataset.slug);
    console.log(a.data.tracks[0].audioUrl);
    audio.src = a.data.tracks[0].audioUrl;

    audio.play();
  });
}
let tracks;
// clickToPlayMusic()
console.log(tracks);

async function Home() {
  const moods = await homeService.getMoods();
  const albums = await albumService.getAlbum();
  const songs = await songdetail.getSong();
  // console.log(songs);

  return `
    <div class="container mx-auto ">
      <div class="ml-[220px] mt-[16px]">
        ${moods
          .map((element) => {
            //navbar
            // console.log(element);
            return `<div class="inline-block ml-[12px]  mb-10">${PlaylistTags(
              element.name
            )}</div>`;
          })
          .join("")}
        
      </div> 



      <div class="flex justify-between ml-[240px] mb-[16px] text-[24px] font-bold text-white">
        <h2 class="flex items-center">Đĩa nhạc cho bạn</h2>
        <div class="flex items-center justify-between features_right">
          <button class=" hover:bg-[#353535] py-2.5 px-5 rounded-[50px]"><a href="#">Phát tất cả</a></button>
          <div class="hover:cursor-pointer flex items-center justify-center hover:bg-[#353535] py-2.5 px-5 rounded-[10px]">
            <i class="fa-solid fa-arrow-left "></i>
          </div>
          <div class="hover:cursor-pointer hover:bg-[#353535] py-2.5 px-5 rounded-[10px]">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div class="flex ml-[240px] gap-2 w-[1290px] overflow-auto">
        ${albums
          .map((el) => {
            return musicList(el.slug, el.thumbnails[0], el.title, el.artists[0]);
          })
          .join("")}

         
      </div>





      <div class="flex justify-between mt-[32px] ml-[240px] mb-[12px] text-[24px] font-bold text-white">
        <h2 class="flex items-center">Chọn nhanh đài phát</h2>
        <div class="flex items-center justify-between features_right">
          <button class=" hover:bg-[#353535] py-2.5 px-5 rounded-[50px]"><a href="#">Phát tất cả</a></button>
          <div class="hover:cursor-pointer flex items-center justify-center hover:bg-[#353535] py-2.5 px-5 rounded-[10px]">
            <i class="fa-solid fa-arrow-left "></i>
          </div>
          <div class="hover:cursor-pointer hover:bg-[#353535] py-2.5 px-5 rounded-[10px]">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div id="listMusic" data-slug="" class="flex flex-wrap ml-[240px] gap-2 w-[1290px] max-h-[300px]  overflow-auto overflow-y-auto overflow-x-auto ">
        ${albums
          .map((el) => {
            for (let i = 1; i <= 4; i++) {
              return musicListCol(
                el.slug,
                el.thumbnails[0],
                el.title,
                el.artists[0]
              );
            }
          })
          .join("")}
      </div>


      <div class="flex justify-between ml-[240px] mb-[16px] text-[24px] font-bold text-white mt-[40px]">
        <h2 class="flex items-center">Giai điệu êm dịu</h2>
        <div class="flex items-center justify-between features_right">
          <button class=" hover:bg-[#353535] py-2.5 px-5 rounded-[50px]"><a href="#">Phát tất cả</a></button>
          <div class="hover:cursor-pointer flex items-center justify-center hover:bg-[#353535] py-2.5 px-5 rounded-[10px]">
            <i class="fa-solid fa-arrow-left "></i>
          </div>
          <div class="hover:cursor-pointer hover:bg-[#353535] py-2.5 px-5 rounded-[10px]">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div class="flex ml-[240px] gap-2 w-[1290px] overflow-auto">
        ${albums
          .map((el) => {
            return musicList(el.slug, el.thumbnails[0], el.title, el.artists[0]);
          })
          .join("")}         
      </div>
      

    </div>
    `;
}

export default Home;
export { clickToPlayMusic };
