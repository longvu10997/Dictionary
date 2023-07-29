function Search() {
    let English = ["apple", "banana", "orange", "watermelon"];
    let Vietnamese = ["táo", "chuối", "cam", "dưa hấu"];
    let str = document.getElementById("text").value;
    let index_Eng = 0;
    for (let i = 0; i < English.length; i++) {
        if (str == English[i]) {
            index_Eng = i;
            for (let j = 0; j < Vietnamese.length; j++) {
                if (index_Eng == j) {
                    result = Vietnamese[j];
                }
            }
        }
    }
    document.getElementById("Display").innerHTML = result
}