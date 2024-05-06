
const folders = ["1_aminoacids/", "2_carboxylic_acids/", "3_dicarboxylic_acids/", "4_heterocycles/", "5_aromatic_derivates/", "6_sacharides/","7_oxo_hydroxo_acids/", "8_plastics/", "9_carbonyl_alcohols/"]

const namesAminoacids = ["Alanine", "Arginine", "Asparagine", "Aspartic acid", "Cysteine", "Glutamic acid", "Glutamine", "Glycine", "Histidine", 
"Isoleucine", "Leucine", "Lysine", "Methionine", "Phenylalanine", "Proline", "Serine", "Threonine", "Tryptophan", "Tyrosine", "Valine"];

const czAminoacids = { 
    "Alanine":"Alanin", 
    "Arginine":"Arginin", 
    "Asparagine":"Asparagin",
    "Aspartic acid":"Kyselina asparagová", 
    "Cysteine":"Cystein", 
    "Glutamic acid":"Kyselina glutamová",
    "Glutamine":"Glutamin", 
    "Glycine":"Glycin", 
    "Histidine":"Histidin",
    "Isoleucine":"Isoleucin", 
    "Leucine":"Leucin", 
    "Lysine":"Lysin",
    "Methionine":"Methionin", 
    "Phenylalanine":"Phenylalanin", 
    "Proline":"Prolin",
    "Serine":"Serin",
    "Threonine":"Threonin", 
    "Tryptophan":"Tryptofan", 
    "Tyrosine":"Tyrosin",
    "Valine":"Valin",
};

const namesCarboxylicacids = ["Formic acid", "Acetic acid", "Propionic acid", "Butyric acid", "Valeric acid", "Caproic acid", "Benzoic acid", "Methacrylic acid", "Acrylic acid"]

const czCarboxylicacids = { 
    "Formic acid":"Kyselina mravenčí", 
    "Acetic acid":"Kyselina octová", 
    "Propionic acid":"Kyselina propionová",
    "Butyric acid":"Kyselina máselná", 
    "Valeric acid":"Kyselina valerová", 
    "Caproic acid":"Kyselina kapronová",
    "Enanthic acid":"Kyselina enanthová", 
    "Caprylic acid":"Kyselina kaprylová",
    "Benzoic acid": "Kyselina benzoová",
    "Acrylic acid": "Kyselina akrylová",
    "Methacrylic acid":"Kyselina methakrylová"


};

const namesDicarboxylicacids = ["Oxalic acid", "Malonic acid", "Succinic acid", "Glutaric acid", "Adipic acid", "Maleic acid", "Fumaric acid", "Phthalic acid", "Isophthalic acid", "Terephthalic acid"]

const czDicarboxylicacids = { 
    "Oxalic acid":"Kyselina šťavelová", 
    "Malonic acid":"Kyselina malonová", 
    "Succinic acid":"Kyselina jantarová",
    "Glutaric acid":"Kyselina glutarová", 
    "Adipic acid":"Kyselina adipová", 
    "Maleic acid":"Kyselina maleinová",
    "Fumaric acid":"Kyselina fumarová",
    "Phthalic acid":"Kyselina ftalová",
    "Isophthalic acid":"Kyselina isoftalová",
    "Terephthalic acid":"Kyselina tereftalová",

};

const namesHeterocycles = ["Furan", "Pyrrole", "Thiophene", "Pyridine", "Piperidine", "Indole", "Imidazole", "Pyrimidine", "Purine", "Pyran", "Ethylene oxide", "Tetrahydrofuran", "Oxazole"]
const czHeterocycles = { 
    "Furan":"Furan", 
    "Pyrrole":"Pyrrol", 
    "Thiophene":"Thiofen",
    "Pyridine":"Pyridin", 
    "Piperidine":"Piperidin", 
    "Indole":"Indol",
    "Imidazole":"Imidazol", 
    "Pyrimidine":"Pyrimidin", 
    "Purine":"Purin",
    "Pyran":"Pyran", 
    "Ethylene oxide":"Ethylen oxid",
    "Tetrahydrofuran":"Tetrahydrofuran", 
    "Pyrimidine":"Pyrimidin", 
    "Oxazole":"Oxazol",


};

