const students =
[
  {
    "name": "Aarav Sharma",
    "class": "12A",
    "roll_number": 1,
    "email": "aarav.sharma01@example.com",
    "phone": "+91-9876543210",
    "father_name": "Rohit Sharma",
    "mother_name": "Sunita Sharma",
    "marks": {
      "mathematics": 95,
      "physics": 91,
      "biology": 87,
      "chemistry": 89,
      "computer_science": 94
    },
    "total": 456,
    "average": 91.2
  },
  {
    "name": "Priya Patel",
    "class": "12B",
    "roll_number": 2,
    "email": "priya.patel02@example.com",
    "phone": "+91-8877665544",
    "father_name": "Rajesh Patel",
    "mother_name": "Meena Patel",
    "marks": {
      "mathematics": 88,
      "physics": 84,
      "biology": 92,
      "chemistry": 90,
      "computer_science": 86
    },
    "total": 440,
    "average": 88.0
  },
  {
    "name": "Vikram Singh",
    "class": "12A",
    "roll_number": 3,
    "email": "vikram.singh03@example.com",
    "phone": "+91-7766554433",
    "father_name": "Amit Singh",
    "mother_name": "Pooja Singh",
    "marks": {
      "mathematics": 92,
      "physics": 89,
      "biology": 85,
      "chemistry": 87,
      "computer_science": 91
    },
    "total": 444,
    "average": 88.8
  },
  {
    "name": "Ananya Reddy",
    "class": "12B",
    "roll_number": 4,
    "email": "ananya.reddy04@example.com",
    "phone": "+91-9988776655",
    "father_name": "Krishna Reddy",
    "mother_name": "Lakshmi Reddy",
    "marks": {
      "mathematics": 85,
      "physics": 82,
      "biology": 90,
      "chemistry": 88,
      "computer_science": 84
    },
    "total": 429,
    "average": 85.8
  },
  {
    "name": "Rohan Kumar",
    "class": "12A",
    "roll_number": 5,
    "email": "rohan.kumar05@example.com",
    "phone": "+91-8899001122",
    "father_name": "Sanjay Kumar",
    "mother_name": "Sneha Kumar",
    "marks": {
      "mathematics": 90,
      "physics": 87,
      "biology": 83,
      "chemistry": 85,
      "computer_science": 89
    },
    "total": 434,
    "average": 86.8
  },
  {
    "name": "Neha Verma",
    "class": "12B",
    "roll_number": 6,
    "email": "neha.verma06@example.com",
    "phone": "+91-7788990011",
    "father_name": "Vivek Verma",
    "mother_name": "Anita Verma",
    "marks": {
      "mathematics": 87,
      "physics": 85,
      "biology": 89,
      "chemistry": 91,
      "computer_science": 82
    },
    "total": 434,
    "average": 86.8
  },
  {
    "name": "Arjun Joshi",
    "class": "12A",
    "roll_number": 7,
    "email": "arjun.joshi07@example.com",
    "phone": "+91-9922113344",
    "father_name": "Nitin Joshi",
    "mother_name": "Ritu Joshi",
    "marks": {
      "mathematics": 94,
      "physics": 90,
      "biology": 86,
      "chemistry": 88,
      "computer_science": 92
    },
    "total": 450,
    "average": 90.0
  },
  {
    "name": "Shreya Gupta",
    "class": "12B",
    "roll_number": 8,
    "email": "shreya.gupta08@example.com",
    "phone": "+91-8811223344",
    "father_name": "Alok Gupta",
    "mother_name": "Priti Gupta",
    "marks": {
      "mathematics": 83,
      "physics": 79,
      "biology": 88,
      "chemistry": 84,
      "computer_science": 81
    },
    "total": 415,
    "average": 83.0
  },
  {
    "name": "Karan Malhotra",
    "class": "12A",
    "roll_number": 9,
    "email": "karan.malhotra09@example.com",
    "phone": "+91-7700112233",
    "father_name": "Rajiv Malhotra",
    "mother_name": "Sunaina Malhotra",
    "marks": {
      "mathematics": 89,
      "physics": 86,
      "biology": 84,
      "chemistry": 82,
      "computer_science": 90
    },
    "total": 431,
    "average": 86.2
  },
  {
    "name": "Divya Choudhury",
    "class": "12B",
    "roll_number": 10,
    "email": "divya.choudhury10@example.com",
    "phone": "+91-8990011223",
    "father_name": "Sanjay Choudhury",
    "mother_name": "Madhu Choudhury",
    "marks": {
      "mathematics": 91,
      "physics": 88,
      "biology": 85,
      "chemistry": 87,
      "computer_science": 93
    },
    "total": 444,
    "average": 88.8
  },
  {
    "name": "Rahul Mehta",
    "class": "12A",
    "roll_number": 11,
    "email": "rahul.mehta11@example.com",
    "phone": "+91-9871122334",
    "father_name": "Anil Mehta",
    "mother_name": "Kavita Mehta",
    "marks": {
      "mathematics": 84,
      "physics": 81,
      "biology": 90,
      "chemistry": 86,
      "computer_science": 83
    },
    "total": 424,
    "average": 84.8
  },
  {
    "name": "Pooja Iyer",
    "class": "12B",
    "roll_number": 12,
    "email": "pooja.iyer12@example.com",
    "phone": "+91-8765432190",
    "father_name": "Sriram Iyer",
    "mother_name": "Latha Iyer",
    "marks": {
      "mathematics": 90,
      "physics": 87,
      "biology": 83,
      "chemistry": 89,
      "computer_science": 85
    },
    "total": 434,
    "average": 86.8
  },
  {
    "name": "Siddharth Rao",
    "class": "12A",
    "roll_number": 13,
    "email": "siddharth.rao13@example.com",
    "phone": "+91-7654321987",
    "father_name": "Vijay Rao",
    "mother_name": "Geeta Rao",
    "marks": {
      "mathematics": 93,
      "physics": 90,
      "biology": 88,
      "chemistry": 91,
      "computer_science": 89
    },
    "total": 451,
    "average": 90.2
  },
  {
    "name": "Anjali Nair",
    "class": "12B",
    "roll_number": 14,
    "email": "anjali.nair14@example.com",
    "phone": "+91-6543219876",
    "father_name": "Mohan Nair",
    "mother_name": "Leela Nair",
    "marks": {
      "mathematics": 86,
      "physics": 83,
      "biology": 91,
      "chemistry": 85,
      "computer_science": 88
    },
    "total": 433,
    "average": 86.6
  },
  {
    "name": "Vishal Desai",
    "class": "12A",
    "roll_number": 15,
    "email": "vishal.desai15@example.com",
    "phone": "+91-9432108765",
    "father_name": "Prakash Desai",
    "mother_name": "Suman Desai",
    "marks": {
      "mathematics": 88,
      "physics": 85,
      "biology": 87,
      "chemistry": 84,
      "computer_science": 90
    },
    "total": 434,
    "average": 86.8
  },
  {
    "name": "Swati Mishra",
    "class": "12B",
    "roll_number": 16,
    "email": "swati.mishra16@example.com",
    "phone": "+91-8321456790",
    "father_name": "Vinod Mishra",
    "mother_name": "Anjali Mishra",
    "marks": {
      "mathematics": 92,
      "physics": 88,
      "biology": 84,
      "chemistry": 90,
      "computer_science": 87
    },
    "total": 441,
    "average": 88.2
  },
  {
    "name": "Rajiv Khanna",
    "class": "12A",
    "roll_number": 17,
    "email": "rajiv.khanna17@example.com",
    "phone": "+91-7210345689",
    "father_name": "Sunil Khanna",
    "mother_name": "Rekha Khanna",
    "marks": {
      "mathematics": 85,
      "physics": 82,
      "biology": 89,
      "chemistry": 83,
      "computer_science": 86
    },
    "total": 425,
    "average": 85.0
  },
  {
    "name": "Meera Srinivasan",
    "class": "12B",
    "roll_number": 18,
    "email": "meera.srinivasan18@example.com",
    "phone": "+91-6109234578",
    "father_name": "Karthik Srinivasan",
    "mother_name": "Deepa Srinivasan",
    "marks": {
      "mathematics": 89,
      "physics": 86,
      "biology": 92,
      "chemistry": 88,
      "computer_science": 84
    },
    "total": 439,
    "average": 87.8
  },
  {
    "name": "Akash Bhatia",
    "class": "12A",
    "roll_number": 19,
    "email": "akash.bhatia19@example.com",
    "phone": "+91-5098123467",
    "father_name": "Rahul Bhatia",
    "mother_name": "Shilpa Bhatia",
    "marks": {
      "mathematics": 91,
      "physics": 89,
      "biology": 85,
      "chemistry": 87,
      "computer_science": 92
    },
    "total": 444,
    "average": 88.8
  },
  {
    "name": "Nandini Kapoor",
    "class": "12B",
    "roll_number": 20,
    "email": "nandini.kapoor20@example.com",
    "phone": "+91-4987012356",
    "father_name": "Vikram Kapoor",
    "mother_name": "Priya Kapoor",
    "marks": {
      "mathematics": 87,
      "physics": 84,
      "biology": 88,
      "chemistry": 86,
      "computer_science": 89
    },
    "total": 434,
    "average": 86.8
  },
  {
    "name": "Harsh Tripathi",
    "class": "12A",
    "roll_number": 21,
    "email": "harsh.tripathi21@example.com",
    "phone": "+91-9876543201",
    "father_name": "Anand Tripathi",
    "mother_name": "Poonam Tripathi",
    "marks": {
      "mathematics": 94,
      "physics": 90,
      "biology": 87,
      "chemistry": 91,
      "computer_science": 93
    },
    "total": 455,
    "average": 91.0
  },
  {
    "name": "Ishita Reddy",
    "class": "12B",
    "roll_number": 22,
    "email": "ishita.reddy22@example.com",
    "phone": "+91-8765432109",
    "father_name": "Arvind Reddy",
    "mother_name": "Sunitha Reddy",
    "marks": {
      "mathematics": 83,
      "physics": 80,
      "biology": 86,
      "chemistry": 84,
      "computer_science": 82
    },
    "total": 415,
    "average": 83.0
  },
  {
    "name": "Manish Agarwal",
    "class": "12A",
    "roll_number": 23,
    "email": "manish.agarwal23@example.com",
    "phone": "+91-7654321098",
    "father_name": "Sanjay Agarwal",
    "mother_name": "Ritu Agarwal",
    "marks": {
      "mathematics": 90,
      "physics": 87,
      "biology": 89,
      "chemistry": 85,
      "computer_science": 88
    },
    "total": 439,
    "average": 87.8
  },
  {
    "name": "Tanvi Shah",
    "class": "12B",
    "roll_number": 24,
    "email": "tanvi.shah24@example.com",
    "phone": "+91-6543210987",
    "father_name": "Nilesh Shah",
    "mother_name": "Mona Shah",
    "marks": {
      "mathematics": 88,
      "physics": 85,
      "biology": 90,
      "chemistry": 87,
      "computer_science": 84
    },
    "total": 434,
    "average": 86.8
  },
  {
    "name": "Abhishek Dubey",
    "class": "12A",
    "roll_number": 25,
    "email": "abhishek.dubey25@example.com",
    "phone": "+91-5432109876",
    "father_name": "Alok Dubey",
    "mother_name": "Anita Dubey",
    "marks": {
      "mathematics": 92,
      "physics": 89,
      "biology": 85,
      "chemistry": 90,
      "computer_science": 91
    },
    "total": 447,
    "average": 89.4
  },
  {
    "name": "Sneha Menon",
    "class": "12B",
    "roll_number": 26,
    "email": "sneha.menon26@example.com",
    "phone": "+91-4321098765",
    "father_name": "Rahul Menon",
    "mother_name": "Lakshmi Menon",
    "marks": {
      "mathematics": 85,
      "physics": 82,
      "biology": 88,
      "chemistry": 83,
      "computer_science": 87
    },
    "total": 425,
    "average": 85.0
  },
  {
    "name": "Varun Saxena",
    "class": "12A",
    "roll_number": 27,
    "email": "varun.saxena27@example.com",
    "phone": "+91-3210987654",
    "father_name": "Vijay Saxena",
    "mother_name": "Sunita Saxena",
    "marks": {
      "mathematics": 89,
      "physics": 86,
      "biology": 84,
      "chemistry": 88,
      "computer_science": 90
    },
    "total": 437,
    "average": 87.4
  },
  {
    "name": "Kriti Malhotra",
    "class": "12B",
    "roll_number": 28,
    "email": "kriti.malhotra28@example.com",
    "phone": "+91-2109876543",
    "father_name": "Raj Malhotra",
    "mother_name": "Neetu Malhotra",
    "marks": {
      "mathematics": 91,
      "physics": 88,
      "biology": 86,
      "chemistry": 89,
      "computer_science": 92
    },
    "total": 446,
    "average": 89.2
  },
  {
    "name": "Rishabh Jain",
    "class": "12A",
    "roll_number": 29,
    "email": "rishabh.jain29@example.com",
    "phone": "+91-1098765432",
    "father_name": "Amit Jain",
    "mother_name": "Pooja Jain",
    "marks": {
      "mathematics": 86,
      "physics": 83,
      "biology": 90,
      "chemistry": 85,
      "computer_science": 88
    },
    "total": 432,
    "average": 86.4
  },
  {
    "name": "Shivani Iyer",
    "class": "12B",
    "roll_number": 30,
    "email": "shivani.iyer30@example.com",
    "phone": "+91-9988776655",
    "father_name": "Suresh Iyer",
    "mother_name": "Anu Iyer",
    "marks": {
      "mathematics": 93,
      "physics": 90,
      "biology": 87,
      "chemistry": 91,
      "computer_science": 94
    },
    "total": 455,
    "average": 91.0
  },
  {
    "name": "Aditya Rao",
    "class": "12A",
    "roll_number": 31,
    "email": "aditya.rao31@example.com",
    "phone": "+91-8877665544",
    "father_name": "Kiran Rao",
    "mother_name": "Meera Rao",
    "marks": {
      "mathematics": 84,
      "physics": 81,
      "biology": 89,
      "chemistry": 83,
      "computer_science": 86
    },
    "total": 423,
    "average": 84.6
  },
  {
    "name": "Pooja Nair",
    "class": "12B",
    "roll_number": 32,
    "email": "pooja.nair32@example.com",
    "phone": "+91-7766554433",
    "father_name": "Manoj Nair",
    "mother_name": "Latha Nair",
    "marks": {
      "mathematics": 90,
      "physics": 87,
      "biology": 85,
      "chemistry": 88,
      "computer_science": 91
    },
    "total": 441,
    "average": 88.2
  },
  {
    "name": "Vivek Deshpande",
    "class": "12A",
    "roll_number": 33,
    "email": "vivek.deshpande33@example.com",
    "phone": "+91-6655443322",
    "father_name": "Rajesh Deshpande",
    "mother_name": "Sunita Deshpande",
    "marks": {
      "mathematics": 88,
      "physics": 85,
      "biology": 91,
      "chemistry": 86,
      "computer_science": 89
    },
    "total": 439,
    "average": 87.8
  },
  {
    "name": "Anita Sharma",
    "class": "12B",
    "roll_number": 34,
    "email": "anita.sharma34@example.com",
    "phone": "+91-5544332211",
    "father_name": "Rakesh Sharma",
    "mother_name": "Sarika Sharma",
    "marks": {
      "mathematics": 92,
      "physics": 89,
      "biology": 87,
      "chemistry": 90,
      "computer_science": 93
    },
    "total": 451,
    "average": 90.2
  },
  {
    "name": "Rajat Patel",
    "class": "12A",
    "roll_number": 35,
    "email": "rajat.patel35@example.com",
    "phone": "+91-4433221100",
    "father_name": "Dinesh Patel",
    "mother_name": "Reena Patel",
    "marks": {
      "mathematics": 85,
      "physics": 82,
      "biology": 88,
      "chemistry": 84,
      "computer_science": 87
    },
    "total": 426,
    "average": 85.2
  },
  {
    "name": "Deepika Singh",
    "class": "12B",
    "roll_number": 36,
    "email": "deepika.singh36@example.com",
    "phone": "+91-3322110099",
    "father_name": "Vikram Singh",
    "mother_name": "Neha Singh",
    "marks": {
      "mathematics": 89,
      "physics": 86,
      "biology": 84,
      "chemistry": 87,
      "computer_science": 90
    },
    "total": 436,
    "average": 87.2
  },
  {
    "name": "Kunal Verma",
    "class": "12A",
    "roll_number": 37,
    "email": "kunal.verma37@example.com",
    "phone": "+91-2211009988",
    "father_name": "Anil Verma",
    "mother_name": "Ritu Verma",
    "marks": {
      "mathematics": 91,
      "physics": 88,
      "biology": 86,
      "chemistry": 89,
      "computer_science": 92
    },
    "total": 446,
    "average": 89.2
  },
  {
    "name": "Neha Reddy",
    "class": "12B",
    "roll_number": 38,
    "email": "neha.reddy38@example.com",
    "phone": "+91-1100998877",
    "father_name": "Raj Reddy",
    "mother_name": "Sunita Reddy",
    "marks": {
      "mathematics": 87,
      "physics": 84,
      "biology": 90,
      "chemistry": 86,
      "computer_science": 89
    },
    "total": 436,
    "average": 87.2
  },
  {
    "name": "Arnav Kumar",
    "class": "12A",
    "roll_number": 39,
    "email": "arnav.kumar39@example.com",
    "phone": "+91-9900887766",
    "father_name": "Sanjay Kumar",
    "mother_name": "Pooja Kumar",
    "marks": {
      "mathematics": 94,
      "physics": 91,
      "biology": 88,
      "chemistry": 92,
      "computer_science": 95
    },
    "total": 460,
    "average": 92.0
  },
  {
    "name": "Shruti Joshi",
    "class": "12B",
    "roll_number": 40,
    "email": "shruti.joshi40@example.com",
    "phone": "+91-8899776655",
    "father_name": "Nitin Joshi",
    "mother_name": "Ritu Joshi",
    "marks": {
      "mathematics": 83,
      "physics": 80,
      "biology": 87,
      "chemistry": 82,
      "computer_science": 85
    },
    "total": 417,
    "average": 83.4
  },
  {
    "name": "Rohit Gupta",
    "class": "12A",
    "roll_number": 41,
    "email": "rohit.gupta41@example.com",
    "phone": "+91-7788665544",
    "father_name": "Alok Gupta",
    "mother_name": "Anita Gupta",
    "marks": {
      "mathematics": 90,
      "physics": 87,
      "biology": 85,
      "chemistry": 88,
      "computer_science": 91
    },
    "total": 441,
    "average": 88.2
  },
  {
    "name": "Ananya Choudhury",
    "class": "12B",
    "roll_number": 42,
    "email": "ananya.choudhury42@example.com",
    "phone": "+91-6677554433",
    "father_name": "Sanjay Choudhury",
    "mother_name": "Madhu Choudhury",
    "marks": {
      "mathematics": 88,
      "physics": 85,
      "biology": 91,
      "chemistry": 86,
      "computer_science": 89
    },
    "total": 439,
    "average": 87.8
  },
  {
    "name": "Vikram Mehta",
    "class": "12A",
    "roll_number": 43,
    "email": "vikram.mehta43@example.com",
    "phone": "+91-5566443322",
    "father_name": "Anil Mehta",
    "mother_name": "Kavita Mehta",
    "marks": {
      "mathematics": 93,
      "physics": 90,
      "biology": 87,
      "chemistry": 91,
      "computer_science": 94
    },
    "total": 455,
    "average": 91.0
  },
  {
    "name": "Sonia Iyer",
    "class": "12B",
    "roll_number": 44,
    "email": "sonia.iyer44@example.com",
    "phone": "+91-4455332211",
    "father_name": "Sriram Iyer",
    "mother_name": "Latha Iyer",
    "marks": {
      "mathematics": 86,
      "physics": 83,
      "biology": 89,
      "chemistry": 84,
      "computer_science": 88
    },
    "total": 430,
    "average": 86.0
  },
  {
    "name": "Rahul Rao",
    "class": "12A",
    "roll_number": 45,
    "email": "rahul.rao45@example.com",
    "phone": "+91-3344221100",
    "father_name": "Vijay Rao",
    "mother_name": "Geeta Rao",
    "marks": {
      "mathematics": 89,
      "physics": 86,
      "biology": 84,
      "chemistry": 87,
      "computer_science": 90
    },
    "total": 436,
    "average": 87.2
  },
  {
    "name": "Priyanka Nair",
    "class": "12B",
    "roll_number": 46,
    "email": "priyanka.nair46@example.com",
    "phone": "+91-2233110099",
    "father_name": "Mohan Nair",
    "mother_name": "Leela Nair",
    "marks": {
      "mathematics": 92,
      "physics": 89,
      "biology": 85,
      "chemistry": 88,
      "computer_science": 93
    },
    "total": 447,
    "average": 89.4
  },
  {
    "name": "Amit Desai",
    "class": "12A",
    "roll_number": 47,
    "email": "amit.desai47@example.com",
    "phone": "+91-1122009988",
    "father_name": "Prakash Desai",
    "mother_name": "Suman Desai",
    "marks": {
      "mathematics": 87,
      "physics": 84,
      "biology": 90,
      "chemistry": 85,
      "computer_science": 88
    },
    "total": 434,
    "average": 86.8
  },
  {
    "name": "Kavita Mishra",
    "class": "12B",
    "roll_number": 48,
    "email": "kavita.mishra48@example.com",
    "phone": "+91-9900112233",
    "father_name": "Vinod Mishra",
    "mother_name": "Anjali Mishra",
    "marks": {
      "mathematics": 91,
      "physics": 88,
      "biology": 86,
      "chemistry": 89,
      "computer_science": 92
    },
    "total": 446,
    "average": 89.2
  },
  {
    "name": "Rajesh Khanna",
    "class": "12A",
    "roll_number": 49,
    "email": "rajesh.khanna49@example.com",
    "phone": "+91-8811223344",
    "father_name": "Sunil Khanna",
    "mother_name": "Rekha Khanna",
    "marks": {
      "mathematics": 85,
      "physics": 82,
      "biology": 88,
      "chemistry": 83,
      "computer_science": 87
    },
    "total": 425,
    "average": 85.0
  },
  {
    "name": "Deepak Srinivasan",
    "class": "12B",
    "roll_number": 50,
    "email": "deepak.srinivasan50@example.com",
    "phone": "+91-7722334455",
    "father_name": "Karthik Srinivasan",
    "mother_name": "Deepa Srinivasan",
    "marks": {
      "mathematics": 90,
      "physics": 87,
      "biology": 93,
      "chemistry": 89,
      "computer_science": 85
    },
    "total": 444,
    "average": 88.8
  },
  {
    "name": "Sunita Bhatia",
    "class": "12A",
    "roll_number": 51,
    "email": "sunita.bhatia51@example.com",
    "phone": "+91-6633445566",
    "father_name": "Rahul Bhatia",
    "mother_name": "Shilpa Bhatia",
    "marks": {
      "mathematics": 88,
      "physics": 85,
      "biology": 91,
      "chemistry": 86,
      "computer_science": 89
    },
    "total": 439,
    "average": 87.8
  },
  {
    "name": "Vijay Kapoor",
    "class": "12B",
    "roll_number": 52,
    "email": "vijay.kapoor52@example.com",
    "phone": "+91-5544556677",
    "father_name": "Vikram Kapoor",
    "mother_name": "Priya Kapoor",
    "marks": {
      "mathematics": 93,
      "physics": 90,
      "biology": 87,
      "chemistry": 91,
      "computer_science": 94
    },
    "total": 455,
    "average": 91.0
  },
  {
    "name": "Pooja Tripathi",
    "class": "12A",
    "roll_number": 53,
    "email": "pooja.tripathi53@example.com",
    "phone": "+91-4455667788",
    "father_name": "Anand Tripathi",
    "mother_name": "Poonam Tripathi",
    "marks": {
      "mathematics": 84,
      "physics": 81,
      "biology": 89,
      "chemistry": 83,
      "computer_science": 86
    },
    "total": 423,
    "average": 84.6
  },
  {
    "name": "Raj Reddy",
    "class": "12B",
    "roll_number": 54,
    "email": "raj.reddy54@example.com",
    "phone": "+91-3366778899",
    "father_name": "Arvind Reddy",
    "mother_name": "Sunitha Reddy",
    "marks": {
      "mathematics": 91,
      "physics": 88,
      "biology": 85,
      "chemistry": 87,
      "computer_science": 92
    },
    "total": 443,
    "average": 88.6
  },
  {
    "name": "Anjali Agarwal",
    "class": "12A",
    "roll_number": 55,
    "email": "anjali.agarwal55@example.com",
    "phone": "+91-2277889900",
    "father_name": "Sanjay Agarwal",
    "mother_name": "Ritu Agarwal",
    "marks": {
      "mathematics": 89,
      "physics": 86,
      "biology": 84,
      "chemistry": 88,
      "computer_science": 91
    },
    "total": 438,
    "average": 87.6
  },
  {
    "name": "Ravi Shah",
    "class": "12B",
    "roll_number": 56,
    "email": "ravi.shah56@example.com",
    "phone": "+91-1188990011",
    "father_name": "Nilesh Shah",
    "mother_name": "Mona Shah",
    "marks": {
      "mathematics": 87,
      "physics": 84,
      "biology": 90,
      "chemistry": 86,
      "computer_science": 89
    },
    "total": 436,
    "average": 87.2
  },
  {
    "name": "Smita Dubey",
    "class": "12A",
    "roll_number": 57,
    "email": "smita.dubey57@example.com",
    "phone": "+91-9900112233",
    "father_name": "Alok Dubey",
    "mother_name": "Anita Dubey",
    "marks": {
      "mathematics": 92,
      "physics": 89,
      "biology": 86,
      "chemistry": 90,
      "computer_science": 93
    },
    "total": 450,
    "average": 90.0
  },
  {
    "name": "Nitin Menon",
    "class": "12B",
    "roll_number": 58,
    "email": "nitin.menon58@example.com",
    "phone": "+91-8811223344",
    "father_name": "Rahul Menon",
    "mother_name": "Lakshmi Menon",
    "marks": {
      "mathematics": 85,
      "physics": 82,
      "biology": 88,
      "chemistry": 83,
      "computer_science": 87
    },
    "total": 425,
    "average": 85.0
  },
  {
    "name": "Divya Saxena",
    "class": "12A",
    "roll_number": 59,
    "email": "divya.saxena59@example.com",
    "phone": "+91-7722334455",
    "father_name": "Vijay Saxena",
    "mother_name": "Sunita Saxena",
    "marks": {
      "mathematics": 90,
      "physics": 87,
      "biology": 85,
      "chemistry": 89,
      "computer_science": 92
    },
    "total": 443,
    "average": 88.6
  },
  {
    "name": "Karan Malhotra",
    "class": "12B",
    "roll_number": 60,
    "email": "karan.malhotra60@example.com",
    "phone": "+91-6633445566",
    "father_name": "Raj Malhotra",
    "mother_name": "Neetu Malhotra",
    "marks": {
      "mathematics": 88,
      "physics": 85,
      "biology": 91,
      "chemistry": 86,
      "computer_science": 89
    },
    "total": 439,
    "average": 87.8
  },
  {
    "name": "Priya Jain",
    "class": "12A",
    "roll_number": 61,
    "email": "priya.jain61@example.com",
    "phone": "+91-5544556677",
    "father_name": "Amit Jain",
    "mother_name": "Pooja Jain",
    "marks": {
      "mathematics": 93,
      "physics": 90,
      "biology": 87,
      "chemistry": 91,
      "computer_science": 94
    },
    "total": 455,
    "average": 91.0
  },
  {
    "name": "Vishal Iyer",
    "class": "12B",
    "roll_number": 62,
    "email": "vishal.iyer62@example.com",
    "phone": "+91-4455667788",
    "father_name": "Suresh Iyer",
    "mother_name": "Anu Iyer",
    "marks": {
      "mathematics": 86,
      "physics": 83,
      "biology": 89,
      "chemistry": 84,
      "computer_science": 88
    },
    "total": 430,
    "average": 86.0
  },
  {
    "name": "Anita Rao",
    "class": "12A",
    "roll_number": 63,
    "email": "anita.rao63@example.com",
    "phone": "+91-3366778899",
    "father_name": "Kiran Rao",
    "mother_name": "Meera Rao",
    "marks": {
      "mathematics": 89,
      "physics": 86,
      "biology": 84,
      "chemistry": 87,
      "computer_science": 90
    },
    "total": 436,
    "average": 87.2
  },
  {
    "name": "Rohit Nair",
    "class": "12B",
    "roll_number": 64,
    "email": "rohit.nair64@example.com",
    "phone": "+91-2277889900",
    "father_name": "Manoj Nair",
    "mother_name": "Latha Nair",
    "marks": {
      "mathematics": 92,
      "physics": 89,
      "biology": 85,
      "chemistry": 88,
      "computer_science": 93
    },
    "total": 447,
    "average": 89.4
  },
  {
    "name": "Shweta Deshpande",
    "class": "12A",
    "roll_number": 65,
    "email": "shweta.deshpande65@example.com",
    "phone": "+91-1188990011",
    "father_name": "Rajesh Deshpande",
    "mother_name": "Sunita Deshpande",
    "marks": {
      "mathematics": 87,
      "physics": 84,
      "biology": 90,
      "chemistry": 85,
      "computer_science": 88
    },
    "total": 434,
    "average": 86.8
  },
  {
    "name": "Aryan Sharma",
    "class": "12B",
    "roll_number": 66,
    "email": "aryan.sharma66@example.com",
    "phone": "+91-9900112233",
    "father_name": "Rakesh Sharma",
    "mother_name": "Sarika Sharma",
    "marks": {
      "mathematics": 91,
      "physics": 88,
      "biology": 86,
      "chemistry": 89,
      "computer_science": 92
    },
    "total": 446,
    "average": 89.2
  },
  {
    "name": "Neha Patel",
    "class": "12A",
    "roll_number": 67,
    "email": "neha.patel67@example.com",
    "phone": "+91-8811223344",
    "father_name": "Dinesh Patel",
    "mother_name": "Reena Patel",
    "marks": {
      "mathematics": 85,
      "physics": 82,
      "biology": 88,
      "chemistry": 83,
      "computer_science": 87
    },
    "total": 425,
    "average": 85.0
  },
  {
    "name": "Arjun Singh",
    "class": "12B",
    "roll_number": 68,
    "email": "arjun.singh68@example.com",
    "phone": "+91-7722334455",
    "father_name": "Vikram Singh",
    "mother_name": "Neha Singh",
    "marks": {
      "mathematics": 90,
      "physics": 87,
      "biology": 85,
      "chemistry": 88,
      "computer_science": 91
    },
    "total": 441,
    "average": 88.2
  },
  {
    "name": "Kavya Verma",
    "class": "12A",
    "roll_number": 69,
    "email": "kavya.verma69@example.com",
    "phone": "+91-6633445566",
    "father_name": "Anil Verma",
    "mother_name": "Ritu Verma",
    "marks": {
      "mathematics": 88,
      "physics": 85,
      "biology": 91,
      "chemistry": 86,
      "computer_science": 89
    },
    "total": 439,
    "average": 87.8
  },
  {
    "name": "Rajat Reddy",
    "class": "12B",
    "roll_number": 70,
    "email": "rajat.reddy70@example.com",
    "phone": "+91-5544556677",
    "father_name": "Raj Reddy",
    "mother_name": "Sunita Reddy",
    "marks": {
      "mathematics": 93,
      "physics": 90,
      "biology": 87,
      "chemistry": 91,
      "computer_science": 94
    },
    "total": 455,
    "average": 91.0
  },
  {
    "name": "Sonia Kumar",
    "class": "12A",
    "roll_number": 71,
    "email": "sonia.kumar71@example.com",
    "phone": "+91-4455667788",
    "father_name": "Sanjay Kumar",
    "mother_name": "Pooja Kumar",
    "marks": {
      "mathematics": 84,
      "physics": 81,
      "biology": 89,
      "chemistry": 83,
      "computer_science": 86
    },
    "total": 423,
    "average": 84.6
  },
  {
    "name": "Vivek Joshi",
    "class": "12B",
    "roll_number": 72,
    "email": "vivek.joshi72@example.com",
    "phone": "+91-3366778899",
    "father_name": "Nitin Joshi",
    "mother_name": "Ritu Joshi",
    "marks": {
      "mathematics": 91,
      "physics": 88,
      "biology": 85,
      "chemistry": 87,
      "computer_science": 92
    },
    "total": 443,
    "average": 88.6
  },
  {
    "name": "Anjali Gupta",
    "class": "12A",
    "roll_number": 73,
    "email": "anjali.gupta73@example.com",
    "phone": "+91-2277889900",
    "father_name": "Alok Gupta",
    "mother_name": "Anita Gupta",
    "marks": {
      "mathematics": 89,
      "physics": 86,
      "biology": 84,
      "chemistry": 88,
      "computer_science": 91
    },
    "total": 438,
    "average": 87.6
  },
  {
    "name": "Rishi Choudhury",
    "class": "12B",
    "roll_number": 74,
    "email": "rishi.choudhury74@example.com",
    "phone": "+91-1188990011",
    "father_name": "Sanjay Choudhury",
    "mother_name": "Madhu Choudhury",
    "marks": {
      "mathematics": 87,
      "physics": 84,
      "biology": 90,
      "chemistry": 86,
      "computer_science": 89
    },
    "total": 436,
    "average": 87.2
  },
  {
    "name": "Pooja Mehta",
    "class": "12A",
    "roll_number": 75,
    "email": "pooja.mehta75@example.com",
    "phone": "+91-9900112233",
    "father_name": "Anil Mehta",
    "mother_name": "Kavita Mehta",
    "marks": {
      "mathematics": 92,
      "physics": 89,
      "biology": 86,
      "chemistry": 90,
      "computer_science": 93
    },
    "total": 450,
    "average": 90.0
  },
  {
    "name": "Amit Iyer",
    "class": "12B",
    "roll_number": 76,
    "email": "amit.iyer76@example.com",
    "phone": "+91-8811223344",
    "father_name": "Sriram Iyer",
    "mother_name": "Latha Iyer",
    "marks": {
      "mathematics": 85,
      "physics": 82,
      "biology": 88,
      "chemistry": 83,
      "computer_science": 87
    },
    "total": 425,
    "average": 85.0
  },
  {
    "name": "Kriti Rao",
    "class": "12A",
    "roll_number": 77,
    "email": "kriti.rao77@example.com",
    "phone": "+91-7722334455",
    "father_name": "Vijay Rao",
    "mother_name": "Geeta Rao",
    "marks": {
      "mathematics": 90,
      "physics": 87,
      "biology": 85,
      "chemistry": 89,
      "computer_science": 92
    },
    "total": 443,
    "average": 88.6
  },
  {
    "name": "Rahul Nair",
    "class": "12B",
    "roll_number": 78,
    "email": "rahul.nair78@example.com",
    "phone": "+91-6633445566",
    "father_name": "Mohan Nair",
    "mother_name": "Leela Nair",
    "marks": {
      "mathematics": 88,
      "physics": 85,
      "biology": 91,
      "chemistry": 86,
      "computer_science": 89
    },
    "total": 439,
    "average": 87.8
  },
  {
    "name": "Shilpa Desai",
    "class": "12A",
    "roll_number": 79,
    "email": "shilpa.desai79@example.com",
    "phone": "+91-5544556677",
    "father_name": "Prakash Desai",
    "mother_name": "Suman Desai",
    "marks": {
      "mathematics": 93,
      "physics": 90,
      "biology": 87,
      "chemistry": 91,
      "computer_science": 94
    },
    "total": 455,
    "average": 91.0
  },
  {
    "name": "Vinod Mishra",
    "class": "12B",
    "roll_number": 80,
    "email": "vinod.mishra80@example.com",
    "phone": "+91-4455667788",
    "father_name": "Vinod Mishra",
    "mother_name": "Anjali Mishra",
    "marks": {
      "mathematics": 86,
      "physics": 83,
      "biology": 89,
      "chemistry": 84,
      "computer_science": 88
    },
    "total": 430,
    "average": 86.0
  },
  {
    "name": "Anu Khanna",
    "class": "12A",
    "roll_number": 81,
    "email": "anu.khanna81@example.com",
    "phone": "+91-3366778899",
    "father_name": "Sunil Khanna",
    "mother_name": "Rekha Khanna",
    "marks": {
      "mathematics": 89,
      "physics": 86,
      "biology": 84,
      "chemistry": 87,
      "computer_science": 90
    },
    "total": 436,
    "average": 87.2
  },
  {
    "name": "Raj Srinivasan",
    "class": "12B",
    "roll_number": 82,
    "email": "raj.srinivasan82@example.com",
    "phone": "+91-2277889900",
    "father_name": "Karthik Srinivasan",
    "mother_name": "Deepa Srinivasan",
    "marks": {
      "mathematics": 92,
      "physics": 89,
      "biology": 85,
      "chemistry": 88,
      "computer_science": 93
    },
    "total": 447,
    "average": 89.4
  },
  {
    "name": "Divya Bhatia",
    "class": "12A",
    "roll_number": 83,
    "email": "divya.bhatia83@example.com",
    "phone": "+91-1188990011",
    "father_name": "Rahul Bhatia",
    "mother_name": "Shilpa Bhatia",
    "marks": {
      "mathematics": 87,
      "physics": 84,
      "biology": 90,
      "chemistry": 85,
      "computer_science": 88
    },
    "total": 434,
    "average": 86.8
  },
  {
    "name": "Karan Kapoor",
    "class": "12B",
    "roll_number": 84,
    "email": "karan.kapoor84@example.com",
    "phone": "+91-9900112233",
    "father_name": "Vikram Kapoor",
    "mother_name": "Priya Kapoor",
    "marks": {
      "mathematics": 91,
      "physics": 88,
      "biology": 86,
      "chemistry": 89,
      "computer_science": 92
    },
    "total": 446,
    "average": 89.2
  },
  {
    "name": "Neha Tripathi",
    "class": "12A",
    "roll_number": 85,
    "email": "neha.tripathi85@example.com",
    "phone": "+91-8811223344",
    "father_name": "Anand Tripathi",
    "mother_name": "Poonam Tripathi",
    "marks": {
      "mathematics": 85,
      "physics": 82,
      "biology": 88,
      "chemistry": 83,
      "computer_science": 87
    },
    "total": 425,
    "average": 85.0
  },
  {
    "name": "Vikram Reddy",
    "class": "12B",
    "roll_number": 86,
    "email": "vikram.reddy86@example.com",
    "phone": "+91-7722334455",
    "father_name": "Arvind Reddy",
    "mother_name": "Sunitha Reddy",
    "marks": {
      "mathematics": 90,
      "physics": 87,
      "biology": 85,
      "chemistry": 88,
      "computer_science": 91
    },
    "total": 441,
    "average": 88.2
  },
  {
    "name": "Ananya Agarwal",
    "class": "12A",
    "roll_number": 87,
    "email": "ananya.agarwal87@example.com",
    "phone": "+91-6633445566",
    "father_name": "Sanjay Agarwal",
    "mother_name": "Ritu Agarwal",
    "marks": {
      "mathematics": 88,
      "physics": 85,
      "biology": 91,
      "chemistry": 86,
      "computer_science": 89
    },
    "total": 439,
    "average": 87.8
  },
  {
    "name": "Rohit Shah",
    "class": "12B",
    "roll_number": 88,
    "email": "rohit.shah88@example.com",
    "phone": "+91-5544556677",
    "father_name": "Nilesh Shah",
    "mother_name": "Mona Shah",
    "marks": {
      "mathematics": 93,
      "physics": 90,
      "biology": 87,
      "chemistry": 91,
      "computer_science": 94
    },
    "total": 455,
    "average": 91.0
  },
  {
    "name": "Priya Dubey",
    "class": "12A",
    "roll_number": 89,
    "email": "priya.dubey89@example.com",
    "phone": "+91-4455667788",
    "father_name": "Alok Dubey",
    "mother_name": "Anita Dubey",
    "marks": {
      "mathematics": 84,
      "physics": 81,
      "biology": 89,
      "chemistry": 83,
      "computer_science": 86
    },
    "total": 423,
    "average": 84.6
  },
  {
    "name": "Arjun Menon",
    "class": "12B",
    "roll_number": 90,
    "email": "arjun.menon90@example.com",
    "phone": "+91-3366778899",
    "father_name": "Rahul Menon",
    "mother_name": "Lakshmi Menon",
    "marks": {
      "mathematics": 91,
      "physics": 88,
      "biology": 85,
      "chemistry": 87,
      "computer_science": 92
    },
    "total": 443,
    "average": 88.6
  },
  {
    "name": "Kavita Saxena",
    "class": "12A",
    "roll_number": 91,
    "email": "kavita.saxena91@example.com",
    "phone": "+91-2277889900",
    "father_name": "Vijay Saxena",
    "mother_name": "Sunita Saxena",
    "marks": {
      "mathematics": 89,
      "physics": 86,
      "biology": 84,
      "chemistry": 88,
      "computer_science": 91
    },
    "total": 438,
    "average": 87.6
  },
  {
    "name": "Raj Malhotra",
    "class": "12B",
    "roll_number": 92,
    "email": "raj.malhotra92@example.com",
    "phone": "+91-1188990011",
    "father_name": "Raj Malhotra",
    "mother_name": "Neetu Malhotra",
    "marks": {
      "mathematics": 87,
      "physics": 84,
      "biology": 90,
      "chemistry": 86,
      "computer_science": 89
    },
    "total": 436,
    "average": 87.2
  },
  {
    "name": "Sonia Jain",
    "class": "12A",
    "roll_number": 93,
    "email": "sonia.jain93@example.com",
    "phone": "+91-9900112233",
    "father_name": "Amit Jain",
    "mother_name": "Pooja Jain",
    "marks": {
      "mathematics": 92,
      "physics": 89,
      "biology": 86,
      "chemistry": 90,
      "computer_science": 93
    },
    "total": 450,
    "average": 90.0
  },
  {
    "name": "Vishal Iyer",
    "class": "12B",
    "roll_number": 94,
    "email": "vishal.iyer94@example.com",
    "phone": "+91-8811223344",
    "father_name": "Suresh Iyer",
    "mother_name": "Anu Iyer",
    "marks": {
      "mathematics": 85,
      "physics": 82,
      "biology": 88,
      "chemistry": 83,
      "computer_science": 87
    },
    "total": 425,
    "average": 85.0
  },
  {
    "name": "Anita Rao",
    "class": "12A",
    "roll_number": 95,
    "email": "anita.rao95@example.com",
    "phone": "+91-7722334455",
    "father_name": "Kiran Rao",
    "mother_name": "Meera Rao",
    "marks": {
      "mathematics": 90,
      "physics": 87,
      "biology": 85,
      "chemistry": 89,
      "computer_science": 92
    },
    "total": 443,
    "average": 88.6
  },
  {
    "name": "Rohit Nair",
    "class": "12B",
    "roll_number": 96,
    "email": "rohit.nair96@example.com",
    "phone": "+91-6633445566",
    "father_name": "Manoj Nair",
    "mother_name": "Latha Nair",
    "marks": {
      "mathematics": 88,
      "physics": 85,
      "biology": 91,
      "chemistry": 86,
      "computer_science": 89
    },
    "total": 439,
    "average": 87.8
  },
  {
    "name": "Shweta Deshpande",
    "class": "12A",
    "roll_number": 97,
    "email": "shweta.deshpande97@example.com",
    "phone": "+91-5544556677",
    "father_name": "Rajesh Deshpande",
    "mother_name": "Sunita Deshpande",
    "marks": {
      "mathematics": 93,
      "physics": 90,
      "biology": 87,
      "chemistry": 91,
      "computer_science": 94
    },
    "total": 455,
    "average": 91.0
  },
  {
    "name": "Aryan Sharma",
    "class": "12B",
    "roll_number": 98,
    "email": "aryan.sharma98@example.com",
    "phone": "+91-4455667788",
    "father_name": "Rakesh Sharma",
    "mother_name": "Sarika Sharma",
    "marks": {
      "mathematics": 86,
      "physics": 83,
      "biology": 89,
      "chemistry": 84,
      "computer_science": 88
    },
    "total": 430,
    "average": 86.0
  },
  {
    "name": "Neha Patel",
    "class": "12A",
    "roll_number": 99,
    "email": "neha.patel99@example.com",
    "phone": "+91-3366778899",
    "father_name": "Dinesh Patel",
    "mother_name": "Reena Patel",
    "marks": {
      "mathematics": 89,
      "physics": 86,
      "biology": 84,
      "chemistry": 87,
      "computer_science": 90
    },
    "total": 436,
    "average": 87.2
  },
  {
    "name": "Divya Mishra",
    "class": "12B",
    "roll_number": 100,
    "email": "divya.mishra100@example.com",
    "phone": "+91-7001234567",
    "father_name": "Alok Mishra",
    "mother_name": "Sarika Mishra",
    "marks": {
      "mathematics": 84,
      "physics": 80,
      "biology": 88,
      "chemistry": 86,
      "computer_science": 82
    },
    "total": 420,
    "average": 84.0
  }
]
module.exports=students;