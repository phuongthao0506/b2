

function QS(ele) {
    return document.querySelector(ele)
}
// bài 1+ BÀI 2 
let student = {
    code: 11,
    name: "Lê Lết",
    address: {
        street: "271 Trịnh Đình Thảo ",
        ward: "Phú Trung",
    },
    subjects: ["csdl", "web"]
}
let subject = ''
for (const item of student.subjects) {
    subject += `${item},`
}
QS('.bai1').innerHTML = ` <table class="table  table-sm ư-85">
<thead>
  <tr>
    <th >Ma SV</th>
    <th>Ten SV </th>
    <th> Dia Chi</th>
    <th>Mon Hoc</th>
  </tr>
</thead>
<tbody>
  <tr>
   
    <td>${student.code} </td>
    <td>${student.name} </td>
    <td>Đường ${student.address.street},Phường${student.address.ward} </td>
    <td>
    ${subject}
     </td>
  </tr>
</tbody>
</table>`

// ==========BÀI 3=========== 
let studentString = '{"code":11,"name":"Lê Lết","address":{"street":"271 Trịnh Đình Thảo ","ward":"Phú Trung"},"subjects":["csdl","web"]}'
// chuyển về JSON
let student3 = JSON.parse(studentString)
//  ======= Bài 4 ==== 
const arrStudent = [
    {
        code: 1,
        name: "Lê Lết1",
        address: {
            street: "271 Trịnh Đình Thảo ",
            ward: "Phú Trung",
        },
        subjects: "csdl"
    },
    {
        code: 2,
        name: "Lê Lết 2",
        address: {
            street: "271 Trịnh Đình Thảo ",
            ward: "Phú Trung",
        },
        subjects: "web"
    },
    {
        code: 3,
        name: "Lê Lết 3",
        address: {
            street: "271 Trịnh Đình Thảo ",
            ward: "Phú Trung",
        },
        subjects: "web"
    }
]
let showStudent = ''
arrStudent.map(student => {
    showStudent += ` <tbody>
    <tr>
               
    <td>${student.code} </td>
    <td>${student.name} </td>
    <td>Đường ${student.address.street},Phường${student.address.ward} </td>
    <td>
    ${student.subjects}
     </td>
  </tr>
    </tbody>`
})
QS('.table-body').innerHTML = showStudent
//=====bài 8====
let arrEmployee = [
    {
        contacts: [
            {
                "id": "c200",
                "name": "Ravi Tamada",
                "email": "ravi@gmail.com",
                "address": "xx-xx-xxxx,x - street, x - country",
                "gender": "male",
                "phone": {
                    "mobile": "+91 0000000000",
                    "home": "00 000000",
                    "office": "00 000000"
                }
            },
            {
                "id": "c201",
                "name": "Johnny Depp",
                "email": "johnny_depp@gmail.com",
                "address": "xx-xx-xxxx,x - street, x - country",
                "gender": "male",
                "phone": {
                    "mobile": "+91 0000000000",
                    "home": "00 000000",
                    "office": "00 000000"
                }
            },
            {
                "id": "c202",
                "name": "Leonardo Dicaprio",
                "email": "leonardo_dicaprio@gmail.com",
                "address": "xx-xx-xxxx,x - street, x - country",
                "gender": "male",
                "phone": {
                    "mobile": "+91 0000000000",
                    "home": "00 000000",
                    "office": "00 000000"
                }
            },
            {

                "id": "c203",
                "name": "John Wayne",
                "email": "john_wayne@gmail.com",
                "address": "xx-xx-xxxx,x - street, x - country",
                "gender": "male",
                "phone": {
                    "mobile": "+91 0000000000",
                    "home": "00 000000",
                    "office": "00 000000"
                }
            },
            {
                "id": "c204",
                "name": "Angelina Jolie",
                "email": "angelina_jolie@gmail.com",
                "address": "xx-xx-xxxx,x - street, x - country",
                "gender": "female",
                "phone": {
                    "mobile": "+91 0000000000",
                    "home": "00 000000",
                    "office": "00 000000"
                }
            },
            {
                "id": "c205",
                "name": "Dido",
                "email": "dido@gmail.com",
                "address": "xx-xx-xxxx,x - street, x - country",
                "gender": "female",
                "phone": {
                    "mobile": "+91 0000000000",
                    "home": "00 000000",
                    "office": "00 000000"
                }
            },
            {
                "id": "c206",
                "name": "Adele",
                "email": "adele@gmail.com",

                "address": "xx-xx-xxxx,x - street, x - country",
                "gender": "female",
                "phone": {
                    "mobile": "+91 0000000000",
                    "home": "00 000000",
                    "office": "00 000000"
                }
            },
            {
                "id": "c207",
                "name": "Hugh Jackman",
                "email": "hugh_jackman@gmail.com",
                "address": "xx-xx-xxxx,x - street, x - country",
                "gender": "male",
                "phone": {
                    "mobile": "+91 0000000000",
                    "home": "00 000000",
                    "office": "00 000000"
                }
            },
            {
                "id": "c208",
                "name": "Will Smith",
                "email": "will_smith@gmail.com",
                "address": "xx-xx-xxxx,x - street, x - country",
                "gender": "male",
                "phone": {
                    "mobile": "+91 0000000000",
                    "home": "00 000000",
                    "office": "00 000000"
                }
            },
            {
                "id": "c209",
                "name": "Clint Eastwood",
                "email": "clint_eastwood@gmail.com",
                "address": "xx-xx-xxxx,x - street, x - country",
                "gender": "male",
                "phone": {

                    "mobile": "+91 0000000000",
                    "home": "00 000000",
                    "office": "00 000000"
                }
            },
            {
                "id": "c2010",
                "name": "Barack Obama",
                "email": "barack_obama@gmail.com",
                "address": "xx-xx-xxxx,x - street, x - country",
                "gender": "male",
                "phone": {
                    "mobile": "+91 0000000000",
                    "home": "00 000000",
                    "office": "00 000000"
                }
            },
            {
                "id": "c2011",
                "name": "Kate Winslet",
                "email": "kate_winslet@gmail.com",
                "address": "xx-xx-xxxx,x - street, x - country",
                "gender": "female",
                "phone": {
                    "mobile": "+91 0000000000",
                    "home": "00 000000",
                    "office": "00 000000"
                }
            },
            {
                "id": "c2012",
                "name": "Eminem",
                "email": "eminem@gmail.com",
                "address": "xx-xx-xxxx,x - street, x - country",
                "gender": "male",
                "phone": {
                    "mobile": "+91 0000000000",
                    "home": "00 000000",
                    "office": "00 000000"

                }
            }
        ]
    }
]
let showEmployee = arrEmployee[0].contacts.reduce((content,emp) =>(
      content +=`<tr>
    <td>${emp.id}</td>
    <td>${emp.name}</td>
    <td>@${emp.phone.mobile}</td>
    <td>${emp.phone.home}</td>
    <td>${emp.phone.office}</td>
    <td>@${emp.email}</td>
    <td>${emp.gender}</td>
    <td>${emp.address}</td>
</tr>`
    
),'')


QS('.tbody8').innerHTML=showEmployee