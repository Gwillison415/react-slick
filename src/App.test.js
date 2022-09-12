import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({ search: { page: 1 } });
test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Movie Search App/i);
  expect(linkElement).toBeInTheDocument();
});
