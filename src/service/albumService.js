import httpsRequest from "../utils/httpsRequest";
import {clickToPlayMusic} from "../pages/Home";


// anh lấy theo album thì anh cần phải lấy ra chi tiết album
//  chi tiết nó lấy theo slug đó anh truyền slug của thằng album vào để lấy ra
// trong chi tiết album có mảng tracks tương ứng với danh sách các bài hát
// trong danh sách bài hát lại có audioUrl rồi nó chính là đường dẫn của bài nhạc anh cầm cái đấy đưa vào thẻ audio để phát thôi
// đó anh làm đi

const getDetailAlbum = async (slug) => { 
  const details = await httpsRequest.get(`/albums/details/${slug}`)
  // console.log(details); 
  return details
}
// getDetailAlbum()

const getAlbum = async () => {
  const data = await httpsRequest.get("/home/albums-for-you");
  //   return data.data.items;
  // console.log(data.data);  
  return data.data;
};
// getAlbum()
// const qu



export default {
  getAlbum,
};

export {getDetailAlbum}