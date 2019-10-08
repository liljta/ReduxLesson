export const INC = () => {
  return { type: "INC" };
};

export const DEC = () => {
  return { type: "DEC" };
};

export const ZERO = (payload) => {
  return { type: "ZERO", payload };
};

export const DOUBLE = (payload) => {
  return { type: "DOUBLE", payload };
};

export const Division = (division) => {
  return { type: "Division", division };
};

export const Hundred = () =>{
  return {type: "Hundred"}
};

export  const MinusHundred = () =>{
  return {type: "MinusHundred"}
};