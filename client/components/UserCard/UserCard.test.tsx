import { render } from "@testing-library/react"
import React from "react"
import UserCard from "./UserCard"
import renderer from 'react-test-renderer';

describe('UserCard', ()=>{
    it('renderCorrectly', ()=>{
        const component = renderer.create(<UserCard name="abc" addr="Delhi"/>)
        let tree = component.toJSON();
         expect(tree).toMatchSnapshot();
    })
})