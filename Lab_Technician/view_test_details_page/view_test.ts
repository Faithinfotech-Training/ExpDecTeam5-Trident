
interface validationConfig {


    


    // Patient:{
    //     mobile:['required'];
    //     address:['required'];
    //     bloodgrp:['required'];
    // };

    //for these classes

    //one interface for all classes
    //property:string for class and validationproperty is the field or data
    [property: string]: {
        [validationProperty: string]: string[];

    };

}


//global variable for interface
const validationObj: validationConfig = {}

//5 --create a  function for required and positive

//                target means the class and name means the property name
function Required(target: any, name: string) {

    //target is pointing the constructor
    console.log(target);
    const className = target.constructor.name;
    // retrieving all properties name in an array
    validationObj[className] = {
        ...validationObj[className], [name]: ['required']  //... is a spread operator to append data
    };

    console.log(validationObj);
}




//7--create a function to implement validation
function validate(obj: any) {
    let validatorName = validationObj[obj.constructor.name];
    console.log(validatorName);

    //implement validation
    if (!validatorName) {
        return true;
    }


    let isValid = true;

    for (const prop in validatorName) {
        console.log(prop);
        for(const validator of validatorName[prop]){
            console.log(validator);

            //check condition
            switch(validator){
                case 'required':
                    isValid = isValid && !! obj[prop];
                break;

                // case 'positive':
                //     isValid = obj[prop]>0;
                // break;
            }
        }
    }
    return isValid;
}




//1-- creating class
class Patients{

    //property                  //property decorator component
    @Required
    patient: string;

    // @positive
    // mobile: number;
    constructor(_patient: string, ) {
        this.patient = _patient;
        // this.mobil = _mobile;
    }

}



//3--add addEvent Listener ('',event)=>method

const form = document.querySelector('form')!;
form.addEventListener('submit', (event) => {

    event.preventDefault();

    //get all elements
    const PatientID = document.getElementById('PID') as HTMLInputElement;
    // const priceEl = document.getElementById('price') as HTMLInputElement;


    //value from elements
    const patient = PatientID.value;
    // const price = +priceEl.value;

    //create an object of course
    const patientsObj = new Patients(patient);


    //validate() 
    if (!validate(patientsObj)) {           //isValid == false
        alert("Enter Valid Input");
        return;
    }
    console.log(patientsObj);


})
