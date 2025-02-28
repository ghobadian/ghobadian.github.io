document.addEventListener("DOMContentLoaded", function () {
    // Find all <pre> elements containing <code>
    document.querySelectorAll("pre code").forEach((codeBlock) => {
        const pre = codeBlock.parentElement;
        const wrapper = document.createElement("div");
        wrapper.className = "code-wrapper";

        // Create the copy button
        const copyButton = document.createElement("button");
        copyButton.className = "copy-button";
        copyButton.textContent = "Copy";

        // Insert wrapper and button
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);
        wrapper.appendChild(copyButton);

        // Copy functionality
        copyButton.addEventListener("click", () => {
            const text = codeBlock.textContent;
            navigator.clipboard.writeText(text).then(() => {
                copyButton.textContent = "Copied!";
                setTimeout(() => {
                    copyButton.textContent = "Copy";
                }, 2000); // Reset after 2 seconds
            }).catch((err) => {
                console.error("Failed to copy: ", err);
            });
        });
    });
});