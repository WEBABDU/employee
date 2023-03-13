export const constants = {
  MALE: 1,
  FEMALE: 2,

  MARRIED: 1,
  UNMARRIED: 2,
  DIVORCED: 3,

  WORKIN_STATUS_WORK: 1,
  WORKIN_STATUS_FIRED: 2,
};

constants.genderOptions = [
  { value: constants.MALE, label: "Мужчина" },
  { value: constants.FEMALE, label: "Женщина" },
];

constants.marital_status = [
  { value: constants.MARRIED, label: "Женатый(Замужем)" },
  { value: constants.UNMARRIED, label: "Холостой(незамужен)" },
  { value: constants.DIVORCED, label: "Разведенный" },
];

constants.working_status = [
  { value: constants.WORKIN_STATUS_WORK, label: "Работает" },
  { value: constants.WORKIN_STATUS_FIRED, label: "Уволен" },
];
