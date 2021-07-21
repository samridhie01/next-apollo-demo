import { MockedProvider } from "@apollo/client/testing";
import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import { USERS_QUERY } from "../../queries/queries";
import UserGrid from "./UserGrid";
import '@testing-library/jest-dom'



describe('UserGrid', () => {
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
            }],
            totalCount:20
          }
        }
      },
    },
  ];
  const Wrapper = (mocks=[]) => (
    <MockedProvider mocks={mocks} addTypename={false}>
      <UserGrid />
    </MockedProvider>
  );

  beforeEach(cleanup);


  it('renders loader on the screen', () => {
    const { getByTestId } = render(Wrapper());
    expect(getByTestId('loader')).toBeTruthy();
  });

  it('renders without crashing', async() => {
    const { findByTestId } = render(Wrapper())
    const userGrid  = await findByTestId('user-grid');
    expect(userGrid).toBeInTheDocument();
  });

   it('renders load button on the screen', async() => {
    const { findByTestId } = render(Wrapper())
    const loadMoreBtn  = await findByTestId('loading-button');
    expect(loadMoreBtn).toBeInTheDocument();
  });

  
})