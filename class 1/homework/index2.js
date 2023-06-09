const express = require('express');
const app = express();
app.use(express.json());

let add = (numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

let subtract = (a, b) => {
  return a - b;
};

let multiply = (numbers) => {
  return numbers.reduce((acc, num) => acc * num, 1);
};

let divide = (a, b) => {
  return a / b;
};

app.post('/add', (req, res) => {
  const { numbers } = req.body;
  if (!Array.isArray(numbers)) {
    return res.status(400).json({ error: 'Invalid input. Numbers must be an array.' });
  }

  const sum = add(numbers);
  res.json({ result: sum });
});

app.post('/subtract', (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid input. Numbers must be provided.' });
  }

  const difference = subtract(num1, num2);
  res.json({ result: difference });
});

app.post('/multiply', (req, res) => {
  const { numbers } = req.body;
  if (!Array.isArray(numbers)) {
    return res.status(400).json({ error: 'Invalid input. Numbers must be an array.' });
  }

  const product = multiply(numbers);
  res.json({ result: product });
});

app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid input. Numbers must be provided.' });
  }
  if (num2 === 0) {
    return res.status(400).json({ error: 'Invalid input. Division by zero is not allowed.' });
  }

  const quotient = divide(num1, num2);
  res.json({ result: quotient });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
