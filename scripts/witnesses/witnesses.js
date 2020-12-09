export const Witness = (witness) => {
    return `
        <section class="criminal">
            <h2 class="witnessName">${witness.name}</h2>
            <div><b>Statement:</b> ${witness.statements}</div>
        </section>
    `
}