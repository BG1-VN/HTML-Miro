miro.onReady(() => {
    // Add an event listener to the button
    document.getElementById("open-streamlit").addEventListener("click", () => {
        // Open the Streamlit app inside a modal in Miro
        miro.board.ui.openModal({
            url: "https://mirotommd.streamlit.app/",  // Replace with your Streamlit URL
            width: 800,  // Adjust modal width
            height: 600, // Adjust modal height
        });
    });
});
