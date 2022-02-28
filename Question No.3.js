// Question No.3
// Write a “person” class to hold all the details.


class person {
    constructor(Name,Father_Name,Mother_Name,Gender,Age,Address,Mobile_No,Email,Voter_ID,Aadhar_No) {
    this.Name = Name ;
    this.Father_Name = Father_Name ;
    this.Mother_Name = Mother_Name;
    this.Gender = Gender; 
    this.Age=Age
    this.Address = Address ;
    this.Mobile_No = Mobile_No; ;
    this.Email = Email;
    this.Voter_ID=Voter_ID
    this.Aadhar_No = Aadhar_No;
    }
    person_name() {
    return `my name is ${this.Name}`;
    }
    person_father_name() {
    return `my father name is ${this.Father_Name}`;
    }
    person_mother_name() {
    return `my mother name is ${this.Mother_Name}`;
    }
        person_gender() {
    return `i am a ${this.Gender}`;
    }
    person_age() {
        return `my age is ${this.Age}`;
        }
    person_address() {
    return `my address is ${this.Address}`;
    }
    person_mobile_no() {
    return `my mobile_no is ${this.Mobile_No}`;
    }
    person_Email() {
    return `my email id is ${this.Email}`;
    }
    person_voter_id() {
        return `voter id no is ${this.Voter_ID}`;
        }
    person_aadhar_no() {
        return `aadhar_no is ${this.Aadhar_No}`;
        }
    }
    //object
    const person_obj = new person("Nandhakumar R","Rakkiyannasamy","mallika",
    "Male","27","erode","9443411599","nandhusri115@gmail.com","1105143134","1431105134");
    console.log(person_obj.person_name());
    console.log(person_obj.person_father_name());
    console.log(person_obj.person_mother_name());
    console.log(person_obj.person_gender());
    console.log(person_obj.person_age());
    console.log(person_obj.person_address());
    console.log(person_obj.person_mobile_no());
    console.log(person_obj.person_Email());
    console.log(person_obj.person_voter_id());
    console.log(person_obj.person_aadhar_no());