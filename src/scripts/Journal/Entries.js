export const Entries = (journal) => {
    return `
        <section class="entry card">
        <div class="journalEntry">${journal.id}</div>
        <div class="journalEntry">${journal.date}</div>
        <div class="journalEntry">${journal.concept}</div>
        <div class="journalEntry">${journal.entry}</div>
        <div class="journalEntry">${journal.mood}</div>
        </section>
    `
}