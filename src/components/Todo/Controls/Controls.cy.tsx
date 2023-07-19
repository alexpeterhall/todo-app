import React from 'react'
import Controls from './Controls'

describe('The Controls component', () => {
  beforeEach(() => {
    const addItemSpy = cy.spy().as('addItemSpy')
    const toggleActiveSpy = cy.spy().as('toggleActiveSpy')
    cy.mount(<Controls addItem={addItemSpy} toggleShowActiveOnly={toggleActiveSpy} />)
  })

  it('renders the controls form', () => {
    cy.get('form[name="addTodo"]').should('exist')
  })

  it('should not be able to add an empty item', () => {
    cy.get('button[data-qa="addTodoButton"]').should('have.text', 'Add').and('be.disabled')
  })

  it('should be able to add a new item', () => {
    cy.get('input[data-qa="todoInput"]').type('This is a new Todo item.')
    cy.get('button[data-qa="addTodoButton"]').click()
    cy.get('@addItemSpy').should('have.been.calledOnce')
  })

  it('should be able to click active items only toggle', () => {
    cy.get('div[data-qa="toggleActiveOnly"]').should('have.text', 'Display Only Active Items:')
    cy.get('input[data-qa="toggleActiveOnlyCheckbox"]').click()
    cy.get('@toggleActiveSpy').should('have.been.calledOnce')
  })
})
