function addToList(value) {
  let contactList = localStorage.getItem("contacts");
  if (!contactList) contactList = [];
  localStorage.setItem("contacts", JSON.stringify(value));
}
function getFromList() {
  const contactList = JSON.parse(localStorage.getItem("contacts"));
  return contactList ? contactList : [];
}

const LocalStorage = { addToList, getFromList };

export default LocalStorage;
