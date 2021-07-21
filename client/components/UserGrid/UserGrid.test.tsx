import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import { USERS_QUERY } from "../../queries/queries";
import UserGrid from "./UserGrid";
import '@testing-library/jest-dom'

describe('UserGrid', () => {
  const userGridMocks = [
    {
      request: {
        query: USERS_QUERY,
        variables:{
          first: 20,
          offset: 0
        }
      },
      result: {
        data: {
          allUsers:{
            users:[{
              name: "name1",
              addr: "address1"
            }, {
              name: "name1",
              addr: "address1"
            }, {
              name: "name1",
              addr: "address1"
            }],
            totalCount:40
          }
        }
      },
    },
  ];
  const Wrapper = ({ mocks = [] }) => (
    <MockedProvider mocks={mocks} addTypename={false}>
      <UserGrid />
    </MockedProvider>
  );

  beforeEach(cleanup);


  it('renders loader on the screen', async() => {
    const { getByTestId } = render(<Wrapper mocks={userGridMocks}/>);
    const loader = await getByTestId('loader');
    expect(loader).toBeTruthy();
  });

  it('renders without crashing', () => {
    const { getByTestId } = render(<Wrapper mocks={userGridMocks}/>);
   setTimeout(()=>{
    const userGrid = getByTestId('user-grid');
    expect(userGrid).toBeTruthy();
   }, 1500)
  });

   it('renders load button on the screen', () => {
    const { findByTestId } = render(<Wrapper mocks={userGridMocks} />)
    setTimeout(()=>{
    const loadMoreBtn  = findByTestId('loading-button');
    expect(loadMoreBtn).toBeInTheDocument();
  }, 1500)
  });

  it('disable the button', () => {
    const { findByTestId } = render(<Wrapper mocks={userGridMocks} />)
    let loadMoreBtn=null ;
    setTimeout(()=>{
    loadMoreBtn =  findByTestId('loading-button');
    fireEvent.click(loadMoreBtn);
    expect(loadMoreBtn).not.toBeInTheDocument();
  }, 1500);
   

  });

  
});