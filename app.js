miro.onReady(() => {
    // When the button is clicked, open the Streamlit app in a modal
    document.getElementById("open-streamlit").addEventListener("click", () => {
        miro.board.ui.openModal({
            url: "https://miro-board-exporter-teste.streamlit.app/",  // Your Streamlit app URL
            width: 800,  // Adjust modal width
            height: 600, // Adjust modal height
        });
    });
});
