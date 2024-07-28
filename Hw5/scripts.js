function calculateResistance() {
    const band1 = parseInt(document.getElementById('band1').value);
    const band2 = parseInt(document.getElementById('band2').value);
    const multiplier = parseFloat(document.getElementById('multiplier').value);
    const tolerance = parseInt(document.getElementById('tolerance').value);
    const resistanceValue = ((band1 * 10) + band2) * multiplier;

    document.getElementById('resistanceValue').innerText = `${resistanceValue} Ω ±${tolerance}%`;
}
