
        const studentDetails = [
	{
		roll: "1",
		name: "Rohan Singh",
		maths: 86,
		science: 90,
		english: 75,
		computer: 85
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 60
	}
];


let students = studentDetails.map(student => {
	        let marks=student.maths+student.science+student.computer;
            return (student.name+":"+marks);
            })
			document.write(JSON.stringify(students));

			document.write("<br>");
			document.write("<br>");


let student = studentDetails.map((student) => {
	        
		    let marks=student.maths+student.science+student.english+student.computer;
			return marks;
			
			});

			var largest= 0;

            for (i=0; i<=largest;i++){
            if (student[i]>largest) {
            var largest=student[i];
			var index=i;
          }
         }
		 document.write(studentDetails[index].name);
		    document.write("<br>");
			document.write("<br>");


let student1 = studentDetails.map((student) => {
	        
		    let marks=student.maths+student.science+student.english+student.computer;
			return marks;
			
			});

			var smallest= student1[0];

            for (i=0; i<=student1.length;i++){
            if (student1[i]<largest) {
            var largest=student1[i];
			var ind=i;
          }
         }
		 document.write(studentDetails[ind].name);

		    document.write("<br>");
			document.write("<br>");
	

let total=studentDetails.reduce((accumulator, student) => {
            return accumulator + student.computer;
        }, 0);
   document.write("the average marks of the class in computer subject:"+(total/5));

            document.write("<br>");
			document.write("<br>");

let totalMarks = studentDetails.map((student) => {
	 let marks=student.maths+student.science+student.english+student.computer;
	return marks;
	});

	for(i=0;i<studentDetails.length;i++){
		let percentage=(totalMarks[i]/400)*100;
		if(percentage>=75)
			document.write("Grade A"+"<br>");
		else if(percentage>=60 && percentage<75)
        document.write("Grade B"+"<br>");
		else if(percentage>=35 && percentage<60)
		document.write("Grade C"+"<br>");
		else if(percentage<35)
		document.write("Grade D"+"<br>");
	}

	         document.write("<br>");
			document.write("<br>");

	let Marks = studentDetails.map((student) => {
	 let marks=student.maths+student.science+student.english+student.computer;
	return marks;
	});
    let count=0;
	let arr=[];
	for(i=0;i<studentDetails.length;i++){
		let percentage=(Marks[i]/400)*100;
		if(percentage>35){
		count++;
		arr.push(studentDetails[i].name);
		}
	}
		document.write("the total number of students passed:"+count+"<br>");
		document.write("names of students passed are:"+arr);
        
		document.write("<br>");
		document.write("<br>");




const cartItems = [
	{
		id: "101",
		name: "Oreo",
		count: 2,
		price: 30.0,
		discount: 0.18
	},
	{
		id: "102",
		name: "Red Bull",
		count: 1,
		price: 99.0,
		discount: 0.15
	},
	{
		id: "103",
		name: "Dairy Milk Silk",
		count: 3,
		price: 175.0,
		discount: 0.05
	},
	{
		id: "104",
		name: "Pulse Candy Pack",
		count: 1,
		price: 135.0,
		discount: 0.2
	}
];


  document.write("the total No of items:"+cartItems.length);

  document.write("<br>");
  document.write("<br>");

  let totalCart=cartItems.reduce((accumulator, cart) => {
            return accumulator + (cart.count*cart.price-cart.count*cart.discount);
        }, 0);
   document.write("the total cart value:"+totalCart);

   document.write("<br>");
   document.write("<br>");


let totalDiscount=cartItems.reduce((accumulator, cart) => {
            return accumulator + (cart.count*cart.discount);
        }, 0);
   document.write("the total discounted value:"+totalDiscount);

   document.write("<br>");
   document.write("<br>");

   let totalTax=18*totalCart/100;
   document.write("total tax amount:"+totalTax);

   document.write("<br>");
   document.write("<br>");


class Employ {
  constructor(name, id, bs,hra,Allowances) {
    this.name = name;
    this.id =  id;
    this.basicSalary = bs;
	this.HRA = hra;
	this.Allowances =Allowances;
  }
  getSalary(){
      let netSalary= this.basicSalary+this.HRA+this.Allowances;
      return netSalary;
  }
}

let emp1 = new Employ('Karthik', '101', 10000,2000,1000);
let emp2 = new Employ('Sana', '102', 15000,2000,1500);

document.write("net salary of emp1 is:"+emp1.getSalary()+"<br>");
document.write("net salary of emp2 is:"+emp2.getSalary());


            document.write("<br>");
			document.write("<br>");

class BankAccount {
  constructor(name, accountNumber, accountBalance,accountType,ifsc,) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.accountBalance = accountBalance;
	this.accountType = accountType;
	this.ifsc =ifsc;
  }
  getDetails(){
      return document.write(this.name+":"+this.accountBalance+"<br>");
  }
}

let acc1 = new BankAccount('Karthik', 10142500, 10000,'Current',0000245);
let acc2 = new BankAccount('Sana', 10200456, 15000,'Savings',0000564);
let acc3 = new BankAccount('Sai', 10200456, 15000,'Savings',0000356);

acc1.getDetails();
acc2.getDetails();
acc3.getDetails();

   document.write("<br>");
   document.write("<br>");
   
let tot=acc1.accountBalance+acc2.accountBalance+acc3.accountBalance;
let avg=tot/3;
document.write("the average account balance from all the instances:"+avg);

    