type RelationField = {
  fieldId: number;
  variant: string;
};

type LotField = {
  id: number;
  name: string;
  options: string[] | null;
};

type Lot = {
  id: number;
  name: string;
  fields: LotField[];
};

const fields: RelationField[] = [
  {
    fieldId: 1,
    variant: "ShortTextField", // input
  },
  {
    fieldId: 2,
    variant: "BigTextField", // textarea
  },
  {
    fieldId: 3,
    variant: "RangeField", // two inputs
  },
  {
    fieldId: 4,
    variant: "SelectField", // Dropdown
  },
];

const lots: Lot[] = [
  {
    id: 1,
    name: "Product lot",
    fields: [
      { id: 1, name: "Заголовок", options: null },
      { id: 2, name: "Описание", options: null },
      { id: 3, name: "Цена от/до", options: null },
      {
        id: 4,
        name: "Выберите тип товара",
        options: ["Футболка", "Лестница", "Велосипед"],
      },
    ],
  },
  {
    id: 2,
    name: "Subscription lot",
    fields: [
      { id: 1, name: "Подписка", options: null },
      {
        id: 4,
        name: "Выберите тариф",
        options: ["Start", "Premium", "Advanced"],
      },
    ],
  },
  {
    id: 3,
    name: "Message lot",
    fields: [
      { id: 1, name: "Заголовок сообщения", options: null },
      { id: 2, name: "Текст сообщения", options: null },
      { id: 1, name: "Получатель:", options: null },
      {
        id: 4,
        name: "Выберите дату отправки:",
        options: ["08:00", "09:00", "10:00", "11:00", "12:00"],
      },
    ],
  },
];

export const getMockLots = () => lots;
export const getMockFields = () => fields;
