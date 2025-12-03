import logo from "../assets/icons/logo.svg";

function SideBar() {
    // const user = authSevice.currentUser();

    const randomSlug = Math.random();

    return `
        <div class="fixed  w-60 h-full border-r border-r-[#292929]">
            <div class="flex gap-[24px] items-center pl-[20px] h-[64px] ">
                <button class="cursor-pointer size-[24px]">
                     <i class="fa-solid fa-bars dark:text-white text-[20px] size-full "></i>
                 </button>
    
                <a href="#">
                    <img src=${logo} alt="music" class="object-cover">
                </a>
            </div>

            <div class="block">
                <a class="dark:text-white block text-lg font-medium mb-[15px] hover:bg-[#353535] py-2.5 px-5 rounded-[10px] w-[90%] mx-auto" href="/">Trang chủ</a>
                <a class="dark:text-white block text-lg font-medium mb-[15px] hover:bg-[#353535] py-2.5 px-5 rounded-[10px] w-[90%] mx-auto" href="/explore">Khám phá</a>
                <a class="dark:text-white block text-lg font-medium mb-[15px] hover:bg-[#353535] py-2.5 px-5 rounded-[10px] w-[90%] mx-auto" href="/library">Thư viện</a>
                <a class="dark:text-white block text-lg font-medium mb-[15px] hover:bg-[#353535] py-2.5 px-5 rounded-[10px] w-[90%] mx-auto" href="/channel/${randomSlug}">Nâng cấp</a>
            </div>

            <button class="text-[16px] flex items-center justify-center w-[80%] cursor-pointer mx-auto hover:bg-[rgba(255,255,255,0.2)] hover:text-white dark:bg-white h-[32px] px-4 py-5 rounded-full text-[14px] font-medium">
            Đăng nhập
          </button>

          <p class="dark:text-white w-[80%] mt-[16px] mx-auto text-[12px]">Đăng nhập để tạo và chia sẻ danh sách phát, nhận nội dung đề xuất dành riêng cho bạn và hơn thế nữa.</p>
        </div>
    `;
}

export default SideBar;
