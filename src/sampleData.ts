interface ReportDataItem {
  sNo: number;
  date: Date;
  company: string;
  type: string;
  invoice?: string;
  amount: number;
}

export const report: {
  currentMonth: { name: string; reportData: ReportDataItem[] };
  lastMonth: { name: string; reportData: ReportDataItem[] };
} = {
  currentMonth: {
    name: "July",
    reportData: [
      {
        sNo: 1,
        date: new Date("2023-07-01T08:00:00Z"),
        company: "Company 1",
        type: "Invoice",
        invoice: "INV001",
        amount: 5000,
      },
      {
        sNo: 2,
        date: new Date("2023-07-02T09:15:00Z"),
        company: "Company 2",
        type: "Payment",
        invoice: "",
        amount: 6000,
      },
      {
        sNo: 3,
        date: new Date("2023-07-03T10:30:00Z"),
        company: "Company 3",
        type: "Invoice",
        invoice: "INV002",
        amount: 7000,
      },
      {
        sNo: 4,
        date: new Date("2023-07-04T11:45:00Z"),
        company: "Company 4",
        type: "Payment",
        invoice: "",
        amount: 8000,
      },
      {
        sNo: 5,
        date: new Date("2023-07-05T13:00:00Z"),
        company: "Company 5",
        type: "Invoice",
        invoice: "INV003",
        amount: 9000,
      },
      {
        sNo: 6,
        date: new Date("2023-07-06T14:15:00Z"),
        company: "Company 6",
        type: "Payment",
        invoice: "",
        amount: 10000,
      },
      {
        sNo: 7,
        date: new Date("2023-07-07T15:30:00Z"),
        company: "Company 7",
        type: "Invoice",
        invoice: "INV004",
        amount: 11000,
      },
      {
        sNo: 8,
        date: new Date("2023-07-08T16:45:00Z"),
        company: "Company 8",
        type: "Payment",
        invoice: "",
        amount: 12000,
      },
      {
        sNo: 9,
        date: new Date("2023-07-09T18:00:00Z"),
        company: "Company 9",
        type: "Invoice",
        invoice: "INV005",
        amount: 13000,
      },
      {
        sNo: 10,
        date: new Date("2023-07-10T19:15:00Z"),
        company: "Company 10",
        type: "Payment",
        invoice: "",
        amount: 14000,
      },
      {
        sNo: 11,
        date: new Date("2023-07-11T20:30:00Z"),
        company: "Company 11",
        type: "Invoice",
        invoice: "INV006",
        amount: 15000,
      },
      {
        sNo: 12,
        date: new Date("2023-07-12T21:45:00Z"),
        company: "Company 12",
        type: "Payment",
        invoice: "",
        amount: 16000,
      },
      {
        sNo: 13,
        date: new Date("2023-07-13T22:00:00Z"),
        company: "Company 13",
        type: "Invoice",
        invoice: "INV007",
        amount: 17000,
      },
      {
        sNo: 14,
        date: new Date("2023-07-14T23:15:00Z"),
        company: "Company 14",
        type: "Payment",
        invoice: "",
        amount: 18000,
      },
      {
        sNo: 15,
        date: new Date("2023-07-15T00:30:00Z"),
        company: "Company 15",
        type: "Invoice",
        invoice: "INV008",
        amount: 19000,
      },
      {
        sNo: 16,
        date: new Date("2023-07-16T01:45:00Z"),
        company: "Company 16",
        type: "Payment",
        invoice: "",
        amount: 20000,
      },
      {
        sNo: 17,
        date: new Date("2023-07-17T03:00:00Z"),
        company: "Company 17",
        type: "Invoice",
        invoice: "INV009",
        amount: 21000,
      },
      {
        sNo: 18,
        date: new Date("2023-07-18T04:15:00Z"),
        company: "Company 18",
        type: "Payment",
        invoice: "",
        amount: 22000,
      },
      {
        sNo: 19,
        date: new Date("2023-07-19T05:30:00Z"),
        company: "Company 19",
        type: "Invoice",
        invoice: "INV010",
        amount: 23000,
      },
      {
        sNo: 20,
        date: new Date("2023-07-20T06:45:00Z"),
        company: "Company 20",
        type: "Payment",
        invoice: "",
        amount: 24000,
      },
    ],
  },
  lastMonth: {
    name: "June",
    reportData: [
      {
        sNo: 1,
        date: new Date("2023-07-01T08:00:00Z"),
        company: "Company 1",
        type: "Invoice",
        invoice: "INV001",
        amount: 5000,
      },
      {
        sNo: 2,
        date: new Date("2023-07-02T09:15:00Z"),
        company: "Company 2",
        type: "Payment",
        invoice: "",
        amount: 6000,
      },
      {
        sNo: 3,
        date: new Date("2023-07-03T10:30:00Z"),
        company: "Company 3",
        type: "Invoice",
        invoice: "INV002",
        amount: 7000,
      },
      {
        sNo: 4,
        date: new Date("2023-07-04T11:45:00Z"),
        company: "Company 4",
        type: "Payment",
        invoice: "",
        amount: 8000,
      },
      {
        sNo: 5,
        date: new Date("2023-07-05T13:00:00Z"),
        company: "Company 5",
        type: "Invoice",
        invoice: "INV003",
        amount: 9000,
      },
      {
        sNo: 6,
        date: new Date("2023-07-06T14:15:00Z"),
        company: "Company 6",
        type: "Payment",
        invoice: "",
        amount: 10000,
      },
      {
        sNo: 7,
        date: new Date("2023-07-07T15:30:00Z"),
        company: "Company 7",
        type: "Invoice",
        invoice: "INV004",
        amount: 11000,
      },
      {
        sNo: 8,
        date: new Date("2023-07-08T16:45:00Z"),
        company: "Company 8",
        type: "Payment",
        invoice: "",
        amount: 12000,
      },
      {
        sNo: 9,
        date: new Date("2023-07-09T18:00:00Z"),
        company: "Company 9",
        type: "Invoice",
        invoice: "INV005",
        amount: 13000,
      },
      {
        sNo: 10,
        date: new Date("2023-07-10T19:15:00Z"),
        company: "Company 10",
        type: "Payment",
        invoice: "",
        amount: 14000,
      },
      {
        sNo: 11,
        date: new Date("2023-07-11T20:30:00Z"),
        company: "Company 11",
        type: "Invoice",
        invoice: "INV006",
        amount: 15000,
      },
      {
        sNo: 12,
        date: new Date("2023-07-12T21:45:00Z"),
        company: "Company 12",
        type: "Payment",
        invoice: "",
        amount: 16000,
      },
      {
        sNo: 13,
        date: new Date("2023-07-13T22:00:00Z"),
        company: "Company 13",
        type: "Invoice",
        invoice: "INV007",
        amount: 17000,
      },
      {
        sNo: 14,
        date: new Date("2023-07-14T23:15:00Z"),
        company: "Company 14",
        type: "Payment",
        invoice: "",
        amount: 18000,
      },
      {
        sNo: 15,
        date: new Date("2023-07-15T00:30:00Z"),
        company: "Company 15",
        type: "Invoice",
        invoice: "INV008",
        amount: 19000,
      },
      {
        sNo: 16,
        date: new Date("2023-07-16T01:45:00Z"),
        company: "Company 16",
        type: "Payment",
        invoice: "",
        amount: 20000,
      },
      {
        sNo: 17,
        date: new Date("2023-07-17T03:00:00Z"),
        company: "Company 17",
        type: "Invoice",
        invoice: "INV009",
        amount: 21000,
      },
      {
        sNo: 18,
        date: new Date("2023-07-18T04:15:00Z"),
        company: "Company 18",
        type: "Payment",
        invoice: "",
        amount: 22000,
      },
      {
        sNo: 19,
        date: new Date("2023-07-19T05:30:00Z"),
        company: "Company 19",
        type: "Invoice",
        invoice: "INV010",
        amount: 23000,
      },
      {
        sNo: 20,
        date: new Date("2023-07-20T06:45:00Z"),
        company: "Company 20",
        type: "Payment",
        invoice: "",
        amount: 24000,
      },
    ],
  },
};

