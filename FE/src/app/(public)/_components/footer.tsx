
const Footer = () => {
  return (
    <footer className="w-full">
      <div className="w-content px-2 py-4 mx-auto grid grid-cols-4">
          <div className="w-full">
            <p> <b>LIÊN HỆ</b></p>
            <p>Phường Tân Chánh Hiệp, Quận 12</p>
            <p>Điện thoại : 0987654321</p>
            <p>Email: info@hpltrade.com</p>
            <p>Zalo: 0987654321</p>
          </div>
          <div className="">
            <p> <b>ĐẤU GIÁ TRỰC TUYẾN</b></p>
            <p>Thiết bị vi tính</p>
            <p>Thiết bị viễn thông</p>
            <p>Thiết bị linh kiện</p>
            <p>Sản phẩm khác </p>
          </div>
          <div className="">
            <p><b>HỖ TRỢ NHANH</b></p>
            <p>Tư vấn thủ tục: 0987654321</p>
            <p>Tư vấn nhận tài sản: 0123456789</p>
            <p>Tư vấn thanh toán : 09274615389</p>
            <p>Tư vấn vận chuyển: 017380183910</p>
          </div>
          <div className="">
            <p> <b>THEO DÕI HPLTRADE</b></p>
            <p className="fs-3"><i className="bi bi-facebook" /> <i className="bi bi-instagram" /> <i className="bi bi-twitter" />  <i className="bi bi-tiktok" /></p>
            <img src="https://elise.vn/media/wysiwyg/bocongthuong.png" width="200px" />
          </div>
        </div>
    </footer>
  )
}

export default Footer