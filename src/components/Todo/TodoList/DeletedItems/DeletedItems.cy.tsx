import React from 'react'
import DeletedItems from './DeletedItems'

const deletedItems: TodoList = [
  { id: '1678380134980', status: 'deleted', item: 'This is a deleted item.' },
  { id: '1678380134981', status: 'deleted', item: 'This is also a deleted item.' },
]

describe('The Active Items Component', () => {
  beforeEach(() => {
    cy.mount(<DeletedItems items={deletedItems} showActiveOnly={false} />)
  })

  it('renders deleted items list heading', () => {
    cy.get('div[data-qa="deletedItemsList"] > h3').should('have.text', 'Deleted Items:')
  })

  it('renders all deleted items', () => {
    cy.get('div[data-qa="deletedItem"]').should('have.length', 2)
  })

  deletedItems.forEach(({ id, item }) => {
    it(`should render the text for item ${id}`, () => {
      cy.get(`[id="${id}"]`).should('have.text', `${item}`).and('be.visible')
    })
  })
})
