import { cleanup, render } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';
import '@testing-library/jest-dom';

const debug = (dom?: Element | Document) => {
  return prettyDOM(dom);
};

const customRender = (ui: React.ReactElement, options = {}) => {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });
};

export * from '@testing-library/react';
export { customRender as render };
export { debug };