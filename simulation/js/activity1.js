let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h5 class="center-text fs-20px fw-600">Optimization: To find a minimum of a given objective function within the given interval using the golden section search method. </h5>

        <div class="fs-16px">
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Generated Dataset", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <h4  style='text-align: left;' class='fb-800 fs-20px'>Step 1: </h4>
        <br>

        <p style="text-align: center;"><span>$$ R = \\frac{\\sqrt{5} - 1}{2}  $$</span></p>
            <br>

        <div>
            <br>
            <p style='font-size: 24px;'>if <span style="display: inline-block; font-size: 24px;">$$ f(x_1) \\gt f(x_2) $$</span></p>
            <br>

            

            <div style='margin: auto; font-size: 20px;' class="col-10">
                <p>The domain of x to left of x<sub>1</sub> from x<sub>u</sub> to x<sub>1</sub> can be eliminated as it does not contain minimum. For this case x<sub>1</sub> becomes new x<sub>l</sub> and x<sub>2</sub> becomes new x<sub>1</sub> for next iteration. </p>
                <br>
                <p>x<sub>2</sub> is computed by: </p>
                <p style="text-align: center;"><span>$$ x_2  = x_u - R(x_u - x_l)  $$</span></p>

                and corresponding f(x<sub>1</sub>) compute. The x<sub>iter</sub> = x<sub>2</sub>

            </div>
            

            <br><br>
            <p style='font-size: 24px;'>if <span style="display: inline-block; font-size: 24px;">$$ f(x_1) \\lt f(x_2) $$</span></p>
            <br>
            <div style='margin: auto; font-size: 20px;' class="col-10">
                <p>The domain of x to right of x<sub>2</sub> from x<sub>2</sub> to x<sub>u</sub> can be eliminated as it does not contain minimum. For this case x<sub>2</sub> becomes new x<sub>u</sub> and x<sub>1</sub> becomes new x<sub>2</sub> for next iteration. </p>
                <br>
                <p>x<sub>1</sub> is computed by: </p>
                <p style="text-align: center;"><span>$$ x_1 = x_l + R(x_u - x_l) $$</span></p>

                and corresponding f(x<sub>2</sub>) compute. The x<sub>iter</sub> = x<sub>2</sub>

            </div>

        </div>

        <br><br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='activity1_p2();'  id='temp-btn-12' >Next</button></div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
activity1();
//# sourceMappingURL=activity1.js.map