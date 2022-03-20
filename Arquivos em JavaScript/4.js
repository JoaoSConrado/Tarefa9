            var romances = ["Memorial de Aires (1908)", "<br/>Ressurreição (1872)", "<br/>Casa Velha (1885)", "<br/>Memórias Póstumas de Brás Cubas (1881)", "<br/>Helena (1876)", "<br/>Quincas Borba (1891)", "<br/>Esaú e Jacó (1904)", "<br/>A mão e a luva (1874)", "<br/>Dom Casmurro (1899)", "<br/>Iaiá Garcia (1878)"];
            
            var coletaneaPoesias = ["<br/>Americanas (1875)", "<br/>Ocidentais (1880)", "<br/>Falenas (1870)", "<br/>Crisálidas (1864)", "<br/>Poesias Completas (1901"];
            
            var coletaneaContos = ["<br/>Várias Histórias (1896)", "<br/>Histórias sem Data (1884)", "<br/>Papéis Avulsos (1882)", "<br/>Contos Fluminenses (1870)", "<br/>Histórias da Meia-Noite (1873)", "<br/>Relíquias de Casa Velha (1906)", "<br/>Páginas Recolhidas (1899)"];

            var conjuntoTres = [];

        for (let i = 0; i < 3; i++) {
            var tresPrimeiros = romances[i];
            conjuntoTres.push(tresPrimeiros);
            
        }

        for (let i = 0; i < 3; i++) {
            var tresPrimeiros = coletaneaPoesias[i];
            conjuntoTres.push(tresPrimeiros);
            
        }

        for (let i = 0; i < 3; i++) {
            var tresPrimeiros = coletaneaContos[i];
            conjuntoTres.push(tresPrimeiros);
            
        }

        document.write("ROMANCES (Machado de Assis): <br/>" + romances);
        document.write(" <br/> <br/>COLETÂNEA DE POESIAS (Machado de Assis):  " +  coletaneaPoesias);
        document.write(" <br/> <br/>COLETÂNEA DE CONTOS (Machado de Assis):  " + coletaneaContos);
        document.write(" <br/>  <br/> TRÊS PRIMEIROS LIVROS DE CADA OBRA: <br/>" + conjuntoTres);




           