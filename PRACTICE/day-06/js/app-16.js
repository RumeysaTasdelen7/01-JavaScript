//!1- bir dizideki pozitif ve çift sayılaın toplamı ve adedini bulunuz.

const arr = [-5,6,3,-5,-7,4,12,-58,72];

let toplam =0;

let adet =0;
for(let i=0; i< arr.length;i++){
    if(arr[i] > 0 && arr[i]%2==0){
        toplam += arr[i];
        adet++;
    }
}
console.log(`${adet} sayinin toplami ${toplam}`)

///! 2-ülke ve başkentlerin yazılı olduğu dizilerin
//eşleşen indis elemanlarını
//birleştirerek ayrı bir diziye atın

const ulkeler = [
    "Türkiye",
    "Almanya",
    "Fransa",
    "Hollanda",
    "İtalya",
    "İspanya",
    "Portekiz",
  ];
  const baskentler = [
    "Ankara",
    "Berlin",
    "Paris",
    "Amsterdam",
    "Roma",
    "Madrid",
    "Lizbon",
  ];

  let newArr=[];

  for(let i in ulkeler){
    newArr.push(ulkeler[i] + "-"+ baskentler[i])

  }

  console.log(newArr);

 //!3- Dizinin herbir elemanını ilk 3 karakterini büyük harfli olarak
// değiştirip alfabetik hale getirip yazdırın.
let ulkeler2 = [
    "Türkiye",
    "Almanya",
    "Fransa",
    "Hollanda",
    "İtalya",
    "İspanya",
    "Portekiz",
  ];
  let newArr2=[];

  ulkeler2= ulkeler2.sort((a,b)=>a.localeCompare(b))
  for(let item of ulkeler2){

 //newArr2.push(item.substring(0,3).toLocaleUpperCase())

 item=item.substring(0,3).toLocaleUpperCase()
 newArr2.push(item)

  }

console.log(newArr2) 


//! 4- Dizideki herbir elemanın 2 katının mutlak değerini alıp
// başka bir diziye atın.
// Yeni dizinin elemanları azalan şekilde sıralansın.

let num=[-5,6,3,-5,-7,4,12,-58,72];

let newNum=[]

num.forEach((item,index)=>{

    newNum[index]=Math.abs(item*2)

})

newNum=newNum.sort((a,b)=>b-a)
console.log(newNum); //büyükten küçüğe doğru sıralar
