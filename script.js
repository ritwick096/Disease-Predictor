function showDisease(result) {
    // console.log(result)

    fetch("./Training.csv")
        .then(res => {
            return res.text()
        }).then(data => {
            const arr = []
            let rows = data.split(/\r?\n|\r/)
            for (let i = 0; i < rows.length; i++) {
                arr.push([(rows[i].split(","))[133], (rows[i].split(","))[132]])
            }

            let set1 = new Set()
            var posRes = ""
            // var flag = 0

            // for (var i = 0; i < arr.length; i++) {
            //     if (result == arr[i][0]) {
            //         posRes = arr[i][1]
            //         break;
            //     }
            //     else {
            //         flag = 1
            //     }
            // }

            for (var i = 0; i < result.length; i++) {
                if (result.charAt(i) == '1') {
                    set1.add(i)
                }
            }
            var temp = 0;

            for (var i = 0; i < arr.length; i++) {
                let code = arr[i][0]
                let c = 0;
                for (const j of set1) {
                    if (code?.charAt(j) === '1') {
                        c++;
                    }
                }
                if (c > temp) {
                    temp = c;
                    posRes = arr[i][1]
                }
            }
            document.getElementById('result').innerHTML = "Predicted Disease: " + posRes
        })
}

function display() {
    event.preventDefault()

    let result = ""
    var ans
    ans = document.getElementsByName('q1')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q2')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q3')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q4')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q5')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q6')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q7')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q8')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q9')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q10')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q11')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q12')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q13')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q14')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q15')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q16')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q17')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q18')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q19')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q20')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q21')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q22')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q23')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q24')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q25')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q26')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q27')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q28')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q29')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q30')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q31')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q32')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q33')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q34')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q35')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q36')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q37')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q38')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q39')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q40')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q41')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q42')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q43')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q44')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q45')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q46')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q47')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q48')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q49')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q50')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q51')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q52')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q53')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q54')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q55')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q56')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q57')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q58')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q59')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q60')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q61')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q62')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q63')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q64')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q65')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q66')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q67')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q68')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q69')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q70')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q71')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q72')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q73')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q74')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q75')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q76')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q77')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q78')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q79')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q80')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q81')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q82')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q83')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q84')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q85')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q86')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q87')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q88')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q89')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q90')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q91')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q92')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q93')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q94')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q95')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q96')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q97')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q98')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q99')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q100')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q101')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q102')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q103')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q104')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q105')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q106')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q107')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q108')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q109')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q110')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q111')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q112')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q113')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q114')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q115')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q116')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q117')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q118')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q119')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q120')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q121')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q122')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q123')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q124')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q125')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q126')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q127')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q128')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q129')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q130')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q131')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"

    ans = document.getElementsByName('q132')
    if (ans[0].checked)
        result += "1"
    else
        result += "0"


    showDisease(result)
}