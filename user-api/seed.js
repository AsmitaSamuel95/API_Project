const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("Connected to MongoDB");

  // Sample users
  const users = [
    { name: "Asmita", email: "asmita@gmail.com", age: 25 },
    { name: "Ram", email: "ram@gmail.com", age: 18 },
    { name: "Jay", email: "jay@gmail.com", age: 30 },
  ];

  await User.insertMany(users);
  console.log("Users inserted");

  mongoose.connection.close();
}).catch(err => {
  console.error("Error:", err);
});
