function clear1() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
}

function clear2() {
    let frm = document.getElementById("formulir");
    frm.a2.value = "";
}
function kosongAll() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
    frm.a2.value = "";
    frm.hasil.value = "";
}

function penjumlahan() {
    let frm = document.getElementById("formulir");
    let angka1 = frm.a1.value;
    let angka2 = frm.a2.value;
    //jika inputan salah
    if (isNaN(angka1) || angka1 == '') {
        alert("Harap isi data berupa angka !!!");
    } else if (isNaN(angka2) || angka2 == '') {
        alert("Harap isi data berupa angka !!!");
    } else {
        //jika inputan benar
        let total = parseInt(angka1) + parseInt(angka2); //perhitungan
        frm.hasil.value = total; //penempatan hasil di element form hasil
    }
}

function pengurangan() {
    let frm = document.getElementById("formulir");
    let angka1 = frm.a1.value;
    let angka2 = frm.a2.value;
    //jika inputan salah
    if (isNaN(angka1) || angka1 == '') {
        alert("Harap isi data berupa angka !!!");
    } else if (isNaN(angka2) || angka2 == '') {
        alert("Harap isi data berupa angka !!!");
    } else {
        //jika inputan benar
        let total = angka1 - angka2; //perhitungan
        frm.hasil.value = total; //penempatan hasil di element form hasil
    }
}

function perkalian() {
    let frm = document.getElementById("formulir");
    let angka1 = frm.a1.value;
    let angka2 = frm.a2.value;
    //jika inputan salah
    if (isNaN(angka1) || angka1 == '') {
        alert("Harap isi data berupa angka !!!");
    } else if (isNaN(angka2) || angka2 == '') {
        alert("Harap isi data berupa angka !!!");
    } else {
        //jika inputan benar
        let total = angka1 * angka2; //perhitungan
        frm.hasil.value = total; //penempatan hasil di element form hasil
    }
}

function pembagian() {
    let frm = document.getElementById("formulir");
    let angka1 = frm.a1.value;
    let angka2 = frm.a2.value;
    //jika inputan salah
    if (isNaN(angka1) || angka1 == '') {
        alert("Harap isi data berupa angka !!!");
    } else if (isNaN(angka2) || angka2 == '') {
        alert("Harap isi data berupa angka !!!");
    } else {
        //jika inputan benar
        let total = angka1 / angka2; //perhitungan
        frm.hasil.value = total; //penempatan hasil di element form hasil
    }
}

function kuadrat() {
    let frm = document.getElementById("formulir");
    let angka1 = frm.a1.value;
    let angka2 = frm.a2.value;
    //jika inputan salah
    if (isNaN(angka1) || angka1 == '') {
        alert("Harap isi data berupa angka !!!");
    } else if (isNaN(angka2) || angka2 == '') {
        alert("Harap isi data berupa angka !!!");
    } else {
        //jika inputan benar
        let total = Math.pow(angka1,angka2); //perhitungan
        frm.hasil.value = total; //penempatan hasil di element form hasil
    }
}