const namesAromaticDerivates = ["Benzene", "Naphthalene", "Anthracene", "Phenanthrene", "Cumene", "Indene", "Phenol", "Toluene", "Aniline", "Benzoquinone", "Benzophenone", 
"Salicylic acid", "Cresol", "Styrene", "o-Xylene", "m-Xylene","p-Xylene","Mesitylene", "Catechol", "Resorcinol", "Hydroquinone", "Anisole", "o-Toluidine","m-Toluidine","p-Toluidine", "Paracetamol", "Acetylsalicylic acid", 
"Phloroglucinol", "Nitrobenzene", "Durene", "Biphenyl", "Picric acid", "Gallic acid", "Bisphenol A"]

const czAromaticDerivates = {
'Benzene': 'Benzen',
'Naphthalene': 'Naftalen',
'Anthracene': 'Antracen',
'Phenanthrene': 'Fenantren',
'Cumene': 'Kumen',
'Indene': 'Inden',
'Phenol': 'Fenol',
'Toluene': 'Toluen',
'Aniline': 'Anilin',
'Benzoquinone': 'Benzochinon',
'Benzophenone': 'Benzofenon',
'Salicylic acid': 'Kyselina salicyová',
'Cresol': 'Kresol',
'Styrene': 'Styrene',
'o-Xylene': 'o-Xylene',
'm-Xylene': 'm-Xylene',
'p-Xylene': 'p-Xylene',
'Mesitylene': 'Mesitylen',
'Catechol': 'Pyrokatechol',
'Resorcinol': 'Resorcinol',
'Hydroquinone': 'Hydrochinon',
'Anisole': 'Anisol',
'o-Toluidine': 'o-Toluidin',
'm-Toluidine': 'm-Toluidin',
'p-Toluidine': 'p-Toluidin',
'Paracetamol': 'Paracetamol',
'Acetylsalicylic acid': 'Kyselina acetylsalicyová',
'Phloroglucinol': 'Floroglucinol',
"Nitrobenzene":"Nitrobenzen", 
"Durene":"Duren",
"Biphenyl":"Bifenyl", 
"Picric acid": "Kyselina pikrová",
"Gallic acid": "Kyselina gallová",
"Bisphenol A": "Bisfenol A"

}

const namesSacharides = ["α-D-Glucose", "β-D-Glucose", "Fructose", "Galactose", "Sucrose", "Lactose", "Maltose", "Cellobiose", "Amylose", "Ribose", "Deoxyribose", "Chitin", "Gluconic acid", "Glucuronic acid", "Saccharic acid", "Sorbitol"]
var scelectedCompound;

const czSacharides = {
'α-D-Glucose': 'α-D-Glukóza',
'β-D-Glucose': 'β-D-Glukóza',
'Fructose': 'Fruktóza',
'Galactose': 'Galaktóza',
'Sucrose': 'Sacharóza',
'Lactose': 'Laktóza',
'Maltose': 'Maltóza',
'Cellobiose': 'Cellobióza ',
'Amylose': 'Amylosa',
'Ribose': 'Ribosa',
'Deoxyribose': 'Deoxyribosa',
'Chitin': 'Chitin',
"Gluconic acid":"Kyselina glukonová", 
"Glucuronic acid":"Kyselina glukuronová", 
"Saccharic acid":"Kyselina glukarová", 
"Sorbitol":"Sorbitol"}

const namesOxoHydroxoAcids = ["Aconitic acid", "Citric acid", "Glyceric acid", "Glycolic acid", "Isocitric acid", "Lactic acid", "Malic acid", "Oxaloacetic acid", "Pyruvic acid", "Tartaric acid"]

