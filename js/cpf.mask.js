const cpf_mask = (cpfValue) => {
  return cpfValue = cpfValue.replace(/\D/g, '') 
  .replace(/(\d{3})(\d)/, '$1.$2') 
  .replace(/(\d{3})(\d)/, '$1.$2')
  .replace(/(\d{3})(\d{1,2})/, '$1-$2')
  .replace(/(-\d{2})\d+?$/, '$1')
}

export default cpf_mask;

