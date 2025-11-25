import PlaylistTags from "../components/PlaylistTags";
import blbla from "../components/Quickblabla";
import albumService from "../service/albumService";
import authSevice from "../service/authSevice";
import homeService from "../service/homeService";

async function Home() {
  const moods = await homeService.getMoods();
  const albums = await albumService.getAlbum();

  return `
    <div class="container mx-auto ">
      <div class="ml-[220px] mt-[16px]">
        ${moods
          .map((element) => {
            // console.log(element);
            return `<div class="inline-block ml-[12px]  mb-10">${PlaylistTags(
              element.name
            )}</div>`;
          })
          .join("")}
        
      </div>
      <div class="flex ml-[240px] gap-2 w-[1200px]  overflow-auto">
        ${albums.map((el) => {
          return blbla(
            // `<div class="flex">${el.thumbnails[0]}</div>`,
            el.thumbnails[0],
            `<div class="text-white font-bold hover:cursor-pointer">${el.title}</div>`,
            `<div class="hover:underline hover:cursor-pointer text-white">${el.artists[0]}</div>`
          );
        })}


         <audio src"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" controls></audio>
      </div>
    </div>
    `;
}

export default Home;
