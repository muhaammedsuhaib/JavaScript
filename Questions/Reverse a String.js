// Input: "hello"
// Output: "olleh"

const ReverseString = (Input) => {
  let reverseString = "";

  for (let i = Input.length - 1; i > 0; i--) {
    reverseString += Input[i];
  }
  return reverseString;
};
const data = "Iam suhaib from kerala...";
const result = ReverseString(data);
console.log(result);
