function activity1_p4() {
    let btn_text = get_collapse_btn_text(`Calculate R^<sup>iter</sup>`, 'div-step-4');
    maindiv.innerHTML += `
    ${btn_text}
    <div class='collapse divide' id='div-step-4'>
    <p>Note: In each iteration, the interval is shrunk by a factor of golden ratio.</p>

    <br>

    <p>Compute the interval shrunk after 10 iterations, where R is the golden ratio: Interval = R<sup>iter</sup> = </p>
    <div class="col-6"><input type="text" id="riter-inp" class="form-control"><span style='display: none;' id='dsp-riter'></span></div>
    
    <div style='text-align: center;'><button id='a4-verify-btn' onclick='verify_riter();' class='btn btn-info'>Verify</button></div>
    </div>
    `;
    setTimeout(() => { MathJax.typeset(); }, 100);
    hide_all_steps();
    show_step('div-step-4');
    plot_generate_x_iter();
}
function verify_riter() {
    let val1 = document.getElementById('riter-inp');
    let btn = document.getElementById('a4-verify-btn');
    let sp1 = document.getElementById('dsp-riter');
    console.log(Math.pow(R, (10)));
    if (!verify_values(parseFloat(val1.value), Math.pow(R, (10)))) {
        alert('Value of R^(iter) is incorrect');
        return;
    }
    alert('Entered value is correct!!');
    sp1.innerText = (Math.pow(R, (10))).toFixed(4);
    sp1.style.display = 'inline-block';
    val1.remove();
    btn.remove();
    // activity1_p4();
}
//# sourceMappingURL=activity1_p4.js.map