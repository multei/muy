import React from "react";
import renderer from 'react-test-renderer';

import Blockquote from "../../lib/Blockquote";

describe('<Blockquote />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Blockquote/>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})