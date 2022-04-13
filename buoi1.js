let student = {
    code: 11,
    name: "Lê Lết",
    address: {
        street: "Trịnh Đình Thảo ",
        ward: "Phú Trung",
    },
    subjects:["csdl","web"]
}
document.querySelector('.info').innerHTML = `<table >
<tr>
    <th> Mã SV</th>
    <td>${student.name} 11111</td>
</tr>
<tr>
    <td>${student.name}</td>
    <td> ${student.code}</td>
</tr>
</table>`
