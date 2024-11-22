// seed.js
const sequelize = require("./database");
const Department = require("./models/department");
const Person = require("./models/person");

const seedData = async () => {
  await sequelize.sync({ force: true });

  // Seed departments
  const departments = await Department.bulkCreate([
    { name: "General" },
    { name: "Information Communications Technology" },
    { name: "Finance" },
    { name: "Marketing" },
    { name: "Human Resources" },
  ]);

  // Seed people with unique large street numbers for Australian addresses
  await Person.bulkCreate([
    {
      name: "John Smith",
      phone: "02 9988 2211",
      departmentId: departments[0].id,
      street: "1001 Code Lane",
      city: "Javaville",
      state: "NSW",
      zip: "0100",
      country: "Australia",
    },
    {
      name: "Sue White",
      phone: "03 8899 2255",
      departmentId: departments[1].id,
      street: "1025 Bit way",
      city: "Byte Cove",
      state: "QLD",
      zip: "1101",
      country: "Australia",
    },
    {
      name: "Bob O' Bits",
      phone: "05 7788 2255",
      departmentId: departments[2].id,
      street: "1234 Silicon Road",
      city: "Cloud Hills",
      state: "VIC",
      zip: "1001",
      country: "Australia",
    },
    {
      name: "Mary Blue",
      phone: "06 4455 9988",
      departmentId: departments[1].id,
      street: "1337 Processor Boulevard",
      city: "Appletson",
      state: "NT",
      zip: "1010",
      country: "Australia",
    },
    {
      name: "Mick Green",
      phone: "02 9988 1122",
      departmentId: departments[2].id,
      street: "1450 Bandwidth Street",
      city: "Bufferland",
      state: "NSW",
      zip: "0110",
      country: "Australia",
    },
    {
      name: "Alice Yellow",
      phone: "07 3355 2211",
      departmentId: departments[3].id,
      street: "1542 Route Avenue",
      city: "Linktown",
      state: "SA",
      zip: "5041",
      country: "Australia",
    },
    {
      name: "Bob Red",
      phone: "08 2222 4488",
      departmentId: departments[4].id,
      street: "1699 Byte Court",
      city: "Subnet City",
      state: "WA",
      zip: "6000",
      country: "Australia",
    },
    {
      name: "Cara Purple",
      phone: "02 5599 3388",
      departmentId: departments[0].id,
      street: "1721 Cloud Street",
      city: "Rainville",
      state: "NSW",
      zip: "2050",
      country: "Australia",
    },
    {
      name: "Dan Orange",
      phone: "03 3311 7766",
      departmentId: departments[3].id,
      street: "1890 Pixel Path",
      city: "Render Town",
      state: "VIC",
      zip: "3051",
      country: "Australia",
    },
    {
      name: "Eve Green",
      phone: "04 4411 9988",
      departmentId: departments[2].id,
      street: "1999 Circuit Blvd",
      city: "Chipfield",
      state: "NSW",
      zip: "2120",
      country: "Australia",
    },
    {
      name: "Frank Gray",
      phone: "09 6677 1144",
      departmentId: departments[1].id,
      street: "2025 Fiber Lane",
      city: "Port Adelaide",
      state: "SA",
      zip: "5005",
      country: "Australia",
    },
    {
      name: "Gina Brown",
      phone: "01 8877 5522",
      departmentId: departments[4].id,
      street: "2200 Modem Street",
      city: "Bridgewater",
      state: "TAS",
      zip: "7030",
      country: "Australia",
    },
    {
      name: "Hank Silver",
      phone: "02 2233 7788",
      departmentId: departments[0].id,
      street: "2321 Connection Road",
      city: "Ethernet Heights",
      state: "NSW",
      zip: "2101",
      country: "Australia",
    },
    {
      name: "Isla Indigo",
      phone: "07 9988 3344",
      departmentId: departments[2].id,
      street: "2468 Protocol Way",
      city: "Socketville",
      state: "QLD",
      zip: "4122",
      country: "Australia",
    },
    {
      name: "Jack Cyan",
      phone: "03 9988 1144",
      departmentId: departments[1].id,
      street: "2780 Cache Circle",
      city: "Packet City",
      state: "VIC",
      zip: "3066",
      country: "Australia",
    },
  ]);

  console.log("Database synced and data seeded");
  process.exit();
};

seedData();
