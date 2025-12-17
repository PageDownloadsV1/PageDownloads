/* ===== CONFIG ===== */
const FILE_NAME = "MEnu.png";
const FILE_PATH = "MEnu.png";
/* ================== */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("downloadBtn").addEventListener("click", () => {
    const a = document.createElement("a");
    a.href = FILE_PATH;
    a.download = FILE_NAME;
    a.click();
  });
});
