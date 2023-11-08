const cr = "CR";
const v = "Vu";
const en = "En";

const SpeciesQuestions = [
  {
    questionText: "Pygmy hog",
    ans: ["CR", "Orang NP"],
  },
  {
    questionText: "Large spotted civet",
    ans: ["CR", "Western Ghats"],
  },
  {
    questionText: "Sumantarna Raino",
    ans: ["CR", "Extint in India"],
  },
  {
    questionText: "Namdafa Flying Squerral",
    ans: [cr],
  },
  {
    questionText: "Elvira Rat",
    ans: [cr, "only in Eastern ghats"],
  },
  {
    questionText: "Kashmiri Stag",
    ans: [cr, "Dachingam N.p"],
  },
  {
    questionText: "Jerkins shrew",
    ans: [cr, "Endemic to soth Andaman Island"],
  },
  {
    questionText: "Asiatic cheeta",
    ans: [
      cr,
      "cites: APPENDIX I",
      "only 40-50",
      "african cheeta: Vu, cites(Appendix I), 6.5-7k population",
    ],
  },
  {
    questionText: "Chinese pangoline",
    ans: [cr, "NE-India"],
  },
  {
    questionText: "Himalayan Brown Bear",
    ans: [cr, "North India"],
  },
  {
    questionText: "Orangutas",
    ans: [cr, "odissa Nandankanan Zoological Park", "xe2"],
  },
  {
    questionText: "Pondicherry Shar",
    ans: [cr, "all oceans, Mouth of Hoogly river"],
  },
  {
    questionText: "Large Tooth Sawfish",
    ans: [cr, "Western Indio pacific ocean"],
  },
  {
    questionText: "Long comb sawfish",
    ans: [cr, "Indo pacific Ocean"],
  },
  {
    questionText: "Green/olive Sawfish",
    ans: [cr, "Indo pacific ocean"],
  },
  {
    questionText: "Red crowned Roof Turtle",
    ans: [cr, "National chambal santuary", "NC ghadiyal WLS"],
  },
  {
    questionText: "Three stiped Roof Turtle",
    ans: [cr, "Tipura", "chambal(UP, bhiral, mp,raj,assam)"],
  },
  {
    questionText: "Northern river Terrapin",
    ans: [cr, "WB, odissa"],
  },
  {
    questionText: "Haksbill sea turtle",
    ans: [cr, "Andaman, TN, Orissa"],
  },
  {
    questionText: "Sal forest Tortoise",
    ans: [cr],
  },
  {
    questionText: "Munnar Bush frog ",
    ans: [cr],
  },
  {
    questionText: "Raorchsters Sanctisilvaticus",
    ans: [cr],
  },
  {
    questionText: "Ponmudi Frog",
    ans: [cr, "western ghats"],
  },
  {
    questionText: "Great Indian Buster",
    ans: [cr, "Keolado"],
  },
  {
    questionText: "Siberian Crane",
    ans: [cr],
  },
  {
    questionText: "Himalayan Quayal",
    ans: [cr, "Western Ghats"],
  },
  {
    questionText: "Pink Headed Duck",
    ans: [cr, "NE India "],
  },
  {
    questionText: "White Belled Heron",
    ans: [cr, "NE India"],
  },
  {
    questionText: "Baers Pochard",
    ans: [cr, "Bihar", "Dipoar Bill"],
  },
  {
    questionText: "Bengal Florican",
    ans: [cr, "NE India", "Manas NP"],
  },
  {
    questionText: "Sociable Lowbing",
    ans: [cr, "Kuch, North west India"],
  },
  {
    questionText: "Jerdons Courson",
    ans: [cr, "Eastern Ghats of AP"],
  },
  {
    questionText: "Spoon Billed Sand Pipper",
    ans: [cr, "WB, Orissa, kerala, TN"],
  },
  {
    questionText: "Devlali Minno",
    ans: [cr, "Nandur madhaweswar"],
  },
  {
    questionText: "Olive Ridley See Turtle",
    ans: [v, "Bhitarkanika"],
  },
  {
    questionText: "Leather back See Turtle",
    ans: [v, "Andaman"],
  },
  {
    questionText: "Sarus Crane",
    ans: [v, "Upstate Bird", "Non migratery"],
  },
  {
    questionText: "Indian Rhino",
    ans: [v, "Manas, kaziranga"],
  },
  {
    questionText: "Gaur",
    ans: [v, "Indian Bison", "Anamali Hills"],
  },
  {
    questionText: "Snow Leapord",
    ans: [v, ""],
  },
  {
    questionText: "Cloded Leapord",
    ans: [v, "Meghalaya state animal"],
  },
  {
    questionText: "Nilgiri Langur",
    ans: [v, "Nilgiri"],
  },
  {
    questionText: "Megapode",
    ans: [v, "Nicobar"],
  },
  {
    questionText: "Dugong",
    ans: [v, "Sea cow", "Gulf of Mannar"],
  },
  {
    questionText: "Bara Singha",
    ans: [v, ""],
  },
  {
    questionText: "Sambar",
    ans: [v, ""],
  },
  {
    questionText: "Red Panda",
    ans: [en, "Moulin"],
  },
  {
    questionText: "Gees Golden Langhor",
    ans: [en, "Manas"],
  },
  {
    questionText: "Hispid Hare",
    ans: [en, "Assam, NE"],
  },
  {
    questionText: "White Bellied Musk Deer",
    ans: [en, "Uttarakand"],
  },
  {
    questionText: "Lion Tailed Macoque",
    ans: [en, "Kuderemuckh", "Endemic to WESTERN GHATS"],
  },
  {
    questionText: "Niligiri Thar",
    ans: [en, "Eravikulam, TN, Kerala"],
  },
  {
    questionText: "Sangai Dancing Deer",
    ans: [en, "Loktak"],
  },
  {
    questionText: "Eids Deer",
    ans: [en, "NE India"],
  },
  {
    questionText: "Narcondam Horn Bill",
    ans: [en, "Andaman Nicobar"],
  },
  {
    questionText: "Aiatic Lion",
    ans: [en, "Gir"],
  },
  {
    questionText: "Indian Elephant",
    ans: [en, ""],
  },
  {
    questionText: "Hoolock Gibbons",
    ans: [en, "North East, Himalayas"],
  },
  {
    questionText: "Forest Owlet Peninsular Plateau",
    ans: [en, "Peninusular Plateau"],
  },
  {
    questionText: "Irrawaddy Dolphin",
    ans: [en, ""],
  },
  {
    questionText: "Gangas Dolphin",
    ans: [en, ""],
  },
];

export default SpeciesQuestions;
