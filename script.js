let students = [];
let currentStudentId = null;
let nextStudentId = 3;

renderStudents = () => {
    students = [
        { id: 1, ten: "Nguyễn Văn A", mssv: 102234567, email: "a@gmail.com", khoa: "CNTT", gioitinh: "Nam", ngaysinh: "2003-02-03" },
        { id: 2, ten: "Nguyễn Văn B", mssv: 102232512, email: "b@gmail.com", khoa: "Fast", gioitinh: "Nam", ngaysinh: "2003-06-14" }
    ];
    const studentTableBody = document.getElementById('studentTableBody');
    studentTableBody.innerHTML = "";

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.classList.add('border-t-2');

        row.innerHTML = `
            <td class="py-3">
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.ten}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.mssv}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.email}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.khoa}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.gioitinh}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.ngaysinh}</p>
            </td>
            <td>
                <div class="flex justify-center items-center gap-2">
                    <button
                        class="px-5 py-1 rounded-xl bg-teal-300 text-white  hover:bg-teal-200 active:bg-teal-400"
                         type="button">Update</button>
                </div>
            </td>
            <td>
                <div class="flex justify-center items-center gap-2">
                    <a class="text-red-400 text-xs font-bold font-['Helvetica'] leading-[18px]" href="javascript:deleteStudent(${index})">Delete</a>
                </div>
            </td>
        `;

        studentTableBody.appendChild(row);
    });
    students = [];
}

updateStudents = () => {
    const studentTableBody = document.getElementById('studentTableBody');
    studentTableBody.innerHTML = "";

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.classList.add('border-t-2');

        row.innerHTML = `
            <td class="py-3">
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.ten}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.mssv}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.email}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.khoa}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.gioitinh}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.ngaysinh}</p>
            </td>
            <td>
                <div class="flex justify-center items-center gap-2">
                    <button
                        class="update-btn px-5 py-1 rounded-xl bg-teal-300 text-white  hover:bg-teal-200 active:bg-teal-400"
                        type="button" data-id="${student.id}">Update</button>
                </div>
            </td>
            <td>
                <div class="flex justify-center items-center gap-2">
                    <a class="text-red-400 text-xs font-bold font-['Helvetica'] leading-[18px]" href="javascript:deleteStudent(${index})">Delete</a>
                </div>
            </td>
        `;

        studentTableBody.appendChild(row);
    });

    document.querySelectorAll('.update-btn').forEach(button => {
        button.addEventListener('click', function (event) {
            const studentId = event.target.dataset.id;
            currentStudentId = studentId;
            const student = students.find(student => student.id == studentId);
            document.getElementById('ten-upd').value = student.ten;
            document.getElementById('mssv-upd').value = student.mssv;
            document.getElementById('email-upd').value = student.email;
            document.getElementById('khoa-upd').value = student.khoa;
            document.getElementById('gioitinh-upd').value = student.gioitinh;
            document.getElementById('ngaysinh-upd').value = student.ngaysinh;
            document.getElementById('UpdateForm').style.display = 'block';
            document.getElementById('studentFormArea').style.display = 'none';
        });
    });
};

document.getElementById('studentForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const id = nextStudentId++;
    const ten = document.getElementById('ten').value;
    const mssv = document.getElementById('mssv').value;
    const email = document.getElementById('email').value;
    const khoa = document.getElementById('khoa').value;
    const gioitinh = document.getElementById('gioitinh').value;
    const ngaysinh = document.getElementById('ngaysinh').value;

    students.push({id, ten, mssv, email, khoa, gioitinh, ngaysinh });

    updateStudents();

    // Xóa giá trị các ô input sau khi thêm
    document.getElementById('studentForm').reset();
});

submitUpdate = () => {
    const updatedName = document.getElementById('ten-upd').value;
    const updatedMssv = document.getElementById('mssv-upd').value;
    const updatedEmail = document.getElementById('email-upd').value;
    const updatedDepartment = document.getElementById('khoa-upd').value;
    const updatedGender = document.getElementById('gioitinh-upd').value;
    const updatedBirthDate = document.getElementById('ngaysinh-upd').value;

    const student = students.find(student => student.id == currentStudentId);
    student.ten = updatedName;
    student.mssv = updatedMssv;
    student.email = updatedEmail;
    student.khoa = updatedDepartment;
    student.gioitinh = updatedGender;
    student.ngaysinh = updatedBirthDate;

    updateStudents();
    document.getElementById('Inf-UpdateForm').reset();
    document.getElementById('studentFormArea').style.display = 'block';
    document.getElementById('UpdateForm').style.display = 'none';  
    currentStudentId = null;
}

deleteStudent = (index) => {
    // Hiển thị hộp thoại xác nhận
    const confirmation = window.confirm("Bạn có chắc chắn muốn xóa sinh viên này?");

    // Nếu người dùng nhấn OK
    if (confirmation) {
        students.splice(index, 1); // Xóa sinh viên khỏi mảng
        updateStudents(); // Cập nhật lại bảng
    }
}

const searchStudents = (query) => {
    const normalizedQuery = query.toLowerCase();
    return students.filter(student => student.ten.toLowerCase().includes(normalizedQuery));
};

document.getElementById('search-btn').addEventListener('click', () => {
    const searchQuery = document.getElementById('search-text').value;
    document.getElementById('search-text').value = "";
    const result = searchStudents(searchQuery);

    const studentTableBody = document.getElementById('studentTableBody');
    studentTableBody.innerHTML = "";

    result.forEach((student, index) => {
        const row = document.createElement('tr');
        row.classList.add('border-t-2');

        row.innerHTML = `
            <td class="py-3">
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.ten}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.mssv}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.email}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.khoa}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.gioitinh}</p>
            </td>
            <td>
                <p class="text-gray-700 text-sm font-bold font-['Helvetica'] leading-tight">${student.ngaysinh}</p>
            </td>
            <td>
                <div class="flex justify-center items-center gap-2">
                    <button
                        class="update-btn px-5 py-1 rounded-xl bg-teal-300 text-white  hover:bg-teal-200 active:bg-teal-400"
                        type="button" data-id="${student.id}">Update</button>
                </div>
            </td>
            <td>
                <div class="flex justify-center items-center gap-2">
                    <a class="text-red-400 text-xs font-bold font-['Helvetica'] leading-[18px]" href="javascript:deleteStudent(${index})">Delete</a>
                </div>
            </td>
        `;

        studentTableBody.appendChild(row);
    });

    document.querySelectorAll('.update-btn').forEach(button => {
        button.addEventListener('click', function (event) {
            const studentId = event.target.dataset.id;
            currentStudentId = studentId;
            const student = students.find(student => student.id == studentId);
            document.getElementById('ten-upd').value = student.ten;
            document.getElementById('mssv-upd').value = student.mssv;
            document.getElementById('email-upd').value = student.email;
            document.getElementById('khoa-upd').value = student.khoa;
            document.getElementById('gioitinh-upd').value = student.gioitinh;
            document.getElementById('ngaysinh-upd').value = student.ngaysinh;
            document.getElementById('UpdateForm').style.display = 'block';
            document.getElementById('studentFormArea').style.display = 'none';
        });
    });
});

// Gọi hàm render lần đầu để hiển thị dữ liệu mẫu 
renderStudents();