const add = (a, b) => a + b;
const generateGreeting = (name = 'anonymous') => `Hello ${name}`;

test('should add two numbers', () => {
  const result = add(4,6);
  expect(result).toBe(10);
});

test('should say hello name', () => {
  const greeting = generateGreeting('beezy');
  expect(greeting).toBe('Hello beezy');
});

test('should generate greeting for no name', () => {
  const greeting = generateGreeting();
  expect(greeting).toBe('Hello anonymous');
});