function createNote(key, title, content) {
    return {
        key:key,
        title: title,
        content: content
    }
}

const notes = [
    createNote(1, "Delegation", "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"),
    createNote(2, "Loops", "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."),
    createNote(3, "Arrays", "Q. Why did the programmer quit his job? A. Because he didn't get arrays."),
    createNote(4, "Hardware vs. Software", "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software.")
]

export default notes
