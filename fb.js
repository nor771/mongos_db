const mongoose = require('mongoose');

// اتصال بقاعدة البيانات
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// تعريف مخطط المستخدم
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

// إنشاء نموذج المستخدم
const User = mongoose.model('User', userSchema);

// عمليات CRUD ممكنة الآن باستخدام نموذج المستخدم
const newUser = new User({ username: 'example', email: 'example@email.com', password: 'password123' });
newUser.save();

User.find({ username: 'example' }, (err, users) => {
    if (err) throw err;
    console.log(users);
  });

  User.updateOne({ username: 'example' }, { password: 'newpassword123' }, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  User.deleteOne({ username: 'example' }, (err) => {
    if (err) throw err;
    console.log('User deleted');
  });
    