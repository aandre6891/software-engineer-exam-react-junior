import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

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

  test('focus changes when clicking on the label', () => {
    render(<App />);
    fields.forEach((field) => {
      const labelElement = screen.getByText(field.label);
      const inputElement = screen.getByLabelText(field.label);

      userEvent.click(labelElement);

      expect(document.activeElement).toBe(inputElement);
    });
  });

});
