const musicList = (slug, img, title, author) => {
  return `
        <div data-slug="${slug}" id="balal" class="border  shrink-0 relative group">
            <img class="w-[190px]" src=${img}/>
            <div class=" absolute hover:cursor-pointer group-hover:block hidden bg-[linear-gradient(rgba(0,0,0,0.502),rgba(0,0,0,0),rgba(0,0,0,0))]  w-[100%] top-0 right-0 bottom-[20%]">
                <div class="flex items-center justify-center w-12 h-12 absolute bottom-[10%] right-[10%] text-[16px]  bg-[#270f03] rounded-full">
                    <i class="fa-solid fa-play text-white"></i>
                </div>
            </div>
            <p class="dark:text-white font-bold hover:cursor-pointer hover:underline">${title}</p>            
            <p class="dark:text-white hover:underline hover:cursor-pointer">${author}</p>
        </div>
    `;
};

const musicListCol = (slug, img, title, author) => {
  return `
        <div data-slug="${slug}" id="balal" class="flex border  shrink-0 relative group w-[300px]">
            <img class="h-[100px] mr-[10px]" src=${img}/>
            <div  class=" absolute hover:cursor-pointer group-hover:block hidden bg-[linear-gradient(rgba(0,0,0,0.502),rgba(0,0,0,0),rgba(0,0,0,0))]  w-[100%] top-0 right-[66%] bottom-0">
                <div class="flex items-center justify-center w-12 h-12 absolute bottom-[25%] right-[8%] text-[16px]  bg-[#270f03] rounded-full">
                    <i class="fa-solid fa-play text-white"></i>
                </div>
            </div>
            <div>
                <p class="dark:text-white font-bold hover:cursor-pointer hover:underline mb-[10px]">${title}</p>            
                <p class="dark:text-white hover:cursor-pointer hover:underline">${author}</p>
            </div>
        </div>
    `;
};
// group-hover:block hidden bg-[linear-gradient(rgba(0,0,0,0.502),rgba(0,0,0,0),rgba(0,0,0,0))]
// export default musicList;
export { musicListCol, musicList };
