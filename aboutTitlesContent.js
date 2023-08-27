const linkNames = document.getElementsByClassName("aboutLinks");
const contentNames = document.getElementsByClassName("aboutTitlesContent");
function openAboutTitlesContent(event,titleName) {

    
    for (let linkName of linkNames) {
        linkName.classList.remove("IsActive");
    }
    for (let contentName of contentNames) {
        contentName.classList.remove("IsActive");
    }
    const clickedElement = event.target;
    clickedElement.classList.add("IsActive");
    contentId = document.getElementById(titleName);
    contentId.classList.add("IsActive");
 
}