export const companies = [
  {
    Name: "Tech Solutions Ltd.",
    GSTIN: "27AAACT1234A1Z5",
    invoices: 120,
    payments: 150000,
  },
  {
    Name: "Innovative Designs Inc.",
    GSTIN: "29BBBCC2345B2Y6",
    invoices: 95,
    payments: 100000,
  },
  {
    Name: "Future Enterprises",
    GSTIN: "33CCCD1234C3Z7",
    invoices: 110,
    payments: 130000,
  },
  {
    Name: "Global Tech Hub",
    GSTIN: "22DDDE2345D4X8",
    invoices: 80,
    payments: 90000,
  },
  {
    Name: "Smart Innovations Pvt. Ltd.",
    GSTIN: "19EEEF1234E5W9",
    invoices: 105,
    payments: 120000,
  },
  {
    Name: "NextGen Solutions",
    GSTIN: "07FFFG2345F6V1",
    invoices: 115,
    payments: 140000,
  },
  {
    Name: "Creative Minds Co.",
    GSTIN: "20GGGH1234G7U2",
    invoices: 125,
    payments: 160000,
  },
  {
    Name: "Visionary Tech LLC",
    GSTIN: "32HHHI2345H8T3",
    invoices: 90,
    payments: 95000,
  },
  {
    Name: "TechnoWorks Corp.",
    GSTIN: "05IIIJ1234I9S4",
    invoices: 85,
    payments: 100000,
  },
  {
    Name: "Pioneering Solutions",
    GSTIN: "10JJJK2345J1R5",
    invoices: 100,
    payments: 110000,
  },
  {
    Name: "Digital Innovators",
    GSTIN: "09KKKL1234K2Q6",
    invoices: 115,
    payments: 125000,
  },
  {
    Name: "Alpha Tech Services",
    GSTIN: "23LLLM2345L3P7",
    invoices: 130,
    payments: 145000,
  },
  {
    Name: "Modern Solutions Ltd.",
    GSTIN: "17MMMN1234M4O8",
    invoices: 120,
    payments: 135000,
  },
  {
    Name: "Tech Pioneers Inc.",
    GSTIN: "14NNNO2345N5N9",
    invoices: 95,
    payments: 105000,
  },
  {
    Name: "Futuristic Enterprises",
    GSTIN: "28OOOP1234O6M1",
    invoices: 110,
    payments: 125000,
  },
  {
    Name: "Creative Tech Hub",
    GSTIN: "30PPPQ2345P7L2",
    invoices: 100,
    payments: 115000,
  },
  {
    Name: "Smart Enterprises Pvt. Ltd.",
    GSTIN: "24QQQR1234Q8K3",
    invoices: 135,
    payments: 155000,
  },
  {
    Name: "Innovative Solutions",
    GSTIN: "31RRRS2345R9J4",
    invoices: 85,
    payments: 90000,
  },
  {
    Name: "Visionary Minds LLC",
    GSTIN: "26SSST1234S1I5",
    invoices: 95,
    payments: 105000,
  },
  {
    Name: "Global Innovations Co.",
    GSTIN: "12TTTU2345T2H6",
    invoices: 115,
    payments: 120000,
  },
  {
    Name: "Tech Experts Ltd.",
    GSTIN: "25UUUV1234U3G7",
    invoices: 130,
    payments: 140000,
  },
  {
    Name: "NextGen Enterprises",
    GSTIN: "13VVVW2345V4F8",
    invoices: 110,
    payments: 125000,
  },
  {
    Name: "Creative Innovations Pvt. Ltd.",
    GSTIN: "18WWWX1234W5E9",
    invoices: 120,
    payments: 135000,
  },
  {
    Name: "Alpha Tech Hub",
    GSTIN: "27XXXY2345X6D1",
    invoices: 125,
    payments: 140000,
  },
  {
    Name: "Modern Solutions Inc.",
    GSTIN: "21YYYZ1234Y7C2",
    invoices: 95,
    payments: 105000,
  },
  {
    Name: "Future Tech Services",
    GSTIN: "16ZZZA2345Z8B3",
    invoices: 110,
    payments: 115000,
  },
  {
    Name: "Innovative Minds Ltd.",
    GSTIN: "11AAABB1234A9A4",
    invoices: 130,
    payments: 140000,
  },
  {
    Name: "Global Tech Solutions",
    GSTIN: "08BBBCC2345B1Z5",
    invoices: 125,
    payments: 135000,
  },
  {
    Name: "Smart Tech Enterprises",
    GSTIN: "15CCCDD1234C2Y6",
    invoices: 110,
    payments: 125000,
  },
  {
    Name: "Pioneering Tech Hub",
    GSTIN: "20DDDEE2345D3X7",
    invoices: 95,
    payments: 100000,
  },
];

