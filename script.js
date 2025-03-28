// script.js

let people = [
    { name: 'ANSHAD N.P', dob: '05/03/2007' },
    { name: 'ASHIN K R', dob: '01/06/2006' },
    { name: 'JAGAN NATH K', dob: '13/08/2005' },
    { name: 'MOHAMMED RAIHAN P K', dob: '25/08/2006' },
    { name: 'MUHAMMED SAHAL P', dob: '03/10/2006' },
    { name: 'NEERAD ABHIMANYU P', dob: '12/09/2006' },
    { name: 'RIHAN PARVEEN', dob: '27/10/2006' },
    { name: 'ROSHAN M', dob: '13/12/2006' },
    { name: 'VISHNUJITH.P', dob: '12/02/2006' },
    { name: 'YADU KRISHNA K', dob: '17/05/2007' },
    { name: 'YAHYA .A.P', dob: '24/10/2006' },
    { name: 'YEDUNAND.C', dob: '19/03/2006' },
    { name: 'ANAGHA M', dob: '14/10/2005' },
    { name: 'FATHIMATHUL SAHALA M P', dob: '29/03/2006' },
    { name: 'MALAVIKA K R', dob: '23/02/2006' },
    { name: 'SANIGA SANTHOSH', dob: '19/05/2006' },
    { name: 'ABHIJITH C K', dob: '03/07/2006' },
    { name: 'ABHINAV K', dob: '13/09/2006' },
    { name: 'ADHWAIDH RAJEEVAN', dob: '15/01/2007' },
    { name: 'ADITH CHANDRAN .B', dob: '02/03/2005' },
    { name: 'ADITH P P', dob: '10/05/2006' },
    { name: 'AGNEY K', dob: '02/10/2005' },
    { name: 'ANANDHU K', dob: '14/01/2006' },
    { name: 'ANURANJ N', dob: '13/01/2006' },
    { name: 'AROMAL K', dob: '27/06/2006' },
    { name: 'ASHIN .K', dob: '06/08/2006' },
    { name: 'HRISHIKESH P', dob: '31/05/2006' },
    { name: 'HRITHWIK SUJITH', dob: '14/02/2006' },
    { name: 'MUHAMMAD IHAAN IBRAHIM', dob: '05/11/2006' },
    { name: 'MUHAMMED AJNAS.C.P', dob: '29/12/2006' },
    { name: 'MUHAMMED FARHAN M', dob: '24/09/2005' },
    { name: 'MUHAMMED RIHAN C V K', dob: '03/12/2006' },
    { name: 'MUHAMMED SAIFUDHEEN K N', dob: '25/12/2005' },
    { name: 'MUHAMMED SHIFAN K', dob: '02/02/2007' },
    { name: 'NIKHIL E V', dob: '03/06/2006' },
    { name: 'SANGEERTH M', dob: '02/08/2006' },
    { name: 'SIDHARTH. E.K', dob: '17/12/2005' },
    { name: 'SREELESH C', dob: '02/02/2006' },
    { name: 'SREENIDHI P K', dob: '10/06/2006' },
    { name: 'VARUN P', dob: '22/01/2006' },
    { name: 'VISHNU V', dob: '02/10/2006' },
    { name: 'ATHIRA MP', dob: '23/03/2006' },
    { name: 'DEVANGANA U', dob: '20/07/2006' },
    { name: 'HUDA BASHEER', dob: '22/08/2005' },
    { name: 'MAYOOGHA RAJESH', dob: '15/03/2006' },
    { name: 'SIYA SURESH K', dob: '26/09/2006' },
    { name: 'SREYA GIREESH', dob: '16/12/2006' },
    { name: 'GOUTHAM DEV .M', dob: '27/04/2006' },
    { name: 'NIVED KRISHNA K', dob: '13/11/2006' },
    { name: 'DIVYASREE. A.S', dob: '28/10/2005' },
    { name: 'NAYANA UNNI.C', dob: '01/08/2006' },
    { name: 'SREENANDA RAJU', dob: '17/07/2006' },
    { name: 'SREENANDA. K', dob: '28/02/2007' },
    { name: 'AMAN A C', dob: '26/07/2006' },
    { name: 'MUHAMMAD ASHRAF.K', dob: '18/03/2006' },
    { name: 'MUHAMMED JUHAIL.K', dob: '05/10/2006' },
    { name: 'MUVAFFAQUE C', dob: '27/02/2007' },
    { name: 'NAVAF V', dob: '13/03/2006' },
    { name: 'FATHIMATH RIZA .C', dob: '07/01/2005' },
    { name: 'FATHIMATHUL SHIFA. V', dob: '30/03/2007' },
    { name: 'T AMANA SAIFUDHEEN', dob: '31/01/2007' },
    // Add more entries as needed
];

document.addEventListener('DOMContentLoaded', function () {
    updateAllPeopleTable();
    updateBirthdaysThisMonthTable();
    scheduleEmailNotifications();
});

function updateAllPeopleTable() {
    const tableBody = document.getElementById('allPeopleList');
    tableBody.innerHTML = '';

    for (const person of people) {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = person.name;
        row.insertCell(1).textContent = person.dob;
    }
}

function updateBirthdaysThisMonthTable() {
    const tableBody = document.getElementById('birthdaysThisMonthList');
    tableBody.innerHTML = '';

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based in JavaScript

    const birthdaysThisMonth = people
        .filter(person => {
            const dobMonth = parseInt(person.dob.split('/')[1], 10);
            return dobMonth === currentMonth;
        })
        .sort((a, b) => {
            const dayA = parseInt(a.dob.split('/')[0], 10);
            const dayB = parseInt(b.dob.split('/')[0], 10);
            return dayA - dayB;
        });

    for (const person of birthdaysThisMonth) {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = person.name;
        row.insertCell(1).textContent = person.dob;
    }
}

function searchPeople() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredPeople = people.filter(person => person.name.toLowerCase().includes(searchInput));
    displaySearchResults(filteredPeople);
}

function displaySearchResults(results) {
    const tableBody = document.getElementById('allPeopleList');
    tableBody.innerHTML = '';

    for (const person of results) {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = person.name;
        row.insertCell(1).textContent = person.dob;
    }
}

function goToBirthdaysThisMonthTable() {
    document.getElementById('birthdaysThisMonthTable').scrollIntoView({ behavior: 'smooth' });
}

function scheduleEmailNotifications() {
    const currentDate = new Date();
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(currentDate.getDate() + 1);
    tomorrow.setHours(18, 0, 0, 0); // Set the time to 6 PM

    for (const person of people) {
        const dob = new Date(currentDate.getFullYear(), parseInt(person.dob.split('/')[1], 10) - 1, parseInt(person.dob.split('/')[0], 10), 18, 0, 0, 0);

        if (dob.getTime() === tomorrow.getTime()) {
            sendEmailNotification(person);
        }
    }
}

function sendEmailNotification(person) {
    // Sendinblue API configuration
    const apiKey = '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';
    const senderEmail = 'akkuagneyanesh@gmail.com';
    const senderName = 'Birthday Alert';
    const recipientEmail = 'agneyanesh@gmail.com';

    // Email content
    const subject = 'Birthday Reminder';
    const body = `Don't forget to wish ${person.name} a Happy Birthday tomorrow!`;

    // Send email using Sendinblue API
    fetch('https://api.sendinblue.com/v3/smtp/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': apiKey,
        },
        body: JSON.stringify({
            sender: {
                name: senderName,
                email: senderEmail,
            },
            to: [
                {
                    email: recipientEmail,
                },
            ],
            subject: subject,
            htmlContent: body,
        }),
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error sending email:', error));
}
