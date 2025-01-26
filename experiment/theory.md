<h4>Goden Section Search</h4>

<p>
    In many cultures, certain numbers are ascribed magical qualities. For example, we in the
West are all familiar with “lucky 7” and “Friday the 13th.” Beyond such superstitious quantities,
there are several well-known numbers that have such interesting and powerful mathematical
properties that they could truly be called “magical.” The most common of these are
the ratio of a circle’s circumference to its diameter π and the base of the natural logarithm e.
Although not as widely known, the golden ratio should surely be included in the pantheon
of remarkable numbers. This quantity, which is typically represented by the Greek
letter ϕ (pronounced: fee), was originally defined by Euclid (ca. 300 BCE) because of
its role in the construction of the pentagram or five-pointed star. As depicted in Fig. 7.5,
<br>Euclid’s definition reads: “A straight line is said to have been cut in extreme and mean ratio
when, as the whole line is to the greater segment, so is the greater to the lesser.”
The actual value of the golden ratio can be derived by expressing Euclid’s definition as <br>

$$ \frac{l_1 + l_2}{l_1}  = \frac{l_1}{l_2} \\ \\ \\ eq (1) $$

</p>

<p>
    Multiplying by l<sub>1</sub> and collecting terms yields <br>

    &Phi;<sup>2</sup> - &Phi; - 1 = 0 &nbsp;&nbsp; eq (2)<br>

    where &Phi; = l<sub>1</sub> / l<sub>2</sub>. The positive root of this equation is the golden ratio: <br>

    $$ \Phi = \frac{1 + \sqrt{5}}{2} = 1.61803398874989 \\ \\ \\ eq (3) $$

</p>

<p>
The golden ratio has long been considered aesthetically pleasing in Western cultures.
In addition, it arises in a variety of other contexts including biology. For our purposes, it
provides the basis for the golden-section search, a simple, general-purpose method for determining the optimum of a single-variable function.

</p>

<p>
The golden-section search is similar in spirit to the bisection approach for locating
roots. Recall that bisection hinged on defining an interval, specified by a lower
guess (xl) and an upper guess (xu) that bracketed a single root. The presence of a root between
these bounds was verified by determining that f (xl) and f (xu) had different signs. The
root was then estimated as the midpoint of this interval:
<br>
$$ x_r = \frac{x_1 + x_u}{2} \\ \\ \\ eq (4) $$

</p>

<p>
The final step in a bisection iteration involved determining a new smaller bracket. This
was done by replacing whichever of the bounds xl or xu had a function value with the same
sign as f (xr). A key advantage of this approach was that the new value xr replaced one of
the old bounds.

</p>

<p>
Now suppose that instead of a root, we were interested in determining the minimum
of a one-dimensional function. As with bisection, we can start by defining an interval that
contains a single answer. That is, the interval should contain a single minimum, and hence
is called unimodal. We can adopt the same nomenclature as for bisection, where xl and xu
defined the lower and upper bounds, respectively, of such an interval. However, in contrast
to bisection, we need a new strategy for finding a minimum within the interval. Rather than
using a single intermediate value (which is sufficient to detect a sign change, and hence
a zero), we would need two intermediate function values to detect whether a minimum
occurred.

</p>

<p>
The key to making this approach efficient is the wise choice of the intermediate points.
As in bisection, the goal is to minimize function evaluations by replacing old values with
new values. For bisection, this was accomplished by choosing the midpoint. For the goldensection
search, the two intermediate points are chosen according to the golden ratio:
<br>

x<sub>1</sub> = x<sub>1</sub> + d &nbsp;&nbsp;&nbsp; eq(5) <br>
x<sub>2</sub> = x<sub>u</sub> - d &nbsp;&nbsp;&nbsp; eq(6) <br>

where <br>

d = (&Phi; - 1) (x<sub>u</sub> - x<sub>l</sub>) &nbsp;&nbsp;&nbsp; eq(7) <br>

</p>

<p>
The function is evaluated at these two interior points. Two results can occur:

1. If, f (x<sub>1</sub>) < f (x<sub>2</sub>), then f (x<sub>1</sub>) is the minimum, and the domain of x to the
left of x<sub>2</sub>, from x<sub>l</sub> to x<sub>2</sub>, can be eliminated because it does not contain the minimum. For
this case, x2 becomes the new xl for the next round. <br>
2. If f (x<sub>2</sub>) < f (x<sub>1</sub>), then f (x<sub>2</sub>) is the minimum and the domain of x to the right of x1, from
x1 to xu would be eliminated. For this case, x1 becomes the new xu for the next round.
Now, here is the real benefit from the use of the golden ratio. Because the original x1
and x<sub>2</sub> were chosen using the golden ratio, we do not have to recalculate all the function
values for the next iteration. For example, the old x1 becomes
the new x<sub>2</sub>. This means that we already have the value for the new f (x<sub>2</sub>), since it is
the same as the function value at the old x<sub>1</sub>.
To complete the algorithm, we need only determine the new x<sub>1</sub>. This is done with
eq(5) with d computed with eq(7) based on the new values of x<sub>l</sub> and x<sub>u</sub>. A similar
approach would be used for the alternate case where the optimum fell in the left subinterval.
For this case, the new x<sub>2</sub> would be computed with eq(6).
As the iterations are repeated, the interval containing the extremum is reduced
rapidly. In fact, each round the interval is reduced by a factor of ϕ − 1 (about 61.8%).
That means that after 10 rounds, the interval is shrunk to about 0.61810
or 0.008 or 0.8% of its initial length. After 20 rounds, it is about 0.0066%. This is not quite as good as
the reduction achieved with bisection (50%), but optimization is a harder problem than
root location.


</p><script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"> </script>