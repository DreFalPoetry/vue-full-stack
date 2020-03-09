export const columns = [
  {
    title: 'Name',
    dataIndex: 'productNamber',
  },
  {
    title: 'Age',
    dataIndex: 'spec',
  },
  {
    title: 'Address',
    dataIndex: 'warp',
  },
];

export function getDataList(){
  let data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      key: `s${i}`,
      id: i,
      productNamber: i.toString(),
      spec: `Edrward ${i}`,
      warp: `经线${i}`,
      piece: `${i}`,
      quantity: `${i}`
    })
  }
    const datalist = [
      {
        venderId: 1001,
        vender: `厂家1`,
        data: data
      },
      {
        venderId: 1002,
        vender: `厂家2`,
        data: data
      }
    ]
    return datalist
} 