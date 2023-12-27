const url = (base: string) => {
  return (strings: TemplateStringsArray, ...values: string[]) => {
    let result = strings[0];
    for (let i = 0; i < values.length; i++) result += values[i] + strings[i + 1];
    return `${base}${result}`;
  };
};

export default url;
