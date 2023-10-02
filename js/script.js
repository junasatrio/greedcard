function getData() {
    // data utama

    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    const phone=document.getElementById("phone").value
    const subject=document.getElementById("subject").value
    const message=document.getElementById("message").value

    
    if(name == ""){
        return alert("Tidak Boleh Kosong")
    } else if(email == ""){
        return alert("Tidak Boleh Kosong")
    } else if(phone == ""){
        return alert("Tidak Boleh Kosong")
    } else if(subject == ""){
        return alert("Tidak Boleh Kosong")
    } else if(message == ""){
        return alert("Tidak Boleh Kosong")
    }

    //mengarahkan ke email
    const myEmail = "hi.junsatsatprakoso@gmail.com"
    let a = document.createElement("a")
    a.href = `mailto:${myEmail}?subject=${subject}&body= hi my name is ${name} , whay do you call me ${phone} untuk membahaya soal project bisnis kita ${message}`
    a.click()

    let data ={
        name,
        email,
        phone,
        subject,
        message
    }
    console.log(data)
}