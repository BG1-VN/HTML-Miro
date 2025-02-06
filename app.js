miro.onReady(() => {
    // When the button is clicked, open the Streamlit app in a modal
    document.getElementById("open-streamlit").addEventListener("click", () => {
        miro.board.ui.openModal({
            url: "https://miro-board-exporter-teste.streamlit.app/",  // Your Streamlit app URL
            width: 800,  // Modal width
            height: 600, // Modal height
        }).then(function(modal) {
            console.log("Streamlit modal opened");
        }).catch(function(error) {
            console.error("Error opening modal:", error);
        });
    });
});
