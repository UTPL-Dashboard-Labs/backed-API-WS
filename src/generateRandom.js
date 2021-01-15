const generateRandom = () => {
  let max = 100,
    min = 10;
  const data = [
    {
      x: new Date(new Date().setDate(31)).toISOString(),
      y: Math.floor(Math.random() * (max - min)) + min,
    },
    {
      x: new Date(new Date().setDate(30)).toISOString(),
      y: Math.floor(Math.random() * (max - min)) + min,
    },
    {
      x: new Date(new Date().setDate(29)).toISOString(),
      y: Math.floor(Math.random() * (max - min)) + min,
    },
    {
      x: new Date(new Date().setDate(28)).toISOString(),
      y: Math.floor(Math.random() * (max - min)) + min,
    },
    {
      x: new Date(new Date().setDate(27)).toISOString(),
      y: Math.floor(Math.random() * (max - min)) + min,
    },
    {
      x: new Date(new Date().setDate(26)).toISOString(),
      y: Math.floor(Math.random() * (max - min)) + min,
    },
    {
      x: new Date(new Date().setDate(25)).toISOString(),
      y: Math.floor(Math.random() * (max - min)) + min,
    },
  ];

  return data;
};

const generateHistoryUsage = () => {
  let max = 100,
    min = 10;
  const data = {
    data: {
      subjects: [
        {
          id: 1,
          name: "Ingenieria de software y desarrollo",
          usage: Math.floor(Math.random() * (max - min)) + min,
        },
        {
          id: 2,
          name: "Ingenieria de software y gestión ti",
          usage: Math.floor(Math.random() * (max - min)) + min,
        },
        {
          id: 3,
          name: "Laboratorio de datos",
          usage: Math.floor(Math.random() * (max - min)) + min,
        },
        {
          id: 4,
          name: "UTPL_PROYECTOS_LAB",
          usage: Math.floor(Math.random() * (max - min)) + min,
        },
      ],
    },
  };
  return data;
};
exports.randomData = generateRandom;
exports.randomHistoryUsage = generateHistoryUsage;