const czOxoHydroxoAcids = {
'Aconitic acid': 'Kyselina akonitová',
'Citric acid': 'Kyselina citronová',
'Glyceric acid': 'Kyselina glycerová',
'Glycolic acid': 'Kyselina glykolová',
'Isocitric acid': 'Kyselina isocitronová',
'Lactic acid': 'Kyselina mléčná',
'Malic acid': 'Kyselina jablečná',
'Oxaloacetic acid': 'Kyselina oxaloctová',
'Pyruvic acid': 'Kyselina pyrohroznová',
'Tartaric acid': 'Kyselina vinná'}

const namesPlastics = ["Gutta-percha", "Natural rubber", "Neoprene", "Novolak", "Polyethylene terephthalate", "Polyethylene", "Poly(methyl methacrylate)", "Polypropylene", "Polystyrene", "Polytetrafluorethylene", "Polyvinyl chloride", 'Polyvinyl acetate', "Polyacrylonitrile"]

const czPlastics = {
'Gutta-percha': 'Gutaperča',
'Natural rubber': 'Kaučuk',
'Neoprene': 'Neopren',
'Novolak': 'Novolak',
'Polyethylene terephthalate': 'Polyethylentereftalát',
'Polyethylene': 'Polyethylen',
'Poly(methyl methacrylate)': 'Polymethylmethakrylát',
'Polypropylene': 'Polypropylen',
'Polystyrene': 'Polystyren',
'Polytetrafluorethylene': 'Polytetrafluorethylen',
'Polyvinyl chloride': 'Polyvinylchlorid',
'Polyvinyl acetate': 'Polyvinylacetát',
"Polyacrylonitrile" : "Polyakrylonitryl"}

const namesCarbonylAlcohols = ["Diethyl ether", "Glyceraldehyde", "Glycerol", "Glyoxal", "Isopropyl alcohol", "Methylglyoxal", "Phosgene", "Urea", "Vinyl alcohol", "Acetaldehyde", "Formaldehyde", "Acetone", "Pinacol", "Acrolein", "Ethylene glycol"]

const czCarbonylAlcohols = {
'Diethyl ether': 'Ether',
'Glyceraldehyde': 'Glyceraldehyd',
'Glycerol': 'Glycerol',
'Glyoxal': 'Glyoxal',
'Isopropyl alcohol': 'Isopropyl alkohol',
'Methylglyoxal': 'Methylglyoxal',
'Phosgene': 'Fosgen',
'Urea': 'Močovina',
'Vinyl alcohol': 'Vinylalkohol',
"Acetaldehyde": "Acetaldehyd", 
"Formaldehyde": "Formaldehyd", 
"Acetone": "Aceton",
"Pinacol": "Pinakol",
"Acrolein": "Akrolein",
"Ethylene glycol": "Ethylenglykol"
}


function selectAminoacids() {
    scelectedCompound = namesAminoacids;
    window.location.href = "exam.html";
    localStorage.setItem('scelectedCompound', JSON.stringify(scelectedCompound));
    localStorage.setItem('folder', folders[0]);
    var language = localStorage.getItem("language")
    
    if (language == "cz"){
        localStorage.setItem('dictCompound', JSON.stringify(czAminoacids));
        console.log("czech")
    }

    if (language == "en")  {
        localStorage.setItem('dictCompound', false);
        console.log("enlish")
    } 
}

function selectCarboxylicacids() {

    scelectedCompound = namesCarboxylicacids;
    window.location.href = "exam.html";
    localStorage.setItem('scelectedCompound', JSON.stringify(scelectedCompound));
    localStorage.setItem('folder', folders[1]);
    var language = localStorage.getItem("language")
    
    if (language == "cz"){
        localStorage.setItem('dictCompound', JSON.stringify(czCarboxylicacids));
        console.log("czech")
    }

    if (language == "en")  {
        localStorage.setItem('dictCompound', false);
        console.log("enlish")
    } 
}

function selectDicarboxylicacids() {

    scelectedCompound = namesDicarboxylicacids;
    window.location.href = "exam.html";
    localStorage.setItem('scelectedCompound', JSON.stringify(scelectedCompound));
    localStorage.setItem('folder', folders[2]);
    var language = localStorage.getItem("language")
    
    if (language == "cz"){
        localStorage.setItem('dictCompound', JSON.stringify(czDicarboxylicacids));
        console.log("czech")
    }

    if (language == "en")  {
        localStorage.setItem('dictCompound', false);
        console.log("enlish")
    } 
}