export const companyReportData = [
  {
    date: new Date("2024-07-11T19:19:11.648100"),
    type: "Invoice",
    invoice: "ffme/2024-25/74",
    amount: 65.71,
    closingBalance: 65.71,
  },
  {
    date: new Date("2023-11-04T19:19:11.648168"),
    type: "Payment",
    invoice: "",
    amount: 3564.21,
    closingBalance: -3498.5,
  },
  {
    date: new Date("2024-01-13T19:19:11.648180"),
    type: "Invoice",
    invoice: "ffme/2024-25/36",
    amount: 1943.9,
    closingBalance: -1554.6,
  },
  {
    date: new Date("2024-07-01T19:19:11.648190"),
    type: "Payment",
    invoice: "",
    amount: 4026.79,
    closingBalance: -5581.39,
  },
  {
    date: new Date("2024-05-01T19:19:11.648198"),
    type: "Payment",
    invoice: "",
    amount: 1557.94,
    closingBalance: -7139.33,
  },
  {
    date: new Date("2023-08-30T19:19:11.648205"),
    type: "Invoice",
    invoice: "ffme/2024-25/75",
    amount: 786.8,
    closingBalance: -6352.53,
  },
  {
    date: new Date("2024-05-17T19:19:11.648213"),
    type: "Invoice",
    invoice: "ffme/2024-25/17",
    amount: 3012.49,
    closingBalance: -3340.04,
  },
  {
    date: new Date("2024-04-03T19:19:11.648222"),
    type: "Invoice",
    invoice: "ffme/2024-25/72",
    amount: 2962.78,
    closingBalance: -377.26,
  },
  {
    date: new Date("2023-10-23T19:19:11.648232"),
    type: "Payment",
    invoice: "",
    amount: 2749.58,
    closingBalance: -3126.84,
  },
  {
    date: new Date("2024-07-06T19:19:11.648239"),
    type: "Payment",
    invoice: "",
    amount: 3629.27,
    closingBalance: -6756.11,
  },
  {
    date: new Date("2024-02-07T19:19:11.648245"),
    type: "Payment",
    invoice: "",
    amount: 1932.0,
    closingBalance: -8688.11,
  },
  {
    date: new Date("2024-06-22T19:19:11.648252"),
    type: "Invoice",
    invoice: "ffme/2024-25/27",
    amount: 2118.37,
    closingBalance: -6569.74,
  },
  {
    date: new Date("2023-08-08T19:19:11.648279"),
    type: "Invoice",
    invoice: "ffme/2024-25/23",
    amount: 2905.73,
    closingBalance: -3663.01,
  },
  {
    date: new Date("2023-11-28T19:19:11.648291"),
    type: "Invoice",
    invoice: "ffme/2024-25/24",
    amount: 4602.32,
    closingBalance: 939.31,
  },
  {
    date: new Date("2024-05-12T19:19:11.648305"),
    type: "Invoice",
    invoice: "ffme/2024-25/14",
    amount: 960.57,
    closingBalance: 1899.88,
  },
  {
    date: new Date("2023-08-23T19:19:11.648315"),
    type: "Payment",
    invoice: "",
    amount: 2011.55,
    closingBalance: -6701.24,
  },
  {
    date: new Date("2023-11-26T19:19:11.648321"),
    type: "Invoice",
    invoice: "ffme/2024-25/06",
    amount: 847.73,
    closingBalance: -5853.51,
  },
  {
    date: new Date("2023-11-21T19:19:11.648329"),
    type: "Invoice",
    invoice: "ffme/2024-25/84",
    amount: 756.4,
    closingBalance: -5097.11,
  },
  {
    date: new Date("2024-02-18T19:19:11.648336"),
    type: "Invoice",
    invoice: "ffme/2024-25/14",
    amount: 4519.74,
    closingBalance: -577.37,
  },
  {
    date: new Date("2023-07-28T19:19:11.648343"),
    type: "Invoice",
    invoice: "ffme/2024-25/30",
    amount: 1542.63,
    closingBalance: 965.26,
  },
  {
    date: new Date("2023-12-21T19:19:11.648351"),
    type: "Payment",
    invoice: "",
    amount: 626.9,
    closingBalance: 338.36,
  },
  {
    date: new Date("2023-09-02T19:19:11.648362"),
    type: "Invoice",
    invoice: "ffme/2024-25/03",
    amount: 4364.04,
    closingBalance: 4702.4,
  },
  {
    date: new Date("2023-10-26T19:19:11.648376"),
    type: "Payment",
    invoice: "",
    amount: 104.18,
    closingBalance: 4598.22,
  },
  {
    date: new Date("2023-10-31T19:19:11.648388"),
    type: "Invoice",
    invoice: "ffme/2024-25/94",
    amount: 1448.93,
    closingBalance: 6047.15,
  },
  {
    date: new Date("2023-08-02T19:19:11.648402"),
    type: "Payment",
    invoice: "",
    amount: 3779.93,
    closingBalance: 2267.22,
  },
  {
    date: new Date("2023-10-03T19:19:11.648414"),
    type: "Invoice",
    invoice: "ffme/2024-25/20",
    amount: 1804.91,
    closingBalance: 4072.13,
  },
  {
    date: new Date("2023-12-07T19:19:11.648428"),
    type: "Invoice",
    invoice: "ffme/2024-25/89",
    amount: 3725.69,
    closingBalance: 7797.82,
  },
  {
    date: new Date("2023-09-10T19:19:11.648442"),
    type: "Invoice",
    invoice: "ffme/2024-25/58",
    amount: 1140.23,
    closingBalance: 8938.05,
  },
];

