export interface Application {
  no: number;
  type: string;
  requestType: string;
  document: string;
  requestDate: string;
  approvalStatus: "승인완료" | "승인대기" | "승인거부";
  approvalReason: string;
  approvalDate: string;
  manager: string;
  name: string;
}

// export const initialApplications: Application[] = [
//   {
//     no: 0,
//     type: "소득적격",
//     requestType: "개인전문",
//     document: "보기",
//     requestDate: "2023-01-10 09:00:00",
//     approvalStatus: "승인완료",
//     approvalReason: "서류 식별 불가 금융투자업자에 계좌를 개설하지 1년 미만으로 전문투자자 승인 불가",
//     approvalDate: "2023-01-15 09:00:00",
//     manager: "김관리자",
//     name: "Taha",
//   },
//   {
//     no: 1,
//     type: "소득적격",
//     requestType: "개인전문",
//     document: "보기",
//     requestDate: "2023-01-11 09:00:00",
//     approvalStatus: "승인완료",
//     approvalReason: "서류 식별 불가 금융투자업자에 계좌를 개설하지 1년 미만으로 전문투자자 승인 불가",
//     approvalDate: "2023-01-20 09:00:00",
//     manager: "김관리자",
//     name: "Tarık",
//   },
//   {
//     no: 2,
//     type: "소득적격",
//     requestType: "소득적격",
//     document: "보기",
//     requestDate: "2023-01-22 09:00:00",
//     approvalStatus: "승인대기",
//     approvalReason: "서류 식별 불가 금융투자업자에 계좌를 개설하지 1년 미만으로 전문투자자 승인 불가",
//     approvalDate: "2023-01-10 09:00:00",
//     manager: "김관리자",
//     name: "Kadir",
//   },
//   {
//     no: 3,
//     type: "소득적격",
//     requestType: "개인전문",
//     document: "보기",
//     requestDate: "2023-01-05 09:00:00",
//     approvalStatus: "승인완료",
//     approvalReason: "서류 식별 불가 금융투자업자에 계좌를 개설하지 1년 미만으로 전문투자자 승인 불가",
//     approvalDate: "2023-01-10 09:00:00",
//     manager: "김관리자",
//     name: "Taha",
//   },
//   {
//     no: 4,
//     type: "소득적격",
//     requestType: "개인전문",
//     document: "보기",
//     requestDate: "2023-01-10 09:00:00",
//     approvalStatus: "승인대기",
//     approvalReason: "",
//     approvalDate: "2023-01-10 09:00:00",
//     manager: "김관리자",
//     name: "Taha",
//   },
//   {
//     no: 5,
//     type: "일반개인",
//     requestType: "소득적격",
//     document: "보기",
//     requestDate: "2023-01-10 09:00:00",
//     approvalStatus: "승인거부",
//     approvalReason: "",
//     approvalDate: "2023-01-10 09:00:00",
//     manager: "김관리자",
//     name: "Taha",
//   },
//   {
//     no: 6,
//     type: "일반개인",
//     requestType: "소득적격",
//     document: "보기",
//     requestDate: "2023-01-10 09:00:00",
//     approvalStatus: "승인완료",
//     approvalReason: "",
//     approvalDate: "2023-01-10 09:00:00",
//     manager: "김관리자",
//     name: "Taha",
//   },
//   {
//     no: 7,
//     type: "일반개인",
//     requestType: "소득적격",
//     document: "보기",
//     requestDate: "2023-01-10 09:00:00",
//     approvalStatus: "승인거부",
//     approvalReason: "",
//     approvalDate: "2023-01-10 09:00:00",
//     manager: "김관리자",
//     name: "Taha",
//   },
// ];

