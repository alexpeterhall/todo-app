import React from 'react'
import ActiveItems from './ActiveItems'

const activeItems: TodoList = [
  {
    id: '1678380114788',
    status: 'active',
    item: '"In the beginner\'s mind there are many possibilities; In the expert\'s, there are few." - Zen Master Shunryu Suzuki',
  },
  {
    id: '1678380118180',
    status: 'active',
    item: '"There are only two kinds of programming languages: the ones people complain about and the ones nobody uses." - Bjarne Stroustrup',
  },
  {
    id: '1678380125084',
    status: 'active',
    item: '"Your mind will take the shape of what you frequently hold in thought." - Marcus Aurelius',
  },
  {
    id: '1678380131388',
    status: 'active',
    item: '"Many a false step was made by standing still." - Fortune Cookie',
  },
]

describe('The Active Items Component', () => {
  beforeEach(() => {
    const deleteItemSpy = cy.spy().as('deleteItemSpy')
    const toggleCompleteSpy = cy.spy().as('toggleCompleteSpy')
    cy.mount(
      <ActiveItems
        items={activeItems}
        complete={false}
        showActiveOnly={false}
        deleteItem={deleteItemSpy}
        toggleComplete={toggleCompleteSpy}
      />
    )
  })

  it('renders all active items', () => {
    cy.get('div[data-qa="activeItem"]').should('have.length', 4)
  })

  activeItems.forEach(({ id, item }) => {
    it(`should render the text for item ${id}`, () => {
      cy.get(`[id="${id}"]`).should('have.text', `${item}`).and('be.visible')
    })
  })

  it('should be able to complete items', () => {
    cy.get('input[data-qa="toggleItemComplete"]').each(($el) => {
      cy.wrap($el).click()
    })
    cy.get('@toggleCompleteSpy').its('callCount').should('equal', 4)
  })

  it('should be able to delete items', () => {
    cy.get('button[data-qa="deleteActiveItem"]').each(($el) => {
      cy.wrap($el).click()
    })
    cy.get('@deleteItemSpy').its('callCount').should('equal', 4)
  })
})
