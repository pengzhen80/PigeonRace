// let dialog_demo = document.createElement("DIALOG");
// document.body.appendChild(dialog_demo);

// //create a label 
// var label_showTitle = document.createElement('label');
// // newLabel.style.width = '100%';
// // newLabel.style.height = '5%';
// // newLabel.style.left = "0%";
// // newLabel.style.top = "45%";
// // newLabel.style.backgroundColor = "rgba(106,90,205,0.5)";
// // newLabel.style.position = "absolute";
// // newLabel.style.zIndex = "1";
// label_showTitle.innerHTML = "即時路徑效率";
// label_showTitle.style.textAlign = "left";
// // newLabel.style.fontSize = '150%';

// dialog_demo.appendChild(newLabel);

const updateButton = document.getElementById('updateDetails');
const favDialog = document.getElementById('dialog_routeEfficiency');
const outputBox = document.querySelector('output');
const selectEl = favDialog.querySelector('select');
const confirmBtn = favDialog.querySelector('#confirmBtn');

// If a browser doesn't support the dialog, then hide the
// dialog contents by default.
if (typeof favDialog.showModal !== 'function') {
  favDialog.hidden = true;
  /* a fallback script to allow this dialog/form to function
     for legacy browsers that do not support <dialog>
     could be provided here.
  */
}
// "Update details" button opens the <dialog> modally
updateButton.addEventListener('click', () => {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    outputBox.value = "Sorry, the <dialog> API is not supported by this browser.";
  }
});
// "Favorite animal" input sets the value of the submit button
// selectEl.addEventListener('change', (e) => {
//   confirmBtn.value = selectEl.value;
// });
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
// favDialog.addEventListener('close', () => {
//   outputBox.value = `${favDialog.returnValue} button clicked - ${(new Date()).toString()}`;
// });