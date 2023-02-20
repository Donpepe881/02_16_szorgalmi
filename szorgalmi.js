
// 1. feladat - Minden második karakter törlése

function feleSzoveg(felezettSzoveg) {
    let toroltSzoveg = "";
    for (let i = 0; i < felezettSzoveg.length; i++) {
        if (i % 2 == 0) {
            toroltSzoveg = toroltSzoveg + felezettSzoveg[i];
        }

    }
    return toroltSzoveg;
}

document.write(feleSzoveg("Módosított szöveg"));



// 2. feladat - tabusító

function tabusito(eredetiSzoveg, modositottKarakter) {
    return szoveg = eredetiSzoveg.replaceAll(modositottKarakter, "");
}

document.write(tabusito("Szeretem a programozást", /e/gi))



// 3. feladat - magánhangzó törlése

function maganhangzoTabusito(maganhangzokNelkul) {
    return szoveg = maganhangzokNelkul.replace(/[aáeéiíoóöőuúüű]/gi, "");

}

document.write(maganhangzoTabusito("Szeretem a programozást "));