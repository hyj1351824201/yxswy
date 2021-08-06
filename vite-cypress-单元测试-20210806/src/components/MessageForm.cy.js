import { mount } from '@cypress/vue'
import MessageForm from './MessageForm.vue'

describe('MessageForm', () => {
    it('should emit "send" event', () => {
        mount(MessageForm)

        cy.get('[data-test="messageText"]').type("message")

        cy.contains('send')
            .click()
            .then(() => {
                console.log(Cypress.vueWrapper.emitted("send")[0])
                expect(Cypress.vueWrapper.emitted("send")[0]).toEqual(['message'])
            })
    })
})