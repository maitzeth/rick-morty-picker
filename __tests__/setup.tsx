import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { prettyDOM } from '@testing-library/dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    }
  }
});

const debug = (dom?: Element | Document) => {
  return prettyDOM(dom);
};

const customRender = (ui: React.ReactElement, options = {}) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    ),
    ...options,
  });
};

export * from '@testing-library/react';
export { debug, customRender as render };
// export { debug, render };
