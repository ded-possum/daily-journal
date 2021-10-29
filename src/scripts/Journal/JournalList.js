import { useJournalEntries, getEntries } from "./JournalDataProvider.js"
import { Entries } from "./Entries.js"
export const entryList = () => {
    const contentElement = document.querySelector("#entryList")

    const entries = useJournalEntries()

    let entryHTMLRepresentations = ""
    for (const singleEntry of entries) {
        entryHTMLRepresentations += Entries(singleEntry)
    }

    contentElement.innerHTML += `
        <article class="entry">
        ${entryHTMLRepresentations}
        </article>
    `
}