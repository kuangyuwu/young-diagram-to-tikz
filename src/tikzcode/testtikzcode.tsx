export function getTestTikzCode() : string {
  return `\\begin{tikzpicture}[scale=1.5]
  \\draw
    (-0.7 , -0.5) node {\\tiny $1$}
    (-0.7 , -1.5) node {\\tiny $2$}
    (-0.7 , -2.5) node {\\tiny $3$}
    (-0.7 , -3.5) node {\\tiny $4$}
    (-0.7 , -4.3) node {\\tiny $\\vdots$}
    (-0.7 , -5.5) node {\\tiny $\\ell$}
    (0.5 , 0.5) node {\\tiny $1$}
    (1.5 , 0.5) node {\\tiny $2$}
    (2.55 , 0.5) node {\\tiny $\\cdots$}
    (3.5 , 0.5) node {\\tiny $\\alpha_2$}
    (4.55 , 0.5) node {\\tiny $\\cdots$}
    (5.55 , 0.5) node {\\tiny $k$}
  ;

  \\fill[gray] (0 , 0) -- (6 , 0) -- (6 , -1) -- (1 , -1) -- (1 , -6) -- (0 , -6) -- (0 , 0) ;
  \\draw (1 , -1) -- (4 , -1) ;
  \\draw (1 , -2) -- (4 , -2) ;
  \\draw (1 , -3) -- (2 , -3) ;
  \\draw (1 , -4) -- (2 , -4) ;
  \\draw (1 , -1) -- (1 , -4) ;
  \\draw (2 , -1) -- (2 , -4) ;

  \\draw (1 , -5) -- (2 , -5) ;
  \\draw (1 , -6) -- (2 , -6) ;
  \\draw (1 , -5) -- (1 , -6) ;
  \\draw (2 , -5) -- (2 , -6) ;

  \\draw (3 , -1) -- (4 , -1) ;
  \\draw (3 , -2) -- (4 , -2) ;
  \\draw (3 , -1) -- (3 , -2) ;
  \\draw (4 , -1) -- (4 , -2) ;

  \\draw (6 , 0) -- (7 , 0) ;
  \\draw (6 , -1) -- (7 , -1) ;
  \\draw (6 , 0) -- (6 , -1) ;
  \\draw (7 , 0) -- (7 , -1) ;

  \\draw (2.55 , -1.5) node {\\tiny $\\cdots$} ;
  \\draw (7.55 , -0.5) node {\\tiny $\\cdots$} ;
  \\draw (1.5 , -4.3) node {\\tiny $\\vdots$} ;
  \\draw (1.5 , -1.5) node {\\footnotesize $1$} ;
  \\draw (1.5 , -2.5) node {\\footnotesize $2$} ;
  \\draw (1.5 , -3.5) node {\\footnotesize $3$} ;
  \\draw (1.5 , -5.5) node {\\tiny $\\ell \\!\\! - \\!\\! 1$} ;
  \\draw (3.5 , -1.5) node {\\footnotesize $1$} ;
  \\draw (6.5 , -0.5) node {\\footnotesize $1$} ;

  \\draw[blue , very thick]
    (1 , -2) -- (2 , -2) -- (2 , -3) -- (1 , -3) -- (1 , -2)
    (1 , -3) -- (2 , -3) -- (2 , -6) -- (1 , -6) -- (1 , -3)
    (3 , -1) -- (4 , -1) -- (4 , -2) -- (3 , -2) -- (3 , -1)
  ;
\\end{tikzpicture}`
}