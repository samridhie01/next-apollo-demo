import { MockedProvider } from "@apollo/client/testing";
import { cleanup, render } from "@testing-library/react";
import React from "react";
import { USERS_QUERY } from "../../queries/queries";
import UserGrid from "./UserGrid";



describe('UserGrid', () => {
  const Wrapper = ({ mocks = [] }) => (
    <MockedProvider mocks={mocks} addTypename={false}>
      <UserGrid />
    </MockedProvider>
  );

  beforeEach(cleanup);

  it('renders without crashing', () => {
    const { getByTestId } = render(<Wrapper  />)
    expect(getByTestId('user-grid')).toBeTruthy()
  });
  it('renders loader on the screen', () => {
    const { getByTestId } = render(<Wrapper />)
    expect(getByTestId('loader')).toBeTruthy();
  });

   it('renders users and load button on the screen', () => {
  
    const mocks = [
      {
        request: {
          query: USERS_QUERY,
          variables:{
            first: 2,
            offset: 0
          }
        },
        result: {
          data: {
            allUsers:{
              users:[{
                name: "name1",
                addr: "address1"
              },
              {
                name: "Mr. Helena Rolfson2",
                addr: "address2"
              }],
              totalCount:2
            }
          }
        },
      },
    ];


    const { findAllByTestId } = render(<Wrapper mocks={mocks} />)
    jest.useFakeTimers();
    setTimeout(() => {
      expect(findAllByTestId('user-grid')).toBeInTheDocument();
    }, 1500);
    expect(findAllByTestId('loading-button')).toBeInTheDocument();
  });

  
})