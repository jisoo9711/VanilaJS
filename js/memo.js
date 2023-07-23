const MemoForm = document.getElementById("memo-form");
const MemoInput = document.querySelector("#memo-form input");
const MemoList = document.getElementById("memolist");


const MEMO = "memos"

let Memos = [];

function saveMemos() {
    localStorage.setItem(MEMO, JSON.stringify(Memos));
}

function deleteMemo(event) {
    const li = event.target.parentElement;
    li.remove();
    Memos = Memos.filter((Memo) => Memo.id !== parseInt(li.id));
    saveMemos();

}

function paintMemo(newMemo) {
    const li = document.createElement("li");
    li.id = newMemo.id;
    const span = document.createElement("span");
    span.innerText = newMemo.text;
    const button = document.createElement("button");


    button.innerText = "❌";
    button.addEventListener("click", deleteMemo)
    li.appendChild(span);
    li.prepend(button);
    MemoList.appendChild(li);


}


function SubmitMemo(event) {
    event.preventDefault();
    const newMemo = MemoInput.value;
    MemoInput.value = "";

    const Memoobj = {
        text: newMemo,
        id: Date.now(),
    };


    Memos.push(Memoobj);
    paintMemo(Memoobj);
    saveMemos();


}


MemoForm.addEventListener("submit", SubmitMemo);

const savedMemos = localStorage.getItem(MEMO);
console.log(savedMemos);
if (savedMemos !== null) {
    const parsedMemos = JSON.parse(savedMemos);
    Memos = parsedMemos;

    parsedMemos.forEach(paintMemo);

}

