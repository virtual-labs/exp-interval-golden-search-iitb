let temp = [];
function activity1_p2() {
    let btn_txt = get_collapse_btn_text('Table and Summation', 'div-step-tb');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-step-tb'><h4 class='center-text fs-20px'>Calculate: </h4> <br>


    <div id="verify-a1p2-tab" >
        <h4>Consider the given objective function.</h4>

        <span style='font-size: 24px;'>$$ f(x) = \\ \\frac{x^2}{${k1}} - ${k2}sin(x) $$</span>

        <p>and</p>

        <span style='font-size: 24px;'>$$ \\epsilon_a =  \\frac{(3 - \\sqrt{5})}{2} \\mid {\\frac{x_u - x_l}{x_{iter}} \\mid } $$</span>

        <br>

        <div id='tb-box2'></div>
        <br><br>

        <div><canvas id='iter-vs-fx-plot' ></canvas></div>

        <br>
        <div style='text-align: center;'><button style='display: none;' id='p2-btn' onclick='activity1_p3();' class='btn btn-info'>Next</button></div> 
    </div>
    </div>`;
    let header = [
        '<span>$$ Iteration $$</span>',
        '<span>$$ x_l $$</span>',
        "<span>$$ x_1 $$</span>",
        "<span>$$ x_2 $$</span>",
        "<span>$$ x_u $$</span>",
        "<span>$$ f(x_1) $$</span>",
        "<span>$$ f(x_2) $$</span>",
        "<span>$$ \\epsilon_a \\ (percent) $$</span>"
    ];
    let act1_table_data = [];
    // for(let i=0; i<X.length; i++) {
    //     let x_i = 1/X[i];
    //     let y_i = 1/Y[i];
    //     let arr = [
    //         parseFloat(X[i].toFixed(4)), 
    //         parseFloat(Y[i].toFixed(4)), 
    //         parseFloat((x_i).toFixed(4)),
    //         parseFloat((y_i).toFixed(4)),
    //         parseFloat((x_i**2).toFixed(4)),
    //         parseFloat((x_i * y_i).toFixed(4))
    //     ]
    //     act1_table_data.push(arr);
    //     temp.push([0, 0, 0, 0, 0, 0]);
    // }
    table_calculation();
    console.log(table_data);
    let vc = [[2, 3, 5, 6], [1, 2, 3, 4, 5, 6, 7]]; // verify column index
    //let vv = [temp[0][2], temp[0][3], temp[0][4], temp[0][5]];  // verify values
    let tb_box = document.getElementById('tb-box2');
    let new_table = new Verify_Rows_Cols_6_decimal_places(header, table_data, [0, 1], vc, '', tb_box, true, true, plot_generate_x_iter);
    new_table.load_table();
    let tab_ele = new_table.get_table_element();
    tab_ele.style.fontSize = "16px";
    hide_all_steps();
    show_step('div-step-tb');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function table_calculation() {
    let xl_val = 0;
    let xu_val = 4;
    // let d = R*(xu_val - xl_val);
    let arr = [];
    let x_iter = 0;
    let ea = 0;
    table_data = [];
    x_iter_values = [];
    let d = R * (xu_val - xl_val);
    //first iteration
    arr.push(0);
    arr.push(xl_val);
    let x1_val = xl + d;
    arr.push(x1_val);
    let x2_val = xu_val - d;
    arr.push(x2_val);
    arr.push(xu_val);
    // arr.push(0);
    // arr.push(xl_val);
    // let x1_val = xl + (1-R)*(xu_val - xl_val);
    // arr.push(x1_val);
    // let x2_val = xl_val + (R)*(xu_val - xl_val);
    // arr.push(x2_val);
    // arr.push(xu_val);
    // let f1 = k1*Math.sin(x1_val) + k2*(x1_val**2);
    // let f2 = k1*Math.sin(x2_val) + k2*(x2_val**2);
    let f1 = Math.pow(x1_val, 2) / k1 - k2 * Math.sin(x1_val);
    let f2 = Math.pow(x2_val, 2) / k1 - k2 * Math.sin(x2_val);
    // let f1_init = k1*Math.sin(xl_val) + k2*(xl_val**2);
    // let f2_init = k1*Math.sin(xu_val) + k2*(xu_val**2);
    // if(f1_init < f2_init) {
    //     x_iter = -R*Math.abs((xu_val - xl_val) / xl_val);
    // } else if(f1_init > f2_init) {
    //     x_iter = -R*Math.abs((xu_val - xl_val) / xu_val);
    // }
    if (f1 > f2) {
        xu_val = x1_val;
        x1_val = x2_val;
        // d = R*(xu_val - xl_val);
        ea = 1;
        x2_val = xu_val - (R) * (xu_val - xl_val);
        console.log(x2_val, x1_val);
        console.log(xu_val, xl_val);
        x_iter = x2_val;
        x_iter_values.push(x2_val);
    }
    else if (f1 < f2) {
        xl_val = x2_val;
        x2_val = x1_val;
        // d = R*(xu_val - xl_val);
        ea = 1;
        x1_val = xl_val + R * (xu_val - xl_val);
        x_iter = x1_val;
        x_iter_values.push(x1_val);
    }
    arr.push(f1);
    arr.push(f2);
    arr.push(ea);
    table_data.push(arr);
    arr = [];
    // calculate next 8 iterations in loop
    for (let i = 1; i <= 10; i++) {
        arr = [];
        arr.push(i);
        arr.push(xl_val);
        arr.push(x1_val);
        arr.push(x2_val);
        arr.push(xu_val);
        // f1 = k1*Math.sin(x1_val) + k2*(x1_val**2);
        // f2 = k1*Math.sin(x2_val) + k2*(x2_val**2);
        f1 = Math.pow(x1_val, 2) / k1 - k2 * Math.sin(x1_val);
        f2 = Math.pow(x2_val, 2) / k1 - k2 * Math.sin(x2_val);
        if (f1 > f2) {
            xu_val = x1_val;
            x1_val = x2_val;
            // d = R*(xu_val - xl_val);
            x2_val = xu_val - (R) * (xu_val - xl_val);
            console.log(x2_val, x1_val);
            console.log(xu_val, xl_val);
            x_iter = x2_val;
            x_iter_values.push(x2_val);
            ea = Math.abs((x_iter_values[i - 1] - x_iter_values[i]) / x_iter_values[i - 1]) * 100;
        }
        else if (f1 < f2) {
            xl_val = x2_val;
            x2_val = x1_val;
            // d = R*(xu_val - xl_val);
            x1_val = xl_val + R * (xu_val - xl_val);
            x_iter = x1_val;
            x_iter_values.push(x1_val);
            ea = Math.abs((x_iter_values[i - 1] - x_iter_values[i]) / x_iter_values[i - 1]) * 100;
        }
        arr.push(f1);
        arr.push(f2);
        arr.push(ea);
        table_data.push(arr);
    }
    xi = x_iter_values[9];
}
//to show the iteration vs f(x_iter) plot
function plot_generate_x_iter() {
    let next_btn = document.getElementById('p2-btn');
    let y = [];
    for (let i = 0; i < table_data.length; i++) {
        y.push(table_data[i][7]);
    }
    let ctx = document.getElementById('iter-vs-fx-plot');
    console.log(ctx);
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    // let labels = [0.004, 0.007, 0.010, 0.014, 0.020, 0.029, 0.039];
    // let data1=[82.28,96.86,104.07,108.28,112.48,117.68,125.35];//hi_expt
    // let data2=[146.90,183.50,204.11,230.09,256.89,290.83,323.49];//hi_st
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [
                {
                    label: 'X*',
                    data: x_iter_values,
                    fill: false,
                    borderColor: 'blue',
                    tension: 0,
                    showLine: true
                    // yAxisID: 'A',
                    // borderWidth: 1,
                    // borderColor: "green",
                    // backgroundColor: "rgba(34, 139, 34, 0.5)",
                }
            ]
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'X*',
                        font: { size: 14, weight: 'bold' }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Interation Number',
                        font: { size: 14, weight: 'bold' }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: `X* vs Iteration Number`,
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } }
            },
        }
    });
    //root.appendChild(ctx);
    next_btn.style.display = 'block';
}
//activity1_p2();
//# sourceMappingURL=activity1_p2.js.map