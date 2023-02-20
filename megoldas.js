// 1. feladat

function hosszEllenor(szoveg) {
    if (szoveg.length < 8) {
        return true;
    }
    return false;
}

document.write(hosszEllenor("teszt"));
document.write("<br>")
document.write(hosszEllenor("feladatteszt"));

// 2. feladat

function tajSzamEllenor(tajSzam) {
    if (tajSzam.length <= 9) {
        let paros = (tajSzam[1] + tajSzam[3] + tajSzam[5] + tajSzam[7]) * 7;
        let paratlan = (tajSzam[0] + tajSzam[2] + tajSzam[4] + tajSzam[6]) * 3;
        if ((paros + paratlan) % 10 == tajSzam[8]) {
            return true;
        }
        return false;
    }
    return false;
}


document.write("Érvényes tajszám: " + tajSzamEllenor("040655330"));
document.write("<br>Érvényes tajszám: " + tajSzamEllenor(111111111));
document.write();
document.write("<br>Érvényes tajszám: " + tajSzamEllenor("092838323"));


// 3. feladat 

let vizsgaltTomb = [3, 5, 10, 16, 9];

function tombTerjedelem(vizsgaltTomb) {

    let maxErtek = vizsgaltTomb[0];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (maxErtek < vizsgaltTomb[i]) {
            maxErtek = vizsgaltTomb[i]
        }
    }

    let minErtek = vizsgaltTomb[0];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (minErtek > vizsgaltTomb[i]) {
            minErtek = vizsgaltTomb[i]
        }
    }
    let terjedelem = maxErtek - minErtek;
    return terjedelem;
}


document.write("A tömb terjedelme: " + tombTerjedelem(vizsgaltTomb));


// 4. feladat

function legidosebbDolgozo(dolgozok) {
    let oldest = 0;
    for (let i = 0; i < dolgozok.length; i++) {
        if (dolgozok[oldest].kor < dolgozok[i].kor) {
            oldest = i;
        }
    }
    return oldest;
}


document.write("A legidősebb dolgozó indexe: " + legidosebbDolgozo(dolgozok))


// 5. feladat

function atlagFizetesek(vizsgaltFizetesek) {
    let osszeg = 0;
    for (let i = 0; i < vizsgaltFizetesek.length; i++) {
        osszeg += vizsgaltFizetesek[i].fizetes;
    }
    return Math.round(osszeg / vizsgaltFizetesek.length);
}

let atlagFizetes = atlagFizetesek(dolgozok);
document.write(`Átlagfizetés: ${atlagFizetes}`)

function fizetesEmeles(fizetesObjektum) {
    let fizetesAlattiak = [];
    for (let i = 0; i < dolgozok.length; i++) {
        let ujObjektum = {};
        ujObjektum.nev = fizetesObjektum[i].nev;
        ujObjektum.kor = fizetesObjektum[i].kor;
        ujObjektum.fizetes = fizetesObjektum[i].fizetes;
        if (atlagFizetes > fizetesObjektum[i].fizetes) {
            ujObjektum.fizetes = Math.round(fizetesObjektum[i].fizetes * 1.1)
        }
        ujObjektum.beosztas = fizetesObjektum[i].beosztas;
        fizetesAlattiak.push(ujObjektum);
    }
    return fizetesAlattiak;
}

const emeltFizetes = fizetesEmeles(dolgozok);
document.write("<table border=\"1\">");
document.write("<tr><th>Név</th><th>Kor</th><th>Fizetés</th><th>Beosztás</th></tr>");
for (let i = 0; i < emeltFizetes.length; i++) {
    document.write(`<tr><td>${emeltFizetes[i].nev}</td><td>${emeltFizetes[i].kor}</td>
    <td>${emeltFizetes[i].fizetes}</td><td>${emeltFizetes[i].beosztas}</td></tr>`)
}
document.write("</table>");