export const initialApplications: Application[] = [
  {
    no: 0,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2023-01-10 09:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 식별 불가 금융투자업자에 계좌를 개설하지 1년 미만으로 전문투자자 승인 불가",
    approvalDate: "2023-01-15 09:00:00",
    manager: "김관리자",
    name: "민준",
  },
  {
    no: 1,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2023-01-11 09:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 식별 불가 금융투자업자에 계좌를 개설하지 1년 미만으로 전문투자자 승인 불가",
    approvalDate: "2023-01-20 09:00:00",
    manager: "김관리자",
    name: "서준",
  },
  {
    no: 2,
    type: "소득적격",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2023-01-22 09:00:00",
    approvalStatus: "승인대기",
    approvalReason: "서류 식별 불가 금융투자업자에 계좌를 개설하지 1년 미만으로 전문투자자 승인 불가",
    approvalDate: "2023-01-10 09:00:00",
    manager: "김관리자",
    name: "도윤",
  },
  {
    no: 3,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2023-01-05 09:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 식별 불가 금융투자업자에 계좌를 개설하지 1년 미만으로 전문투자자 승인 불가",
    approvalDate: "2023-01-10 09:00:00",
    manager: "김관리자",
    name: "민준",
  },
  {
    no: 4,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2023-01-10 09:00:00",
    approvalStatus: "승인대기",
    approvalReason: "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    approvalDate: "2023-01-10 09:00:00",
    manager: "김관리자",
    name: "민준",
  },
  {
    no: 5,
    type: "일반개인",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2023-01-10 09:00:00",
    approvalStatus: "승인거부",
    approvalReason: "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    approvalDate: "2023-01-10 09:00:00",
    manager: "김관리자",
    name: "민준",
  },
  {
    no: 6,
    type: "일반개인",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2023-01-10 09:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    approvalDate: "2023-01-10 09:00:00",
    manager: "김관리자",
    name: "민준",
  },
  {
    no: 7,
    type: "일반개인",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2023-01-10 09:00:00",
    approvalStatus: "승인거부",
    approvalReason: "서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가",
    approvalDate: "2023-01-10 09:00:00",
    manager: "김관리자",
    name: "민준",
  },
  {
    no: 8,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2023-02-10 10:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2023-02-15 10:00:00",
    manager: "이관리자",
    name: "예준",
  },
  {
    no: 9,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2023-03-10 11:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2023-03-15 11:00:00",
    manager: "이관리자",
    name: "지후",
  },
  {
    no: 10,
    type: "소득적격",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2023-04-10 12:00:00",
    approvalStatus: "승인대기",
    approvalReason: "서류 확인 필요",
    approvalDate: "2023-04-15 12:00:00",
    manager: "이관리자",
    name: "준우",
  },
  {
    no: 11,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2023-05-10 13:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2023-05-15 13:00:00",
    manager: "이관리자",
    name: "하준",
  },
  {
    no: 12,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2023-06-10 14:00:00",
    approvalStatus: "승인대기",
    approvalReason: "서류 확인 필요",
    approvalDate: "2023-06-15 14:00:00",
    manager: "이관리자",
    name: "지안",
  },
  {
    no: 13,
    type: "일반개인",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2023-07-10 15:00:00",
    approvalStatus: "승인거부",
    approvalReason: "서류 확인 필요",
    approvalDate: "2023-07-15 15:00:00",
    manager: "이관리자",
    name: "도현",
  },
  {
    no: 14,
    type: "일반개인",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2023-08-10 16:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2023-08-15 16:00:00",
    manager: "이관리자",
    name: "시우",
  },
  {
    no: 15,
    type: "일반개인",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2023-09-10 17:00:00",
    approvalStatus: "승인거부",
    approvalReason: "서류 확인 필요",
    approvalDate: "2023-09-15 17:00:00",
    manager: "이관리자",
    name: "건우",
  },
  {
    no: 16,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2023-10-10 18:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2023-10-15 18:00:00",
    manager: "박관리자",
    name: "지성",
  },
  {
    no: 17,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2023-11-10 19:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2023-11-15 19:00:00",
    manager: "박관리자",
    name: "민서",
  },
  {
    no: 18,

    type: "소득적격",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2023-12-10 20:00:00",
    approvalStatus: "승인대기",
    approvalReason: "서류 확인 필요",
    approvalDate: "2023-12-15 20:00:00",
    manager: "박관리자",
    name: "주원",
  },
  {
    no: 19,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2024-01-10 21:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2024-01-15 21:00:00",
    manager: "박관리자",
    name: "준서",
  },
  {
    no: 20,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2024-02-10 22:00:00",
    approvalStatus: "승인대기",
    approvalReason: "서류 확인 필요",
    approvalDate: "2024-02-15 22:00:00",
    manager: "박관리자",
    name: "성민",
  },
  {
    no: 21,
    type: "일반개인",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2024-03-10 23:00:00",
    approvalStatus: "승인거부",
    approvalReason: "서류 확인 필요",
    approvalDate: "2024-03-15 23:00:00",
    manager: "박관리자",
    name: "준영",
  },
  {
    no: 22,
    type: "일반개인",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2024-04-10 09:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2024-04-15 09:00:00",
    manager: "박관리자",
    name: "현우",
  },
  {
    no: 23,
    type: "일반개인",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2024-05-10 10:00:00",
    approvalStatus: "승인거부",
    approvalReason: "서류 확인 필요",
    approvalDate: "2024-05-15 10:00:00",
    manager: "박관리자",
    name: "태민",
  },
  {
    no: 24,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2024-06-10 11:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2024-06-15 11:00:00",
    manager: "최관리자",
    name: "민재",
  },
  {
    no: 25,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2024-07-10 12:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2024-07-15 12:00:00",
    manager: "최관리자",
    name: "우진",
  },
  {
    no: 26,
    type: "소득적격",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2024-08-10 13:00:00",
    approvalStatus: "승인대기",
    approvalReason: "서류 확인 필요",
    approvalDate: "2024-08-15 13:00:00",
    manager: "최관리자",
    name: "시현",
  },
  {
    no: 27,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2024-09-10 14:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2024-09-15 14:00:00",
    manager: "최관리자",
    name: "서진",
  },
  {
    no: 28,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2024-10-10 15:00:00",
    approvalStatus: "승인대기",
    approvalReason: "서류 확인 필요",
    approvalDate: "2024-10-15 15:00:00",
    manager: "최관리자",
    name: "예성",
  },
  {
    no: 29,
    type: "일반개인",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2024-11-10 16:00:00",
    approvalStatus: "승인거부",
    approvalReason: "서류 확인 필요",
    approvalDate: "2024-11-15 16:00:00",
    manager: "최관리자",
    name: "지원",
  },
  {
    no: 30,
    type: "일반개인",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2024-12-10 17:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2024-12-15 17:00:00",
    manager: "최관리자",
    name: "승우",
  },
  {
    no: 31,
    type: "일반개인",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2025-01-10 18:00:00",
    approvalStatus: "승인거부",
    approvalReason: "서류 확인 필요",
    approvalDate: "2025-01-15 18:00:00",
    manager: "최관리자",
    name: "우빈",
  },
  {
    no: 32,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2025-02-10 19:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2025-02-15 19:00:00",
    manager: "강관리자",
    name: "승민",
  },
  {
    no: 33,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2025-03-10 20:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2025-03-15 20:00:00",
    manager: "강관리자",
    name: "하람",
  },
  {
    no: 34,
    type: "소득적격",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2025-04-10 21:00:00",
    approvalStatus: "승인대기",
    approvalReason: "서류 확인 필요",
    approvalDate: "2025-04-15 21:00:00",
    manager: "강관리자",
    name: "우현",
  },
  {
    no: 35,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2025-05-10 22:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2025-05-15 22:00:00",
    manager: "강관리자",
    name: "현준",
  },
  {
    no: 36,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2025-06-10 23:00:00",
    approvalStatus: "승인대기",
    approvalReason: "서류 확인 필요",
    approvalDate: "2025-06-15 23:00:00",
    manager: "강관리자",
    name: "동현",
  },
  {
    no: 37,
    type: "일반개인",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2025-07-10 09:00:00",
    approvalStatus: "승인거부",
    approvalReason: "서류 확인 필요",
    approvalDate: "2025-07-15 09:00:00",
    manager: "강관리자",
    name: "민성",
  },
  {
    no: 38,
    type: "일반개인",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2025-08-10 10:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2025-08-15 10:00:00",
    manager: "강관리자",
    name: "정우",
  },
  {
    no: 39,
    type: "일반개인",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2025-09-10 11:00:00",
    approvalStatus: "승인거부",
    approvalReason: "서류 확인 필요",
    approvalDate: "2025-09-15 11:00:00",
    manager: "강관리자",
    name: "은우",
  },
  {
    no: 40,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2025-10-10 12:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2025-10-15 12:00:00",
    manager: "조관리자",
    name: "유준",
  },
  {
    no: 41,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2025-11-10 13:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2025-11-15 13:00:00",
    manager: "조관리자",
    name: "규민",
  },
  {
    no: 42,
    type: "소득적격",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2025-12-10 14:00:00",
    approvalStatus: "승인대기",
    approvalReason: "서류 확인 필요",
    approvalDate: "2025-12-15 14:00:00",
    manager: "조관리자",
    name: "도훈",
  },
  {
    no: 43,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2026-01-10 15:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2026-01-15 15:00:00",
    manager: "조관리자",
    name: "현우",
  },
  {
    no: 44,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2026-02-10 16:00:00",
    approvalStatus: "승인대기",
    approvalReason: "서류 확인 필요",
    approvalDate: "2026-02-15 16:00:00",
    manager: "조관리자",
    name: "재윤",
  },
  {
    no: 45,
    type: "일반개인",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2026-03-10 17:00:00",
    approvalStatus: "승인거부",
    approvalReason: "서류 확인 필요",
    approvalDate: "2026-03-15 17:00:00",
    manager: "조관리자",
    name: "우성",
  },
  {
    no: 46,
    type: "일반개인",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2026-04-10 18:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2026-04-15 18:00:00",
    manager: "조관리자",
    name: "예성",
  },
  {
    no: 47,
    type: "일반개인",
    requestType: "소득적격",
    document: "보기",
    requestDate: "2026-05-10 19:00:00",
    approvalStatus: "승인거부",
    approvalReason: "서류 확인 필요",
    approvalDate: "2026-05-15 19:00:00",
    manager: "조관리자",
    name: "도율",
  },
  {
    no: 48,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2026-06-10 20:00:00",
    approvalStatus: "승인완료",
    approvalReason: "서류 확인 필요",
    approvalDate: "2020-06-15 20:00:00",
    manager: "조관리자",
    name: "현승",
  },
  {
    no: 49,
    type: "소득적격",
    requestType: "개인전문",
    document: "보기",
    requestDate: "2021-07-10 21:00:00",
    approvalStatus: "승인대기",
    approvalReason: "서류 확인 필요",
    approvalDate: "2026-07-15 21:00:00",
    manager: "조관리자",
    name: "준형",
  },
];
