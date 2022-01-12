"use strict";
// get values
const ailment = document.querySelector("#ailment");
const notes = document.querySelector("#notes");
const labTests = document.querySelector("#labTests");
const prescription = document.querySelector("#prescription");
const prescriptionQty = document.querySelector("#qty");
const pid = document.querySelector("#pid");
const pname = document.querySelector("#pname");
const pblood = document.querySelector("#pblood");
const psymptoms = document.querySelector("#psymptoms");
const containerDetails = document.querySelector(".container");
const success = document.querySelector(".mysuccess");
//buttons
const addLabBtn = document.querySelector("#addLabBtn");
const addMedicineBtn = document.querySelector("#addMedicine");
const submitBtn = document.querySelector("#submitBtn");
const removeBtnLab = document.querySelector("#removeBtnLab");
const removeBtnMed = document.querySelector("#removeBtnMed");
//fields
const labTestField = document.querySelector(".tests");
const medicinesField = document.querySelector(".medicines");
// interface ValidationConfig {
//   medicalReport: {
//     ailment: string
//     notes: string
//     labTest: []
//     prescriptions: []
//   }
// }
addLabBtn.addEventListener("click", () => {
    if (labTests.value.length > 0) {
        labTestField.innerHTML += `<div
    class="card p-3 m-1"
    style="
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    "
  >
    <div class="part1" style="display: flex">
      <div class="testno p-1 h5" style="margin: 0 1rem 0 1rem">
        ${labTestField.childElementCount + 1}
      </div>
      <div class="testname p-1 h5">Lab Test Name : ${labTests.value}</div>
    </div>
    <div class="removebtn">
      <div class="btn btn-danger" id="removeBtnLab">remove</div>
    </div>
  </div>`;
        labTests.value = "";
    }
});
addMedicineBtn.addEventListener("click", () => {
    if (prescription.value.length > 0 &&
        Number(prescriptionQty.value) > 0 &&
        Number(prescriptionQty.value) < 101) {
        medicinesField.innerHTML += `<div
    class="card p-3 m-1"
    style="
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    "
  >
    <div class="part1" style="display: flex">
      <div class="testno p-1 h5" style="margin: 0 1rem 0 1rem">
        ${labTestField.childElementCount + 1}
      </div>
      <div class="medname p-1 h5">Medicine Name: ${prescription.value},   Quantity : ${prescriptionQty.value}</div>
    </div>
    <div class="removebtn">
      <div class="btn btn-danger id="removeBtnMed"">remove</div>
    </div>
  </div>`;
        prescription.value = "";
    }
});
submitBtn.addEventListener("click", () => {
    if (ailment.value != "" && notes.value != "") {
        const medicalReport = {
            patientID: pid.innerText.slice(2),
            patientName: pname.innerText.slice(2),
            bloodGroup: pblood.innerText.slice(2),
            symptoms: psymptoms.innerText.slice(2),
            ailment: ailment.value,
            notes: notes.value,
            labTest: [],
            prescriptions: [],
        };
        const labTest = document.querySelectorAll(".testname");
        const medicine = document.querySelectorAll(".medname");
        containerDetails.classList.add("hide");
        success.classList.remove("hide");
        // console.log(labTest[0])
        // labTest.forEach((test) => {
        //   medicalReport.labTest.push(labTests.value)
        // })
        // medicine.forEach((med) => {
        //   medicalReport.prescriptions.push(med.innerText)
        // })
        console.log(medicalReport);
    }
    else {
        const errMsg = document.querySelector("#errorMsg");
        errMsg.innerText = "Please fill all the fields";
    }
});