interface Item {
  id: string;
  name: string;
  title: string;
  desc1: string;
  desc2: string;
  price: number;
  unit: string;
}

export const items: Item[] = [
  {
    id: "1",
    name: "Item A",
    title: "Title A",
    desc1: "Description 1 for Item A",
    desc2: "Description 2 for Item A",
    price: 11.0,
    unit: "Nos",
  },
  {
    id: "2",
    name: "Item B",
    title: "Title B",
    desc1: "Description 1 for Item B",
    desc2: "Description 2 for Item B",
    price: 10.25,
    unit: "Kgs",
  },
  {
    id: "3",
    name: "Item C",
    title: "Title C",
    desc1: "Description 1 for Item C",
    desc2: "Description 2 for Item C",
    price: 15.75,
    unit: "Lbs",
  },
  {
    id: "4",
    name: "Item D",
    title: "Title D",
    desc1: "Description 1 for Item D",
    desc2: "Description 2 for Item D",
    price: 8.5,
    unit: "Nos",
  },
  {
    id: "5",
    name: "Item E",
    title: "Title E",
    desc1: "Description 1 for Item E",
    desc2: "Description 2 for Item E",
    price: 12.3,
    unit: "Kgs",
  },
];

export const getCompanyReport = async (page: number = 1) => {
  if (page < 1) return [];
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const pageData = companyReportData.slice((page - 1) * 20, page * 20);
  return pageData;
};

export const getInvoices = async (page: number = 1, pageSize: number = 40) => {
  if (page < 1) return [];
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const pageData = report.lastMonth.reportData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );
  return pageData;
};

export const fetchCompanyDetails = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    id: "uihf387i",
    name: "Company ABC",
    gstin: "27AAACT1234A1Z5",
    sadd1: "ijhf387ig298h09dfih",
    sadd2: "ijhf387ig298h09dfih",
    sadd3: "ijhf387ig298h09dfih",
    badd1: "ijhf387ig298h09dfih",
    badd2: "ijhf387ig298h09dfih",
    badd3: "ijhf387ig298h09dfih",
    top: "60 Days",
  };
};

export const fetchItemDetails = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return items.find((item) => item.id === id);
};
