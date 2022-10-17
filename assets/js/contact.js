function sendMail(){
    let name = document.getElementById('name-input').value;
    let email = document.getElementById('email-input').value;
    let phone = document.getElementById('phone-input').value;
    let subject = document.getElementById('subject-input').value;
    let message = document.getElementById('message-input').value;

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    if(name == ''){
        return alert('Nama harus diisi');
    }else if(email == ''){
        return alert('Email harus diisi');
    }else if(phone == ''){
        return alert('Nomor telfon harus diisi');
    }else if(subject == ''){
        return alert('Subject harus diisi');
    }

    let emailReciever = 'trywidodoicp@gmail.com'

    let a = document.createElement('a');

    a.href = `mailto:${emailReciever}?subject:${subject}&body= Hello, my name is ${name}, ${message}, please contact me at ${phone}`;
    
    a.click();
    alert("pesan berhasil terkirim");
}