const { APIpath } = require("../config/APIpath");
const subPath = '/some_label_tasks';
const getPath = `${APIpath}${subPath}`;

const POSTData = {
      task_name: 'Genshin Impact00',
      description: 'Genshin Impact 4.0',
      priority:4,
      due_date: '2024-01-02',
      due_time: '8:00:00 PM',
      remind_time:10,
}


const fetchData = async () => {
  try {
    const response = await fetch(`${getPath}`, {
      method: 'POST', // Hoặc 'POST', 'PUT', 'DELETE', tùy thuộc vào loại yêu cầu bạn muốn thực hiện
      headers: {
        'Content-Type': 'application/json', // Đặt loại nội dung tùy thuộc vào yêu cầu của bạn
        // 'Authorization': 'Bearer ' + yourToken, // Nếu bạn cần thêm thông tin xác thực
      },
      // body: JSON.stringify({ key: 'value' }), // Nếu bạn muốn gửi dữ liệu với yêu cầu, ví dụ gửi dữ liệu JSON
      body : JSON.stringify(
      // POSTData
      {
        list_label_id: [1,2,3],
      }
    )
    });

    const data = await response.json();

    // Do something with the data, for example, log it
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
