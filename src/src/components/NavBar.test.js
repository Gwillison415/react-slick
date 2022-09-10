import React from "react";
// import { shallow, mount } from "enzyme";
import { createMount, createShallow } from "@material-ui/core/test-utils";
import IconButton from "@material-ui/core/IconButton";

// import store from "../store";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import NavBar from "./NavBar";
import { SearchBar } from "./SearchBar";
import { initialSearchState } from "../redux/reducers/searchReducer";
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ search: initialSearchState });
describe("testing <NavBar />", () => {
  let mount, shallowWrapper, shallow, wrapper;

  beforeAll(() => {
    mount = createMount();
    shallow = createShallow();
  });
  beforeEach(() => {
    const defaultProps = {};

    shallowWrapper = shallow(
      <Provider store={store}>
        <NavBar {...defaultProps} />
      </Provider>
    );
    wrapper = mount(
      <Provider store={store}>
        <NavBar {...defaultProps} />
      </Provider>
    );
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should render an SearchBar", () => {
    console.log("shallowWrapper.debug()", shallowWrapper.debug());
    // const wrapper = shallow(<MyComponent />);
    const defaultProps = {};

    // const searchBar = wrapper.find(IconButton);
    console.log("searchBar", wrapper.find(SearchBar));
    console.log("wrapper.debug()", wrapper.debug());
    // expect(searchBar).to.be(true);
  });
  //   it("when clicked it should render 2 <ListItem /> components", () => {
  //     wrapper.find("#hamburger-menu").click();
  //     expect(wrapper.find(Foo)).to.have.length(3);
  //   });
});
