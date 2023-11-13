// Part 1: Write a simple text editor that supports add, delete, and edit with undo functionality.
class TextEditor {
    constructor() {
        this.text = ""
        this.moves = [];
    }

    // dump renders the full text based on the previous actions.
    dump() {
        return this.text
    }

    // Appends s to current text
    // Examples:
    //   - Current text is 'foo'. If `add('bar')` is called, then dump() should return 'foobar'
    add(string) {
        this.text += string;
        this.moves.push({action: 'add', content: string})
    }    
    
    // Edits the last 's' that was added and replaces it with the given 's'.
    // Examples:
    //   - add('foo') and add('bars') -> 'foobars'. if edit('xyz') is called,
    //   then dump() should return 'fooxyz' (replace 'bars' with 'xyz'). If edit('abcd') is called,
    //   then dump() would now return 'fooabcd'
    edit(string) {
        if (this.moves.length) {
            if (this.moves[this.moves.length-1].action === 'add') {
                let lastContent = this.moves[this.moves.length-1].content
                this.text = this.text.slice(0, -this.moves[this.moves.length - 1].content.length);
                this.text += string;
                this.moves.push({action: 'edit', content: string, previousContent: lastContent});
            }
        }
    }

    // Deletes the last s that was added or edited.
    // Examples:
    //   - Current text is 'foobar' after add('foo') and add('bar'). if delete() is called,
    //   then dump() should return 'foo'
    delete() {
        if (this.moves.length) {
            if (this.moves[this.moves.length-1].action === 'add' || this.moves[this.moves.length-1].action === 'edit') {
                let lastContent = this.moves[this.moves.length-1].content
                this.text = this.text.slice(0, -this.moves[this.moves.length - 1].content.length);
                this.moves.push({action: 'delete', content: lastContent});
            }
        }
    }

    // undoes the last action.
    // For example, if the last action was a deletion, then it will remove the deletion.
    // If the last action was an edit, then it restores the previous state for the last added string.
    // If the last action as an add, then it removes the last string added.
    // Examples:
    //   - Current text is 'foobar' after add('foo') and add('bar'). if undo() is called,
    //   then dump() should return 'foo'
    //   - Current text is 'bar' after add('foo') and edit('bar'). if undo() is called,
    //   then dump() should return 'foo'
    //   - Current text is 'foo' after add('foo'), add('bar'), delete(). if undo() is called,
    //   then dump() should return 'foobar'
    undo() {
        if (this.moves.length) {
            const lastAction = this.moves[this.moves.length-1];
            if (lastAction.action === 'delete') {
                this.text += lastAction.content;
            } else if (lastAction.action === 'add') {
                this.text = this.text.slice(0, -lastAction.content.length)
            } else if (lastAction.action === 'edit') {
                this.text = this.text.slice(0, -lastAction.content.length);
                this.text += lastAction.previousContent;
            }
        }
    }

    redo() {

    }
}

const string = new TextEditor();
console.log(string.dump())
string.add('foo');
string.add('bars');
console.log(string.dump()); // Output: 'foobars'
string.edit('xyz');
console.log(string.dump()); // Output: 'fooxyz'
string.undo();
console.log(string.dump()); // Output: 'foobars'