function selectHeterocycles() {

    scelectedCompound = namesHeterocycles;
    window.location.href = "exam.html";
    localStorage.setItem('scelectedCompound', JSON.stringify(scelectedCompound));
    localStorage.setItem('folder', folders[3]);
    var language = localStorage.getItem("language")
    
    if (language == "cz"){
        localStorage.setItem('dictCompound', JSON.stringify(czHeterocycles));
        console.log("czech")
    }

    if (language == "en")  {
        localStorage.setItem('dictCompound', false);
        console.log("enlish")
    } 
}

function selectAromaticDerivates() {

    scelectedCompound = namesAromaticDerivates;
    window.location.href = "exam.html";
    localStorage.setItem('scelectedCompound', JSON.stringify(scelectedCompound));
    localStorage.setItem('folder', folders[4]);
    var language = localStorage.getItem("language")
    
    if (language == "cz"){
        localStorage.setItem('dictCompound', JSON.stringify(czAromaticDerivates));
        console.log("czech")
    }

    if (language == "en")  {
        localStorage.setItem('dictCompound', false);
        console.log("enlish")
    } 
}

function selectSacharides() {

    scelectedCompound = namesSacharides;
    window.location.href = "exam.html";
    localStorage.setItem('scelectedCompound', JSON.stringify(scelectedCompound));
    localStorage.setItem('folder', folders[5]);
    var language = localStorage.getItem("language")
    
    if (language == "cz"){
        localStorage.setItem('dictCompound', JSON.stringify(czSacharides));
        console.log("czech")
    }

    if (language == "en")  {
        localStorage.setItem('dictCompound', false);
        console.log("enlish")
    } 
}

function selectOxoHydroxoAcids() {

    scelectedCompound = namesOxoHydroxoAcids;
    window.location.href = "exam.html";
    localStorage.setItem('scelectedCompound', JSON.stringify(scelectedCompound));
    localStorage.setItem('folder', folders[6]);
    var language = localStorage.getItem("language")
    
    if (language == "cz"){
        localStorage.setItem('dictCompound', JSON.stringify(czOxoHydroxoAcids));
        console.log("czech")
    }

    if (language == "en")  {
        localStorage.setItem('dictCompound', false);
        console.log("enlish")
    } 

}

function selectPlastics() {

    scelectedCompound = namesPlastics;
    window.location.href = "exam.html";
    localStorage.setItem('scelectedCompound', JSON.stringify(scelectedCompound));
    localStorage.setItem('folder', folders[7]);
    var language = localStorage.getItem("language")
    
    if (language == "cz"){
        localStorage.setItem('dictCompound', JSON.stringify(czPlastics));
        console.log("czech")
    }

    if (language == "en")  {
        localStorage.setItem('dictCompound', false);
        console.log("enlish")
    } 

}


function selectCarbonylAlcohols() {

    scelectedCompound = namesCarbonylAlcohols;
    window.location.href = "exam.html";
    localStorage.setItem('scelectedCompound', JSON.stringify(scelectedCompound));
    localStorage.setItem('folder', folders[8]);
    var language = localStorage.getItem("language")
    
    if (language == "cz"){
        localStorage.setItem('dictCompound', JSON.stringify(czCarbonylAlcohols));
        console.log("czech")
    }

    if (language == "en")  {
        localStorage.setItem('dictCompound', false);
        console.log("enlish")
    } 

}


function anullPoints() {
    localStorage.setItem('points', 0);
    localStorage.setItem('pointsNeg', 0);
    
    if(localStorage.getItem("language") == "en"){
        english()
    }
    else {
        czech()
    }
    
}

