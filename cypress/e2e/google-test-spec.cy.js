describe('seach with google', () => {
  it('search with keyword FHAI', () => {
    cy.visit('https://www.google.com') // สั่งให้เปิดเว็บ
    cy.get("input[name='q']") // ให้ get element search bar (ดูจาก inspec)
      .type("FHAI")
      .wait(3000)
      .type("{enter}")
  })
})