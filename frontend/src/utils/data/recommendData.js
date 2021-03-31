const data = [
  {
    id: 3,
    store_name: "Battered Sole",
    area: "이태원",
    tel: "02-749-6867",
    category: "피쉬앤칩스|펍",
    image: "",
    address: "서울특별시 용산구 이태원동 118-9",
    branch: null,
  },
  {
    id: 32835,
    store_name: "곱창도선생",
    area: "이태원",
    tel: "070-7789-0717",
    category: "곱창|대창",
    image: "",
    address: "서울특별시 용산구 이태원동 119-18 좁은사이길 2층",
    branch: "",
  },
  {
    id: 50433,
    store_name: "김대포족발",
    area: "이태원",
    tel: "02-797-9877",
    category: "족발",
    image: "",
    address: "서울특별시 용산구 이태원동 131-36",
    branch: null,
  },
  {
    id: 83834,
    store_name: "대만대왕카스테라",
    area: "이태원",
    tel: "02-797-7122",
    category: "카스테라|대만",
    image: "",
    address: "서울특별시 용산구 이태원동 56-13",
    branch: null,
  },
  {
    id: 103959,
    store_name: "동아냉면",
    area: "이태원",
    tel: "02-796-2796",
    category: "매운냉면|냉면",
    image: "",
    address: "서울시 용산구 보광동 265-576",
    branch: "본점",
  },
  {
    id: 121867,
    store_name: "로망키친",
    area: "이태원",
    tel: "02-792-1840",
    category: "해물찜|파스타",
    image: "",
    address: "서울특별시 용산구 이태원동 118-40",
    branch: null,
  },
  {
    id: 125830,
    store_name: "리틀인디아",
    area: "이태원",
    tel: "02-793-5316",
    category: "인도요리|망고라씨",
    image: "",
    address: "서울시 용산구 이태원동 137-61",
    branch: null,
  },
  {
    id: 145512,
    store_name: "명동칼국수",
    area: "이태원",
    tel: "02-790-7134",
    category: "칼국수|왕만두",
    image: "",
    address: "서울특별시 용산구 이태원동 64-33",
    branch: null,
  },
  {
    id: 159620,
    store_name: "미스터케밥",
    area: "이태원",
    tel: "02-792-1997",
    category: "케밥|터키",
    image: "",
    address: "서울시 용산구 이태원1동 127-2",
    branch: "1호점",
  },
  {
    id: 188640,
    store_name: "부산갈비",
    area: "이태원",
    tel: "02-793-7641",
    category: "갈비|돼지갈비",
    image: "",
    address: "서울특별시 용산구 이태원동 112-6",
    branch: null,
  },
  {
    id: 202659,
    store_name: "쁘띠파리",
    area: "이태원",
    tel: "070-4243-3302",
    category: "크레페|프랑스",
    image: "",
    address: "서울특별시 용산구 이태원동 57-19",
    branch: null,
  },
  {
    id: 247336,
    store_name: "시소스시",
    area: "이태원",
    tel: "02-794-3343",
    category: "스시|새우간장밥",
    image: "",
    address: "서울특별시 용산구 이태원동 11-26",
    branch: null,
  },
  {
    id: 257039,
    store_name: "써브웨이",
    area: "이태원",
    tel: "02-790-3744",
    category: "샌드위치|치킨",
    image: "",
    address: "서울특별시 용산구 이태원동 127-3",
    branch: null,
  },
  {
    id: 270073,
    store_name: "양식이자카야800",
    area: "이태원",
    tel: "02-797-1141",
    category: "이자카야|와인",
    image: "",
    address: "서울특별시 용산구 한남동 684-35",
    branch: null,
  },
  {
    id: 299977,
    store_name: "와플대학",
    area: "이태원",
    tel: "02-792-8410",
    category: "와플|길거리음식",
    image: "",
    address: "서울특별시 용산구 이태원동 129-2",
    branch: null,
  },
  {
    id: 312077,
    store_name: "원조보리밥",
    area: "이태원",
    tel: "02-798-4762",
    category: "보리밥",
    image: "",
    address: "서울특별시 용산구 이태원1동 34-103",
    branch: null,
  },
  {
    id: 330837,
    store_name: "인생피자",
    area: "이태원",
    tel: "010-7320-6275",
    category: "pizza|피맥",
    image: "",
    address: "서울특별시 용산구 이태원동 405-20",
    branch: null,
  },
  {
    id: 346499,
    store_name: "정글포차",
    area: "이태원",
    tel: "070-7757-5598",
    category: "치킨|포차",
    image: "",
    address: "서울특별시 용산구 이태원동 124-4",
    branch: null,
  },
  {
    id: 358169,
    store_name: "준네양꼬치",
    area: "이태원",
    tel: "02-790-5668",
    category: "양꼬치|마라탕",
    image: "",
    address: "서울특별시 용산구 보광동 119-1",
    branch: null,
  },
  {
    id: 367711,
    store_name: "쪽갈비제작소",
    area: "이태원",
    tel: "02-792-8368",
    category: "쪽갈비|등갈비",
    image: "",
    address: "서울특별시 용산구 이태원동 118-16",
    branch: null,
  },
  {
    id: 368983,
    store_name: "차돌집",
    area: "이태원",
    tel: "02-790-0789",
    category: "차돌박이|차돌된장찌개",
    image: "",
    address: "서울시 용산구 이태원동 544",
    branch: "이태원점",
  },
  {
    id: 391793,
    store_name: "카이로바베큐",
    area: "이태원",
    tel: "070-4110-0087",
    category: "이집트레스토랑",
    image: "",
    address: "서울시 용산구 한남동 732-151",
    branch: "",
  },
  {
    id: 410875,
    store_name: "큰맘할매순대국",
    area: "이태원",
    tel: "02-794-8585",
    category: "순대국|해장국",
    image: "",
    address: "서울특별시 용산구 이태원동 130-6",
    branch: null,
  },
  {
    id: 411854,
    store_name: "키덜트키친",
    area: "이태원",
    tel: "02-790-7216",
    category: "규카츠|파스타",
    image: "",
    address: "서울특별시 용산구 이태원동 72-16 지하1층",
    branch: null,
  },
  {
    id: 413572,
    store_name: "타코 칠리칠리",
    area: "이태원",
    tel: "02-797-7219",
    category: "타코|부리또",
    image: "",
    address: "서울특별시 용산구 이태원동 527",
    branch: "이태원점",
  },
  {
    id: 424121,
    store_name: "트레비아",
    area: "이태원",
    tel: "02-794-6003",
    category: "라자냐|피자",
    image: "",
    address: "서울특별시 용산구 이태원동 557",
    branch: null,
  },
  {
    id: 438746,
    store_name: "프엉쌀국수",
    area: "이태원",
    tel: null,
    category: "쌀국수|베트남",
    image: "",
    address: "서울특별시 용산구 이태원동 118-40",
    branch: null,
  },
  {
    id: 442915,
    store_name: "피츠버거",
    area: "이태원",
    tel: "02-796-8088",
    category: "수제버거|칠리치즈",
    image: "",
    address: "서울시 용산구 한남동 737-24",
    branch: null,
  },
  {
    id: 448169,
    store_name: "한남닭발",
    area: "이태원",
    tel: "02-790-0210",
    category: "",
    image: "",
    address: "서울특별시 용산구 한남동 641-7",
    branch: null,
  },
  {
    id: 459310,
    store_name: "해피커피",
    area: "이태원",
    tel: "070-7573-3394",
    category: "수제초콜렛|카페",
    image: "",
    address: "서울특별시 용산구 이태원동 11-16",
    branch: null,
  },
];

export default data;
