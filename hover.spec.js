describe('Hover element', () => {
    it("should not have hovered styles by default", async () => {
        document.body.innerHTML = `
            <style>
                .hoverable {
                    color: red;
                }
                
                .hoverable:hover {
                    color: blue;
                }
            </style>
            <div id="hoverable" class="hoverable">I will change color on hover</div>
        `;
        const hoverable = document.getElementById("hoverable");

        expect(getComputedStyle(hoverable).color).toBe("red");
    });
});