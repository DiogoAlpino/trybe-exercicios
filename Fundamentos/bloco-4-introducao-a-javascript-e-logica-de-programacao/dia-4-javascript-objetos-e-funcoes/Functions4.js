function maior(nomes) {
    let maiorNome = nomes[0];
    for (let key in nomes) {
      if (maiorNome.length < nomes[key].length) {
        maiorNome = nomes[key];
      }
    }
  
    return maiorNome;
  }
  
  console.log(maior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); 