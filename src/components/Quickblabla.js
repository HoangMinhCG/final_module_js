const blbla = (img, title, author) => {
  return `
        <div id="balal" class="border border-amber-300 shrink-0">
            <img class="w-[180px]" src=${img}/>
            <p class="dark:text-white">${title}</p>            
            <p class="dark:text-white">${author}</p>
        </div>
    `;
};

export default blbla;
