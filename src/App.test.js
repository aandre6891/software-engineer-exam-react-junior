import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  const fields = [
    { name: "field_name", label: "Name", type: "text" },
    { name: "field_username", label: "User", type: "text" },
    { name: "field_date", label: "Date", type: "date" }
  ];

  test('renders learn react link', () => {
    render(<App />);
    const headingElement = screen.getByText(/Webtrends Optimize Software Engineer exam/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders form with labels for each field', () => {
    render(<App />);
    fields.forEach((field) => {
      const labelElement = screen.getByText(field.label);
      expect(labelElement).toBeInTheDocument();
    });
  });

});
