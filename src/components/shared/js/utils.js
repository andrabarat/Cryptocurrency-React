export default function numberWithSeparator(text) {
  const numberArray = text.split(".");
  const beforeComma = numberArray[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return beforeComma + "." + numberArray[1];
}
