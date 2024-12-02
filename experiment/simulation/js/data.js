// golden search
//Optimzation function contants
// f(x) = -k1*sin(x) + k2x^2
let k1 = Math.round(9 + (2) * Math.random());
let k2 = Math.round(1 + (1) * Math.random());
console.log(k1, k2);
//golden_ratio
let R = (Math.sqrt(5) - 1) / 2;
//stopping criteria value (epsilon)
let episilon_s = 0;
//table varibles
let xl = 0;
let x1 = 0;
let x2 = 0;
let x_u = 0;
let f_x1 = 0;
let f_x2 = 0;
let epsilon_a = 0;
let xi = 0;
// table data
let table_data = [
    [
        0,
        0,
        1.5278640450004204,
        2.4721359549995796,
        4,
        -2.504183975856563,
        -0.8229765108274648,
        1
    ],
    [
        1,
        0,
        0.9442719099991588,
        1.5278640450004204,
        2.4721359549995796,
        -2.187736348417171,
        -2.504183975856563,
        261.80339887498957
    ],
    [
        2,
        0.9442719099991588,
        1.5278640450004204,
        3.416407864998739,
        2.4721359549995796,
        -2.504183975856563,
        2.613787796984839,
        44.7213595499958
    ],
    [
        3,
        0.9442719099991588,
        1.8885438199983176,
        1.5278640450004204,
        3.416407864998739,
        -2.1693648187851333,
        -2.504183975856563,
        130.9016994374948
    ],
    [
        4,
        1.8885438199983176,
        1.5278640450004204,
        4.360679774997898,
        3.416407864998739,
        -2.504183975856563,
        5.685592002923782,
        35.03729060226986
    ],
    [
        5,
        1.8885438199983176,
        2.8328157299974768,
        1.5278640450004204,
        4.360679774997898,
        0.3876516808122211,
        -2.504183975856563,
        87.26779962499653
    ],
    [
        6,
        2.8328157299974768,
        1.5278640450004204,
        5.304951684997057,
        4.360679774997898,
        -2.504183975856563,
        6.80568750716021,
        28.80071555262937
    ],
    [
        7,
        2.8328157299974768,
        3.777087639996636,
        1.5278640450004204,
        5.304951684997057,
        3.947366450306526,
        -2.504183975856563,
        65.45084971874738
    ],
    [
        8,
        3.777087639996636,
        1.5278640450004204,
        6.2492235949962165,
        5.304951684997057,
        -2.504183975856563,
        6.23386563354524,
        24.44886187499819
    ],
    [
        9,
        3.777087639996636,
        4.721359549995795,
        1.5278640450004204,
        6.2492235949962165,
        6.3760904211443545,
        -2.504183975856563,
        52.36067977499791
    ],
    [
        10,
        4.721359549995795,
        1.5278640450004204,
        7.193495504995376,
        6.2492235949962165,
        -2.504183975856563,
        5.861523350531003,
        21.23952178658383
    ]
];
let x_iter_values = [
    0.9442719099991588,
    3.416407864998739,
    1.8885438199983176,
    4.360679774997898,
    2.8328157299974768,
    5.304951684997057,
    3.777087639996636,
    6.2492235949962165,
    4.721359549995795,
    7.193495504995376,
    5.665631459994954
];
//# sourceMappingURL=data.js.map