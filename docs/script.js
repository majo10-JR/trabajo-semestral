
(function(vegaEmbed) {
    const spec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json",
        "data": {
            "values": [
                {"Region": "Asia Oriental y el Pacífico", "Porcentaje": 14.0},
                {"Region": "Asia del sur", "Porcentaje": 7.1},
                {"Region": "Latinoamérica y el Caribe", "Porcentaje": 20.1},
                {"Region": "África Subsahariana", "Porcentaje": 9.0},
                {"Region": "África del Norte y Medio Oriente", "Porcentaje": 12.3}
            ]
        },
        "mark": {"type": "bar", "color": "#f36b39"},
        "encoding": {
            "x": {"field": "Region", "type": "nominal", "title": "Región"},
            "y": {
                "field": "Porcentaje",
                "type": "quantitative",
                "title": "Porcentaje de Emisiones de Bolsas de Plástico"
            },
            "tooltip": [
                {"field": "Region", "type": "nominal"},
                {"field": "Porcentaje", "type": "quantitative"}
            ]
        },
        "title": "Porcentaje de Emisiones de Bolsas de Plástico por Región",
        "width": 600,
        "height": 400
    };

    vegaEmbed("#vis", spec).catch(console.error);
})(vegaEmbed);

// FAQ Toggle Functionality
document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        // Toggle the visibility of the answer
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});