function filterOut(water, filter) {
    return water.filter(item => !filter.includes(item));
}

function filterWater() {
    const water = ["salt", "dirt", "calcite", "uranium", "rubber"];
    const filter = ["uranium", "dirt"];
    const filteredWater = filterOut(water, filter);
    const result = document.getElementById('result');
    result.textContent = `Filtered Water: ${filteredWater.join(', ')}`;
}
