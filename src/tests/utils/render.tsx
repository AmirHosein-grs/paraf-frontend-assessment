import { render } from "@testing-library/react";

import { QueryClient } from "@tanstack/react-query";

import { QueryClientProvider } from "@tanstack/react-query";

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

export function renderWithProviders(ui: React.ReactNode) {
  const client = createTestQueryClient();

  return render(
    <QueryClientProvider client={client}>{ui}</QueryClientProvider>,
  );
}
