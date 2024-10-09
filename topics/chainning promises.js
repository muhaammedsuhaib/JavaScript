const fetchdata = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise Feached!");
    }, 2000);
  });
};

const procesfetch = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`hello ${data}`);
    }, 3000);
  });
};

fetchdata()
  .then((reslt) => {
    console.log(reslt);
    return procesfetch(reslt);
  })
  .then((reslt) => console.log(reslt))
  .catch((err) => console.log("Error adichuu"))
  .finally(() => console.log("ethalum avatte njmalle ivide ind too"));
