const { APIpath } = require("../config/APIpath");
const subPath = '/users';
const getPath = `${APIpath}${subPath}`;
const fetchData = async () => {
  try {
    const response = await fetch(`${getPath}`, {
      method: 'GET', // Hoặc 'POST', 'PUT', 'DELETE', tùy thuộc vào loại yêu cầu bạn muốn thực hiện
      headers: {
        'Content-Type': 'application/json', // Đặt loại nội dung tùy thuộc vào yêu cầu của bạn
        // 'Authorization': 'Bearer ' + yourToken, // Nếu bạn cần thêm thông tin xác thực
      },
      // body: JSON.stringify({ key: 'value' }), // Nếu bạn muốn gửi dữ liệu với yêu cầu, ví dụ gửi dữ liệu JSON
    });

    const data = await response.json();

    // Do something with the data, for example, log it
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
