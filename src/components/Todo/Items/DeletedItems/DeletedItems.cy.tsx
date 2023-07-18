import React from 'react'
import DeletedItems from './DeletedItems'

const deletedItems = {
  '1': '"This is a deleted item"',
  '2': '"This is also a deleted item"',
}

describe('The Active Items Component', () => {
  beforeEach(() => {
    cy.mount(<DeletedItems items={deletedItems} />)
  })

  it('renders deleted items list heading', () => {
    cy.get('div[data-qa="deletedItemsList"] > h3').should('have.text', 'Deleted Items:')
  })

  it('renders all deleted items', () => {
    cy.get('div[data-qa="deletedItem"]').should('have.length', 2)
  })

  Object.entries(deletedItems).forEach(([key, value]) => {
    it(`should render the text for item ${key}`, () => {
      cy.get(`[id="${key}"]`).should('have.text', `${value}`).and('be.visible')
    })
  })
})
