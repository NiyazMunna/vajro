let opacity = [];
for (var i = 1; i <= 8; i++) {
    opacity.push(document.getElementById(`op-${i}`));
}
const hoverAnimation = (element) => {
    opacity.map((a) => {
        if (a.id != element.id) {
            a.style.opacity = 0.5
        }
        else a.style.opacity = 1
    });
};
const backToNomral = (element) => {
    opacity.map((a) => {
        a.style.opacity = 1
    });
};