function czech() {
    localStorage.setItem('language', "cz");
    document.getElementById("select_cards").innerHTML = "VYBER KARTIČKY A PROCVIČUJ TRIVIÁLNÍ NÁZVY";
    document.getElementById("1-box").innerHTML = "AMINOKYSELINY";
    document.getElementById("2-box").innerHTML = "KARBOXYLOVÉ KYSELINY";
    document.getElementById("3-box").innerHTML = "DIKARBOXYLOVÉ KYSELINY";
    document.getElementById("4-box").innerHTML = "HETEROCYKLY";
    document.getElementById("5-box").innerHTML = "ARENY A JEJICH DERIVÁTY";
    document.getElementById("6-box").innerHTML = "SACHARIDY";
    document.getElementById("7-box").innerHTML = "OXO A HYDROXY KYSELINY";
    document.getElementById("8-box").innerHTML = "SYNTETICKÉ POLYMERY";
    document.getElementById("9-box").innerHTML = "ALKOHOLY A KARBONYLY";
    document.getElementById("en").style.opacity = "0.5";
    document.getElementById("cz").style.opacity = "1";

    //numbers of cards

    document.getElementById("1-num_cards").innerHTML = namesAminoacids.length.toString() + " kartiček";
    document.getElementById("2-num_cards").innerHTML = namesCarboxylicacids.length.toString() + " kartiček";
    document.getElementById("3-num_cards").innerHTML = namesDicarboxylicacids.length.toString() + " kartiček";
    document.getElementById("4-num_cards").innerHTML = namesHeterocycles.length.toString() + " kartiček";
    document.getElementById("5-num_cards").innerHTML = namesAromaticDerivates.length.toString() + " kartiček";
    document.getElementById("6-num_cards").innerHTML = namesSacharides.length.toString() + " kartiček";
    document.getElementById("7-num_cards").innerHTML = namesOxoHydroxoAcids.length.toString() + " kartiček";
    document.getElementById("8-num_cards").innerHTML = namesPlastics.length.toString() + " kartiček";
    document.getElementById("9-num_cards").innerHTML = namesCarbonylAlcohols.length.toString() + " kartiček";
    

}

function english() {
    localStorage.setItem('language', "en");
    document.getElementById("select_cards").innerHTML = "CHOOSE FLASHCARDS AND PRACTICE TRIVIAL NAMES";
    document.getElementById("1-box").innerHTML = "AMINO ACIDS";
    document.getElementById("2-box").innerHTML = "CARBOXYLIC ACIDS";
    document.getElementById("3-box").innerHTML = "DICARBOXYLIC ACIDS";
    document.getElementById("4-box").innerHTML = "HETEROCYCLES";
    document.getElementById("5-box").innerHTML = "ARENES + ITS DERIVATIVES";
    document.getElementById("6-box").innerHTML = "CARBOHYDRATES";
    document.getElementById("7-box").innerHTML = "KETO + HYDROXY ACIDS";
    document.getElementById("8-box").innerHTML = "SYNTHETIC POLYMERS";
    document.getElementById("9-box").innerHTML = "ALCOHOLS + CARBONYLS";
    document.getElementById("cz").style.opacity = "0.5";
    document.getElementById("en").style.opacity = "1";

        //numbers of cards

    document.getElementById("1-num_cards").innerHTML = namesAminoacids.length.toString() + " cards";
    document.getElementById("2-num_cards").innerHTML = namesCarboxylicacids.length.toString() + " cards";
    document.getElementById("3-num_cards").innerHTML = namesDicarboxylicacids.length.toString() + " cards";
    document.getElementById("4-num_cards").innerHTML = namesHeterocycles.length.toString() + " cards";
    document.getElementById("5-num_cards").innerHTML = namesAromaticDerivates.length.toString() + " cards";
    document.getElementById("6-num_cards").innerHTML = namesSacharides.length.toString() + " cards";
    document.getElementById("7-num_cards").innerHTML = namesOxoHydroxoAcids.length.toString() + " cards";
    document.getElementById("8-num_cards").innerHTML = namesPlastics.length.toString() + " cards";
    document.getElementById("9-num_cards").innerHTML = namesCarbonylAlcohols.length.toString() + " cards";
    
}
