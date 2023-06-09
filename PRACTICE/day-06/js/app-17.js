//Dizideki notların ortalamasını bulun,
//ortalamadan yuksek olanların ortalamasını %20, düşük olanların
//ortalamasını %10 artırarak yeni diziye atalım

const notlar = [
    { ad: "Ali Can", not: 38 },
    { ad: "Veli Kan", not: 62 },
    { ad: "Oya Tan", not: 74 },
    { ad: "Elif Han", not: 28 },
    { ad: "Mine San", not: 86 },
    { ad: "Mert Er", not: 67 },
    { ad: "Bora Fer", not: 92 },
    { ad: "Ayse Yilmaz", not: 100,},
    { ad: "İlke Cansiz", not: 56,},
    { ad: "Sude Canli", not: 94 },
    { ad: "Bade Sert", not: 72,},
    ];

    //ortalamayı bulma kodu

    let toplam=notlar.reduce((a,b)=>a+b.not,0)
    toplam=(toplam/notlar.length).toFixed(2)
    console.log(toplam)

    //ortalamanın altında olanlara %10 ,
    //yüksek olanların ortalamasını %20 attırdık
    let yeniNotlar=notlar.map((item)=>{
        if(item.not>=toplam){
            item.not=(item.not*1.2).toFixed(2)

        }else{
            item.not=(item.not*1.10).toFixed(2)
        }    

        return item;
    })
    console.log(yeniNotlar)

