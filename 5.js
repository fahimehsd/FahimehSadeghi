const ask = () => {
  question = confirm("Do you agree?");
  if (question == true) {
    alert("You agreed");
  } else {
    alert("You canceled the execution");
  }
};
ask();
