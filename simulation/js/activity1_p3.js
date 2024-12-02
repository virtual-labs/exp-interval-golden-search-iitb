function activity1_p3() {
    let btn_text = get_collapse_btn_text(`x<sup>*</sup> and f(x<sup>*</sup>)`, 'div-step-3');
    maindiv.innerHTML += `
    ${btn_text}
    <div class='collapse divide' id='div-step-3'>
    <h4 style='text-align: left;'  class='fb-800 fs-16px'>Summation</h4>
    <p>The value of minimizer x<sup>*</sup> after ten iterations</p>
    <div class="row">
        <div class="col-4" style='text-align: center;'>x<sup>*</sup> = </div>
        <div class="col-6"><input class='form-control' type="text" id="x-iter"><span style='display: none;' id='dsp-iter'></span></div>
    </div>
    <br>
    <p>The function value f(x<sup>*</sup>)</p>
    <div class="row">
        <div class="col-4" style='text-align: center;'>f(x<sup>*</sup>) = </div>
        <div class="col-6"><input class='form-control' type="text" id="fx-iter"><span style='display: none;' id='dsp-fx-iter'></span></div>
    </div>
    <br>
    <div style='text-align: center;'><button id='a3-verify-btn' onclick='verify_a_b()' class='btn btn-info'>Verify</button></div>
    </div>
    `;
    setTimeout(() => { MathJax.typeset(); }, 100);
    //hide_all_steps();
    show_step('div-step-3');
    plot_generate_x_iter();
}
function verify_a_b() {
    let val1 = document.getElementById('x-iter');
    let val2 = document.getElementById('fx-iter');
    let btn = document.getElementById('a3-verify-btn');
    let sp1 = document.getElementById('dsp-iter');
    let sp2 = document.getElementById('dsp-fx-iter');
    let fx = Math.pow(xi, 2) / k1 - k2 * Math.sin(xi);
    // let fx = (-k1*Math.sin(xi)) + (k2*(xi**2));
    console.log(xi, fx);
    if (!verify_values(parseFloat(val1.value), xi)) {
        alert('Value of x* is incorrect');
        return;
    }
    if (!verify_values(parseFloat(val2.value), fx)) {
        alert('Value of f(x*) is incorrect');
        return;
    }
    alert('Entered values are correct!!');
    sp1.innerText = xi.toFixed(4);
    sp2.innerText = fx.toFixed(4);
    sp1.style.display = 'inline-block';
    sp2.style.display = 'inline-block';
    val1.remove();
    val2.remove();
    btn.remove();
    activity1_p4();
}
//activity1_p3();
//# sourceMappingURL=activity1_p3.js.map