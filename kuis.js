const soal = document.getElementById("soal")
const pilihan = Array.from(document.getElementsByClassName("choice-text"))

let soalSekarang = {}
let jawabanYangDiterima = true
let nilai = 0
let soalCounter = 0
let dataSoal = []

let kuis = [{
        pertanyaan: 'Apa elemen HTML yang digunakan untuk menyelipkan program JavaScript?',
        jawabanA: '<script>',
        jawabanB: '<javascript>',
        jawabanC: '<js>',
        jawabanD: '<scripting>',
        jawabanE: '<es>',
        jawab: 1
    },
    {
        pertanyaan: 'Apa syntax yang tepat untuk mereferensikan suatu program JavaScript yang berekstensi "xxx.js"?',
        jawabanA: '<script href="xxx.js">',
        jawabanB: '<script name="xxx.js">',
        jawabanC: '<script src="xxx.js">',
        jawabanD: '<script file="xxx.js">',
        jawabanE: '<script link="xxx.js">',
        jawab: 3
    },
    {
        pertanyaan: 'Bagaimana cara menulis "Hello World!" dalam sebuah alert?',
        jawabanA: 'console("Hello World")',
        jawabanB: 'msg("Hello World")',
        jawabanC: 'msgBox("Hello World")',
        jawabanD: 'alert("Hello World")',
        jawabanE: 'alertBox("Hello World")',
        jawab: 4
    }
]

//aturan ujian
const poin = 10
const jumlah_soal = 150

mulai = () => {
    soalCounter = 0
    nilai = 0
    dataSoal = [...kuis]
    console.log(dataSoal)
}

mulai()