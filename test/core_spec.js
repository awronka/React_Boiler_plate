import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setEntries} from '../src/core';

describe('core', () => {
    describe('will set all initial entries to the state', () => {
        it('is immutable', () => {
            const entries = List.of('Anna', 'Marthy');
            const initialState = Map();
            
            const setState = setEntries(initialState,entries);
            
            expect(setState).to.equal(Map({
                entries: List.of('Anna', 'Marthy'),
                initialEntries: List.of('Anna', 'Marthy')
            }))
        })
    })
})