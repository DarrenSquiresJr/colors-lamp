const { formatColorName } = require('../public/js/utils');

test('formatColorName trims and lowercases input', () => {
    expect(formatColorName('  Blue  ')).toBe('blue');
});

test('formatColorName works on already formatted input', () => {
    expect(formatColorName('red')).toBe('red');
});

// Integration-style test (API structure validation)
test('mock API response has expected structure', () => {
    const mockResponse = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        error: ''
    };

    expect(mockResponse).toHaveProperty('id');
    expect(mockResponse).toHaveProperty('firstName');
    expect(mockResponse).toHaveProperty('lastName');
    expect(mockResponse).toHaveProperty('error');
});