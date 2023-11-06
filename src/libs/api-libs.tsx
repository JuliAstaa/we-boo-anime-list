export const FetchingData = async (resource: any, query: any) => {
  const respone = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const datas = await respone.json();
  return datas;
};

export const FetchingNestedData = async (
  resource: any,
  objectProperty: any
) => {
  const respone = await FetchingData(resource, "");
  return respone.data.flatMap((item: any) => item[objectProperty]);
};

export const randomizeData = (data: any, gap: number) => {
  let firstNumber = ~~(Math.random() * (data.length - gap) + 1);
  let secondNumber = firstNumber + gap;
  const respone = (data = {
    data: data.slice(firstNumber, secondNumber),
  });

  return respone;
};
