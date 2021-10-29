import { useJournalEntries } from "./Journal/JournalDataProvider.js";
import { entryList } from "./Journal/JournalList.js";
import { EntryForm } from "./Journal/JournalForm.js"

EntryForm()

const allEntries = useJournalEntries()

for (const entry of allEntries) {
    console.log(entry)
}

entryList()