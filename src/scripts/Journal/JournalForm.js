
import { entryList } from "./JournalList.js"

const contentTarget = document.querySelector("#entryMaker")

export const EntryForm = () => {
    contentTarget.innerHTML =
    `
    <h2>Daily Journal</h2>
    <form action="">
        <fieldset>
            <label for="journalDate">Date of Entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
    </form>
    <h3>Concepts covered</h3>
    <fieldset>
        <input type="text">
    </fieldset>
    <h4>Journal Entry</h4>
    <fieldset>
        <textarea name="jEntry" id="" cols="30" rows="10"></textarea>
    </fieldset>

    <h5>Mood for the Day</h5>
    <fieldset>
        <input list="mood">
            <datalist id="mood">
                <option value="happy">Happy</option>
                <option value="dopey">Dopey</option>
                <option value="sleepy">Sleepy</option>
                <option value="grumpy">Grumpy</option>
                <option value="sneezy">Sneezy</option>
                <option value="bashful">Bashful</option>
            </datalist>
    </fieldset>
    <h6>
    <form action="record">
        <button>Record Journal Entry</button>
    </form>
    </h6>
    `
}