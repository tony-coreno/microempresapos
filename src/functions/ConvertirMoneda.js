
const convertirMoneda = (total = 0) => {
    return new Intl.NumberFormat(
        'en-US',
        {style: 'currency', currency: 'USD', minimumFractionDigits: 2}
    ).format(total);
}

export default convertirMoneda;
