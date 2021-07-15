import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { NAME_QUERY } from "../../queries/queries"
import Name from './Name';

describe('Name', () => {

  const Wrapper = ({ mocks = [] }) => (
    <MockedProvider mocks={mocks} addTypename={false}>
      <Name />
    </MockedProvider>
  );

  beforeEach(cleanup);


  it('renders without crashing', () => {
    const { getByTestId } = render(<Wrapper mocks={[]} />)
    expect(getByTestId('name')).toBeTruthy()
  });
  it('renders  approprate message when loading', () => {
    const { getByTestId } = render(<Wrapper mocks={[]} />)
    expect(getByTestId('name').textContent).toContain('..')
  });
  it('renders correct query content', async () => {
    const mocks = [
      {
        request: {
          query: NAME_QUERY
        },
        result: {
          data: {
            name: "Mr. Helena Rolfson"
          }
        },
      },
    ];

    const { getByTestId } = render(<Wrapper mocks={mocks} />)
    jest.useFakeTimers();
    setTimeout(() => {
      expect(getByTestId('name').textContent).toContain('Helena')
    }, 1500);

  });


})

