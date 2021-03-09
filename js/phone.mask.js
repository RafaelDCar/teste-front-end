const phone_mask = (phone) => {
  return phone = phone.replace(/^(\d\d)(\d{5})(\d{4}).*/,"($1) $2-$3")
}

export default phone_mask;
